---
layout: default
title: "Class 8 — Step 1"
---

<sub>Class 8 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet lists and tuples

A snake has **many** body parts. Making a separate variable for
each (`part1`, `part2`, …) would be silly. That's what **lists**
are for.

---

## 🛒 A list — a bunch of things in order

Like a shopping list:

```python
fruits = ["apple", "banana", "cherry"]
print(fruits)
print(fruits[0])
print(fruits[2])
```

Tap **▶ Run**. Output:

```
['apple', 'banana', 'cherry']
apple
cherry
```

### 🔍 Notice

- A list goes in **square brackets** `[ ]` with **commas** between
  items.
- `fruits[0]` is the **first** item, `fruits[1]` the second…
  Python starts counting at **0**!
- You can put any value in a list — words, numbers, even other
  lists.

---

## 📍 Tuples — pairs stuck together

A spot on the screen is two numbers: an x and a y. Python's way of
gluing two (or more) values into one thing is a **tuple**, using
**round brackets**:

```python
head = (0, 0)
apple = (100, -60)
print(head)
print(apple[0])
print(apple[1])
```

Run it.

### 🔍 Notice

- A tuple uses `( )` instead of `[ ]`.
- You read parts with `[0]`, `[1]` just like lists — but usually
  tuples stay the same once you make them (like a pair of shoes:
  two parts that belong together).

---

## 🐍 A snake is a list… of tuples!

```python
snake = [(-40, 0), (-20, 0), (0, 0)]
print(snake)
print(snake[-1])
```

Run it. The last line prints `(0, 0)` — the **head** of the snake.

### 🔍 Notice

- Each body part is a **tuple** — a spot on the board.
- The whole snake is a **list** of those tuples.
- `snake[-1]` means the **last** item — in our case, the head.
  Handy!

---

## 🎉 You know lists and tuples!

Next step: put the snake onto your board with its own drawing pen.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 8](./index.html)</sub>
