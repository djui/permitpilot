---
name: update-permit-logic
description: Research official Swiss work and residence permit sources and update the navigator when encoded routes, quotas, eligibility, paperwork, or links are stale. Use when the user asks to research permit rules, refresh SEM/ch.ch/EasyGov guidance, update the permit engine, or re-check History review dates.
---

# Update permit logic

Research **primary** official sources, then change [`app/permit-engine.ts`](../../../app/permit-engine.ts) only when that official text changed. History is the public record. Do not write a research-notes file into the repo.

Official URLs: [sources.md](sources.md).

## Workflow

1. Read `resolveRoute`, `routeDef`, `sources`, `cantons`, and the “last reviewed” strings (`ui.*.verified`, `ui.*.reviewed`) in `app/permit-engine.ts`.
2. Fetch the pages in [sources.md](sources.md). Follow every claim to the page that owns it. No blogs, news recaps, or secondary write-ups.
3. Diff against encoded logic: EU/EFTA L/B/G and 90-day notification; third-country admission and quotas; posted/UK services; family reunification; asylum/protection employment; third-country G; cantonal starting points.
4. **If official rules changed:** update routing, actions, docs, and source links. Copy in every current `Lang`. The canton remains the deciding authority. Do not invent uncommon routes; keep `specialist`.
5. **Always** add a `kind: "rules"` entry at the top of `historyEntries` in [`app/history.ts`](../../../app/history.ts) and refresh `historyUi` plus `ui.*.verified` / `ui.*.reviewed`. If nothing changed, say the routes were re-checked and no further federal admission-rule change was encoded (same idea as the 20 August 2026 review). For a concrete official change, set `source: { label, url }`.
6. Run `npx tsc --noEmit` and `npm test`.

## Constraints

- Follow [`.cursor/rules/history.mdc`](../../rules/history.mdc) and [`.cursor/rules/languages.mdc`](../../rules/languages.mdc).
- Guidance only — never imply PermitPilot issues a permit.
- Skip History noise (security, typos, refactors, infra). This skill’s review is a rules event, not a product event.
