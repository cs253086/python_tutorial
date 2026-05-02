---
layout: default
title: "Rally-X — Class 3 — Step 1"
---

<sub>Rally-X — Class 3 — Step **1** of 2</sub>

# ⭐ Step 1 — Lots of instances

A class is one **cookie cutter**. You can stamp out **as many
cookies as you want** from it.

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(self.name + " says: Woof!")

dogs = [Dog("Rex"), Dog("Buddy"), Dog("Spot"), Dog("Max")]

for d in dogs:
    d.bark()
```

Tap **▶ Run**. Each dog barks. Output:

```text
Rex says: Woof!
Buddy says: Woof!
Spot says: Woof!
Max says: Woof!
```

### 🔍 Notice

- `dogs` is a **list of objects**. Each item is its own dog.
- The `for d in dogs:` loop visits each dog and runs `d.bark()`.
- Same code, four different outputs — because each `d.name` is
  different.

---

## 🚗 The same trick with cars

Same idea, but with the `Car` class you wrote in Class 2:

```python
class Car:
    def __init__(self, x, y, color):
        self.x = x
        self.y = y
        self.color = color

cars = [
    Car(0, 0, "red"),
    Car(100, 50, "blue"),
    Car(-80, -40, "green"),
]

for c in cars:
    print(c.x, c.y, c.color)
```

Run it. Each car has its own x, y, color. Three Cars from one
class.

### 🔍 Notice

- We **list** all the cars in `cars = [ ... ]`.
- The list can hold any number of them — 3, 30, 300.
- Each `c` in the loop is its own `Car` object.

---

## 🎉 Lots of cars in one shot!

Next step: turn this into the player + 3 enemy chasers in your
Rally-X game.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 3](./index.html)</sub>
