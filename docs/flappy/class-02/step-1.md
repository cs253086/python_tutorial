---
layout: default
title: "Flappy Bird — Class 2 — Step 1"
---

<sub>Flappy Bird — Class 2 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet `class`

A **class** in Python is a **blueprint**. From one blueprint you
can stamp out many **instances** — each with its own data.

---

## 🍪 The cookie-cutter idea

```python
class Cookie:
    def __init__(self, flavor):
        self.flavor = flavor

choco = Cookie("chocolate chip")
ginger = Cookie("ginger")

print(choco.flavor)
print(ginger.flavor)
```

```text
chocolate chip
ginger
```

### 🔍 Notice

- `class Cookie:` — blueprint named **Cookie**.
- `__init__(self, flavor)` — runs **once** when you stamp a new
  cookie. It says "fill in this cookie's data."
- `self.flavor = flavor` — store the flavor **on this cookie**.
- `Cookie("chocolate chip")` — stamp one cookie with that flavor.
- `choco.flavor` — read **this** cookie's flavor.

---

## 🐤 Try with a Bird

```python
class Bird:
    def __init__(self, x, y):
        self.x = x
        self.y = y

b = Bird(-100, 0)
print(b.x, b.y)
```

```text
-100 0
```

The bird **knows** where it is. Two birds would each have their
own `x` and `y`.

---

## 🛠️ Add a method

A **method** is a function that lives inside a class. The first
parameter is always `self` — that's "this particular bird."

```python
class Bird:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def describe(self):
        print("I'm a bird at", self.x, self.y)

b = Bird(-100, 50)
b.describe()
```

```text
I'm a bird at -100 50
```

`b.describe()` is read as **"call describe on b"** — Python passes
`b` in as `self` automatically.

---

## 🎉 You met classes!

Next step: build the real `Bird` class for our game, give each
bird **its own turtle pen**, and draw a body + eye + beak.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 2](./index.html)</sub>
