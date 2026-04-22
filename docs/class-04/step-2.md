---
layout: default
title: "Class 4 — Step 2"
---

<sub>Class 4 — Step **2** of 2</sub>

# ⭐ Step 2 — Easy or hard? Let the player choose

Add a difficulty question to your Snake game. Whole file:

```python
print("🐍 Welcome to Snake!")
print("Eat the apples. Don't bite yourself!")

name = input("What's your name? ")
score = 0

print(f"🐍 Welcome, {name}!")

difficulty = input("Easy or hard? ")

if difficulty == "hard":
    print("Good luck, brave one! 💪")
else:
    print("You got this! 🌟")

print(f"Your score is {score}.")
```

Tap **▶ Run**. Type your name, then try typing `hard` — you should
see 💪. Run it again and type `easy` — you should see 🌟.

### 🔍 Notice

- The **rule** `difficulty == "hard"` asks *"did the player type
  exactly `hard`?"*
- If yes → first block. If no (including `"easy"`, `"fast"`, or
  anything else) → the `else` block.

## 🎉 Your game makes decisions!

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
