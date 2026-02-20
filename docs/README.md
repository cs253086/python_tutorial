# Beginner Lesson Webpages

This directory contains generated static webpages for the beginner track.

## Regenerate

From the repository root:

```bash
python3 scripts/build_beginner_site.py --source beginner --output docs
```

## Entry point

Open:

- `docs/index.html`

## In-browser Python console

Each lesson page includes a Python console powered by Pyodide.
It runs Python in the browser and needs internet access for the Pyodide CDN.
