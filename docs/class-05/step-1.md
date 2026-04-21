---
layout: default
title: "Class 5 — Step 1"
---

<sub>Class 5 — Step **1** of 3</sub>

# ⭐ Step 1 — Your first `while`

A **`while` loop** keeps doing the same thing **as long as** a rule
is true.

At the bottom of the code below, add this test:

```python
count = 3
while count > 0:
    print(count)
    count = count - 1
print("Done!")
```

Tap **▶ Run**.

You should see:

```
3
2
1
Done!
```

## 🎉 You made a loop!

Here's what Python did:
1. Set `count` to `3`.
2. Check the rule: is `count > 0`? Yes → print it, subtract 1.
3. Check again: is `2 > 0`? Yes → print, subtract 1.
4. Again: `1 > 0`? Yes → print, subtract 1.
5. Now `count` is `0`. The rule is **false**. Loop ends.
6. Print `Done!`.

> ⚠️ **Careful**: if you forget the `count = count - 1` line, the
> loop never ends. That's called an **infinite loop** — it just
> keeps going forever!

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 5](./index.html)</sub>
