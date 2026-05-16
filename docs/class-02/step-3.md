---
layout: default
title: "Class 2 — Step 3"
---

<pre class="py-solution" markdown="0">
print("🐍 Welcome to Snake!")
print("Eat the apples. Don't bite yourself!")
print("Press an arrow key to start.")

name = "Leo"
score = 0

print(f"🐍 Welcome, {name}!")
print(f"Your score is {score}.")
</pre>

<sub>Class 2 — Step **3** of 3</sub>

# ⭐ Step 3 — Personalize your Snake game

Your Snake game from Class 1 has **three** welcome lines. They're
the same for everyone:

```text
🐍 Welcome to Snake!
Eat the apples. Don't bite yourself!
Press an arrow key to start.
```

Let's make it **say your name** and **show your score**, using
the variables and f-strings you just learned. 🎉

---

## 🎯 What you're building

When the kid runs the game, they should see:

```text
🐍 Welcome to Snake!
Eat the apples. Don't bite yourself!
Press an arrow key to start.
🐍 Welcome, Leo!
Your score is 0.
```

The **last two lines** are new — and they use your variables.

---

## ✏️ Your turn

In the editor below, the three Class 1 lines are already there.
Between the 👇 and 👆 markers, add **four lines**:

1. A box called `name` with your name in quotes — e.g.
   `name = "Leo"`
2. A box called `score` with `0` inside — i.e. `score = 0`
3. A `print` line using an **f-string** that greets `{name}`
4. A `print` line using an **f-string** that shows the `{score}`

Tap **▶ Run**. You should see all five lines.

> 💡 Stuck? Tap **💡 Solution**.

---

## 🔍 Notice

- The markers (`# 👇` and `# 👆`) start with `#`, so Python ignores
  them. They're just **landmarks for you**.
- The Class 1 lines are **still there**. You're **adding to**
  your game, not replacing it. (Each class will keep doing this.)
- Don't forget the `f` before the quotes on the f-string lines!

<pre class="py-starter" markdown="0">
print("🐍 Welcome to Snake!")
print("Eat the apples. Don't bite yourself!")
print("Press an arrow key to start.")

# 👇 YOUR TURN
# 1. Make a box called `name` with your name in quotes.
# 2. Make a box called `score` with 0.
# 3. Print an f-string greeting that uses {name}.
# 4. Print an f-string score line that uses {score}.
# 👆 (Stuck? Tap 💡 Solution.)
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 2](./step-2.html)</sub>
