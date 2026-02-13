# Lesson 02: Variables

Welcome to lesson 02.

In this lesson, you will learn how to:
- store information in variables
- update variable values
- print variable values in your program

At the end, your game will remember:
- player name
- score
- lives

---

## What is a variable?

A variable is like a labeled box.

You put a value in the box, and you can use it later.

Example:

```python
player_name = "Mina"
score = 0
lives = 3
```

Here:
- `player_name` stores text
- `score` stores a number
- `lives` stores a number

---

## 1) Create lesson folder

Open terminal and run:

```bash
mkdir -p ~/kids_python_tutorial/beginner/02_variables
cd ~/kids_python_tutorial/beginner/02_variables
```

---

## 2) Create your first variables file

Create `game_status.py` and add:

```python
player_name = "Explorer"
score = 0
lives = 3

print("Player:", player_name)
print("Score:", score)
print("Lives:", lives)
```

Run:

```bash
python3 game_status.py
```

If the values print on screen, mission success.

---

## 3) Update variable values

Variables can change.

Add these lines at the end of your file:

```python
score = score + 10
lives = lives - 1

print("After one turn:")
print("Score:", score)
print("Lives:", lives)
```

Now your game tracks progress after a turn.

---

## 4) String and number variables

Python has different value types.

- String (text): `"Explorer"`
- Integer (whole number): `3`, `10`, `0`

You can store both in variables and print them together.

---

## 5) Game mini-step: player card

Create `player_card.py`:

```python
player_name = "Ari"
score = 5
lives = 2
level = 1

print("=== PLAYER CARD ===")
print("Name:", player_name)
print("Level:", level)
print("Score:", score)
print("Lives:", lives)
```

Run:

```bash
python3 player_card.py
```

You just made a basic player status screen.

---

## Common mistakes

### Mistake A: missing quotes for text

```python
player_name = Ari
```

This is wrong. Fix:

```python
player_name = "Ari"
```

### Mistake B: using spaces in variable names

```python
player name = "Ari"
```

Variable names cannot contain spaces.
Use:

```python
player_name = "Ari"
```

### Mistake C: confusing `=` and `==`

For setting a variable, use `=`.

```python
score = 10
```

---

## New words

- **variable**: named place to store a value
- **value**: information stored in a variable
- **update**: change a variable to a new value

---

## Mission complete when...

- [ ] I can create string and number variables
- [ ] I can print variable values
- [ ] I can update `score` and `lives`

Next lesson: input from the player.
