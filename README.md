# PermitPilot

PermitPilot is a multilingual decision wizard for finding the likely work or
residence-permit route needed to work in Switzerland.

It covers common routes for employees, employers, founders, cross-border
commuters, posted workers, families, students, and people who already hold a
Swiss status. Results separate applicant and employer actions and link to
official Swiss federal and cantonal sources.

## Languages

- English
- German
- French
- Spanish

## Local development

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Then open [http://localhost:5173/](http://localhost:5173/).

## Build

```bash
npm run build        # local static site, served from /
npm run build:pages  # GitHub Pages static site, served from /permitpilot/
```

The GitHub Pages workflow publishes `dist-pages` after every push to `main`.
The production URL is `https://djui.github.io/permitpilot/`.

## Important

PermitPilot provides general, source-backed guidance—not a legally binding
permit determination. The responsible Swiss canton makes the binding decision.
