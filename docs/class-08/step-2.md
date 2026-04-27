---
layout: default
title: "Class 8 — Step 2"
---

<pre class="py-solution">
snake = [(-40, 0), (-20, 0), (0, 0)]

snake_pen = turtle.Turtle()
snake_pen.hideturtle()
snake_pen.penup()
snake_pen.shape("square")
snake_pen.color("#4673E8")

for part in snake:
    snake_pen.goto(part)
    snake_pen.stamp()
</pre>

<sub>Class 8 — Step **2** of 2</sub>

# ⭐ Step 2 — Put the snake on the board

Your Class 7 code draws the full checkerboard. Let's add **three
blue squares** in the middle — your snake.

## ✏️ What to add

Between the 👇 and 👆 markers:

1. A list called `snake` with three tuples (body-part positions)
2. A new turtle called `snake_pen` (hidden, pen up, square shape,
   blue color `#4673E8`)
3. A `for part in snake:` loop that goes to each tuple and stamps

Tap **▶ Run**. You should see 3 blue squares in the middle of the
checkerboard. 🐍

> 💡 Stuck? Tap **Solution**.

---

## 🔍 Notice

- `snake_pen` is a **separate** turtle from `pen` so next class
  we can clear and redraw the snake without wiping the board.
- `snake_pen.goto(part)` — when you `goto` a tuple, Python uses
  its two numbers as x and y.

<pre class="py-starter">
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

for row in range(20):
    for col in range(20):
        x = -200 + col * 20
        y = -200 + row * 20
        if (row + col) % 2 == 0:
            pen.color("#AAD751")
        else:
            pen.color("#A2D149")
        pen.goto(x, y)
        pen.stamp()

# 👇
# Make a list called "snake" with 3 body-part tuples,
#   like (-40, 0), (-20, 0), (0, 0)
# Make a NEW pen called "snake_pen": hide it, lift it (penup),
#   shape "square", color blue ("#4673E8")
# For each part in snake: go to that spot and stamp it
# 👆

screen.update()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
