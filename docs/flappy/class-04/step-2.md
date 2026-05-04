---
layout: default
title: "Flappy Bird — Class 4 — Step 2"
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

    def flap(self):
        self.vy = 12

bird = Bird(-100, 0)

def tick():
    bird.update()
    bird.draw()
    screen.update()
    screen.ontimer(tick, 30)

screen.listen()
screen.onkey(bird.flap, "space")

tick()
</pre>

<sub>Flappy Bird — Class 4 — Step **2** of 2</sub>

# ⭐ Step 2 — Bind SPACE to flap

Two small additions:

## ✏️ What to change

Between the markers:

1. Add a method `flap(self)` on `Bird` that does
   `self.vy = 12` — that's a single big jump up.
2. After `bird = Bird(-100, 0)` and before `tick()`, add:
   ```text
   screen.listen()
   screen.onkey(bird.flap, "space")
   ```

Tap **▶ Play**. Click the game window once so it hears keys, then
mash **SPACE**. The bird should flutter up every press. 🐤

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- `bird.flap` (no parens!) is a **bound method** — it remembers
  it belongs to `bird`. We hand it to `screen.onkey` to call later.
- `self.vy = 12` **replaces** `vy` (it doesn't add to it). One
  press cancels any falling and shoots the bird up.
- `screen.listen()` is the magic line that turns on key listening.
  Forget it and key bindings do nothing.

<pre class="py-starter" markdown="0">
import turtle

screen = turtle.Screen()
screen.title("Flappy Bird")
screen.bgcolor("#70C5CE")
screen.setup(400, 600)
screen.tracer(0)

# 👇
# Two changes:
# 1. Add a flap method on Bird:
#      def flap(self):
#          self.vy = 12
# 2. After bird is made, listen for space:
#      screen.listen()
#      screen.onkey(bird.flap, "space")

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
# 👆

screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
