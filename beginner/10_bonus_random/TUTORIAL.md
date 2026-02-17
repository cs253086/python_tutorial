# Lesson 10 (Bonus): Random Events

Welcome to bonus lesson 10.

In this lesson, you will learn how to:
- use Python's `random` module
- pick random events
- make your game different each time

Randomness makes replaying the game more fun.

---

## 1) Create lesson folder

Open terminal and run:

```bash
mkdir -p ~/kids_python_tutorial/beginner/10_bonus_random
cd ~/kids_python_tutorial/beginner/10_bonus_random
```

---

## 2) Import random

Create `random_demo.py`:

```python
import random

number = random.randint(1, 6)
print("Dice roll:", number)
```

Run it multiple times:

```bash
python3 random_demo.py
```

The number changes randomly.

---

## 3) Random choice from a list

Create `random_event.py`:

```python
import random

events = ["nothing", "trap", "treasure", "potion"]
event = random.choice(events)

print("Random event:", event)
```

Now event changes every run.

---

## 4) Add random to game turn

Create `random_turn.py`:

```python
import random

score = 0
lives = 3

for turn in range(1, 6):
    event = random.choice(["trap", "treasure", "empty"])
    print("Turn", turn, "- event:", event)

    if event == "trap":
        lives = lives - 1
        print("You lost 1 life.")
    elif event == "treasure":
        score = score + 10
        print("You gained 10 score.")
    else:
        print("Nothing happened.")

    print("Score:", score, "| Lives:", lives)

    if lives <= 0:
        print("Game over.")
        break
```

This version feels new each play.

---

## 5) Optional: random room order

You can shuffle a list:

```python
import random

rooms = ["trap", "empty", "treasure", "empty"]
random.shuffle(rooms)
print(rooms)
```

`shuffle` changes list order randomly.

---

## Common mistakes

### Mistake A: forgetting `import random`

Without import, `random.choice(...)` will fail.

### Mistake B: using wrong function name

Use:
- `random.randint(a, b)`
- `random.choice(list_name)`
- `random.shuffle(list_name)`

### Mistake C: expecting same output every run

Random means output can change each time.

---

## New words

- **random**: unpredictable value or choice
- **module**: Python file with ready-made tools
- **shuffle**: mix order of list items

---

## Mission complete when...

- [ ] I can import and use `random`
- [ ] I can choose random events
- [ ] I can make game runs feel different

Next lesson (bonus): save high scores to a file.
