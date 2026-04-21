---
layout: default
title: "Class 10 — Step 2"
---

<sub>Class 10 — Step **2** of 3</sub>

# ⭐ Step 2 — Tidy up the board

Edit the code below: find the board-drawing part:

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

Wrap it in a function. **Replace** it with:

```python
def draw_board():
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

draw_board()
```

Notice: everything is pushed **one step to the right**, because it
all belongs **inside** `draw_board`.

Tap **▶ Run**. The board should still look exactly the same!

## 🎉 Why do this?

Now your board code has a **name**. If you want the board back,
you just say `draw_board()`. Much tidier!

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-3.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 3</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
