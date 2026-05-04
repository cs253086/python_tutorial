---
layout: default
title: "Flappy Bird — Class 6 — Step 1"
---

<sub>Flappy Bird — Class 6 — Step **1** of 2</sub>

# ⭐ Step 1 — Two classes, side by side

A program can have as many classes as it likes. Each one is its
own blueprint with its own data and methods.

---

## 🐤🟩 Two cookie cutters

```python
class Bird:
    def __init__(self, name):
        self.name = name
    def hi(self):
        print("Tweet, I'm", self.name)

class Pipe:
    def __init__(self, x):
        self.x = x
    def info(self):
        print("I'm a pipe at x =", self.x)

bird = Bird("Yellow")
pipe = Pipe(80)

bird.hi()
pipe.info()
```

```text
Tweet, I'm Yellow
I'm a pipe at x = 80
```

The two classes don't know about each other. They're just
blueprints — each does its own job.

---

## 🚶 An object that moves itself

If a Pipe knows its own `x`, it can **change** that x every
frame to scroll left:

```python
class Pipe:
    def __init__(self, x):
        self.x = x

    def update(self):
        self.x = self.x - 3   # scroll left

p = Pipe(100)
print(p.x)
p.update()
print(p.x)
p.update()
print(p.x)
```

```text
100
97
94
```

Each `update()` slides the pipe 3 to the left.

---

## 🎨 Each instance gets its own pen

In your `Bird`, you wrote `self.pen = turtle.Turtle()` inside
`__init__`. Pipes will do the same. That way bird-drawing and
pipe-drawing happen on **separate pens** — clearing one doesn't
erase the other.

```python
class Pipe:
    def __init__(self, x, gap_y):
        self.x = x
        self.gap_y = gap_y
        self.pen = turtle.Turtle()
        self.pen.hideturtle()
        self.pen.penup()
        self.pen.color("#5BB31E")
```

This is the **exact** same recipe as the bird's pen, just with
a green color.

---

## 🎉 Two classes, ready!

Next step: rewrite the pipe code as `class Pipe` and plug it into
the game loop so the pipe **scrolls**.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 6](./index.html)</sub>
