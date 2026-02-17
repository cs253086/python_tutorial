# Exercise: Save and Load Score

Complete each part in order.

## Part A: Save your score

Create `save_my_score.py`:

1. Ask user for score
2. Save score to `my_score.txt`
3. Print confirmation

---

## Part B: Load your score

Create `load_my_score.py`:

1. Read `my_score.txt`
2. Print loaded score

---

## Part C: High score updater

Create `high_score_game.py`:

1. Ask for current score
2. Read old high score from `high_score.txt` (if exists)
3. Save new score only if it is higher
4. Print final high score

---

## Part D: Fill in the blanks

```python
with open("high_score.txt", "__") as file:
    file._____(str(score))

with open("high_score.txt", "__") as file:
    old_score = file.____()
```

---

## Part E: Fix the bugs

Fix this code:

```python
score = 40
with open("high_score.txt", "w") as f
    f.write(score)

with open("high_score.txt", r) as f:
    print(f.read)
```

---

## Success checklist

- [ ] I can write text data to a file
- [ ] I can read text data from a file
- [ ] I can compare and update high score
- [ ] I can fix common file I/O mistakes
