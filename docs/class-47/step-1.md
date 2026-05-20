---
layout: default
title: "Class 47 — Step 1"
---

<pre class="py-solution" markdown="0">
import turtle

screen = turtle.Screen()
screen.setup(400, 200)

direction = "UP"

def tick():
    print(f"going {direction}")
    screen.ontimer(tick, 500)

tick()
screen.mainloop()
</pre>

<sub>Class 47 — Step **1** of 2</sub>

# ⭐ Step 1 — A box that remembers the heading

In Class 46 your `tick()` function runs over and over. Every
tick, it can **look at** any variable in the program — like
peeking inside a box on the table.

We want the snake to slide in one of four directions: **UP**,
**DOWN**, **LEFT**, or **RIGHT**. So we'll make a box called
`direction` that holds one of those words.

---

## 🧭 The `direction` variable

```python
direction = "RIGHT"
```

That's it. A box called `direction` holds the word `"RIGHT"`.

Inside the game loop, we can **read** the box every tick:

```python
import turtle

screen = turtle.Screen()
screen.setup(400, 200)

direction = "RIGHT"

def tick():
    print(f"going {direction}")
    screen.ontimer(tick, 500)

tick()
screen.mainloop()
```

You'd see:

```text
going RIGHT
going RIGHT
going RIGHT
...
```

### 🔍 What just happened

- `direction = "RIGHT"` is at the **top** of the program —
  outside `tick`.
- Inside `tick`, we **read** `direction` (we don't change it).
- The same word comes out every tick, because no one has changed
  the box.

> 🧪 **Try this in the editor below:**
> - Change `"RIGHT"` to `"UP"`. The message changes.
> - Try `"LEFT"` and `"DOWN"`.
> - Add another print line: `print("The snake heads", direction)`

---

## 🎉 You met direction!

Next step: drop `direction` into your **Snake** code and watch
the tick announce it.

<pre class="py-starter" markdown="0">
import turtle

screen = turtle.Screen()
screen.setup(400, 200)

direction = "RIGHT"

def tick():
    print(f"going {direction}")
    screen.ontimer(tick, 500)

tick()
screen.mainloop()
</pre>

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 47](./index.html)</sub>
