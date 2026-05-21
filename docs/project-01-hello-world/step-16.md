---
layout: default
title: "Project 1 — Step 16 — Over to you"
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
print(f'I ❤️ pizza')
print(f'Coding makes me 😃')
print(f'I would like to make games with {python}')
</pre>

<sub>Project 1 — Step **16** of 16</sub>

# ⭐ Step 16 — Over to you

➡️ Add **your own** print lines and make the program yours.

## ✏️ What to type

At the very bottom, after `roll_dice()`, add a few `print` lines
with your own words and emojis. Here are some ideas:

```
print(f'I ❤️ pizza')
print(f'Coding makes me 😃')
print(f'I would like to make games with {python}')
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

### 🔍 Some emojis you can copy and paste

🎊 🙃 🤣 😎 😍 🔥 🌈 🌟 💫 🎁 🎂 🎉 🦄 🚀 👾
⚽ 🏀 🏓 📚 ❤️ 💛 💚 💙 💜 🔵 🌻 ✨ 🍭 🍕 🍔

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I did it! →</a>
</p>

<sub>[⬅ Back to Step 15](./step-15.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/editor-hello-world">Raspberry Pi Foundation — Hello World</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
