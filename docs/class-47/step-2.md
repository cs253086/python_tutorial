---
layout: default
title: "Class 47 — Step 2"
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
direction = "RIGHT"

def tick():
    print(f"going {direction}")
    draw_board()
    draw_snake(snake)
    screen.update()
    screen.ontimer(tick, 200)

tick()
screen.mainloop()
</pre>

<sub>Class 47 — Step **2** of 2</sub>

# ⭐ Step 2 — Tell Snake which way it's going

Your Snake from Class 46 redraws every tick — but it has no
idea which way it's going.

Add a `direction` box, then have `tick()` print which way the
snake is heading.

---

## ✏️ Your turn

In the starter below:

1. **Below** the line `snake = [(-20, 0), (0, 0), (20, 0)]`, add:

   ```python
   direction = "RIGHT"
   ```

2. **Inside** `tick()`, at the top, add:

   ```python
   print(f"going {direction}")
   ```

Tap **▶ Run**. You should see:

- The green checker board with a 3-tile snake (same as Class 46).
- The output area prints `going RIGHT` **5 times a second**.

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- `direction` is set **once**, outside the function. Nothing
  inside `tick` changes it.
- `tick` **reads** the box every frame and prints the heading.
- The snake STILL doesn't move — reading isn't moving. Next
  class (48) we use `direction` to figure out where the new
  **head** should go.

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
# 👇 YOUR TURN A
# Add a direction box here:
#   direction = "RIGHT"
# 👆

def tick():
    # 👇 YOUR TURN B
    # Add a line here that prints:
    #   going RIGHT
    # Use an f-string with {direction}.
    # 👆 (Stuck? Tap 💡 Solution.)
    draw_board()
    draw_snake(snake)
    screen.update()
    screen.ontimer(tick, 200)

tick()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
