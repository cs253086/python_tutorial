# Exercise: Debug and Polish Practice

Complete each part in order.

## Part A: Input validator

Create `action_validator.py`:

1. Ask for action: `next` or `quit`
2. Repeat asking until input is valid
3. Print accepted action

Use:
- `while True`
- `if action in [...]`

---

## Part B: Add polished messages

In your game file from lesson 08:

1. Add a title block at the start
2. Add one help line for controls
3. Make win/lose messages friendlier

---

## Part C: Fill in the blanks

```python
while ____:
    move = input("Move: ").strip().lower()
    if move in ["left", "right"]:
        ______ move
    print("Invalid move")
```

---

## Part D: Fix the bugs

Fix this code:

```python
def get_action():
    while True
        action = input("next/quit: ").lower(
        if action in ["next", "quit"]
            return action
        print("invalid")
```

---

## Part E: Error reading practice

When you see an error, write down:

1. Error type (for example: `SyntaxError`)
2. Line number
3. What you changed to fix it

Do this for at least 2 errors while practicing.

---

## Success checklist

- [ ] I can validate player input
- [ ] I can read and use error messages
- [ ] I can improve game wording and flow
- [ ] I can fix syntax and typo mistakes faster
