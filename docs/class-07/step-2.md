---
layout: default
title: "Class 7 — Step 2"
---

<pre class="py-solution">
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
</pre>

<sub>Class 7 — Step **2** of 2</sub>

# ⭐ Step 2 — Stamp the whole checkerboard

Your Class 6 code stamps **one** light-green tile. Let's replace
those 3 lines between the markers with a **nested for loop** that
stamps all 400 tiles in two greens.

## ✏️ What to change

Delete the `pen.color / pen.goto / pen.stamp` lines between the
markers and add two nested `for` loops:

- Outer loop: `for row in range(20):`
- Inner loop: `for col in range(20):`
- Inside: calculate `x` and `y` from `row` and `col`, pick a color
  with `(row + col) % 2 == 0`, `goto` that spot, and `stamp`

Tap **▶ Run**. You should see the full Google-Snake checkerboard. 🟩🟨

> 💡 Stuck? Tap **Solution**.

---

## 🔍 Notice

- `x = -200 + col * 20` turns `col` 0…19 into screen positions
  `-200`…`180` — exactly one tile-width apart.
- `(row + col) % 2 == 0` flips even/odd as you move across the
  grid → the checker pattern.

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

# 👇
# Replace these 3 single-stamp lines with TWO nested for loops:
#   for row in range(20):
#     for col in range(20):
#       work out x and y from row and col
#       pick light green if (row+col) is even, else darker green
#       go to (x, y) and stamp
pen.color("#AAD751")
pen.goto(0, 0)
pen.stamp()
# 👆

screen.update()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
