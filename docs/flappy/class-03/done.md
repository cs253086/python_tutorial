---
layout: default
title: "Flappy Bird — Class 3 — Done!"
---

# 🏆 Class 3 done!

The bird falls. ✅

## What you did
- Added `self.vy = 0` to the bird
- Wrote `update(self)` so gravity drops the bird every frame
- Built a `tick()` game loop that runs forever via `ontimer`

---

## Next class → 🆙 Flap!

Right now the bird falls helplessly. Time to give it a way to
**fight gravity** — tap **SPACE** to flap upward.

In Class 4 you'll add a `flap()` method on Bird and bind the
spacebar to it with `screen.onkey(bird.flap, "space")`.

You'll also see how a method **bound to an instance**
(`bird.flap`, no parentheses!) can be passed around like a value.

<p style="text-align:center;margin:2.5em 0;">
  <a href="../../index.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">⬅ Back to all tutorials</a>
</p>
