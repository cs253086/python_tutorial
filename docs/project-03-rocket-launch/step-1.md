---
layout: default
title: "Project 3 — Step 1 — Draw the background"
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

# Draw 30 random stars
pen.color('white')
for i in range(30):
    star_x = random.randint(-200, 200)
    star_y = random.randint(-250, 250)
    pen.penup()
    pen.goto(star_x, star_y)
    pen.dot(3)

screen.mainloop()
</pre>

<sub>Project 3 — Step **1** of 4</sub>

# ⭐ Step 1 — Draw the background

➡️ Paint a dark night sky with 30 random white stars.

This is your first **`for` loop** in a real program. We tell
Python *"do this 30 times"* and each turn it picks a random
spot and dots a star there.

## ✏️ What to type

In the editor, add the night sky setup and the star loop:

```
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

screen.mainloop()
```

<pre class="py-starter" markdown="0">
import turtle
import random

screen = turtle.Screen()
screen.setup(400, 500)

# Make the background dark blue (#0a0a40)
# Then draw 30 random white stars using a for loop

screen.mainloop()
</pre>

Tap **▶ Run**. A dark blue rectangle with 30 little white dots
should appear — a starry night. ✨

### 🔍 Tip

`for i in range(30):` means *"do the indented block 30 times."*
`i` is just a counter — you don't have to use it inside the
loop.

Each loop turn picks a fresh random `star_x` and `star_y`, so
the stars land in different places.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Project 3](./index.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/rocket-launch">Raspberry Pi Foundation — Rocket Launch</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
