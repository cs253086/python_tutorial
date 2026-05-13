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

## ✏️ What to change

Between the markers, two things:

1. **Wrap** your `for col` loop in another loop:
   `for row in range(20):`
2. Change the `pen.goto` line so **both** numbers come from the
   loops:
   ```python
   pen.goto(-200 + col * 20, -200 + row * 20)
   ```

The result:

```python
pen.color("#AAD751")
for row in range(20):
    for col in range(20):
        pen.goto(-200 + col * 20, -200 + row * 20)
        pen.stamp()
```

Tap **▶ Run**. You should see the **full 20×20 grid** in
light green. 🟩🟩🟩 (all the same color for now — checker pattern
is next.)

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

# 👇
# Two changes:
# 1. WRAP your for-col loop in another for-row loop:
#      for row in range(20):
#          for col in range(20):
# 2. Change pen.goto so it uses BOTH row and col:
#      pen.goto(-200 + col * 20, -200 + row * 20)
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
