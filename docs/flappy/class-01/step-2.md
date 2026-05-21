---
layout: default
title: "Flappy Bird — Class 1 — Step 2"
---

<pre class="py-solution" markdown="0">
import turtle

screen = turtle.Screen()
screen.title("Flappy Bird")
screen.bgcolor("#70C5CE")
screen.setup(400, 600)
screen.tracer(0)

bird = turtle.Turtle()
bird.hideturtle()
bird.penup()
bird.speed(0)
bird.shape("circle")
bird.color("#FFD23F")
bird.goto(-100, 0)
bird.stamp()

screen.update()
screen.mainloop()
</pre>

<sub>Flappy Bird — Class 1 — Step **2** of 2</sub>

# ⭐ Step 2 — Open the Flappy Bird window

Time to start your Flappy Bird file (a brand-new file, separate
from your Snake game!). This sets up the game window — over the
next classes you'll fill it with gravity, pipes, and a score.

## ✏️ What to add

Between the 👇 and 👆 markers below, write the code that:

1. `import turtle`
2. Makes a `screen` titled **Flappy Bird**, with background color
   `"#70C5CE"` (sky blue), 400×600 size, and `screen.tracer(0)`
   so drawings happen all at once
3. Makes a turtle called `bird`, hides it, lifts the pen, sets
   `speed(0)`, shape `"circle"`, color `"#FFD23F"`
4. Sends the bird to `(-100, 0)` and stamps once
5. Calls `screen.update()` and `screen.mainloop()`

Tap **▶ Play**. A 400×600 sky-blue window titled **Flappy Bird**
should open with a yellow circle on the left. 🐤

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- This is a **fresh file**. Don't paste your Snake code in here —
  Flappy Bird grows separately.
- The bird is just a **yellow circle** for now. In Class 2 we'll
  upgrade it into a real bird shape with an eye and a beak using
  a `class`.

<pre class="py-starter" markdown="0">
# 👇
# Bring in the turtle tool with import turtle
# Make a screen: title "Flappy Bird", bgcolor "#70C5CE",
#   size 400 by 600, and call screen.tracer(0)
# Make a turtle called "bird": hide it, penup, speed(0),
#   shape "circle", color "#FFD23F"
# Move the bird to (-100, 0) and stamp once
# Call screen.update() and screen.mainloop()
# 👆
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
