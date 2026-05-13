---
layout: default
title: "Class 7 — Step 2"
---

<pre class="py-solution" markdown="0">
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
</pre>

<sub>Class 7 — Step **2** of 2</sub>

# ⭐ Step 2 — Stamp the whole checkerboard

Your Class 6 code stamps **one** light-green tile. Between the
markers we've sketched out a **nested for loop** that stamps
all 400 tiles — but it has **four `???` spots** that you need
to fill in with a number.

## ✏️ Fill in the four `???`

> `???` means "type a number here." Python won't run if there's
> still a `???` in your code — that's how you know there's more
> to fix.

| Spot | The hint |
|---|---|
| **`???1`** in `range(???)` | The inner loop walks across the board. How many tiles wide is the board? Same as the outer loop. |
| **`???2`** in `col * ???` | One tile is square. The whole board is 400 px wide and has 20 tiles across, so each tile is **400 ÷ 20 = ?** pixels. |
| **`???3`** in `row * ???` | Tiles are squares — height is the same as width. |
| **`???4`** in `== ???` | We want the **lighter** green when `(row + col)` is **even**. What's the remainder when you divide an even number by 2? (Try `4 % 2` and `5 % 2` in your head.) |

Tap **▶ Run**. If you see a `SyntaxError` mentioning `???`, you
still have a blank to fill. Fix them all and you'll see the full
Google-Snake checkerboard. 🟩🟨

> 💡 Stuck on a `???`? Tap **💡 Solution** — it drops the right
> numbers in for you.

---

## 🔍 Notice

- `x = -200 + col * 20` turns `col` 0…19 into screen positions
  `-200`…`180` — exactly one tile-width apart.
- `(row + col) % 2 == 0` flips even/odd as you move across the
  grid → the checker pattern.

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
# Fill in the four ??? spots below. Each one is a number.
# (See the four hints on the lesson page above.)

for row in range(20):
    for col in range(???):              # ???1 — tiles across
        x = -200 + col * ???            # ???2 — tile width
        y = -200 + row * ???            # ???3 — tile height
        if (row + col) % 2 == ???:      # ???4 — even-cell remainder
            pen.color("#AAD751")
        else:
            pen.color("#A2D149")
        pen.goto(x, y)
        pen.stamp()
# 👆

screen.update()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
