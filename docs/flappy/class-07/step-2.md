---
layout: default
title: "Flappy Bird — Class 7 — Step 2"
---

<pre class="py-solution" markdown="0">
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
</pre>

<sub>Flappy Bird — Class 7 — Step **2** of 2</sub>

# ⭐ Step 2 — A river of pipes

Replace the single `pipe` with a **list**, spawn new ones over
time, and remove any that scroll off the left edge.

## ✏️ What to change

Between the markers:

1. At the top of the file (with the other imports), add:
   `import random`
2. Replace `pipe = Pipe(220, 0)` with:
   ```text
   pipes = [Pipe(220, 0)]
   spawn_timer = [0]
   ```
3. Inside `tick()`, after the bird lines:
   - bump the spawn timer: `spawn_timer[0] = spawn_timer[0] + 1`
   - if it's been more than 60 frames, append a new pipe with a
     random gap height between -100 and 100, and reset the timer
   - replace `pipe.update()` / `pipe.draw()` with a loop:
     `for p in pipes: p.update(); p.draw()`
   - after the loop, drop any pipes that have scrolled past
     `x < -240` (clear their pen first!)

Tap **▶ Play**. A fresh green pipe should appear from the right
every couple of seconds, each at a different height. 🟩🟩🟩

> 💡 Big change — tap **💡 Solution**.

---

## 🔍 Notice

- `spawn_timer = [0]` is a 1-item list because plain numbers
  can't be changed inside a function. (Same trick we used for
  `count` in Class 3.)
- `random.randint(-100, 100)` keeps the gap somewhere in the
  middle of the screen — never too close to the ceiling or floor.
- `pipes[0].pen.clear()` is **important** — without it, the
  leftover pipe's drawing stays on screen even after we pop it
  from the list.

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

# 👇
# `import random` is already added at the top for you.
# Replace the single pipe + tick() with a spawning version:
#      pipes = [Pipe(220, 0)]
#      spawn_timer = [0]
#      def tick():
#          bird.update(); bird.draw()
#          spawn_timer[0] = spawn_timer[0] + 1
#          if spawn_timer[0] > 60:
#              pipes.append(Pipe(220, random.randint(-100, 100)))
#              spawn_timer[0] = 0
#          for p in pipes:
#              p.update(); p.draw()
#          while pipes and pipes[0].x < -240:
#              pipes[0].pen.clear()
#              pipes.pop(0)
#          screen.update()
#          screen.ontimer(tick, 30)

pipe = Pipe(220, 0)

def tick():
    bird.update()
    bird.draw()
    pipe.update()
    pipe.draw()
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
