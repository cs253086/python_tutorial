---
layout: default
title: "Project 1 — Step 9 — Functions"
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

<sub>Project 1 — Step **9** of 16</sub>

# ⭐ Step 9 — Functions

**Functions** are little chunks of code that do one job. Once
you make a function, you can use it again and again.

Here's an example:

```python
def add_one_and_one():
    x = 1 + 1
    print(x)
```

This function is called `add_one_and_one`. The two lines inside
it are **pushed in** (indented) by 4 spaces — that's how Python
knows those lines belong to the function.

To run the function you **call** it by name with `()`:

```python
add_one_and_one()
```

## ✏️ What to do

Nothing to add yet — just read the example above. Tap **▶ Run**
to check your program still works the same as last step.

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

### 🔍 Tip

Next step we'll write a `roll_dice` function for our program.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-10.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 10</a>
</p>

<sub>[⬅ Back to Step 8](./step-8.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/editor-hello-world">Raspberry Pi Foundation — Hello World</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
