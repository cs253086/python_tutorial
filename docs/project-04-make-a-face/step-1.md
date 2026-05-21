---
layout: default
title: "Project 4 — Step 1 — Choose a background"
---

<pre class="py-solution" markdown="0">
import turtle

screen = turtle.Screen()
screen.setup(400, 400)
screen.bgcolor('skyblue')

pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)

screen.mainloop()
</pre>

<sub>Project 4 — Step **1** of 5</sub>

# ⭐ Step 1 — Choose a background

➡️ Pick a background color for your face.

## ✏️ What to type

In the editor, set up turtle and pick a background color. Some
ideas:

- `'skyblue'`
- `'lightyellow'`
- `'mistyrose'`
- `'#222222'` (dark grey, for a night scene)
- `'#ffe4b5'` (peachy)

<pre class="py-starter" markdown="0">
import turtle

screen = turtle.Screen()
screen.setup(400, 400)
# Set screen.bgcolor() to a color you like

pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)

screen.mainloop()
</pre>

Tap **▶ Run**. You should see a square in your chosen color. 🎨

### 🔍 Tip

Turtle knows lots of color names: `'red'`, `'orange'`, `'pink'`,
`'lavender'`, `'crimson'`, `'turquoise'`. For exact colors, use
the `'#RRGGBB'` hex code form like in Project 1.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Project 4](./index.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/make-a-face">Raspberry Pi Foundation — Make a Face</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
