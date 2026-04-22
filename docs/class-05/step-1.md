---
layout: default
title: "Class 5 — Step 1"
---

<sub>Class 5 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet `while`

Think of brushing your teeth:

> **WHILE** your teeth are still dirty → keep brushing.
> As soon as they're clean, stop.

That's a `while` loop. Python repeats a block as long as a **rule
is still true**.

---

## 🔢 A countdown loop

```python
count = 3
while count > 0:
    print(count)
    count = count - 1
print("Done!")
```

Tap **▶ Run**. You should see:

```
3
2
1
Done!
```

### 🔍 Notice

Python's thinking goes like this:
1. Is `count > 0`? Yes (3 > 0) → do the block.
2. Again: 2 > 0? Yes → do it.
3. Again: 1 > 0? Yes → do it.
4. Again: 0 > 0? **No** → stop. Print `Done!`.

- `count = count - 1` is what makes the rule eventually become
  false. Something **inside** the loop must push toward the exit.

---

## ⚠️ The "never-ending loop" trap

If the rule never becomes false, the loop goes **forever** and
freezes your page.

> 🧪 **Try it** (carefully!): delete the `count = count - 1` line.
> `count` stays at 3 → `3 > 0` is always true → infinite loop.
>
> If your page freezes, just reload it and put the line back.

---

## 🎉 You can loop!

Next step: turn this into a Snake countdown and wire up your whole
mini-game.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 5](./index.html)</sub>
