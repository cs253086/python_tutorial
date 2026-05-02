---
layout: default
title: "Rally-X — Class 6 — Step 2"
---

<pre class="py-solution">
    def update(self):
        new_x = self.x + self.direction[0]
        new_y = self.y + self.direction[1]
        if (new_x, new_y) in walls:
            return
        self.x = new_x
        self.y = new_y
</pre>

<sub>Rally-X — Class 6 — Step **2** of 2</sub>

# ⭐ Step 2 — Stop the player at walls

Update `Car.update()` so it computes the new spot first, checks
against `walls`, and only moves if the spot is open.

## ✏️ What to change

Replace the body of `update(self)` with the new version:

```text
def update(self):
    new_x = self.x + self.direction[0]
    new_y = self.y + self.direction[1]
    if (new_x, new_y) in walls:
        return            # blocked — don't move
    self.x = new_x
    self.y = new_y
```

Tap **▶ Play**. Now drive into a wall — the player **stops** at
its edge instead of passing through. 🛑

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- `return` exits the method early, leaving `self.x` and `self.y`
  unchanged.
- We test `(new_x, new_y) in walls` — Python checks every tuple
  in the list for us.
- Same rule will protect enemies from walking through walls when
  we add chase logic in Class 8.

<pre class="py-starter">
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
        self.direction = (0, 0)
        self.pen = turtle.Turtle()
        self.pen.hideturtle()
        self.pen.penup()
        self.pen.speed(0)
        self.pen.shape("square")
        self.pen.color(color)

    # 👇
    # Replace this update() with one that:
    #   - works out new_x = self.x + direction[0]
    #              new_y = self.y + direction[1]
    #   - if (new_x, new_y) in walls: return  (blocked)
    #   - else move (set self.x and self.y)
    # 👆
    def update(self):
        self.x += self.direction[0]
        self.y += self.direction[1]

    def draw(self):
        self.pen.clearstamps()
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

screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
