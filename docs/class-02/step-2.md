---
layout: default
title: "Class 2 — Step 2"
---

<pre class="py-solution" markdown="0">
name = "Leo"
score = 0

print(f"Welcome, {name}!")
print(f"Your score is {score}.")
</pre>

<sub>Class 2 — Step **2** of 3</sub>

# ⭐ Step 2 — f-strings: drop a variable into a sentence

Printing a number on its own line is plain:

```text
0
```

Boring! What we **really** want is a sentence:

```text
Your score is 0.
```

For that we use an **f-string**.

---

## ✨ What an f-string looks like

Three little ingredients:

1. A small **`f`** right before the opening `"`.
2. A normal sentence inside the quotes.
3. **`{box-name}`** anywhere you want to slide a variable in.

```python
name = "Leo"
print(f"Welcome, {name}!")
```

If you ran that, you'd see:

```text
Welcome, Leo!
```

### 🔍 What just happened

- The **`f`** in front turns the string into a *"formatted"*
  string. Without it, `{name}` would print **literally** —
  curly braces and all.
- **`{name}`** means *"look in the `name` box and drop what's
  inside here."*
- The rest of the sentence (`Welcome, `, `!`) prints exactly as
  typed.

---

## 💬 Many boxes in one sentence

You can use as many variables as you like:

```python
name = "Leo"
age = 7
print(f"{name} is {age} years old.")
```

Would print:

```text
Leo is 7 years old.
```

---

## ✏️ Your turn

In the editor below, two boxes are already made for you: `name`
and `score`.

**Goal:** use **two f-strings** to print:

```text
Welcome, Leo!
Your score is 0.
```

(Use your real name in the `name` box if you like.)

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- Forget the `f` and `{name}` will print **literally** — try it
  and see! That's a common mistake. The `f` is what makes Python
  swap in the variable.
- Inside the quotes, you can mix as many `{boxes}` and regular
  words as you want.

<pre class="py-starter" markdown="0">
name = "Leo"
score = 0

# 👇 YOUR TURN
# Use TWO f-strings to print:
#   Welcome, Leo!
#   Your score is 0.
# Remember the `f` before the quotes!
# 👆 (Stuck? Tap 💡 Solution.)
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-3.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 3</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
