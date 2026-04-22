---
layout: default
title: "Class 11 — The apple!"
---

# Class 11 — The apple! 🍎

Today the snake gets something to **eat**. A red apple will appear
at a **random spot**. When the snake's head lands on it:

- the snake **grows** by one body part
- your **score** goes up

---

## 🎲 What's `random`?

Imagine rolling a die. Before you roll, you don't know what number
comes up — 1, 2, 3, 4, 5, or 6. That's what Python's **`random`**
tool does — picks an unpredictable number for you.

```
import random

print(random.randint(1, 6))   # maybe 1. Or 4. Or 6.
```

- `random.randint(a, b)` picks a whole number from `a` to `b`,
  including **both** ends.
- Every time you run it, you'll likely get a different answer.

That's perfect for the apple — we roll random coordinates for its
position, so every game is different.

## 🧱 How does the snake "grow"?

In Class 9, each tick we did:

- add a new head at the front
- drop the tail off the back

The snake stayed the same length.

Today, **when the head lands on the apple**, we only do the first
part:

- add a new head
- **skip** dropping the tail

One more body part! The snake is now one longer. Next tick we go
back to the normal add-head / drop-tail rhythm, keeping the new
length.

## 🏆 Showing the score

We'll use a second helper — a `score_pen` — just for writing text
on the board. Each time the score changes, we clear its old text
and write the new number.

## 🎯 Today you'll
- Use `random.randint` to roll numbers
- Make an apple appear at a random spot
- Eat an apple → score up + snake grows + new apple appears

- 🧩 **3 steps**
- ⏱️ About 25 minutes

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-1.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Start → Step 1</a>
</p>

<sub>[⬅ Back to all classes](../index.html)</sub>
