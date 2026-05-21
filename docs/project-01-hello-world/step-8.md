---
layout: default
title: "Project 1 — Step 8 — Print the date"
---

<pre class="py-solution" markdown="0">
# imports
from datetime import datetime

# variables
world = '🌍🌎🌏'
python = 'Python 🐍'
fire = '🔥'

# Function definitions

# Put code to run under here
print(f'Hello {world}')
print(f'Welcome to {python}')
print(f'{python} is good at maths!')
print(f'{111111111 * 111111111}')
print(f'The date and time is {datetime.now()}')
</pre>

<sub>Project 1 — Step **8** of 16</sub>

# ⭐ Step 8 — Print the date

➡️ Show the current date and time on the screen.

The `datetime` module has a function called `now()` that gives
back the current date and time. We can use it inside an
f-string.

## ✏️ What to type

Add another `print` line at the bottom:

```
print(f'The date and time is {datetime.now()}')
```

<pre class="py-starter" markdown="0">
# imports
from datetime import datetime

# variables
world = '🌍🌎🌏'
python = 'Python 🐍'
fire = '🔥'

# Function definitions

# Put code to run under here
print(f'Hello {world}')
print(f'Welcome to {python}')
print(f'{python} is good at maths!')
print(f'{111111111 * 111111111}')
</pre>

Tap **▶ Run**. You should see a new line at the end with the
current date and time (yours will be different from this):

```text
Hello 🌍🌎🌏
Welcome to Python 🐍
Python 🐍 is good at maths!
12345678987654321
The date and time is 2026-05-22 15:34:10.148000
```

### 💡 If you get a red error

Check all your brackets `()` and curly brackets `{}` are opened
and closed correctly.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-9.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 9</a>
</p>

<sub>[⬅ Back to Step 7](./step-7.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/editor-hello-world">Raspberry Pi Foundation — Hello World</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
