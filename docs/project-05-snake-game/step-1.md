---
layout: default
title: "Project 5 — Step 1 — Board + snake"
---

<pre class="py-solution" markdown="0">
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

# Draw the green checker board
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

# A list of (x, y) spots = the snake's body
snake = [(-40, 0), (-20, 0), (0, 0)]

# A separate pen for the snake
snake_pen = turtle.Turtle()
snake_pen.hideturtle()
snake_pen.penup()
snake_pen.shape("square")
snake_pen.color("#4673E8")

# Stamp each part of the snake
for part in snake:
    snake_pen.goto(part)
    snake_pen.stamp()

screen.update()
screen.mainloop()
</pre>

<sub>Project 5 — Step **1** of 5</sub>

# ⭐ Step 1 — Board + snake

➡️ Draw the green checker board and a 3-segment blue snake.

Two new things, but both should feel familiar:

- A **nested `for` loop** to fill 20×20 = 400 tiles in a
  checker pattern (same trick as Project 3's stars, but in a
  grid).
- A **list** of `(x, y)` spots called `snake`. Each item is
  one body part. A `for part in snake` loop stamps them all.

## ✏️ What to type

Tap **💡 Solution** to see the whole file, then type it in. It's
a lot of code in one step — but you already know every piece.

<pre class="py-starter" markdown="0">
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

# 1. Draw the green checker board (nested for loops over 20x20)
#    Use "#AAD751" when (row+col) is even, "#A2D149" when odd.

# 2. Make a list called snake = [(-40, 0), (-20, 0), (0, 0)]

# 3. Make a snake_pen (hideturtle, penup, shape "square", color "#4673E8")

# 4. Stamp each part of the snake using a for loop over snake

screen.update()
screen.mainloop()
</pre>

Tap **▶ Run**. You should see the green checkerboard with a
static **blue snake of 3 squares** in the middle. 🐍

### 🔍 Tip

Why a **separate** `snake_pen`? Because next step we'll need to
**clear** the snake stamps and redraw them in new positions —
but keep the board the same. Two pens = we can wipe one without
wiping the other.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Project 5](./index.html)</sub>
