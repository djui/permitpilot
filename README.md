# PermitPilot

PermitPilot is a multilingual decision wizard for finding the likely work or
residence-permit route needed to work in Switzerland.

It covers common routes for employees, employers, founders, cross-border
commuters, posted workers, families, students, and people who already hold a
Swiss status. Results separate applicant and employer actions and link to
official Swiss federal and cantonal sources.

## Languages

- English (default)
- German
- French
- Italian
- Romansh

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

PermitPilot is private, unpaid, best-effort work. It is not a Swiss government
site and does not speak for SEM, the Confederation, or any canton.

It provides general, source-backed guidance—not legal advice and not a legally
binding permit determination. The responsible Swiss canton makes the binding
decision.

The site Legal page covers privacy (answers stay in the browser; a copied
result link contains those answers; GitHub Pages may log IPs) and the limits
of reliance. The production site is `https://djui.github.io/permitpilot/`.

## Contributing

The source is at [github.com/djui/permitpilot](https://github.com/djui/permitpilot).
Issues and pull requests are welcome.
