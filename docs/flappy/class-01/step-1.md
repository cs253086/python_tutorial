---
layout: default
title: "Flappy Bird — Class 1 — Step 1"
---

<sub>Flappy Bird — Class 1 — Step **1** of 2</sub>

# ⭐ Step 1 — Quick turtle review

You met `turtle` in beginner Snake. Here's a 30-second refresher
so the wings are warm before we start.

---

## 🐢 Open a window

```python
import turtle

screen = turtle.Screen()
screen.title("Flappy test")
screen.bgcolor("#70C5CE")
screen.setup(400, 400)

screen.mainloop()
```

Tap **▶ Run**. A small sky-blue window with the title
**Flappy test** should appear.

### 🔍 Notice

- `screen.bgcolor("#70C5CE")` — the sky blue of Flappy Bird.
  Hex codes pick exact colors.
- `screen.setup(width, height)` — sizes the window in pixels.
  Flappy is tall: 400 wide, 600 tall.
- `screen.mainloop()` — keeps the window open at the end.

---

## ✏️ Stamp a yellow bird

```python
import turtle

screen = turtle.Screen()
screen.bgcolor("#70C5CE")
screen.setup(400, 400)

bird = turtle.Turtle()
bird.hideturtle()
bird.penup()
bird.shape("circle")
bird.color("#FFD23F")
bird.goto(-100, 0)
bird.stamp()

screen.mainloop()
```

Tap **▶ Run**. You should see a small **yellow circle** on the
left side of the window.

### 🔍 Notice

- The bird sits at `x = -100` (a bit left of center). In Flappy
  Bird the bird stays put on the left while pipes scroll past.
- `"#FFD23F"` is the yellow we'll use for the bird the whole game.

---

## 🎉 Refresher done!

Next step: open the actual Flappy Bird game window in a tall
400×600 shape and stamp the bird.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 1](./index.html)</sub>
