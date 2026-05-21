---
layout: default
title: "Project 4 — Step 4 — Triangles"
---

<pre class="py-solution" markdown="0">
import turtle

screen = turtle.Screen()
screen.setup(400, 400)
screen.bgcolor('skyblue')

pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)

def circle(x, y, radius, color):
    pen.penup()
    pen.goto(x, y - radius)
    pen.pendown()
    pen.color(color)
    pen.begin_fill()
    pen.circle(radius)
    pen.end_fill()

def dot(x, y, size, color):
    pen.penup()
    pen.goto(x, y)
    pen.color(color)
    pen.dot(size)

def rect(x, y, width, height, color):
    pen.penup()
    pen.goto(x, y)
    pen.setheading(0)
    pen.pendown()
    pen.color(color)
    pen.begin_fill()
    for length in [width, height, width, height]:
        pen.forward(length)
        pen.left(90)
    pen.end_fill()

def triangle(x, y, size, color):
    pen.penup()
    pen.goto(x, y)
    pen.setheading(0)
    pen.pendown()
    pen.color(color)
    pen.begin_fill()
    for i in range(3):
        pen.forward(size)
        pen.left(120)
    pen.end_fill()

circle(0, 0, 80, 'yellow')
dot(-30, 20, 15, 'black')
dot(30, 20, 15, 'black')
rect(-25, -30, 50, 15, 'red')
triangle(-15, 0, 30, 'orange')

screen.mainloop()
</pre>

<sub>Project 4 — Step **4** of 5</sub>

# ⭐ Step 4 — Triangles

➡️ Add a triangle nose to your face.

A triangle is 3 lines, turning **120** degrees each time (because
3 × 120 = 360, a full circle).

## ✏️ What to type

Add a `triangle()` helper function:

```
def triangle(x, y, size, color):
    pen.penup()
    pen.goto(x, y)
    pen.setheading(0)
    pen.pendown()
    pen.color(color)
    pen.begin_fill()
    for i in range(3):
        pen.forward(size)
        pen.left(120)
    pen.end_fill()
```

Then add a nose call after the mouth:

```
triangle(-15, 0, 30, 'orange')
```

<pre class="py-starter" markdown="0">
import turtle

screen = turtle.Screen()
screen.setup(400, 400)
screen.bgcolor('skyblue')

pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)

def circle(x, y, radius, color):
    pen.penup()
    pen.goto(x, y - radius)
    pen.pendown()
    pen.color(color)
    pen.begin_fill()
    pen.circle(radius)
    pen.end_fill()

def dot(x, y, size, color):
    pen.penup()
    pen.goto(x, y)
    pen.color(color)
    pen.dot(size)

def rect(x, y, width, height, color):
    pen.penup()
    pen.goto(x, y)
    pen.setheading(0)
    pen.pendown()
    pen.color(color)
    pen.begin_fill()
    for length in [width, height, width, height]:
        pen.forward(length)
        pen.left(90)
    pen.end_fill()

# Add a triangle(x, y, size, color) helper

circle(0, 0, 80, 'yellow')
dot(-30, 20, 15, 'black')
dot(30, 20, 15, 'black')
rect(-25, -30, 50, 15, 'red')
# Add a triangle() call for the nose

screen.mainloop()
</pre>

Tap **▶ Run**. The face now has eyes, mouth, AND a triangle
nose. 👃

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-5.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 5</a>
</p>

<sub>[⬅ Back to Step 3](./step-3.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/make-a-face">Raspberry Pi Foundation — Make a Face</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
