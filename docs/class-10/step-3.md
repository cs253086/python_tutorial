---
layout: default
title: "Class 10 — Step 3"
---

<sub>Class 10 — Step **3** of 3</sub>

# ⭐ Step 3 — Tidy up the snake drawing

Inside your `move()` function, you have these lines that redraw
the snake:

```python
    snake_pen.clearstamps()
    for part in snake:
        snake_pen.goto(part)
        snake_pen.stamp()
```

Let's pull those out into their own function called `draw_snake`.

**Above** `def move():`, add:

```python
def draw_snake():
    snake_pen.clearstamps()
    for part in snake:
        snake_pen.goto(part)
        snake_pen.stamp()
```

Then **inside** `move()`, replace the three drawing lines with just
one call:

```python
    draw_snake()
```

Your `move()` function should now look like this:

```python
def move():
    head = snake[-1]
    new_head = (head[0] + direction[0], head[1] + direction[1])
    snake.append(new_head)
    snake.pop(0)

    draw_snake()

    screen.ontimer(move, 150)
```

Tap **▶ Run**.

The game should work **exactly the same** — but the code is much
cleaner. 🧹


## 🎉 Clean code!

When someone reads `move()` now, they can tell what it does at a
glance:
1. Compute new head
2. Add the head, drop the tail
3. Draw the snake
4. Schedule next move

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 2](./step-2.html)</sub>
