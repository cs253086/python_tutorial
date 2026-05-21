---
layout: default
title: "Project 2 — Step 4 — Score with if / elif / else"
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

if distance < 40:
    print('BULLSEYE! 10 points 🎯')
elif distance < 70:
    print('Inner ring! 5 points')
elif distance < 100:
    print('Outer ring! 1 point')
else:
    print('You missed! 0 points')

screen.mainloop()
</pre>

<sub>Project 2 — Step **4** of 5</sub>

# ⭐ Step 4 — Score with `if` / `elif` / `else`

➡️ Use the distance to decide the score.

The target has three rings with these sizes:

- **Centre red** — within 40 pixels → **10 points** (bullseye!)
- **White ring** — within 70 pixels → **5 points**
- **Outer red** — within 100 pixels → **1 point**
- **Off the target** — anywhere else → **0 points** (a miss)

Python picks between these options with **`if`**, **`elif`** (short
for "else if"), and **`else`**. Python checks them in order and
runs the **first** one whose rule is true.

## ✏️ What to type

At the bottom (before `screen.mainloop()`), add:

```
if distance < 40:
    print('BULLSEYE! 10 points 🎯')
elif distance < 70:
    print('Inner ring! 5 points')
elif distance < 100:
    print('Outer ring! 1 point')
else:
    print('You missed! 0 points')
```

<pre class="py-starter" markdown="0">
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

# Add an if / elif / else here to score the arrow

screen.mainloop()
</pre>

Tap **▶ Run** a few times. Each time, you'll see a different
score depending on where the arrow lands.

### 🔍 Tip

The lines under each `if`, `elif`, or `else` are **pushed in**
by 4 spaces. That's how Python knows which lines belong to each
case.

Python only runs **one** of the cases — the first one whose
rule is true. If you score a bullseye, it doesn't also check
the other rings.

### 💡 If you get a red error

- Check each line ends with `:` after the rule.
- Make sure all the `print` lines are pushed in by 4 spaces.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-5.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 5</a>
</p>

<sub>[⬅ Back to Step 3](./step-3.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/target-practice">Raspberry Pi Foundation — Target Practice</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
