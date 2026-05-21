---
layout: default
title: "Project 3 — Step 2 — Add the rocket"
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

# Draw the rocket at the bottom
rocket_x = 0
rocket_y = -200

pen.penup()
pen.goto(rocket_x, rocket_y)
pen.color('silver')
pen.dot(30)

screen.mainloop()
</pre>

<sub>Project 3 — Step **2** of 4</sub>

# ⭐ Step 2 — Add the rocket

➡️ Draw the rocket at the bottom of the screen.

For now the rocket is just a big silver dot. We'll make it move
in the next step.

## ✏️ What to type

After the star loop (before `screen.mainloop()`), add:

```
rocket_x = 0
rocket_y = -200

pen.penup()
pen.goto(rocket_x, rocket_y)
pen.color('silver')
pen.dot(30)
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

# Add a silver rocket dot at (0, -200) here

screen.mainloop()
</pre>

Tap **▶ Run**. A silver rocket should appear at the bottom of
the starry sky. 🚀

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-3.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 3</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/rocket-launch">Raspberry Pi Foundation — Rocket Launch</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
