---
layout: default
title: "Project 2 — Step 2 — Add an arrow"
---

<pre class="py-solution" markdown="0">
import turtle
import random

screen = turtle.Screen()
screen.setup(400, 400)
screen.bgcolor('skyblue')

pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)

def draw_circle(radius, color):
    pen.penup()
    pen.goto(0, -radius)
    pen.pendown()
    pen.color(color)
    pen.begin_fill()
    pen.circle(radius)
    pen.end_fill()

draw_circle(100, 'red')
draw_circle(70, 'white')
draw_circle(40, 'red')

# Shoot an arrow at a random spot
arrow_x = random.randint(-150, 150)
arrow_y = random.randint(-150, 150)

pen.penup()
pen.goto(arrow_x, arrow_y)
pen.color('black')
pen.dot(10)

screen.mainloop()
</pre>

<sub>Project 2 — Step **2** of 5</sub>

# ⭐ Step 2 — Add an arrow

➡️ Pick a random spot for the arrow to land, and draw it.

We'll use **`random.randint`** to pick the x and y for the
arrow, then draw it as a black dot with **`pen.dot(10)`**.

## ✏️ What to type

**1.** At the top, under `import turtle`, add:

```
import random
```

**2.** After the three `draw_circle(...)` lines, add:

```
arrow_x = random.randint(-150, 150)
arrow_y = random.randint(-150, 150)

pen.penup()
pen.goto(arrow_x, arrow_y)
pen.color('black')
pen.dot(10)
```

<pre class="py-starter" markdown="0">
import turtle

screen = turtle.Screen()
screen.setup(400, 400)
screen.bgcolor('skyblue')

pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)

def draw_circle(radius, color):
    pen.penup()
    pen.goto(0, -radius)
    pen.pendown()
    pen.color(color)
    pen.begin_fill()
    pen.circle(radius)
    pen.end_fill()

draw_circle(100, 'red')
draw_circle(70, 'white')
draw_circle(40, 'red')

# Add: import random at the top
# Then add: random arrow_x, arrow_y, and draw a black dot at (arrow_x, arrow_y)

screen.mainloop()
</pre>

Tap **▶ Run** a few times. Each time, a black dot should appear
at a different spot on (or near) the target.

### 🔍 Tip

`random.randint(-150, 150)` picks a whole number anywhere from
-150 to 150. Sometimes the arrow lands on the target;
sometimes it misses!

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-3.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 3</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/target-practice">Raspberry Pi Foundation — Target Practice</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
