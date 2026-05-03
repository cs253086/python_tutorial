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

  // Tiny djb2-ish hash, just enough to detect "starter code has changed
  // since this user last saved" without pulling in a real hash library.
  function fingerprint(s) {
    let h = 5381;
    for (let i = 0; i < s.length; i += 1) {
      h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    }
    return h.toString(36);
  }

  function autosize(ta) {
    const grow = () => {
      ta.style.height = "auto";
      // No cap — for the Rally-X cumulative editor (~150 lines) capping
      // forces an internal scrollbar inside the textarea, while the line
      // gutter (sized to the wrap, not the textarea) overflows below it.
      // Letting the editor grow to its full content height keeps the
      // gutter and code in lock-step and lets the page scroll naturally.
      ta.style.height = (ta.scrollHeight + 4) + "px";
    };
    ta.addEventListener("input", grow);
    setTimeout(grow, 0);
  }

  // Wrap a textarea in a flex container with a left-side line-number gutter.
  // Returns the wrapper so callers can insert it where the textarea would have
  // gone. The gutter updates on every input/change and scrolls in sync with
  // the textarea so the numbers always line up. We also intercept Tab so it
  // inserts indentation instead of jumping focus to the next element.
  function attachLineNumbers(ta) {
    const wrap = document.createElement("div");
    wrap.className = "py-runner-edit-wrap";
    const gutter = document.createElement("div");
    gutter.className = "py-runner-gutter";
    gutter.setAttribute("aria-hidden", "true");
    wrap.appendChild(gutter);
    wrap.appendChild(ta);

    const refreshNumbers = () => {
      const lines = (ta.value || "").split("\n").length;
      let s = "";
      for (let i = 1; i <= Math.max(1, lines); i++) {
        s += i + (i < lines ? "\n" : "");
      }
      gutter.textContent = s;
    };
    const syncScroll = () => { gutter.scrollTop = ta.scrollTop; };

    ta.addEventListener("input", refreshNumbers);
    ta.addEventListener("scroll", syncScroll);
    enableTabIndent(ta);
    // Recompute once Skulpt or anything else mutates the value programmatically.
    setTimeout(refreshNumbers, 0);

    return wrap;
  }

  // Make Tab insert 4 spaces (Python's standard indent) at the cursor instead
  // of jumping focus. Shift+Tab outdents the current line. With a selection
  // spanning multiple lines, Tab indents each of those lines.
  function enableTabIndent(ta) {
    const INDENT = "    ";
    ta.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;
      e.preventDefault();
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const v = ta.value;

      // Find the start of the line that contains the cursor / selection start.
      const lineStart = v.lastIndexOf("\n", start - 1) + 1;

      if (e.shiftKey) {
        // Outdent: remove up to 4 leading spaces (or one tab) from the line.
        let head = v.substring(lineStart, lineStart + INDENT.length);
        let removed = 0;
        if (head === INDENT) removed = INDENT.length;
        else if (v.charAt(lineStart) === "\t") removed = 1;
        if (removed > 0) {
          ta.value = v.substring(0, lineStart) + v.substring(lineStart + removed);
          ta.selectionStart = Math.max(start - removed, lineStart);
          ta.selectionEnd = Math.max(end - removed, lineStart);
          ta.dispatchEvent(new Event("input", { bubbles: true }));
        }
        return;
      }

      if (start !== end && v.substring(start, end).indexOf("\n") !== -1) {
        // Multi-line selection: indent every line that starts in the range.
        const block = v.substring(lineStart, end);
        const indented = block.replace(/^/gm, INDENT);
        const added = indented.length - block.length;
        ta.value = v.substring(0, lineStart) + indented + v.substring(end);
        ta.selectionStart = start + INDENT.length;
        ta.selectionEnd = end + added;
        ta.dispatchEvent(new Event("input", { bubbles: true }));
        return;
      }

      // Plain insert at cursor.
      ta.value = v.substring(0, start) + INDENT + v.substring(end);
      ta.selectionStart = ta.selectionEnd = start + INDENT.length;
      ta.dispatchEvent(new Event("input", { bubbles: true }));
    });
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
    container.appendChild(attachLineNumbers(editor));
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

    const isRallyX = /\/rally-x\//.test(location.pathname);

    const key = "pymain:" + location.pathname;
    const fpKey = "pymain-fp:" + location.pathname;
    const starterFp = fingerprint(starterCode);
    const saved = (() => {
      try { return localStorage.getItem(key); } catch (_) { return null; }
    })();
    const savedFp = (() => {
      try { return localStorage.getItem(fpKey); } catch (_) { return null; }
    })();
    // True when the user has saved edits AND the underlying starter has
    // changed (or pre-dates the fingerprint and may be stale). Saves that
    // are byte-identical to the current starter never trigger the notice.
    const sourceUpdated =
      saved != null && saved !== starterCode && savedFp !== starterFp;

    const container = document.createElement("div");
    container.className = "py-main";

    const label = document.createElement("div");
    label.className = "py-panel-label py-panel-label-main";
    label.textContent = isRallyX
      ? "🏎️ Your rally_x.py — type your new code between 👇 markers, then tap ▶ Play"
      : (solutionCode
        ? "🐍 Your snake.py — type your new code between the 👇 markers (or tap 💡 Solution)"
        : "🐍 Your snake.py — edit below, then tap ▶ Run");

    const editor = document.createElement("textarea");
    editor.className = "py-runner-editor py-main-editor";
    editor.spellcheck = false;
    editor.autocapitalize = "off";
    editor.autocomplete = "off";
    editor.setAttribute("autocorrect", "off");
    editor.value = saved != null ? saved : starterCode;
    editor.addEventListener("input", () => {
      try {
        localStorage.setItem(key, editor.value);
        localStorage.setItem(fpKey, starterFp);
      } catch (_) {}
    });

    const toolbar = buildToolbar();
    const runBtn = buildButton(
      "py-runner-run",
      isRallyX ? "▶ Play" : "▶ Run",
      isRallyX ? "Open the game in a new window" : "Run this code"
    );
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
      try {
        localStorage.setItem(key, editor.value);
        localStorage.setItem(fpKey, starterFp);
      } catch (_) {}
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
      try {
        localStorage.setItem(key, editor.value);
        localStorage.setItem(fpKey, starterFp);
      } catch (_) {}
      editor.dispatchEvent(new Event("input"));
      output.textContent = "";
      canvas.innerHTML = "";
      status.textContent = "";
    });

    if (isRallyX) {
      // ▶ Play opens a dedicated game window. The editor's code goes
      // into localStorage; the new window reads it and runs Skulpt.
      runBtn.addEventListener("click", () => {
        try {
          localStorage.setItem("rallyx-play-code", editor.value);
          localStorage.setItem("rallyx-play-back", location.href);
        } catch (_) {}
        // Resolve play.html relative to the deployed site root by walking
        // up from the current path (e.g. /python_tutorial/rally-x/class-NN/step-2.html
        // -> /python_tutorial/play.html).
        const playUrl = new URL(
          "../../play.html",
          location.origin + location.pathname
        ).pathname;
        const w = window.open(playUrl, "rallyx-play-window");
        if (w) w.focus();
        status.textContent = "Game window opened ▶";
      });
    } else {
      attachRunHandler({ runBtn, editor, output, canvas, status });
    }

    toolbar.appendChild(runBtn);
    toolbar.appendChild(solutionBtn);
    toolbar.appendChild(resetBtn);
    toolbar.appendChild(status);

    container.appendChild(label);
    if (sourceUpdated) {
      const banner = document.createElement("div");
      banner.className = "py-source-updated";
      const text = document.createElement("span");
      text.textContent =
        "✨ The class code was updated since you last edited. ";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "py-source-updated-btn";
      btn.textContent = "↺ Load latest";
      btn.addEventListener("click", () => {
        editor.value = starterCode;
        try {
          localStorage.setItem(key, editor.value);
          localStorage.setItem(fpKey, starterFp);
        } catch (_) {}
        editor.dispatchEvent(new Event("input"));
        banner.remove();
      });
      banner.appendChild(text);
      banner.appendChild(btn);
      container.appendChild(banner);
    }
    container.appendChild(attachLineNumbers(editor));
    container.appendChild(toolbar);
    // Rally-X plays in a new window, so we don't need the inline output/canvas.
    if (!isRallyX) {
      container.appendChild(output);
      container.appendChild(canvas);
    }

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
    // Strict: only blocks whose code carries the explicit language-python
    // class. Bare ``` fences (used for expected-output snippets) are NOT
    // python and must never be turned into runnable editors.
    document.querySelectorAll("pre > code.language-python").forEach(push);
    document
      .querySelectorAll("div.language-python pre > code")
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
