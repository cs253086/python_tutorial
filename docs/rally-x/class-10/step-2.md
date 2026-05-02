---
layout: default
title: "Rally-X — Class 10 — Step 2"
---

<pre class="py-solution">
def use_smoke():
    if state["smoke"] > 0 and state["smoke_timer"] == 0:
        state["smoke"] -= 1
        state["smoke_timer"] = 8

screen.onkey(use_smoke, "space")

# inside tick(), replace the chase loop with this gated version:
#   if state["smoke_timer"] > 0:
#       state["smoke_timer"] -= 1
#   else:
#       for e in enemies:
#           e.chase(player)
</pre>

<sub>Rally-X — Class 10 — Step **2** of 2</sub>

# ⭐ Step 2 — Tap Space to drop smoke

Add two new keys to `state`, a `use_smoke()` function, and gate
the chase logic on the timer.

## ✏️ What to add

1. In your `state` dict, add `"smoke": 3` (charges) and
   `"smoke_timer": 0` (cooldown ticks remaining)
2. Define `use_smoke()`:
   - if `state["smoke"] > 0` and `state["smoke_timer"] == 0`:
     - `state["smoke"] -= 1`
     - `state["smoke_timer"] = 8` (chasers paused for 8 ticks)
3. Bind `use_smoke` to the spacebar:
   `screen.onkey(use_smoke, "space")`
4. In `tick()`, replace the simple
   `for e in enemies: e.chase(player)` with:
   ```text
   if state["smoke_timer"] > 0:
       state["smoke_timer"] -= 1
   else:
       for e in enemies:
           e.chase(player)
   ```
5. Update `draw_hud()` to show `💨 N` for smoke charges remaining

Tap **▶ Play**. Drive around, then hit **Space** — the chasers
freeze for a moment. You can use it 3 times before charges run
out. 💨

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- Two state values together model the weapon: `smoke` (how many
  uses left) and `smoke_timer` (how long the current effect
  lasts).
- Same pattern works for any cooldown weapon — shield, dash,
  super attack.

<pre class="py-starter">
import turtle
import random

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

    def update(self):
        new_x = self.x + self.direction[0]
        new_y = self.y + self.direction[1]
        if (new_x, new_y) in walls:
            return
        self.x = new_x
        self.y = new_y

    def chase(self, target):
        dx = 0
        dy = 0
        if self.x < target.x: dx = 20
        elif self.x > target.x: dx = -20
        if self.y < target.y: dy = 20
        elif self.y > target.y: dy = -20
        # 25% of the time, take a random side-step so all 3 enemies
        # don't march in lockstep behind the player.
        if random.random() < 0.25:
            jiggle = [(20, 0), (-20, 0), (0, 20), (0, -20)]
            random.shuffle(jiggle)
            for jx, jy in jiggle:
                if (self.x + jx, self.y + jy) not in walls:
                    self.x += jx
                    self.y += jy
                    return
            return
        # Otherwise direct chase: try x first, then y. The 'dx != 0'
        # / 'dy != 0' guards prevent a 0-step from claiming the move
        # and blocking the other axis.
        if dx != 0 and (self.x + dx, self.y) not in walls:
            self.x += dx
        elif dy != 0 and (self.x, self.y + dy) not in walls:
            self.y += dy

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
wall_pen.color("#3FA9F5")

def draw_maze():
    for w in walls:
        wall_pen.goto(w)
        wall_pen.stamp()

draw_maze()

flags = [
    Flag(-100, 100), Flag(140, 140), Flag(0, 0),
    Flag(180, 0), Flag(-160, -40), Flag(60, -180),
]

# 👇
# In state, add: "smoke": 3 and "smoke_timer": 0
# 👆
state = {"fuel": 200, "lives": 3, "score": 0, "flags": 0}

hud = turtle.Turtle()
hud.hideturtle()
hud.penup()
hud.color("#FFE14A")

def draw_hud():
    hud.clear()
    hud.goto(-280, 260)
    # 👇
    # Add 💨 + state["smoke"] to the HUD line
    # 👆
    hud.write(
        "🏆 " + str(state["score"])
        + "    🚩 " + str(state["flags"]) + "/" + str(len(flags))
        + "    ⛽ " + str(state["fuel"])
        + "    ❤️ " + str(state["lives"]),
        font=("Arial", 16, "bold"),
    )

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

# 👇
# Define use_smoke():
#   if state["smoke"] > 0 and state["smoke_timer"] == 0:
#     state["smoke"] -= 1
#     state["smoke_timer"] = 8
# Bind it: screen.onkey(use_smoke, "space")
# 👆

def check_flag_pickup():
    for f in flags:
        if not f.collected and f.x == player.x and f.y == player.y:
            f.collected = True
            state["flags"] += 1
            state["score"] += 10

def tick():
    player.update()
    check_flag_pickup()
    state["fuel"] -= 1

    # 👇
    # Replace the simple chase loop:
    # if state["smoke_timer"] > 0:
    #     state["smoke_timer"] -= 1
    # else:
    #     for e in enemies: e.chase(player)
    # 👆
    for e in enemies:
        e.chase(player)

    for e in enemies:
        if e.x == player.x and e.y == player.y:
            state["lives"] -= 1
            player.x, player.y = 0, 0

    player.draw()
    for e in enemies: e.draw()
    for f in flags: f.draw()
    draw_hud()
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
