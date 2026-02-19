# Python Tutorial for Kids

This repository is a step-by-step Python tutorial for kids with no coding experience.

The learning goal is to build confidence first, then build toward a simple Python game.
Each lesson is in its own directory and focuses on one small topic at a time.

## Track

- `beginner/` - beginner-friendly lessons for first-time learners

## Lesson format

Each lesson directory should contain:

- `TUTORIAL.md` - guided explanation with step-by-step instructions
- `exercise.md` - hands-on practice for the lesson
- `solution.py` - runnable reference solution for the lesson

## Lesson webpages

Kid-friendly webpages are generated from lesson resources in `beginner/`:

- `TUTORIAL.md`
- `exercise.md`
- `solution.py`

Generate the site:

```bash
python3 scripts/build_beginner_site.py --source beginner --output docs
```

Then open `docs/index.html` in a browser.
