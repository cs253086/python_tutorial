---
layout: default
title: "Class 9 — Step 3"
---

<sub>Class 9 — Step **3** of 4</sub>

# ⭐ Step 3 — Steer with the arrow keys!

Time to take control. Add these lines **before** `move()` (the
line at the very bottom that starts the game):

```python
def go_up():
    direction[0] = 0
    direction[1] = 20

def go_down():
    direction[0] = 0
    direction[1] = -20

def go_left():
    direction[0] = -20
    direction[1] = 0

def go_right():
    direction[0] = 20
    direction[1] = 0

screen.listen()
screen.onkey(go_up, "Up")
screen.onkey(go_down, "Down")
screen.onkey(go_left, "Left")
screen.onkey(go_right, "Right")
```

## What this does

- Four mini commands, one for each arrow key.
- `screen.listen()` — tells the window to watch for keys.
- `screen.onkey(go_up, "Up")` — *"when the Up arrow is pressed, run
  go_up."*

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-4.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 4</a>
</p>

<sub>[⬅ Back to Step 2](./step-2.html)</sub>
