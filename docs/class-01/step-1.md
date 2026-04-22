---
layout: default
title: "Class 1 — Step 1"
---

<sub>Class 1 — Step **1** of 3</sub>

# ⭐ Step 1 — Meet `print`

Today's big idea is **`print`** — how you make the computer say
things. We'll also meet **quotes** and **comments**.

Try each example below: read it, type it into the box, tap **▶ Run**.

---

## 🗣️ What's `print`?

Imagine the computer as someone holding a book. The `print`
command hands it a card and says: *"read this card out loud."*

```python
print("Hello!")
```

### 🔍 Notice

- The **card** is whatever is inside the `(...)`.
- The **quotes** `"..."` wrap the exact words.
- In the output you'll see `Hello!` — what was on the card.

Every time you want the computer to say anything, `print` is how.

> 🧪 **Try it**: change `"Hello!"` to `"I love pizza!"` and tap
> Run again. The output changes!

---

## 🔒 Why do we need quotes?

Without quotes, Python thinks you're naming something it should
already know:

```python
print(Hello)
```

Tap ▶ Run. You should get a **red error** — something like
`NameError: name 'Hello' is not defined`.

That's Python saying: *"what's `Hello`? I don't know a `Hello`."*

Put the quotes back and it works again:

```python
print("Hello")
```

### 🔍 Notice

Quotes tell Python *"these are exact words, not the name of a
box."* (We'll meet named boxes — variables — in Class 2.)

---

## 💬 Comments — notes only humans see

Sometimes you want to leave yourself a note that Python **ignores**.
That's a **comment**. It starts with `#`:

```python
# This line is for me. Python won't read it.
print("But this line gets printed.")
```

Run it. Only the second line appears in the output — the `#` line
is just for you.

### 🔍 Notice

- Everything to the **right of `#`** on a line is ignored by
  Python.
- Use comments to remind yourself why you wrote a piece of code.

---

## 🎉 You know `print` now!

Next step: use what you just learned to write your Snake game's
welcome screen.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 1](./index.html)</sub>
