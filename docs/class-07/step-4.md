---
layout: default
title: "Class 7 — Step 4"
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

for row in range(20):
    for col in range(20):
        if (row + col) % 2 == 0:
            pen.color("#AAD751")
        else:
            pen.color("#A2D149")
        pen.goto(-200 + col * 20, -200 + row * 20)
        pen.stamp()

screen.update()
screen.mainloop()
</pre>

<sub>Class 7 — Step **4** of 4</sub>

# ⭐ Step 4 — Make it a checkerboard

One green is plain. Real Snake has **two** greens, alternating
like a chess board:

🟩🟨🟩🟨🟩🟨
🟨🟩🟨🟩🟨🟩

How does the computer know **which color** each tile should be?
With a new math trick: **modulo**, written **`%`**.

---

## 🪄 What `%` does

`%` is the **leftover** after dividing.

```python
print(4 % 2)   # 4 ÷ 2 = 2 remainder 0
print(5 % 2)   # 5 ÷ 2 = 2 remainder 1
print(6 % 2)   # 6 ÷ 2 = 3 remainder 0
print(7 % 2)   # 7 ÷ 2 = 3 remainder 1
```

You'd see:

```text
0
1
0
1
```

### 🔍 What just happened

- An **even** number divided by 2 has **0 left over** → `% 2 == 0`.
- An **odd** number has **1 left over** → `% 2 == 1`.

So `% 2` is a quick way to ask: *"is this number even or odd?"*

---

## 🎯 The checker trick

For every tile we know its `row` and `col`. Look at
**`(row + col) % 2`**:

| row | col | row + col | `% 2` |
|----:|----:|---------:|-----:|
| 0 | 0 | 0 | **0** 🟩 |
| 0 | 1 | 1 | **1** 🟨 |
| 0 | 2 | 2 | **0** 🟩 |
| 1 | 0 | 1 | **1** 🟨 |
| 1 | 1 | 2 | **0** 🟩 |

Every step across (or down) flips the answer between 0 and 1 —
so neighbors get **different colors**. That's the checker!

---

## 💡 Picking the color in code

Use `if`/`else` **inside** the loops:

```python
if (row + col) % 2 == 0:
    pen.color("#AAD751")    # light green
else:
    pen.color("#A2D149")    # slightly darker green
```

We put this **before** `pen.goto` / `pen.stamp` so the new color
is ready before the stamp drops.

---

## ✏️ Your turn

In the starter below, your code from Step 3 fills the board
with **one** color.

**Goal:** make it a **checkerboard** — every tile picks one of
two greens based on `(row + col) % 2`.

Two things to do:

1. **Delete** the `pen.color("#AAD751")` line above the loops
   (we don't want one color for everything anymore).
2. **Add** the `if`/`else` color block **inside** the loops,
   **before** `pen.goto` and `pen.stamp`.

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- Try changing one of the greens to `"#FF0000"` (red). Half the
  board turns red — exactly the "even" tiles! That's how you can
  **see** which is which.
- `(row + col) % 2` is the classic chess-board trick. You used a
  real computer-science move. 🏁

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
# Right now the whole board is ONE color.
# Goal: make it a CHECKER (two greens alternating).
# Step A: delete the pen.color line above the loops.
# Step B: inside the loops (before pen.goto), add:
#           if (row + col) % 2 == 0:
#               pen.color("#AAD751")
#           else:
#               pen.color("#A2D149")
pen.color("#AAD751")
for row in range(20):
    for col in range(20):
        pen.goto(-200 + col * 20, -200 + row * 20)
        pen.stamp()
# 👆

screen.update()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 3](./step-3.html)</sub>
