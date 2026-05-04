---
layout: default
title: "Flappy Bird — Class 5 — Done!"
---

# 🏆 Class 5 done!

Pipes! ✅

## What you did
- Added a separate `pipe_pen` so pipes draw without erasing the bird
- Wrote `draw_pipe(x, gap_y)` — two filled rectangles with a 140px gap
- Stamped one pipe in front of the bird

---

## Next class → 🏗️ A real `Pipe` class

The pipe just sits there. Real Flappy Bird pipes **scroll left**
across the screen and disappear off the edge.

In Class 6 you'll wrap your `draw_pipe` logic in a proper
`class Pipe:` with `__init__`, `update`, and `draw` — just like
`Bird`. The pipe will start scrolling left every tick of the
game loop.

<p style="text-align:center;margin:2.5em 0;">
  <a href="../../index.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">⬅ Back to all tutorials</a>
</p>
