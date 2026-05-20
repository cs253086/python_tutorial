---
layout: default
title: "Class 2 — Step 2"
---

<pre class="py-solution" markdown="0">
name = "Leo"
age = 7
score = 0

print(f"Welcome, {name}!")
print(f"You are {age} years old.")
print(f"Your score is {score}.")
</pre>

<sub>Class 2 — Step **2** of 3</sub>

# ⭐ Step 2 — f-strings: drop a variable into a sentence

Printing a number on its own line is plain. What we **really**
want is a sentence like `Your score is 0.`

For that we use an **f-string**. Three little ingredients:

1. A small **`f`** right before the opening `"`.
2. A normal sentence inside the quotes.
3. **`{box-name}`** anywhere you want to slide a variable in.

For example: `print(f"Welcome, {name}!")` → `Welcome, Leo!`

---

## 🤖 Try it!

Tap **▶ Run** to see f-strings with **one** variable AND with
**several** at once:

<pre class="py-starter" markdown="0">
name = "Leo"
age = 7
score = 0

# One variable:
print(f"Welcome, {name}!")

# Many variables in one sentence:
print(f"{name} is {age} years old.")
print(f"Your score is {score}.")
</pre>

You should see:

```text
Welcome, Leo!
Leo is 7 years old.
Your score is 0.
```

### 🔍 What just happened

- The little **`f`** before the `"` is what tells Python:
  *"swap in the variable when you see `{curly braces}`."*
- Without the `f`, Python prints `{name}` exactly as you typed
  it — curly braces and all. **The `f` is the magic.**
- Inside the quotes, you can mix **as many** `{boxes}` and
  regular words as you want.

> 🧪 **Try this in the editor above:**
> - **Remove** the `f` from one of the lines. Run it — `{name}`
>   prints literally. (A common mistake!)
> - Add your own f-string: `print(f"I have {age} pets.")`

---

## 🎉 You know f-strings!

Next step: put variables AND f-strings into your **Snake** game.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-3.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 3</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
