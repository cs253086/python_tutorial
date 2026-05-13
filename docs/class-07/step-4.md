---
layout: default
title: "Class 7 — Step 4"
---

<pre class="py-solution" markdown="0">
pen.color("#AAD751")
for row in range(20):
    for col in range(20):
        pen.goto(-200 + col * 20, -200 + row * 20)
        pen.stamp()
</pre>

<sub>Class 7 — Step **4** of 5</sub>

# ⭐ Step 4 — Spread the grid

Now let's actually **use** `row` to move each tile up by a row.

Up to now `pen.goto(-200 + col * 20, 0)` only used `col`. We
hard-coded `y = 0` so every row drew on top of itself.

Today's two tiny changes:

## ✏️ What to change

Between the markers:

1. **Delete** the `print(row, col)` line — the peek was just for
   step 3.
2. Change the `pen.goto` line so **both** numbers come from the
   loops:
   ```python
   pen.goto(-200 + col * 20, -200 + row * 20)
   ```

The result inside the loops:

```python
pen.color("#AAD751")
for row in range(20):
    for col in range(20):
        pen.goto(-200 + col * 20, -200 + row * 20)
        pen.stamp()
```

Tap **▶ Run**. You should see the **full 20×20 grid** in
light green. 🟩🟩🟩 (all the same color for now — we'll add the
checker pattern next.)

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- `-200 + row * 20` turns `row` (0…19) into screen y-positions
  `-200, -180, … 180` — exactly one tile-height apart.
- Both numbers (`x` and `y`) now use the loop counters — so each
  of the 400 turns picks a **different** spot.
- The math is the same recipe for both: **start at the corner
  (-200) and step by 20 each time**.

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
# Two changes:
# 1. DELETE the print(row, col) line.
# 2. Change pen.goto to use BOTH row and col:
#       pen.goto(-200 + col * 20, -200 + row * 20)
pen.color("#AAD751")
for row in range(20):
    for col in range(20):
        print(row, col)
        pen.goto(-200 + col * 20, 0)
        pen.stamp()
# 👆

screen.update()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-5.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 5</a>
</p>

<sub>[⬅ Back to Step 3](./step-3.html)</sub>
