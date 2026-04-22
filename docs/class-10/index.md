---
layout: default
title: "Class 10 — Tidy up!"
---

# Class 10 — Tidy up! 🧹

Your code works! But it's getting long and scattered. Today you'll
**group related lines into clean functions** — like sorting mess
into labeled drawers.

You'll also learn how a function can **take input** — a parameter.

---

## 🧁 Recipes that take ingredients

In Class 9 you saw a function without any input:

```
def say_hi():
    print("Hi!")
```

But real recipes take **ingredients**. "Make a cake with flavor X."
A function can too — the ingredient sits inside the `()`:

```
def greet(name):
    print(f"Hi, {name}!")

greet("Leo")    # prints: Hi, Leo!
greet("Mom")    # prints: Hi, Mom!
```

- `name` is the **parameter** — a box the function makes just for
  this call.
- You pass in the value when you call it: `greet("Leo")`.
- Inside, the function uses `name` however it likes.

You can have more than one parameter, separated by commas:

```
def add(a, b):
    print(a + b)

add(3, 4)    # prints 7
add(10, 20)  # prints 30
```

## 🧼 What's "refactoring"?

**Refactoring** means taking working code and tidying it without
changing what it does. A function is the main tool: you find a
block that does one clear thing, give it a name, and call it from
where it used to live.

Before:

```
# draw the whole board
for row in range(20):
    for col in range(20):
        ... # lots of lines
```

After:

```
def draw_board():
    for row in range(20):
        for col in range(20):
            ... # lots of lines

draw_board()   # one line now!
```

Same behavior. Less mess. Easier to read later.

## 🎯 Today you'll
- Make a function that takes a parameter
- Wrap the board-drawing code in a `draw_board()` function
- Wrap the snake-redraw code in a `draw_snake()` function

- 🧩 **3 steps**
- ⏱️ About 20 minutes

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-1.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Start → Step 1</a>
</p>

<sub>[⬅ Back to all classes](../index.html)</sub>
