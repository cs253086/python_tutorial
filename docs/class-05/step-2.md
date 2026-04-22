---
layout: default
title: "Class 5 — Step 2"
---

<sub>Class 5 — Step **2** of 2</sub>

# ⭐ Step 2 — Snake countdown → GO!

Let's plug the countdown into your Snake mini-game. This is your
**whole file** for Class 5:

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

countdown = 3
while countdown > 0:
    print(countdown)
    countdown = countdown - 1

print("GO! 🏁")
print(f"Your score is {score}.")
```

Tap **▶ Run** and play it through:
- Type your name
- Type `easy` or `hard`
- Watch `3… 2… 1… GO!` count down
- See your score

## 🎉 You built a real text mini-game!

Everything you've learned in Classes 1–5 — `print`, variables,
`input`, `if/else`, `while` — is now working together.

**Next class the screen goes from words to graphics.** 🎨

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
