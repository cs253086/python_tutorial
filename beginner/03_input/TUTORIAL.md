# Lesson 03: Input from the Player

Welcome to lesson 03.

In this lesson, you will learn how to:
- ask the player for input
- store answers in variables
- use player choices in your game

At the end, your game can ask:
- player name
- move direction

---

## What is `input()`?

`input()` asks the user to type something.

Example:

```python
name = input("What is your name? ")
print("Hello,", name)
```

When the player types a name, Python stores it in `name`.

---

## 1) Create lesson folder

Open terminal and run:

```bash
mkdir -p ~/kids_python_tutorial/beginner/03_input
cd ~/kids_python_tutorial/beginner/03_input
```

---

## 2) First input program

Create `ask_name.py` and add:

```python
player_name = input("Enter your explorer name: ")
print("Welcome,", player_name)
```

Run:

```bash
python3 ask_name.py
```

Type a name and press Enter.

---

## 3) Ask for a game choice

Create `choose_move.py`:

```python
move = input("Choose a move (left/right): ")
print("You chose:", move)
```

Run:

```bash
python3 choose_move.py
```

Now your game can listen to the player.

---

## 4) Input is text by default

Important:
`input()` gives a string (text), not a number.

Example:

```python
lives_text = input("How many lives? ")
print("You typed:", lives_text)
```

If you need a number, convert it with `int()`:

```python
lives = int(input("How many lives? "))
print("Starting lives:", lives)
```

---

## 5) Game mini-step: start screen with name and move

Create `game_start.py`:

```python
print("=== TREASURE HUNT ===")
player_name = input("What is your name? ")
print("Hello,", player_name)

move = input("Choose your first move (left/right): ")
print(player_name, "moves", move)
```

Run:

```bash
python3 game_start.py
```

You now have a game that talks with the player.

---

## Common mistakes

### Mistake A: forgetting parentheses

```python
name = input
```

Fix:

```python
name = input("What is your name? ")
```

### Mistake B: forgetting quotes in message

```python
name = input(What is your name?)
```

Fix:

```python
name = input("What is your name? ")
```

### Mistake C: typing text when `int()` is used

If code uses:

```python
age = int(input("Age: "))
```

and player types `ten`, Python errors.
Type numbers like `10`.

---

## New words

- **input()**: asks user for typed text
- **prompt**: the message shown before typing
- **convert**: change one type to another (like text to number)

---

## Mission complete when...

- [ ] I can ask for player name with `input()`
- [ ] I can store and print player input
- [ ] I understand `input()` returns text

Next lesson: if/else decisions.
