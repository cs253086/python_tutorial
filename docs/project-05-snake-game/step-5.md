---
layout: default
title: "Project 5 — Step 5 — Game over"
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

    # Wall check
    if (new_head[0] < -200 or new_head[0] > 180
            or new_head[1] < -200 or new_head[1] > 180):
        game_over()
        return

    # Self check
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

<sub>Project 5 — Step **5** of 5</sub>

# ⭐ Step 5 — Game over

➡️ Make the game **end** when the snake hits a wall or its own
tail.

Two new things:

- A `game_over()` function that writes **GAME OVER** in the
  middle of the board
- Two crash checks at the **top** of `move()`:
  - **Wall:** is the new head outside the board?
  - **Self:** is the new head already part of the snake's body?
- If either is true: `game_over()` and `return` (so the function
  ends without calling `ontimer` again, stopping the loop)

## ✏️ What to type

Add a `game_over()` function. Add the two checks at the top of
`move()`. Tap **💡 Solution** for the full file.

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

# Add a game_over() function that:
#   - makes a new turtle, writes "GAME OVER" centered at (0, 20)
#   - writes f"Score: {score[0]}" centered at (0, -20)
#   - calls screen.update()

direction = [20, 0]

def move():
    head = snake[-1]
    new_head = (head[0] + direction[0], head[1] + direction[1])

    # Add a WALL check: if new_head x or y is out of bounds,
    #   call game_over() and return.
    # Add a SELF check: if new_head is in snake,
    #   call game_over() and return.

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

Tap **▶ Run** — and **play**! Hit a wall: GAME OVER. Bite your
tail: GAME OVER. 🎉

### 🔍 Tip

`return` inside `move()` makes the function stop early. With no
more `screen.ontimer(move, 150)` call, the loop stops by itself.

## 🏆 You built Snake!

From `print('Hello')` (Project 1) to a complete arcade game.
Show your parents. 🙌

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 4](./step-4.html)</sub>
