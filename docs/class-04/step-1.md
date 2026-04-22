---
layout: default
title: "Class 4 — Step 1"
---

<sub>Class 4 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet `if / else`

Imagine a sign outside your house:

> **IF** it's raining → take an umbrella.
> **ELSE** → wear sunglasses.

You only do **one** of those — whichever matches. That's an
`if / else` in Python.

---

## 🧪 Just `if`

```python
age = 9
if age >= 10:
    print("You're old enough for hard mode!")
print("Game starting...")
```

Tap **▶ Run**. Only `Game starting...` should print — because the
first line's rule (`age >= 10`) is **false** for `age = 9`, so
Python skips that line.

> 🧪 **Try it**: change `age = 9` to `age = 15`. Run again — now
> both lines print.

### 🔍 Notice

- The line after `if` is **indented** (pushed to the right). That's
  how Python knows it belongs to the `if`. Use **Tab** or two
  spaces.
- The `:` at the end of the `if` line is required.

---

## 🟰 `=` vs `==` (two totally different things!)

- `=` → *"put this value in the box"* (like `age = 9`)
- `==` → *"are these two things the same?"* (used inside `if`)

Mix them up and Python gets confused! `if age = 10:` is wrong.
`if age == 10:` is right.

---

## 🔀 Adding `else`

What if you also want to do something when the rule is **false**?
That's what `else` is for:

```python
weather = "rainy"

if weather == "rainy":
    print("Take an umbrella! ☔")
else:
    print("Wear sunglasses! 😎")
```

Run it. Change `"rainy"` to `"sunny"` and run again.

### 🔍 Notice

- `else` has **no rule** of its own — it just runs when every
  `if` above it was false.
- Both blocks are indented under their header line.

---

## 🎉 You can make choices!

Next step: let the **player** pick easy or hard mode, and make
your Snake game react.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 4](./index.html)</sub>
