---
layout: default
title: "Flappy Bird — Class 3 — Step 1"
---

<sub>Flappy Bird — Class 3 — Step **1** of 2</sub>

# ⭐ Step 1 — Methods that change `self`

A method can **change** the bird's own data using `self.something = …`.
That's how the bird remembers it's been falling.

---

## 🎒 A counter on a class

```python
class Counter:
    def __init__(self):
        self.value = 0

    def bump(self):
        self.value = self.value + 1

c = Counter()
c.bump()
c.bump()
c.bump()
print(c.value)
```

```text
3
```

Each `bump()` call **mutates** `c.value`. The change sticks
because we stored it on `self`.

---

## 🪂 Gravity, three frames at a time

```python
class Bird:
    def __init__(self, y):
        self.y = y
        self.vy = 0

    def update(self):
        self.vy = self.vy - 1
        self.y = self.y + self.vy

b = Bird(0)
b.update()
print(b.y, b.vy)
b.update()
print(b.y, b.vy)
b.update()
print(b.y, b.vy)
```

```text
-1 -1
-3 -2
-6 -3
```

Notice how the bird falls **faster and faster** — that's gravity
working, frame by frame.

---

## ⏱️ The game loop with `ontimer`

`screen.ontimer(fn, ms)` says "call `fn` after `ms` milliseconds."
If `fn` schedules **itself** at the end, you get a loop that
runs forever:

```python
import turtle
screen = turtle.Screen()
screen.bgcolor("#70C5CE")
screen.setup(400, 400)

count = [0]

def tick():
    count[0] = count[0] + 1
    print("tick", count[0])
    if count[0] < 5:
        screen.ontimer(tick, 500)

tick()
screen.mainloop()
```

```text
tick 1
tick 2
tick 3
tick 4
tick 5
```

Every half-second, `tick` runs again. In our game we'll go
**30 ms** between ticks (~33 frames per second).

### 🔍 Notice

- `count = [0]` is a 1-item list so we can change it from inside
  the function. (You met this trick in beginner Snake!)
- `tick` schedules `tick` at the end — that's what makes it
  loop. Forget that line and the loop dies after one tick.

---

## 🎉 You learned the loop pattern!

Next step: drop these into the game so the bird starts falling.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 3](./index.html)</sub>
