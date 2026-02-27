(() => {
  "use strict";

  const scriptBase =
    (document.currentScript && document.currentScript.src.replace(/[^/]+$/, "")) || "";

  const state = {
    pyodide: null,
    loadingPromise: null,
    lastStdoutForPrompt: "",
    useWorker: typeof SharedArrayBuffer !== "undefined",
    worker: null,
    workerReady: null,
    sab: null,
    currentConsoleEl: null,
  };

  // Override builtins.input so input(prompt) passes the prompt to JS explicitly,
  // fixing wrong/missing prompt text (stdout lag). Run once when Pyodide loads.
  const INPUT_OVERRIDE_CODE = [
    "import builtins",
    "def _web_input(prompt=''):",
    "    from js import promptUser",
    "    s = promptUser(str(prompt))",
    "    if s is None: return ''",
    "    return str(s)",
    "builtins.input = _web_input",
  ].join("\n");

  const SAB_LENGTH_OFFSET = 4;
  const SAB_DATA_OFFSET = 8;
  const SAB_MAX_BYTES = 2048;
  const SAB_SIZE = 4096;

  function setText(el, value) {
    el.textContent = value;
  }

  function appendLine(lines, value) {
    if (value === null || value === undefined) return;
    const text = String(value);
    if (!text) return;
    lines.push(text);
  }

  function updateLastPromptFromChunk(value) {
    const linesInChunk = value.split("\n");
    for (const line of linesInChunk) {
      const trimmed = line.trim();
      const endsLikePrompt = /[\s?:]$/.test(line);
      const notPrintOutput = !/ moves |^Hello,|Starting lives:/i.test(trimmed);
      if (trimmed && endsLikePrompt && notPrintOutput) {
        state.lastStdoutForPrompt = trimmed;
      }
    }
  }

  function getWorkerUrl() {
    return scriptBase + "pyodide_worker.js";
  }

  function ensureWorker() {
    if (state.workerReady) return state.workerReady;
    if (!state.useWorker || !state.sab) return Promise.resolve(null);
    try {
      state.worker = new Worker(getWorkerUrl());
    } catch (err) {
      state.useWorker = false;
      return Promise.resolve(null);
    }
    const readyPromise = new Promise((resolve) => {
      state.worker.onmessage = (e) => {
        if (e.data.type === "ready") resolve(state.worker);
      };
      state.worker.postMessage({ sab: state.sab });
    });
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("worker timeout")), 8000)
    );
    state.workerReady = Promise.race([readyPromise, timeout]).catch(() => {
      state.useWorker = false;
      state.workerReady = null;
      return null;
    });
    return state.workerReady;
  }

  // Called by overridden input() in Python so the prompt string is passed explicitly.
  window.promptUser = function (message) {
    const value = window.prompt(message != null && message !== "" ? message : "Enter value:");
    return value !== null ? value : "";
  };

  async function loadRuntime(statusEl) {
    if (state.pyodide) return state.pyodide;
    if (!window.loadPyodide) {
      throw new Error("Pyodide runtime failed to load. Check internet connection.");
    }
    if (!state.loadingPromise) {
      setText(statusEl, "Python runtime: loading...");
      state.loadingPromise = window
        .loadPyodide({
          stdin: () => {
            const promptText = (state.lastStdoutForPrompt || "Enter value:").trim();
            const value = window.prompt(promptText || "Enter value:");
            return value !== null ? value + "\n" : "\n";
          },
        })
        .then(async (runtime) => {
          state.pyodide = runtime;
          await runtime.runPythonAsync(INPUT_OVERRIDE_CODE);
          return runtime;
        })
        .catch((err) => {
          state.loadingPromise = null;
          throw err;
        });
    }
    return state.loadingPromise;
  }

  function getStdinRow(consoleEl) {
    let row = consoleEl.querySelector(".console-stdin-row");
    if (!row) {
      row = document.createElement("div");
      row.className = "console-stdin-row";
      row.setAttribute("hidden", "");
      row.innerHTML =
        '<span class="console-stdin-prompt"></span><input type="text" class="console-stdin-input" autocomplete="off" />';
      const pre = consoleEl.querySelector(".console-output");
      pre.after(row);
    }
    return row;
  }

  function showStdinRow(consoleEl, onSubmit, promptText) {
    const row = getStdinRow(consoleEl);
    const promptSpan = row.querySelector(".console-stdin-prompt");
    const inputEl = row.querySelector(".console-stdin-input");
    const text = (promptText != null ? String(promptText) : (state.lastStdoutForPrompt || "").trim());
    promptSpan.textContent = text ? text + " " : "";
    inputEl.value = "";
    row.removeAttribute("hidden");
    inputEl.focus();

    function submit() {
      const value = inputEl.value;
      row.setAttribute("hidden", "");
      onSubmit(value);
    }

    inputEl.onkeydown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submit();
      }
    };
  }

  function sendStdinToWorker(value) {
    if (!state.sab) return;
    const enc = new TextEncoder().encode(value == null ? "" : String(value));
    const len = Math.min(enc.length, SAB_MAX_BYTES);
    const u8 = new Uint8Array(state.sab);
    const dv = new DataView(state.sab);
    dv.setUint32(SAB_LENGTH_OFFSET, len, true);
    u8.set(enc.subarray(0, len), SAB_DATA_OFFSET);
    new Int32Array(state.sab)[0] = 1;
    Atomics.notify(new Int32Array(state.sab), 0);
  }

  async function runConsoleWithWorker(consoleEl) {
    const editor = consoleEl.querySelector(".console-editor");
    const output = consoleEl.querySelector(".console-output");
    const status = consoleEl.querySelector(".console-status");
    const runBtn = consoleEl.querySelector(".console-run");
    const lines = [];

    runBtn.disabled = true;
    setText(output, "");
    setText(status, "Python runtime: loading...");
    state.lastStdoutForPrompt = "";
    state.currentConsoleEl = consoleEl;

    try {
      const worker = await ensureWorker();
      if (!worker) {
        return runConsoleMain(consoleEl);
      }
      setText(status, "Python runtime: running code...");

      const donePromise = new Promise((resolve, reject) => {
        state.worker.onmessage = (e) => {
          const d = e.data;
          if (d.type === "stdout") {
            appendLine(lines, d.value);
            updateLastPromptFromChunk(d.value);
            setText(output, lines.join("\n"));
          } else if (d.type === "stderr") {
            appendLine(lines, "ERROR: " + d.value);
            setText(output, lines.join("\n"));
          } else if (d.type === "stdin") {
            showStdinRow(consoleEl, (value) => sendStdinToWorker(value), d.prompt);
          } else if (d.type === "done") {
            if (lines.length === 0) lines.push("(No output)");
            setText(output, lines.join("\n"));
            setText(status, "Python runtime: ready");
            runBtn.disabled = false;
            state.currentConsoleEl = null;
            resolve();
          } else if (d.type === "error") {
            setText(output, "Runtime error:\n" + (d.message || "Unknown error"));
            setText(status, "Python runtime: error");
            runBtn.disabled = false;
            state.currentConsoleEl = null;
            reject(new Error(d.message));
          }
        };
      });

      state.worker.postMessage({ type: "run", code: editor.value });
      await donePromise;
    } catch (err) {
      const message = err && err.message ? err.message : String(err);
      setText(output, "Runtime error:\n" + message);
      setText(status, "Python runtime: error");
      runBtn.disabled = false;
      state.currentConsoleEl = null;
    }
  }

  async function runConsoleMain(consoleEl) {
    const editor = consoleEl.querySelector(".console-editor");
    const output = consoleEl.querySelector(".console-output");
    const status = consoleEl.querySelector(".console-status");
    const runBtn = consoleEl.querySelector(".console-run");
    const lines = [];

    runBtn.disabled = true;
    setText(output, "");
    setText(status, "Python runtime: preparing...");
    state.lastStdoutForPrompt = "";
    state.currentConsoleEl = consoleEl;

    try {
      const pyodide = await loadRuntime(status);

      pyodide.setStdout({
        batched: (value) => {
          appendLine(lines, value);
          updateLastPromptFromChunk(value);
        },
      });
      pyodide.setStderr({
        batched: (value) => appendLine(lines, "ERROR: " + value),
      });

      setText(status, "Python runtime: running code...");
      await pyodide.runPythonAsync(editor.value);

      if (lines.length === 0) lines.push("(No output)");
      setText(output, lines.join("\n"));
      setText(status, "Python runtime: ready");
    } catch (error) {
      const message = error && error.message ? error.message : String(error);
      setText(output, "Runtime error:\n" + message);
      setText(status, "Python runtime: error");
    } finally {
      runBtn.disabled = false;
      state.currentConsoleEl = null;
    }
  }

  async function runConsole(consoleEl) {
    if (state.useWorker && state.sab) {
      return runConsoleWithWorker(consoleEl);
    }
    return runConsoleMain(consoleEl);
  }

  function resetConsole(consoleEl) {
    const editor = consoleEl.querySelector(".console-editor");
    const starter = consoleEl.querySelector(".console-starter");
    const output = consoleEl.querySelector(".console-output");
    const status = consoleEl.querySelector(".console-status");
    const stdinRow = consoleEl.querySelector(".console-stdin-row");

    editor.value = starter.value;
    setText(output, "");
    setText(status, "Python runtime: ready");
    if (stdinRow) stdinRow.setAttribute("hidden", "");
  }

  function enableTabInEditor(editor) {
    editor.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;
      e.preventDefault();
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      const indent = "    ";
      const value = editor.value;
      editor.value = value.slice(0, start) + indent + value.slice(end);
      editor.selectionStart = editor.selectionEnd = start + indent.length;
    });
  }

  function wireConsole(consoleEl) {
    const editor = consoleEl.querySelector(".console-editor");
    const starter = consoleEl.querySelector(".console-starter");
    const runBtn = consoleEl.querySelector(".console-run");
    const resetBtn = consoleEl.querySelector(".console-reset");

    enableTabInEditor(editor);

    if (starter.value.trim() && !editor.value.trim()) {
      editor.value = starter.value;
    }

    if (state.useWorker && typeof SharedArrayBuffer !== "undefined") {
      try {
        state.sab = new SharedArrayBuffer(SAB_SIZE);
      } catch (_) {
        state.useWorker = false;
      }
    }

    runBtn.addEventListener("click", () => runConsole(consoleEl));
    resetBtn.addEventListener("click", () => resetConsole(consoleEl));
  }

  function disableCopyOnTutorialSnippets() {
    document.querySelectorAll(".content-layout .card pre").forEach((el) => {
      el.addEventListener("copy", (e) => e.preventDefault());
      el.addEventListener("contextmenu", (e) => e.preventDefault());
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const consoles = document.querySelectorAll(".py-console");
    consoles.forEach((consoleEl) => wireConsole(consoleEl));
    disableCopyOnTutorialSnippets();
  });
})();
