# Python Snake Tutorial for Kids

A 12-class Python course for a 9-year-old who already knows Scratch. Each
class teaches one Python concept; that lesson's code is added directly
into a single growing Snake program. By Class 12, the kid has built a
full Google-style Snake game himself.

## Who this is for
- **Kid age**: ~9, comfortable reading, has done Scratch.
- **Device**: iPad with a keyboard (everything runs in the browser).
- **Parent time**: ~30–45 min per class, once or twice a week.

## How it works
- **Lessons**: open the [tutorial website](./docs/index.md) on Safari.
- **Coding**: Classes 1–5 use [Trinket](https://trinket.io) (free,
  kid-friendly, no install). See [`docs/setup.md`](./docs/setup.md).
  The platform for Classes 6–12 (pygame graphics) is chosen at Class 5.
- **The game grows**: every class adds new lines to the kid's `snake`
  trinket. The reference copy lives at `game/snake.py`.

## Class list
1. `print` and comments — the welcome banner
2. Variables — score and player name *(coming soon)*
3. `input()` — asking the player their name *(coming soon)*
4. `if / elif / else` — end-of-game message *(coming soon)*
5. `while` loops — the game loop *(coming soon)*
6. `import pygame` — open the green window *(coming soon)*
7. `for` loops — draw the checkerboard *(coming soon)*
8. Lists & tuples — the snake body *(coming soon)*
9. Keyboard events — arrow-key steering *(coming soon)*
10. Functions — tidy up the code *(coming soon)*
11. `random` module — spawn the apple *(coming soon)*
12. Collisions & game over — the full game *(coming soon)*

## One-time setup (parent)
1. **Enable GitHub Pages** for this repo: Settings → Pages → Source:
   *Deploy from a branch* → Branch: `main` → Folder: `/docs` → Save.
   The site goes live at `https://<your-user>.github.io/python_tutorial/`.
2. **Make a free Trinket account** at <https://trinket.io>. Create
   one Python trinket named `snake` that the kid keeps adding to every
   class (instructions in [`docs/setup.md`](./docs/setup.md)).
3. Open the landing page on the kid's iPad and start at Class 1.

## Repo layout
```
docs/             lesson website (GitHub Pages)
game/snake.py     reference copy of the game, grown class by class
```
