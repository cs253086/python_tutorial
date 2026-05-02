---
layout: default
title: "Rally-X — Class 11 — Step 1"
---

<sub>Rally-X — Class 11 — Step **1** of 2</sub>

# ⭐ Step 1 — A `running` flag

A simple **boolean** in `state` decides whether the game keeps
ticking or sits frozen on a Game Over screen.

```python
state = {"lives": 3, "running": True}

def tick():
    if not state["running"]:
        return     # game is over — do nothing
    print("game running, lives:", state["lives"])

state["running"] = True
tick()

state["running"] = False
tick()
```

Tap **▶ Run**. Output:

```text
game running, lives: 3
```

The second `tick()` does nothing because `running` is False.

### 🔍 Notice

- `if not state["running"]: return` is the universal "pause /
  game-over short-circuit."
- We can flip the flag from anywhere in the code:
  `state["running"] = False`.

---

## 🔁 Resetting the game

A reset is just **setting state back to its starting values** and
flipping `running` back to True:

```python
def reset():
    state["lives"] = 3
    state["score"] = 0
    state["running"] = True
    print("reset! 🔄")

reset()
```

### 🔍 Notice

- For Rally-X we'll also reset the player position, refill fuel,
  and un-collect the flags.
- One reset function = one place to maintain when the game
  changes.

---

## 🎉 You can stop and reset!

Next step: bolt this into Rally-X with a **GAME OVER banner** and
an **R-to-restart** key.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 11](./index.html)</sub>
