---
layout: default
title: "Class 9 — Step 2"
---

<sub>Class 9 — Step **2** of 2</sub>

# ⭐ Step 2 — Move + steer the snake

Replace your current snake-drawing code with a `move()` function
and four direction functions. Whole file:

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

direction = [20, 0]

def move():
    head = snake[-1]
    new_head = (head[0] + direction[0], head[1] + direction[1])
    snake.append(new_head)
    snake.pop(0)

    snake_pen.clear()
    for part in snake:
        snake_pen.goto(part)
        snake_pen.stamp()

    screen.update()
    screen.ontimer(move, 150)

def go_up():
    direction[0] = 0
    direction[1] = 20

def go_down():
    direction[0] = 0
    direction[1] = -20

def go_left():
    direction[0] = -20
    direction[1] = 0

def go_right():
    direction[0] = 20
    direction[1] = 0

screen.listen()
screen.onkey(go_up,    "Up")
screen.onkey(go_down,  "Down")
screen.onkey(go_left,  "Left")
screen.onkey(go_right, "Right")

move()
screen.mainloop()
```

Tap **▶ Run**. Click the snake board once (so keys are heard),
then press the **arrow keys** on your iPad keyboard.

🎮 **Your snake slides and steers!**

### 🔍 Notice

- `direction = [20, 0]` — how much the head moves each tick.
  `(20, 0)` means "20 right, 0 up." The **arrow functions**
  change these numbers.
- `move()` every tick:
  1. Compute `new_head` from current head + direction
  2. `append` it, `pop(0)` the tail — snake slides forward
  3. Clear and redraw the snake
  4. `screen.ontimer(move, 150)` — "call me again in 150ms"
- `screen.listen()` + `screen.onkey(...)` wires up the arrow keys.

> ⚠️ Don't panic when the snake flies off the edge — we'll add a
> game-over in Class 12.

## 🎉 You built a game loop!

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
