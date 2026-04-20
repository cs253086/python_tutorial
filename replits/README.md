# Replit setup (one-time)

This is where we run Python in the browser on the iPad. You only set
this up **once** — after that, every class reuses the same Replit.

## Step 1 — Make a free account
1. On the iPad, open <https://replit.com> in Safari.
2. Tap **Sign up**. Use an email or a Google account (ask a grown-up).
3. Confirm the email if asked.

## Step 2 — Create the Snake Repl
1. After signing in, tap **Create Repl** (top-left, the "+" button).
2. Template: **Python**.
3. Title: `snake`.
4. Privacy: **Public** is fine.
5. Tap **Create Repl**.

You now have a workspace with:
- A file called `main.py` on the left.
- A **Run** button at the top.
- A console on the right where output appears.

## Step 3 — Rename `main.py` to `snake.py` (optional but nicer)
1. On the left, tap the three dots next to `main.py` → **Rename**.
2. Change it to `snake.py`.
3. Open the hidden `.replit` config (three dots → Show hidden files),
   and change the line that says `entrypoint = "main.py"` to
   `entrypoint = "snake.py"`.

*(If this feels fiddly, skip it. Just keep typing into `main.py` —
everything in the lessons still works.)*

## Step 4 — Tips for the iPad keyboard
- Python uses **straight quotes** `"..."`, not curly ones `"..."`.
  iPad sometimes auto-changes them. If your code has curly quotes and
  won't run, delete them and retype with the keyboard's straight `"`.
- The **Tab** key matters in Python (from Class 5 onward). Most iPad
  keyboards have it. If yours doesn't, two spaces also work.
- iPad has a long-press trick for punctuation — handy for `:`, `[`,
  `(`, etc.

## Step 5 — Pygame (we'll set this up in Class 6)
You don't need pygame yet. When we get to Class 6, we'll add one line
to a file called `replit.nix` and Replit will install pygame for us.

---

Back to [all classes](../docs/index.md).
