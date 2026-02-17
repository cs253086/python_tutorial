# Lesson 08: Build Game v1

Welcome to lesson 08.

This is your first full game build.

In this lesson, you will combine:
- `print()`
- variables
- `input()`
- `if / elif / else`
- loops
- lists
- functions

At the end, you will have a playable **Treasure Hunt v1** text game.

---

## 1) Create lesson folder

Open terminal and run:

```bash
mkdir -p ~/kids_python_tutorial/beginner/08_build_game_v1
cd ~/kids_python_tutorial/beginner/08_build_game_v1
```

---

## 2) Create the full game file

Create `treasure_hunt_v1.py` and paste:

```python
def show_title():
    print("================================")
    print("      TREASURE HUNT v1")
    print("================================")


def handle_room(room, score, lives):
    if room == "start":
        print("You are at the start.")
    elif room == "empty":
        print("Empty room. Nothing happens.")
    elif room == "trap":
        print("Trap! You lose 1 life.")
        lives = lives - 1
    elif room == "treasure":
        print("Treasure found! +20 score.")
        score = score + 20
    elif room == "exit":
        print("You found the exit!")
    else:
        print("Unknown room.")

    return score, lives


def show_status(name, score, lives, room):
    print()
    print("Player:", name)
    print("Room:", room)
    print("Score:", score)
    print("Lives:", lives)
    print()


def main():
    show_title()

    player_name = input("Enter your explorer name: ")
    score = 0
    lives = 3
    rooms = ["start", "empty", "trap", "treasure", "exit"]
    position = 0

    while lives > 0 and position < len(rooms):
        current_room = rooms[position]
        show_status(player_name, score, lives, current_room)

        score, lives = handle_room(current_room, score, lives)

        if current_room == "exit":
            print("You win!")
            break

        if lives <= 0:
            print("No lives left. Game over.")
            break

        action = input("Type 'next' to move, or 'quit' to stop: ")
        if action == "next":
            position = position + 1
        elif action == "quit":
            print("You ended the game.")
            break
        else:
            print("Invalid action. Staying in current room.")

    print()
    print("Final score:", score)
    print("Thanks for playing!")


main()
```

Run:

```bash
python3 treasure_hunt_v1.py
```

---

## 3) How the game works

- `rooms` list stores the map path
- `position` tracks where player is
- `while` runs each game turn
- `if / elif / else` handles room events
- functions keep code organized

---

## 4) Try simple improvements

1. Change room order in `rooms`
2. Change trap damage (lose 2 lives)
3. Change treasure points
4. Add one more room type and event

---

## Common mistakes

### Mistake A: indentation errors

Python blocks must be aligned correctly.

### Mistake B: typo in room names

If `rooms` has `"tresure"` instead of `"treasure"`, event logic may fail.

### Mistake C: forgetting to update `position`

Without `position = position + 1`, game does not move.

---

## Mission complete when...

- [ ] The game starts and asks for player name
- [ ] You can move through rooms using `next`
- [ ] Score and lives update correctly
- [ ] You can win or lose

Next lesson: polish and debugging.
