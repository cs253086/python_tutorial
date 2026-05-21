---
layout: default
title: "Project 1 — Step 10 — Roll dice"
---

<pre class="py-solution" markdown="0">
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

<sub>Project 1 — Step **10** of 16</sub>

# ⭐ Step 10 — Roll dice

➡️ Make a function called `roll_dice()` and **call** it.

For now the dice will always show `4` — we'll make it random in
a few steps.

## ✏️ What to type

**1.** Under `# Function definitions`, add:

```
def roll_dice():
    print(f'You rolled a {4}')
```

The `print` line needs to be **pushed in** by 4 spaces so Python
knows it belongs to the function. Press **Tab** at the start of
the line to add the spaces.

**2.** At the very bottom, after the date line, add a line that
**calls** the function:

```
roll_dice()
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
print(f'The date and time is {datetime.now()}')
</pre>

Tap **▶ Run**. The last line should now say:

```text
You rolled a 4
```

### 🔍 Tip

**Tab** at the start of a line types 4 spaces for you.
**Shift + Tab** removes them.

### 💡 If you get a red error

Check the `def` line ends with `():` and that the `print` line
is pushed in by 4 spaces.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-11.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 11</a>
</p>

<sub>[⬅ Back to Step 9](./step-9.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/editor-hello-world">Raspberry Pi Foundation — Hello World</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
