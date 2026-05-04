---
layout: default
title: "Flappy Bird — Class 9 — Step 1"
---

<sub>Flappy Bird — Class 9 — Step **1** of 2</sub>

# ⭐ Step 1 — Bounding boxes

Two rectangles overlap if **both** their x-ranges and y-ranges
overlap. Easier to think about the **opposite** — if either
range is fully separate, they don't touch.

---

## 📦 Two boxes, one yes/no

```python
def overlaps(ax, ay, aw, ah, bx, by, bw, bh):
    if ax + aw < bx: return False   # A entirely left of B
    if bx + bw < ax: return False   # B entirely left of A
    if ay + ah < by: return False   # A entirely below B
    if by + bh < ay: return False   # B entirely below A
    return True

print(overlaps( 0, 0, 10, 10,   5,  5, 10, 10))
print(overlaps( 0, 0, 10, 10,  20, 20, 10, 10))
print(overlaps( 0, 0, 10, 10,   3,  3,  2,  2))
```

```text
True
False
True
```

Four early `return False` lines, then `return True` at the end —
that's a clean way to say "if any of these escape clauses hit,
no overlap."

---

## 🐤 Birds and pipes

In our game:
- The **bird** is a 24×20 rectangle centered on `(bird.x, bird.y)`.
- A **pipe** is 50 wide centered on `pipe.x`. The **gap** is
  140 tall, centered on `pipe.gap_y`.

So the bird hits the pipe if **(a)** the bird's x overlaps the
pipe's x **and (b)** the bird's y is **outside** the gap.

```python
def collides(bird_x, bird_y, pipe_x, pipe_gap_y):
    if bird_x + 12 < pipe_x - 25: return False
    if bird_x - 12 > pipe_x + 25: return False
    if bird_y + 10 > pipe_gap_y + 70: return True
    if bird_y - 10 < pipe_gap_y - 70: return True
    return False

print(collides(-100,   0,  -90,   0))   # bird inside the gap
print(collides(-100, 200,  -90,   0))   # bird hit the top pipe
print(collides( -50,   0,    0,   0))   # bird far left of pipe
```

```text
False
True
False
```

---

## 🛑 Early `return` ends a function

`return` in the middle of a function says "stop right here, give
back this value." Used inside `tick()`, it means "skip the rest
of this frame and don't reschedule" — the game freezes.

```python
def show(x):
    if x < 0:
        print("negative — stopping early")
        return
    print("x =", x)
    print("done")

show(5)
show(-3)
```

```text
x = 5
done
negative — stopping early
```

---

## 🎉 You learned how to detect crashes!

Next step: drop `collides` into the game and stop `tick` when it
returns `True`.

<p style="text-align:center;margin:2.5em 0;">
  <a href="./step-2.html" style="display:inline-block;background:#FFD23F;color:#1a1a1a;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:1.25em;font-weight:bold;">Next → Step 2</a>
</p>

<sub>[⬅ Back to Class 9](./index.html)</sub>
