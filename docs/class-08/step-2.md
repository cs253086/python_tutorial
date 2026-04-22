---
layout: default
title: "Class 8 — Step 2"
---

<sub>Class 8 — Step **2** of 2</sub>

# ⭐ Step 2 — Put the snake on the board

Let's add the snake to your game. We'll also make a **second pen**
called `snake_pen` just for the snake — next class we'll erase and
redraw it as it moves, and we don't want to wipe the board.

Whole file:

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

snake = [(-40, 0), (-20, 0), (0, 0)]

snake_pen = turtle.Turtle()
snake_pen.hideturtle()
snake_pen.penup()
snake_pen.shape("square")
snake_pen.color("#4673E8")

for part in snake:
    snake_pen.goto(part)
    snake_pen.stamp()

screen.update()
screen.mainloop()
```

Tap **▶ Run**.

🐍 **Three blue squares in the middle of your board** — your
snake!

### 🔍 Notice

- `snake_pen` is a **new** pen — its stamps are on a separate
  layer. `pen` owns the board, `snake_pen` owns the snake.
- `for part in snake:` — a `for` loop that visits **each tuple**
  in the list. Each time, `part` is a spot like `(0, 0)`.
- `snake_pen.goto(part)` — when you `goto` a tuple, Python uses
  the two numbers as x and y.

## 🎉 Your snake exists!

Next class: make it **move**.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
