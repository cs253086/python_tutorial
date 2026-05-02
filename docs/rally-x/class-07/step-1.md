---
layout: default
title: "Rally-X — Class 7 — Step 1"
---

<sub>Rally-X — Class 7 — Step **1** of 2</sub>

# ⭐ Step 1 — A class with state

Some objects have **state** that **changes**. A flag starts
**not collected**, then becomes **collected** when the player
drives over it.

```python
class Flag:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.collected = False

f = Flag(100, 50)
print(f.collected)
f.collected = True
print(f.collected)
```

Tap **▶ Run**. Output:

```text
False
True
```

### 🔍 Notice

- `self.collected = False` in `__init__` gives every new flag
  the same starting state.
- After picking up: `f.collected = True`. The class now remembers
  that this particular flag is gone.

---

## 🔁 Skipping collected flags

```python
class Flag:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.collected = False

flags = [Flag(0, 0), Flag(50, 50), Flag(-30, 20)]

# pretend we picked up the second flag
flags[1].collected = True

for f in flags:
    if not f.collected:
        print("draw flag at", f.x, f.y)
```

Run it. Output:

```text
draw flag at 0 0
draw flag at -30 20
```

### 🔍 Notice

- We loop **all** flags, but **skip** the ones already collected
  with `if not f.collected:`.
- `not` inverts True/False — `not False` is `True`.

---

## 🎉 You can model a flag!

Next step: scatter flags through the Rally-X maze and pick them
up as the player drives.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 7](./index.html)</sub>
