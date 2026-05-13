---
layout: default
title: "Class 7 — Step 2"
---

<pre class="py-solution" markdown="0">
pen.color("#AAD751")
for col in range(20):
    pen.goto(-200 + col * 20, 0)
    pen.stamp()
</pre>

<sub>Class 7 — Step **2** of 4</sub>

# ⭐ Step 2 — One row of tiles

Your Class 6 code stamps **one** tile. The first step toward a
whole board is a **single row** of 20 tiles across the middle.

A `for` loop is perfect for "do this 20 times, each time a little
to the right."

## ✏️ What to type

Use these 4 lines:

```python
pen.color("#AAD751")
for col in range(20):
    pen.goto(-200 + col * 20, 0)
    pen.stamp()
```

In the starter below, **replace the 3 lines between the arrows**
(👇 … 👆) with the 4 lines above.

Tap **▶ Run**. You should see **20 light-green tiles** in a
horizontal row across the middle of the window. 🟩🟩🟩🟩…

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- `range(20)` gives `col` the values **0, 1, 2, … 19** — 20 turns.
- `-200 + col * 20` turns those into screen x-positions:
  `-200, -180, -160, … 180` (exactly one tile-width apart).
- All tiles sit at `y = 0` for now. Next step we'll add a second
  loop so the row repeats up and down.

<pre class="py-starter" markdown="0">
import turtle

screen = turtle.Screen()
screen.title("Snake")
screen.bgcolor("#4A752C")
screen.setup(500, 500)
screen.tracer(0)

pen = turtle.Turtle()
pen.hideturtle()
pen.penup()
pen.shape("square")

# 👇 Replace the 3 lines below with the 4 lines from the lesson above.
pen.color("#AAD751")
pen.goto(0, 0)
pen.stamp()
# 👆 (Stuck? Tap 💡 Solution.)

screen.update()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-3.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 3</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
