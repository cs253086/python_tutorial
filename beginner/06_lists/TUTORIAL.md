# Lesson 06: Lists

Welcome to lesson 06.

In this lesson, you will learn how to:
- store many values in one list
- read list items by index
- update list items
- use lists for a simple game map

At the end, your game can store rooms and events in a list.

---

## What is a list?

A list is a container that holds multiple values.

Example:

```python
items = ["key", "torch", "map"]
```

This list has 3 items.

---

## 1) Create lesson folder

Open terminal and run:

```bash
mkdir -p ~/kids_python_tutorial/beginner/06_lists
cd ~/kids_python_tutorial/beginner/06_lists
```

---

## 2) Read items by index

Create `inventory_list.py`:

```python
inventory = ["torch", "rope", "apple"]

print("First item:", inventory[0])
print("Second item:", inventory[1])
print("Third item:", inventory[2])
```

List indexes start at `0`, not `1`.

---

## 3) Add and update list items

Create `inventory_update.py`:

```python
inventory = ["torch", "rope"]
print("Start:", inventory)

inventory.append("key")
print("After append:", inventory)

inventory[1] = "magic rope"
print("After update:", inventory)
```

Now your list can grow and change.

---

## 4) Loop through a list

Create `show_items.py`:

```python
inventory = ["torch", "rope", "key"]

for item in inventory:
    print("Item:", item)
```

This is a clean way to print all items.

---

## 5) Game mini-step: room map list

Create `room_map.py`:

```python
rooms = ["start", "empty", "trap", "treasure", "exit"]
position = 0

print("Current room:", rooms[position])

position = position + 1
print("Moved to:", rooms[position])

position = position + 1
print("Moved to:", rooms[position])
```

You now use a list as a tiny map path.

---

## Bonus: simple 2D map (nested list)

```python
grid = [
    ["S", ".", "."],
    [".", "T", "."],
    [".", ".", "E"]
]

print("Top-left:", grid[0][0])  # S
print("Center:", grid[1][1])    # T
```

`S` = start, `T` = treasure, `E` = exit.

---

## Common mistakes

### Mistake A: wrong index

```python
inventory = ["torch", "rope"]
print(inventory[2])
```

This fails because index 2 does not exist.

### Mistake B: forgetting brackets

Use `[]` for list creation and indexing.

### Mistake C: thinking first index is 1

In Python, first index is always `0`.

---

## New words

- **list**: ordered collection of values
- **index**: position number in a list
- **append**: add item to list end
- **nested list**: list inside another list

---

## Mission complete when...

- [ ] I can create a list
- [ ] I can read and update list items
- [ ] I can loop through a list
- [ ] I can use a list as a simple game map

Next lesson: functions to organize game code.
