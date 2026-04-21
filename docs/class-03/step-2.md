---
layout: default
title: "Class 3 — Step 2"
---

<sub>Class 3 — Step **2** of 3</sub>

# ⭐ Step 2 — Ask the player their name

Now let's use `input` for something your game actually needs: the
**player's name**.

Remember in Class 2, we wrote `name = "Leo"`. That means the name is
always "Leo", no matter who plays.

Let's change that. **Delete** the line `name = "Leo"` and replace it
with:

```python
name = input("What's your name? ")
```

Also delete the test lines from Step 1 (the favorite color ones).

Your whole file should now look like this:

```python
print("🐍 Welcome to Snake!")
print("Eat the apples. Don't bite yourself!")
print("Press an arrow key to start.")

name = input("What's your name? ")
score = 0

print(f"🐍 Welcome, {name}!")
print(f"Your score is {score}.")
```

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-3.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 3</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
