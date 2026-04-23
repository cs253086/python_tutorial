/*
 * In-page Python runner using Skulpt.
 *
 * Why Skulpt instead of Pyodide? Skulpt has the `turtle` module built in
 * and renders it to a DOM element we control. Pyodide drops turtle due
 * to browser limitations, which blocks Classes 6-12.
 *
 * Two modes per page:
 *   1. Cumulative mode  — hidden <pre class="py-starter"> on the page.
 *                         We build one BIG editor pre-filled with that
 *                         starter code, and other code blocks become
 *                         read-only "Add this" examples.
 *   2. Per-block mode   — no starter. Each python code block gets its
 *                         own example panel + empty editor + Run button.
 *
 * Edits autosave to localStorage.
 * Output text goes to a dark output pane.
 * Turtle drawings render into a light canvas div below the output.
 */
(function () {
  "use strict";

  // ---------- Skulpt helpers ----------

  function skulptLoaded() {
    return typeof Sk !== "undefined" && Sk && Sk.builtinFiles;
  }

  function runPython(code, ctx) {
    Sk.configure({
      output: (text) => ctx.onStdout(text),
      read: (name) => {
        if (
          Sk.builtinFiles === undefined ||
          Sk.builtinFiles["files"][name] === undefined
        ) {
          throw "File not found: '" + name + "'";
        }
        return Sk.builtinFiles["files"][name];
      },
      __future__: Sk.python3,
      inputfun: (prompt) =>
        new Promise((resolve) => {
          const answer = window.prompt(prompt || "Your answer:");
          resolve(answer === null ? "" : answer);
        }),
      inputfunTakesPrompt: true,
      execLimit: null, // let long-running turtle games breathe
      yieldLimit: 100, // yield to the browser often
    });
    Sk.TurtleGraphics = {
      target: ctx.turtleTargetId,
      width: 500,
      height: 500,
      assets: {},
    };
    return Sk.misceval.asyncToPromise(() =>
      Sk.importMainWithBody("<stdin>", false, code, true)
    );
  }

  function formatSkulptError(err) {
    if (err && err.toString) return err.toString();
    return String(err);
  }

  // ---------- Utilities ----------

  let uidCounter = 0;
  function uid(prefix) {
    uidCounter += 1;
    return prefix + "-" + Date.now().toString(36) + "-" + uidCounter;
  }

  function autosize(ta) {
    const grow = () => {
      ta.style.height = "auto";
      ta.style.height = Math.min(ta.scrollHeight + 4, 700) + "px";
    };
    ta.addEventListener("input", grow);
    setTimeout(grow, 0);
  }

  function showBanner(msg, color) {
    const bar = document.createElement("div");
    bar.style.cssText =
      "background:" + color + ";color:#fff;padding:8px 12px;" +
      "font:600 13px system-ui,sans-serif;text-align:center;" +
      "position:sticky;top:0;z-index:20;";
    bar.textContent = msg;
    document.body.prepend(bar);
  }

  // ---------- DOM builders ----------

  function buildToolbar() {
    const toolbar = document.createElement("div");
    toolbar.className = "py-runner-toolbar";
    return toolbar;
  }

  function buildButton(className, text, title) {
    const btn = document.createElement("button");
    btn.className = className;
    btn.type = "button";
    btn.textContent = text;
    if (title) btn.title = title;
    return btn;
  }

  function buildOutputAndCanvas() {
    const output = document.createElement("pre");
    output.className = "py-runner-output";
    const canvas = document.createElement("div");
    canvas.className = "py-turtle-canvas";
    canvas.id = uid("turtle");
    return { output, canvas };
  }

  // ---------- Run handler ----------

  function attachRunHandler({ runBtn, editor, output, canvas, status }) {
    runBtn.addEventListener("click", async () => {
      if (!skulptLoaded()) {
        output.classList.add("py-runner-error");
        output.textContent =
          "Python runtime didn't load. Reload the page and try again.";
        return;
      }
      runBtn.disabled = true;
      output.classList.remove("py-runner-error");
      output.textContent = "";
      canvas.innerHTML = ""; // clear previous drawings
      status.textContent = "Running…";

      let buf = "";
      const flush = () => { output.textContent = buf || "(no output)"; };

      try {
        await runPython(editor.value, {
          turtleTargetId: canvas.id,
          onStdout: (text) => { buf += text; flush(); },
        });
        if (!buf.trim()) output.textContent = "(no output)";
        status.textContent = "Done ✅";
      } catch (err) {
        output.classList.add("py-runner-error");
        output.textContent =
          (buf ? buf + "\n" : "") + formatSkulptError(err);
        status.textContent = "Error ⚠️";
      } finally {
        runBtn.disabled = false;
      }
    });
  }

  // ---------- Per-block runner ----------

  function buildRunner(codeEl, index) {
    const pre = codeEl.closest("pre");
    if (!pre) return;
    if (pre.classList.contains("py-runner-static")) return;

    const originalCode = codeEl.textContent.replace(/\n$/, "");
    const lineCount = originalCode.split("\n").length;
    // Teaching-step blocks are short; start the editor empty so the kid
    // actually types. Long blocks (the "your whole file so far" snapshots
    // that sometimes sneak in) get pre-filled. Per-block editors are
    // ephemeral — no localStorage — so reload always shows the default
    // state and the kid isn't surprised by yesterday's leftover.
    const startEmpty = lineCount <= 18;

    // Wrap the original pre as a read-only Example panel.
    const example = document.createElement("div");
    example.className = "py-example";
    const exampleLabel = document.createElement("div");
    exampleLabel.className = "py-panel-label";
    exampleLabel.textContent = startEmpty
      ? "📖 Example — type this into the box below"
      : "📖 Your code so far";
    pre.classList.add("py-example-code");
    pre.parentNode.insertBefore(example, pre);
    example.appendChild(exampleLabel);
    example.appendChild(pre);

    // Build the editor container.
    const container = document.createElement("div");
    container.className = "py-runner";

    const editorLabel = document.createElement("div");
    editorLabel.className = "py-panel-label py-panel-label-edit";
    editorLabel.textContent = "✏️ Your code:";

    const editor = document.createElement("textarea");
    editor.className = "py-runner-editor";
    editor.spellcheck = false;
    editor.autocapitalize = "off";
    editor.autocomplete = "off";
    editor.setAttribute("autocorrect", "off");
    editor.placeholder = startEmpty
      ? "Type the code from the example above ↑"
      : "";
    editor.value = startEmpty ? "" : originalCode;

    const toolbar = buildToolbar();
    const runBtn = buildButton("py-runner-run", "▶ Run");
    const useExampleBtn = buildButton(
      "py-runner-copy",
      "💡 Solution",
      "Fill in the answer for this example"
    );
    const resetBtn = buildButton("py-runner-reset", "↺ Clear", "Empty the editor");
    const status = document.createElement("span");
    status.className = "py-runner-status";

    const { output, canvas } = buildOutputAndCanvas();

    useExampleBtn.addEventListener("click", () => {
      editor.value = originalCode;
      editor.dispatchEvent(new Event("input"));
      editor.focus();
    });
    resetBtn.addEventListener("click", () => {
      editor.value = "";
      editor.dispatchEvent(new Event("input"));
      output.textContent = "";
      canvas.innerHTML = "";
      status.textContent = "";
    });
    attachRunHandler({ runBtn, editor, output, canvas, status });

    toolbar.appendChild(runBtn);
    toolbar.appendChild(useExampleBtn);
    toolbar.appendChild(resetBtn);
    toolbar.appendChild(status);

    container.appendChild(editorLabel);
    container.appendChild(editor);
    container.appendChild(toolbar);
    container.appendChild(output);
    container.appendChild(canvas);

    example.parentNode.insertBefore(container, example.nextSibling);
    autosize(editor);
  }

  // ---------- Cumulative main-editor mode ----------

  // Markers the kid's starter code uses to indicate where new code goes.
  // The Solution button replaces everything between these markers (inclusive
  // of the marker lines themselves is a design choice — here we KEEP the
  // markers and replace only the blank/placeholder region between them).
  const MARKER_START = /^[ \t]*#\s*(?:===\s*)?👇[^\n]*$/m;
  const MARKER_END   = /^[ \t]*#\s*(?:===\s*)?👆[^\n]*$/m;

  function replaceBetweenMarkers(editorValue, solution) {
    const startMatch = editorValue.match(MARKER_START);
    const endMatch   = editorValue.match(MARKER_END);
    if (!startMatch || !endMatch) return null;
    const startIdx = startMatch.index + startMatch[0].length;
    const endIdx   = endMatch.index;
    if (endIdx <= startIdx) return null;
    const before = editorValue.substring(0, startIdx);
    const after  = editorValue.substring(endIdx);
    return before + "\n" + solution.trim() + "\n" + after;
  }

  function buildMainEditor(starterEl) {
    const starterCode = starterEl.textContent.replace(/^\n+|\n+$/g, "");
    const solutionEl = document.querySelector(".py-solution");
    const solutionCode = solutionEl
      ? solutionEl.textContent.replace(/^\n+|\n+$/g, "")
      : null;
    if (solutionEl) solutionEl.remove();

    const key = "pymain:" + location.pathname;
    const saved = (() => {
      try { return localStorage.getItem(key); } catch (_) { return null; }
    })();

    const container = document.createElement("div");
    container.className = "py-main";

    const label = document.createElement("div");
    label.className = "py-panel-label py-panel-label-main";
    label.textContent = solutionCode
      ? "🐍 Your snake.py — type your new code between the 👇 markers (or tap 💡 Solution)"
      : "🐍 Your snake.py — edit below, then tap ▶ Run";

    const editor = document.createElement("textarea");
    editor.className = "py-runner-editor py-main-editor";
    editor.spellcheck = false;
    editor.autocapitalize = "off";
    editor.autocomplete = "off";
    editor.setAttribute("autocorrect", "off");
    editor.value = saved != null ? saved : starterCode;
    editor.addEventListener("input", () => {
      try { localStorage.setItem(key, editor.value); } catch (_) {}
    });

    const toolbar = buildToolbar();
    const runBtn = buildButton("py-runner-run", "▶ Run");
    const solutionBtn = buildButton(
      "py-runner-copy",
      "💡 Solution",
      "Fill in the new code between the markers"
    );
    const resetBtn = buildButton(
      "py-runner-reset",
      "↺ Reset to start",
      "Restore the step's starting code"
    );
    const status = document.createElement("span");
    status.className = "py-runner-status";

    if (!solutionCode) solutionBtn.style.display = "none";

    const { output, canvas } = buildOutputAndCanvas();

    solutionBtn.addEventListener("click", () => {
      if (!solutionCode) return;
      const filled = replaceBetweenMarkers(editor.value, solutionCode);
      editor.value = filled != null
        ? filled
        : replaceBetweenMarkers(starterCode, solutionCode) || starterCode;
      try { localStorage.setItem(key, editor.value); } catch (_) {}
      editor.dispatchEvent(new Event("input"));
    });

    resetBtn.addEventListener("click", () => {
      if (
        !confirm(
          "Reset the editor to this step's starting code? Your edits will be lost."
        )
      )
        return;
      editor.value = starterCode;
      try { localStorage.setItem(key, editor.value); } catch (_) {}
      editor.dispatchEvent(new Event("input"));
      output.textContent = "";
      canvas.innerHTML = "";
      status.textContent = "";
    });
    attachRunHandler({ runBtn, editor, output, canvas, status });

    toolbar.appendChild(runBtn);
    toolbar.appendChild(solutionBtn);
    toolbar.appendChild(resetBtn);
    toolbar.appendChild(status);

    container.appendChild(label);
    container.appendChild(editor);
    container.appendChild(toolbar);
    container.appendChild(output);
    container.appendChild(canvas);

    starterEl.parentNode.replaceChild(container, starterEl);
    autosize(editor);
  }

  function renderAsReadOnlyExample(codeEl) {
    const pre = codeEl.closest("pre");
    if (!pre) return;
    if (pre.classList.contains("py-runner-static")) return;
    if (pre.classList.contains("py-example-code")) return;

    const example = document.createElement("div");
    example.className = "py-example py-example-standalone";
    const exampleLabel = document.createElement("div");
    exampleLabel.className = "py-panel-label";
    exampleLabel.textContent = "📖 Add this to your snake.py";
    pre.classList.add("py-example-code");
    pre.parentNode.insertBefore(example, pre);
    example.appendChild(exampleLabel);
    example.appendChild(pre);
  }

  // ---------- Block discovery ----------

  function findPythonBlocks() {
    const seen = new Set();
    const out = [];
    const push = (codeEl) => {
      if (!codeEl || seen.has(codeEl)) return;
      const pre = codeEl.closest("pre");
      if (!pre) return;
      if (pre.classList.contains("py-runner-static")) return;
      if (pre.classList.contains("py-example-code")) return;
      seen.add(codeEl);
      out.push(codeEl);
    };
    document.querySelectorAll("pre > code.language-python").forEach(push);
    document
      .querySelectorAll(
        "div.language-python pre > code, div.highlight pre > code"
      )
      .forEach(push);
    return out;
  }

  // ---------- Mount ----------

  function mount() {
    const starter = document.querySelector(".py-starter");
    const blocks = findPythonBlocks();
    console.log(
      "[py-runner] Skulpt=" + skulptLoaded() +
      " starter=" + !!starter +
      " blocks=" + blocks.length
    );

    if (starter) {
      buildMainEditor(starter);
      findPythonBlocks().forEach(renderAsReadOnlyExample);
      return;
    }
    blocks.forEach((el, i) => buildRunner(el, i));
  }

  function whenReady(cb) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", cb);
    } else {
      cb();
    }
  }

  whenReady(() => {
    // Small retry loop: Skulpt is loaded via synchronous <script> tags but
    // if a CDN hiccups we'd rather show a friendly message than silently
    // leave static code blocks.
    let tries = 0;
    const tick = () => {
      if (skulptLoaded()) {
        mount();
        return;
      }
      tries += 1;
      if (tries > 40) {
        showBanner(
          "⚠️ Python runtime didn't load. Check your connection and reload.",
          "#b42318"
        );
        return;
      }
      setTimeout(tick, 150);
    };
    tick();
  });
})();
