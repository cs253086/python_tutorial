---
layout: default
title: "Class 7 — Step 1"
---

<sub>Class 7 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet `for`, nested loops, and `%`

Imagine your gym teacher: *"do 10 jumping jacks."* You do the same
thing, ten times. That's a **`for` loop**.

---

## 🤸 A simple `for` loop

```python
for i in range(5):
    print(i)
```

Tap **▶ Run**. You should see:

```text
0
1
2
3
4
```

### 🔍 Notice

- `range(5)` gives Python the numbers **0, 1, 2, 3, 4** — five of
  them (Python starts at 0!).
- Each time around, `i` holds the current number.
- The indented line runs **once for each number**.

> 🧪 **Try it**: change `range(5)` to `range(3)` or `range(10)`.

---

## 🏗️ A loop inside a loop (nested)

Now imagine *"do 3 jumping jacks, in 4 rows."* Two loops — one for
the rows, one for the jacks:

```python
for row in range(4):
    for jack in range(3):
        print(f"row {row}, jack {jack}")
```

Run it. You should see 4 × 3 = **12** lines.

### 🔍 Notice

- The **inner** loop runs fully for every one turn of the **outer**
  loop.
- We'll use this next step to do `rows × columns` of tiles — that
  makes a grid.

---

## 🪄 `%` (modulo) — the leftover trick

`%` asks *"what's the **leftover** after dividing?"*

```python
print(4 % 2)
print(5 % 2)
print(6 % 2)
print(7 % 2)
```

You should see `0`, `1`, `0`, `1`.

### 🔍 Notice

- An **even** number has `% 2 == 0`.
- An **odd** number has `% 2 == 1`.
- So `(row + col) % 2 == 0` flips between **even** and **odd** as
  you move across a grid — perfect for a **checker pattern**.

---

## 🎉 You can loop and pattern!

Next step: put these three tools together to stamp the whole
Snake checkerboard.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 7](./index.html)</sub>
