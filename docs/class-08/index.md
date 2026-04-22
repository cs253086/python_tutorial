---
layout: default
title: "Class 8 — The snake!"
---

# Class 8 — The snake! 🐍

You've got the board. Today you put **the snake** on it.

---

## 🛒 What's a list?

A snake is **many squares** in a line. You could try:

```
part1 = (-40, 0)
part2 = (-20, 0)
part3 = (0, 0)
```

…but what if the snake grows to 50 parts? Do you make `part1` …
`part50`? No — that's what **lists** are for.

A list is like a **shopping list** — a bunch of things in order,
all held together:

```
fruits = ["apple", "banana", "cherry"]
```

- The whole list has a name (`fruits`)
- Each item has a **position**: `fruits[0]` is `"apple"`,
  `fruits[1]` is `"banana"`, `fruits[2]` is `"cherry"`
- 👀 Notice: Python starts counting at **0**, not 1

## 📍 Tuples — pairs stuck together

A **spot** on screen is two numbers: an x and a y. Python has a
special way to group two (or more) values into one thing: a
**tuple**. It uses round brackets:

```
head = (0, 0)        # a point on the grid
apple = (100, -60)   # another point
```

A tuple isn't a list — you don't usually change it. It's more like
a pair of shoes: the two halves belong together.

## 🐍 So what's the snake?

It's a list… of tuples!

```
snake = [(-40, 0), (-20, 0), (0, 0)]
```

That's a snake with 3 body parts, head at `(0, 0)`. Next class
we'll make the head move by adding new tuples at the end and
removing the tail from the beginning.

## 🎯 Today you'll
- Play with a short list of fruit
- Create the `snake` list of body-part tuples
- Stamp a **blue square** for each part so the snake appears

- 🧩 **3 steps**
- ⏱️ About 20 minutes

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-1.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Start → Step 1</a>
</p>

<sub>[⬅ Back to all classes](../index.html)</sub>
