---
layout: default
title: "Flappy Bird — Class 11 — Step 2"
---

<pre class="py-solution" markdown="0">
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
</pre>

<sub>Flappy Bird — Class 11 — Step **2** of 2</sub>

# ⭐ Step 2 — `state` dict + Best score

Refactor the loose state into one `state` dictionary, and show
the best score in the HUD.

## ✏️ What to change

Between the markers:

1. Delete `score = [0]` and `running = [True]`.
2. Add `state = {"score": 0, "best": 0, "running": True}`
   in their place.
3. Find every use of `score[0]` and replace with `state["score"]`.
   Same for `running[0]` → `state["running"]`.
4. In `draw_score()`, after writing the big score, also write
   a small **`"Best: N"`** line just under it.
5. In `game_over()`, before drawing the message, bump the best
   if needed:
   ```text
   if state["score"] > state["best"]:
       state["best"] = state["score"]
       draw_score()
   ```

Tap **▶ Play**. Cross a pipe — the score goes up. Crash. Restart.
The **Best** line stays at your highest. 🏆

> 💡 Big change — tap **💡 Solution**.

---

## 🔍 Notice

- `state` survives between runs because we **don't recreate it**
  in `restart()` — we just reset its `score` and `running` keys.
  `best` carries through.
- One dict beats four globals. Future-you will thank past-you.
- `state["best"]` resets when you reload the page (we don't have
  real file storage). True forever-best is a project for later!

<pre class="py-starter" markdown="0">
import turtle
import random

screen = turtle.Screen()
screen.title("Flappy Bird")
screen.bgcolor("#70C5CE")
screen.setup(400, 600)
screen.tracer(0)

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

# 👇
# Refactor: replace score = [0] and running = [True] with one
# dict:  state = {"score": 0, "best": 0, "running": True}
# Then update every reference (score[0] -> state["score"], etc.).
# Add a "Best: N" line in draw_score().
# In game_over(), bump state["best"] if state["score"] is bigger.
# Tap 💡 Solution to drop the whole refactor in.

def collides(b, p):
    if b.x + 12 < p.x - 25: return False
    if b.x - 12 > p.x + 25: return False
    if b.y + 10 > p.gap_y + 70: return True
    if b.y - 10 < p.gap_y - 70: return True
    return False

bird = Bird(-100, 0)
pipes = [Pipe(220, 0)]
spawn_timer = [0]
score = [0]
running = [True]

score_pen = turtle.Turtle()
score_pen.hideturtle()
score_pen.penup()
score_pen.speed(0)
score_pen.color("#FFFFFF")

def draw_score():
    score_pen.clear()
    score_pen.goto(0, 240)
    score_pen.write(str(score[0]), align="center", font=("Arial", 36, "bold"))

over_pen = turtle.Turtle()
over_pen.hideturtle()
over_pen.penup()
over_pen.speed(0)
over_pen.color("#FFFFFF")

def game_over():
    running[0] = False
    over_pen.clear()
    over_pen.goto(0, 30)
    over_pen.write("GAME OVER", align="center", font=("Arial", 32, "bold"))
    over_pen.goto(0, -10)
    over_pen.write("Score: " + str(score[0]), align="center", font=("Arial", 20, "bold"))
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
    score[0] = 0
    running[0] = True
    over_pen.clear()
    draw_score()
    tick()

def on_space():
    if running[0]:
        bird.flap()
    else:
        restart()

draw_score()

def tick():
    if not running[0]:
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
            score[0] = score[0] + 1
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
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
