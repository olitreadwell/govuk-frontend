# alphagov/govuk-frontend context
> refreshed 2026-09-08 | upstream default: main @ 6b7063b9cbf95cfbb758e4cf01e4d962b722a6eb

## Identity & policies
- upstream: alphagov/govuk-frontend, default branch `main`, primary language JavaScript (GOV.UK Design System frontend).
- English-first: yes — UK English throughout (colour/organise/behaviour are correct; do not "fix" them).
- CLA/DCO: none — CONTRIBUTING.md has no CLA/contributor-signup requirement; external PRs merge without signup.
- AI-assisted PR policy: unstated — no AI disclosure requirement found in CONTRIBUTING or .github.
- signed commits required: no.
- PR template: none — no `.github/PULL_REQUEST_TEMPLATE.md` or repo-root template. Use pipeline fallback body.
- external tracker: GitHub issues only.

## Conventions (verified from merged PRs)
- branch naming: mixed — `dependabot/*`, `fix-*`, `feature-*`, `release-*`, `bump-*`, `update-*`. No single dominant human pattern; `fix-*`/`feature-*` are common. Use `fix-<kebab>`.
- commit style: Conventional Commits `type(scope): subject` (e.g. `fix(component): ...`).
- test command: `npm test` / `npm run test`; lint: `npm run lint`; typecheck: `npm run lint:types`.
- CI gates merge: GitHub Actions (lint, unit, puppeteer, build). Percy visual checks run but need upstream secrets — a fork PR may show Percy as a fork artifact, not a real failure.
- outside PRs merge: responsive — recent external (non-dependabot) merges by romaricpascal, NickColley, 36degrees, querkmachine, owenatgov; Oli has 1 prior merged PR.

## Maintainer picture
- active maintainers: romaricpascal, NickColley (most active), 36degrees, querkmachine, owenatgov.
- in-flight areas (avoid): service navigation, language switcher, release 6.5.0, dependabot bumps.

## Issue-area health
- docs/contributing + docs/releasing are low-traffic, low-contention areas — safe for trivial doc/link/typo fixes.
- No contested/redesign signals in the docs files targeted this run.

## Gap ledger (dedupe — READ FIRST, never re-pick)
- 2026-09-08 self-found docs trivial fixes (malformed links, duplicated phrase, grammar, stale file/command refs, wrong doc line) — outcome: pr-opened — one packed trivial PR, 9 files.

## Mined gaps (discovered, not yet attempted)
- 2026-09-08 docs/contributing/testing.md L41 malformed link `[http://localhost:3000/]([http://localhost:3000/])` — status: attempted (in PR).
- 2026-09-08 docs/contributing/coding-standards/components.md L23 malformed link `'./js.md#skeleton` — status: attempted (in PR).
- 2026-09-08 docs/contributing/browser-support.md L141 duplicated phrase "polyfills or fallback mechanisms, polyfills or fallback mechanisms" — status: attempted (in PR).
- 2026-09-08 docs/contributing/coding-standards/nunjucks-api.md L3 grammar "chosen as Nunjucks as" — status: attempted (in PR).
- 2026-09-08 packages/govuk-frontend/src/README.md L75 malformed link ref `[ITCSS]: (http://...)` — status: attempted (in PR).
- 2026-09-08 pagination README L15 wrong link to /components/details/ (should be /components/pagination/) — status: attempted (in PR).
- 2026-09-08 docs/releasing/testing-and-linting.md L113 stale command `tag/accessibility.test.mjs` (now accessibility.puppeteer.test.mjs) — status: attempted (in PR).
- 2026-09-08 docs/contributing/testing.md L126 stale ref `colour.test.js` (now colour.unit.test.js) — status: attempted (in PR).
- 2026-09-08 docs/releasing/testing-and-linting.md L108 stale ref `checkboxes.test.js` (now checkboxes.puppeteer.test.js) — status: attempted (in PR).
- 2026-09-08 docs/contributing/tasks.md L78 stale ref `/gulpfile.mjs` (now /packages/govuk-frontend/gulpfile.mjs) — status: attempted (in PR).
- 2026-09-08 docs/contributing/running-locally.md L5/L27 broken `/../../.nvmrc` links (should be `/.nvmrc`) — status: attempted (in PR).
