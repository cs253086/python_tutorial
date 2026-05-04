---
layout: default
title: "Flappy Bird — Class 2 — Step 2"
---

<pre class="py-solution" markdown="0">
class Bird:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.pen = turtle.Turtle()
        self.pen.hideturtle()
        self.pen.penup()
        self.pen.speed(0)

    def draw(self):
        self.pen.clear()
        self.pen.penup()
        # body (yellow rectangle 24x20)
        self.pen.color("#FFD23F")
        self.pen.goto(self.x - 12, self.y - 10)
        self.pen.setheading(0)
        self.pen.pendown()
        self.pen.begin_fill()
        for length in [24, 20, 24, 20]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()
        # eye (white square)
        self.pen.color("#FFFFFF")
        self.pen.goto(self.x + 3, self.y + 2)
        self.pen.pendown()
        self.pen.begin_fill()
        for length in [6, 6, 6, 6]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()
        # beak (orange)
        self.pen.color("#FF6B35")
        self.pen.goto(self.x + 12, self.y - 2)
        self.pen.pendown()
        self.pen.begin_fill()
        for length in [6, 4, 6, 4]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()

bird = Bird(-100, 0)
bird.draw()
</pre>

<sub>Flappy Bird — Class 2 — Step **2** of 2</sub>

# ⭐ Step 2 — Build the `Bird` class

Now turn the plain circle from Class 1 into a real **Bird** with
a body, an eye, and a beak.

## ✏️ What to add

Inside the marker region:

1. Define a `class Bird:` with `__init__(self, x, y)` that
   stores `x`, `y`, and creates `self.pen = turtle.Turtle()`
   (hidden, penup, speed 0)
2. Give the bird a `draw(self)` method that:
   - **clears** the previous drawing (`self.pen.clear()`)
   - draws the **body** as a 24×20 yellow rectangle, centered on
     `(self.x, self.y)`
   - draws an **eye** as a 6×6 white square on the upper right
   - draws a **beak** as a 6×4 orange rectangle on the right
3. Make a bird: `bird = Bird(-100, 0)`
4. Call `bird.draw()`

You can delete the old `bird = turtle.Turtle()` block — the class
now takes care of all that.

Tap **▶ Play**. The window should show a yellow rectangle bird
with a white eye and an orange beak. 🐤

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- The pen lives **inside** the bird (`self.pen`). When we add
  pipes in Class 5, those will get their own pens too.
- The body is drawn with `begin_fill()`, then four `forward`/`left`
  steps, then `end_fill()`. That's how turtle paints a filled
  rectangle.
- Each piece (body, eye, beak) is the **same recipe** with
  different `goto` and `color`.

<pre class="py-starter" markdown="0">
import turtle

screen = turtle.Screen()
screen.title("Flappy Bird")
screen.bgcolor("#70C5CE")
screen.setup(400, 600)
screen.tracer(0)

# 👇
# Make a class Bird:
#   __init__(self, x, y):
#     - store self.x, self.y
#     - make self.pen = turtle.Turtle(), hidden, penup, speed(0)
#   draw(self):
#     - self.pen.clear()
#     - body: yellow rectangle 24x20 centered on (self.x, self.y)
#       (color "#FFD23F", begin_fill, four forward/left steps, end_fill)
#     - eye: white 6x6 square at (self.x + 3, self.y + 2)
#       (color "#FFFFFF")
#     - beak: orange 6x4 rectangle at (self.x + 12, self.y - 2)
#       (color "#FF6B35")
# Make bird = Bird(-100, 0)
# Call bird.draw()
# 👆

screen.update()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
