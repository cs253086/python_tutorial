---
layout: default
title: "Project 6 — Step 1 — Make something"
---

<pre class="py-solution" markdown="0">
import turtle
import random
from datetime import datetime
from random import randint

# This is your blank canvas.
# Pick an idea and build it!

screen = turtle.Screen()
screen.setup(500, 500)
screen.bgcolor('skyblue')

pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)

# (the Solution button just shows this starter back to you -
#  there's no "right answer" for this project!)

screen.mainloop()
</pre>

<sub>Project 6 — Step **1** of 1</sub>

# ⭐ Step 1 — Make something

The editor below is **yours**. Pick an idea from the project
home page (or invent your own) and start typing.

## 💡 Quick recipes if you're stuck

### Guess the number
```
from random import randint
secret = randint(1, 100)
guess = int(input('Guess (1-100): '))
if guess == secret:
    print('You got it!')
elif guess < secret:
    print('Too low. The number was', secret)
else:
    print('Too high. The number was', secret)
```

### Random art (rainbow circles)
```
import turtle, random
screen = turtle.Screen()
screen.bgcolor('black')
pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)
for i in range(50):
    pen.penup()
    pen.goto(random.randint(-200, 200), random.randint(-200, 200))
    pen.color(random.choice(['red', 'orange', 'yellow', 'green', 'blue', 'purple']))
    pen.dot(random.randint(10, 60))
screen.mainloop()
```

### Pet simulator
```
name = input("What's your pet's name? ")
animal = input('What kind of animal is it? ')
food = input('What does it like to eat? ')
print(f'✨ You have a {animal} named {name}.')
print(f'🍲 {name} loves {food}!')
```

## ✏️ Your turn

Use the editor below. The starter has all the common imports
(`turtle`, `random`, `datetime`, `randint`) ready to go, plus a
blank turtle screen. Or **delete everything** and start over from
scratch — your call.

<pre class="py-starter" markdown="0">
import turtle
import random
from datetime import datetime
from random import randint

# This is your blank canvas.
# Pick an idea and build it!

screen = turtle.Screen()
screen.setup(500, 500)
screen.bgcolor('skyblue')

pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)

# YOUR CODE HERE


screen.mainloop()
</pre>

## 🔍 Tip

- **Save often.** Your code is saved in your browser as you
  type, so if you close the page and come back, it's still here.
- **Don't worry about errors.** Red is just Python's way of
  telling you something needs a tweak. Read the error, look at
  that line, try again.
- **Show someone what you made.** Bragging is half the fun.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./done.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">I made something! →</a>
</p>

<sub>[⬅ Back to Project 6](./index.html)</sub>
