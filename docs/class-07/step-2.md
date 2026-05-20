---
layout: default
title: "Class 7 — Step 2"
---

<pre class="py-solution" markdown="0">
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

pen.color("#AAD751")
for col in range(20):
    pen.goto(-200 + col * 20, 0)
    pen.stamp()

screen.update()
screen.mainloop()
</pre>

<sub>Class 7 — Step **2** of 4</sub>

# ⭐ Step 2 — Draw a row with the pen

In Class 6 you met the **pen**: `pen.color("...")` picks a color,
`pen.goto(x, y)` moves the pen to a spot, and `pen.stamp()` drops
a square stamp there.

Today we want **20 tiles in a row**, like this:

🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

Writing `pen.stamp()` 20 times is silly. We have a **`for` loop**
for that!

---

## 🧮 Where should each tile go?

Every tile is **20 pixels** wide. To make a row, each tile should
be **20 to the right** of the last one.

If we start at **x = -200** (far left), then:

| `col` | `col * 20` | `-200 + col * 20` |
|-----:|------:|------:|
| 0 | 0 | **-200** ← far left |
| 1 | 20 | -180 |
| 2 | 40 | -160 |
| … | … | … |
| 19 | 380 | **180** ← far right |

So if `col` walks from `0` to `19` (that's `range(20)`!), the
pen lands on **20 evenly-spaced spots**. Just what we need.

---

## 💡 Putting it together

Read the structure like a sentence:

> *"Set the color once. Then 20 times: move the pen one step
> right, and drop a stamp."*

That's the shape of the `for` loop you need. Go try it in the
editor below — tap **💡 Solution** if stuck.

---

## ✏️ Your turn

In the starter below, the pen currently stamps **one** tile in
the middle.

**Goal:** make it stamp a **row of 20 tiles** across the middle,
using a `for` loop and the math above.

The pen color is `"#AAD751"` (Google-Snake light green).

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- Same 3 commands you knew from Class 6 (`pen.color`, `pen.goto`,
  `pen.stamp`) — but now `pen.goto` and `pen.stamp` sit **inside**
  the loop, so they run **20** times.
- `pen.color` is **outside** the loop — we only need to set it
  once, not 20 times.

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

# 👇 YOUR TURN
# Right now the pen stamps ONE tile in the middle.
# Use a `for` loop to stamp a ROW of 20 tiles.
# (See the math table above, then tap 💡 Solution if stuck.)
pen.color("#AAD751")
pen.goto(0, 0)
pen.stamp()
# 👆

screen.update()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-3.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 3</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
