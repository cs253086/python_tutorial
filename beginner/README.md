# Beginner Python Tutorial Track

This track is for kids with no coding experience.

## Lessons

1. `00_install_python_ubuntu` - start Python in the browser console
2. `01_first_program_print` - learn print, strings, and game intro output
3. `02_variables` - store player name, score, and lives
4. `03_input` - ask player name and choices with input()
5. `04_if_else` - make game decisions with if / elif / else
6. `05_loops` - repeat turns with while and for loops
7. `06_lists` - store map rooms and inventory in lists
8. `07_functions` - organize game code with reusable functions
9. `08_build_game_v1` - combine all basics into a playable text game
10. `09_polish_and_debug` - improve quality and fix bugs with confidence
11. `10_bonus_random` - add random events for replayable gameplay
12. `11_bonus_save_score` - save and load high scores with files

Each lesson directory contains:
- `TUTORIAL.md`
- `exercise.md`
- `solution.py`

More lessons will be added step by step.

## Web version

Generate webpages from these lesson files:

```bash
python3 scripts/build_beginner_site.py --source beginner --output docs
```

Each lesson webpage also includes an in-browser Python console so kids can run
and edit code directly while reading.
