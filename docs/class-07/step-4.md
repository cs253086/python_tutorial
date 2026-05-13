---
layout: default
title: "Class 7 — Step 4"
---

<pre class="py-solution" markdown="0">
for row in range(20):
    for col in range(20):
        if (row + col) % 2 == 0:
            pen.color("#AAD751")
        else:
            pen.color("#A2D149")
        pen.goto(-200 + col * 20, -200 + row * 20)
        pen.stamp()
</pre>

<sub>Class 7 — Step **4** of 4</sub>

# ⭐ Step 4 — Make it a checkerboard

One color is plain. The classic Snake board is a **checker**:
two greens alternating like a chess board.

The trick is **`(row + col) % 2`**:

- When `(row + col)` is **even**, the leftover after `÷ 2` is **0**
  → use light green.
- When it's **odd**, the leftover is **1** → use darker green.

Each step across (or down) flips even/odd, so neighbors get
different colors — that's the checker.

## ✏️ What to type

Use these 7 lines:

```python
for row in range(20):
    for col in range(20):
        if (row + col) % 2 == 0:
            pen.color("#AAD751")
        else:
            pen.color("#A2D149")
        pen.goto(-200 + col * 20, -200 + row * 20)
        pen.stamp()
```

In the starter below, **replace the 5 lines between the arrows**
(👇 … 👆) with the 7 lines above.

What changed compared to Step 3:

1. The `pen.color("#AAD751")` line moved **inside** the loops.
2. It's now wrapped in an `if`/`else` that picks one of **two**
   colors based on `(row + col) % 2`.

Tap **▶ Run**. You should see the full Google-Snake
checkerboard. 🟩🟨

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- Try changing one of the greens to `"#FF0000"` (red) — half the
  board turns red. That's how you can **see** which tiles are the
  "even" ones.
- `(row + col) % 2` is the **same trick** chess uses to color
  its squares. You just used a classic computer-science move!

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

# 👇 Replace the 5 lines below with the 7 lines from the lesson above.
pen.color("#AAD751")
for row in range(20):
    for col in range(20):
        pen.goto(-200 + col * 20, -200 + row * 20)
        pen.stamp()
# 👆 (Stuck? Tap 💡 Solution.)

screen.update()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 3](./step-3.html)</sub>
