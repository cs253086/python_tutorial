---
layout: default
title: "Class 7 — Tile the board!"
---

# Class 7 — Tile the board! 🟩🟨

One tile is cool. A **whole checkerboard** is way cooler. Today
you'll use **loops** to stamp hundreds of tiles in a few short
lines.

---

## 🤸 What's a `for` loop?

Imagine your gym teacher saying *"do 10 jumping jacks."* You do
the same movement 10 times. That's a `for` loop:

```
for i in range(10):
    print("jumping jack!")
```

- `range(10)` gives Python the numbers **0, 1, 2 … 9** — ten of
  them.
- Each time, `i` holds the current number.
- Python runs the indented block once for each.

## 🏗️ Nested loops — a loop inside a loop

Now imagine *"do 10 jumping jacks, in 10 rows."* You do one loop
for the jacks and one loop for the rows. That's a **nested** loop:

```
for row in range(20):
    for col in range(20):
        # this runs 20 * 20 = 400 times
        ...
```

One `for` inside another. Perfect for drawing a **grid** of tiles.

## 🪄 A little math trick: `%` (modulo)

`%` asks: *"what's the leftover after dividing?"*

- `4 % 2` → `0` (4 divides evenly by 2 — **even**)
- `5 % 2` → `1` (1 left over — **odd**)

So `(row + col) % 2 == 0` tells us whether a tile is an "even" or
"odd" position on the grid. That's the secret to the **two-color
checker pattern**.

## 🎯 Today you'll
- Try `for` with a tiny counting loop
- Stamp a single **row** of tiles with one `for` loop
- Stamp the whole **20×20 board** with two nested loops + modulo

- 🧩 **3 steps**
- ⏱️ About 20 minutes

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-1.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Start → Step 1</a>
</p>

<sub>[⬅ Back to all classes](../index.html)</sub>
