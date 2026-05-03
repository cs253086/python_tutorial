---
layout: default
title: "Rally-X — Class 4 — Step 1"
---

<sub>Rally-X — Class 4 — Step **1** of 2</sub>

# ⭐ Step 1 — A list of positions

A maze is just a **list of where the walls go**. Each wall is a
spot on the screen — an `(x, y)` tuple.

```python
walls = [
    (-200, 100),
    (-100, 100),
    (0, 100),
    (200, -50),
]

for w in walls:
    print(w)
```

Tap **▶ Run**. Output shows each tuple:

```text
(-200, 100)
(-100, 100)
(0, 100)
(200, -50)
```

### 🔍 Notice

- Each tuple `(x, y)` is one wall position.
- The list can have as many walls as you want.
- A tuple is unpacked with `x, y = w` if you want the parts:

```python
for w in walls:
    x, y = w
    print("wall at", x, y)
```

---

## 🧱 Drawing every wall in one loop

```python
import turtle

wall_pen = turtle.Turtle()
wall_pen.hideturtle()
wall_pen.penup()
wall_pen.speed(0)
wall_pen.shape("square")
wall_pen.color("#3CA84A")

walls = [(-50, 0), (-30, 0), (-10, 0), (10, 0), (30, 0)]

for w in walls:
    wall_pen.goto(w)
    wall_pen.stamp()

turtle.done()
```

Run it. You should see a **horizontal cyan wall** of 5 stamps.

### 🔍 Notice

- `wall_pen.goto(w)` accepts the tuple directly — Python unpacks
  it as x and y.
- One pen draws all the walls. Walls are static (they don't move),
  so we only need to stamp them once.

---

## 🎉 You can build a maze!

Next step: add a maze to your Rally-X game.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 4](./index.html)</sub>
