---
layout: default
title: "Rally-X — Class 7 — Step 2"
---

<pre class="py-solution">
class Flag:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.collected = False
        self.pen = turtle.Turtle()
        self.pen.hideturtle()
        self.pen.penup()
        self.pen.speed(0)
        self.pen.shape("square")
        self.pen.color("#FFE14A")

    def draw(self):
        self.pen.clear()
        if not self.collected:
            self.pen.goto(self.x, self.y)
            self.pen.stamp()

flags = [
    Flag(-100, 100),
    Flag(140, 140),
    Flag(0, 0),
    Flag(180, 0),
    Flag(-160, -40),
    Flag(60, -180),
]

def check_flag_pickup():
    for f in flags:
        if not f.collected and f.x == player.x and f.y == player.y:
            f.collected = True

# inside tick(), AFTER player.update() and BEFORE drawing:
#   check_flag_pickup()
#   for f in flags: f.draw()
</pre>

<sub>Rally-X — Class 7 — Step **2** of 2</sub>

# ⭐ Step 2 — Scatter flags + pick them up

Add a `Flag` class, a `flags` list, and a tiny pickup check that
runs every tick.

## ✏️ What to add

1. Define `class Flag:` with `__init__(self, x, y)` that stores
   `x`, `y`, `collected = False`, and creates a yellow
   (`"#FFE14A"`) stamp pen
2. Give `Flag` a `draw(self)` method that **only stamps if
   `not self.collected`**
3. Make a list `flags` with 5–6 `Flag` instances at different
   positions (avoid the wall positions)
4. Define `check_flag_pickup()` that loops `flags` and sets
   `collected = True` when `f.x == player.x and f.y == player.y`
5. Inside `tick()`, after `player.update()` and before drawing,
   call `check_flag_pickup()` and then `for f in flags: f.draw()`

Tap **▶ Play**. Drive the red car onto a yellow flag — it
disappears! 🚩✅

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- The flag's pen is just like the car's pen — but the `draw()`
  decides whether to stamp based on `self.collected`.
- We don't `del flags[i]` when picking up — we just flip a flag
  on the object. Easier and avoids bugs from changing a list
  while looping it.

<pre class="py-starter">
import turtle

screen = turtle.Screen()
screen.title("Rally-X")
screen.bgcolor("#08152e")
screen.setup(600, 600)
screen.tracer(0)
screen.register_shape("car", ((-14, -7), (14, -7), (14, 7), (-14, 7)))

class Car:
    def __init__(self, x, y, color):
        self.x = x
        self.y = y
        self.color = color
        self.direction = (0, 0)
        self.pen = turtle.Turtle()
        self.pen.hideturtle()
        self.pen.penup()
        self.pen.speed(0)
        self.pen.shape("car")
        self.pen.color(color)

    def update(self):
        new_x = self.x + self.direction[0]
        new_y = self.y + self.direction[1]
        if (new_x, new_y) in walls:
            return
        self.x = new_x
        self.y = new_y

    def draw(self):
        self.pen.clear()
        self.pen.goto(self.x, self.y)
        self.pen.stamp()

walls = []
for x in range(-200, 80, 20):  walls.append((x, 200))
for y in range(-100, 200, 20): walls.append((-200, y))
for x in range(-60, 100, 20):  walls.append((x, 60))
for x in range(100, 220, 20):  walls.append((x, -120))
for y in range(-200, -100, 20): walls.append((220, y))

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

# 👇
# Define class Flag(x, y):
#   - stores x, y, collected = False
#   - own pen (square, color "#FFE14A")
#   - draw(self): if not collected, goto and stamp
# Make a list "flags" with 5-6 Flag instances
# Define check_flag_pickup(): if a flag matches player x and y, set collected = True
# 👆

player = Car(0, 0, "#ff3a3a")
enemies = [
    Car(-200, 150, "#5fa6ff"),
    Car(200, -150, "#5fa6ff"),
    Car(-150, -200, "#5fa6ff"),
]

def go_up():    player.direction = (0, 20)
def go_down():  player.direction = (0, -20)
def go_left():  player.direction = (-20, 0)
def go_right(): player.direction = (20, 0)

def tick():
    player.update()
    # 👇
    # call check_flag_pickup() here
    # 👆
    player.draw()
    for e in enemies:
        e.draw()
    # 👇
    # draw each flag here:  for f in flags: f.draw()
    # 👆
    screen.update()
    screen.ontimer(tick, 150)

screen.listen()
screen.onkey(go_up,    "Up")
screen.onkey(go_down,  "Down")
screen.onkey(go_left,  "Left")
screen.onkey(go_right, "Right")

tick()

screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
