---
layout: default
title: "Class 11 — Step 3"
---

<sub>Class 11 — Step **3** of 3</sub>

# ⭐ Step 3 — Eat the apple!

Now for the magic: when the snake's head is on the apple, the
snake should **grow** and the apple should **move**.

## Add a score

Right after `apple = [0, 0]`, add:

```python
score = [0]

score_pen = turtle.Turtle()
score_pen.hideturtle()
score_pen.penup()
score_pen.color("white")
score_pen.goto(-230, 220)

def draw_score():
    score_pen.clear()
    score_pen.write(f"Score: {score[0]}", font=("Arial", 16, "bold"))

draw_score()
```

## Update `move()` to eat apples

Find your `move()` function and **replace it** with this new version:

```python
def move():
    head = snake[-1]
    new_head = (head[0] + direction[0], head[1] + direction[1])
    snake.append(new_head)

    if new_head[0] == apple[0] and new_head[1] == apple[1]:
        score[0] = score[0] + 1
        draw_score()
        place_apple()
        apple_pen.clear()
        apple_pen.stamp()
    else:
        snake.pop(0)

    draw_snake()
    screen.ontimer(move, 150)
```

## What changed?

- When the snake's head lands on the apple:
  - `score[0]` goes up by 1
  - The score is redrawn
  - The apple is moved to a new random spot
  - The tail is **NOT** popped — so the snake grows by 1!
- Otherwise, normal: pop the tail, keep the same length.

Tap **▶ Run**, steer with the arrows, and chase the apple! 🍎🐍


## 🎉 You made a real Snake game!

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 2](./step-2.html)</sub>
