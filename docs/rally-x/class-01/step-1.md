---
layout: default
title: "Rally-X — Class 1 — Step 1"
---

<sub>Rally-X — Class 1 — Step **1** of 2</sub>

# ⭐ Step 1 — Quick turtle review

You met `turtle` in beginner Snake. Here's a 30-second refresher
so the steering wheel is warm before we start.

---

## 🐢 Open a window

```python
import turtle

screen = turtle.Screen()
screen.title("Rally-X test")
screen.bgcolor("#08152e")
screen.setup(400, 400)

screen.mainloop()
```

Tap **▶ Run**. A small dark-navy window with the title
**Rally-X test** should appear.

### 🔍 Notice

- `screen.bgcolor("#08152e")` — the dark navy of the Rally-X maze.
  Hex codes pick exact colors.
- `screen.setup(width, height)` — sizes the window in pixels.
- `screen.mainloop()` — keeps the window open at the end.

---

## ✏️ Stamp a red car

```python
import turtle

screen = turtle.Screen()
screen.bgcolor("#08152e")
screen.setup(400, 400)

car = turtle.Turtle()
car.hideturtle()
car.penup()
car.shape("square")
car.color("#ff3a3a")
car.goto(0, 0)
car.stamp()

screen.mainloop()
```

Tap **▶ Run**. You should see a small **red square** in the middle.

### 🔍 Notice

- We use `pen` for the maze and `car` for the player. Same tool,
  different jobs.
- `car.goto(0, 0)` puts it at the **center**. Bigger numbers go
  right/up.

---

## 🎉 Refresher done!

Next step: open the actual Rally-X game window and stamp the
player car at the start of the maze.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 1](./index.html)</sub>
