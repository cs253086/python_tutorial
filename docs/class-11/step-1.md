---
layout: default
title: "Class 11 — Step 1"
---

<sub>Class 11 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet `random` & the growing trick

---

## 🎲 `random` — rolling dice with code

Before you roll a die, you don't know what comes up. `random` in
Python is the same — it picks an unpredictable number for you.

```python
import random

print(random.randint(1, 6))
print(random.randint(1, 6))
print(random.randint(1, 6))
```

Tap **▶ Run**. You should see **three random numbers** between 1
and 6. Run it again — different numbers! 🎲

### 🔍 Notice

- `import random` brings in the randomness tool (do it once at the
  top of a file).
- `random.randint(a, b)` picks a whole number from `a` to `b` —
  **both ends included**.

---

## 🌱 How does the snake "grow"?

In Class 9, `move()` did two things each tick:
- `snake.append(new_head)` (add head)
- `snake.pop(0)` (drop tail)

The snake **slid** forward but stayed the **same length**.

Today, when the head lands on the apple, we **skip the pop**:
- `snake.append(new_head)` (add head)
- ✂️ don't pop the tail

One extra body part! The snake is now **one longer**.

---

## 🔀 Apple at a random grid spot

We can combine `random.randint` with the board math:

```python
import random
x = random.randint(0, 19) * 20 - 200
y = random.randint(0, 19) * 20 - 200
print(x, y)
```

Run it a few times. Each run you get a different `(x, y)` that
lands on exactly one of the 20×20 board tiles.

### 🔍 Notice

- `random.randint(0, 19)` picks a column/row between 0 and 19.
- `* 20 - 200` turns that into a screen coordinate between `-200`
  and `180` — exactly the tile centers.

---

## 🎉 You know random and growth!

Next step: put a red apple on the board, make the snake grow when
it eats, and show the score.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 11](./index.html)</sub>
