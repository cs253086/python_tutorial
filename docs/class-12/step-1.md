---
layout: default
title: "Class 12 — Step 1"
---

<sub>Class 12 — Step **1** of 3</sub>

# ⭐ Step 1 — Hit the wall

First, let's write the **game over** command. Then we'll call it
when the snake hits a wall.

Add this function **before** `def move():`:

```python
def game_over():
    game_over_pen = turtle.Turtle()
    game_over_pen.hideturtle()
    game_over_pen.penup()
    game_over_pen.color("white")
    game_over_pen.goto(0, 20)
    game_over_pen.write("GAME OVER",
        align="center", font=("Arial", 32, "bold"))
    game_over_pen.goto(0, -20)
    game_over_pen.write(f"Score: {score[0]}",
        align="center", font=("Arial", 20, "bold"))
```

Now add a **wall check** at the top of `move()`. Right after the
line `new_head = ...`, add:

```python
    if new_head[0] < -200 or new_head[0] > 180 \
       or new_head[1] < -200 or new_head[1] > 180:
        game_over()
        return
```

> 💡 The `\` at the end of a line means *"this line continues on
> the next one"*. Handy for long `if` checks.
>
> 💡 `return` inside a function means *"stop — don't do anything
> else."* So `move()` won't schedule the next tick, and the game
> ends.

Tap **▶ Run**. Drive your snake off the edge of the board.

🎉 **GAME OVER!** appears.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 12](./index.html)</sub>
