---
layout: default
title: "Class 11 — Step 2"
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

# 👇
# Add the apple, the score, and make the snake GROW when it eats:
# At the top, also: import random
# Make apple_pen — hide it, lift it (penup), shape "circle",
#   color red ("#E74C3C")
# Make two boxes:  apple = [0, 0]   and   score = [0]
#   (1-item lists so we can change them inside functions)
# Make score_pen — for writing the score. Color "white". Goto (-230, 220)
# Make a function draw_score() that clears score_pen and writes
#   f"Score: {score[0]}"
# Make a function place_apple() that picks a random x and y on the
#   grid and moves apple_pen there
# Update move(): if the new head is on the apple → score goes up,
#   place a new apple, and DON'T pop the tail (snake grows!)
# At the bottom (before move()): place_apple(), apple_pen.stamp(), draw_score()

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

# 👆

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

<pre class="py-solution">
import random

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

def draw_snake():
    snake_pen.clear()
    for part in snake:
        snake_pen.goto(part)
        snake_pen.stamp()

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

    draw_snake()
    screen.update()
    screen.ontimer(move, 150)

place_apple()
apple_pen.stamp()
draw_score()
</pre>

<sub>Class 11 — Step **2** of 2</sub>

# ⭐ Step 2 — Apple + eating + score

Add the **apple**, **score counter**, and make the snake **grow**
when it eats.

## ✏️ What to change

Inside the marker region (and also `import random` at the top):

1. A second pen `apple_pen` (shape `"circle"`, red `#E74C3C`)
2. Two one-item lists: `apple = [0, 0]` and `score = [0]`
3. A third pen `score_pen` for writing text, positioned top-left
4. `def draw_score()` — clears score_pen and writes `Score: N`
5. `def place_apple()` — picks a random grid cell with
   `random.randint(0, 19) * 20 - 200`
6. Change `move()`: if `new_head == apple`, score goes up, a new
   apple is placed, and we **skip** `snake.pop(0)` (the snake
   grows!)
7. Right before `move()` at the bottom: initial
   `place_apple()`, `apple_pen.stamp()`, and `draw_score()`

Tap **▶ Run**, steer with arrows, chase the apple. 🍎🐍

> 💡 Stuck? Tap **Solution**.

---

## 🔍 Notice

- `apple` and `score` are **one-item lists** (`[0, 0]`, `[0]`) so
  our functions can mutate them. Changing a plain number inside a
  function wouldn't stick without `global`.
- **Growing** is simply *"skip the tail pop when we eat."* One
  line of logic!

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
