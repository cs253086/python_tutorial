---
layout: default
title: "Project 3 — Step 4 — Smoke trail"
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

rocket_x = 0
rocket_y = -200

for step in range(50):
    # Draw a puff of smoke below the rocket
    pen.penup()
    pen.goto(rocket_x + random.randint(-10, 10), rocket_y - 20)
    pen.color('orange')
    pen.dot(15)

    # Draw the rocket
    pen.penup()
    pen.goto(rocket_x, rocket_y)
    pen.color('silver')
    pen.dot(30)

    rocket_y = rocket_y + 8

screen.mainloop()
</pre>

<sub>Project 3 — Step **4** of 4</sub>

# ⭐ Step 4 — Smoke trail

➡️ Add a trail of orange smoke puffs behind the rocket.

Inside the same `for` loop, before drawing the rocket, draw a
small **orange dot** just below it. Each loop turn leaves
another puff behind, building up a trail.

## ✏️ What to type

At the **top** of the `for step in range(50):` loop, **before**
the rocket drawing lines, add:

```
    pen.penup()
    pen.goto(rocket_x + random.randint(-10, 10), rocket_y - 20)
    pen.color('orange')
    pen.dot(15)
```

(Keep it pushed in by 4 spaces so it stays inside the loop.)

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

for step in range(50):
    # Add an orange smoke puff here, just below the rocket

    pen.penup()
    pen.goto(rocket_x, rocket_y)
    pen.color('silver')
    pen.dot(30)

    rocket_y = rocket_y + 8

screen.mainloop()
</pre>

Tap **▶ Run**. You should see a stack of silver rocket dots
with **orange smoke** beneath each one. 🔥🚀

### 🧩 Ideas to try

- Make the smoke a different color (try `'red'` or `'gold'`).
- Slow the rocket down by changing `+ 8` to `+ 4`.
- Add a **fuel** variable: `fuel = 50` then `for step in
  range(fuel):` — ask the player for fuel with `input`!

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 3](./step-3.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/rocket-launch">Raspberry Pi Foundation — Rocket Launch</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
