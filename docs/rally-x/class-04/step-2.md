---
layout: default
title: "Rally-X — Class 4 — Step 2"
---

<pre class="py-solution" markdown="0">
walls = []
# top horizontal wall
for x in range(-200, 80, 20):
    walls.append((x, 200))
# left vertical wall
for y in range(-100, 200, 20):
    walls.append((-200, y))
# middle wall
for x in range(-60, 100, 20):
    walls.append((x, 60))
# bottom-right wall
for x in range(100, 220, 20):
    walls.append((x, -120))
for y in range(-200, -100, 20):
    walls.append((220, y))

wall_pen = turtle.Turtle()
wall_pen.hideturtle()
wall_pen.penup()
wall_pen.speed(0)
wall_pen.shape("square")
wall_pen.color("#3FA9F5")

def draw_maze():
    for w in walls:
        wall_pen.goto(w)
        wall_pen.stamp()

draw_maze()
</pre>

<sub>Rally-X — Class 4 — Step **2** of 2</sub>

# ⭐ Step 2 — Add the maze to your game

Drop a maze of cyan walls into your Rally-X file. We'll add it
**before** the cars are drawn so the cars sit on top.

## ✏️ What to add

Inside the marker region:

1. Make a list called `walls` and fill it with `(x, y)` tuples for
   each wall block (use a few `for` loops with `range(...)` to
   build long walls quickly)
2. Make a `wall_pen` (hidden, penup, square, color `"#3FA9F5"`)
3. Define `def draw_maze():` that loops over `walls` and stamps
   each one with `wall_pen.goto(w); wall_pen.stamp()`
4. Call `draw_maze()` once

Tap **▶ Play**. You should see the **cyan maze** with the red
player and three blue enemies on top of it. 🚗🧱

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- We use one `wall_pen` for all walls — one pen, many stamps.
- `range(start, stop, step)` lets you make long walls fast:
  `range(-200, 80, 20)` gives `-200, -180, …, 60`.
- `walls.append((x, y))` adds a new tuple to the list.

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

# 👇
# Make a list called "walls" with (x, y) tuples for each wall block
#   (use range(...) loops to build longer walls quickly)
# Make a wall_pen — hidden, penup, square shape, color "#3FA9F5"
# def draw_maze(): loop over walls and stamp each one
# Call draw_maze() once
# 👆

player = Car(0, 0, "#ff3a3a")
player.draw()

enemies = [
    Car(-200, 150, "#5fa6ff"),
    Car(200, -150, "#5fa6ff"),
    Car(-150, -200, "#5fa6ff"),
]
for e in enemies:
    e.draw()

screen.update()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
