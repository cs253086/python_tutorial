---
layout: default
title: "Class 2 — Step 1"
---

<pre class="py-solution" markdown="0">
name = "Leo"
print(name)
</pre>

<sub>Class 2 — Step **1** of 3</sub>

# ⭐ Step 1 — Meet variables (boxes with labels)

A **variable** is a **box with a label**. You write a label on
it, put something inside, and whenever you say the label Python
tells you what's inside.

---

## 📦 A box for a number

```python
score = 0
print(score)
```

If you run this, you'd see:

```text
0
```

### 🔍 What just happened

- `score` is the **label** — you made it up.
- `=` means *"put this value into the box"* (NOT "is equal to").
- `print(score)` asks Python *"what's in the `score` box?"* and
  prints what it finds.

> 🧪 **Try it**: change `score = 0` to `score = 100` and run
> again. The print follows along — it always reads the **current**
> contents of the box.

---

## 💬 A box for a word

Boxes can hold **words** too. A word in Python is called a
**string**, and you put it inside quotes:

```python
name = "Leo"
print(name)
```

### 🔍 What just happened

- The **quotes** around `"Leo"` tell Python *"these are exact
  letters, not the name of another box."*
- Without the quotes, Python would hunt for a box called `Leo`
  and complain it doesn't exist.

---

## ✏️ Your turn

In the editor below, **make your own box**. Use any label and
any value you like.

Ideas:
- a box called `age` with your age inside
- a box called `pet` with `"dog"` inside
- a box called `lives` with `3` inside

Then `print` it to see what's inside.

> 💡 Stuck? Tap **💡 Solution**.

---

## 🎉 You know variables!

Next step: learn **f-strings** — the way to drop a variable into
a sentence.

<pre class="py-starter" markdown="0">
# Make a box with any label and any value, then print it.
# Examples to try:
#   age = 7
#   pet = "dog"
#   lives = 3
score = 0
print(score)
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 2](./index.html)</sub>
