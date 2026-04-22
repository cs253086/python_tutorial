---
layout: default
title: "Class 7 — Step 2"
---

<sub>Class 7 — Step **2** of 2</sub>

# ⭐ Step 2 — Stamp the whole checkerboard

In your Snake file, you currently stamp **one** tile. Let's replace
that with two nested `for` loops + modulo to stamp **400 tiles**
(20 rows × 20 columns) in two colors.

Whole file:

```python
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

for row in range(20):
    for col in range(20):
        x = -200 + col * 20
        y = -200 + row * 20
        if (row + col) % 2 == 0:
            pen.color("#AAD751")
        else:
            pen.color("#A2D149")
        pen.goto(x, y)
        pen.stamp()

screen.update()
screen.mainloop()
```

Tap **▶ Run**.

🎉 **A full Google-Snake checkerboard!**

### 🔍 Notice

- Two `for` loops build the **grid** of positions.
- `x = -200 + col * 20` turns `col` 0…19 into screen x values
  `-200` to `180` — each tile 20 pixels wide.
- `(row + col) % 2 == 0` picks the lighter green on "even" tiles,
  darker on "odd" — that's the checker pattern.
- `screen.update()` at the end flushes all 400 stamps at once.

## 🎉 Your Snake board is done!

Next class: put a **snake** on it.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
