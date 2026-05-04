---
layout: default
title: "Flappy Bird — Class 5 — Step 2"
---

<pre class="py-solution" markdown="0">
pipe_pen = turtle.Turtle()
pipe_pen.hideturtle()
pipe_pen.penup()
pipe_pen.speed(0)
pipe_pen.color("#5BB31E")

def draw_pipe(x, gap_y):
    # top pipe: from (x-25, gap_y+70) up to the top of the screen
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
    # bottom pipe: from (x-25, -300) up to (gap_y - 70)
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
</pre>

<sub>Flappy Bird — Class 5 — Step **2** of 2</sub>

# ⭐ Step 2 — Stamp the first pipe pair

Between the markers, add a **green pipe pen** and a `draw_pipe`
function, then call it once.

## ✏️ What to add

1. `pipe_pen` — a new turtle (hidden, penup, speed 0,
   color `"#5BB31E"`)
2. `draw_pipe(x, gap_y)` — draws **two** filled rectangles:
   - **Top pipe**: bottom-left at `(x - 25, gap_y + 70)`,
     50 wide, height = `230 - gap_y` (reaches up to the ceiling
     at y=300)
   - **Bottom pipe**: bottom-left at `(x - 25, -300)`, 50 wide,
     height = `gap_y - 70 + 300` (reaches up to the bottom of
     the gap)
3. Call `draw_pipe(80, 0)` once — pipe at x=80 with the gap
   centered on y=0.

Tap **▶ Play**. You should see two green pipes with a gap between
them, and your bird flapping around. Try to fly through the gap!
🟩🐤🟩

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- `gap_y` is the **center** of the gap. The gap is **140 px tall**
  (70 above and 70 below `gap_y`).
- The bird passes through the pipe right now — we haven't added
  collisions yet. That's Class 9.
- The pipe doesn't move. We'll make it scroll left in Class 6.

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
# Add the first pipe:
# 1. pipe_pen = turtle.Turtle()  (hidden, penup, speed 0, color "#5BB31E")
# 2. def draw_pipe(x, gap_y):
#      - top pipe: rectangle 50 wide, height = 230 - gap_y,
#        bottom-left corner at (x - 25, gap_y + 70)
#      - bottom pipe: rectangle 50 wide, height = gap_y - 70 + 300,
#        bottom-left corner at (x - 25, -300)
# 3. Call draw_pipe(80, 0) once
# 👆

def tick():
    bird.update()
    bird.draw()
    screen.update()
    screen.ontimer(tick, 30)

screen.listen()
screen.onkey(bird.flap, "space")

tick()

screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
