---
layout: default
title: "Flappy Bird — Class 11 — Best score"
---

# Flappy Bird — Class 11 — Best score 📒

The game forgets your **best** score across runs. Today you'll
fix that, and meet the perfect Python tool for the job:
**dictionaries**.

A dictionary is a "labeled box" — `state["score"]`, `state["best"]`,
`state["running"]`. Each value lives behind a name. Lots more
readable than a tangle of separate variables.

## 🎯 Today you'll
- Replace `score = [0]` and `running = [True]` with a single
  `state = {"score": 0, "best": 0, "running": True}`
- Update every reference to use `state["…"]` instead
- In `game_over`, bump `state["best"]` if `state["score"]`
  beat it
- HUD shows both **Score** and **Best**

- 🧩 **2 steps**
- ⏱️ About 15 minutes
- 🆕 New Python: dictionaries — `{}`, `d["key"]`

Ready?

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-1.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Start → Step 1</a>
</p>

<sub>[⬅ Back to all tutorials](../../index.html)</sub>
