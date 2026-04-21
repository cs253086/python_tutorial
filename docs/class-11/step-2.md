---
layout: default
title: "Class 11 — Step 2"
---

<sub>Class 11 — Step **2** of 3</sub>

# ⭐ Step 2 — Make the apple appear

Edit the code below: add `import random` right under
`import turtle`:

```python
import turtle
import random
```

Then, **after** you make `snake_pen`, add this block to create the
**apple pen** and put the apple somewhere random:

```python
apple_pen = turtle.Turtle()
apple_pen.hideturtle()
apple_pen.penup()
apple_pen.shape("circle")
apple_pen.shapesize(1)
apple_pen.color("#E74C3C")

apple = [0, 0]

def place_apple():
    apple[0] = random.randint(0, 19) * 20 - 200
    apple[1] = random.randint(0, 19) * 20 - 200
    apple_pen.goto(apple[0], apple[1])

place_apple()
apple_pen.stamp()
```

Tap **▶ Run**.

🍎 **There's an apple** — red and round, in a random spot!

Run it a few more times. Each time the apple appears somewhere
different.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-3.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 3</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
