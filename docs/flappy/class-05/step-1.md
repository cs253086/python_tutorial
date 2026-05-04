---
layout: default
title: "Flappy Bird — Class 5 — Step 1"
---

<sub>Flappy Bird — Class 5 — Step **1** of 2</sub>

# ⭐ Step 1 — Drawing rectangles, take 2

You've drawn the bird's body, eye, and beak as filled rectangles
already. Today's twist: rectangles **with parameters** — width,
height, position — passed in as numbers.

---

## 🟩 A reusable rectangle helper

```python
import turtle

screen = turtle.Screen()
screen.bgcolor("#70C5CE")
screen.setup(400, 400)

pen = turtle.Turtle()
pen.hideturtle()
pen.penup()
pen.speed(0)
pen.color("#5BB31E")

def rect(x, y, w, h):
    pen.penup()
    pen.goto(x, y)
    pen.setheading(0)
    pen.pendown()
    pen.begin_fill()
    for length in [w, h, w, h]:
        pen.forward(length)
        pen.left(90)
    pen.end_fill()
    pen.penup()

rect(-100, -100, 50, 200)
rect(   0,    0, 80,  40)
rect( 100,  -50, 30,  30)

screen.update()
screen.mainloop()
```

Tap **▶ Run**. Three green rectangles, each a different size and
position. One function — three uses.

### 🔍 Notice

- `(x, y)` is the **bottom-left** corner of the rectangle.
- `[w, h, w, h]` walks the four sides — width, height, width,
  height. After 4 left turns of 90°, the pen is back facing east.
- `pen.color("#5BB31E")` outside the function — set once, used
  every time we call `rect`.

---

## 🟦 Two separate pens, one screen

In the bird's class we made `self.pen`. We can have **as many
pens as we want**. Each one is independent — drawing on one
doesn't erase the other.

```python
import turtle

screen = turtle.Screen()
screen.bgcolor("#70C5CE")
screen.setup(400, 400)

a = turtle.Turtle()
a.hideturtle()
a.penup()
a.color("#FFD23F")
a.shape("circle")
a.goto(-80, 0)
a.stamp()

b = turtle.Turtle()
b.hideturtle()
b.penup()
b.color("#5BB31E")
b.shape("square")
b.goto(80, 0)
b.stamp()

screen.update()
screen.mainloop()
```

Two pens, two stamps — yellow circle on the left, green square
on the right.

---

## 🎉 Two ideas, ready for pipes!

Next step: a `pipe_pen` and a `draw_pipe(x, gap_y)` function that
stamps a top + bottom pipe at a chosen x with a 140-pixel gap.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 5](./index.html)</sub>
