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

## Builds

```bash
# Cloudflare/OpenAI Sites build
npm run build

# Static GitHub Pages build
npm run build:pages
```

The GitHub Pages workflow publishes `dist-pages` after every push to `main`.
The production Pages URL is `https://djui.github.io/permitpilot/`.

## Important

PermitPilot provides general, source-backed guidance—not a legally binding
permit determination. The responsible Swiss canton makes the binding decision.
