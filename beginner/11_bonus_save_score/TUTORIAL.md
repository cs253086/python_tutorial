# Lesson 11 (Bonus): Save High Score

Welcome to bonus lesson 11.

In this lesson, you will learn how to:
- write text to a file
- read text from a file
- save and load game high scores

This makes progress stay after the game closes.

---

## 1) Create lesson folder

Open terminal and run:

```bash
mkdir -p ~/kids_python_tutorial/beginner/11_bonus_save_score
cd ~/kids_python_tutorial/beginner/11_bonus_save_score
```

---

## 2) Write data to a file

Create `save_score.py`:

```python
score = 35

with open("high_score.txt", "w") as file:
    file.write(str(score))

print("Score saved!")
```

Run:

```bash
python3 save_score.py
```

This creates `high_score.txt`.

---

## 3) Read data from a file

Create `load_score.py`:

```python
with open("high_score.txt", "r") as file:
    saved_score = file.read()

print("Saved high score:", saved_score)
```

Run:

```bash
python3 load_score.py
```

---

## 4) Save only if score is higher

Create `update_high_score.py`:

```python
import os

current_score = int(input("Current score: "))
high_score = 0

if os.path.exists("high_score.txt"):
    with open("high_score.txt", "r") as file:
        content = file.read().strip()
        if content != "":
            high_score = int(content)

if current_score > high_score:
    with open("high_score.txt", "w") as file:
        file.write(str(current_score))
    print("New high score saved:", current_score)
else:
    print("High score stays:", high_score)
```

Now your best score is kept between game runs.

---

## 5) Add to your game

At game end:

1. load old high score
2. compare with current score
3. save if current score is higher

This is a great final polish feature.

---

## Common mistakes

### Mistake A: wrong file mode

- `"w"` = write (overwrites)
- `"r"` = read

### Mistake B: forgetting `str(...)` when writing numbers

`file.write` needs text.

### Mistake C: file not found on first run

Use `os.path.exists(...)` before reading.

---

## New words

- **file**: saved data on disk
- **write**: save data to file
- **read**: load data from file
- **high score**: best score achieved

---

## Mission complete when...

- [ ] I can save score to a file
- [ ] I can load score from a file
- [ ] I can update high score only when score is better

Great work. You finished the beginner tutorial track.
