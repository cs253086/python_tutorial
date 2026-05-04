---
layout: default
title: "Flappy Bird — Class 8 — Step 1"
---

<sub>Flappy Bird — Class 8 — Step **1** of 2</sub>

# ⭐ Step 1 — Per-instance flags + drawing text

Today's two new tricks: **boolean attributes** that change over
the life of an instance, and **drawing text** with turtle.

---

## 🚩 A "passed" flag

```python
class Pipe:
    def __init__(self, x):
        self.x = x
        self.passed = False

p = Pipe(100)
print(p.passed)
p.passed = True
print(p.passed)
```

```text
False
True
```

`passed` starts `False`. Once we count this pipe, we flip it
`True` — so we won't count it again.

---

## 🎯 Use it in a check

```python
class Pipe:
    def __init__(self, x):
        self.x = x
        self.passed = False

pipes = [Pipe(50), Pipe(100), Pipe(150)]
score = 0
bird_x = 80

for p in pipes:
    if not p.passed and p.x < bird_x:
        score = score + 1
        p.passed = True

print(score)
```

```text
1
```

Only **one** pipe (the one at x=50) was past the bird. Run the
loop again and the score wouldn't change — `passed` is `True`
now, so the `if` skips it.

---

## ✍️ Draw text with a turtle

```python
import turtle
screen = turtle.Screen()
screen.bgcolor("#70C5CE")
screen.setup(400, 200)

pen = turtle.Turtle()
pen.hideturtle()
pen.penup()
pen.color("#FFFFFF")
pen.goto(0, 0)
pen.write("Score: 5", align="center", font=("Arial", 32, "bold"))

screen.mainloop()
```

Tap **▶ Run**. **"Score: 5"** appears at the center.

### 🔍 Notice

- `pen.write(text, align=…, font=(name, size, style))` —
  `align` can be `"left"`, `"center"`, or `"right"`.
- To **update** the score, we'll `pen.clear()` and `pen.write` a
  fresh number.

---

## 🎉 Two tricks, ready!

Next step: hook these into the game so passing a pipe bumps a
score and the score shows at the top of the screen.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 8](./index.html)</sub>
