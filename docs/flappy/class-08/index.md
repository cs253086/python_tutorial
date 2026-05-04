---
layout: default
title: "Flappy Bird — Class 8 — Score!"
---

# Flappy Bird — Class 8 — Score! 🧮

You're flying through pipes — now they should **count**. Every
pipe you fly past should bump a score that shows at the top of
the screen.

Two ideas:

1. Each `Pipe` gets a `passed` attribute (`True` once it's been
   counted) so we don't count the same pipe twice
2. A new turtle pen `score_pen` that writes the score using
   `pen.write(...)`

## 🎯 Today you'll
- Add `self.passed = False` to `Pipe.__init__`
- Bump the score when a pipe scrolls past the bird
- Make a `score_pen` HUD that draws "Score: N" at the top

- 🧩 **2 steps**
- ⏱️ About 15 minutes
- 🆕 New Python: instance attributes that change over time, `pen.write`

Ready?

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-1.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Start → Step 1</a>
</p>

<sub>[⬅ Back to all tutorials](../../index.html)</sub>
