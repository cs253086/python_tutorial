---
layout: default
title: "Rally-X — Class 8 — Step 1"
---

<sub>Rally-X — Class 8 — Step **1** of 2</sub>

# ⭐ Step 1 — Move toward a target

The simplest chase logic ever:

> If my x is **less** than yours → step right.
> If my x is **more** than yours → step left.
> Same idea for y.

That's it. No fancy pathfinding.

```python
def step_toward(my_x, target_x):
    if my_x < target_x:
        return 20
    if my_x > target_x:
        return -20
    return 0

print(step_toward(100, 200))
print(step_toward(200, 100))
print(step_toward(50, 50))
```

Tap **▶ Run**. Output:

```text
20
-20
0
```

### 🔍 Notice

- 3 cases: behind → step forward; ahead → step back; equal → don't
  move.
- We can use this for both x and y — apply it once for each axis
  to chase in 2D.

---

## 🎯 Methods can take other arguments

Methods aren't limited to `self`. They can take more parameters
too — like which target to chase:

```python
class Bot:
    def __init__(self, x):
        self.x = x

    def chase(self, target):
        if self.x < target.x:
            self.x += 1
        elif self.x > target.x:
            self.x -= 1

class Hero:
    def __init__(self, x):
        self.x = x

bot = Bot(0)
hero = Hero(5)

bot.chase(hero)
print(bot.x)
bot.chase(hero)
print(bot.x)
```

Run it. Output:

```text
1
2
```

### 🔍 Notice

- `def chase(self, target):` takes another car-like thing.
- `bot.chase(hero)` — `hero` becomes `target` inside the method.
- Bot moves one step per call.

---

## 🎉 You can write chase!

Next step: glue this onto your enemies in Rally-X.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 8](./index.html)</sub>
