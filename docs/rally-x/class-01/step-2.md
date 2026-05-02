---
layout: default
title: "Rally-X — Class 1 — Step 2"
---

<pre class="py-solution">
import turtle

screen = turtle.Screen()
screen.title("Rally-X")
screen.bgcolor("#08152e")
screen.setup(600, 600)
screen.tracer(0)
screen.register_shape("car", ((-14, -7), (14, -7), (14, 7), (-14, 7)))

car = turtle.Turtle()
car.hideturtle()
car.penup()
car.speed(0)
car.shape("square")
car.color("#ff3a3a")
car.goto(0, 0)
car.stamp()

screen.update()
screen.mainloop()
</pre>

<sub>Rally-X — Class 1 — Step **2** of 2</sub>

# ⭐ Step 2 — Open the Rally-X window

Time to start your Rally-X file (a brand-new file, separate from
your Snake game!). This sets up the game window — over the next
classes you'll fill it with a maze, cars, flags, and chasers.

## ✏️ What to add

In the marker region below, write the code that:

1. `import turtle`
2. Makes a `screen` titled **Rally-X**, with background color
   `"#08152e"` (Rally-X dark navy), 600×600 size, and
   `screen.tracer(0)` so drawings batch
3. Makes a turtle called `car`, hides it, lifts the pen, sets
   `speed(0)` and shape `"square"`, colors it red `"#ff3a3a"`
4. Sends the car to `(0, 0)` and stamps once
5. Calls `screen.update()` and `screen.mainloop()`

Tap **▶ Run**. A 600×600 dark-navy window titled **Rally-X**
should open with one red square in the middle. 🏎️

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- This is a **fresh file**. Don't paste your Snake code in here —
  Rally-X grows separately.
- The red car is just a **square** for now. In Class 2 we'll
  upgrade it to a real **car shape** with wheels using a `class`.

<pre class="py-starter">
# 👇
# Bring in the turtle tool with import turtle
# Make a screen: title "Rally-X", bgcolor "#08152e",
#   size 600 by 600, and call screen.tracer(0)
# Make a turtle called "car": hide it, penup, speed(0),
#   shape "square", color "#ff3a3a"
# Move the car to (0, 0) and stamp once
# Call screen.update() and screen.mainloop()
# 👆
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
