---
layout: default
title: "Class 6 — Open the window!"
---

# Class 6 — Open the window! 🎨

Big change today. Until now your code only printed **words**. Now
we're going to **draw**.

---

## 🐢 What's `turtle`?

Picture a tiny robot standing on a piece of paper, holding a pen.

- You tell it: *"go here, pick this color, put a stamp down."*
- It obeys.
- The paper is the screen. The stamp is a little square or circle.

That robot and paper are built into Python as a tool called
**turtle**. You bring it in with:

```
import turtle
```

Then you set up your drawing:

```
screen = turtle.Screen()   # the paper
pen = turtle.Turtle()      # your pen robot
```

## 🗺️ Screen coordinates — like a map

The center of the screen is `(0, 0)`. From there:

- **right** → x gets bigger (`x = 100` is to the right)
- **left**  → x gets smaller (`x = -100` is to the left)
- **up**    → y gets bigger
- **down**  → y gets smaller

When you write `pen.goto(0, 0)`, the pen moves to the center. When
you call `pen.stamp()`, it **presses down** and leaves a mark of
its current shape and color.

## 🎨 One new idea: color codes

You've seen `pen.color("red")`. You can also give an exact color
with a code like `"#AAD751"` (the light green of the Snake board).
Every color on a computer has a code — you just look it up and
paste it in.

## 🎯 Today you'll
- Bring in the `turtle` tool with `import`
- Open a dark-green game window titled **Snake**
- Stamp your very first tile

- 🧩 **3 steps**
- ⏱️ About 20 minutes
- 🆕 We start a **fresh file** today

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-1.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Start → Step 1</a>
</p>

<sub>[⬅ Back to all classes](../index.html)</sub>
