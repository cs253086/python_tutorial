---
layout: default
title: "Rally-X — Class 12 — Step 1"
---

<sub>Rally-X — Class 12 — Step **1** of 2</sub>

# ⭐ Step 1 — Scaling coordinates

A radar is just a **shrunken version** of the same world. If the
maze is 600 wide and the radar is 100 wide, every position on the
maze becomes **1/6 the size** on the radar.

```python
def to_radar(x, y, ox, oy):
    return (ox + x // 6, oy + y // 6)

# A flag at (180, 60) on the maze is...
print(to_radar(180, 60, 220, 220))
```

Tap **▶ Run**. Output:

```text
(250, 230)
```

### 🔍 Notice

- `x // 6` is **integer division** — divides and rounds down.
  Perfect for shrinking by 6×.
- `ox` and `oy` are the **offset** — where on screen the radar
  starts.

---

## 🪟 Multiple turtles, one screen

You can have as many turtles as you want, all drawing in
different parts of the same screen. The radar gets its **own
turtle**, so wiping the radar each frame doesn't affect the
maze.

```python
import turtle

screen = turtle.Screen()

main_pen = turtle.Turtle()
main_pen.color("blue")
main_pen.forward(100)

mini_pen = turtle.Turtle()
mini_pen.color("red")
mini_pen.penup()
mini_pen.goto(150, 100)
mini_pen.write("RADAR")

screen.mainloop()
```

Run it — both pens draw without interfering.

### 🔍 Notice

- Each turtle is independent. `mini_pen.clear()` only clears the
  radar, not the maze.
- The radar will be its own turtle that re-draws every frame.

---

## 🎉 You can scale and split!

Next step: bolt a 100×100 corner radar onto Rally-X.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 12](./index.html)</sub>
