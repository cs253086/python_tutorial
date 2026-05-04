---
layout: default
title: "Flappy Bird — Class 8 — Step 2"
---

<pre class="py-solution" markdown="0">
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
    while pipes and pipes[0].x < -240:
        pipes[0].pen.clear()
        pipes.pop(0)
    screen.update()
    screen.ontimer(tick, 30)
</pre>

<sub>Flappy Bird — Class 8 — Step **2** of 2</sub>

# ⭐ Step 2 — Score the run

Three changes:

## ✏️ What to change

Between the markers:

1. In `Pipe.__init__`, add `self.passed = False`.
2. After making `pipes` and `spawn_timer`, add:
   ```text
   score = [0]
   ```
   and a `score_pen` turtle (hidden, penup, white) plus a
   `draw_score()` function that clears the pen and writes the
   score at `(0, 240)` in big white text. Call `draw_score()`
   once.
3. Inside the `for p in pipes:` loop in `tick()`, after `p.draw()`:
   ```text
   if not p.passed and p.x < bird.x:
       score[0] = score[0] + 1
       p.passed = True
       draw_score()
   ```

Tap **▶ Play**. Fly through some pipes — the big white number at
the top counts up each time. 🎉

> 💡 Big change — tap **💡 Solution**.

---

## 🔍 Notice

- `score = [0]` is a 1-item list (same trick as `spawn_timer`)
  so we can change it from inside `tick`.
- We only redraw the score **when it changes** — keeps the screen
  from flickering.
- `not p.passed and p.x < bird.x` — both conditions must be true.
  Once `passed` is `True`, the `not` makes it `False` and the
  whole `if` is skipped.

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

# 👇
# Three changes:
# 1. In Pipe.__init__, add: self.passed = False
# 2. Below "spawn_timer = [0]", add a score and a score_pen:
#      score = [0]
#      score_pen = turtle.Turtle()  (hidden, penup, speed 0, color white)
#      def draw_score():
#          score_pen.clear()
#          score_pen.goto(0, 240)
#          score_pen.write(str(score[0]), align="center",
#                          font=("Arial", 36, "bold"))
#      draw_score()
# 3. Inside the for p in pipes loop in tick(), after p.draw():
#      if not p.passed and p.x < bird.x:
#          score[0] = score[0] + 1
#          p.passed = True
#          draw_score()

class Pipe:
    def __init__(self, x, gap_y):
        self.x = x
        self.gap_y = gap_y
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

bird = Bird(-100, 0)
pipes = [Pipe(220, 0)]
spawn_timer = [0]

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
    while pipes and pipes[0].x < -240:
        pipes[0].pen.clear()
        pipes.pop(0)
    screen.update()
    screen.ontimer(tick, 30)
# 👆

screen.listen()
screen.onkey(bird.flap, "space")

tick()

screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
