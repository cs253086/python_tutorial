---
layout: default
title: "Flappy Bird — Class 7 — Step 1"
---

<sub>Flappy Bird — Class 7 — Step **1** of 2</sub>

# ⭐ Step 1 — Lists, instances, and random

Python lists can hold **anything** — including the objects you
made from your own classes.

---

## 🎒 A list of birds

```python
class Bird:
    def __init__(self, name):
        self.name = name

birds = [Bird("Yellow"), Bird("Blue"), Bird("Red")]

for b in birds:
    print(b.name)
```

```text
Yellow
Blue
Red
```

`for b in birds:` walks each instance. Inside the loop, `b` is
one bird — you can read its data and call its methods.

---

## ➕ Append later

You can grow a list while the program runs:

```python
class Pipe:
    def __init__(self, x):
        self.x = x

pipes = [Pipe(100)]
print(len(pipes))

pipes.append(Pipe(200))
pipes.append(Pipe(300))
print(len(pipes))

for p in pipes:
    print("pipe at", p.x)
```

```text
1
3
pipe at 100
pipe at 200
pipe at 300
```

This is exactly how the game will spawn new pipes: append to the
list, then redraw all of them every frame.

---

## 🎲 Random numbers

```python
import random

print(random.randint(0, 9))
print(random.randint(0, 9))
print(random.randint(-100, 100))
```

```text
3
7
-42
```

`random.randint(a, b)` picks a whole number from `a` to `b`,
**both ends included**. We'll use it to pick a fresh gap height
every spawn.

---

## 🗑️ Trim the list

When a pipe scrolls off the left side of the screen, it's just
sitting there using memory. Remove the first one with
`pipes.pop(0)`:

```python
pipes = ["a", "b", "c", "d"]
while pipes and pipes[0] == "a":
    pipes.pop(0)
print(pipes)
```

```text
['b', 'c', 'd']
```

`while pipes and condition:` keeps popping until the condition
fails. We'll use the same shape to remove off-screen pipes.

---

## 🎉 You learned the loop pattern!

Next step: in the game, swap your single `pipe` for a list, spawn
random pipes over time, and trim the leftovers.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 7](./index.html)</sub>
