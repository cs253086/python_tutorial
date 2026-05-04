---
layout: default
title: "Flappy Bird — Class 10 — Step 1"
---

<sub>Flappy Bird — Class 10 — Step **1** of 2</sub>

# ⭐ Step 1 — One key, two jobs

The same key (SPACE) needs to do **different things** depending
on the game state — flap while playing, restart when over. The
fix is one **dispatcher** function bound to the key, with an
`if` inside.

---

## 🚦 The dispatcher pattern

```python
running = [True]

def on_space():
    if running[0]:
        print("flap!")
    else:
        print("restart!")

on_space()
running[0] = False
on_space()
```

```text
flap!
restart!
```

`on_space` looks at the flag and picks the right behavior. The
key only sees one function — but that function picks what to do.

---

## ♻️ A reset function

To "play again," we put the world back to its starting state. For
a list, **empty it in place** with `pop()` (so the same `pipes`
variable still works everywhere):

```python
pipes = ["a", "b", "c"]
while pipes:
    pipes.pop()
print(pipes)
pipes.append("a")
print(pipes)
```

```text
[]
['a']
```

`while pipes:` is True until the list is empty.

---

## ✏️ Drawing on top of the world

A new `over_pen` will write **GAME OVER** in the center. When
we restart, `over_pen.clear()` wipes that text away.

```python
import turtle
screen = turtle.Screen()
screen.bgcolor("#70C5CE")
screen.setup(400, 200)

pen = turtle.Turtle()
pen.hideturtle()
pen.penup()
pen.color("#FFFFFF")
pen.goto(0, 20)
pen.write("GAME OVER", align="center", font=("Arial", 28, "bold"))
pen.goto(0, -20)
pen.write("press SPACE to play again", align="center", font=("Arial", 12, "normal"))

screen.mainloop()
```

Tap **▶ Run**. Two lines of white text in the middle.

---

## 🎉 You learned game-over flow!

Next step: wire it all into the actual game so crashes show GAME
OVER and SPACE restarts.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 10](./index.html)</sub>
