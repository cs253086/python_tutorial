/*
 * In-page Python runner using Pyodide.
 *
 * For every <pre><code class="language-python"> block in the page:
 *   - Swap it for an editable textarea + Run button + output pane.
 *   - Persist edits to localStorage so they survive reloads.
 *   - Lazy-load Pyodide on the first Run click.
 */
(function () {
  "use strict";

  let pyodidePromise = null;

  function ensurePyodide(statusEl) {
    if (pyodidePromise) return pyodidePromise;
    if (statusEl) statusEl.textContent = "Loading Python (first time only)…";
    pyodidePromise = loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/",
    });
    return pyodidePromise;
  }

  function storageKey(index) {
    return "pyrun:" + location.pathname + ":" + index;
  }

  function autosize(ta) {
    const grow = () => {
      ta.style.height = "auto";
      ta.style.height = Math.min(ta.scrollHeight + 4, 700) + "px";
    };
    ta.addEventListener("input", grow);
    setTimeout(grow, 0);
  }

  function buildRunner(codeEl, index) {
    const pre = codeEl.parentElement;
    if (!pre || pre.tagName !== "PRE") return;
    if (pre.classList.contains("py-runner-static")) return;

    const originalCode = codeEl.textContent.replace(/\n$/, "");
    const key = storageKey(index);
    const saved = (() => {
      try { return localStorage.getItem(key); } catch (_) { return null; }
    })();

    const container = document.createElement("div");
    container.className = "py-runner";

    const editor = document.createElement("textarea");
    editor.className = "py-runner-editor";
    editor.spellcheck = false;
    editor.autocapitalize = "off";
    editor.autocomplete = "off";
    editor.setAttribute("autocorrect", "off");
    editor.value = saved != null ? saved : originalCode;

    editor.addEventListener("input", () => {
      try { localStorage.setItem(key, editor.value); } catch (_) {}
    });

    const toolbar = document.createElement("div");
    toolbar.className = "py-runner-toolbar";

    const runBtn = document.createElement("button");
    runBtn.className = "py-runner-run";
    runBtn.type = "button";
    runBtn.textContent = "▶ Run";

    const resetBtn = document.createElement("button");
    resetBtn.className = "py-runner-reset";
    resetBtn.type = "button";
    resetBtn.title = "Restore the original example";
    resetBtn.textContent = "↺ Reset";

    const status = document.createElement("span");
    status.className = "py-runner-status";

    const output = document.createElement("pre");
    output.className = "py-runner-output";

    resetBtn.addEventListener("click", () => {
      editor.value = originalCode;
      try { localStorage.removeItem(key); } catch (_) {}
      editor.dispatchEvent(new Event("input"));
      output.textContent = "";
      status.textContent = "";
    });

    runBtn.addEventListener("click", async () => {
      runBtn.disabled = true;
      output.classList.remove("py-runner-error");
      output.textContent = "";
      status.textContent = "";

      let pyodide;
      try {
        pyodide = await ensurePyodide(status);
      } catch (err) {
        status.textContent = "";
        output.classList.add("py-runner-error");
        output.textContent =
          "Couldn't load Python. Check your connection.\n" + err;
        runBtn.disabled = false;
        return;
      }

      status.textContent = "Running…";

      let buf = "";
      const flush = () => { output.textContent = buf || "(no output)"; };
      pyodide.setStdout({ batched: (s) => { buf += s + "\n"; flush(); } });
      pyodide.setStderr({ batched: (s) => { buf += s + "\n"; flush(); } });
      pyodide.setStdin({
        stdin: () => {
          const answer = window.prompt("Your answer:");
          return answer === null ? "" : answer;
        },
      });

      try {
        await pyodide.runPythonAsync(editor.value);
        if (!buf.trim()) output.textContent = "(no output)";
        status.textContent = "Done ✅";
      } catch (err) {
        output.classList.add("py-runner-error");
        output.textContent = (buf ? buf + "\n" : "") + String(err);
        status.textContent = "Error ⚠️";
      } finally {
        runBtn.disabled = false;
      }
    });

    toolbar.appendChild(runBtn);
    toolbar.appendChild(resetBtn);
    toolbar.appendChild(status);

    container.appendChild(editor);
    container.appendChild(toolbar);
    container.appendChild(output);

    pre.parentElement.replaceChild(container, pre);
    autosize(editor);
  }

  function findPythonBlocks() {
    // Support both plain kramdown (<pre><code class="language-python">)
    // and Rouge/highlight wrappers (<div class="language-python"><pre><code>).
    const seen = new Set();
    const out = [];
    const push = (codeEl) => {
      if (!codeEl || seen.has(codeEl)) return;
      const pre = codeEl.closest("pre");
      if (!pre || pre.classList.contains("py-runner-static")) return;
      seen.add(codeEl);
      out.push(codeEl);
    };
    document
      .querySelectorAll('pre > code.language-python')
      .forEach(push);
    document
      .querySelectorAll('div.language-python pre > code, div.highlight pre > code')
      .forEach(push);
    return out;
  }

  function showBanner(msg, color) {
    const bar = document.createElement("div");
    bar.className = "py-runner-banner";
    bar.style.cssText =
      "background:" + color + ";color:#fff;padding:8px 12px;" +
      "font:600 13px system-ui,sans-serif;text-align:center;" +
      "position:sticky;top:0;z-index:20;";
    bar.textContent = msg;
    document.body.prepend(bar);
  }

  function mount() {
    const blocks = findPythonBlocks();
    console.log("[py-runner] found " + blocks.length + " python code blocks");
    if (typeof loadPyodide !== "function") {
      showBanner(
        "⚠️ Pyodide script failed to load — reload the page or check your connection.",
        "#b42318"
      );
      return;
    }
    if (blocks.length === 0) {
      // Not a lesson page (e.g. landing page). Nothing to do.
      return;
    }
    blocks.forEach((el, i) => buildRunner(el, i));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
