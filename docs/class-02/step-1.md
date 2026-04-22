---
layout: default
title: "Class 2 — Step 1"
---

<sub>Class 2 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet variables & f-strings

Today's big idea: a **variable** is a **box with a label**. You
write a label on it, put something inside, and whenever you say
the label Python tells you what's in the box.

Try each example below: read it, type it into the editor, tap
**▶ Run**.

---

## 📦 A box for a number

```python
score = 0
print(score)
```

### 🔍 Notice

- `score` is the **label** you made up (pick anything).
- `=` means *"put this value into the box."*
- `print(score)` asks *"what's in the `score` box?"* and prints
  what it finds.

> 🧪 **Try it**: change `score = 0` to `score = 100`. The print
> follows along — because it reads the box at run time.

---

## 💬 A box for a word (a "string")

Boxes can hold **words** too. A word in Python is a **string** and
goes inside quotes:

```python
name = "Leo"
print(name)
```

### 🔍 Notice

- The **quotes** around `"Leo"` tell Python *"these are exact
  letters, not the name of another box."*
- Without quotes, Python would hunt for a box called `Leo` and
  complain it doesn't exist.

---

## ✨ f-strings — drop a variable into a sentence

Printing a number on its own line is plain. You can **slide** a
variable into a sentence with an **f-string**: put `f` right
before the opening `"`, then wrap the variable in `{curly braces}`.

```python
name = "Leo"
score = 0
print(f"Welcome, {name}!")
print(f"Your score is {score}.")
```

### 🔍 Notice

- The **`f`** in front turns the string into a *"formatted"*
  string. Without it, `{name}` would print literally.
- **`{name}`** means *"look in the `name` box and drop what's
  inside here."*
- You can use **many** variables in one f-string and mix them with
  regular words.

---

## 🎉 You know variables and f-strings!

Next step: put these into your Snake game.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 2](./index.html)</sub>
