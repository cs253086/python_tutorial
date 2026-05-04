---
layout: default
title: "Flappy Bird — Class 11 — Step 1"
---

<sub>Flappy Bird — Class 11 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet the dictionary

A **dictionary** is Python's "labeled box." Each value lives
behind a key (its label). You write it with curly braces `{}`.

---

## 🗂️ Make and read

```python
person = {"name": "Leo", "age": 9, "fav_color": "blue"}

print(person["name"])
print(person["age"])
print(person["fav_color"])
```

```text
Leo
9
blue
```

`person["name"]` reads the value labelled `"name"`. The keys can
be strings, the values can be any type — numbers, strings, lists,
even other dicts.

---

## ✏️ Change a value

```python
state = {"score": 0, "best": 0}

print(state["score"])
state["score"] = state["score"] + 1
state["score"] = state["score"] + 1
print(state["score"])

if state["score"] > state["best"]:
    state["best"] = state["score"]
print(state["best"])
```

```text
0
2
2
```

This is exactly the pattern we'll use for the best score.

---

## 🧠 Why a dict beats loose variables

Without a dict you'd have:

```python
score = 0
best = 0
running = True
spawn_timer = 0
```

Four globals to pass around. Inside a function you'd need
`global score`, `global best`… messy.

With a dict:

```python
state = {"score": 0, "best": 0, "running": True, "spawn_timer": 0}

def bump():
    state["score"] = state["score"] + 1
```

One thing (`state`) holds it all. Functions just read and write
its keys — no `global`, no surprises.

---

## 🎉 You learned dictionaries!

Next step: refactor the game's loose state into one tidy `state`
dict and add a "Best" line under the score.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 11](./index.html)</sub>
