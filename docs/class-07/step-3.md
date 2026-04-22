---
layout: default
title: "Class 7 — Step 3"
---

<sub>Class 7 — Step **3** of 3</sub>

# ⭐ Step 3 — The whole checkerboard

Time to tile the **whole board** with two greens — one lighter, one
a little darker — like Google Snake.

**Replace** your single `for col in range(10):` loop with this:

```python
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

screen.mainloop()
```

Tap **▶ Run**.

🎉 **Look at that board!** A checkerboard of two greens, just like
Google Snake.

## Wait, what's `%`?

`%` is called **modulo**. It asks "what's left over after
dividing?"

- `4 % 2` is `0` — 4 divided by 2 has nothing left over. (Even!)
- `5 % 2` is `1` — 5 divided by 2 has 1 left over. (Odd!)

So `(row + col) % 2 == 0` is a trick to check **even or odd**, and
that gives us the checker pattern!


<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 2](./step-2.html)</sub>
