---
layout: default
title: "Project 4 — Step 5 — Make your own face"
---

<pre class="py-solution" markdown="0">
import turtle

screen = turtle.Screen()
screen.setup(400, 400)
screen.bgcolor('mistyrose')

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

# A monster face example
circle(0, 0, 100, 'limegreen')
circle(-40, 30, 20, 'white')
circle(40, 30, 20, 'white')
dot(-40, 30, 12, 'black')
dot(40, 30, 12, 'black')
triangle(-15, 0, 30, 'darkgreen')
rect(-40, -40, 80, 20, 'red')
triangle(-35, -40, 12, 'white')
triangle(-15, -40, 12, 'white')
triangle(5, -40, 12, 'white')
triangle(25, -40, 12, 'white')

screen.mainloop()
</pre>

<sub>Project 4 — Step **5** of 5</sub>

# ⭐ Step 5 — Make your own face

➡️ **Over to you!** Design your own face (or monster, or alien,
or cat) using the four shape helpers.

## 🎨 You have four tools

- `circle(x, y, radius, color)` — a big filled circle
- `dot(x, y, size, color)` — a small dot (good for eyes)
- `rect(x, y, width, height, color)` — a rectangle
- `triangle(x, y, size, color)` — a triangle

The `x, y` is roughly the **bottom-left** of where the shape
starts. Try sizes between **5** and **80**. Try any color name
or `#RRGGBB` hex code you like.

## 💡 Ideas

- A **monster** with three eyes and pointy teeth (tap 💡 Solution
  for one example)
- A **cat** with a circle head, triangle ears, dot eyes
- An **alien** with a green oval (use a big `circle()`), one
  giant eye, antennae rectangles
- A **robot** with a square head and grid eyes

<pre class="py-starter" markdown="0">
import turtle

screen = turtle.Screen()
screen.setup(400, 400)
screen.bgcolor('mistyrose')   # try your own color!

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

# YOUR DESIGN: call circle(), dot(), rect(), triangle() to draw a face!


screen.mainloop()
</pre>

Tap **▶ Run** and check out your creation. Change colors, sizes,
and positions until you love it. 👻

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 4](./step-4.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/make-a-face">Raspberry Pi Foundation — Make a Face</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
