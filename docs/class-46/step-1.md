---
layout: default
title: "Class 46 — Step 1"
---

<pre class="py-solution" markdown="0">
import turtle

screen = turtle.Screen()
screen.setup(400, 200)

def tick():
    print("tick!")
    screen.ontimer(tick, 50)

tick()
screen.mainloop()
</pre>

<sub>Class 46 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet `ontimer`

Up to now, your Snake program runs **once** — top to bottom — and
stops. That's why the snake just sits there.

Video games are different. They have a **clock** that ticks many
times per second, redrawing the screen each time. In Python
turtle, that clock is called **`screen.ontimer`**.

---

## ⏱️ What `ontimer` does

```python
screen.ontimer(my_function, 500)
```

This is like saying:

> *"Hey Python — in **500 milliseconds**, please run
> `my_function` for me."*

(500 milliseconds = half a second.)

The cool part: if `my_function` uses `ontimer` to **ask for
another turn from inside itself**, Python runs it again, and
again, and again. **That's the game loop.**

---

## 🤖 A tiny example — try it!

The editor below has the same idea: a `tick` function that
prints `tick!` and then schedules itself to run again in 200
milliseconds.

**Tap ▶ Run.** The word **tick!** should print over and over —
about 5 times a second.

<pre class="py-starter" markdown="0">
import turtle

screen = turtle.Screen()
screen.setup(400, 200)

def tick():
    print("tick!")
    screen.ontimer(tick, 200)

tick()
screen.mainloop()
</pre>

### 🔍 What just happened

- `screen.ontimer(tick, 200)` tells Python: *"please run `tick`
  again in 200 milliseconds."*
- That line lives **inside** `tick` itself. So every time `tick`
  runs, it asks Python to run it **again** soon.
- We have to call `tick()` **once** at the bottom to start it for
  the very first time.
- `screen.mainloop()` keeps the program running so Python has
  time to come back and run `tick` again.

> 🧪 **Try this in the editor above:**
> - Change `200` to `1000`. Now it ticks once per second.
> - Change to `50`. Way faster!
> - Change `"tick!"` to your name. The screen shouts your name.

---

## 🎉 You met `ontimer`!

Next step: drop this into your **Snake** code so the board ticks.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 46](./index.html)</sub>
