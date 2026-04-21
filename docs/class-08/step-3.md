---
layout: default
title: "Class 8 — Step 3"
---

<sub>Class 8 — Step **3** of 3</sub>

# ⭐ Step 3 — Draw the snake!

The snake will need to **move** next class, so we want a **second
pen** just for it. That way we can erase the snake and redraw it
without wiping the board.

Add these lines right after your `snake = [...]` line:

```python
snake_pen = turtle.Turtle()
snake_pen.hideturtle()
snake_pen.penup()
snake_pen.shape("square")
snake_pen.shapesize(1)
snake_pen.color("#4673E8")

for part in snake:
    snake_pen.goto(part)
    snake_pen.stamp()
```

Your whole file should look like this:

```python
import turtle

screen = turtle.Screen()
screen.title("Snake")
screen.bgcolor("#4A752C")
screen.setup(500, 500)

pen = turtle.Turtle()
pen.hideturtle()
pen.penup()
pen.shape("square")
pen.shapesize(1)

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
snake_pen.shapesize(1)
snake_pen.color("#4673E8")

for part in snake:
    snake_pen.goto(part)
    snake_pen.stamp()

screen.mainloop()
```

Tap **▶ Run**.

🐍 **There's your snake!** Three blue squares in a row, right in
the middle of the green checkerboard.


## What happened

- `pen` is the **board pen** — it stamped tiles.
- `snake_pen` is a **new pen** just for the snake.
- `for part in snake:` goes through each tuple in your snake list
  and stamps a blue square there.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 2](./step-2.html)</sub>
