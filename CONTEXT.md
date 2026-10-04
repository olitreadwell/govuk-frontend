# alphagov/govuk-frontend context

> refreshed 2026-10-04 | upstream default: main @ 283cc58ead97f3e3379199976709713914e00b05 (unchanged since the 2026-10-02 refresh; no new upstream commits)

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
- commit style: plain imperative, sentence case, no Conventional Commits prefix (re-checked 2026-10-03: 0/200 recent non-merge commits on `main` use a `type(scope):` prefix, e.g. "Add CHANGELOG entry for guard fix", "Fix broken guard").
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
- #7419 (tabs, accessibility) mobile screen readers announce the decorative em-dash in the Tabs contents list; no assignee, no in-flight PR. Maintainer discussion (romaricpascal: consider CSS alt text, or draw the dash; NickColley: prefers keeping the glyph) — a fix that keeps the dash and adds empty alternative text satisfies both. Picked 2026-10-03 (fork PR #30).

## Gap ledger (dedupe — READ FIRST, never re-pick)

- 2026-09-08 self-found docs trivial fixes (malformed links, duplicated phrase, grammar, stale file/command refs, wrong doc line) — outcome: pr-opened — one packed trivial PR, 9 files.
- 2026-09-09 self-found docs trivial fixes (broken TOC anchors, stale file path, dead Jest link, stale test-file refs) — outcome: pr-opened — one packed trivial PR, 3 files.
- 2026-09-30 self-found trivial fixes (3 dead/outdated links + 8 comment/doc misspellings) — outcome: pr-opened — fork PR #16 (opened as #27, closed as duplicate and absorbed into #16; 21 files). Do NOT re-fix: the Design System Community Backlog URL `https://design-system.service.gov.uk/community/backlog/` (410 -> GitHub backlog issues) in `docs/contributing/test-components-using-accessibility-acceptance-criteria.md` and `.github/ISSUE_TEMPLATE/feature-request.md`; the stale `views/partials/_whats-new.njk` path (-> `_whats-new.md`) in `.github/ISSUE_TEMPLATE/release.md`; and the spellings `characaters`, `explicitely` (in `template.njk`), `programatically` (x2), `prefered`, `seperate`, `seperately`, `sentance`.
- 2026-10-01 self-found trivial fixes (10 comment/test-description misspellings across 9 files) — outcome: pr-opened — fork PR #28. Do NOT re-fix: `wraper`->`wrapper` and `reffering`->`referring` (file-upload/template.test.js), `reffering` (select/template.test.js, textarea/template.jsdom.test.js), `mutliple`->`multiple` (summary-list/template.test.js), `teh`->`the` (service-navigation.puppeteer.test.js), `temprarily`->`temporarily` (font-url.unit.test.js, image-url.unit.test.js), `informations`->`information` (tsconfig.base.json), `explicitely`->`explicitly` (error-summary/template.test.js).

- 2026-10-02 self-found trivial spelling fixes (6 misspelled words across 8 files) — outcome: pr-opened — fork PR #29. Do NOT re-fix: `summmaryHtml`/`summmaryText` -> `summaryHtml`/`summaryText` (`packages/govuk-frontend/src/govuk/components/details/details.yaml`); `wardobe` -> `wardrobe` (`travel-guidance`, `language-navigation-under-heading`, `language-navigation-sidebar` full-page examples); `Scoll` -> `Scroll` (`child-maintenance` full-page example); `brower` -> `browser` (`examples/javascript-errors`); `overriden` -> `overridden` (`packages/govuk-frontend/src/govuk/component.jsdom.test.mjs`); `currentVerisons` -> `currentVersions` (`shared/helpers/jest/browser/download.mjs`).
- 2026-10-03 upstream issue #7419 (Tabs contents list dash announced by screen readers on mobile) - outcome: pr-opened - fork PR #30, branch `fix-tabs-dash-screen-reader`. Kept the `content: "\2014 "` glyph and added empty alternative text (`content: "\2014 " / ""`), a fallback-safe cascade; added a phone-viewport accessibility test and a CHANGELOG `Fixes` entry. Do NOT re-pick.
- 2026-10-04 self-found trivial doc-link/reference fixes (Design System docs pages split; stale bundler file names) — outcome: pr-opened — fork PR #31, branch `fix-stale-design-system-doc-links`. Do NOT re-fix: the `importing-css-assets-and-javascript/#css`, `#javascript` and `#font-and-image-assets` anchors (now `include-css/`, `import-javascript/`, `import-font-and-images-assets/`) in `README.md`, `docs/contributing/versioning.md`, `packages/govuk-frontend/README.md`; the `importing-css-assets-and-javascript/#import-specific-parts-of-the-css` anchor (now `include-css/#include-specific-parts-of-gov-uk-frontend-using-sass`) in `docs/contributing/coding-standards/components.md`; the `updating-with-npm/#update-using-node-js-package-manager-npm` link (now `staying-up-to-date/#updating-to-the-latest-version-if-you-installed-gov-uk-frontend-using-npm`) in `docs/releasing/after-publishing-a-release.md`; and the removed `default.mjs`/`default.js` file names (now `single-component.mjs`/`single-component.js`) in `docs/contributing/tasks.md`.
- 2026-10-02 deliberately NOT fixed: `errorMessge` in `packages/govuk-frontend-review/src/views/examples/error-summary/index.njk` (misspelled `errorMessage` key that currently renders no error; fixing it changes the example’s rendered output, so it is a behaviour change, not a trivial typo). `CHANGELOG.md` historical typos (`overriden`, `unneccesarily`, `targetted`, `attrubutes`, `independantly`, `Hovever`, `fuschia`) left alone as released history. `dependant` (UK noun in test descriptions), `Github`/`Javascript` brand capitalisation, and `parth`/`ridiculus`/`varius`/`fave`/`MOT`/`Mis`/`broblem` fixtures are deliberate or dialect, not typos.

## Dedupe notes (checked, not picked)

- 2026-09-30 upstream PR #7079 (open) already fixes `commited` -> `committed` in `bin/publish-preview.sh` — do not duplicate.
- 2026-09-30 `http://getbem.com/introduction/` in `docs/contributing/coding-standards/css.md` is unreachable from this network (http 404, https connection refused) but is a whole-site outage, not a confirmed dead page; no confident replacement found, so left untouched.
- 2026-09-30 `docs/contributing/tasks.md` `npm run build:all` is not stale (script lives in `tests/bundler-integrations/package.json`); `parth`/`Parth`, `ridiculus`, `varius`, `fave`, `MOT` are deliberate fixtures/Welsh/Latin, not typos.
- 2026-10-04 the dead Design System anchors fixed in fork PR #31 also appear (unchanged) in `CHANGELOG.md` (lines around 2357–4367); left alone as released history — do not re-fix there. The `bin/publish-preview.sh` `commited` typo remains upstream PR #7079's (open) — not picked.

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

## Run ledger 2026-09-25 (issue #7395)

- `2026-09-25` upstream issue #7395 (Error summary and Checkboxes unescaped selectors) - fixed with `CSS.escape()` in `getAssociatedLegendOrLabel` (error summary link lookup, escapes the input id) and in `unCheckAllInputsExcept`/`unCheckExclusiveInputs` (checkboxes, escapes the input name). Added 2 puppeteer regression tests: error-summary clicks a link whose target input id is `child's-name` and asserts focus lands on the field; checkboxes set a name of `contact-"None"` and assert the exclusive uncheck still works. Verified: jsdom probe with css.escape shim fails on all 3 calls before the fix (SyntaxError invalid selector) and passes after; real-browser (puppeteer + Chrome) run passes with zero page errors; eslint/prettier/tsc clean. Diff +61/-4, 5 files (under max_diff_lines 200). Fork-only PR, non-draft (pr_policy.draft:false), base=fork main, 1 commit, no AI in body/commits (ai-tells 0). Fork CI fully clean (30 checks completed, 0 failed; only Percy/diff/stats skipped as fork artifacts). Outcome: pr-opened -> fork PR #25. Branch `fix-escape-error-summary-and-checkboxes-selectors` @ c105030a.
- Selector-injection cluster is now COMPLETE: #7399 (PR #23), #7397 (PR #24), and #7395 (PR #25) are all staged in the fork. No unpicked members remain.

## Run ledger 2026-10-02 (trivial spelling pass)

- `2026-10-02` self-found trivial spelling fixes, packed into one PR: 6 distinct misspelled words across 8 files, 10 lines changed (9 tokens). Verified against current upstream main (283cc58ea; the fork PR base is fork main 951506e4d, upstream minus 2 dependabot bumps). Local verification: `npm ci --ignore-scripts`, `npm run lint` (editorconfig + prettier + eslint + tsc + stylelint) exit 0, `npm run build` exit 0, `npx jest --selectProjects "Nunjucks macro tests" --testPathPatterns 'components/details'` 12/12 pass, `npx jest packages/govuk-frontend/src/govuk/component.jsdom.test.mjs` 3/3 pass, `editorconfig-checker` clean on all 8 files. Diff 8 files / 10 lines, well under max_diff_lines 200 and max_files_per_trivial_pr 10. Fork-only PR, non-draft (pr_policy.draft:false), base=fork main, 1 commit `Fix spelling mistakes in docs, examples and tests`, no AI in body/commits. Outcome: pr-opened -> fork PR #29. Branch `fix-spelling-mistakes-in-docs-and-examples` @ c85535fde. Note: the `de-ai-text` gate tool could not run here (missing `skills/de-ai-text/rules/tells.json`); a manual word-boundary grep for AI tells was clean. alphagov org policy still records `cla_required: true` (promotion flag, not a staging blocker; govuk-frontend’s own CONTRIBUTING has no CLA and prior external PRs merged without signup).

## Run ledger 2026-10-03 (issue #7419, tabs em-dash a11y)

- `2026-10-03` upstream issue #7419 (mobile screen readers announce the decorative em-dash in the Tabs contents list) - fixed without touching the glyph: `.govuk-tabs__list-item::before` keeps `content: "\2014 "` and adds `content: "\2014 " / ""`, so supporting browsers expose no accessible text while browsers without `content` alt-text support fall back to the plain declaration and still render the dash. Added an `accessibility.puppeteer.test.mjs` case that emulates an iPhone viewport and asserts the dash stays in the computed `::before` content but is absent from the accessibility tree names. Also added an `Unreleased` > `Fixes` CHANGELOG entry referencing issue #7419. Verified: test FAILS on the unfixed build (snapshot names contain the em-dash) and PASSES with the fix; `npx jest --testPathPatterns 'components/tabs'` 37/37 pass; `npm run lint` (editorconfig + prettier + eslint + tsc + stylelint) exit 0; `npm run build` and `npm run build:package` exit 0 with the alt-text declaration surviving cssnano. Diff 3 files, +55/-0 (under max_diff_lines 200). Fork-only PR, non-draft (pr_policy.draft:false), base=fork main 283cc58ea, 1 commit `Hide the tabs contents list dash from screen readers` (plain imperative, matches repo style), no AI in body/commits. Fork CI: 43 substantive checks pass on Ubuntu+Windows; Percy / Diff changes / Stats comment skipped as fork artifacts. Outcome: pr-opened -> fork PR #30.
- Note: repo has no PR template (repo or org default), so the pipeline 3-section fallback body was used, ending with exactly one PROMOTION NOTE and a verify block. alphagov org policy still records `cla_required: true` (promotion flag only; govuk-frontend's CONTRIBUTING has no CLA and external PRs merge without signup). CHANGELOG entry points at issue #7419 because no upstream PR number exists yet - update it at promotion.

## Run ledger 2026-10-04 (trivial broken-links / stale-references pass)

- `2026-10-04` self-found trivial fixes, packed into one PR (6 files, 8 lines changed): the GOV.UK Frontend docs site split `importing-css-assets-and-javascript` and `updating-with-npm` into `include-css`, `import-javascript`, `import-font-and-images-assets` and `staying-up-to-date`, so the old in-page anchors go nowhere (the pages still load, the fragments do not). Repointed the five remaining stale links in `README.md`, `docs/contributing/versioning.md`, `packages/govuk-frontend/README.md` and `docs/releasing/after-publishing-a-release.md`, plus `docs/contributing/coding-standards/components.md`; the rest of the repo already uses the new pages. Also fixed `docs/contributing/tasks.md`, which still named `default.mjs`/`default.js` — the file has been `single-component.mjs` since the 2024 rename (`git log -L 116,116`). Verified against upstream main `283cc58ea` (fork main identical; no upstream movement): all five replacement URLs return HTTP 200 and each new fragment `id` exists on the target page (fetched and grepped); every old fragment is absent. Local verification: `npm ci`, `npx prettier --check`, `npx editorconfig-checker`, `npx eslint --max-warnings 0`, `npx stylelint --max-warnings 0` all exit 0 on the changed files; `npm run lint` reached `lint:scss` and passed prettier/eslint/tsc (the container's `sh` chokes on the `**/*.{md,scss}` glob in the last script; running stylelint directly is clean). Diff 6 files / 8 lines, well under `max_diff_lines` 200 and `max_files_per_trivial_pr` 10. Fork-only PR, non-draft (`pr_policy.draft:false`), base = fork main, 1 commit `Fix stale documentation links and bundler file references` (plain imperative, matches repo style), no AI in body/commits (word-boundary grep clean; `de-ai-text` rules file still missing so the automated gate could not run — manual review only, same as PR #29). Fork CI: 43 checks pass on Ubuntu + Windows, only `Percy / Send screenshots`, `Diff changes to npm package` and `Stats comment` skipped as fork artifacts. Outcome: pr-opened -> fork PR #31.
