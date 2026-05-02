---
layout: default
title: "Rally-X — Class 3 — Step 2"
---

<pre class="py-solution" markdown="0">
enemies = [
    Car(-200, 150, "#5fa6ff"),
    Car(200, -150, "#5fa6ff"),
    Car(-150, -200, "#5fa6ff"),
]

for e in enemies:
    e.draw()
</pre>

<sub>Rally-X — Class 3 — Step **2** of 2</sub>

# ⭐ Step 2 — Add the chasers

Time to put **3 blue enemy cars** on the board, all from your
`Car` class.

## ✏️ What to add

Inside the marker region:

1. Make a list called `enemies` with 3 `Car` instances at
   different `(x, y)` positions, all colored blue `"#5fa6ff"`
2. Loop through `enemies` and call `e.draw()` on each

Tap **▶ Play**. The window should show your **red player** in
the middle and **3 blue enemy cars** scattered around it.

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- One `Car` class → 4 instances (1 player + 3 enemies). No
  copy-paste!
- Adding more enemies later is just one more line in the list.

<pre class="py-starter" markdown="0">
import turtle

screen = turtle.Screen()
screen.title("Rally-X")
screen.bgcolor("#08152e")
screen.setup(600, 600)
screen.tracer(0)

class Car:
    def __init__(self, x, y, color):
        self.x = x
        self.y = y
        self.color = color
        self.pen = turtle.Turtle()
        self.pen.hideturtle()
        self.pen.penup()
        self.pen.speed(0)
        self.pen.shape("square")
        self.pen.color(color)

    def draw(self):
        self.pen.clear()
        self.pen.color(self.color)
        self.pen.penup()
        self.pen.goto(self.x - 14, self.y - 7)
        self.pen.setheading(0)
        self.pen.pendown()
        self.pen.begin_fill()
        for length in [28, 14, 28, 14]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()

player = Car(0, 0, "#ff3a3a")
player.draw()

# 👇
# Make a list called "enemies" with 3 Car instances, all blue ("#5fa6ff"),
#   at different (x, y) positions
# Loop through enemies and call draw() on each one
# 👆

screen.update()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
