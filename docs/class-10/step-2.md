---
layout: default
title: "Class 10 — Step 2"
---

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

# 👇 def draw_board() + def draw_snake()  — wrap the loops in functions 👇

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

# 👆 END 👆

screen.mainloop()
</pre>

<pre class="py-solution">
def draw_board():
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

draw_board()

snake = [(-40, 0), (-20, 0), (0, 0)]

snake_pen = turtle.Turtle()
snake_pen.hideturtle()
snake_pen.penup()
snake_pen.shape("square")
snake_pen.color("#4673E8")

def draw_snake():
    snake_pen.clear()
    for part in snake:
        snake_pen.goto(part)
        snake_pen.stamp()

direction = [20, 0]

def move():
    head = snake[-1]
    new_head = (head[0] + direction[0], head[1] + direction[1])
    snake.append(new_head)
    snake.pop(0)
    draw_snake()
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
</pre>

<sub>Class 10 — Step **2** of 2</sub>

# ⭐ Step 2 — Refactor your Snake file

The game works but the code is getting long. Two chunks can be
wrapped in tidy **functions**:

1. The **board loop** → `def draw_board(): ...` + call it once
2. The **snake redraw** inside `move()` → `def draw_snake(): ...`
   + call it from `move()` instead of the inline loop

## ✏️ What to change

Inside the marker region:

- Wrap the 11-line board loop in `def draw_board():` then replace
  it with a single `draw_board()` call.
- Move the `snake_pen.clear()` + for-loop out of `move()` into
  `def draw_snake():`. Replace those lines in `move()` with
  `draw_snake()`.

Tap **▶ Run**. The game should behave **exactly the same** — but
the code reads much cleaner. 🧼

> 💡 Big refactor — tap **Solution** to see the whole refactored
> version side-by-side with what you had.

---

## 🔍 Notice

- The functions are **named** by what they do: `draw_board` draws
  the board, `draw_snake` draws the snake. Future-you will thank
  you when you read this in 6 months.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
