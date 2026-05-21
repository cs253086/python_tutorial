---
layout: default
title: "Project 5 — Step 3 — Steer with arrows"
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
</pre>

<sub>Project 5 — Step **3** of 5</sub>

# ⭐ Step 3 — Steer with arrows

➡️ Make the **arrow keys** change the snake's direction.

We write **four tiny functions** — one per arrow — that each
change the `direction` list. Then `screen.onkey(fn, "Up")`
connects each arrow to its function. The screen calls our
function whenever the kid presses that arrow.

## ✏️ What to type

Between the `move()` definition and the `move()` call, add:

- `go_up`, `go_down`, `go_left`, `go_right` — each sets
  `direction` to point that way
- `screen.listen()` (turns on key listening)
- Four `screen.onkey(fn, "...")` lines connecting each key

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

# Add 4 tiny functions: go_up, go_down, go_left, go_right.
# Each one sets direction[0] and direction[1] to point that way.

# Then add:
#   screen.listen()
#   screen.onkey(go_up,    "Up")
#   screen.onkey(go_down,  "Down")
#   screen.onkey(go_left,  "Left")
#   screen.onkey(go_right, "Right")

move()

screen.mainloop()
</pre>

Tap **▶ Run**. **Click the game window once** (so it can hear
keys), then press the **arrow keys**. The snake should turn!

### 🔍 Tip

We pass `go_up` to `onkey` **without parentheses**. We're handing
the **function itself** to the screen so it can call it later —
not calling it right now.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-4.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 4</a>
</p>

<sub>[⬅ Back to Step 2](./step-2.html)</sub>
