---
layout: default
title: "Class 12 — Step 2"
---

<sub>Class 12 — Step **2** of 3</sub>

# ⭐ Step 2 — Don't bite yourself!

Now let's check if the snake's head runs into its own body.

Right below your wall-check inside `move()`, add:

```python
    if new_head in snake:
        game_over()
        return
```

That's it — **one line** does the whole check! Python's `in`
operator looks through the list for you.

## Play it

Tap **▶ Run**. Steer your snake to eat apples. It'll grow longer
and longer.

Now **try to make it bite itself** — loop the head around into
your own tail.

🎉 **GAME OVER!** appears again, with your score.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-3.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 3</a>
</p>

<sub>[⬅ Back to Step 1](./step-1.html)</sub>
