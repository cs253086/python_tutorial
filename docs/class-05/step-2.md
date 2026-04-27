---
layout: default
title: "Class 5 — Step 2"
---

<pre class="py-solution">
countdown = 3
while countdown > 0:
    print(countdown)
    countdown = countdown - 1

print("GO! 🏁")
</pre>

<sub>Class 5 — Step **2** of 2</sub>

# ⭐ Step 2 — Snake countdown → GO!

Your Class 4 game already asks your name + difficulty. Let's add a
**`3… 2… 1… GO!`** countdown right before the score line.

## ✏️ What to add

Between the 👇 and 👆 markers, add:

1. A variable `countdown` starting at `3`
2. A `while countdown > 0:` loop that prints `countdown` and then
   subtracts 1 from it
3. After the loop, print `GO! 🏁`

Tap **▶ Run** and play the whole mini-game end-to-end:

- Type your name
- Type `easy` or `hard`
- Watch `3… 2… 1… GO!`
- See your score

> 💡 Stuck? Tap **Solution**.

---

## 🔍 Notice

- `countdown = countdown - 1` is what lets the loop eventually
  stop. Without it, `countdown` stays at 3 forever — your page
  would freeze (infinite loop!).
- The `print("GO! 🏁")` line is **outside** the loop (not
  indented), so it only runs once after the loop ends.

## 🎉 You built a real text mini-game!

Everything you've learned — `print`, variables, `input`, `if/else`,
`while` — is now working together.

Next class → **graphics**. 🎨

<pre class="py-starter">
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

# 👇
# Make a box called "countdown" with 3 inside
# While countdown > 0:
#   print countdown, then take 1 away from countdown
# After the loop, print "GO! 🏁"
# 👆

print(f"Your score is {score}.")
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
