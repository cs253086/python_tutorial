---
layout: default
title: "Class 46 — Step 2"
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

def draw_board():
    for row in range(20):
        for col in range(20):
            if (row + col) % 2 == 0:
                pen.color("#AAD751")
            else:
                pen.color("#A2D149")
            pen.goto(-200 + col * 20, -200 + row * 20)
            pen.stamp()

def draw_snake(snake):
    pen.color("white")
    for (x, y) in snake:
        pen.goto(x, y)
        pen.stamp()

snake = [(-20, 0), (0, 0), (20, 0)]

def tick():
    draw_board()
    draw_snake(snake)
    screen.update()
    screen.ontimer(tick, 200)

tick()
screen.mainloop()
</pre>

<sub>Class 46 — Step **2** of 2</sub>

# ⭐ Step 2 — Make Snake tick

Your Snake program from Class 45 draws the board and the snake
**once**, then sits there.

Now you'll wrap that drawing in a **`tick()`** function and call
`screen.ontimer(tick, 200)` so it runs **every 200 ms** — about
**5 times a second**.

The snake still won't move (it needs a direction first — that's
Class 47). But the **clock will be ticking**, and the program
is now *ready* to do something every frame.

---

## ✏️ Your turn

In the starter below, your Snake currently draws the board and
the snake **once** at the bottom of the file.

Three things to do (between the 👇 and 👆 markers):

1. **Define** a new function called `tick`. Inside it, call
   `draw_board()`, then `draw_snake(snake)`, then
   `screen.update()`, then `screen.ontimer(tick, 200)`.
2. **Call `tick()` once** to start the chain rolling.
3. **Delete** the three standalone calls (`draw_board()`,
   `draw_snake(snake)`, `screen.update()`) — they live **inside**
   `tick()` now.

Tap **▶ Run**. You should see the board redrawn 5 times a second.
(The snake stays put — direction comes next class.)

> 💡 Stuck? Tap **💡 Solution** to see the full file.

---

## 🔍 Notice

- The lines that **used to be** at the bottom (`draw_board()`,
  `draw_snake(snake)`, `screen.update()`) are now **inside**
  `tick()`. They still run — just on a schedule.
- The **first** `tick()` call at the bottom kicks off the chain.
  After that, each tick schedules the next from inside.
- `screen.ontimer(tick, 200)` = **5 ticks per second**. Try `100`
  (10/sec) or `500` (2/sec).

The snake STILL doesn't move (it's redrawn at the same spot
every tick). But the **game loop is running**. Next class (47),
we add a `direction` box so the snake knows which way to go.

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

def draw_board():
    for row in range(20):
        for col in range(20):
            if (row + col) % 2 == 0:
                pen.color("#AAD751")
            else:
                pen.color("#A2D149")
            pen.goto(-200 + col * 20, -200 + row * 20)
            pen.stamp()

def draw_snake(snake):
    pen.color("white")
    for (x, y) in snake:
        pen.goto(x, y)
        pen.stamp()

snake = [(-20, 0), (0, 0), (20, 0)]

# 👇 YOUR TURN
# 1. Define a tick() function that calls draw_board(),
#    draw_snake(snake), screen.update(), and schedules itself
#    with screen.ontimer(tick, 200).
# 2. Call tick() once to start the chain.
# 3. Delete the three lines below (draw_board / draw_snake /
#    screen.update) - they live inside tick() now.
draw_board()
draw_snake(snake)
screen.update()
# 👆 (Stuck? Tap 💡 Solution.)

screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
