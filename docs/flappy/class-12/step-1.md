---
layout: default
title: "Flappy Bird — Class 12 — Step 1"
---

<sub>Flappy Bird — Class 12 — Step **1** of 2</sub>

# ⭐ Step 1 — Layered drawing

Polish is mostly about **layers**: stamp things in the right
order so they look natural.

Order: **clouds** → **ground** → **pipes** → **bird** → HUD.
Anything stamped first appears **behind** later stamps.

---

## 🌥️ Cloud stamps in a loop

```python
import turtle
screen = turtle.Screen()
screen.bgcolor("#70C5CE")
screen.setup(400, 400)

clouds = turtle.Turtle()
clouds.hideturtle()
clouds.penup()
clouds.shape("circle")
clouds.color("#FFFFFF")

for cx, cy in [(-150, 100), (50, 130), (170, 80)]:
    clouds.goto(cx, cy)
    clouds.stamp()

screen.update()
screen.mainloop()
```

Tap **▶ Run**. Three white circles, three different positions —
written in **one** for-loop. The list `[(-150, 100), …]` is a
list of **tuples** — pairs of numbers we unpack as `cx, cy`.

---

## 🟫 A ground bar

The ground is just a wide flat rectangle at the bottom of the
screen. Same `begin_fill` / `forward` / `left` recipe you've
been using.

```python
import turtle
screen = turtle.Screen()
screen.bgcolor("#70C5CE")
screen.setup(400, 400)

ground = turtle.Turtle()
ground.hideturtle()
ground.penup()
ground.color("#DED895")
ground.goto(-200, -200)
ground.setheading(0)
ground.pendown()
ground.begin_fill()
for length in [400, 50, 400, 50]:
    ground.forward(length)
    ground.left(90)
ground.end_fill()
ground.penup()

screen.update()
screen.mainloop()
```

Tap **▶ Run**. A sandy strip across the bottom.

---

## 🪽 A flashing wing

We can add a **wing** rectangle to the bird, in a slightly
darker yellow. When the bird flaps (`vy > 0`) we'll switch the
wing to a bright orange — a little visual feedback that says
"flap!"

```python
vy = 0
flap_color = "#FFA94D" if vy > 0 else "#E8B22A"
print(flap_color)

vy = 10
flap_color = "#FFA94D" if vy > 0 else "#E8B22A"
print(flap_color)
```

```text
#E8B22A
#FFA94D
```

The expression `A if cond else B` is a one-line `if/else` that
gives a value. Compact and handy.

---

## 🎉 Three little touches!

Next step: drop them into the game in the right order.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 12](./index.html)</sub>
