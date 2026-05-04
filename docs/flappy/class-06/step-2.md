---
layout: default
title: "Flappy Bird — Class 6 — Step 2"
---

<pre class="py-solution" markdown="0">
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
        # top pipe
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
        # bottom pipe
        self.pen.goto(self.x - 25, -300)
        self.pen.pendown()
        self.pen.begin_fill()
        h = self.gap_y - 70 + 300
        for length in [50, h, 50, h]:
            self.pen.forward(length)
            self.pen.left(90)
        self.pen.end_fill()
        self.pen.penup()

pipe = Pipe(220, 0)

def tick():
    bird.update()
    bird.draw()
    pipe.update()
    pipe.draw()
    screen.update()
    screen.ontimer(tick, 30)
</pre>

<sub>Flappy Bird — Class 6 — Step **2** of 2</sub>

# ⭐ Step 2 — Pipe class + scroll

Replace the pipe-pen-and-`draw_pipe` chunk with a real `Pipe`
class, and call its methods from `tick()`.

## ✏️ What to change

Between the markers:

1. Delete `pipe_pen`, `draw_pipe`, and the `draw_pipe(80, 0)` call.
2. Write `class Pipe:` with:
   - `__init__(self, x, gap_y)` storing both, plus
     `self.pen = turtle.Turtle()` (hidden, penup, speed 0,
     color `"#5BB31E"`)
   - `update(self)` that does `self.x = self.x - 3`
   - `draw(self)` that clears the pen and stamps the top + bottom
     rectangles (same math as Class 5, but using `self.x` /
     `self.gap_y`)
3. Make `pipe = Pipe(220, 0)` so it starts off the right edge.
4. In `tick()`, after the bird lines, add `pipe.update()` and
   `pipe.draw()`.

Tap **▶ Play**. The pipe should now **scroll left** across the
screen, while the bird flaps in place. 🟩➡️

> 💡 Big change — tap **💡 Solution** to drop in the new chunk.

---

## 🔍 Notice

- Each `Pipe` instance carries its own `x`, `gap_y`, and `pen`.
  In Class 7 we'll have **many** pipes flying past at once.
- `self.pen.clear()` at the start of `draw()` wipes the previous
  frame's pipe so we don't smear green across the screen.
- The pipe scrolls but doesn't disappear when it leaves the
  screen — it just keeps going. Class 7 fixes that.

<pre class="py-starter" markdown="0">
import turtle

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

bird = Bird(-100, 0)

# 👇
# Replace the old pipe code with a Pipe class:
# class Pipe:
#   __init__(self, x, gap_y) - store both, make self.pen (hidden, penup, speed 0, color "#5BB31E")
#   update(self): self.x = self.x - 3
#   draw(self): clear, then top pipe + bottom pipe (same math as Class 5)
# Make: pipe = Pipe(220, 0)
# In tick(), after bird lines, add: pipe.update() then pipe.draw()

pipe_pen = turtle.Turtle()
pipe_pen.hideturtle()
pipe_pen.penup()
pipe_pen.speed(0)
pipe_pen.color("#5BB31E")

def draw_pipe(x, gap_y):
    pipe_pen.penup()
    pipe_pen.goto(x - 25, gap_y + 70)
    pipe_pen.setheading(0)
    pipe_pen.pendown()
    pipe_pen.begin_fill()
    h = 230 - gap_y
    for length in [50, h, 50, h]:
        pipe_pen.forward(length)
        pipe_pen.left(90)
    pipe_pen.end_fill()
    pipe_pen.penup()
    pipe_pen.goto(x - 25, -300)
    pipe_pen.pendown()
    pipe_pen.begin_fill()
    h = gap_y - 70 + 300
    for length in [50, h, 50, h]:
        pipe_pen.forward(length)
        pipe_pen.left(90)
    pipe_pen.end_fill()
    pipe_pen.penup()

draw_pipe(80, 0)

def tick():
    bird.update()
    bird.draw()
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
