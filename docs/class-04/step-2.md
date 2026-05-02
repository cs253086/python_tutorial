---
layout: default
title: "Class 4 — Step 2"
---

<pre class="py-solution" markdown="0">
difficulty = input("Easy or hard? ")

if difficulty == "hard":
    print("Good luck, brave one! 💪")
else:
    print("You got this! 🌟")
</pre>

<sub>Class 4 — Step **2** of 2</sub>

# ⭐ Step 2 — Easy or hard? Let the player pick

Your Class 3 game asks for the player's name. Now let it ask for
**difficulty** and react with an `if / else`.

## ✏️ What to add

Between the 👇 and 👆 markers, add **five lines**:

1. An `input` that asks `"Easy or hard? "` and stores the answer in
   `difficulty`.
2. An `if difficulty == "hard":` block that prints the brave
   message.
3. An `else:` block that prints the encouraging message.

Tap **▶ Run**. Type your name → type `hard` → you should see 💪.
Run again and type `easy` → you should see 🌟.

> 💡 Stuck? Tap **Solution**.

---

## 🔍 Notice

- `difficulty == "hard"` uses **two** `=` — that's the "are these
  equal?" question. A **single** `=` would try to reassign the
  variable and confuse Python.
- The indented lines inside `if` and `else` are the bodies of
  those branches. Use Tab or two spaces.

<pre class="py-starter" markdown="0">
print("🐍 Welcome to Snake!")
print("Eat the apples. Don't bite yourself!")

name = input("What's your name? ")
score = 0

print(f"🐍 Welcome, {name}!")

# 👇
# Ask the player "Easy or hard?" with input()
#   and put the answer into a box called "difficulty"
# If "difficulty" is the same as "hard": print "Good luck, brave one! 💪"
# Else: print "You got this! 🌟"
# 👆

print(f"Your score is {score}.")
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
