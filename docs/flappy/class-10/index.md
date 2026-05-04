---
layout: default
title: "Flappy Bird — Class 10 — Game over + restart"
---

# Flappy Bird — Class 10 — Game over + restart 🎮

The game freezes on crash but real games **show GAME OVER** and
let you tap a key to play again.

Two ideas:

1. A **`running` flag** that says whether `tick` should keep
   going — flip it `False` on crash
2. A **`restart()` function** that resets the bird, pipes, and
   score so you can play again

You'll also reuse the SPACE key for **two** jobs: flap while
running, restart when over.

## 🎯 Today you'll
- Add `running = [True]`
- Write `game_over()` — flip running to False, draw the message
- Write `restart()` — reset bird/pipes/score, clear over screen
- Replace `bird.flap` binding with an `on_space()` dispatcher

- 🧩 **2 steps**
- ⏱️ About 20 minutes
- 🆕 New Python: game state via mutable flag, multi-purpose key

Ready?

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-1.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Start → Step 1</a>
</p>

<sub>[⬅ Back to all tutorials](../../index.html)</sub>
