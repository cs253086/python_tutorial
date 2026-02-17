# Exercise: Build and Customize Game v1

Complete each part in order.

## Part A: Run the base game

1. Copy the tutorial code into `treasure_hunt_v1.py`
2. Run:

```bash
python3 treasure_hunt_v1.py
```

3. Play once until win or game over

---

## Part B: Customize the game

Make all these changes:

1. Change game title text
2. Change starting lives from 3 to 5
3. Change treasure bonus from +20 to +30
4. Add one new room in the `rooms` list

---

## Part C: Add one new room event

Add room type `"healer"` that gives +1 life.

Update both:
- `rooms` list
- `handle_room(...)` logic

---

## Part D: Fill in the blanks

```python
rooms = ["start", "trap", "treasure", "exit"]
position = 0
score = 0
lives = 3

while lives ____ 0 and position < ______(rooms):
    room = rooms[position]
    if room == "trap":
        lives = lives - 1
    elif room == "treasure":
        score = score + __
    elif room == "exit":
        print("You win!")
        _____

    position = position + 1
```

---

## Part E: Fix the bugs

Fix this code:

```python
rooms = ["start", "trap", "exit"]
position = 0

while position < len(rooms)
    room = rooms[position]
    if room = "trap":
        print("Lose life")
    position = position + 1
```

---

## Success checklist

- [ ] I can run a complete text game
- [ ] I can customize score, lives, and rooms
- [ ] I can add a new room event
- [ ] I can debug common game-loop issues
