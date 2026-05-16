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

- The `:` at the end of the `if` line is **required**. Forget it
  and Python gets confused.
- The line that prints is **pushed in** (indented). That's how
  Python knows it belongs to the `if`. Read on 👇

---

## 📏 Indentation — Python's way of grouping

You saw it just above: the line after `if age >= 10:` was **pushed
in** a bit. That's called **indentation** — and it's how Python
knows which lines **belong to** the `if`.

Other coding languages use `{` `}` braces. Python just uses
**spaces** — neat, right?

**The rule:** every line inside an `if` block starts with the
**same amount** of space. The usual amount is **4 spaces** — or
just press **Tab** in the editor and it types them for you.

### ✅ Right

```python
age = 9
if age >= 10:
    print("Old enough!")
    print("Let's play!")
print("Game starting...")
```

- The two **indented** lines are **inside** the `if` — they only
  run when `age >= 10`.
- The last line isn't indented — it's **outside** the `if`, so
  it **always** runs.

### ❌ Forgot to indent

```python
age = 9
if age >= 10:
print("Old enough!")
```

Python won't run this. It complains:

```
IndentationError: expected an indented block
```

That's Python saying: *"you wrote `if ...:` but then didn't push
the next line in — I don't know what's supposed to be inside the
`if`."*

The fix: push that line in with **Tab** (or 4 spaces).

### 💡 Tip

In the editor, press **Tab** at the start of a line — the editor
types 4 spaces for you. Same amount every time, never wrong.

Indentation will keep showing up in every class from here on —
inside `else` (next!), `while` (Class 5), `for` (Class 7), and
functions (Class 9). Same idea each time: **push lines in to show
they belong together**.

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
