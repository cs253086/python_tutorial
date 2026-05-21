---
layout: default
title: "Project 1 — Step 13 — Multiply strings"
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
    roll = randint(1, 6)
    print(f'You rolled a {roll} {fire * roll}')

# Put code to run under here
print(f'Hello {world}')
print(f'Welcome to {python}')
print(f'{python} is good at maths!')
print(f'{111111111 * 111111111}')
print(f'The date and time is {datetime.now()}')
roll_dice()
</pre>

<sub>Project 1 — Step **13** of 16</sub>

# ⭐ Step 13 — Multiply strings

➡️ Print one 🔥 for every point on the dice.

In Python you can **multiply** a word (or an emoji) by a number
and it repeats that many times! `'🔥' * 4` becomes `'🔥🔥🔥🔥'`.

## ✏️ What to type

Replace the inside of `roll_dice()` with **two** lines:

```
    roll = randint(1, 6)
    print(f'You rolled a {roll} {fire * roll}')
```

The first line saves the random number into a box called `roll`.
The second line prints the number AND that many fire emojis.

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
    print(f'You rolled a {randint(1, 6)}')

# Put code to run under here
print(f'Hello {world}')
print(f'Welcome to {python}')
print(f'{python} is good at maths!')
print(f'{111111111 * 111111111}')
print(f'The date and time is {datetime.now()}')
roll_dice()
</pre>

Tap **▶ Run**. You should see something like:

```text
You rolled a 4 🔥🔥🔥🔥
```

The number of fires matches the dice roll. 🔥

### 💡 If you get a red error

Make sure both lines inside the function are pushed in by 4
spaces (use Tab).

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-14.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 14</a>
</p>

<sub>[⬅ Back to Step 12](./step-12.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/editor-hello-world">Raspberry Pi Foundation — Hello World</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
