---
layout: default
title: "Rally-X — Class 12 — Step 2"
---

<pre class="py-solution" markdown="0">
RADAR_OX = 220
RADAR_OY = 200
SCALE = 6

radar_pen = turtle.Turtle()
radar_pen.hideturtle()
radar_pen.penup()
radar_pen.speed(0)

def to_radar(x, y):
    return (RADAR_OX + x // SCALE, RADAR_OY + y // SCALE)

def draw_radar():
    radar_pen.clear()
    radar_pen.clear()

    # frame
    radar_pen.color("#3FA9F5")
    radar_pen.goto(RADAR_OX - 55, RADAR_OY - 55)
    radar_pen.pendown()
    for _ in range(4):
        radar_pen.forward(110)
        radar_pen.left(90)
    radar_pen.penup()

    # walls
    radar_pen.shape("square")
    radar_pen.color("#3FA9F5")
    for w in walls:
        rx, ry = to_radar(w[0], w[1])
        radar_pen.goto(rx, ry)
        radar_pen.stamp()

    # flags
    radar_pen.color("#FFE14A")
    for f in flags:
        if not f.collected:
            rx, ry = to_radar(f.x, f.y)
            radar_pen.goto(rx, ry)
            radar_pen.stamp()

    # enemies
    radar_pen.color("#5fa6ff")
    for e in enemies:
        rx, ry = to_radar(e.x, e.y)
        radar_pen.goto(rx, ry)
        radar_pen.stamp()

    # player
    radar_pen.color("#ff3a3a")
    rx, ry = to_radar(player.x, player.y)
    radar_pen.goto(rx, ry)
    radar_pen.stamp()
</pre>

<sub>Rally-X — Class 12 — Step **2** of 2</sub>

# ⭐ Step 2 — Add the radar

Add a `radar_pen`, a `to_radar(x, y)` helper, and a
`draw_radar()` function. Call `draw_radar()` near the end of
`tick()`.

## ✏️ What to add

1. Constants: `RADAR_OX = 220`, `RADAR_OY = 200`, `SCALE = 6`
2. `radar_pen` — its own turtle, hidden, penup, speed 0
3. `to_radar(x, y)` — returns
   `(RADAR_OX + x // SCALE, RADAR_OY + y // SCALE)`
4. `draw_radar()` — every frame:
   - clear stamps + drawings on `radar_pen`
   - draw a 110×110 cyan frame around the radar area
   - stamp every wall, flag (if not collected), enemy, and the
     player at their `to_radar` position, with the matching
     color
5. In `tick()`, after `draw_hud()`, call `draw_radar()`

Tap **▶ Play**. A small corner radar shows the maze, flags
(yellow), enemies (blue), and your player (red) — updating
every tick. 🛰️

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- The radar is the same data, just drawn at a different scale
  and offset. Same `walls`, `flags`, `enemies`, and `player` —
  no duplicate state.
- `//` (integer division) does the shrinking and stays whole-
  numbered so stamps land cleanly.

## 🏆 You built Rally-X!

From `class Car:` to a full arcade racer with chasers, smoke,
fuel, lives, score, restart, and now a radar. **Show somebody
this game and be proud.** 🏎️🎉

<pre class="py-starter" markdown="0">
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

state = {
    "fuel": 200, "lives": 3, "score": 0, "flags": 0,
    "smoke": 3, "smoke_timer": 0, "running": True,
}

hud = turtle.Turtle()
hud.hideturtle()
hud.penup()
hud.color("#FFE14A")

def draw_hud():
    hud.clear()
    hud.goto(-280, 260)
    hud.write(
        "🏆 " + str(state["score"])
        + "    🚩 " + str(state["flags"]) + "/" + str(len(flags))
        + "    ⛽ " + str(state["fuel"])
        + "    ❤️ " + str(state["lives"])
        + "    💨 " + str(state["smoke"]),
        font=("Arial", 16, "bold"),
    )

# 👇
# Constants: RADAR_OX = 220, RADAR_OY = 200, SCALE = 6
# Make a radar_pen turtle (hidden, penup, speed 0)
# Define to_radar(x, y) returning (RADAR_OX + x//SCALE, RADAR_OY + y//SCALE)
# Define draw_radar(): clear pen, draw a 110x110 cyan border,
#   stamp every wall (cyan), uncollected flag (yellow),
#   enemy (blue), and the player (red) at their to_radar() spot
# 👆

over_pen = turtle.Turtle()
over_pen.hideturtle()
over_pen.penup()
over_pen.color("white")

def show_game_over():
    over_pen.clear()
    over_pen.goto(0, 30)
    over_pen.write("GAME OVER", align="center",
        font=("Arial", 36, "bold"))
    over_pen.goto(0, -10)
    over_pen.write("Final score: " + str(state["score"]),
        align="center", font=("Arial", 20, "bold"))
    over_pen.goto(0, -50)
    over_pen.write("Press R to restart",
        align="center", font=("Arial", 16, "bold"))
    screen.update()

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

def use_smoke():
    if state["smoke"] > 0 and state["smoke_timer"] == 0:
        state["smoke"] -= 1
        state["smoke_timer"] = 8

def reset_game():
    state["fuel"] = 200
    state["lives"] = 3
    state["score"] = 0
    state["flags"] = 0
    state["smoke"] = 3
    state["smoke_timer"] = 0
    state["running"] = True
    over_pen.clear()
    player.x, player.y = 0, 0
    player.direction = (0, 0)
    enemies[0].x, enemies[0].y = -200, 150
    enemies[1].x, enemies[1].y = 200, -150
    enemies[2].x, enemies[2].y = -150, -200
    for f in flags:
        f.collected = False
    tick()

def check_flag_pickup():
    for f in flags:
        if not f.collected and f.x == player.x and f.y == player.y:
            f.collected = True
            state["flags"] += 1
            state["score"] += 10

def tick():
    if not state["running"]:
        return
    player.update()
    check_flag_pickup()
    state["fuel"] -= 1

    if state["smoke_timer"] > 0:
        state["smoke_timer"] -= 1
    else:
        for e in enemies:
            e.chase(player)

    for e in enemies:
        if e.x == player.x and e.y == player.y:
            state["lives"] -= 1
            player.x, player.y = 0, 0

    if state["fuel"] <= 0 or state["lives"] <= 0:
        state["running"] = False
        show_game_over()
        return

    player.draw()
    for e in enemies: e.draw()
    for f in flags: f.draw()
    draw_hud()
    # 👇
    # call draw_radar() here
    # 👆
    screen.update()
    screen.ontimer(tick, 150)

screen.listen()
screen.onkey(go_up,    "Up")
screen.onkey(go_down,  "Down")
screen.onkey(go_left,  "Left")
screen.onkey(go_right, "Right")
screen.onkey(use_smoke, "space")
screen.onkey(reset_game, "r")
screen.onkey(reset_game, "R")

tick()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I made the game! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
