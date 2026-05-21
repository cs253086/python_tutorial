---
layout: default
title: "Flappy Bird — Class 3 — Step 2"
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

bird = Bird(-100, 0)

def tick():
    bird.update()
    bird.draw()
    screen.update()
    screen.ontimer(tick, 30)

tick()
</pre>

<sub>Flappy Bird — Class 3 — Step **2** of 2</sub>

# ⭐ Step 2 — Add gravity + the game loop

Three small changes turn the still bird into a falling one:

## ✏️ What to change

Between the markers:

1. Inside `Bird.__init__`, add `self.vy = 0` (the bird's
   up/down speed, in pixels per frame)
2. Add a new method on `Bird`:
   ```text
   def update(self):
       self.vy = self.vy - 1
       self.y = self.y + self.vy
   ```
3. Replace `bird.draw()` at the bottom with a `tick()` function
   that calls `bird.update()`, `bird.draw()`, `screen.update()`,
   and then uses `screen.ontimer(tick, 30)` to ask Python to run
   `tick` again in 30 ms — then call `tick()` once to start the
   loop.

Tap **▶ Play**. The bird should **fall** off the bottom of the
screen — faster and faster. That's gravity. 🪂

> 💡 Big change — tap **💡 Solution** to drop in the whole
> updated section.

---

## 🔍 Notice

- `self.vy = self.vy - 1` adds **one pixel of falling speed**
  every frame. After 10 frames, the bird is moving 10 px/frame.
- `tick()` calls `screen.ontimer(tick, 30)` at the end —
  **the function schedules itself.** That's how a game loop
  keeps going.
- The bird flies off-screen because we haven't added a floor or
  pipes yet. We'll fix that in Class 9.

<pre class="py-starter" markdown="0">
import turtle

screen = turtle.Screen()
screen.title("Flappy Bird")
screen.bgcolor("#70C5CE")
screen.setup(400, 600)
screen.tracer(0)

# 👇
# Three changes:
# 1. Add  self.vy = 0  inside Bird.__init__
# 2. Add a method update(self):
#      self.vy = self.vy - 1
#      self.y = self.y + self.vy
# 3. Replace bird.draw() at the bottom with a game loop:
#      def tick():
#          bird.update()
#          bird.draw()
#          screen.update()
#          screen.ontimer(tick, 30)
#      tick()

class Bird:
    def __init__(self, x, y):
        self.x = x
        self.y = y
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

bird = Bird(-100, 0)
bird.draw()
# 👆

screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
