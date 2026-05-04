---
layout: default
title: "Flappy Bird — Class 4 — Flap!"
---

# Flappy Bird — Class 4 — Flap! 🆙

The bird falls helplessly. Today you'll give it a way to fight
gravity: **tap SPACE to flap upward**.

The Python idea: a **method bound to an instance**. `bird.flap`
(without parentheses) is a value you can pass around — including
to `screen.onkey(...)`, which calls it whenever the spacebar is
pressed.

## 🎯 Today you'll
- Add a `flap(self)` method that sets `self.vy = 12`
- Listen for keyboard input with `screen.listen()`
- Bind space to flap with `screen.onkey(bird.flap, "space")`

- 🧩 **2 steps**
- ⏱️ About 10 minutes
- 🆕 New Python: bound methods, `screen.onkey(...)`

Ready?

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-1.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Start → Step 1</a>
</p>

<sub>[⬅ Back to all tutorials](../../index.html)</sub>
