# Lesson 05: Loops

Welcome to lesson 05.

In this lesson, you will learn how to:
- repeat actions with `while`
- repeat a fixed number of times with `for`
- build a simple game turn loop

At the end, your game can run multiple turns automatically.

---

## What is a loop?

A loop repeats code.

Without loops, you would copy the same lines again and again.

With loops, Python repeats for you.

---

## 1) Create lesson folder

Open terminal and run:

```bash
mkdir -p ~/kids_python_tutorial/beginner/05_loops
cd ~/kids_python_tutorial/beginner/05_loops
```

---

## 2) `while` loop basics

Create `while_countdown.py`:

```python
lives = 3

while lives > 0:
    print("Lives left:", lives)
    lives = lives - 1

print("Game over")
```

Run:

```bash
python3 while_countdown.py
```

The loop keeps running while the condition is true.

---

## 3) `for` loop basics

Create `for_steps.py`:

```python
for step in range(1, 6):
    print("Step", step)
```

This prints steps 1 to 5.

---

## 4) Game turn loop with `while`

Create `game_loop.py`:

```python
score = 0
turn = 1

while turn <= 3:
    move = input("Turn " + str(turn) + " - move (left/right): ")

    if move == "left":
        score = score + 10
        print("Treasure! +10")
    elif move == "right":
        print("Nothing here.")
    else:
        print("Invalid move.")

    print("Score:", score)
    turn = turn + 1

print("Final score:", score)
```

Now you have repeating game turns.

---

## 5) Stop loops carefully

Every `while` loop must update something.
If not, it may run forever.

Bad example:

```python
count = 0
while count < 5:
    print(count)
```

`count` never changes, so loop never ends.

Fix:

```python
count = 0
while count < 5:
    print(count)
    count = count + 1
```

---

## Common mistakes

### Mistake A: forgetting to change the loop variable

Causes infinite loop.

### Mistake B: wrong indentation

Loop body must be indented.

### Mistake C: using `=` inside condition

Use comparisons like `turn <= 3`, not assignment.

---

## New words

- **loop**: repeated code block
- **while loop**: repeats while condition is true
- **for loop**: repeats over a sequence/range
- **infinite loop**: loop that never stops

---

## Mission complete when...

- [ ] I can write a `while` loop
- [ ] I can write a `for` loop
- [ ] I can make a turn-based game loop

Next lesson: lists for maps and data groups.
