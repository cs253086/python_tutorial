---
layout: default
title: "Project 1 — Step 12 — Random numbers"
---

<pre class="py-solution" markdown="0">
# imports
from datetime import datetime
from random import randint

# variables
world = '🌍🌎🌏'
python = 'Python 🐍'
fire = '🔥'

# Function definitions
def roll_dice():
    print(f'You rolled a {randint(1, 6)}')

# Put code to run under here
print(f'Hello {world}')
print(f'Welcome to {python}')
print(f'{python} is good at maths!')
print(f'{111111111 * 111111111}')
print(f'The date and time is {datetime.now()}')
roll_dice()
</pre>

<sub>Project 1 — Step **12** of 16</sub>

# ⭐ Step 12 — Random numbers

➡️ Use `randint` to pick a random number between 1 and 6 — like
rolling a real dice!

## ✏️ What to type

Change the line inside `roll_dice()` so the `{4}` is replaced
with `{randint(1, 6)}`:

```
print(f'You rolled a {randint(1, 6)}')
```

<pre class="py-starter" markdown="0">
# imports
from datetime import datetime
from random import randint

# variables
world = '🌍🌎🌏'
python = 'Python 🐍'
fire = '🔥'

# Function definitions
def roll_dice():
    print(f'You rolled a {4}')

# Put code to run under here
print(f'Hello {world}')
print(f'Welcome to {python}')
print(f'{python} is good at maths!')
print(f'{111111111 * 111111111}')
print(f'The date and time is {datetime.now()}')
roll_dice()
</pre>

Tap **▶ Run** a few times. The last line should now show a
**different number from 1 to 6** each time:

```text
You rolled a 6
```

### 🔍 Tip

`randint` is short for **random integer**. Integers are whole
numbers (no decimals).

### 💡 If you get a red error

Check your brackets and curly brackets. Note: it's normal for
the same number to be picked twice in a row. It's random!

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-13.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 13</a>
</p>

<sub>[⬅ Back to Step 11](./step-11.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/editor-hello-world">Raspberry Pi Foundation — Hello World</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
