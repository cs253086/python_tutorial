---
layout: default
title: "Flappy Bird — Class 12 — Done!"
---

# 🏆 You finished Flappy Bird!

You wrote a real, polished, playable game from scratch. ✅

## What you built

In 12 classes you went from `print("Hello!")` all the way to:

- 🐤 A `Bird` class with body, wing, eye, beak — **methods**
  for `update`, `draw`, and `flap`
- 🟩 A `Pipe` class that scrolls itself across the screen
- 🎲 A list of pipes spawning at random heights with `random`
- 🧮 A score that bumps when you fly past a pipe
- 💥 Bounding-box **collisions** that end the game
- 🎮 A SPACE key that does **two jobs** with one dispatcher
- 📒 A `state` **dictionary** that remembers your best score
- 🌥️ Clouds, a sandy ground, and a flashing wing

That's a real intermediate Python project. Classes, methods,
multiple instances, lists of objects, dictionaries, callbacks,
collision math.

---

## What next? 🚀

Some fun extensions to try on your own:

- **Sound** — Skulpt doesn't do sound, but in real Python try
  `winsound` (Windows) or `playsound` to play a `bing!` when you
  pass a pipe.
- **Difficulty** — make the gap shrink, or pipes scroll faster,
  as the score climbs.
- **Day/night** — change `screen.bgcolor` based on the score.
- **Two birds** — add a second `Bird` controlled by arrow keys,
  see who lasts longer.
- **A Bird that draws differently** — add a `Sparrow(Bird)`
  subclass with its own `draw` (your first taste of inheritance).

---

<p style="text-align:center;margin:2.5em 0;">
  <a href="../../index.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">⬅ Back to all tutorials</a>
</p>
