# Exercise: Random Practice

Complete each part in order.

## Part A: Dice roller

Create `dice.py`:

1. Import `random`
2. Roll a number from 1 to 6 using `randint`
3. Print the result

---

## Part B: Random treasure

Create `treasure_or_trap.py`:

1. Use `random.choice(["treasure", "trap"])`
2. If treasure, print `"+10 score"`
3. If trap, print `"-1 life"`

---

## Part C: Random 3-turn game

Create `random_game.py`:

1. Start with `score = 0`, `lives = 3`
2. Repeat 3 turns
3. Randomly pick event from `["trap", "treasure", "empty"]`
4. Update score/lives and print status

---

## Part D: Fill in the blanks

```python
import ______

event = random.______(["trap", "treasure", "empty"])

if event == "treasure":
    score = score + __
elif event == "trap":
    lives = lives - __
```

---

## Part E: Fix the bugs

Fix this code:

```python
improt random
event = random.choice("trap", "treasure")
if event = "trap":
    print("lose life")
```

---

## Success checklist

- [ ] I can import and use `random`
- [ ] I can use `choice` and `randint`
- [ ] I can update game values from random events
- [ ] I can fix common random-related mistakes
