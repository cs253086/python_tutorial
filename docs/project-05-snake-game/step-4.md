---
layout: default
title: "Project 5 — Step 4 — Apple + grow + score"
---

<pre class="py-solution" markdown="0">
import turtle
import random

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

apple_pen = turtle.Turtle()
apple_pen.hideturtle()
apple_pen.penup()
apple_pen.shape("circle")
apple_pen.color("#E74C3C")

apple = [0, 0]
score = [0]

score_pen = turtle.Turtle()
score_pen.hideturtle()
score_pen.penup()
score_pen.color("white")
score_pen.goto(-230, 220)

def draw_score():
    score_pen.clear()
    score_pen.write(f"Score: {score[0]}", font=("Arial", 16, "bold"))

def place_apple():
    apple[0] = random.randint(0, 19) * 20 - 200
    apple[1] = random.randint(0, 19) * 20 - 200
    apple_pen.goto(apple[0], apple[1])

direction = [20, 0]

def move():
    head = snake[-1]
    new_head = (head[0] + direction[0], head[1] + direction[1])
    snake.append(new_head)

    if new_head[0] == apple[0] and new_head[1] == apple[1]:
        score[0] = score[0] + 1
        draw_score()
        place_apple()
        apple_pen.clear()
        apple_pen.stamp()
    else:
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

place_apple()
apple_pen.stamp()
draw_score()
move()

screen.mainloop()
</pre>

<sub>Project 5 — Step **4** of 5</sub>

# ⭐ Step 4 — Apple + grow + score

➡️ Add a red apple. When the snake eats it, the snake **grows**
and the **score** goes up.

Lots of pieces this step, all things you've seen:

- An `apple_pen` (round, red) and an `apple` list to store its
  spot
- A `score` list with the current score and a `score_pen` to
  write it to the screen
- A `place_apple()` function that picks random grid coordinates
  with `random.randint`
- The clever trick: **growing = skip popping the tail.** Inside
  `move()`, when the new head lands on the apple, we DON'T do
  `snake.pop(0)` — so the snake stays one segment longer.

## ✏️ What to type

This is a big step. Tap **💡 Solution** to see the whole file,
then type it in carefully.

Key changes:

- Add `import random` at the top
- Add the `apple_pen`, `apple`, `score`, `score_pen` setup
- Add `draw_score()` and `place_apple()` functions
- Change `move()`: if `new_head` is the apple, score up + new
  apple, **otherwise** pop the tail (slide)
- Call `place_apple()` and `draw_score()` once before starting

<pre class="py-starter" markdown="0">
import turtle
import random

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

# Add apple_pen (shape "circle", color "#E74C3C", hidden, penup)
# Add apple = [0, 0]   and   score = [0]
# Add score_pen (color white, goto -230, 220)
# Add draw_score() that writes f"Score: {score[0]}"
# Add place_apple() that picks random grid coordinates

direction = [20, 0]

def move():
    head = snake[-1]
    new_head = (head[0] + direction[0], head[1] + direction[1])
    snake.append(new_head)

    # If new_head == apple: score up, place_apple(), redraw apple, DON'T pop
    # else: snake.pop(0)
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

# Add: place_apple(), apple_pen.stamp(), draw_score() before move()
move()

screen.mainloop()
</pre>

Tap **▶ Run**. A red apple should appear. Steer the snake to
it. When you eat it, the score goes up and a new apple pops up
somewhere else. 🍎

### 🔍 Tip

Why is `apple = [0, 0]` a **list** instead of two separate
variables `apple_x` and `apple_y`? So we can change its values
from inside the `place_apple()` function. Plain variables
*inside* a function don't change the outside ones.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-5.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 5</a>
</p>

<sub>[⬅ Back to Step 3](./step-3.html)</sub>
