---
layout: default
title: "Rally-X — Class 5 — Step 1"
---

<sub>Rally-X — Class 5 — Step **1** of 2</sub>

# ⭐ Step 1 — Methods that change `self`

In Class 2 you wrote a `draw()` method that **uses** `self`'s
attributes. Today you'll write methods that **change** them.

```python
class Mover:
    def __init__(self):
        self.x = 0

    def step(self):
        self.x = self.x + 1

m = Mover()
print(m.x)
m.step()
print(m.x)
m.step()
m.step()
print(m.x)
```

Tap **▶ Run**. Output:

```text
0
1
3
```

### 🔍 Notice

- `m.step()` changes `m.x` from inside the method (`self.x = ...`).
- Calling it 3 times moves it from 0 → 1 → 2 → 3.
- The class **owns** the data; methods are how you change it.

---

## 🔁 The game loop pattern

A real game runs the same `tick` over and over (every ~150ms).
Each tick: move things, then draw them.

```python
import turtle

screen = turtle.Screen()
screen.setup(300, 300)

class Mover:
    def __init__(self):
        self.x = 0
        self.pen = turtle.Turtle()
        self.pen.penup()

    def step(self):
        self.x += 5

    def draw(self):
        self.pen.goto(self.x, 0)

m = Mover()

def tick():
    m.step()
    m.draw()
    screen.ontimer(tick, 100)

tick()
screen.mainloop()
```

Tap **▶ Run**. The little arrow slides to the right!

### 🔍 Notice

- `tick()` does both jobs: **update** (`m.step()`) and **draw**
  (`m.draw()`).
- `screen.ontimer(tick, 100)` calls `tick` again in 100 ms — that
  loops forever.
- This is the same shape as Snake's game loop, just packaged
  inside a class.

---

## 🎉 You can drive a class!

Next step: take this pattern, plug arrow keys into it, and drive
your Rally-X player.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 5](./index.html)</sub>
