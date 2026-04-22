---
layout: default
title: "Class 6 — Step 1"
---

<sub>Class 6 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet `turtle`

Picture a tiny robot standing on a piece of paper, holding a pen.
You tell it *"go here, pick a color, press down a stamp"* and it
obeys. That robot and paper are Python's **turtle** tool.

Try each example below — type into the box and tap **▶ Run**.

---

## 🪄 `import turtle` — bring in the tool

```python
import turtle
print("turtle ready!")
```

Nothing fancy happens visually — you should just see
`turtle ready!` in the output.

### 🔍 Notice

- `import turtle` tells Python *"load the turtle tool for me."*
  You only need to import once at the top of a file.

---

## 🖼️ `screen` — your drawing paper

```python
import turtle

screen = turtle.Screen()
screen.bgcolor("#4A752C")
```

Run it. A **dark-green square** appears below — that's your
screen!

### 🔍 Notice

- `screen = turtle.Screen()` grabs the drawing surface.
- `screen.bgcolor("#4A752C")` sets the background to Snake's dark
  green. The code `"#4A752C"` is a **color code** — every color on
  a computer has one.

---

## ✏️ `pen` — the stamp robot + coordinates

```python
import turtle

screen = turtle.Screen()
screen.bgcolor("#4A752C")

pen = turtle.Turtle()
pen.hideturtle()
pen.penup()
pen.shape("square")
pen.color("#AAD751")
pen.goto(0, 0)
pen.stamp()
```

Run it. You should see a **light-green square** in the center of
the dark-green screen.

### 🔍 Notice

- `pen = turtle.Turtle()` makes your pen robot.
- `pen.shape("square")` — the stamp shape.
- `pen.color("#AAD751")` — the Snake-board lighter green.
- `pen.goto(x, y)` moves the pen to a spot on screen. The **center**
  is `(0, 0)`. Bigger x → **right**; bigger y → **up**. Like a map
  where you stand at the middle!
- `pen.stamp()` presses down and leaves the stamp.
- `pen.hideturtle()` hides the turtle shape itself so only the
  stamp shows.

---

## 🎉 You can draw!

Next step: put this together into your real Snake game window.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 6](./index.html)</sub>
