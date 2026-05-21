---
layout: default
title: "Flappy Bird — Class 10 — Step 2"
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
</pre>

<sub>Flappy Bird — Class 10 — Step **2** of 2</sub>

# ⭐ Step 2 — GAME OVER + restart

Four pieces stitched together: a `running` flag, a `game_over()`,
a `restart()`, and an `on_space()` dispatcher.

## ✏️ What to change

Between the markers:

1. Add `running = [True]` near the other state lists.
2. Add `over_pen` (white turtle, hidden, penup) and a
   `game_over()` function that flips `running[0] = False` and
   writes GAME OVER + final score in the center.
3. Add a `restart()` function that resets `bird.x`, `bird.y`,
   `bird.vy`, empties `pipes` (clear each pen first!), resets
   `spawn_timer` and `score`, sets `running[0] = True`, clears
   `over_pen`, redraws the score, and calls `tick()`.
4. Add an `on_space()` dispatcher that calls `bird.flap()` if
   running, else `restart()`.
5. In `tick()`, replace `screen.update(); return` calls (after
   collisions and out-of-bounds) with `game_over(); return`.
   Also add `if not running[0]: return` at the very top of
   `tick`.
6. Replace the line that connects SPACE to `bird.flap`
   (`screen.onkey(bird.flap, "space")`) with one that connects
   SPACE to `on_space` instead: `screen.onkey(on_space, "space")`.

Tap **▶ Play**. Crash. **GAME OVER** shows up. Press **SPACE**.
You're playing again. 🎮

> 💡 Big change — tap **💡 Solution**.

---

## 🔍 Notice

- `running = [True]` is a 1-item list so functions can flip it.
- `restart()` does **not** call `screen.onkey` again — the same
  binding is still active.
- `tick()` checks `running[0]` at the top so a stray scheduled
  tick after restart doesn't run twice.

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
# Big change — see the lesson list. Tap 💡 Solution to drop in
# the full game-over + restart flow.

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

score_pen = turtle.Turtle()
score_pen.hideturtle()
score_pen.penup()
score_pen.speed(0)
score_pen.color("#FFFFFF")

def draw_score():
    score_pen.clear()
    score_pen.goto(0, 240)
    score_pen.write(str(score[0]), align="center", font=("Arial", 36, "bold"))

draw_score()

def tick():
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
            screen.update()
            return
    if bird.y > 290 or bird.y < -290:
        screen.update()
        return
    while pipes and pipes[0].x < -240:
        pipes[0].pen.clear()
        pipes.pop(0)
    screen.update()
    screen.ontimer(tick, 30)

screen.listen()
screen.onkey(bird.flap, "space")

tick()
# 👆

screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
