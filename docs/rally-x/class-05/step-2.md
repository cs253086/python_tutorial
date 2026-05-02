---
layout: default
title: "Rally-X — Class 5 — Step 2"
---

<pre class="py-solution">
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
        self.x += self.direction[0]
        self.y += self.direction[1]

    def draw(self):
        self.pen.clear()
        self.pen.goto(self.x, self.y)
        self.pen.stamp()

def go_up():    player.direction = (0, 20)
def go_down():  player.direction = (0, -20)
def go_left():  player.direction = (-20, 0)
def go_right(): player.direction = (20, 0)

def tick():
    player.update()
    player.draw()
    for e in enemies:
        e.draw()
    screen.update()
    screen.ontimer(tick, 150)

screen.listen()
screen.onkey(go_up,    "Up")
screen.onkey(go_down,  "Down")
screen.onkey(go_left,  "Left")
screen.onkey(go_right, "Right")

tick()
</pre>

<sub>Rally-X — Class 5 — Step **2** of 2</sub>

# ⭐ Step 2 — Make the player drive

Now wire up movement. We'll add a `direction` attribute and an
`update()` method to `Car`, plus 4 arrow-key functions and a
`tick()` game loop.

## ✏️ What to change

1. In `Car.__init__`, add `self.direction = (0, 0)`
2. Add `def update(self):` that adds `direction[0]` to `self.x` and
   `direction[1]` to `self.y`
3. Make four functions `go_up`, `go_down`, `go_left`, `go_right`
   that set `player.direction`
4. Make a `tick()` function that:
   - calls `player.update()`
   - calls `player.draw()`
   - draws all enemies
   - calls `screen.update()`
   - calls `screen.ontimer(tick, 150)` to repeat
5. `screen.listen()` then `screen.onkey(go_up, "Up")` for each arrow
6. Call `tick()` once to start the loop

Tap **▶ Play**. Click the game window once so it hears keys, then
press the **arrow keys**. The red car should drive! 🎮

> 💡 Stuck? Tap **💡 Solution**.

> ⚠️ Don't worry that the player can drive **through** walls right
> now — Class 6 fixes that.

<pre class="py-starter">
import turtle

screen = turtle.Screen()
screen.title("Rally-X")
screen.bgcolor("#08152e")
screen.setup(600, 600)
screen.tracer(0)

# 👇
# Update Car class:
#   - Add self.direction = (0, 0) in __init__
#   - Add a method update(self) that adds direction[0] to self.x
#       and direction[1] to self.y
# Make 4 arrow functions: go_up, go_down, go_left, go_right
#   that set player.direction to (dx, dy)
# Make a function tick() that:
#   - calls player.update() and player.draw()
#   - draws each enemy in enemies
#   - calls screen.update() and screen.ontimer(tick, 150)
# screen.listen() then screen.onkey(go_up, "Up") etc. for all 4 arrows
# Call tick() once at the end
# 👆

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

player = Car(0, 0, "#ff3a3a")

enemies = [
    Car(-200, 150, "#5fa6ff"),
    Car(200, -150, "#5fa6ff"),
    Car(-150, -200, "#5fa6ff"),
]

screen.update()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
