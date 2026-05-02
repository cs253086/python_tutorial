---
layout: default
title: "Rally-X — Class 2 — Step 2"
---

<pre class="py-solution">
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
        self.pen.clearstamps()
        self.pen.goto(self.x, self.y)
        self.pen.stamp()

player = Car(0, 0, "#ff3a3a")
player.draw()
</pre>

<sub>Rally-X — Class 2 — Step **2** of 2</sub>

# ⭐ Step 2 — Build the `Car` class

Now turn the plain stamp from Class 1 into a real **Car**.

## ✏️ What to add

Inside the marker region:

1. Define a `class Car:` with `__init__(self, x, y, color)` that
   stores `x`, `y`, `color` and creates its own pen (`turtle.Turtle()`)
2. Give the car a `draw(self)` method that **clears its previous
   stamp** and stamps a new square at `(self.x, self.y)`
3. Make a player car: `player = Car(0, 0, "#ff3a3a")`
4. Call `player.draw()`

You can delete the old `car = turtle.Turtle()` block — the class
takes care of all that now.

Tap **▶ Play**. The Rally-X game window should open with a single
red square in the middle (same look as Class 1, but driven by your
new `Car` class).

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- The pen lives **inside** the car (`self.pen`). Every car you
  make in later classes gets its own pen automatically.
- `self.pen.clearstamps()` is what makes redraw clean — when the
  car moves we'll erase the old stamp first.

<pre class="py-starter">
import turtle

screen = turtle.Screen()
screen.title("Rally-X")
screen.bgcolor("#08152e")
screen.setup(600, 600)
screen.tracer(0)

# 👇
# Make a class Car:
#   - __init__(self, x, y, color) stores x, y, color
#     and creates its own pen (turtle.Turtle()), hidden, penup,
#     speed 0, shape "square", color = color
#   - draw(self) clears its previous stamp, goes to (self.x, self.y),
#     and stamps once
# Make a player: player = Car(0, 0, "#ff3a3a")
# Call player.draw()
# 👆

screen.update()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
