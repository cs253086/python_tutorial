---
layout: default
title: "Flappy Bird — Class 4 — Step 1"
---

<sub>Flappy Bird — Class 4 — Step **1** of 2</sub>

# ⭐ Step 1 — Functions are values

In Python, a function (or a method) is **a value**, just like
a number or a string. You can store it, pass it, and **call it
later**.

---

## 🧪 Pass a function as a value

```python
def shout():
    print("HELLO!")

later = shout
later()
later()
```

```text
HELLO!
HELLO!
```

`later` and `shout` point to the **same** function. Notice we
wrote `later = shout`, not `later = shout()`. The parentheses
**call** the function — without them you just get the function
itself as a value.

---

## 🐤 Bound methods

When you grab a method off a copy of a class (like `bird.flap`),
Python remembers **which copy** it came from. That's called a
**bound method** — the method is "bound" to that one bird.

```python
class Bird:
    def __init__(self, name):
        self.name = name
    def chirp(self):
        print(self.name, "chirped!")

a = Bird("Yellow")
b = Bird("Blue")

a_chirp = a.chirp
b_chirp = b.chirp

a_chirp()
b_chirp()
```

```text
Yellow chirped!
Blue chirped!
```

`a_chirp` already knows `self` is `a`. We don't have to pass it.

---

## ⌨️ `onkey` wants a function

Turtle's `screen.onkey(fn, "key-name")` says "when the user
presses **key-name**, call **fn**."

```python
import turtle
screen = turtle.Screen()
screen.bgcolor("#70C5CE")
screen.setup(300, 200)

def say_hi():
    print("hi!")

screen.listen()
screen.onkey(say_hi, "space")

screen.mainloop()
```

Tap **▶ Run**, then **click the canvas** so it can hear keys, then
press SPACE a few times. The output area shows "hi!" each press.

### 🔍 Notice

- `screen.listen()` — must call this **once** so the screen
  starts listening for key presses.
- `screen.onkey(say_hi, "space")` — pass the function **without
  parentheses**. We don't want to call it now; we want to **give
  it** to the screen so it can call it later.

---

## 🎉 You know how to give the screen a function!

Next step: connect `bird.flap` to SPACE so the bird can fight
gravity.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 4](./index.html)</sub>
