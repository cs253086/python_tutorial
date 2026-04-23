---
layout: default
title: "Class 9 — Step 2"
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

# 👇
# Replace the static draw below with a moving + steerable snake:
# Make a list called "direction" = [20, 0]  (means: 20 right, 0 up)
# Make a function move() that:
#   - works out the new head from current head + direction
#   - adds the new head, drops the old tail (snake slides forward)
#   - clears snake_pen and redraws each part
#   - calls screen.update() and screen.ontimer(move, 150) to keep going
# Make 4 little functions: go_up, go_down, go_left, go_right
#   that change the "direction" numbers
# Call screen.listen() and screen.onkey(go_up, "Up") for each arrow
# Call move() once at the end to start the game loop
for part in snake:
    snake_pen.goto(part)
    snake_pen.stamp()
# 👆

screen.update()
screen.mainloop()
</pre>

<pre class="py-solution">
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
</pre>

<sub>Class 9 — Step **2** of 2</sub>

# ⭐ Step 2 — Move + steer the snake

In Class 8 the snake is drawn **once** and stays still. Let's
replace the static draw with a `move()` function that runs every
150 ms, plus four arrow-key functions that change the direction.

## ✏️ What to change

Between the 👇 and 👆 markers, delete the 3-line static for loop
and add:

1. `direction = [20, 0]` — the snake's current step (20 right, 0 up)
2. `def move():` — computes a new head, slides the snake forward
   (append new head, pop old tail), redraws, calls
   `screen.update()`, and re-schedules itself with `ontimer`
3. Four tiny functions: `go_up`, `go_down`, `go_left`, `go_right`
   that change `direction`
4. `screen.listen()` + four `screen.onkey(...)` calls binding each
   arrow key to its function
5. A final `move()` to start the game loop

Tap **▶ Run**. Click the board once so keys are heard, then press
the **arrow keys**. 🎮

> 💡 Stuck? Tap **Solution**.

---

## 🔍 Notice

- The game **loop** is just `move()` calling
  `screen.ontimer(move, 150)` from inside itself — every tick,
  it reschedules itself.
- `snake_pen.clear()` wipes the previous snake stamps so the new
  frame isn't drawn on top.

> ⚠️ Don't panic when the snake flies off the edge — that's what
> Class 12 fixes.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
