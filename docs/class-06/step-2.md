---
layout: default
title: "Class 6 — Step 2"
---

<sub>Class 6 — Step **2** of 2</sub>

# ⭐ Step 2 — Open your Snake window

Time for the real thing. From now on this is your **Snake game
file** — we'll keep growing it every class.

```python
import turtle

screen = turtle.Screen()
screen.title("Snake")
screen.bgcolor("#4A752C")
screen.setup(500, 500)
screen.tracer(0)

pen = turtle.Turtle()
pen.hideturtle()
pen.penup()
pen.shape("square")
pen.color("#AAD751")
pen.goto(0, 0)
pen.stamp()

screen.update()
screen.mainloop()
```

Tap **▶ Run**.

You should see a **dark-green 500×500 board** titled **Snake**
with a single **light-green square** in the middle. 🎉

### 🔍 Notice

- `screen.title("Snake")` — sets the window title.
- `screen.setup(500, 500)` — makes the window 500 by 500 pixels.
- `screen.tracer(0)` — tells turtle *"don't animate; I'll say
  when to refresh."*
- `screen.update()` — now refresh! This is how we get the whole
  board to appear in one go instead of one tile at a time. (You'll
  care about this more next class when you stamp 400 tiles.)
- `screen.mainloop()` — keeps the window open.

## 🎉 Your Snake board exists!

Next class we fill it with a whole checkerboard using `for` loops.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
