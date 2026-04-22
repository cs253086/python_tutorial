---
layout: default
title: "Class 2 — Step 3"
---

<sub>Class 2 — Step **3** of 3</sub>

# ⭐ Step 3 — Slide variables into sentences (f-strings)

Printing `name` and `score` alone is boring. Let's slide them
**into** a sentence, like:

> "Welcome, Leo!"

Python has a special trick called an **f-string**. Put an `f`
right before the opening quote, then wrap each variable in
**`{curly braces}`**.

Change your last two prints to these:

```python
print(f"🐍 Welcome, {name}!")
print(f"Your score is {score}.")
```

Tap **▶ Run**. You should see:

```
🐍 Welcome, Leo!
Your score is 0.
```

## 🔍 Notice

- The **`f`** right before the `"` turns the string into a
  **formatted** string. Without the `f`, Python would print
  `{name}` and `{score}` literally — which isn't what we want.
- **`{name}`** says: *"look in the `name` box and drop what's
  inside here."* Same for `{score}`.
- You can put **as many variables as you want** into one f-string,
  and mix them with regular words.

## 🧪 Try it

Change `score = 0` to `score = 42`, tap Run, and watch the
sentence update. You didn't change the `print` line — only the
box's value changed!

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 2](./step-2.html)</sub>
