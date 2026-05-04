---
layout: default
title: "Flappy Bird — Class 6 — A real Pipe class"
---

# Flappy Bird — Class 6 — A real Pipe class 🏗️

Your `draw_pipe` function works, but a pipe needs to be a **thing**
with its own data: an `x` (its position), a `gap_y` (its gap
center), and the ability to **move itself** every frame.

That's a class.

## 🎯 Today you'll
- Wrap `draw_pipe` into a `class Pipe` with `__init__(self, x, gap_y)`
- Give the pipe its own `pen` (just like `Bird`)
- Add `update(self)` so each pipe **moves itself** left
- Add `draw(self)` that clears + redraws every frame
- Call `pipe.update()` and `pipe.draw()` from inside `tick()`

- 🧩 **2 steps**
- ⏱️ About 15 minutes
- 🆕 New Python: a second class working alongside `Bird`

Ready?

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-1.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Start → Step 1</a>
</p>

<sub>[⬅ Back to all tutorials](../../index.html)</sub>
