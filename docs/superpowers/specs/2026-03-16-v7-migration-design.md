# bem-components v7: Migration Design

## Overview

Migrate bem-components from legacy tooling (ENB, ym, jshint/jscs, Hermione, Travis CI, Bower) to modern stack (Vite, ES modules, ESLint 10, Playwright, GitHub Actions, npm), following the proven approach from bem-core v5 migration.

**Branch:** `v7` (from `v6`)
**Reference project:** `../bem-core/` (already migrated to v5)

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| CSS processing | PostCSS via Vite (keep `.post.css`) | ~106 files use `:block()/:elem()/:mod()` (rebem-css) — impossible to replace with vanilla CSS without rewriting all selectors |
| Template engines | Both BH + BEMHTML (keep both) | Consistent with bem-core v5 |
| E2E testing | Playwright (replace Hermione) | Consistent with bem-core v5; Sauce Labs + ancient browsers no longer needed |
| Module system | ES modules (replace ym) | Consistent with bem-core v5 |
| Vite BEM plugin | Reuse `vite-plugin-bem-levels` from bem-core (import, not copy) | Single source of truth, avoid divergent forks. Requires adding export in bem-core package.json and extending plugin for `.post.css` support |
| Migration approach | Phased (approach A) | Proven on bem-core; each phase leaves project in testable state |
| bem-core dependency | npm dependency ^5.0.0 (auto-installed, not peerDep) | Simplifies installation; jQuery stays as peerDep |
| touch-pad vs touch-phone | Keep both platforms (same levels, may differ in autoprefixer targets) | Matches current ENB setup; can be unified later if no difference needed |

## Risks

| Risk | Mitigation |
|------|-----------|
| `rebem-css` ^0.2.0 incompatible with PostCSS 8 (Vite uses PostCSS 8) | Check compatibility early in Phase 3.1; if broken, fork and update to PostCSS 8 API |
| `vite-plugin-bem-levels` from bem-core doesn't handle `.post.css` or `design/` levels | Extend the plugin in bem-core upstream before Phase 3.2; add `exports` field to bem-core package.json |
| i18n build (attach.i18n/) currently handled by ENB | Resolved: created `build/vite-plugin-bem-i18n.js` Vite plugin that scans `.i18n/` dirs and generates virtual `bem:i18n` module. 7 languages (be, en, kk, ru, tr, tt, uk) in attach block |

## Phase 0: Preparation

- Create branch `v7` from `v6`
- Update `package.json`:
  - `"version": "7.0.0"`
  - `"type": "module"`
  - `"engines": { "node": ">=20" }`
  - Fix `"peerDependency"` → `"peerDependencies"` (typo in current package.json)
  - Move `bem-core` ^5.0.0 to `"dependencies"` (auto-installed)
  - Set `"peerDependencies": { "jquery": "^4.0.0" }`
  - Add `"prepare": "husky"`
- Add `.nvmrc` with `24`

## Phase 1: Remove Legacy

Remove the following packages and configs:

| Remove | Files/Packages |
|--------|---------------|
| Bower | `bower.json`, `.bowerrc`, remove `libs/` refs |
| jshint | `.jshint-groups.js`, packages: `jshint`, `jshint-groups` |
| jscs | `.jscsrc`, packages: `jscs`, `jscs-bem` |
| istanbul | package: `istanbul` |
| git-hooks | package: `git-hooks`, `.githooks/` directory |
| csscomb | `.csscomb.json` |
| ENB (17+ packages) | `.enb/` directory (`make.js`, `techs.js`), packages: `enb`, `enb-bem-techs`, `enb-bemxjst`, `enb-bh`, `enb-borschik`, `enb-postcss`, `enb-modules`, `enb-magic-factory`, `enb-magic-platform`, `enb-bem-docs`, `enb-bem-examples`, `enb-bem-specs`, `enb-bem-tmpl-specs` |
| borschik | package: `borschik`, `compile-postcss.js` |
| Hermione | `.hermione.conf.js`, `.hermione-dist.conf.js`, `hermione/` directory (including `custom-server` plugin), packages: `hermione`, `html-reporter` |
| Other | packages: `mocha-phantomjs`, `http-server`, `bower`, `bem-naming`, `bem-walk`, `glob` |
| Travis CI | `.travis.yml`, `notify.js`, `publish_showcase.sh`, `publish_report.sh` |
| ENB pages | `desktop.pages/` directory (ENB-specific showcase/index pages, not usable without `magic make`) |
| Dist test infra | `test/dist/` directory (mocha-phantomjs fixtures for distribution testing) |

Clean npm scripts: remove `deps` (bower i), `drop-cache` (.enb/tmp), `postinstall`.
Update `"files"` field in `package.json` — add `dist/` to the list.

## Phase 2: New Infrastructure

### ESLint 10 (flat config)

Add packages: `eslint` ^10, `@eslint/js` ^10, `globals` ^16.

Create `eslint.config.js` adapted from bem-core:
- `ecmaVersion: 2024`, `sourceType: 'module'`
- Rules: `no-var: error`, `prefer-const: error`
- Ignores: `dist/`, `node_modules/`, `*.bemhtml.js`, `*.bh.js`, `*.spec.js`, `*.tests/`, `*.tmpl-specs/`, `*.examples/`
- Separate config for build scripts (`globals.node`)

### Git hooks

Add packages: `husky` ^9, `lint-staged` ^16.

Configure `.husky/pre-commit` → `npx lint-staged`.

`lint-staged` config in `package.json`:
```json
{ "*.js": "eslint --fix" }
```

### GitHub Actions CI

Create `.github/workflows/ci.yml` with jobs:
- `lint`: Node.js 24, `npm run lint`
- `test`: Node.js [20, 22, 24] matrix, `npm test`
- `test-browser`: Node.js 24, Playwright + Chromium, `npm run test:browser`
- `build`: Node.js 24, `npm run build`, upload dist/ artifact

Triggers: push on `v7`, `v*`; pull_request on `v7`.

## Phase 3: Build System — ENB → Vite + PostCSS

### 3.0 Base structure

Add package: `vite` ^7.0.0.

Create:
- `build/vite.config.js` — production config
- `build/vite.test.config.js` — browser test config
- `build/platforms/desktop.js` — entry point
- `build/platforms/touch-pad.js` — entry point
- `build/platforms/touch-phone.js` — entry point

### 3.1 PostCSS integration

Create `postcss.config.js` with current plugin chain (updated to latest versions):
1. `postcss-import`
2. `postcss-each`
3. `postcss-for`
4. `postcss-simple-vars`
5. `postcss-calc`
6. `postcss-nested`
7. `rebem-css`
8. `postcss-url`
9. `autoprefixer`
10. `postcss-reporter`

Vite picks up `postcss.config.js` automatically. Verify `.post.css` files are processed correctly.

**Note:** Added `unknown: () => {}` option to `postcss-simple-vars` to silence warnings about variables used inside `@each` loops (variables are resolved by `postcss-each` before `postcss-simple-vars` runs, but the plugin still warns about them).

**Risk: `rebem-css` ^0.2.0 was written for PostCSS 5-6. Vite uses PostCSS 8. Must verify compatibility early — if broken, fork and update to PostCSS 8 API.** (Resolved: rebem-css works with PostCSS 8 without changes.)

### 3.2 Reuse vite-plugin-bem-levels from bem-core

Import the plugin directly from `bem-core` package — **not a copy, not a fork**.

Prerequisites (upstream changes in bem-core):
- Add `exports` field in bem-core's `package.json` to expose the plugin
- Extend plugin to handle `.post.css` files (currently only `.js` and `.vanilla.js`)

The plugin handles:
- Scanning BEM levels and discovering blocks
- Resolving `bem:` imports to real paths
- Generating barrel files for redefinition chains

### 3.3 Platforms, levels, and dist

Level order is critical (affects CSS cascade and JS redefinition). Must match current ENB order:

```
desktop:
  1. node_modules/bem-core/common.blocks
  2. node_modules/bem-core/desktop.blocks
  3. common.blocks
  4. desktop.blocks
  5. design/common.blocks
  6. design/desktop.blocks

touch-pad:
  1. node_modules/bem-core/common.blocks
  2. node_modules/bem-core/touch.blocks
  3. common.blocks
  4. touch.blocks
  5. design/common.blocks

touch-phone:
  1. node_modules/bem-core/common.blocks
  2. node_modules/bem-core/touch.blocks
  3. common.blocks
  4. touch.blocks
  5. design/common.blocks
```

Note: `design/desktop.blocks` exists but `design/touch.blocks` does not — this is intentional asymmetry from v6.

bem-core levels are resolved from `node_modules/bem-core/` (npm package, not Bower `libs/`).

Output per platform:
- `dist/{platform}/bem-components.mjs` (ESM)
- `dist/{platform}/bem-components.js` (UMD)
- `dist/{platform}/bem-components.css`

### 3.4 npm scripts

```json
{
  "dev": "vite",
  "build": "npm run build:desktop && npm run build:touch-pad && npm run build:touch-phone",
  "build:desktop": "BEM_PLATFORM=desktop vite build",
  "build:touch-pad": "BEM_PLATFORM=touch-pad vite build",
  "build:touch-phone": "BEM_PLATFORM=touch-phone vite build"
}
```

### 3.5 i18n support

Current ENB handles i18n via `enb-bem-i18n` for blocks with `.i18n/` directories (e.g. `attach.i18n/`). 7 languages: be, en, kk, ru, tr, tt, uk.

**Implemented:** Created `build/vite-plugin-bem-i18n.js` — a Vite plugin that:
- Scans `.i18n/` directories across all BEM levels
- Generates a virtual `bem:i18n` module that exports keyset functions per language
- Integrates with the existing vite-plugin-bem-levels infrastructure

### 3.6 Template compilation

`.bemhtml.js` and `.bh.js` files are currently compiled by ENB-specific technologies (`enb-bemxjst`, `enb-bh`).

**Implemented:** Created `build/compile-bemhtml.js` that compiles all `.bemhtml.js` files via `bem-xjst` into a browser-ready bundle for tests. This is needed for browser tests (spec files use `BEMHTML.apply()`) but not for production build (templates are server-side).

**BH templates:** Added BH testing to the tmpl-specs runner (`bh@4.2.1`). 3 known differences between BH and BEMHTML output are marked as todo.

## Phase 4: Module System — ym → ES modules

### 4.0 Inventory

~52 implementation JS files + ~42 spec files with `modules.define` across block levels (common.blocks/, desktop.blocks/, touch.blocks/, design/, test.blocks/). Map all of them:
- Dependencies on bem-core modules (`i-bem-dom`, `i-bem`, `jquery`, `dom`, `keyboard`, etc.)
- Internal dependencies between components (`control`, `popup`, etc.)
- Redefinition chains (blocks with overrides on multiple levels)

### 4.1 Transform pattern

```js
// Before (ym)
modules.define('button', ['i-bem-dom', 'control', 'jquery'],
    function(provide, bemDom, Control, $) {
        provide(bemDom.declBlock(this.name, Control, { /* ... */ }));
    }
);

// After (ESM)
import bemDom from 'bem:i-bem-dom';
import Control from 'bem:control';
import $ from 'bem:jquery';

export default bemDom.declBlock('button', Control, { /* ... */ });
```

Key transformations:
- `modules.define(name, [deps], fn)` → `import` + `export default`
- Dependencies resolved via `bem:` prefix (handled by vite-plugin-bem-levels)
- `this.name` in `declBlock` → string literal with block name

**Important discovery:** Modifier files required a self-executing pattern (not just `export default function`). They need to import the parent block and call `declMod` at module scope so the modifier is registered immediately when the barrel file imports it. Example:

```js
import Block from 'bem:button';
Block.declMod({ modName: 'type', modVal: 'link' }, { /* ... */ });
```

### 4.2 Redefinitions

Blocks with overrides on multiple levels (e.g. `select.js` in `common.blocks` and `desktop.blocks`) are handled automatically by vite-plugin-bem-levels through barrel files and import chains.

**Important:** Modifier files (e.g. `button/_type/button_type_link.js`) must use the self-executing transformer pattern — they import the parent block and call `declMod()` at module scope, rather than using `export default function`. This ensures modifiers are registered when the barrel file imports them.

### 4.3 Spec files

~42 `*.spec.js` files also use `modules.define` and need ESM migration. These are migrated alongside Phase 5.1 (unit tests), but the transform pattern is the same as 4.1.

### 4.4 Cleanup

Remove `enb-modules` references (already removed in Phase 1).

## Phase 5: Testing — Hermione → Playwright

### 5.0 Test infrastructure

Add packages: `@playwright/test` ^1.58, `sinon` ^21, `sinon-chai` ^4.

For browser tests only (via shims, as in bem-core): `mocha` ^11, `chai` ^6 — these are bundled as browser fixtures, not used for Node.js tests.

Create:
- `playwright.config.js` — adapted from bem-core, with Vite dev server
- `test/browser.spec.js` — entry point for browser tests
- `test/browser/` — shims for mocha, chai, sinon in browser context

### 5.1 Unit tests (browser specs)

279 browser spec tests pass. All spec files migrated from ym to ESM. Real BEMHTML compiled via `bem-xjst` (not a shim) using `build/compile-bemhtml.js`:
- Browser spec tests adapted for Playwright + Vite (shim mocha/chai/sinon as in bem-core)

### 5.2 E2E tests

232 Playwright E2E visual regression tests (expanded from the original ~19 hermione files to cover all visual states including opened popup/dropdown/select/modal):
- New baseline screenshots (platform-agnostic, old Sauce Labs screenshots incompatible)
- Remove hermione custom plugins (`custom-server`, `setFocusedState`)
- Remove Sauce Labs integration

### 5.3 Template specs

Adapted `*.tmpl-specs/` to run without ENB via `test/run-tmpl-specs.js`:
- Compiles bemjson → html through both engines (BEMHTML + BH via `bh@4.2.1`)
- Compares with reference HTML files
- 3 known BH/BEMHTML differences marked as todo

### 5.4 Test levels

`test.blocks/` directory is used for test-only blocks. Include it in `build/vite.test.config.js` levels configuration.

### 5.5 npm scripts

```json
{
  "test": "npm run lint && npm run test:unit && npm run test:tmpls && npm run test:browser",
  "test:unit": "node --test",
  "test:browser": "playwright test",
  "test:browser:ui": "playwright test --ui"
}
```

## Phase 6: Documentation and Validation

### Documentation updates

- `MIGRATION.md` / `MIGRATION.ru.md` — all breaking changes v6 → v7
- `README.md` / `README.ru.md` — new commands, Node.js requirements
- `CHANGELOG.md` / `CHANGELOG.ru.md` — v7.0.0 entry
- `CONTRIBUTING.md` / `CONTRIBUTING.ru.md` — new development workflow

### Final validation checklist

- [x] `npm run lint` passes
- [x] `npm run test:browser` — 279 browser spec tests green (real BEMHTML via bem-xjst)
- [x] `npm run test:e2e` — 232 Playwright E2E visual regression tests green
- [x] `npm run test:tmpls` — template specs pass (BEMHTML + BH, 3 known BH differences as todo)
- [x] `npm run build` — all 3 platforms build successfully
- [x] dist files contain correct ESM/UMD bundles + CSS
- [x] `import` from bem-core ^5.0.0 works correctly
- [x] i18n keysets compile correctly for all 7 languages (be, en, kk, ru, tr, tt, uk)
