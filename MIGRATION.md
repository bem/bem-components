# Migration

## 7.0.0

### Node.js 20+ required

The minimum supported Node.js version is now 20 (was >=4). Update your `.nvmrc` or CI configuration accordingly.

### ym → ES modules

The `ym` module system (`modules.define`/`modules.require`) has been replaced with native ES modules.

Before:

```js
modules.define('my-block', ['i-bem-dom', 'events'], function(provide, bemDom, events) {

provide(bemDom.declBlock(this.name, { /* ... */ }));

});
```

After:

```js
import bemDom from 'bem:i-bem-dom';
import events from 'bem:events';

export default bemDom.declBlock('my-block', { /* ... */ });
```

All `bem:*` imports are resolved at build time by `vite-plugin-bem-levels` to the actual file paths, respecting platform-specific level priorities.

### jQuery 3 → 4

The `jquery` peer dependency is now `^4.0.0`.

Key breaking changes in jQuery 4:
- `$.unique()` has been removed. Use `$.uniqueSort()`.
- Several deprecated methods have been removed. See [jQuery 4.0 upgrade guide](https://jquery.com/upgrade-guide/4.0/).

### bem-core 4 → 5

The `bem-core` peer dependency is now `^5.0.0`. See the [bem-core MIGRATION guide](https://github.com/bem/bem-core/blob/v5/MIGRATION.md) for details.

### Build system: ENB → Vite

The entire ENB toolchain (including `borschik` and `bem-tools`) has been replaced with Vite.

Before:

```bash
./node_modules/.bin/enb make
```

After:

```bash
npm run build             # all 3 platforms (desktop, touch-pad, touch-phone)
npm run build:desktop     # desktop only
npm run build:touch-pad   # touch-pad only
npm run build:touch-phone # touch-phone only
npm run dev               # development server
```

The Vite config is in `build/vite.config.js`. The custom `vite-plugin-bem-levels` plugin in `build/plugins/` handles BEM level scanning and module resolution.

### Linting: jshint/jscs → ESLint 10

The `jshint` and `jscs` linters have been replaced with ESLint 10 using flat config (`eslint.config.js`).

```bash
npm run lint
```

### Testing: Hermione → Playwright

Browser regression tests have been migrated from Hermione (SauceLabs) to Playwright.

```bash
npm run test:browser      # run tests headless
npm run test:browser:ui   # run tests with Playwright UI
```

### CSS: PostCSS via Vite

`.post.css` files are unchanged. PostCSS processing is now handled natively by Vite instead of ENB-based PostCSS plugins. The PostCSS configuration is in `postcss.config.js`.

### CI: Travis → GitHub Actions

Replace `.travis.yml` with `.github/workflows/ci.yml`. The new CI runs lint, test:browser, and build jobs.

### Git hooks: git-hooks → husky

The `.githooks/` directory has been replaced with husky. The `prepare` script in `package.json` sets up husky automatically on `npm install`.

### Bower removed

Bower is no longer used. All dependencies are managed via npm.

## 2.1.0

The `width` modifier could be used independent of the theme `islands` in the `input`, `select` and `textarea` blocks. Add this modifier to the dependencies to generate BEMJSON dynamically:

```
({
    shouldDeps : { block : 'input', mods : { width : 'available' } }
})
```
