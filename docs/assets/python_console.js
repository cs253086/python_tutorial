(() => {
  "use strict";

  const state = {
    pyodide: null,
    loadingPromise: null,
  };

  function setText(el, value) {
    el.textContent = value;
  }

  function appendLine(lines, value) {
    if (value === null || value === undefined) {
      return;
    }
    const text = String(value);
    if (!text) {
      return;
    }
    lines.push(text);
  }

  async function loadRuntime(statusEl) {
    if (state.pyodide) {
      return state.pyodide;
    }
    if (!window.loadPyodide) {
      throw new Error("Pyodide runtime failed to load. Check internet connection.");
    }
    if (!state.loadingPromise) {
      setText(statusEl, "Python runtime: loading...");
      state.loadingPromise = window
        .loadPyodide()
        .then((runtime) => {
          state.pyodide = runtime;
          return runtime;
        })
        .catch((err) => {
          state.loadingPromise = null;
          throw err;
        });
    }
    return state.loadingPromise;
  }

  async function runConsole(consoleEl) {
    const editor = consoleEl.querySelector(".console-editor");
    const output = consoleEl.querySelector(".console-output");
    const status = consoleEl.querySelector(".console-status");
    const runBtn = consoleEl.querySelector(".console-run");
    const lines = [];

    runBtn.disabled = true;
    setText(output, "");
    setText(status, "Python runtime: preparing...");

    try {
      const pyodide = await loadRuntime(status);

      pyodide.setStdout({
        batched: (value) => appendLine(lines, value),
      });
      pyodide.setStderr({
        batched: (value) => appendLine(lines, "ERROR: " + value),
      });

      setText(status, "Python runtime: running code...");
      await pyodide.runPythonAsync(editor.value);

      if (lines.length === 0) {
        lines.push("(No output)");
      }
      setText(output, lines.join("\n"));
      setText(status, "Python runtime: ready");
    } catch (error) {
      const message = error && error.message ? error.message : String(error);
      setText(output, "Runtime error:\n" + message);
      setText(status, "Python runtime: error");
    } finally {
      runBtn.disabled = false;
    }
  }

  function resetConsole(consoleEl) {
    const editor = consoleEl.querySelector(".console-editor");
    const starter = consoleEl.querySelector(".console-starter");
    const output = consoleEl.querySelector(".console-output");
    const status = consoleEl.querySelector(".console-status");

    editor.value = starter.value;
    setText(output, "");
    setText(status, "Python runtime: ready");
  }

  function wireConsole(consoleEl) {
    const runBtn = consoleEl.querySelector(".console-run");
    const resetBtn = consoleEl.querySelector(".console-reset");

    runBtn.addEventListener("click", () => {
      runConsole(consoleEl);
    });
    resetBtn.addEventListener("click", () => {
      resetConsole(consoleEl);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const consoles = document.querySelectorAll(".py-console");
    consoles.forEach((consoleEl) => wireConsole(consoleEl));
  });
})();
