---
layout: default
title: "Project 1 — Step 15 — Change the dice"
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
    roll = randint(1, int(max))
    print(f'You rolled a {roll} {fire * roll}')

# Put code to run under here
print(f'Hello {world}')
print(f'Welcome to {python}')
print(f'{python} is good at maths!')
print(f'{111111111 * 111111111}')
print(f'The date and time is {datetime.now()}')
roll_dice()
</pre>

<sub>Project 1 — Step **15** of 16</sub>

# ⭐ Step 15 — Change the dice

➡️ Use the player's chosen number of sides for the roll.

Whatever the player types in `input(...)` comes back as **text**
— even if they type a number. To use it in math, we have to
change it into a number using `int()`.

## ✏️ What to type

Change the `roll = ...` line to use `int(max)` instead of `6`:

```
    roll = randint(1, int(max))
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

Tap **▶ Run**, type `12` for a 12-sided dice, press **Enter**.
You should see:

```text
That is a D 12
You rolled a 5 🔥🔥🔥🔥🔥
```

Now the roll can be any number up to what you typed. Try a D100!

### 🔍 Tip

Changing one kind of data to another (text → number) is called
**type casting**.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-16.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 16</a>
</p>

<sub>[⬅ Back to Step 14](./step-14.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/editor-hello-world">Raspberry Pi Foundation — Hello World</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
