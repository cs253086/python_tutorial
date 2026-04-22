---
layout: default
title: "Class 9 — Step 1"
---

<sub>Class 9 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet `def`, `ontimer`, and `onkey`

Three new tools today. Try each example below.

---

## 📜 `def` — make your own command

Imagine writing a **recipe** once, naming it, and cooking it any
time just by saying the name. That's a function:

```python
def say_hi():
    print("Hi there!")

say_hi()
say_hi()
say_hi()
```

Tap **▶ Run**. You should see `Hi there!` **three** times.

### 🔍 Notice

- `def say_hi():` means *"I'm writing a new command called
  `say_hi`."*
- The **indented** lines are the recipe.
- `say_hi()` is how you **call** (run) the recipe. Call it as
  often as you like.

---

## 🔧 List moves — `append` and `pop`

To move the snake later, we'll add a **new head** to the front and
**drop the tail** from the back. Lists have helpers for this:

```python
snake = [(-40, 0), (-20, 0), (0, 0)]

snake.append((20, 0))
print(snake)

snake.pop(0)
print(snake)
```

Run it. The first print shows a 4-part snake with `(20, 0)` on the
end. The second shows it shifted forward by one, back to 3 parts.

### 🔍 Notice

- `list.append(x)` — stick `x` on the **end**.
- `list.pop(0)` — remove the thing at position `0` (the start).
- Do both → the list stays the same length but **slides forward**.

---

## ⏰ `ontimer` — a snooze button

`screen.ontimer(fn, ms)` says *"call function `fn` again in `ms`
milliseconds."* If `fn` calls `ontimer` again at its end, it
repeats forever — that's a **game loop**.

You'll see this in the next step. Just know: `ontimer` + a
function calling itself = animation.

---

## 🔔 `onkey` — a doorbell for keys

`screen.onkey(fn, "Up")` means *"when the Up arrow is pressed,
run `fn`."* Combined with `screen.listen()` to start listening,
this is how arrow-key steering works.

```python
screen.listen()
screen.onkey(go_up,    "Up")
screen.onkey(go_down,  "Down")
screen.onkey(go_left,  "Left")
screen.onkey(go_right, "Right")
```

Don't worry about running this yet — we'll wire it up in the next
step.

---

## 🎉 You know the tools!

Next step: put `def`, `ontimer`, and `onkey` together to make your
snake slide and steer.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 9](./index.html)</sub>
