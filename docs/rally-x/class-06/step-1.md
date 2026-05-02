---
layout: default
title: "Rally-X — Class 6 — Step 1"
---

<sub>Rally-X — Class 6 — Step **1** of 2</sub>

# ⭐ Step 1 — Is this spot in the list?

Python's `in` operator asks **"is this thing inside that list?"**
It's a one-liner.

```python
fruits = ["apple", "banana", "cherry"]
print("apple" in fruits)
print("pizza" in fruits)
```

Tap **▶ Run**. Output:

```text
True
False
```

### 🔍 Notice

- `in` works on lists, tuples, strings, sets — anything you can
  iterate.
- The whole list is scanned for you. No loop needed.

---

## 📍 Tuples in lists

`in` works on lists of **tuples** too:

```python
walls = [(0, 0), (20, 0), (40, 0), (-20, 0)]

print((20, 0) in walls)
print((20, 60) in walls)
```

Run it. Output:

```text
True
False
```

### 🔍 Notice

- We can ask *"is this `(x, y)` spot one of the walls?"* in one
  line.
- That's exactly the question we need to answer for the player:
  *"if I move there, will I hit a wall?"*

---

## 🎯 The recipe

1. Compute where the player would be **next** (`new_x`, `new_y`).
2. Ask `(new_x, new_y) in walls`.
3. If yes → **don't** move (just stay put).
4. If no → move.

That's the whole collision check. Next step: bolt it into your
`Car.update()`.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 6](./index.html)</sub>
