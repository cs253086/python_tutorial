---
layout: default
title: "Class 7 — Step 2"
---

<sub>Class 7 — Step **2** of 3</sub>

# ⭐ Step 2 — A row of tiles

Back in the code below, we'll use `for` to stamp a **whole
row** of tiles.

Find this part of your code:

```python
pen.goto(0, 0)
pen.stamp()
```

**Replace those two lines** with this loop:

```python
for col in range(10):
    x = -200 + col * 20
    pen.goto(x, 0)
    pen.stamp()
```

Your whole file should now look like this:

```python
import turtle

screen = turtle.Screen()
screen.title("Snake")
screen.bgcolor("#4A752C")
screen.setup(500, 500)

pen = turtle.Turtle()
pen.hideturtle()
pen.penup()
pen.shape("square")
pen.shapesize(1)
pen.color("#AAD751")

for col in range(10):
    x = -200 + col * 20
    pen.goto(x, 0)
    pen.stamp()

screen.mainloop()
```

Tap **▶ Run**.

You should see a **row of 10 green squares** across the middle! 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

## What happened?

The loop ran **10 times**, with `col` being `0`, `1`, `2`, … `9`.
Each time, it calculated `x = -200 + col * 20` — a spot a little
further right — and stamped a tile there.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-3.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 3</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
