---
layout: default
title: "Class 6 — Step 2"
---

<pre class="py-starter">
# 👇 CLASS 6: YOUR FIRST SNAKE WINDOW GOES HERE 👇

# 👆 END OF NEW CODE 👆
</pre>

<pre class="py-solution">
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
pen.color("#AAD751")
pen.goto(0, 0)
pen.stamp()

screen.update()
screen.mainloop()
</pre>

<sub>Class 6 — Step **2** of 2</sub>

# ⭐ Step 2 — Open your Snake window

Time to start a **fresh** Snake file with graphics. Class 6 throws
out the text code from Classes 1–5 and begins drawing.

## ✏️ What to add

Between the 👇 and 👆 markers, write the code that:

1. `import turtle`
2. Makes a `screen`, titles it **Snake**, sets the dark-green
   background, sizes it to 500×500, and calls `screen.tracer(0)`
   so drawing doesn't animate
3. Makes a `pen`, hides it, picks up the pen, shapes it a square,
   colors it light-Snake-green, goes to `(0, 0)`, and stamps
4. Ends with `screen.update()` and `screen.mainloop()`

Tap **▶ Run**. A dark-green 500×500 window titled **Snake** should
appear with one light-green tile in the middle. 🎉

> 💡 Stuck? Tap **Solution** for the full code.

---

## 🔍 Notice

- `import turtle` goes at the **top** of the file (always).
- `screen.tracer(0)` + `screen.update()` is how we batch drawings
  so the whole board appears at once. Essential next class when
  you stamp 400 tiles!

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
