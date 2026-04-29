---
layout: default
title: "Class 10 — Step 1"
---

<sub>Class 10 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet parameters (and refactoring)

Last class you wrote `def say_hi():` with empty `()`. But real
recipes often take **ingredients**. "Make a cake with flavor X."
A function can take ingredients too — they live inside the `()`.

---

## 🧁 A function with one parameter

```python
def greet(name):
    print(f"Hi, {name}!")

greet("Leo")
greet("Mom")
greet("Mr. Snake")
```

Tap **▶ Run**. You should see three different hellos.

### 🔍 Notice

- `name` inside `def greet(name):` is the **parameter** — a box the
  function gets just for this call.
- You pass a value in when you **call** it: `greet("Leo")`.
- Inside the function, use `name` like any variable.

---

## ➕ A function with two parameters

```python
def add(a, b):
    print(a + b)

add(3, 4)
add(10, 20)
```

Run it. Output: `7`, then `30`.

### 🔍 Notice

- Separate parameters with **commas**: `def add(a, b):`.
- Pass values in the same order: `add(3, 4)` → `a = 3, b = 4`.

---

## 🧼 What's "refactoring"?

**Refactoring** is moving code around to make it cleaner, without
changing what it does. A function is the main tool. You find a
block that does one clear thing, give it a name, and replace it
with a single call.

Before:

```text
# draw the whole board
for row in range(20):
    for col in range(20):
        ... lots of lines ...
```

After:

```text
def draw_board():
    for row in range(20):
        for col in range(20):
            ... lots of lines ...

draw_board()   # one line now!
```

Same behavior. Less mess. Easier to read later.

---

## 🎉 You know parameters and refactoring!

Next step: clean up your Snake game.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 10](./index.html)</sub>
