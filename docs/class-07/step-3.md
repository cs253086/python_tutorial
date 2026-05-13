---
layout: default
title: "Class 7 — Step 3"
---

<pre class="py-solution" markdown="0">
pen.color("#AAD751")
for row in range(20):
    for col in range(20):
        print(row, col)
        pen.goto(-200 + col * 20, 0)
        pen.stamp()
</pre>

<sub>Class 7 — Step **3** of 5</sub>

# ⭐ Step 3 — Nest the loops

A row is nice. A whole **grid** needs `rows × columns` — and that
means a **loop inside a loop**.

Today's step is sneaky: we'll add the outer loop, but we won't
move the tile up or down yet. Why? So you can **see** that the
nested loop really runs 20 × 20 = **400** times. We'll add a
`print(row, col)` so the proof shows up in the output.

## ✏️ What to change

Between the markers:

1. **Wrap** your `for col` loop in another loop:
   `for row in range(20):`
2. Inside the loops, also add `print(row, col)` so we can see
   each turn.

The new shape:

```python
pen.color("#AAD751")
for row in range(20):
    for col in range(20):
        print(row, col)
        pen.goto(-200 + col * 20, 0)
        pen.stamp()
```

Tap **▶ Run**. You'll see:

- The same single row of tiles (because we still use `y = 0`).
- The output area filling with **400 lines**:
  `0 0`, `0 1`, … `0 19`, `1 0`, … `19 19`. 🎯

That's the proof: nesting really did do 20 × 20 jobs.

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- The **inner** loop runs fully (20 times) for every **one** turn
  of the **outer** loop.
- `print(row, col)` is just a peek behind the curtain. We'll
  delete it in the next step.
- All the tiles still stamp on top of each other in one row because
  we haven't told them to move up yet.

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

# 👇
# WRAP your for-col loop in another for-row loop:
#   for row in range(20):
#       for col in range(20):
#           print(row, col)
#           pen.goto(-200 + col * 20, 0)
#           pen.stamp()
# Don't move the tile yet — it still draws at y = 0.
# The print() is just so you can SEE that 20 x 20 = 400 turns.
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
