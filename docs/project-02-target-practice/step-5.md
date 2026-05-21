---
layout: default
title: "Project 2 — Step 5 — Over to you"
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

def shoot_arrow():
    arrow_x = random.randint(-150, 150)
    arrow_y = random.randint(-150, 150)

    pen.penup()
    pen.goto(arrow_x, arrow_y)
    pen.color('black')
    pen.dot(10)

    distance = math.sqrt(arrow_x**2 + arrow_y**2)
    if distance < 40:
        print('BULLSEYE! 10 points 🎯')
    elif distance < 70:
        print('Inner ring! 5 points')
    elif distance < 100:
        print('Outer ring! 1 point')
    else:
        print('You missed! 0 points')

draw_circle(100, 'red')
draw_circle(70, 'white')
draw_circle(40, 'red')

shoot_arrow()
shoot_arrow()
shoot_arrow()

screen.mainloop()
</pre>

<sub>Project 2 — Step **5** of 5</sub>

# ⭐ Step 5 — Over to you

➡️ Shoot **three arrows** instead of just one.

Right now you shoot one arrow per run. Let's wrap the shooting
code in a **function** so we can shoot **as many arrows as we
want**.

## ✏️ What to type

Wrap the random arrow + scoring code in a function called
`shoot_arrow()`, then call it **three times**.

The key change: change all your shooting code into one
function (push everything in by 4 spaces under
`def shoot_arrow():`), then below it write three calls:

```
shoot_arrow()
shoot_arrow()
shoot_arrow()
```

> 💡 Big change — tap **💡 Solution** to see the whole new file.

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

Tap **▶ Run**. You should see **three dots** on the target and
**three score lines** in the output.

### 🧩 Ideas to try

- Make it shoot **10 arrows** with a `for` loop:
  `for i in range(10): shoot_arrow()`
- Change the target colors (try `'gold'` and `'purple'`!).
- Make the bullseye **smaller** — harder to hit, more glory.
- Keep a **running total** of points.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 4](./step-4.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/target-practice">Raspberry Pi Foundation — Target Practice</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
