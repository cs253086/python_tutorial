---
layout: default
title: "Project 1 — Step 11 — Import randint"
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
    print(f'You rolled a {4}')

# Put code to run under here
print(f'Hello {world}')
print(f'Welcome to {python}')
print(f'{python} is good at maths!')
print(f'{111111111 * 111111111}')
print(f'The date and time is {datetime.now()}')
roll_dice()
</pre>

<sub>Project 1 — Step **11** of 16</sub>

# ⭐ Step 11 — Import randint

➡️ Bring in another module called `random` — it can pick random
numbers for us.

## ✏️ What to type

Under your existing `from datetime` line, add:

```
from random import randint
```

<pre class="py-starter" markdown="0">
# imports
from datetime import datetime

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

Tap **▶ Run**. The output stays the **same** as last step. We
imported a tool but haven't used it yet.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-12.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 12</a>
</p>

<sub>[⬅ Back to Step 10](./step-10.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/editor-hello-world">Raspberry Pi Foundation — Hello World</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
