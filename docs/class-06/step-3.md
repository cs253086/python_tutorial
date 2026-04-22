---
layout: default
title: "Class 6 — Step 3"
---

<sub>Class 6 — Step **3** of 3</sub>

# ⭐ Step 3 — Stamp your first tile

Let's put **one light-green tile** on the board. In Class 7, you'll
tile the whole board this way.

Add these lines to the bottom of your code:

```python
pen = turtle.Turtle()
pen.hideturtle()
pen.penup()
pen.shape("square")
pen.color("#AAD751")
pen.goto(0, 0)
pen.stamp()

screen.mainloop()
```

Tap **▶ Run**.

You should see a **light-green square** in the middle of the dark
green window! 🟩

## What's going on

- `pen` is like a **rubber stamp**.
- `pen.shape("square")` — make the stamp square-shaped.
- `pen.color("#AAD751")` — pick the lighter Snake-board green.
- `pen.goto(0, 0)` — move the stamp to the middle of the window.
- `pen.stamp()` — press the stamp down!
- `screen.mainloop()` — keeps the window open.

> 💡 `goto(0, 0)` is the **center**. Bigger numbers go right/up,
> smaller numbers go left/down. Like a map!


## 🎉 You stamped your first tile!

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 2](./step-2.html)</sub>
