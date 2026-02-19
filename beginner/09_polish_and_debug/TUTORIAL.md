# Lesson 09: Polish and Debug

Welcome to lesson 09.

In this lesson, you will learn how to:
- read error messages without panic
- debug step by step
- validate player input
- polish game text for better player experience

At the end, your game will feel cleaner and more reliable.

---

## What is debugging?

Debugging means finding and fixing mistakes in code.

Every programmer debugs.
Errors are normal, not failure.

---

## 1) Create lesson folder

Open terminal and run:

```bash
mkdir -p ~/kids_python_tutorial/beginner/09_polish_and_debug
cd ~/kids_python_tutorial/beginner/09_polish_and_debug
```

---

## 2) Read errors in 3 steps

When Python shows an error:

1. Read the last line (error type)
2. Read the line number
3. Open that line and fix the typo/syntax

Example error:

```text
SyntaxError: expected ':'
```

This usually means a missing `:` after `if`, `elif`, `else`, `while`, `for`, or `def`.

---

## 3) Add input validation

Create `validated_move.py`:

```python
def get_move():
    while True:
        move = input("Move (left/right/forward): ").strip().lower()
        if move in ["left", "right", "forward"]:
            return move
        print("Invalid move. Please type left, right, or forward.")


player_move = get_move()
print("Accepted move:", player_move)
```

This prevents invalid input from breaking game flow.

---

## 4) Improve game messages (polish)

Small improvements matter:

- clear instructions
- friendly feedback
- consistent style

Example:

```python
print("=== TREASURE HUNT ===")
print("Tip: type left, right, or forward.")
```

---

## 5) Game mini-step: polished turn

Create `polished_turn.py`:

```python
def get_valid_action():
    while True:
        action = input("Type next or quit: ").strip().lower()
        if action in ["next", "quit"]:
            return action
        print("Please type only: next or quit")


print("Welcome to Treasure Hunt!")
score = 0

for turn in range(1, 4):
    print()
    print("Turn", turn)
    action = get_valid_action()

    if action == "quit":
        print("You left the game early.")
        break

    score = score + 5
    print("Great move! Score:", score)

print()
print("Final score:", score)
```

Now your loop is safer and easier for players.

---

## Debug checklist

Before asking for help, check:

- Did I miss `:`?
- Are parentheses and quotes closed?
- Is indentation correct?
- Did I type function names correctly?
- Did I use `==` in conditions?

---

## New words

- **debug**: find and fix code errors
- **validation**: checking input before using it
- **polish**: small improvements to quality and clarity

---

## Mission complete when...

- [ ] I can read Python errors and fix simple issues
- [ ] I can validate input in a loop
- [ ] I can improve game messages and flow

Next lesson (bonus): random events.
