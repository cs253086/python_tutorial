---
layout: default
title: "Project 4 — Step 3 — Rectangles"
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

circle(0, 0, 80, 'yellow')
dot(-30, 20, 15, 'black')
dot(30, 20, 15, 'black')
rect(-25, -30, 50, 15, 'red')

screen.mainloop()
</pre>

<sub>Project 4 — Step **3** of 5</sub>

# ⭐ Step 3 — Rectangles

➡️ Add a rectangle mouth to your face.

A rectangle is 4 lines drawn at right angles to each other. With
turtle: **forward**, **left 90**, **forward**, **left 90**, and
so on — a `for` loop is perfect.

## ✏️ What to type

Add a `rect()` helper function after `dot()`, and call it for the
mouth:

```
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

# Then add the mouth call at the bottom with the other shapes:
rect(-25, -30, 50, 15, 'red')
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

# Add a rect(x, y, width, height, color) function here

circle(0, 0, 80, 'yellow')
dot(-30, 20, 15, 'black')
dot(30, 20, 15, 'black')
# Add a rect() call for a red mouth

screen.mainloop()
</pre>

Tap **▶ Run**. The face should now have a small red mouth. 👄

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-4.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 4</a>
</p>

<sub>[⬅ Back to Step 2](./step-2.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/make-a-face">Raspberry Pi Foundation — Make a Face</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
