---
layout: default
title: "Class 9 — Move the snake!"
---

# Class 9 — Move the snake! 🎮

A snake that just sits there isn't a game. Today you'll make it
**slide across the board by itself**, and make the **arrow keys**
steer it.

This is a big class — 4 steps and 3 new ideas.

---

## 📜 What's a function (`def`)?

Imagine writing a **recipe** once — "make pancakes" — and then
cooking pancakes any time just by saying the recipe name. That's a
function:

```
def say_hi():
    print("Hi there!")

say_hi()   # run it
say_hi()   # run it again
```

- `def say_hi():` means *"I'm writing a new command called
  `say_hi`."*
- The lines inside (indented) are the recipe.
- `say_hi()` is how you **call** (run) it.

You can call a function as many times as you want.

## 🔔 What's `onkey`?

`onkey` is like a **doorbell** — you tell Python *"when the Up
arrow is pressed, ring this bell by running my function."*

```
screen.onkey(go_up, "Up")
screen.listen()
```

Python watches the keyboard, and the moment you press Up, your
`go_up` function runs.

## ⏰ What's `ontimer`?

`ontimer` is a **snooze button**: *"call this function again in
150 milliseconds."* If that function also calls `ontimer` at its
end, it repeats forever — and that's your **game loop**.

```
def move():
    # do stuff (move the snake, redraw)
    screen.ontimer(move, 150)   # see you in 150ms
```

Combine `ontimer` (every tick, move & redraw) with `onkey` (change
direction on arrow press) and you have a playable game.

## 🔧 List moves: `append` and `pop`

To move the snake forward, we add a **new head** at the front and
**drop the tail** from the back:

- `snake.append(new_head)` — stick something on the end
- `snake.pop(0)` — remove the thing at position 0 (the tail)

The list stays the same length. The snake slides forward by one
cell.

## 🎯 Today you'll
- Write your first `def` (`say_hi`)
- Make the snake slide on its own using `ontimer`
- Add arrow-key steering with `onkey`

- 🧩 **4 steps**
- ⏱️ About 30 minutes

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-1.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Start → Step 1</a>
</p>

<sub>[⬅ Back to all classes](../index.html)</sub>
