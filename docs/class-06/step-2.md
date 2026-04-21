---
layout: default
title: "Class 6 — Step 2"
---

<sub>Class 6 — Step **2** of 3</sub>

# ⭐ Step 2 — Make the Snake window

Add this under `import turtle`:

```python
screen = turtle.Screen()
screen.title("Snake")
screen.bgcolor("#4A752C")
screen.setup(500, 500)
```

Your whole file should now be:

```python
import turtle

screen = turtle.Screen()
screen.title("Snake")
screen.bgcolor("#4A752C")
screen.setup(500, 500)
```

Tap **▶ Run**.

A **dark green window** should appear with the title **Snake**!

🎉 **That's your game board!**

## What each line does

- `screen = turtle.Screen()` — grab the drawing window.
- `screen.title("Snake")` — put "Snake" in the title bar.
- `screen.bgcolor("#4A752C")` — paint the background dark green.
- `screen.setup(500, 500)` — make the window 500 by 500 big.

> 💡 The weird code `"#4A752C"` is a **color code**. It's the same
> dark green as Google Snake's background!

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-3.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 3</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
