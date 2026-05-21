---
layout: default
title: "Flappy Bird — Class 3 — Gravity!"
---

# Flappy Bird — Class 3 — Gravity! 🪂

The bird sits in the air doing nothing. Today you'll teach it
to **fall** — gravity pulls it down a little more every frame.

That means two new ideas:

1. A method that **changes the bird's own data** every frame
   (`self.vy = self.vy - 1`, `self.y = self.y + self.vy`)
2. A **game loop** — a function that calls itself every 30 ms
   using `screen.ontimer`

## 🎯 Today you'll
- Add `self.vy = 0` to the bird (up/down speed)
- Write `update(self)` — gravity changes `vy`, `vy` changes `y`
- Write `tick()` — the game loop, runs forever via `ontimer`

- 🧩 **2 steps**
- ⏱️ About 15 minutes
- 🆕 New Python: methods that change `self`, `screen.ontimer`

Ready?

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-1.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Start → Step 1</a>
</p>

<sub>[⬅ Back to all tutorials](../../index.html)</sub>
