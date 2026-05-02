---
layout: default
title: "Rally-X — Class 2 — Step 1"
---

<sub>Rally-X — Class 2 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet `class`

Imagine a **cookie cutter**. You make the cutter once, then
stamp out as many cookies as you want — each one its own
cookie, but all the same shape. That's a **`class`** in Python.

The "cutter" is the class. Each cookie is an **instance**.

---

## 🐶 Your first class

```python
class Dog:
    def __init__(self, name):
        self.name = name

rex = Dog("Rex")
buddy = Dog("Buddy")

print(rex.name)
print(buddy.name)
```

Tap **▶ Run**. Output:

```text
Rex
Buddy
```

### 🔍 Notice

- **`class Dog:`** starts the cookie cutter.
- **`__init__`** is a special function that runs when you make a
  new dog. It's the "set things up" recipe.
- **`self`** is *"this particular cookie."* When you write
  `self.name = name`, you're saying *"the name of this dog is the
  name we got."*
- **`rex = Dog("Rex")`** stamps out a new Dog called Rex.
- **`rex.name`** asks *"what's the name on this dog?"*

---

## 🎯 Methods — actions a class can do

A class can also have **functions** inside it. They're called
**methods**, and the first parameter is always `self`:

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(self.name + " says: Woof!")

rex = Dog("Rex")
buddy = Dog("Buddy")
rex.bark()
buddy.bark()
```

Run it. Output:

```text
Rex says: Woof!
Buddy says: Woof!
```

### 🔍 Notice

- `def bark(self):` — methods always take `self` first.
- `rex.bark()` runs `bark` for Rex specifically; it knows
  `self.name == "Rex"`.

---

## 🎉 You can write a class!

Next step: build a **Car** class for Rally-X.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 2](./index.html)</sub>
