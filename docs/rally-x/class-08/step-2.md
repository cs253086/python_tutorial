---
layout: default
title: "Rally-X — Class 8 — Step 2"
---

<pre class="py-solution" markdown="0">
    def chase(self, target):
        dx = 0
        dy = 0
        if self.x < target.x: dx = 20
        elif self.x > target.x: dx = -20
        if self.y < target.y: dy = 20
        elif self.y > target.y: dy = -20
        # Try x-step first, then y-step. If both blocked, stay.
        if (self.x + dx, self.y) not in walls:
            self.x += dx
        elif (self.x, self.y + dy) not in walls:
            self.y += dy
</pre>

<sub>Rally-X — Class 8 — Step **2** of 2</sub>

# ⭐ Step 2 — Make the enemies chase

Add a `chase(self, target)` method to `Car`. Call it for every
enemy in `tick()` (passing in `player` as the target).

## ✏️ What to add

1. Inside `class Car:`, add `chase(self, target)`:
   - work out `dx` (`+20` if behind, `-20` if ahead, else `0`)
   - work out `dy` the same way
   - try moving in `x` first; if blocked by a wall, try `y`
2. In `tick()`, before drawing enemies, call `e.chase(player)`
   on each enemy

Tap **▶ Play**. The blue cars now **converge** on you. 🚓

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- This is the dumbest possible chase: just step toward the
  player. Walls can corner enemies, which is fine — Rally-X
  enemies are like that.
- We try x-step first to keep behavior predictable.

<pre class="py-starter" markdown="0">
import turtle

screen = turtle.Screen()
screen.title("Rally-X")
screen.bgcolor("#E69434")
screen.setup(600, 600)
screen.tracer(0)

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
        self.pen.shape("square")
        self.pen.color(color)

    def update(self):
        new_x = self.x + self.direction[0]
        new_y = self.y + self.direction[1]
        if (new_x, new_y) in walls:
            return
        self.x = new_x
        self.y = new_y

    # 👇
    # Add a method chase(self, target):
    #   - dx = 20 if self.x < target.x, -20 if self.x > target.x, else 0
    #   - dy works the same with y
    #   - try x first: if (self.x + dx, self.y) is NOT in walls, move x
    #   - else try y: if (self.x, self.y + dy) is NOT in walls, move y
    # 👆

    def draw(self):
        self.pen.clear()
        self.pen.penup()
        self.pen.color(self.color)
        self.pen.goto(self.x - 12, self.y - 7)
        self.pen.setheading(0)
        self.pen.pendown()
        self.pen.begin_fill()
        for length in [24, 14, 24, 14]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()
        self.pen.color("#111111")
        self.pen.goto(self.x - 5, self.y - 3)
        self.pen.pendown()
        self.pen.begin_fill()
        for length in [10, 6, 10, 6]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()

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
wall_pen.color("#3CA84A")

def draw_maze():
    for w in walls:
        wall_pen.goto(w)
        wall_pen.stamp()

draw_maze()

flags = [
    Flag(-100, 100), Flag(140, 140), Flag(0, 0),
    Flag(180, 0), Flag(-160, -40), Flag(60, -180),
]

player = Car(0, 0, "#4673E8")
enemies = [
    Car(-200, 150, "#E74C3C"),
    Car(200, -150, "#E74C3C"),
    Car(-150, -200, "#E74C3C"),
]

def go_up():    player.direction = (0, 20)
def go_down():  player.direction = (0, -20)
def go_left():  player.direction = (-20, 0)
def go_right(): player.direction = (20, 0)

def check_flag_pickup():
    for f in flags:
        if not f.collected and f.x == player.x and f.y == player.y:
            f.collected = True

def tick():
    player.update()
    check_flag_pickup()
    # 👇
    # Make every enemy chase the player:
    #   for e in enemies: e.chase(player)
    # 👆
    player.draw()
    for e in enemies:
        e.draw()
    for f in flags:
        f.draw()
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
