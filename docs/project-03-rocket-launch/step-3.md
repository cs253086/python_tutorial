---
layout: default
title: "Project 3 — Step 3 — Liftoff!"
---

<pre class="py-solution" markdown="0">
import turtle
import random

screen = turtle.Screen()
screen.setup(400, 500)
screen.bgcolor('#0a0a40')

pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)

pen.color('white')
for i in range(30):
    star_x = random.randint(-200, 200)
    star_y = random.randint(-250, 250)
    pen.penup()
    pen.goto(star_x, star_y)
    pen.dot(3)

# Animate the rocket flying up
rocket_x = 0
rocket_y = -200

for step in range(50):
    pen.penup()
    pen.goto(rocket_x, rocket_y)
    pen.color('silver')
    pen.dot(30)

    rocket_y = rocket_y + 8

screen.mainloop()
</pre>

<sub>Project 3 — Step **3** of 4</sub>

# ⭐ Step 3 — Liftoff!

➡️ Make the rocket fly up the screen.

A simple trick: draw the rocket, then move its y position up a
bit, then draw it again, and again, and again — **50 times**!
That's a `for` loop with `range(50)`.

## ✏️ What to type

Replace the rocket-drawing block from Step 2 with a **loop**
that draws and moves the rocket 50 times:

```
rocket_x = 0
rocket_y = -200

for step in range(50):
    pen.penup()
    pen.goto(rocket_x, rocket_y)
    pen.color('silver')
    pen.dot(30)

    rocket_y = rocket_y + 8
```

<pre class="py-starter" markdown="0">
import turtle
import random

screen = turtle.Screen()
screen.setup(400, 500)
screen.bgcolor('#0a0a40')

pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)

pen.color('white')
for i in range(30):
    star_x = random.randint(-200, 200)
    star_y = random.randint(-250, 250)
    pen.penup()
    pen.goto(star_x, star_y)
    pen.dot(3)

rocket_x = 0
rocket_y = -200

pen.penup()
pen.goto(rocket_x, rocket_y)
pen.color('silver')
pen.dot(30)

# Change the single draw above into a for loop that:
#   - draws the rocket
#   - moves rocket_y up by 8
#   - repeats 50 times

screen.mainloop()
</pre>

Tap **▶ Run**. The rocket should leave a **trail of silver
dots** going up the screen. It's not pretty smoke yet — just a
stack of rockets — but the rocket has moved! 🚀

### 🔍 Tip

`rocket_y = rocket_y + 8` adds **8** to the rocket's current y
each turn. After 50 turns, the rocket has moved up by
50 × 8 = **400 pixels** — right off the top.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-4.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 4</a>
</p>

<sub>[⬅ Back to Step 2](./step-2.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/rocket-launch">Raspberry Pi Foundation — Rocket Launch</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
