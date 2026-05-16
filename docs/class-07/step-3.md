---
layout: default
title: "Class 7 — Step 3"
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
for row in range(20):
    for col in range(20):
        pen.goto(-200 + col * 20, -200 + row * 20)
        pen.stamp()

screen.update()
screen.mainloop()
</pre>

<sub>Class 7 — Step **3** of 4</sub>

# ⭐ Step 3 — A loop inside a loop

One row — great! But the Snake board has **20 rows**. We need to
draw a row, then another row higher up, then another… **20 times**.

Doing the same thing many times → we know what that means.
**Another `for` loop!**

This time the new loop goes **around** the row loop — a loop
**inside** another loop.

---

## 🤸 A loop inside a loop — a tiny example first

```python
for row in range(4):
    for jack in range(3):
        print(f"row {row}, jack {jack}")
```

This prints **4 × 3 = 12** lines:

```text
row 0, jack 0
row 0, jack 1
row 0, jack 2
row 1, jack 0
row 1, jack 1
...
row 3, jack 2
```

### 🔍 What just happened

- The **outside** loop starts with `row = 0`.
- The **inside** loop runs **all the way through**
  (jack = 0, 1, 2).
- Then `row` becomes **1**, and the inside loop runs from the
  start again.
- So the inside loop runs **fully for every one turn** of the
  outside loop. 4 × 3 = **12** total.

> Python knows which loop is inside which by how far each line
> is **pushed in**. More push-in = deeper inside.

---

## 🧮 Where should each tile go?

We already know x: `-200 + col * 20`.

For y, it's the **same trick** with `row`:

| `row` | `row * 20` | `-200 + row * 20` |
|-----:|------:|------:|
| 0 | 0 | **-200** ← bottom |
| 1 | 20 | -180 |
| … | … | … |
| 19 | 380 | **180** ← top |

So `pen.goto(-200 + col * 20, -200 + row * 20)` lands on a
**different** spot for each (row, col) pair — **20 × 20 = 400**
different spots.

---

## ✏️ Your turn

In the starter below, you have your **row loop** from Step 2
(20 tiles across, at y = 0).

**Goal:** make it fill the **whole board** — 20 rows × 20
columns of light-green tiles.

Two things to do:

1. **Wrap** the existing `for col` loop in an **outside** loop:
   `for row in range(20):`
2. Change `pen.goto` so the **y** uses `row` (just like x uses
   `col`).

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- The pen `pen.goto(...)` line is now pushed in **twice** —
  because it lives **inside** two loops.
- That line runs **400 times**. Python does it instantly. ⚡
- The whole board is one color for now — next step we'll add the
  green checker pattern.

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
# Right now this draws ONE row (20 tiles at y = 0).
# Goal: fill the WHOLE board (20 rows × 20 columns).
# Step A: wrap the for-col loop in `for row in range(20):`
# Step B: change the y in pen.goto to `-200 + row * 20`
pen.color("#AAD751")
for col in range(20):
    pen.goto(-200 + col * 20, 0)
    pen.stamp()
# 👆

screen.update()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-4.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 4</a>
</p>

<sub>[⬅ Back to Step 2](./step-2.html)</sub>
