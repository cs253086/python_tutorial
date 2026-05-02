---
layout: default
title: "Class 12 — Step 2"
---

<pre class="py-solution" markdown="0">
def game_over():
    over = turtle.Turtle()
    over.hideturtle()
    over.penup()
    over.color("white")
    over.goto(0, 20)
    over.write("GAME OVER", align="center",
               font=("Arial", 32, "bold"))
    over.goto(0, -20)
    over.write(f"Score: {score[0]}", align="center",
               font=("Arial", 20, "bold"))
    screen.update()

direction = [20, 0]

def move():
    head = snake[-1]
    new_head = (head[0] + direction[0], head[1] + direction[1])

    if (new_head[0] < -200 or new_head[0] > 180
            or new_head[1] < -200 or new_head[1] > 180):
        game_over()
        return

    if new_head in snake:
        game_over()
        return

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
</pre>

<sub>Class 12 — Step **2** of 2</sub>

# ⭐ Step 2 — Game over screen + collisions

Between the markers, add a `game_over()` function and two crash
checks at the top of `move()`.

## ✏️ What to change

1. Write `def game_over():` that creates a new turtle and uses
   `.write()` to draw `GAME OVER` and the final `Score: N` in the
   middle of the board.
2. In `move()`, **before** `snake.append(new_head)`, add two
   checks:
   - **Wall**: if `new_head[0] < -200 or new_head[0] > 180 or
     new_head[1] < -200 or new_head[1] > 180` → call
     `game_over()` then `return`.
   - **Self**: if `new_head in snake` → call `game_over()` then
     `return`.

Tap **▶ Run** — and **play**! 🎮

Hit a wall → **GAME OVER**. Steer into your tail → **GAME OVER**.

> 💡 Big change — tap **Solution** to drop it all in place.

---

## 🔍 Notice

- `return` stops `move()` early, so no more `ontimer(move, 150)`
  is scheduled. The game quietly ends.
- `new_head in snake` uses Python's `in` operator to scan the whole
  body list in one line.

## 🏆 You built a working Snake game!

From `print("Hello!")` to here. Show it to someone and be proud. 🎉

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

# 👇
# Make the snake able to LOSE the game:
# Make a function game_over() that writes "GAME OVER" and the
#   final score in the middle of the board (use a new turtle to write)
# Inside move(), at the TOP, add two checks:
#   - WALL check: if new_head goes past the edges (x < -200, x > 180,
#     y < -200, or y > 180) → call game_over() then return
#   - SELF check: if new_head is in snake (already a body part)
#     → call game_over() then return

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

place_apple()
apple_pen.stamp()
draw_score()
move()

screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I made a game! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
