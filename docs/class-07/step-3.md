---
layout: default
title: "Class 7 — Step 3"
---

<pre class="py-solution" markdown="0">
pen.color("#AAD751")
for row in range(20):
    for col in range(20):
        pen.goto(-200 + col * 20, -200 + row * 20)
        pen.stamp()
</pre>

<sub>Class 7 — Step **3** of 4</sub>

# ⭐ Step 3 — A whole grid

A single row is nice. A whole **grid** needs `rows × columns`
tiles — and that's a **loop inside a loop**.

We'll also use `row` to push each row of tiles upward, so the
grid actually spreads.

## ✏️ What to type

Use these 5 lines:

```python
pen.color("#AAD751")
for row in range(20):
    for col in range(20):
        pen.goto(-200 + col * 20, -200 + row * 20)
        pen.stamp()
```

In the starter below, **replace the 4 lines between the arrows**
(👇 … 👆) with the 5 lines above.

Two things changed compared to Step 2:

1. A **new outer loop** `for row in range(20):` wraps the
   `for col` loop.
2. The `pen.goto` line now uses **both** `row` (for y) and `col`
   (for x).

Tap **▶ Run**. You should see the **full 20×20 grid** in light
green. 🟩🟩🟩 (all the same color for now — checker pattern is
next.)

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- The **inner** loop runs fully (20 times) for **every one** turn
  of the **outer** loop. So the body runs 20 × 20 = **400** times.
- `-200 + row * 20` turns `row` (0…19) into screen y-positions
  `-200, -180, … 180` — exactly one tile-height apart.
- Both numbers (`x` and `y`) now use the loop counters — so each
  of the 400 turns picks a **different** spot.

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

# 👇 Replace the 4 lines below with the 5 lines from the lesson above.
pen.color("#AAD751")
for col in range(20):
    pen.goto(-200 + col * 20, 0)
    pen.stamp()
# 👆 (Stuck? Tap 💡 Solution.)

screen.update()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-4.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 4</a>
</p>

<sub>[⬅ Back to Step 2](./step-2.html)</sub>
