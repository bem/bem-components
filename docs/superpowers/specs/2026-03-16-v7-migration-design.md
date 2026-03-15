# bem-components v7: Migration Design

## Overview

Migrate bem-components from legacy tooling (ENB, ym, jshint/jscs, Hermione, Travis CI, Bower) to modern stack (Vite, ES modules, ESLint 10, Playwright, GitHub Actions, npm), following the proven approach from bem-core v5 migration.

**Branch:** `v7` (from `v6`)
**Reference project:** `../bem-core/` (already migrated to v5)

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| CSS processing | PostCSS via Vite (keep `.post.css`) | 104 files use `:block()/:elem()/:mod()` (rebem-css) — impossible to replace with vanilla CSS without rewriting all selectors |
| Template engines | Both BH + BEMHTML (keep both) | Consistent with bem-core v5 |
| E2E testing | Playwright (replace Hermione) | Consistent with bem-core v5; Sauce Labs + ancient browsers no longer needed |
| Module system | ES modules (replace ym) | Consistent with bem-core v5 |
| Vite BEM plugin | Reuse `vite-plugin-bem-levels` from bem-core (import, not copy) | Single source of truth, avoid divergent forks |
| Migration approach | Phased (approach A) | Proven on bem-core; each phase leaves project in testable state |
| bem-core dependency | npm peerDependency ^5.0.0 (replace Bower) | Bower removed in bem-core v5 |

## Phase 0: Preparation

- Create branch `v7` from `v6`
- Update `package.json`:
  - `"version": "7.0.0"`
  - `"type": "module"`
  - `"engines": { "node": ">=20" }`
- Add `.nvmrc` with `22`

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
| ENB (17+ packages) | `.enb/` directory (including `make.js` — 1413 lines, `techs.js`), packages: `enb`, `enb-bem-techs`, `enb-bemxjst`, `enb-bh`, `enb-borschik`, `enb-postcss`, `enb-modules`, `enb-magic-factory`, `enb-magic-platform`, `enb-bem-docs`, `enb-bem-examples`, `enb-bem-specs`, `enb-bem-tmpl-specs` |
| borschik | package: `borschik`, `compile-postcss.js` |
| Hermione | `.hermione.conf.js`, `.hermione-dist.conf.js`, `hermione/` directory, packages: `hermione`, `html-reporter` |
| Other | packages: `mocha-phantomjs`, `http-server`, `bower`, `bem-naming`, `bem-walk`, `glob` |
| Travis CI | `.travis.yml`, `notify.js`, `publish_showcase.sh`, `publish_report.sh` |

Clean npm scripts: remove `deps` (bower i), `drop-cache` (.enb/tmp), `postinstall`.

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
- `lint`: Node.js 22, `npm run lint`
- `test`: Node.js [20, 22] matrix, `npm test`
- `test-browser`: Node.js 22, Playwright + Chromium, `npm run test:browser`
- `build`: Node.js 22, `npm run build`, upload dist/ artifact

Triggers: push on `v7`, `v*`; pull_request on `v7`.

## Phase 3: Build System — ENB → Vite + PostCSS

### 3.0 Base structure

Add package: `vite` ^7.0.0.

Create:
- `build/vite.config.js` — production config
- `build/vite.test.config.js` — browser test config
- `build/platforms/desktop.js` — entry point (levels: common + desktop)
- `build/platforms/touch-pad.js` — entry point (levels: common + touch)
- `build/platforms/touch-phone.js` — entry point (levels: common + touch)

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

### 3.2 Reuse vite-plugin-bem-levels from bem-core

Import the plugin directly from `bem-core` package — **not a copy, not a fork**.

The plugin handles:
- Scanning BEM levels and discovering blocks
- Resolving `bem:` imports to real paths
- Generating barrel files for redefinition chains
- Processing `.js`, `.post.css`, `.bemhtml.js`, `.bh.js`, `.deps.js`

Levels for bem-components (more than bem-core):
- `common.blocks`, `desktop.blocks`, `touch.blocks`
- `design/common.blocks`, `design/desktop.blocks`

### 3.3 Platforms and dist

Three platforms:
- `desktop` = common + desktop
- `touch-pad` = common + touch
- `touch-phone` = common + touch

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

## Phase 4: Module System — ym → ES modules

### 4.0 Inventory

~50+ JS files with `modules.define`. Map all of them:
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

### 4.2 Redefinitions

Blocks with overrides on multiple levels (e.g. `select.js` in `common.blocks` and `desktop.blocks`) are handled automatically by vite-plugin-bem-levels through barrel files and import chains.

### 4.3 Cleanup

Remove `enb-modules` references (already removed in Phase 1).

## Phase 5: Testing — Hermione → Playwright

### 5.0 Test infrastructure

Add packages: `@playwright/test` ^1.58, `mocha` ^11, `chai` ^6, `sinon` ^21, `sinon-chai` ^4.

Create:
- `playwright.config.js` — adapted from bem-core, with Vite dev server
- `test/browser.spec.js` — entry point for browser tests
- `test/browser/` — shims for mocha, chai, sinon in browser context

### 5.1 Unit tests (specs)

~30+ `*.spec.js` files currently use mocha-style via ym:
- Server-side tests → rewrite to `node:test` + `node:assert`
- Browser spec tests → adapt for Playwright + Vite (shim mocha/chai/sinon as in bem-core)

### 5.2 E2E tests

Rewrite 21 hermione tests to Playwright:
- New baseline screenshots (old Sauce Labs screenshots incompatible)
- Remove hermione custom plugins (`custom-server`, `setFocusedState`)
- Remove Sauce Labs integration

### 5.3 Template specs

Adapt `*.tmpl-specs/` to run without ENB:
- Compile bemjson → html through both engines (BEMHTML + BH)
- Compare with reference HTML files

### 5.4 npm scripts

```json
{
  "test": "npm run lint && npm run test:unit && npm run test:tmpls && npm run test:browser",
  "test:unit": "node --test",
  "test:browser": "playwright test",
  "test:browser:ui": "playwright test --ui"
}
```

## Phase 6: Dependencies and peerDeps

- `peerDependencies`: `bem-core` ^4.2.1 → ^5.0.0
- `peerDependencies`: add `jquery` ^4.0.0 (consistent with bem-core v5)
- Verify all `bem:` imports from bem-core resolve correctly via npm package

## Phase 7: Documentation and Validation

### Documentation updates

- `MIGRATION.md` / `MIGRATION.ru.md` — all breaking changes v6 → v7
- `README.md` / `README.ru.md` — new commands, Node.js requirements
- `CHANGELOG.md` / `CHANGELOG.ru.md` — v7.0.0 entry
- `CONTRIBUTING.md` / `CONTRIBUTING.ru.md` — new development workflow

### Final validation checklist

- [ ] `npm run lint` passes
- [ ] `npm test` — all unit tests green
- [ ] `npm run test:browser` — all browser tests green
- [ ] `npm run build` — all 3 platforms build successfully
- [ ] dist files contain correct ESM/UMD bundles + CSS
- [ ] `import` from bem-core ^5.0.0 works correctly
