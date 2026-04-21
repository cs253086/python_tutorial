---
layout: default
title: "Class 2 — Step 3"
---

<sub>Class 2 — Step **3** of 3</sub>

# ⭐ Step 3 — Use variables inside a sentence

Right now you print your name and score on **separate lines**. Let's
make them part of a full sentence.

Python has a magic trick for this: put an `f` before the quotes, and
then wrap variables in **curly braces** `{ }`.

Replace the last four lines of your code with these:

```python
print(f"🐍 Welcome, {name}!")
print(f"Your score is {score}.")
```

Your whole file should now look like this:

```python
print("🐍 Welcome to Snake!")
print("Eat the apples. Don't bite yourself!")
print("Press an arrow key to start.")

name = "Leo"
score = 0

print(f"🐍 Welcome, {name}!")
print(f"Your score is {score}.")
```

Tap **▶ Run** and **Save**.

You should see:

```
🐍 Welcome to Snake!
Eat the apples. Don't bite yourself!
Press an arrow key to start.
🐍 Welcome, Leo!
Your score is 0.
```

## 🎉 Your game knows your name!

> 💡 **Try it**: change `score = 0` to `score = 42`, Run, and watch
> the sentence change.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 2](./step-2.html)</sub>
