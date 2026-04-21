---
layout: default
title: "Class 9 — Step 2"
---

<sub>Class 9 — Step **2** of 4</sub>

# ⭐ Step 2 — Make the snake move

Back in the code below, find the part that draws the snake:

```python
for part in snake:
    snake_pen.goto(part)
    snake_pen.stamp()
```

**Replace** those lines with this:

```python
direction = [20, 0]

def move():
    head = snake[-1]
    new_head = (head[0] + direction[0], head[1] + direction[1])
    snake.append(new_head)
    snake.pop(0)

    snake_pen.clearstamps()
    for part in snake:
        snake_pen.goto(part)
        snake_pen.stamp()

    screen.ontimer(move, 150)

move()
```

Tap **▶ Run**.

🐍 **Your snake is moving right!** It slides across the board
automatically.

## What just happened

- `direction = [20, 0]` — how much to move each tick: 20 right, 0 up.
- `snake[-1]` — the **last** thing in the list (the head).
- `snake.append(new_head)` — stick a new head on the front.
- `snake.pop(0)` — drop the old tail off the back.
- `snake_pen.clearstamps()` — erase the old snake drawing.
- `screen.ontimer(move, 150)` — **call `move` again in 150ms**.
  That's how a game loop works!

> ⚠️ **Don't panic** when the snake hits the edge — it'll fly off
> screen. We'll fix that in Class 12!

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-3.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 3</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
