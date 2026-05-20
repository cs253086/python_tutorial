---
layout: default
title: "Class 2 — Step 1"
---

<pre class="py-solution" markdown="0">
score = 100
print(score)

name = "Leo"
print(name)

pet = "cat"
print(pet)
</pre>

<sub>Class 2 — Step **1** of 3</sub>

# ⭐ Step 1 — Meet variables (boxes with labels)

A **variable** is a **box with a label**. You write a label on
it, put something inside, and whenever you say the label, Python
tells you what's inside.

Boxes can hold **numbers** (like `0`, `100`, `3`) **or words in
quotes** (like `"Leo"`, `"dog"`).

The rules:

- `score = 0` puts `0` into a box called `score`.
- `name = "Leo"` puts the word `"Leo"` into a box called `name`.
- `print(score)` asks Python *"what's in the `score` box?"* and
  prints what it finds.

---

## 🤖 Try it!

Tap **▶ Run** below. You should see both a number AND a word
print, one per line.

<pre class="py-starter" markdown="0">
# A box for a number:
score = 0
print(score)

# A box for a word (in quotes!):
name = "Leo"
print(name)
</pre>

You should see:

```text
0
Leo
```

### 🔍 What just happened

- `score` and `name` are **labels** you made up.
- `=` means *"put this value into the box"* (NOT "is equal to").
- `print(score)` reads the `score` box and prints `0`.
- The **quotes** around `"Leo"` tell Python *"these are exact
  letters."* Without the quotes, Python would hunt for a box
  called `Leo` and complain it doesn't exist.

> 🧪 **Try this in the editor above:**
> - Change `score = 0` to `score = 100`. Run again — the print
>   follows along.
> - Change `name = "Leo"` to your real name.
> - Add a new box: `age = 7` or `pet = "dog"` — then print it.

---

## 🎉 You know variables!

Next step: learn **f-strings** — the way to drop a variable into
a sentence.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 2](./index.html)</sub>
