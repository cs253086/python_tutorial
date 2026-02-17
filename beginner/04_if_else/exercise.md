# Exercise: If / Else Practice

Complete each part in order.

## Part A: Door choice

Create `door_choice.py`:

1. Ask: `"Choose door (1/2): "`
2. If choice is `1`, print `"You found treasure!"`
3. Else print `"Trap! Lose 1 life."`

---

## Part B: Three outcomes

Create `weather_event.py`:

1. Ask: `"Weather (sun/rain/storm): "`
2. Use `if / elif / else` to print different game events

Example idea:
- sun -> `"Easy travel. +5 score"`
- rain -> `"Slow movement"`
- storm -> `"Danger! Find shelter"`

---

## Part C: Fill in the blanks

```python
move = input("Move (left/right): ")

if move ____ "left":
    print("Safe path")
____ move == "right":
    print("Trap path")
____:
    print("Invalid move")
```

---

## Part D: Fix the bugs

Fix this code so it runs:

```python
choice = input("Path: ")
if choice = "left"
print("Good")
else
    print("Bad")
```

---

## Success checklist

- [ ] I can write `if / elif / else`
- [ ] I can compare values with `==`
- [ ] I can make different outputs from player choices
- [ ] I can fix common decision-code errors
