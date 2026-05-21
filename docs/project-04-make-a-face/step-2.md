---
layout: default
title: "Project 4 — Step 2 — Circles and dots"
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

# Draw a face: yellow head with two eyes
circle(0, 0, 80, 'yellow')
dot(-30, 20, 15, 'black')
dot(30, 20, 15, 'black')

screen.mainloop()
</pre>

<sub>Project 4 — Step **2** of 5</sub>

# ⭐ Step 2 — Circles and dots

➡️ Draw a head with two eyes.

For circles, we'll use our friend `pen.circle(radius)` from
Project 2. For little eyes, `pen.dot(size)` is quicker.

Let's wrap both in tiny functions so we can use them by name.

## ✏️ What to type

After the `pen.speed(0)` line, add two helper functions and
three shape calls:

```
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

circle(0, 0, 80, 'yellow')
dot(-30, 20, 15, 'black')
dot(30, 20, 15, 'black')
```

<pre class="py-starter" markdown="0">
import turtle

screen = turtle.Screen()
screen.setup(400, 400)
screen.bgcolor('skyblue')

pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)

# Add a circle() function and a dot() function here
# Then draw a yellow head and two black eye-dots

screen.mainloop()
</pre>

Tap **▶ Run**. You should see a smiley face starting to form — a
yellow head with two black eyes. 👀

### 🔍 Tip

`circle(0, 0, 80, 'yellow')` is now a one-line shortcut for
"draw an 80-pixel yellow circle centred on (0, 0)." Functions
let you turn boring 7-line jobs into 1-line jobs.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-3.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 3</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/make-a-face">Raspberry Pi Foundation — Make a Face</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
