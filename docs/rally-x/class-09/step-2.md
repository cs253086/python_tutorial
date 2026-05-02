---
layout: default
title: "Rally-X — Class 9 — Step 2"
---

<pre class="py-solution">
state = {"fuel": 200, "lives": 3, "score": 0, "flags": 0}

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
        + "    ❤️ " + str(state["lives"]),
        font=("Arial", 16, "bold"),
    )
</pre>

<sub>Rally-X — Class 9 — Step **2** of 2</sub>

# ⭐ Step 2 — Add fuel, lives, and a HUD

Add a `state` dict, a `hud` pen, and a `draw_hud()` function.
Update fuel each tick, increment score on flag pickup, and lose
a life when an enemy touches the player.

## ✏️ What to add

1. Right after the maze code, define
   `state = {"fuel": 200, "lives": 3, "score": 0, "flags": 0}`
2. Make a `hud` turtle (hidden, penup, color `"#FFE14A"`)
3. Define `draw_hud()` that clears `hud`, goes to top-left, and
   writes 🏆 score, 🚩 flags, ⛽ fuel, ❤️ lives
4. In `check_flag_pickup()`, when a flag is collected: bump
   `state["flags"]` by 1 and `state["score"]` by 10
5. In `tick()`:
   - subtract 1 from `state["fuel"]` each tick (use a counter
     inside state if you want slower drain)
   - check enemy collision: if any enemy is at the player's
     position, drop `state["lives"]` by 1, reset player to
     `(0, 0)`
   - call `draw_hud()` near the end before `screen.update()`

Tap **▶ Play**. The HUD should show your stats; collecting flags
bumps the count and score; touching an enemy costs a life. ⛽📉

> 💡 Stuck? Tap **💡 Solution** for the dict + HUD wiring.

---

## 🔍 Notice

- One dict, one source of truth. Easier than juggling many
  separate variables.
- The HUD reads from `state` every frame, so it always matches
  reality.
- We don't game-over yet — that's Class 11.

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
        if (self.x + dx, self.y) not in walls:
            self.x += dx
        elif (self.x, self.y + dy) not in walls:
            self.y += dy

    def draw(self):
        self.pen.clearstamps()
        self.pen.goto(self.x, self.y)
        self.pen.stamp()

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
        self.pen.clearstamps()
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
# Make state = {"fuel": 200, "lives": 3, "score": 0, "flags": 0}
# Make a hud turtle (hidden, penup, color "#FFE14A")
# Define draw_hud() that clears hud and writes
#   "🏆 score    🚩 N/M    ⛽ fuel    ❤️ lives"
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

def check_flag_pickup():
    for f in flags:
        if not f.collected and f.x == player.x and f.y == player.y:
            f.collected = True
            # 👇
            # state["flags"] += 1
            # state["score"] += 10
            # 👆

def tick():
    player.update()
    check_flag_pickup()
    for e in enemies:
        e.chase(player)
    # 👇
    # Subtract 1 from state["fuel"]
    # If any enemy is at the player's position:
    #   state["lives"] -= 1
    #   player.x = 0; player.y = 0
    # 👆
    player.draw()
    for e in enemies:
        e.draw()
    for f in flags:
        f.draw()
    # 👇
    # call draw_hud() here
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
