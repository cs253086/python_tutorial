---
layout: default
title: "Project 1 — Step 7 — Using modules"
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
</pre>

<sub>Project 1 — Step **7** of 16</sub>

# ⭐ Step 7 — Using modules

➡️ Bring in the `datetime` module so we can use dates.

Python comes with lots of **modules** — packs of extra tools. To
use one, you need to **import** it first.

The `datetime` module helps with anything to do with dates and
times.

## ✏️ What to type

At the very top, under the `# imports` line, add:

```
from datetime import datetime
```

<pre class="py-starter" markdown="0">
# imports

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

Tap **▶ Run**. The output stays the **same** — we imported the
tool but haven't used it yet. We'll use it next step.

### 🔍 Tip

Any line with `#` in front is a **comment**. Python ignores it.
Comments are notes from you to you (or to whoever reads your
code).

### 💡 If you get a red error

Check that you spelled `datetime` correctly, and it's all
lowercase.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-8.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 8</a>
</p>

<sub>[⬅ Back to Step 6](./step-6.html)</sub>

---

<sub>Adapted from <a href="https://projects.raspberrypi.org/en/projects/editor-hello-world">Raspberry Pi Foundation — Hello World</a> under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</sub>
