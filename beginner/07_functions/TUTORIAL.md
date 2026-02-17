# Lesson 07: Functions

Welcome to lesson 07.

In this lesson, you will learn how to:
- create reusable functions with `def`
- pass information using parameters
- return values from functions
- organize game code into small parts

At the end, your game code will be cleaner and easier to read.

---

## What is a function?

A function is a named block of code.

You write it once, then call it many times.

Example:

```python
def say_hello():
    print("Hello, explorer!")

say_hello()
```

---

## 1) Create lesson folder

Open terminal and run:

```bash
mkdir -p ~/kids_python_tutorial/beginner/07_functions
cd ~/kids_python_tutorial/beginner/07_functions
```

---

## 2) Function with parameters

Create `greet_function.py`:

```python
def greet_player(name):
    print("Welcome,", name)

player_name = input("Name: ")
greet_player(player_name)
```

`name` is a parameter.
It receives the value from `player_name`.

---

## 3) Function with return value

Create `score_function.py`:

```python
def add_score(current_score, points):
    new_score = current_score + points
    return new_score

score = 0
score = add_score(score, 10)
print("Score:", score)
```

`return` sends a value back.

---

## 4) Break game into small functions

Create `mini_game_functions.py`:

```python
def show_title():
    print("=== TREASURE HUNT ===")

def get_move():
    return input("Move (left/right): ")

def apply_move(move, score):
    if move == "left":
        print("Treasure found! +10")
        return score + 10
    elif move == "right":
        print("Empty room.")
        return score
    else:
        print("Invalid move.")
        return score

show_title()
score = 0
move = get_move()
score = apply_move(move, score)
print("Score:", score)
```

Now each part has one clear job.

---

## Why functions help

- less repeated code
- easier to test one piece at a time
- easier to read and fix

---

## Common mistakes

### Mistake A: forgetting parentheses when calling

Wrong:

```python
show_title
```

Fix:

```python
show_title()
```

### Mistake B: wrong number of arguments

If function needs 2 values, pass 2 values.

### Mistake C: forgetting `return` when needed

Without `return`, result may become `None`.

---

## New words

- **function**: reusable block of code
- **parameter**: input name in function definition
- **argument**: value sent to function
- **return**: value sent back from function

---

## Mission complete when...

- [ ] I can define and call a function
- [ ] I can pass arguments to functions
- [ ] I can return and use values from functions
- [ ] I can split game logic into small functions

Next lesson: build game v1 by combining everything.
