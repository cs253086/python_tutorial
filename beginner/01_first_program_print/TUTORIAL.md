# Lesson 01: First Program with `print()`

Welcome to lesson 01.

In this lesson, you will learn how to:
- show text on the screen with `print()`
- write string text correctly
- run a Python file from the terminal

At the end, you will make the first part of your game: a welcome screen for **Treasure Hunt**.

---

## What is `print()`?

`print()` is a Python command that shows text on the screen.

Example:

```python
print("Hello!")
```

When you run the program, Python displays:

```text
Hello!
```

---

## 1) Create your lesson folder

Open terminal and run:

```bash
mkdir -p ~/kids_python_tutorial/beginner/01_first_program_print
cd ~/kids_python_tutorial/beginner/01_first_program_print
```

---

## 2) Create your first program file

Create a file named `first_program.py`.

Add this code:

```python
print("Welcome to Treasure Hunt!")
print("You are a brave explorer.")
print("Let's find the hidden treasure!")
```

Run the file:

```bash
python3 first_program.py
```

If you see 3 lines of output, mission success.

---

## 3) Strings: text inside quotes

In Python, text is called a **string**.

Strings must be inside quotes:

```python
print("This is a string")
```

You can use double quotes `"` or single quotes `'`:

```python
print("Treasure")
print('Treasure')
```

Both are valid.

---

## 4) Common mistakes

### Mistake A: missing quote

```python
print("Hello)
```

This causes an error. Fix by closing the quote.

### Mistake B: missing parenthesis

```python
print("Hello"
```

Fix by adding the closing `)`.

### Mistake C: typo in command

```python
pritn("Hello")
```

`pritn` is wrong spelling. Use `print`.

---

## 5) Game mini-step: intro screen

Now create `game_intro.py` and add:

```python
print("================================")
print("      TREASURE HUNT GAME")
print("================================")
print("Goal: Find treasure before you run out of lives.")
print("Good luck, explorer!")
```

Run it:

```bash
python3 game_intro.py
```

You just built the first screen of your game.

---

## Try changing the text

Edit one line and run the file again.

When you change code, you change what the game says.
This is exactly how game development starts.

---

## New words

- **print()**: command to show output
- **string**: text in quotes
- **output**: what appears on screen after running code

---

## Mission complete when...

- [ ] I can write `print("Hello")`
- [ ] I can run `python3 first_program.py`
- [ ] I can make a game intro with multiple print lines

Next lesson: variables.
