# alphagov/govuk-frontend context

> refreshed 2026-09-24 | upstream default: main @ 86f233319cb06e48c979f1519896f255fbcbc9d0

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

## Open issue-area notes (selector-injection cluster)

- Upstream open issues #7395 (error summary / checkboxes), #7397 (tabs getTab/getPanel), #7399 (FileUpload findLabel) report the same unescaped-‘querySelector’ interpolation class; nothing fixed yet (no `CSS.escape` anywhere in `packages/govuk-frontend/src/`). No maintainer comments/assignees.
- #7429 Enhanced File Upload Back/Forward banner bug is assigned to NickColley (in-flight – avoid).

## Gap ledger (dedupe — READ FIRST, never re-pick)

- 2026-09-08 self-found docs trivial fixes (malformed links, duplicated phrase, grammar, stale file/command refs, wrong doc line) — outcome: pr-opened — one packed trivial PR, 9 files.
- 2026-09-09 self-found docs trivial fixes (broken TOC anchors, stale file path, dead Jest link, stale test-file refs) — outcome: pr-opened — one packed trivial PR, 3 files.

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
- 2026-09-09 CONTRIBUTING.md L18 broken anchor `#supported-browsers` (heading is `Supported browsers and assistive technology`) — status: attempted (in PR).
- 2026-09-09 CONTRIBUTING.md L25 broken anchor `#running-application-tasks` (heading is `Application tasks`) — status: attempted (in PR).
- 2026-09-09 CONTRIBUTING.md L27 stale TOC entry `Versioning` (section removed 2018) — status: attempted (in PR).
- 2026-09-09 docs/contributing/managing-change.md L131 stale path `packages/tasks/config/deprecated-scripts.mjs` (now `packages/govuk-frontend/tasks/config/deprecated-scripts.mjs`) — status: attempted (in PR).
- 2026-09-09 docs/releasing/testing-and-linting.md L15 dead Jest link `facebook.github.io/jest/docs/en/snapshot-testing.html` (404; now `jestjs.io/docs/snapshot-testing`) — status: attempted (in PR).
- 2026-09-09 docs/releasing/testing-and-linting.md L88 broken anchor `css.md#linting` (heading is `Running the lint task`) — status: attempted (in PR).
- 2026-09-09 docs/releasing/testing-and-linting.md L120 stale refs `all.test.mjs` (now `all.puppeteer.test.js`) and `components/globals.test.js` (deleted; sass vars now `settings/colours.unit.test.js`) — status: attempted (in PR).

## Run ledger 2026-09-24 (issue #7399)

- `2026-09-24` upstream issue #7399 (FileUpload findLabel unescaped selector crashes on input ids with a double quote) - fixed with `CSS.escape()` in `findLabel`, added `file-upload.jsdom.test.mjs` regression test (fails with uncaught `SyntaxError` before, passes after). Verified locally (eslint, prettier, tsc, jest jsdom) + fork CI fully clean (all substantive checks green; only Percy/diff/stats skipped as fork artifacts; mergeable_state=clean). Outcome: pr-opened -> fork PR #23. Branch `fix-escape-file-upload-selector`, 1 commit.
- Sibling upstream issues still open and unpicked (future candidates): #7397 (Tabs getTab/getPanel unescaped selectors) and #7395 (error summary / checkboxes unescaped selectors). No `CSS.escape` yet in `src/`.

## Run ledger 2026-09-24 (issue #7397)

- `2026-09-24` upstream issue #7397 (Tabs getTab/getPanel unescaped selectors) - fixed with `CSS.escape()` in `getTab` (`a.govuk-tabs__tab[href="${CSS.escape(hash)}"]`) and `getPanel` (`#${CSS.escape(panelId)}`), added `tabs.jsdom.test.mjs` regression test (backslash hash crashes before / falls back after; dotted id returns null before / resolves after). Verified locally: `npm ci` on Node 24, jest `tabs.jsdom` fails-without-fix / passes-with-fix, `npm run lint` green, `git diff --check` clean. Diff 67+/2-, 2 files (under max_diff_lines 200). Fork-only PR, non-draft (pr_policy.draft:false), base=fork main, 1 commit, no AI in body/commits (ai-tells 0). Outcome: pr-opened -> fork PR #24. Branch `fix-escape-tabs-selectors`.
- Sibling upstream issue still open and unpicked (future candidate): #7395 (error summary / checkboxes unescaped selectors). No `CSS.escape` remaining gap in tabs/file-upload; #7395 is the only untouched member of the selector-injection cluster.
