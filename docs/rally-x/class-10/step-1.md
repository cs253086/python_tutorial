---
layout: default
title: "Rally-X — Class 10 — Step 1"
---

<sub>Rally-X — Class 10 — Step **1** of 2</sub>

# ⭐ Step 1 — A cooldown counter

A cooldown is just **a number that ticks down each frame**. While
it's above zero, an effect is active.

```python
state = {"smoke_timer": 0}

def use_smoke():
    if state["smoke_timer"] == 0:
        state["smoke_timer"] = 5
        print("💨 SMOKE!")
    else:
        print("(still smoking...)")

def tick():
    if state["smoke_timer"] > 0:
        state["smoke_timer"] -= 1

use_smoke()  # 💨 SMOKE!
tick()
tick()
print("timer:", state["smoke_timer"])
use_smoke()  # (still smoking...)
tick(); tick(); tick()
print("timer:", state["smoke_timer"])
use_smoke()  # 💨 SMOKE! (cooldown done)
```

Tap **▶ Run**. You'll see the smoke can only re-trigger after
the timer drains.

### 🔍 Notice

- Cooldown = countdown. Each tick: `state["smoke_timer"] -= 1`.
- `> 0` means *"effect still active."*
- `== 0` means *"ready to use again."*

---

## 🚦 Pausing other behavior with the timer

While smoke is active we want **enemies to stop moving**. That's
just a tiny `if` in the chase loop:

```python
def tick():
    if state["smoke_timer"] > 0:
        state["smoke_timer"] -= 1
    else:
        # only chase when no smoke
        for e in enemies:
            e.chase(player)
```

### 🔍 Notice

- One condition controls a whole behavior. Easy to add more
  effects later (slow-mo? double-score? shield?).

---

## 🎉 You can write a cooldown!

Next step: bolt smoke + Space-key + an `S` charge counter onto
Rally-X.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 10](./index.html)</sub>
