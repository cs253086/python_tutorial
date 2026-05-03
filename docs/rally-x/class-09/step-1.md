---
layout: default
title: "Rally-X — Class 9 — Step 1"
---

<sub>Rally-X — Class 9 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet dictionaries

A **list** is items in order: `[1, 2, 3]`. A **dictionary**
(`dict`) is items with **labels**:

```python
state = {
    "fuel": 100,
    "lives": 3,
    "score": 0,
}

print(state["fuel"])
print(state["lives"])
```

Tap **▶ Run**. Output:

```text
100
3
```

### 🔍 Notice

- A dict goes in `{ }` with `"label": value` pairs separated by
  commas.
- `state["fuel"]` reads the value at that label.
- The label is called the **key**.

---

## 🔄 Updating values

```python
state = {"fuel": 100, "lives": 3, "score": 0}

state["fuel"] = state["fuel"] - 1
state["score"] = state["score"] + 10

print(state)
```

Run it. Output:

```text
{'fuel': 99, 'lives': 3, 'score': 10}
```

### 🔍 Notice

- Read with `state["key"]`, write with
  `state["key"] = value`.
- One `state` dict can hold every game variable in one place —
  fuel, lives, score, anything you add later.

---

## 🖋️ Writing text on the screen

`turtle` can write text too. We'll use a dedicated pen for the HUD:

```python
import turtle

screen = turtle.Screen()
screen.setup(300, 200)
screen.bgcolor("#E69434")

hud = turtle.Turtle()
hud.hideturtle()
hud.penup()
hud.color("#FFE14A")
hud.goto(-130, 70)
hud.write("FUEL: 99", font=("Arial", 16, "bold"))

screen.mainloop()
```

Run it. Yellow text appears in the corner.

### 🔍 Notice

- `hud.write(text, font=(...))` draws text wherever the pen is.
- Use the same pen each tick: `hud.clear()` first, then write the
  fresh values.

---

## 🎉 You can hold game state!

Next step: build a HUD that shows fuel, lives, and a flag count
in your Rally-X.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 9](./index.html)</sub>
