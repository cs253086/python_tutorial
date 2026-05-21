---
layout: default
title: "Project 5 — Step 2 — Make it move"
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
    # New head = old head + direction
    head = snake[-1]
    new_head = (head[0] + direction[0], head[1] + direction[1])
    snake.append(new_head)
    snake.pop(0)

    # Redraw the snake
    snake_pen.clear()
    for part in snake:
        snake_pen.goto(part)
        snake_pen.stamp()

    screen.update()
    screen.ontimer(move, 150)

move()

screen.mainloop()
</pre>

<sub>Project 5 — Step **2** of 5</sub>

# ⭐ Step 2 — Make it move

➡️ Make the snake **slide forward** by itself.

The trick is small but clever:

1. Add a new piece at the **front** (head) of the snake
2. Remove the piece at the **back** (tail)
3. Result: the snake **slid** forward one step

Do that over and over every 150 ms using `screen.ontimer` (like
the rocket animation in Project 3, but faster).

## ✏️ What to type

After the snake setup (and before `screen.mainloop()`), add:

- A `direction` list with `[20, 0]` (means 20 right, 0 up)
- A `move()` function that adds a new head, drops the tail,
  redraws, and schedules itself with `ontimer`
- A single `move()` call to start it going

Tap **💡 Solution** to see the full file.

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

# 1. Add: direction = [20, 0]

# 2. Add a move() function that:
#    - calculates new_head from snake[-1] + direction
#    - appends new_head, pops snake[0] (slide forward)
#    - clears snake_pen and redraws every part
#    - calls screen.update() and screen.ontimer(move, 150)

# 3. Call move() once at the bottom (before screen.mainloop) to start it.

screen.update()
screen.mainloop()
</pre>

Tap **▶ Run**. The snake should **slide to the right** by itself.
It'll fly off the edge of the board — we'll fix that in Step 5.

### 🔍 Tip

`snake[-1]` is the **last** item in the list. `snake.append(x)`
adds to the end. `snake.pop(0)` removes the first. Together,
that's a slide forward.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-3.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 3</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
