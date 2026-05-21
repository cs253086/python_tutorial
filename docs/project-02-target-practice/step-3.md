---
layout: default
title: "Project 2 — Step 3 — How far from the centre?"
---

<pre class="py-solution" markdown="0">
import turtle
import random
import math

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

arrow_x = random.randint(-150, 150)
arrow_y = random.randint(-150, 150)

pen.penup()
pen.goto(arrow_x, arrow_y)
pen.color('black')
pen.dot(10)

distance = math.sqrt(arrow_x**2 + arrow_y**2)
print(f'Arrow landed at ({arrow_x}, {arrow_y})')
print(f'Distance from centre: {distance}')

screen.mainloop()
</pre>

<sub>Project 2 — Step **3** of 5</sub>

# ⭐ Step 3 — How far from the centre?

➡️ Find out how far the arrow landed from the bullseye.

We need this number so we can decide what score to give the
arrow. Python has a **`math`** module with a `sqrt` function
that we'll use to measure the distance.

The formula is: **distance = √(x² + y²)** (Pythagoras!).

## ✏️ What to type

**1.** At the top, add another import:

```
import math
```

**2.** At the bottom (before `screen.mainloop()`), add:

```
distance = math.sqrt(arrow_x**2 + arrow_y**2)
print(f'Arrow landed at ({arrow_x}, {arrow_y})')
print(f'Distance from centre: {distance}')
```

<pre class="py-starter" markdown="0">
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

arrow_x = random.randint(-150, 150)
arrow_y = random.randint(-150, 150)

pen.penup()
pen.goto(arrow_x, arrow_y)
pen.color('black')
pen.dot(10)

# Add: import math at the top
# Then calculate distance = math.sqrt(arrow_x**2 + arrow_y**2)
# Print where the arrow landed and the distance

screen.mainloop()
</pre>

Tap **▶ Run**. You should see something like:

```text
Arrow landed at (45, -23)
Distance from centre: 50.53711507397023
```

### 🔍 Tip

`**` is Python's power sign. `arrow_x**2` means *"arrow_x to the
power of 2"* (i.e. arrow_x × arrow_x). Squaring a number is the
first step of measuring distance.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-4.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 4</a>
</p>

<sub>[⬅ Back to Step 2](./step-2.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/target-practice">Raspberry Pi Foundation — Target Practice</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
