---
layout: default
title: "Class 3 — Ask the player!"
---

# Class 3 — Ask the player! 🎤

Today your game will **ask a question** and wait for whoever is
playing to type an answer.

---

## 🛎️ What's `input`?

Imagine a cashier asking *"cash or card?"* — they don't move until
you answer. That's exactly what `input` does:

```
name = input("What's your name? ")
```

When Python runs this, it:

1. Shows the question `What's your name? `
2. **Stops and waits.** Nothing else happens.
3. The moment you type something and press Enter…
4. …it puts whatever you typed into the `name` box.

Now you can use `name` anywhere, just like the variables you made
in Class 2.

## 🔑 Why this is cool

Before `input`, your game said the same thing to everyone. Now it
can be **personal**. Type "Leo" → the game greets Leo. Type
"PizzaLord" → the game greets PizzaLord. The same code works for
everyone.

## 📝 One thing to know

`input` always gives you back a **string** (a word). Even if you
type `42`, it's the word `"42"`, not the number. If you need a
number, you'd turn it into one with `int(...)` — but we won't need
that today.

## 🎯 Today you'll
- Try `input` with a silly question
- Ask the player for their real name
- Greet them by name in your Snake game

- 🧩 **3 steps**
- ⏱️ About 15 minutes

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-1.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Start → Step 1</a>
</p>

<sub>[⬅ Back to all classes](../index.html)</sub>
