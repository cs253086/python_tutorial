---
layout: default
title: "Class 7 — Step 1"
---

<sub>Class 7 — Step **1** of 4</sub>

# ⭐ Step 1 — Meet the `for` loop

Imagine your gym teacher: *"do 10 jumping jacks."* You do the
**same thing**, ten times. That's a **`for` loop** — a way to
tell Python *"do this, N times."*

---

## 🤸 A simple `for` loop

```python
for i in range(5):
    print(i)
```

If you run this, you'll see:

```text
0
1
2
3
4
```

### 🔍 What just happened

- `range(5)` gives Python the numbers **0, 1, 2, 3, 4** — five of
  them. (Python likes to start counting at 0!)
- Each time around the loop, **`i`** holds the **current** number.
- The **indented** line under `for ...:` is the **body** — Python
  runs it **once for every number**.

> If we wrote `range(10)`, the body would run **10** times.
> `range(3)` → **3** times. You control how many.

---

## 🎯 Why this matters for Snake

The Snake board has 400 tiles. Stamping them one at a time would
be 400 lines of code. With a `for` loop, it's about **4**.

That's the magic: **a loop turns "do this many times" into just
a few lines.**

---

## 🎉 You met `for`!

Next step: use a `for` loop together with the **pen** to draw a
row of 20 Snake tiles.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 7](./index.html)</sub>
