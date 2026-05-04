---
layout: default
title: "Flappy Bird — Class 12 — Step 2"
---

<pre class="py-solution" markdown="0">
class Bird:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.vy = 0
        self.pen = turtle.Turtle()
        self.pen.hideturtle()
        self.pen.penup()
        self.pen.speed(0)

    def draw(self):
        self.pen.clear()
        self.pen.penup()
        # body
        self.pen.color("#FFD23F")
        self.pen.goto(self.x - 12, self.y - 10)
        self.pen.setheading(0)
        self.pen.pendown()
        self.pen.begin_fill()
        for length in [24, 20, 24, 20]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()
        # wing — flashes orange while flapping
        wing_color = "#FFA94D" if self.vy > 0 else "#E8B22A"
        self.pen.color(wing_color)
        self.pen.goto(self.x - 8, self.y - 5)
        self.pen.pendown()
        self.pen.begin_fill()
        for length in [10, 6, 10, 6]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()
        # eye
        self.pen.color("#FFFFFF")
        self.pen.goto(self.x + 3, self.y + 2)
        self.pen.pendown()
        self.pen.begin_fill()
        for length in [6, 6, 6, 6]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()
        # beak
        self.pen.color("#FF6B35")
        self.pen.goto(self.x + 12, self.y - 2)
        self.pen.pendown()
        self.pen.begin_fill()
        for length in [6, 4, 6, 4]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()

    def update(self):
        self.vy = self.vy - 1
        self.y = self.y + self.vy

    def flap(self):
        self.vy = 12

class Pipe:
    def __init__(self, x, gap_y):
        self.x = x
        self.gap_y = gap_y
        self.passed = False
        self.pen = turtle.Turtle()
        self.pen.hideturtle()
        self.pen.penup()
        self.pen.speed(0)
        self.pen.color("#5BB31E")

    def update(self):
        self.x = self.x - 3

    def draw(self):
        self.pen.clear()
        self.pen.penup()
        self.pen.goto(self.x - 25, self.gap_y + 70)
        self.pen.setheading(0)
        self.pen.pendown()
        self.pen.begin_fill()
        h = 230 - self.gap_y
        for length in [50, h, 50, h]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()
        self.pen.goto(self.x - 25, -250)
        self.pen.pendown()
        self.pen.begin_fill()
        h = self.gap_y - 70 + 250
        for length in [50, h, 50, h]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()

# clouds — drawn first so everything else is on top
cloud_pen = turtle.Turtle()
cloud_pen.hideturtle()
cloud_pen.penup()
cloud_pen.speed(0)
cloud_pen.shape("circle")
cloud_pen.color("#FFFFFF")
for cx, cy in [(-150, 200), (50, 230), (170, 180)]:
    cloud_pen.goto(cx, cy)
    cloud_pen.stamp()

# ground — sandy floor
ground_pen = turtle.Turtle()
ground_pen.hideturtle()
ground_pen.penup()
ground_pen.speed(0)
ground_pen.color("#DED895")
ground_pen.goto(-200, -300)
ground_pen.setheading(0)
ground_pen.pendown()
ground_pen.begin_fill()
for length in [400, 50, 400, 50]:
    ground_pen.forward(length)
    ground_pen.left(90)
ground_pen.end_fill()
ground_pen.penup()

def collides(b, p):
    if b.x + 12 < p.x - 25: return False
    if b.x - 12 > p.x + 25: return False
    if b.y + 10 > p.gap_y + 70: return True
    if b.y - 10 < p.gap_y - 70: return True
    return False

bird = Bird(-100, 0)
pipes = [Pipe(220, 0)]
spawn_timer = [0]
state = {"score": 0, "best": 0, "running": True}

score_pen = turtle.Turtle()
score_pen.hideturtle()
score_pen.penup()
score_pen.speed(0)
score_pen.color("#FFFFFF")

def draw_score():
    score_pen.clear()
    score_pen.goto(0, 240)
    score_pen.write(str(state["score"]), align="center", font=("Arial", 36, "bold"))
    score_pen.goto(0, 215)
    score_pen.write("Best: " + str(state["best"]), align="center", font=("Arial", 12, "normal"))

over_pen = turtle.Turtle()
over_pen.hideturtle()
over_pen.penup()
over_pen.speed(0)
over_pen.color("#FFFFFF")

def game_over():
    state["running"] = False
    if state["score"] > state["best"]:
        state["best"] = state["score"]
        draw_score()
    over_pen.clear()
    over_pen.goto(0, 30)
    over_pen.write("GAME OVER", align="center", font=("Arial", 32, "bold"))
    over_pen.goto(0, -10)
    over_pen.write("Score: " + str(state["score"]), align="center", font=("Arial", 20, "bold"))
    over_pen.goto(0, -50)
    over_pen.write("Press SPACE to play again", align="center", font=("Arial", 14, "normal"))
    screen.update()

def restart():
    bird.x = -100
    bird.y = 0
    bird.vy = 0
    for p in pipes:
        p.pen.clear()
    while pipes:
        pipes.pop()
    pipes.append(Pipe(220, 0))
    spawn_timer[0] = 0
    state["score"] = 0
    state["running"] = True
    over_pen.clear()
    draw_score()
    tick()

def on_space():
    if state["running"]:
        bird.flap()
    else:
        restart()

draw_score()

def tick():
    if not state["running"]:
        return
    bird.update()
    bird.draw()
    spawn_timer[0] = spawn_timer[0] + 1
    if spawn_timer[0] > 60:
        pipes.append(Pipe(220, random.randint(-100, 100)))
        spawn_timer[0] = 0
    for p in pipes:
        p.update()
        p.draw()
        if not p.passed and p.x < bird.x:
            state["score"] = state["score"] + 1
            p.passed = True
            draw_score()
        if collides(bird, p):
            game_over()
            return
    if bird.y > 290 or bird.y < -240:
        game_over()
        return
    while pipes and pipes[0].x < -240:
        pipes[0].pen.clear()
        pipes.pop(0)
    screen.update()
    screen.ontimer(tick, 30)

screen.listen()
screen.onkey(on_space, "space")

tick()
</pre>

<sub>Flappy Bird — Class 12 — Step **2** of 2</sub>

# ⭐ Step 2 — Polish your Flappy Bird

Three little additions:

## ✏️ What to change

Between the markers:

1. **Wing on the bird** — inside `Bird.draw`, after the body and
   before the eye, draw a 10×6 rectangle at `(self.x - 8, self.y - 5)`.
   Color it bright orange `#FFA94D` if `self.vy > 0`, else darker
   yellow `#E8B22A`.
2. **Clouds** — make a `cloud_pen` (hidden, penup, shape "circle",
   color white) and stamp it at three positions.
3. **Ground** — make a `ground_pen` and draw a sandy 400×50
   rectangle from `(-200, -300)`.
4. **Floor check** — change the lower out-of-bounds check from
   `bird.y < -290` to `bird.y < -240` so the bird crashes when
   it touches the ground (not the very bottom of the canvas).
5. Also change the bottom pipe baseline from `-300` to `-250`
   so pipes sit on the ground instead of going under it.

Tap **▶ Play**. The bird flashes its wing as it flaps, three
clouds float in the sky, and pipes sit on a sandy floor. 🎮

> 💡 Big change — tap **💡 Solution**.

---

## 🏆 You built a working Flappy Bird game!

From `print("Hello!")` (way back in beginner Snake) to here. A
real game with classes, methods, lists, dictionaries, collisions,
score, restart, and polish.

**Show it to someone and be proud.** 🎉

<pre class="py-starter" markdown="0">
import turtle
import random

screen = turtle.Screen()
screen.title("Flappy Bird")
screen.bgcolor("#70C5CE")
screen.setup(400, 600)
screen.tracer(0)

# 👇
# Final polish — five small changes; tap 💡 Solution to drop them
# all in (it's a lot of small edits in different places).

class Bird:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.vy = 0
        self.pen = turtle.Turtle()
        self.pen.hideturtle()
        self.pen.penup()
        self.pen.speed(0)

    def draw(self):
        self.pen.clear()
        self.pen.penup()
        self.pen.color("#FFD23F")
        self.pen.goto(self.x - 12, self.y - 10)
        self.pen.setheading(0)
        self.pen.pendown()
        self.pen.begin_fill()
        for length in [24, 20, 24, 20]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()
        self.pen.color("#FFFFFF")
        self.pen.goto(self.x + 3, self.y + 2)
        self.pen.pendown()
        self.pen.begin_fill()
        for length in [6, 6, 6, 6]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()
        self.pen.color("#FF6B35")
        self.pen.goto(self.x + 12, self.y - 2)
        self.pen.pendown()
        self.pen.begin_fill()
        for length in [6, 4, 6, 4]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()

    def update(self):
        self.vy = self.vy - 1
        self.y = self.y + self.vy

    def flap(self):
        self.vy = 12

class Pipe:
    def __init__(self, x, gap_y):
        self.x = x
        self.gap_y = gap_y
        self.passed = False
        self.pen = turtle.Turtle()
        self.pen.hideturtle()
        self.pen.penup()
        self.pen.speed(0)
        self.pen.color("#5BB31E")

    def update(self):
        self.x = self.x - 3

    def draw(self):
        self.pen.clear()
        self.pen.penup()
        self.pen.goto(self.x - 25, self.gap_y + 70)
        self.pen.setheading(0)
        self.pen.pendown()
        self.pen.begin_fill()
        h = 230 - self.gap_y
        for length in [50, h, 50, h]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()
        self.pen.goto(self.x - 25, -300)
        self.pen.pendown()
        self.pen.begin_fill()
        h = self.gap_y - 70 + 300
        for length in [50, h, 50, h]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()

def collides(b, p):
    if b.x + 12 < p.x - 25: return False
    if b.x - 12 > p.x + 25: return False
    if b.y + 10 > p.gap_y + 70: return True
    if b.y - 10 < p.gap_y - 70: return True
    return False

bird = Bird(-100, 0)
pipes = [Pipe(220, 0)]
spawn_timer = [0]
state = {"score": 0, "best": 0, "running": True}

score_pen = turtle.Turtle()
score_pen.hideturtle()
score_pen.penup()
score_pen.speed(0)
score_pen.color("#FFFFFF")

def draw_score():
    score_pen.clear()
    score_pen.goto(0, 240)
    score_pen.write(str(state["score"]), align="center", font=("Arial", 36, "bold"))
    score_pen.goto(0, 215)
    score_pen.write("Best: " + str(state["best"]), align="center", font=("Arial", 12, "normal"))

over_pen = turtle.Turtle()
over_pen.hideturtle()
over_pen.penup()
over_pen.speed(0)
over_pen.color("#FFFFFF")

def game_over():
    state["running"] = False
    if state["score"] > state["best"]:
        state["best"] = state["score"]
        draw_score()
    over_pen.clear()
    over_pen.goto(0, 30)
    over_pen.write("GAME OVER", align="center", font=("Arial", 32, "bold"))
    over_pen.goto(0, -10)
    over_pen.write("Score: " + str(state["score"]), align="center", font=("Arial", 20, "bold"))
    over_pen.goto(0, -50)
    over_pen.write("Press SPACE to play again", align="center", font=("Arial", 14, "normal"))
    screen.update()

def restart():
    bird.x = -100
    bird.y = 0
    bird.vy = 0
    for p in pipes:
        p.pen.clear()
    while pipes:
        pipes.pop()
    pipes.append(Pipe(220, 0))
    spawn_timer[0] = 0
    state["score"] = 0
    state["running"] = True
    over_pen.clear()
    draw_score()
    tick()

def on_space():
    if state["running"]:
        bird.flap()
    else:
        restart()

draw_score()

def tick():
    if not state["running"]:
        return
    bird.update()
    bird.draw()
    spawn_timer[0] = spawn_timer[0] + 1
    if spawn_timer[0] > 60:
        pipes.append(Pipe(220, random.randint(-100, 100)))
        spawn_timer[0] = 0
    for p in pipes:
        p.update()
        p.draw()
        if not p.passed and p.x < bird.x:
            state["score"] = state["score"] + 1
            p.passed = True
            draw_score()
        if collides(bird, p):
            game_over()
            return
    if bird.y > 290 or bird.y < -290:
        game_over()
        return
    while pipes and pipes[0].x < -240:
        pipes[0].pen.clear()
        pipes.pop(0)
    screen.update()
    screen.ontimer(tick, 30)

screen.listen()
screen.onkey(on_space, "space")

tick()
# 👆

screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I made a game! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
