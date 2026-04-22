---
layout: default
title: "Class 3 — Step 2"
---

<pre class="py-starter">
print("🐍 Welcome to Snake!")
print("Eat the apples. Don't bite yourself!")
print("Press an arrow key to start.")

name = "Leo"
score = 0

# 👇 CLASS 3: REPLACE `name = "Leo"` WITH AN input CALL 👇
# (Replace the hardcoded name above with this class's code.)

# 👆 END OF NEW CODE 👆

print(f"🐍 Welcome, {name}!")
print(f"Your score is {score}.")
</pre>

<pre class="py-solution">
# Delete the hardcoded `name = "Leo"` line above, and add:
name = input("What's your name? ")
</pre>

<sub>Class 3 — Step **2** of 2</sub>

# ⭐ Step 2 — Ask the real player their name

Your `snake.py` starts Class 3 with the code from Classes 1–2:
welcome banner, `name = "Leo"`, `score = 0`, and f-string prints.

The game always greets "Leo" — boring. Let's fix that.

## ✏️ What to change

- **Delete** the line `name = "Leo"`
- Between the 👇 and 👆 markers, add:

  ```python
  name = input("What's your name? ")
  ```

Tap **▶ Run**, type your name when asked, and see the game greet
you by name. Run it again with a friend's name or a silly one like
`PizzaLord`.

> 💡 Stuck? Tap **Solution** for the answer.

---

## 🔍 Notice

- `name` is still just a variable — it holds whatever the player
  types.
- The `f"Welcome, {name}!"` print below doesn't need to change.
  It reads from the `name` box at run time, so the new value shows
  up automatically.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
