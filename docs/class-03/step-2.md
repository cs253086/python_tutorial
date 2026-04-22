---
layout: default
title: "Class 3 — Step 2"
---

<sub>Class 3 — Step **2** of 2</sub>

# ⭐ Step 2 — Ask the real player their name

Remember last class, you wrote `name = "Leo"`? That meant the game
always greeted "Leo", no matter who was playing. Let's fix that
with `input`.

Your whole file should look like this:

```python
print("🐍 Welcome to Snake!")
print("Eat the apples. Don't bite yourself!")
print("Press an arrow key to start.")

name = input("What's your name? ")
score = 0

print(f"🐍 Welcome, {name}!")
print(f"Your score is {score}.")
```

Tap **▶ Run**. The game will ask `What's your name?` and wait.
Type your name and press Enter — it greets you personally!

### 🔍 Notice

- We just **replaced** `name = "Leo"` with
  `name = input("What's your name? ")`.
- Everything else works the same because `name` is still a
  variable — it just gets its value from the player now.

## 🎉 Your game is interactive!

> 🧪 **Try it**: Run it again with a silly name like `PizzaLord`
> or a friend's name. The welcome changes every time.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
