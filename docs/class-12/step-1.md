---
layout: default
title: "Class 12 — Step 1"
---

<sub>Class 12 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet `in` and `return`

Two small but mighty Python words today.

---

## 🔎 `in` — is this thing inside that list?

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

- `x in my_list` scans the list for you and returns `True` or
  `False`. One line, no loop needed!
- We'll use this to check *"is the snake's new head inside its own
  body?"* → if yes, it just bit itself. Game over.

---

## 🚪 `return` — leave a function early

Inside a function, `return` means *"I'm done. Don't run any more
lines in this function."*

```python
def greet(name):
    if name == "":
        print("No name? Bye!")
        return
    print(f"Hi, {name}!")

greet("")
greet("Leo")
```

Run it. First call hits `return` early and stops. Second call
skips the `if` and prints the greeting.

### 🔍 Notice

- When `name == ""`, the function prints the "bye" line then
  `return`s — the final `print("Hi, …")` never runs.
- We'll use this in `move()`: the moment a collision happens,
  `game_over()` runs and we `return` so no more ticks get
  scheduled.

---

## 💥 The two kinds of collision

- **Wall** — the snake's head goes past the edge of the board.
  We check with a comparison:
  `new_head[0] < -200 or new_head[0] > 180 or …`
- **Self** — the head lands on a body part.
  We check with `in`: `new_head in snake`.

Either one → `game_over()` + `return`.

---

## 🎉 You know `in` and `return`!

Next step: add the collision checks and a big **GAME OVER**
banner to your snake game.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 12](./index.html)</sub>
