---
layout: default
title: "Project 1 — Step 14 — Get input"
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
    max = input('How many sides on your dice?:')
    print(f'That is a D {max}')
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

<sub>Project 1 — Step **14** of 16</sub>

# ⭐ Step 14 — Get input

➡️ Ask the player how many sides they want on the dice.

We use **`input()`** to ask the player a question. Whatever they
type goes into a box.

## ✏️ What to type

At the **top** of the `roll_dice()` function (before the
`roll = randint(...)` line), add **two** lines:

```
    max = input('How many sides on your dice?:')
    print(f'That is a D {max}')
```

Keep them pushed in by 4 spaces so they stay inside the
function.

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

Tap **▶ Run**. The program will **pause** and ask:

```text
How many sides on your dice?:
```

Type a number like `20` and press **Enter**. You should see:

```text
That is a D 20
You rolled a 4 🔥🔥🔥🔥
```

(For now the roll is still 1–6. Next step we'll fix that.)

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-15.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 15</a>
</p>

<sub>[⬅ Back to Step 13](./step-13.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/editor-hello-world">Raspberry Pi Foundation — Hello World</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
