---
layout: default
title: "Project 2 — Step 1 — Draw the target"
---

<pre class="py-solution" markdown="0">
import turtle

screen = turtle.Screen()
screen.setup(400, 400)
screen.bgcolor('skyblue')

pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)

def draw_circle(radius, color):
    pen.penup()
    pen.goto(0, -radius)
    pen.pendown()
    pen.color(color)
    pen.begin_fill()
    pen.circle(radius)
    pen.end_fill()

draw_circle(100, 'red')
draw_circle(70, 'white')
draw_circle(40, 'red')

screen.mainloop()
</pre>

<sub>Project 2 — Step **1** of 5</sub>

# ⭐ Step 1 — Draw the target

➡️ Draw an archery target made of three rings.

A target is just **three circles of different sizes, stacked**:
big red, medium white, small red. Turtle draws circles with
`pen.circle(radius)`.

To draw three concentric circles, we'll write a little helper
function `draw_circle(radius, color)` so we don't have to repeat
the same 6 lines three times.

## ✏️ What to type

In the editor below, between `pen.speed(0)` and `screen.mainloop()`,
add this:

```
def draw_circle(radius, color):
    pen.penup()
    pen.goto(0, -radius)
    pen.pendown()
    pen.color(color)
    pen.begin_fill()
    pen.circle(radius)
    pen.end_fill()

draw_circle(100, 'red')
draw_circle(70, 'white')
draw_circle(40, 'red')
```

<pre class="py-starter" markdown="0">
import turtle

screen = turtle.Screen()
screen.setup(400, 400)
screen.bgcolor('skyblue')

pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)

# Add draw_circle() function and three draw_circle() calls here

screen.mainloop()
</pre>

Tap **▶ Run**. You should see a **red and white bullseye** in
the middle of a sky-blue square. 🎯

### 🔍 Tip

`pen.goto(0, -radius)` first — turtle draws circles **upward**
from where the pen is, so we start at the bottom of the circle
to end up centred on (0, 0).

### 💡 If you get a red error

- Check the `def` line ends with `():`.
- Make sure the body lines are pushed in by 4 spaces (use Tab).

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Project 2](./index.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/target-practice">Raspberry Pi Foundation — Target Practice</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
