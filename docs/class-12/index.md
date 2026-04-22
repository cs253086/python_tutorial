---
layout: default
title: "Class 12 — Game Over!"
---

# Class 12 — Game Over! 💀

**This is the final class.** Today your snake learns to **lose**.
Without losing, it's not really a game — just a pet that slides.

By the end you'll have a working, losable, scorable Snake.

---

## 💥 What's a collision?

A **collision** is when two things end up in the same place. In
Snake there are two kinds:

- **Wall collision** — the snake's head goes off the edge of the
  board. Like a pool floaty bumping the side of the pool.
- **Self collision** — the snake's head lands on one of its own
  body squares. Biting itself!

When either happens → **GAME OVER.**

## 🔎 Using `in` to check self-collision

Python has a super-useful keyword `in` that asks *"is this thing
inside that list?"*:

```
if new_head in snake:
    game_over()
```

One line, and Python scans the whole snake body for us. If the new
head's spot matches any body part, `in` gives back `True`.

## 🚪 `return` — leaving a function early

Inside a function, `return` means *"I'm done — don't run anything
else in here."* We'll use this to stop `move()` the instant a
collision happens, so the game doesn't keep scheduling the next
tick:

```
def move():
    ...
    if it_crashed:
        game_over()
        return         # stop here — no more move()!
    ...
    screen.ontimer(move, 150)
```

## 🏁 The Game Over screen

When the snake dies, we'll create one more helper turtle whose job
is to write a big **GAME OVER** banner and the final **score** in
the middle of the board.

## 🎯 Today you'll
- Add a `game_over()` function with a big banner
- Detect **wall** collisions
- Detect **self** (biting yourself) collisions
- Admire the finished game!

- 🧩 **3 steps**
- ⏱️ About 20 minutes

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-1.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Start → Step 1</a>
</p>

<sub>[⬅ Back to all classes](../index.html)</sub>
