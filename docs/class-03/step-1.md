---
layout: default
title: "Class 3 — Step 1"
---

<sub>Class 3 — Step **1** of 2</sub>

# ⭐ Step 1 — Meet `input`

Imagine a cashier asking *"cash or card?"* — they don't move until
you answer. That's exactly what `input` does:

```python
answer = input("What's your favorite color? ")
print(answer)
```

Tap **▶ Run**. The output area will **wait**. Type a color (like
`blue`) and press Enter. You should see it printed right back.

### 🔍 Notice

- `input("... ")` shows the question and **pauses** Python until
  you type something and press Enter.
- Whatever you type gets **put into the box** on the left of `=`
  (here, `answer`). Then you can use it like any variable.

---

## 🔢 One thing to know: `input` always gives words

Even if you type `42`, `input` hands back the **word** `"42"`, not
the number. That's fine for us today — we only need names.

---

## 🎉 You know how to ask!

Next step: use `input` in your Snake game so it greets the real
player, not a hardcoded `"Leo"`.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#2ea44f;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 3](./index.html)</sub>
