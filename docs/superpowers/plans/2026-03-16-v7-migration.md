# bem-components v7 Migration — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Migrate bem-components from legacy stack (ENB, ym, jshint/jscs, Hermione, Travis CI, Bower) to modern stack (Vite, ES modules, ESLint 10, Playwright, GitHub Actions, npm).

**Architecture:** Phased migration following the proven approach from bem-core v5. Each phase leaves the project in a consistent state. The vite-plugin-bem-levels from bem-core is reused directly (not copied). PostCSS pipeline is preserved for `.post.css` files via Vite's native PostCSS support.

**Tech Stack:** Vite 7, ESLint 10 (flat config), Playwright, GitHub Actions, husky 9, PostCSS 8, Node.js 20+ (.nvmrc: 24)

**Status:** ALL TASKS COMPLETED

**Spec:** `docs/superpowers/specs/2026-03-16-v7-migration-design.md`
**Reference project:** `../bem-core/` (already migrated to v5)

---

## Chunk 1: Preparation and Legacy Removal (Phases 0–1)

### Task 1: Create v7 branch and update package.json

**Files:**
- Modify: `package.json`
- Create: `.nvmrc`

- [x] **Step 1: Create branch**

```bash
git checkout -b v7
```

- [x] **Step 2: Update package.json**

Changes to make in `package.json`:
- `"version"`: `"6.0.1"` → `"7.0.0"`
- Add `"type": "module"` (after `"description"`)
- `"engines"`: `{ "node": ">=4" }` → `{ "node": ">=20" }`
- Rename `"peerDependency"` → `"peerDependencies"` (fix typo)
- Move `bem-core` ^5.0.0 to `"dependencies"` (auto-installed, not peerDep)
- Set `"peerDependencies": { "jquery": "^4.0.0" }`
- Add `"prepare": "husky"` to `"scripts"`
- Update `"files"`: add `"dist"` to the array

> **Actual:** bem-core was moved to dependencies (not peerDependencies) for simpler installation.

- [x] **Step 3: Create .nvmrc**

```
24
```

> **Actual:** .nvmrc set to 24 (not 22). CI tests on [20, 22, 24].

- [x] **Step 4: Commit**

```bash
git add package.json .nvmrc
git commit -m "chore: init v7 branch — update engines, type:module, peerDeps"
```

### Task 2: Remove Bower

**Files:**
- Delete: `bower.json`, `.bowerrc`
- Modify: `.gitignore` (remove `libs/` if present)

- [x] **Step 1: Delete Bower files**

```bash
rm bower.json .bowerrc
```

- [x] **Step 2: Check .gitignore for libs/ reference**

Read `.gitignore` and remove any `libs/` related entries.

- [x] **Step 3: Commit**

```bash
git add -u bower.json .bowerrc .gitignore
git commit -m "chore: remove Bower (bower.json, .bowerrc)"
```

### Task 3: Remove linting tools (jshint, jscs, csscomb)

**Files:**
- Delete: `.jshint-groups.js`, `.jscsrc`, `.csscomb.json`
- Modify: `package.json` (remove devDependencies)

- [x] **Step 1: Delete config files**

```bash
rm .jshint-groups.js .jscsrc .csscomb.json
```

- [x] **Step 2: Remove packages from devDependencies**

Remove from `package.json` devDependencies:
- `"jscs"`, `"jscs-bem"`, `"jshint"`, `"jshint-groups"`

- [x] **Step 3: Commit**

```bash
git add -u .jshint-groups.js .jscsrc .csscomb.json package.json
git commit -m "chore: remove jshint, jscs, csscomb"
```

### Task 4: Remove ENB build system

**Files:**
- Delete: `.enb/` directory, `compile-postcss.js`
- Modify: `package.json` (remove devDependencies)

- [x] **Step 1: Delete ENB directory and compile script**

```bash
rm -rf .enb compile-postcss.js
```

- [x] **Step 2: Remove ENB packages from devDependencies**

Remove from `package.json` devDependencies:
- `"enb"`, `"enb-bem-techs"`, `"enb-bemxjst"`, `"enb-bh"`, `"enb-borschik"`, `"enb-postcss"`, `"enb-modules"`, `"enb-magic-factory"`, `"enb-magic-platform"`, `"enb-bem-docs"`, `"enb-bem-examples"`, `"enb-bem-specs"`, `"enb-bem-tmpl-specs"`
- `"borschik"`

- [x] **Step 3: Commit**

```bash
git add -u
git commit -m "chore: remove ENB build system (17 packages, .enb/, compile-postcss.js)"
```

### Task 5: Remove Hermione, testing legacy, and other obsolete packages

**Files:**
- Delete: `.hermione.conf.js`, `.hermione-dist.conf.js`, `hermione/` directory
- Delete: `test/dist/` directory
- Modify: `package.json`

- [x] **Step 1: Delete Hermione configs and directory**

```bash
rm -f .hermione.conf.js .hermione-dist.conf.js
rm -rf hermione
rm -rf test/dist
```

- [x] **Step 2: Remove packages from devDependencies**

Remove from `package.json` devDependencies:
- `"hermione"`, `"html-reporter"`, `"custom-server"`
- `"istanbul"`, `"http-server"`, `"bower"`, `"mocha-phantomjs"`
- `"bem-naming"`, `"bem-walk"`, `"glob"`

- [x] **Step 3: Commit**

```bash
git add -u
git commit -m "chore: remove Hermione, istanbul, and other legacy packages"
```

### Task 6: Remove Travis CI and git-hooks

**Files:**
- Delete: `.travis.yml`, `notify.js`, `publish_showcase.sh`, `publish_report.sh` (search for exact locations)
- Delete: `.githooks/` directory
- Modify: `package.json` (remove `git-hooks`)

- [x] **Step 1: Find and delete Travis-related files**

```bash
fd -t f 'notify.js|publish_showcase|publish_report' .
```

Delete all found files plus `.travis.yml`.

- [x] **Step 2: Delete .githooks directory**

```bash
rm -rf .githooks
```

- [x] **Step 3: Remove git-hooks from devDependencies**

Remove `"git-hooks"` from `package.json` devDependencies.

- [x] **Step 4: Commit**

```bash
git add -u
git commit -m "chore: remove Travis CI and git-hooks"
```

### Task 7: Remove desktop.pages and clean npm scripts

**Files:**
- Delete: `desktop.pages/` directory
- Modify: `package.json` (clean scripts)

- [x] **Step 1: Delete desktop.pages**

```bash
rm -rf desktop.pages
```

- [x] **Step 2: Replace all npm scripts**

Replace the entire `"scripts"` section in `package.json` with a minimal placeholder (will be filled in later phases):

```json
"scripts": {
  "lint": "echo 'lint not configured yet'",
  "test": "echo 'tests not configured yet'",
  "build": "echo 'build not configured yet'",
  "prepare": "husky"
}
```

- [x] **Step 3: Remove PostCSS packages that will be re-added later with updated versions**

Remove from devDependencies:
- `"autoprefixer"`, `"postcss-calc"`, `"postcss-each"`, `"postcss-for"`, `"postcss-import"`, `"postcss-nested"`, `"postcss-reporter"`, `"postcss-simple-vars"`, `"postcss-url"`, `"rebem-css"`

(These will be re-added with updated versions in Phase 3.)

- [x] **Step 4: Commit**

```bash
git add -u
git commit -m "chore: remove desktop.pages, clean scripts, remove old PostCSS deps"
```

- [x] **Step 5: Verify devDependencies is now empty**

At this point `package.json` should have an empty `"devDependencies": {}`. All legacy packages have been removed.

Run: `node --input-type=commonjs -e "const p = JSON.parse(require('fs').readFileSync('package.json','utf8')); console.log('devDeps:', Object.keys(p.devDependencies || {}).length)"`

Expected: `devDeps: 0`

(Note: `--input-type=commonjs` is needed because `package.json` has `"type": "module"`.)

---

## Chunk 2: New Infrastructure (Phase 2)

### Task 8: Add ESLint 10 with flat config

**Files:**
- Create: `eslint.config.js`
- Modify: `package.json` (add devDeps, update lint script)

- [x] **Step 1: Install ESLint**

```bash
npm install --save-dev eslint@^10 @eslint/js@^10 globals@^16
```

- [x] **Step 2: Create eslint.config.js**

Adapt from bem-core's config (`../bem-core/eslint.config.js`):

```js
import js from '@eslint/js';
import globals from 'globals';

export default [
    {
        ignores: [
            'dist/',
            'docs/',
            'node_modules/',
            'libs/',
            'test/',
            '**/*.spec.js',
            '**/*.tests/**',
            '**/*.tmpl-specs/**',
            '**/*.examples/**',
            '**/*.bemhtml.js',
            '**/*.bh.js',
            'common.bundles/',
        ],
    },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            'no-var': 'error',
            'prefer-const': 'error',
            'no-unused-vars': ['error', { args: 'none', caughtErrors: 'none' }],
            'no-prototype-builtins': 'error',
            'no-empty': ['error', { allowEmptyCatch: true }],
            'no-cond-assign': 'off',
        },
    },
    {
        files: ['build/**/*.js', '**/*.test.js'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];
```

- [x] **Step 3: Update lint script in package.json**

```json
"lint": "eslint ."
```

- [x] **Step 4: Run lint to check it works (expect errors from ym code — that's ok)**

```bash
npm run lint 2>&1 | head -20
```

Expected: ESLint runs (may report errors in pre-ESM code — this is expected and will be fixed in Phase 4).

- [x] **Step 5: Commit**

```bash
git add eslint.config.js package.json package-lock.json
git commit -m "feat: add ESLint 10 with flat config"
```

### Task 9: Add husky and lint-staged

**Files:**
- Create: `.husky/pre-commit`
- Modify: `package.json` (add devDeps, lint-staged config)

- [x] **Step 1: Install husky and lint-staged**

```bash
npm install --save-dev husky@^9 lint-staged@^16
```

- [x] **Step 2: Initialize husky**

```bash
npx husky init
```

This creates `.husky/pre-commit`. Replace its content with:

```
npx lint-staged
```

- [x] **Step 3: Add lint-staged config to package.json**

Add to `package.json` (top-level):

```json
"lint-staged": {
  "*.js": "eslint --fix"
}
```

- [x] **Step 4: Commit**

```bash
git add .husky package.json package-lock.json
git commit -m "feat: add husky 9 and lint-staged"
```

### Task 10: Add GitHub Actions CI

**Files:**
- Create: `.github/workflows/ci.yml`

- [x] **Step 1: Create CI workflow**

Adapt from bem-core's `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [v7, 'v*']
  pull_request:
    branches: [v7]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run lint

  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [20, 22, 24]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: npm
      - run: npm ci
      - run: npm test

  test-browser:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npx playwright install --with-deps chromium
      - run: npm run test:browser

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/
```

- [x] **Step 2: Commit**

```bash
git add .github/workflows/ci.yml
git commit -m "feat: add GitHub Actions CI (lint, test, test-browser, build)"
```

---

## Chunk 3: Vite Build System (Phase 3)

### Task 11: Add Vite and PostCSS dependencies

**Files:**
- Modify: `package.json`

- [x] **Step 1: Install Vite**

```bash
npm install --save-dev vite@^7
```

- [x] **Step 2: Install PostCSS plugins**

```bash
npm install --save-dev autoprefixer postcss-calc postcss-each postcss-for postcss-import postcss-nested postcss-reporter postcss-simple-vars postcss-url rebem-css
```

- [x] **Step 3: Verify rebem-css works with PostCSS 8**

```bash
node -e "
import('rebem-css').then(m => {
  const plugin = m.default || m;
  console.log('type:', typeof plugin);
  console.log('postcss:', plugin.postcss ? 'has postcss marker' : 'no marker');
}).catch(e => console.error('FAIL:', e.message));
"
```

If this fails with PostCSS 8 incompatibility, fork rebem-css and update. This is a known risk from the spec.

- [x] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add Vite 7 and PostCSS plugin dependencies"
```

### Task 12: Create PostCSS config

**Files:**
- Create: `postcss.config.js`

- [x] **Step 1: Create postcss.config.js**

```js
import postcssImport from 'postcss-import';
import postcssEach from 'postcss-each';
import postcssFor from 'postcss-for';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssCalc from 'postcss-calc';
import postcssNested from 'postcss-nested';
import rebemCss from 'rebem-css';
import postcssUrl from 'postcss-url';
import autoprefixer from 'autoprefixer';
import postcssReporter from 'postcss-reporter';

export default {
    plugins: [
        postcssImport(),
        postcssEach,
        postcssFor,
        postcssSimpleVars({ unknown: () => {} }),
        postcssCalc(),
        postcssNested,
        rebemCss,
        postcssUrl({ url: 'rebase' }),
        autoprefixer,
        postcssReporter(),
    ],
};
```

Note: some plugins are called as functions, others passed as references — match what the old `.enb/techs.js` did. Verify each plugin's API.

> **Actual:** Added `unknown: () => {}` to `postcss-simple-vars` to silence warnings about variables inside `@each` loops.

- [x] **Step 2: Commit**

```bash
git add postcss.config.js
git commit -m "feat: add PostCSS config with rebem-css and 9 other plugins"
```

### Task 13: Extend and expose vite-plugin-bem-levels from bem-core

This is an upstream task in bem-core. The current plugin only scans `.js` and `.vanilla.js` files. It needs to also handle `.post.css` files for bem-components.

**Files (in ../bem-core/):**
- Modify: `../bem-core/package.json` (add exports field)
- Modify: `../bem-core/build/plugins/vite-plugin-bem-levels.js` (add `.post.css` support)

- [x] **Step 1: Add exports to bem-core package.json**

Add to `../bem-core/package.json` — use wildcard to avoid breaking other imports:

```json
"exports": {
  ".": "./dist/desktop/bem-core.mjs",
  "./build/plugins/*": "./build/plugins/*",
  "./*": "./*"
}
```

- [x] **Step 2: Extend plugin to scan `.post.css` files**

In `../bem-core/build/plugins/vite-plugin-bem-levels.js`, the `scanDirectory()` function filters files by extension (`.js`, `.vanilla.js`). Extend it to also discover `.post.css` files and register them in the module registry as CSS side-effect imports.

The plugin's `scanLevel()` → `scanDirectory()` pipeline needs to:
- Recognize `.post.css` as a valid tech
- Map `button.post.css` → module name `button` (CSS part)
- In `generateBarrel()`, include CSS imports as side-effect `import './path/to/button.post.css'`

This ensures that when `import 'bem:button'` is resolved, both JS and CSS are included.

- [x] **Step 3: Verify import works**

```bash
node -e "import('../../bem-core/build/plugins/vite-plugin-bem-levels.js').then(m => console.log('OK:', typeof m.default))"
```

Expected: `OK: function`

- [x] **Step 4: Commit in bem-core**

```bash
cd ../bem-core
git add package.json build/plugins/vite-plugin-bem-levels.js
git commit -m "feat: export vite-plugin-bem-levels, add .post.css support"
cd ../bem-components
```

- [x] **Step 5: Link bem-core locally for development**

```bash
cd ../bem-core && npm link && cd ../bem-components && npm link bem-core
```

This allows importing `bem-core/build/plugins/vite-plugin-bem-levels` without publishing to npm.

### Task 14: Create Vite production config

**Files:**
- Create: `build/vite.config.js`

- [x] **Step 1: Create build directory**

```bash
mkdir -p build/platforms
```

- [x] **Step 2: Create build/vite.config.js**

Adapt from bem-core's `build/vite.config.js`:

```js
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import bemLevels from 'bem-core/build/plugins/vite-plugin-bem-levels';

const platform = process.env.BEM_PLATFORM || 'desktop';

export default defineConfig({
    root: resolve(import.meta.dirname, '..'),
    plugins: [
        bemLevels({
            platform,
            levels: {
                desktop: [
                    'node_modules/bem-core/common.blocks',
                    'node_modules/bem-core/desktop.blocks',
                    'common.blocks',
                    'desktop.blocks',
                    'design/common.blocks',
                    'design/desktop.blocks',
                ],
                'touch-pad': [
                    'node_modules/bem-core/common.blocks',
                    'node_modules/bem-core/touch.blocks',
                    'common.blocks',
                    'touch.blocks',
                    'design/common.blocks',
                ],
                'touch-phone': [
                    'node_modules/bem-core/common.blocks',
                    'node_modules/bem-core/touch.blocks',
                    'common.blocks',
                    'touch.blocks',
                    'design/common.blocks',
                ],
            },
        }),
    ],
    build: {
        outDir: `dist/${platform}`,
        emptyOutDir: true,
        lib: {
            entry: `build/platforms/${platform}.js`,
            name: 'bemComponents',
            formats: ['es', 'umd'],
            fileName: (format) => format === 'es' ? 'bem-components.mjs' : 'bem-components.js',
        },
        rollupOptions: {
            external: ['jquery'],
            output: {
                globals: { jquery: 'jQuery' },
                assetFileNames: 'bem-components.[ext]',
            },
        },
        sourcemap: true,
    },
});
```

- [x] **Step 3: Commit**

```bash
git add build/vite.config.js
git commit -m "feat: add Vite production build config with BEM levels"
```

### Task 15: Create platform entry points

**Files:**
- Create: `build/platforms/desktop.js`
- Create: `build/platforms/touch-pad.js`
- Create: `build/platforms/touch-phone.js`

- [x] **Step 1: Create desktop.js entry point**

This file imports all bem-components blocks for the desktop platform. Order follows dependency graph (base blocks first, composite blocks last).

```js
// Base blocks
import 'bem:control';
import 'bem:icon';
import 'bem:image';
import 'bem:spin';
import 'bem:progressbar';
import 'bem:z-index-group';

// Interactive blocks
import 'bem:link';
import 'bem:button';
import 'bem:input';
import 'bem:textarea';
import 'bem:checkbox';
import 'bem:radio';

// Group blocks
import 'bem:checkbox-group';
import 'bem:radio-group';
import 'bem:control-group';
import 'bem:menu';

// Overlay blocks
import 'bem:popup';
import 'bem:modal';
import 'bem:dropdown';

// Composite blocks
import 'bem:select';
import 'bem:attach';
```

Note: Exact import list must be verified against actual blocks in `common.blocks/` and `desktop.blocks/`. Include all sub-blocks/elements/modifiers that have `.js` files — the vite-plugin-bem-levels handles resolution from BEM levels.

- [x] **Step 2: Create touch-pad.js and touch-phone.js**

These are identical to desktop.js (same block set). Platform differences are handled by level resolution — `touch.blocks/` overrides take effect automatically.

```bash
cp build/platforms/desktop.js build/platforms/touch-pad.js
cp build/platforms/desktop.js build/platforms/touch-phone.js
```

- [x] **Step 3: Commit**

```bash
git add build/platforms/
git commit -m "feat: add platform entry points (desktop, touch-pad, touch-phone)"
```

### Task 16: Create Vite test config

**Files:**
- Create: `build/vite.test.config.js`

- [x] **Step 1: Create build/vite.test.config.js**

Adapt from bem-core's test config:

```js
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import bemLevels from 'bem-core/build/plugins/vite-plugin-bem-levels';

export default defineConfig({
    root: resolve(import.meta.dirname, '..'),
    plugins: [
        bemLevels({
            platform: 'desktop',
            levels: {
                desktop: [
                    'node_modules/bem-core/common.blocks',
                    'node_modules/bem-core/desktop.blocks',
                    'common.blocks',
                    'desktop.blocks',
                    'design/common.blocks',
                    'design/desktop.blocks',
                    'test.blocks',
                ],
            },
        }),
    ],
    server: {
        port: 5174,
        strictPort: true,
    },
    optimizeDeps: {
        include: ['chai', 'sinon', 'sinon-chai', 'jquery'],
    },
});
```

- [x] **Step 2: Commit**

```bash
git add build/vite.test.config.js
git commit -m "feat: add Vite test config with test.blocks level"
```

### Task 16a: Handle i18n keysets

**Files:**
- Potentially create: a small Vite plugin or build script for i18n

The `attach` block has `.i18n/` directory with keysets in 7 languages (be, en, kk, ru, tr, tt, uk). These were compiled by ENB via `enb-bem-i18n`.

> **Actual:** Created `build/vite-plugin-bem-i18n.js` — a Vite plugin that scans `.i18n/` dirs and generates a virtual `bem:i18n` module. Option (b) was chosen.

- [x] **Step 1: Inventory i18n usage**

```bash
fd -t d '.i18n' common.blocks/ desktop.blocks/ touch.blocks/ design/
```

- [x] **Step 2: Read a keyset file to understand the format**

```bash
cat common.blocks/attach/attach.i18n/en.js
```

- [x] **Step 3: Decide on approach**

Options:
- a) Integrate i18n into vite-plugin-bem-levels (upstream in bem-core)
- b) Write a small standalone vite-plugin-bem-i18n
- c) Convert keysets to static ES module imports at build time

Choose the simplest option that works. If only `attach` uses i18n, a simple manual conversion may suffice.

- [x] **Step 4: Implement and verify**

Ensure the i18n keysets are available at runtime for all supported languages.

- [x] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add i18n keyset support for Vite build"
```

### Task 16b: Handle template compilation (BEMHTML + BH)

**Files:**
- Potentially modify: `build/vite.config.js` or create a build step

`.bemhtml.js` and `.bh.js` files were compiled by ENB technologies (`enb-bemxjst`, `enb-bh`). They need to be included in the dist bundle.

> **Actual:** Created `build/compile-bemhtml.js` that compiles all `.bemhtml.js` via `bem-xjst` into a browser-ready bundle for tests. Not needed for production build (templates are server-side). BH testing added to tmpl-specs runner (`bh@4.2.1`), with 3 known BH/BEMHTML differences marked as todo.

- [x] **Step 1: Inventory template files**

```bash
fd -e 'bemhtml.js' common.blocks/ desktop.blocks/ touch.blocks/ design/ | wc -l
fd -e 'bh.js' common.blocks/ desktop.blocks/ touch.blocks/ design/ | wc -l
```

- [x] **Step 2: Determine how bem-core handles templates**

Check if bem-core's vite-plugin-bem-levels already handles `.bemhtml.js` and `.bh.js`:

```bash
ugrep -n 'bemhtml\|\.bh\.' ../bem-core/build/plugins/vite-plugin-bem-levels.js
```

- [x] **Step 3: Implement template compilation**

Options:
- a) Templates are already plain JS — may work as-is with Vite if they use standard exports
- b) Need `bem-xjst` as a devDependency for BEMHTML compilation
- c) Need `bh` as a devDependency for BH runtime

Templates may need to be bundled separately from the main JS bundle, or included as a separate entry point.

- [x] **Step 4: Verify templates compile and produce correct HTML**

Test with a simple BEMJSON → HTML conversion.

- [x] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add BEMHTML and BH template compilation to Vite build"
```

### Task 17: Add build scripts to package.json

**Files:**
- Modify: `package.json`

- [x] **Step 1: Update scripts**

```json
"scripts": {
  "dev": "vite --config build/vite.config.js",
  "build": "npm run build:desktop && npm run build:touch-pad && npm run build:touch-phone",
  "build:desktop": "BEM_PLATFORM=desktop vite build --config build/vite.config.js",
  "build:touch-pad": "BEM_PLATFORM=touch-pad vite build --config build/vite.config.js",
  "build:touch-phone": "BEM_PLATFORM=touch-phone vite build --config build/vite.config.js",
  "lint": "eslint .",
  "test": "echo 'tests not configured yet'",
  "prepare": "husky"
}
```

- [x] **Step 2: Try building (will fail until Phase 4 — ym→ESM migration — but should show Vite starting)**

```bash
npm run build:desktop 2>&1 | head -30
```

Expected: Vite starts, may fail on `modules.define` in JS files (not yet migrated to ESM).

- [x] **Step 3: Commit**

```bash
git add package.json
git commit -m "feat: add Vite build scripts for 3 platforms"
```

---

## Chunk 4: Module System Migration — ym → ES modules (Phase 4)

### Task 18: Inventory all modules.define files

**Files:** none (research task)

- [x] **Step 1: List all JS files with modules.define**

```bash
ugrep -rl 'modules\.define' common.blocks/ desktop.blocks/ touch.blocks/ design/ test.blocks/ --include='*.js' --exclude='*.spec.js' --exclude='*.bemhtml.js' --exclude='*.bh.js' --exclude='*.deps.js' --exclude='*.bemjson.js'
```

- [x] **Step 2: List all spec files with modules.define**

```bash
ugrep -rl 'modules\.define' common.blocks/ desktop.blocks/ touch.blocks/ --include='*.spec.js'
```

- [x] **Step 3: Identify redefinition chains**

Find blocks that exist on multiple levels:

```bash
for block in common.blocks/*/; do
  name=$(basename "$block")
  if [ -d "desktop.blocks/$name" ] || [ -d "touch.blocks/$name" ]; then
    echo "REDEF: $name"
    fd -e js -d 1 . "common.blocks/$name" "desktop.blocks/$name" "touch.blocks/$name" 2>/dev/null
  fi
done
```

- [x] **Step 4: Save inventory to a temporary file for reference**

This inventory guides the next tasks. Each file listed needs the ym→ESM transformation.

### Task 19: Migrate common.blocks JS files to ES modules

**Files:**
- Modify: all `.js` files in `common.blocks/` (excluding `.spec.js`, `.bemhtml.js`, `.bh.js`, `.deps.js`)

- [x] **Step 1: Apply transform pattern to each file**

For each file, apply this transformation:

**Before (ym):**
```js
modules.define('blockname', ['dep1', 'dep2'], function(provide, Dep1, Dep2) {
    provide(/* ... */);
});
```

**After (ESM):**
```js
import Dep1 from 'bem:dep1';
import Dep2 from 'bem:dep2';

export default /* ... */;
```

Key rules:
- `modules.define('name', ['dep1', 'dep2'], function(provide, Dep1, Dep2) {` → imports + unwrap function
- `provide(value)` → `export default value`
- `provide(bemDom.declBlock(this.name, ...))` → `export default bemDom.declBlock('blockname', ...)`
- `this.name` → string literal with the block name
- For redefinition files (that receive `prev` parameter in `modules.define`): `export default function(prev) { ... }`

Consult `../bem-core/MIGRATION.md` for detailed examples of each transformation pattern.

Work through blocks alphabetically: attach, button, checkbox, checkbox-group, control, control-group, dropdown, icon, image, input, link, menu, modal, popup, progressbar, radio, radio-group, select, spin, textarea, z-index-group.

- [x] **Step 2: Verify ESLint passes on migrated files**

```bash
npm run lint
```

Fix any ESLint errors (likely `no-var`, `prefer-const`).

- [x] **Step 3: Commit**

```bash
git add common.blocks/
git commit -m "refactor: migrate common.blocks JS to ES modules"
```

### Task 20: Migrate desktop.blocks and touch.blocks JS files

**Files:**
- Modify: all `.js` files in `desktop.blocks/` and `touch.blocks/`

- [x] **Step 1: Apply same ESM transform pattern**

These are typically redefinition files. Pattern:

**Before:**
```js
modules.define('control', function(provide, Control) {
    provide(Control.declMod(/* ... */));
});
```

**After (self-executing transformer pattern):**
```js
import Control from 'bem:control';
Control.declMod(/* ... */);
```

> **Actual:** Modifier files required the self-executing pattern (not `export default function`). They must import the parent block and call `declMod()` at module scope so modifiers are registered when the barrel file imports them.

- [x] **Step 2: Run lint**

```bash
npm run lint
```

- [x] **Step 3: Commit**

```bash
git add desktop.blocks/ touch.blocks/
git commit -m "refactor: migrate desktop.blocks and touch.blocks JS to ES modules"
```

### Task 21: Migrate design/ JS files

**Files:**
- Modify: all `.js` files in `design/` (typically few — mostly CSS in design blocks)

- [x] **Step 1: Find and migrate**

```bash
ugrep -rl 'modules\.define' design/ --include='*.js' --exclude='*.spec.js' --exclude='*.bemhtml.js' --exclude='*.bh.js' --exclude='*.deps.js'
```

Apply same transform pattern.

- [x] **Step 2: Commit**

```bash
git add design/
git commit -m "refactor: migrate design/ JS to ES modules"
```

### Task 22: Try Vite build after ESM migration

- [x] **Step 1: Run build**

```bash
npm run build:desktop 2>&1
```

Expect: either success or specific errors to debug (unresolved `bem:` imports, PostCSS issues, etc.)

- [x] **Step 2: Debug and fix any issues**

Common issues:
- Missing `bem:` module — check that the block exists on the correct level
- PostCSS plugin errors — check `postcss.config.js` plugin API calls
- Redefinition barrel generation — check vite-plugin-bem-levels handles the block correctly

- [x] **Step 3: Build all platforms**

```bash
npm run build
```

- [x] **Step 4: Verify dist output**

```bash
eza -la dist/desktop/ dist/touch-pad/ dist/touch-phone/
```

Expected: each directory has `bem-components.mjs`, `bem-components.js`, `bem-components.css`

- [x] **Step 5: Commit any fixes**

```bash
git add -u
git commit -m "fix: resolve Vite build issues after ESM migration"
```

---

## Chunk 5: Testing (Phase 5)

### Task 23: Add Playwright and test dependencies

**Files:**
- Modify: `package.json`

- [x] **Step 1: Install test packages**

```bash
npm install --save-dev @playwright/test@^1.58 mocha@^11 chai@^6 sinon@^21 sinon-chai@^4
```

- [x] **Step 2: Install Playwright browsers**

```bash
npx playwright install chromium
```

- [x] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add Playwright, mocha, chai, sinon test dependencies"
```

### Task 24: Create Playwright config and browser test infrastructure

**Files:**
- Create: `playwright.config.js`
- Create: `test/browser.spec.js`
- Create: `test/browser/index.html`
- Create: `test/browser/entry.js`
- Create: `test/browser/modules-shim.js`
- Create: `test/browser/bemhtml-shim.js`

- [x] **Step 1: Create playwright.config.js**

Adapt from bem-core:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './test',
    testMatch: 'browser.spec.js',
    timeout: 60000,
    retries: 1,
    use: {
        browserName: 'chromium',
        headless: true,
    },
    webServer: {
        command: 'npx vite --config build/vite.test.config.js',
        port: 5174,
        reuseExistingServer: !process.env.CI,
    },
});
```

- [x] **Step 2: Create test/browser.spec.js**

Adapt from bem-core's test/browser.spec.js:

```js
import { test, expect } from '@playwright/test';

test('browser specs pass', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('http://localhost:5174/test/browser/index.html');

    const results = await page.waitForFunction(
        () => window.__testResults,
        null,
        { timeout: 60000 },
    );

    const { total, failures } = await results.jsonValue();
    console.log(`Tests: ${total} total, ${failures} failures`);

    if (errors.length > 0) {
        console.log('Page errors:', errors);
    }

    expect(total).toBeGreaterThan(0);
    expect(failures).toBe(0);
});
```

- [x] **Step 3: Create test/browser/index.html**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>bem-components browser tests</title>
    <link rel="stylesheet" href="/node_modules/mocha/mocha.css">
    <script src="/node_modules/mocha/mocha.js"></script>
</head>
<body>
    <div id="mocha"></div>
    <script type="module" src="./entry.js"></script>
</body>
</html>
```

- [x] **Step 4: Create test/browser/modules-shim.js**

Copy from bem-core:

```bash
cp ../bem-core/test/browser/modules-shim.js test/browser/modules-shim.js
```

- [x] **Step 5: Create test/browser/bemhtml-shim.js**

Copy from bem-core:

```bash
cp ../bem-core/test/browser/bemhtml-shim.js test/browser/bemhtml-shim.js
```

- [x] **Step 6: Create test/browser/entry.js**

This is the largest file — it imports all blocks, sets up mocha/chai/sinon, imports all spec files, and runs tests. Adapt from bem-core's `test/browser/entry.js`:

```js
import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai from 'chai';

chai.use(sinonChai);

// Setup mocha
mocha.setup({ ui: 'bdd', timeout: 10000 });

// Import all bem-components blocks (triggers side effects, registers blocks)
import 'bem:control';
import 'bem:icon';
import 'bem:image';
// ... (all blocks — same list as platform entry point)
import 'bem:select';
import 'bem:attach';

// Import modules shim for spec files that still use modules.require
import { modules } from './modules-shim.js';

// Register blocks in modules shim
// (needed for spec files that use modules.require)
// ... register each block module

// Import all spec files
const specModules = import.meta.glob('../../common.blocks/**/*.spec.js', { eager: true });

// Run mocha and record results
mocha.run((failures) => {
    window.__testResults = {
        total: mocha.suite.total(),
        failures,
    };
});
```

Note: The exact content of entry.js depends on which spec files exist and what they need. Build iteratively — start with a minimal version and add imports as needed.

- [x] **Step 7: Commit**

```bash
git add playwright.config.js test/
git commit -m "feat: add Playwright browser test infrastructure"
```

### Task 25: Migrate spec files to ES modules

> **Actual:** 279 browser spec tests pass. Real BEMHTML compiled via `bem-xjst` (not a shim) using `build/compile-bemhtml.js`.

**Files:**
- Modify: all `*.spec.js` files in `common.blocks/`, `desktop.blocks/`, `touch.blocks/`

- [x] **Step 1: Apply ESM transform to spec files**

Spec files use `modules.define` for test setup:

**Before:**
```js
modules.define('spec', ['button', 'i-bem-dom', 'jquery', 'BEMHTML', 'sinon', 'chai'],
    function(provide, Button, bemDom, $, BEMHTML, sinon, chai) {
        describe('button', function() {
            // tests...
        });
        provide();
    }
);
```

**After:**
```js
import Button from 'bem:button';
import bemDom from 'bem:i-bem-dom';
import $ from 'bem:jquery';

describe('button', function() {
    // tests...
    // BEMHTML and sinon/chai are provided globally by entry.js
});
```

- [x] **Step 2: Run browser tests**

```bash
npm run test:browser
```

Debug failures iteratively.

- [x] **Step 3: Commit**

```bash
git add common.blocks/ desktop.blocks/ touch.blocks/
git commit -m "refactor: migrate spec files to ES modules"
```

### Task 26: Rewrite Hermione E2E tests as Playwright tests

**Files:**
- Create: `test/e2e/` directory with Playwright E2E tests

- [x] **Step 1: Create test/e2e directory**

```bash
mkdir -p test/e2e
```

- [x] **Step 2: Rewrite each hermione test as a Playwright test**

> **Actual:** Expanded from ~19 hermione files to 232 Playwright E2E visual regression tests covering all visual states (including opened popup/dropdown/select/modal). Platform-agnostic snapshots.

For each of the ~19 hermione test files, create a corresponding Playwright test:

**Hermione pattern:**
```js
describe('button', function() {
    it('plain', function() {
        return this.browser
            .url('desktop.tests/button/hermione/hermione.html')
            .assertView('plain', '.button');
    });
});
```

**Playwright pattern:**
```js
import { test, expect } from '@playwright/test';

test.describe('button', () => {
    test('plain', async ({ page }) => {
        await page.goto('/test/e2e/fixtures/button.html');
        await expect(page.locator('.button')).toHaveScreenshot('button-plain.png');
    });
});
```

Note: This requires creating HTML fixture files for each component and generating new baseline screenshots. Work through components one at a time.

- [x] **Step 3: Generate baseline screenshots**

```bash
npx playwright test --update-snapshots
```

- [x] **Step 4: Run E2E tests**

```bash
npx playwright test test/e2e/
```

- [x] **Step 5: Commit**

```bash
git add test/e2e/
git commit -m "feat: add Playwright E2E tests (replacing Hermione)"
```

### Task 26a: Adapt template specs (tmpl-specs)

**Files:**
- Potentially create: test runner script for tmpl-specs

`*.tmpl-specs/` directories contain BEMJSON → HTML test pairs. They verify that both template engines (BEMHTML + BH) produce correct HTML from the same BEMJSON input.

> **Actual:** Created `test/run-tmpl-specs.js` runner. Added BH testing via `bh@4.2.1`. 3 known BH/BEMHTML differences marked as todo.

- [x] **Step 1: Inventory tmpl-specs**

```bash
fd -t d 'tmpl-specs' common.blocks/ | head -10
```

- [x] **Step 2: Understand the test format**

Each tmpl-spec has:
- `*.bemjson.js` — input BEMJSON
- `*.html` — expected HTML output

Currently ENB compiles templates and compares output. Need a standalone runner.

- [x] **Step 3: Create a tmpl-specs runner**

Create `test/run-tmpl-specs.js` that:
1. Reads each `.bemjson.js` file
2. Compiles it through BEMHTML and BH
3. Compares output with reference `.html` file
4. Reports pass/fail

- [x] **Step 4: Add npm script**

```json
"test:tmpls": "node test/run-tmpl-specs.js"
```

- [x] **Step 5: Run and verify**

```bash
npm run test:tmpls
```

- [x] **Step 6: Commit**

```bash
git add test/run-tmpl-specs.js package.json
git commit -m "feat: add tmpl-specs runner for BEMHTML and BH template testing"
```

### Task 27: Update test scripts in package.json

**Files:**
- Modify: `package.json`

- [x] **Step 1: Update scripts**

```json
"scripts": {
  "dev": "vite --config build/vite.config.js",
  "build": "npm run build:desktop && npm run build:touch-pad && npm run build:touch-phone",
  "build:desktop": "BEM_PLATFORM=desktop vite build --config build/vite.config.js",
  "build:touch-pad": "BEM_PLATFORM=touch-pad vite build --config build/vite.config.js",
  "build:touch-phone": "BEM_PLATFORM=touch-phone vite build --config build/vite.config.js",
  "lint": "eslint .",
  "test": "npm run lint && npm run test:tmpls && npm run test:browser",
  "test:tmpls": "node test/run-tmpl-specs.js",
  "test:browser": "playwright test",
  "test:browser:ui": "playwright test --ui",
  "prepare": "husky"
}
```

- [x] **Step 2: Run full test suite**

```bash
npm test
```

- [x] **Step 3: Commit**

```bash
git add package.json
git commit -m "feat: finalize test scripts"
```

---

## Chunk 6: Documentation and Validation (Phase 6)

### Task 28: Update documentation

**Files:**
- Modify: `MIGRATION.md`, `MIGRATION.ru.md`
- Modify: `README.md`, `README.ru.md`
- Modify: `CHANGELOG.md`, `CHANGELOG.ru.md`
- Modify: `CONTRIBUTING.md`, `CONTRIBUTING.ru.md`

- [x] **Step 1: Write MIGRATION.md**

Document all breaking changes v6 → v7. Reference `../bem-core/MIGRATION.md` for structure:

Sections:
1. Node.js 20+ required
2. ym → ES modules (import patterns)
3. jQuery 3 → 4 (peerDep)
4. bem-core 4 → 5 (peerDep)
5. Build: ENB → Vite (new commands)
6. Linting: jshint/jscs → ESLint 10
7. Testing: Hermione → Playwright
8. CI: Travis → GitHub Actions
9. Git hooks: git-hooks → husky

- [x] **Step 2: Update README.md / README.ru.md**

Update:
- Installation instructions (npm, no bower)
- Build commands (`npm run build`, `npm run dev`)
- Test commands (`npm test`, `npm run test:browser`)
- Node.js version requirement (>=20)
- Dependencies (bem-core ^5.0.0, jquery ^4.0.0)

- [x] **Step 3: Update CHANGELOG.md / CHANGELOG.ru.md**

Add v7.0.0 entry at the top.

- [x] **Step 4: Update CONTRIBUTING.md / CONTRIBUTING.ru.md**

Update development workflow:
- `npm install` (no bower)
- `npm run dev` (Vite dev server, no `magic server`)
- `npm run lint` (ESLint, no jshint/jscs)
- `npm test` (Playwright, no Hermione)

- [x] **Step 5: Commit**

```bash
git add MIGRATION.md MIGRATION.ru.md README.md README.ru.md CHANGELOG.md CHANGELOG.ru.md CONTRIBUTING.md CONTRIBUTING.ru.md
git commit -m "docs: update documentation for v7 migration"
```

### Task 29: Final validation

> **Actual results:** All validation steps pass. 279 browser spec tests, 232 E2E visual regression tests, tmpl-specs (BEMHTML + BH), lint — all green.

- [x] **Step 1: Run lint**

```bash
npm run lint
```

Result: PASS (0 errors)

- [x] **Step 2: Run browser tests**

```bash
npm run test:browser
```

Result: PASS (279 browser spec tests, 232 E2E tests)

- [x] **Step 3: Build all platforms**

```bash
npm run build
```

Expected: SUCCESS for all 3 platforms

- [x] **Step 4: Verify dist output**

```bash
eza --tree dist/
```

Expected:
```
dist/
├── desktop/
│   ├── bem-components.css
│   ├── bem-components.js
│   └── bem-components.mjs
├── touch-pad/
│   ├── bem-components.css
│   ├── bem-components.js
│   └── bem-components.mjs
└── touch-phone/
    ├── bem-components.css
    ├── bem-components.js
    └── bem-components.mjs
```

- [x] **Step 5: Verify ESM bundle works**

```bash
node -e "import('./dist/desktop/bem-components.mjs').then(m => console.log('ESM OK:', Object.keys(m).length, 'exports'))"
```

- [x] **Step 6: Run full test suite**

```bash
npm test
```

Expected: PASS

- [x] **Step 7: Final commit if any fixes were needed**

```bash
git add -u
git commit -m "fix: final validation fixes for v7"
```
