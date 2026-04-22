---
layout: default
title: "Class 5 — Again and again!"
---

# Class 5 — Again and again! 🔁

Today you'll make Python do something **over and over** — a
**loop**. You'll use it to build a countdown:
`3… 2… 1… GO!` 🏁

---

## 🪥 What's a `while` loop?

Imagine brushing your teeth. Your rule is:

> **WHILE** my teeth are still dirty → keep brushing.

As soon as they're clean (rule is false), you stop. That's exactly
a `while` loop:

```
count = 3
while count > 0:
    print(count)
    count = count - 1
```

Python runs this like a kid following instructions:

1. Check: is `count > 0`? Yes (3 > 0) → do the block
2. Check again: 2 > 0? Yes → do it again
3. Check: 1 > 0? Yes → do it again
4. Check: 0 > 0? **No** → stop!

Output: `3`, `2`, `1`, then the loop ends.

## ⚠️ The "never-ending loop" trap

If the rule never becomes false, the loop goes **forever**. If you
forget `count = count - 1`, `count` stays at 3 and the loop never
stops. The browser will freeze. Don't worry — you'll probably hit
this once and learn fast!

> Rule of thumb: something **inside** the loop has to change
> toward making the rule false.

## 🌀 Why loops matter for games

Every game you've played has a loop running behind the scenes —
checking inputs, moving things, drawing, over and over, 30–60
times per second. Class 9 is where we'll use a loop like that.
Today is practice!

## 🎯 Today you'll
- Write a loop that counts 3, 2, 1
- Turn it into a Snake countdown with `GO! 🏁`
- Run your whole text mini-game end-to-end

- 🧩 **3 steps**
- ⏱️ About 15 minutes

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-1.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Start → Step 1</a>
</p>

<sub>[⬅ Back to all classes](../index.html)</sub>
