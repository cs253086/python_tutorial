#!/usr/bin/env python3
"""Build a kid-friendly static website from beginner lesson resources."""

from __future__ import annotations

import argparse
import html
import re
from dataclasses import dataclass
from pathlib import Path


LESSON_LINE_RE = re.compile(r"^\s*(\d+)\.\s+`([^`]+)`\s+-\s+(.+)$")

STYLE_CSS = """
:root {
  --bg: #f4f8ff;
  --card: #ffffff;
  --text: #1f2a44;
  --muted: #5e6a86;
  --brand: #4361ee;
  --accent: #4cc9f0;
  --good: #2a9d8f;
  --code-bg: #0f172a;
  --code-text: #d7e3ff;
  --border: #d8e1ff;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Trebuchet MS", "Segoe UI", Arial, sans-serif;
  color: var(--text);
  background: linear-gradient(180deg, #eef5ff 0%, var(--bg) 45%, #f9fbff 100%);
  line-height: 1.6;
}

a {
  color: var(--brand);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 18px 40px;
}

.top-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.nav-pill {
  display: inline-block;
  background: #e7edff;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 700;
}

.hero {
  background: radial-gradient(circle at 15% 20%, #d8efff 0%, #ffffff 45%, #f7faff 100%);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
}

.hero h1 {
  margin: 0 0 10px;
  font-size: 32px;
  line-height: 1.2;
}

.hero p {
  margin: 0;
  color: var(--muted);
  font-size: 18px;
}

.lesson-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 14px;
}

.lesson-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px;
}

.lesson-number {
  display: inline-block;
  background: #edf1ff;
  color: #334674;
  border-radius: 8px;
  padding: 3px 8px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 8px;
}

.lesson-card h2 {
  margin: 4px 0 8px;
  font-size: 20px;
  line-height: 1.25;
}

.lesson-card p {
  margin: 0 0 10px;
  color: var(--muted);
}

.button-link {
  display: inline-block;
  border-radius: 10px;
  border: 1px solid #c5d4ff;
  background: #f0f5ff;
  padding: 8px 12px;
  font-weight: 700;
  font-size: 14px;
}

.button-link:hover {
  background: #e5eeff;
}

.content-layout {
  display: grid;
  gap: 16px;
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 18px;
}

.card h2 {
  margin-top: 0;
}

.card h3 {
  margin-top: 22px;
}

.card p {
  margin: 10px 0;
}

.card ul,
.card ol {
  margin: 10px 0 10px 22px;
}

.card li + li {
  margin-top: 5px;
}

.card hr {
  border: 0;
  border-top: 1px dashed #bfd0ff;
  margin: 18px 0;
}

pre {
  background: var(--code-bg);
  color: var(--code-text);
  border-radius: 10px;
  overflow-x: auto;
  padding: 12px;
  font-size: 14px;
}

code {
  font-family: Consolas, "Courier New", monospace;
  background: #ecf3ff;
  color: #1d2d58;
  border-radius: 4px;
  padding: 2px 5px;
}

pre code {
  background: transparent;
  color: inherit;
  padding: 0;
}

/* Tutorial snippets: not selectable so users type the code */
.content-layout .card pre,
.content-layout .card pre code {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
}

details {
  border: 1px solid var(--border);
  border-radius: 10px;
  background: #f8fbff;
  padding: 10px 12px;
}

summary {
  cursor: pointer;
  font-weight: 700;
}

.footer-note {
  margin-top: 20px;
  font-size: 13px;
  color: var(--muted);
}

.lesson-shell {
  display: grid;
  gap: 16px;
}

@media (min-width: 1080px) {
  .lesson-shell {
    grid-template-columns: minmax(0, 2fr) minmax(420px, 1fr);
    align-items: start;
  }

  .lesson-sidebar {
    position: sticky;
    top: 14px;
  }
}

.console-card h2 {
  margin-bottom: 8px;
}

.console-help {
  margin-top: 0;
  color: var(--muted);
  font-size: 14px;
}

.console-status {
  font-size: 13px;
  color: #334674;
  background: #edf3ff;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 6px 9px;
  margin-bottom: 10px;
}

.console-editor {
  width: 100%;
  min-height: 380px;
  border: 1px solid #bdccf7;
  border-radius: 10px;
  padding: 10px;
  font-family: Consolas, "Courier New", monospace;
  font-size: 14px;
  line-height: 1.45;
  resize: vertical;
  background: #f6f9ff;
  color: #152039;
}

.console-buttons {
  margin-top: 10px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.console-btn {
  border: 1px solid #b9c9f6;
  border-radius: 9px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  background: #ecf2ff;
  color: #1f2a44;
}

.console-btn:hover {
  background: #dfe9ff;
}

.console-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.console-btn.primary {
  background: #4361ee;
  border-color: #3751ca;
  color: #fff;
}

.console-btn.primary:hover {
  background: #3855dc;
}

.console-output {
  margin-top: 10px;
  min-height: 280px;
  max-height: 500px;
}

.browser-note {
  border-left: 6px solid #4cc9f0;
  background: #eefbff;
}

.browser-note h2 {
  margin-bottom: 6px;
}

.browser-note p {
  margin: 6px 0;
}
""".strip()

PYTHON_CONSOLE_JS = r"""
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
""".strip()


@dataclass
class Lesson:
    number: int
    slug: str
    description: str
    title: str
    tutorial_md: str
    exercise_md: str
    solution_code: str


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def render_inline(text: str) -> str:
    """Render a small markdown inline subset."""
    escaped = html.escape(text)
    escaped = re.sub(r"`([^`]+)`", r"<code>\1</code>", escaped)
    escaped = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", escaped)
    return escaped


def normalize_checkbox(content: str) -> str:
    lowered = content.lower()
    if lowered.startswith("[ ] "):
        return "[] " + content[4:]
    if lowered.startswith("[x] "):
        return "[x] " + content[4:]
    return content


def render_markdown(markdown_text: str) -> str:
    """Render markdown to simple HTML without third-party packages."""
    lines = markdown_text.splitlines()
    out: list[str] = []

    paragraph: list[str] = []
    list_type: str | None = None
    in_code = False
    code_lang = ""
    code_lines: list[str] = []

    def close_paragraph() -> None:
        if paragraph:
            out.append(f"<p>{render_inline(' '.join(paragraph).strip())}</p>")
            paragraph.clear()

    def close_list() -> None:
        nonlocal list_type
        if list_type:
            out.append(f"</{list_type}>")
            list_type = None

    def start_list(target: str) -> None:
        nonlocal list_type
        if list_type and list_type != target:
            out.append(f"</{list_type}>")
            list_type = None
        if not list_type:
            out.append(f"<{target}>")
            list_type = target

    for raw_line in lines:
        stripped = raw_line.strip()

        if in_code:
            if stripped.startswith("```"):
                lang_attr = (
                    f' class="language-{html.escape(code_lang)}"' if code_lang else ""
                )
                escaped_code = html.escape("\n".join(code_lines))
                out.append(f"<pre><code{lang_attr}>{escaped_code}</code></pre>")
                in_code = False
                code_lang = ""
                code_lines.clear()
            else:
                code_lines.append(raw_line)
            continue

        if stripped.startswith("```"):
            close_paragraph()
            close_list()
            in_code = True
            code_lang = stripped[3:].strip()
            code_lines = []
            continue

        if not stripped:
            close_paragraph()
            close_list()
            continue

        heading_match = re.match(r"^(#{1,6})\s+(.*)$", stripped)
        if heading_match:
            close_paragraph()
            close_list()
            level = len(heading_match.group(1))
            heading_text = render_inline(heading_match.group(2).strip())
            out.append(f"<h{level}>{heading_text}</h{level}>")
            continue

        if stripped in {"---", "***", "___"}:
            close_paragraph()
            close_list()
            out.append("<hr>")
            continue

        ordered_match = re.match(r"^\d+\.\s+(.*)$", stripped)
        if ordered_match:
            close_paragraph()
            start_list("ol")
            content = normalize_checkbox(ordered_match.group(1).strip())
            out.append(f"<li>{render_inline(content)}</li>")
            continue

        unordered_match = re.match(r"^[-*]\s+(.*)$", stripped)
        if unordered_match:
            close_paragraph()
            start_list("ul")
            content = normalize_checkbox(unordered_match.group(1).strip())
            out.append(f"<li>{render_inline(content)}</li>")
            continue

        close_list()
        paragraph.append(stripped)

    if in_code:
        lang_attr = f' class="language-{html.escape(code_lang)}"' if code_lang else ""
        escaped_code = html.escape("\n".join(code_lines))
        out.append(f"<pre><code{lang_attr}>{escaped_code}</code></pre>")

    close_paragraph()
    close_list()
    return "\n".join(out)


def extract_title(tutorial_md: str, number: int, slug: str) -> str:
    for line in tutorial_md.splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return f"Lesson {number:02d}: {slug}"


def strip_first_h1(markdown_text: str) -> str:
    lines = markdown_text.splitlines()
    for idx, line in enumerate(lines):
        if line.strip().startswith("# "):
            remainder = "\n".join(lines[idx + 1 :])
            return remainder.lstrip("\n")
    return markdown_text


def parse_lessons(beginner_root: Path) -> list[Lesson]:
    readme = read_text(beginner_root / "README.md")
    lessons: list[Lesson] = []

    for line in readme.splitlines():
        match = LESSON_LINE_RE.match(line)
        if not match:
            continue

        number = int(match.group(1))
        slug = match.group(2).strip()
        description = match.group(3).strip()
        lesson_dir = beginner_root / slug

        tutorial_path = lesson_dir / "TUTORIAL.md"
        exercise_path = lesson_dir / "exercise.md"
        solution_path = lesson_dir / "solution.py"

        missing = [str(p.name) for p in [tutorial_path, exercise_path, solution_path] if not p.exists()]
        if missing:
            missing_display = ", ".join(missing)
            raise FileNotFoundError(f"{slug} is missing required files: {missing_display}")

        tutorial_md = read_text(tutorial_path)
        exercise_md = read_text(exercise_path)
        solution_code = read_text(solution_path)

        lessons.append(
            Lesson(
                number=number,
                slug=slug,
                description=description,
                title=extract_title(tutorial_md, number, slug),
                tutorial_md=tutorial_md,
                exercise_md=exercise_md,
                solution_code=solution_code,
            )
        )

    lessons.sort(key=lambda lesson: lesson.number)
    return lessons


def page_html(
    *,
    title: str,
    css_href: str,
    body: str,
    script_srcs: list[str] | None = None,
) -> str:
    scripts_html = ""
    if script_srcs:
        scripts_html = "\n".join(
            f'  <script src="{html.escape(src)}"></script>' for src in script_srcs
        )
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{html.escape(title)}</title>
  <link rel="stylesheet" href="{html.escape(css_href)}">
</head>
<body>
  <div class="container">
{body}
  </div>
{scripts_html}
</body>
</html>
"""


def build_index_page(lessons: list[Lesson]) -> str:
    cards: list[str] = []
    for lesson in lessons:
        cards.append(
            f"""
      <article class="lesson-card">
        <div class="lesson-number">Lesson {lesson.number:02d}</div>
        <h2>{html.escape(lesson.title)}</h2>
        <p>{html.escape(lesson.description)}</p>
        <a class="button-link" href="lessons/{html.escape(lesson.slug)}.html">Open lesson page</a>
      </article>
            """.rstrip()
        )

    body = f"""
    <section class="hero">
      <h1>Beginner Python Lessons for Kids</h1>
      <p>Read tutorials, complete exercises, and check solution code in one place.</p>
    </section>

    <section class="lesson-grid">
{chr(10).join(cards)}
    </section>

    <p class="footer-note">Generated from beginner lesson markdown and solution files.</p>
    """.strip()

    return page_html(title="Beginner Python Lessons", css_href="assets/style.css", body=body)


def build_lesson_page(
    lessons: list[Lesson],
    current_index: int,
) -> str:
    lesson = lessons[current_index]
    prev_lesson = lessons[current_index - 1] if current_index > 0 else None
    next_lesson = lessons[current_index + 1] if current_index + 1 < len(lessons) else None

    nav_links = ['<a class="nav-pill" href="../index.html">All lessons</a>']
    if prev_lesson:
        nav_links.append(
            f'<a class="nav-pill" href="{html.escape(prev_lesson.slug)}.html">Previous lesson</a>'
        )
    if next_lesson:
        nav_links.append(
            f'<a class="nav-pill" href="{html.escape(next_lesson.slug)}.html">Next lesson</a>'
        )

    exercise_html = render_markdown(strip_first_h1(lesson.exercise_md))
    tutorial_html = render_markdown(strip_first_h1(lesson.tutorial_md))
    solution_html = html.escape(lesson.solution_code)

    body = f"""
    <nav class="top-nav">
      {' '.join(nav_links)}
    </nav>

    <section class="hero">
      <h1>{html.escape(lesson.title)}</h1>
      <p>{html.escape(lesson.description)}</p>
    </section>

    <section class="card browser-note">
      <h2>How to use this lesson</h2>
      <p>Use the right-side <strong>Python Playground</strong> panel to run code.</p>
      <p>You can type tutorial snippets into the editor and click <strong>Run code</strong>.</p>
    </section>

    <div class="lesson-shell">
      <div class="content-layout">
        <section class="card">
          <h2>Tutorial</h2>
          {tutorial_html}
        </section>

        <section class="card">
          <h2>Exercise</h2>
          {exercise_html}
        </section>

        <section class="card">
          <h2>Solution code</h2>
          <details>
            <summary>View <code>solution.py</code></summary>
            <pre><code class="language-python">{solution_html}</code></pre>
          </details>
        </section>
      </div>

      <aside class="lesson-sidebar">
        <section class="card console-card py-console">
          <h2>Python Playground</h2>
          <p class="console-help">Run and edit code right here.</p>
          <div class="console-status" role="status">Python runtime: ready</div>
          <textarea class="console-editor" spellcheck="false"></textarea>
          <textarea class="console-starter" hidden></textarea>
          <div class="console-buttons">
            <button type="button" class="console-btn primary console-run">Run code</button>
            <button type="button" class="console-btn console-reset">Reset code</button>
          </div>
          <pre class="console-output"></pre>
        </section>
      </aside>
    </div>
    """.strip()

    return page_html(
        title=f"{lesson.title} - Beginner Python",
        css_href="../assets/style.css",
        body=body,
        script_srcs=[
            "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js",
            "../assets/python_console.js",
        ],
    )


def write_site(beginner_root: Path, output_root: Path) -> None:
    lessons = parse_lessons(beginner_root)
    if not lessons:
        raise RuntimeError("No lessons were found in beginner/README.md.")

    assets_dir = output_root / "assets"
    lessons_dir = output_root / "lessons"
    assets_dir.mkdir(parents=True, exist_ok=True)
    lessons_dir.mkdir(parents=True, exist_ok=True)

    (assets_dir / "style.css").write_text(STYLE_CSS + "\n", encoding="utf-8")
    (assets_dir / "python_console.js").write_text(
        PYTHON_CONSOLE_JS + "\n", encoding="utf-8"
    )
    (output_root / "index.html").write_text(build_index_page(lessons), encoding="utf-8")

    for idx, lesson in enumerate(lessons):
        lesson_page = build_lesson_page(lessons, idx)
        lesson_path = lessons_dir / f"{lesson.slug}.html"
        lesson_path.write_text(lesson_page, encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Generate static webpages for beginner lessons."
    )
    parser.add_argument(
        "--source",
        default="beginner",
        help="Directory containing lesson folders and README.md",
    )
    parser.add_argument(
        "--output",
        default="docs",
        help="Output directory for generated website files",
    )
    args = parser.parse_args()

    source_dir = Path(args.source).resolve()
    output_dir = Path(args.output).resolve()

    write_site(source_dir, output_dir)
    print(f"Website generated at: {output_dir}")


if __name__ == "__main__":
    main()
