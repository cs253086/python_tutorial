# Lesson 04: If / Else Decisions

Welcome to lesson 04.

In this lesson, you will learn how to:
- make decisions with `if`
- handle other cases with `elif` and `else`
- use player choices to change game outcomes

At the end, your game can react to choices like:
- left path -> safe
- right path -> trap
- unknown choice -> ask again

---

## What is `if`?

`if` lets your program choose what to do.

Example:

```python
choice = "left"

if choice == "left":
    print("You found a safe path.")
```

If the condition is true, that block runs.

---

## 1) Create lesson folder

Open terminal and run:

```bash
mkdir -p ~/kids_python_tutorial/beginner/04_if_else
cd ~/kids_python_tutorial/beginner/04_if_else
```

---

## 2) First decision program

Create `path_check.py`:

```python
choice = input("Choose a path (left/right): ")

if choice == "left":
    print("Great! You found a torch.")
else:
    print("Oh no! You stepped on a trap.")
```

Run:

```bash
python3 path_check.py
```

Try typing `left`, then run again and type `right`.

---

## 3) Add `elif` for more options

Create `room_event.py`:

```python
room = input("Enter room color (red/blue/gold): ")

if room == "red":
    print("A tiny spider appears. You lose 1 life.")
elif room == "blue":
    print("You found a potion. +1 life.")
elif room == "gold":
    print("Treasure chest! +20 score.")
else:
    print("That room does not exist.")
```

Now your game can handle many choices.

---

## 4) Conditions use `==`

To compare values, use `==`.

```python
if choice == "left":
    print("Correct path")
```

Do not use `=` in conditions.
`=` is for setting values.

---

## 5) Game mini-step: first turn logic

Create `game_turn.py`:

```python
player_name = input("Name: ")
move = input("Move (left/right/forward): ")

if move == "left":
    print(player_name, "found treasure! +10 score")
elif move == "right":
    print(player_name, "met a trap! -1 life")
elif move == "forward":
    print(player_name, "found nothing. Keep going.")
else:
    print("Invalid move. Try left, right, or forward.")
```

Run:

```bash
python3 game_turn.py
```

You just added decision logic to your game.

---

## Common mistakes

### Mistake A: using `=` instead of `==`

Wrong:

```python
if move = "left":
```

Fix:

```python
if move == "left":
```

### Mistake B: missing colon `:`

Wrong:

```python
if move == "left"
    print("Safe")
```

Fix:

```python
if move == "left":
    print("Safe")
```

### Mistake C: wrong indentation

The line under `if` must be indented.

---

## New words

- **condition**: true/false check
- **branch**: one possible path in code
- **elif**: "else if" for another condition

---

## Mission complete when...

- [ ] I can write `if`, `elif`, and `else`
- [ ] I can compare with `==`
- [ ] I can make game events based on player input

Next lesson: loops for repeating turns.
