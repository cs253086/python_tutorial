---
layout: default
title: "Project 5 — Done!"
---

# 🏆 You built Snake!

You finished **Project 5 — Snake!** 🐍

From `print('Hello')` all the way to a real, playable arcade
game. Show your parents. Show your friends. You wrote every
single line. 🙌

## What's in your Snake game

- A green checkerboard built with **nested `for` loops**
- A blue snake stored as a **list** of `(x, y)` positions
- A **game loop** with `screen.ontimer` that ticks every 150 ms
- A `move()` **function** that slides the snake (add head, drop
  tail)
- Four **`go_*` functions** wired to the arrow keys with
  `screen.onkey`
- A red apple at a **random** spot, drawn with a separate pen
- A **score counter** drawn with `pen.write`
- The growing trick: **skip the pop when you eat**
- **Wall + self collision** detection, ending the game with
  `return`

## 🧩 Want to tinker?

- Make the snake **faster** by changing `150` in
  `screen.ontimer(move, 150)` to `80`. Slower? Try `300`.
- Change the snake **color** with `snake_pen.color(...)`.
- Make the board **bigger** by changing `range(20)` to
  `range(25)` (also bump `screen.setup` to 600×600 and the
  starting position math).
- Make eating give **2 points** instead of 1.
- Add a **second apple** at the same time!

---

## 🚀 Last project

In **Project 6 — Invent Your Own**, the page is blank. Make
something yours — a story, art, a new game. Whatever you can
dream up.

<p style="text-align:center;margin:2.5em 0;">
  <a href="../index.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">⬅ Back to all projects</a>
</p>
