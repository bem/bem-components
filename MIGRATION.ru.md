# Миграция

## 7.0.0

### Требуется Node.js 20+

Минимальная поддерживаемая версия Node.js теперь 20 (было >=4). Обновите `.nvmrc` или конфигурацию CI.

### ym → ES-модули

Модульная система `ym` (`modules.define`/`modules.require`) заменена на нативные ES-модули.

До:

```js
modules.define('my-block', ['i-bem-dom', 'events'], function(provide, bemDom, events) {

provide(bemDom.declBlock(this.name, { /* ... */ }));

});
```

После:

```js
import bemDom from 'bem:i-bem-dom';
import events from 'bem:events';

export default bemDom.declBlock('my-block', { /* ... */ });
```

Все импорты `bem:*` разрешаются на этапе сборки плагином `vite-plugin-bem-levels` в реальные пути файлов с учетом приоритетов уровней переопределения для платформ.

### jQuery 3 → 4

Зависимость `jquery` теперь `^4.0.0`.

Основные изменения в jQuery 4:
- `$.unique()` удалён. Используйте `$.uniqueSort()`.
- Удалён ряд устаревших методов. Подробнее см. [jQuery 4.0 upgrade guide](https://jquery.com/upgrade-guide/4.0/).

### bem-core 4 → 5

Зависимость `bem-core` теперь `^5.0.0`. Подробнее см. [руководство по миграции bem-core](https://github.com/bem/bem-core/blob/v5/MIGRATION.md).

### Сборка: ENB → Vite

Весь инструментарий ENB (включая `borschik` и `bem-tools`) заменён на Vite.

До:

```bash
./node_modules/.bin/enb make
```

После:

```bash
npm run build             # все 3 платформы (desktop, touch-pad, touch-phone)
npm run build:desktop     # только desktop
npm run build:touch-pad   # только touch-pad
npm run build:touch-phone # только touch-phone
npm run dev               # сервер разработки
```

Конфигурация Vite находится в `build/vite.config.js`. Пользовательский плагин `vite-plugin-bem-levels` в `build/plugins/` отвечает за сканирование уровней переопределения BEM и разрешение модулей.

### Линтинг: jshint/jscs → ESLint 10

Линтеры `jshint` и `jscs` заменены на ESLint 10 с плоской конфигурацией (`eslint.config.js`).

```bash
npm run lint
```

### Тестирование: Hermione → Playwright

Регрессионные тесты в браузере мигрированы с Hermione (SauceLabs) на Playwright.

```bash
npm run test:browser      # запуск тестов в headless-режиме
npm run test:browser:ui   # запуск тестов с UI Playwright
```

### CSS: PostCSS через Vite

Файлы `.post.css` не изменились. Обработка PostCSS теперь выполняется нативно через Vite вместо ENB-плагинов. Конфигурация PostCSS находится в `postcss.config.js`.

### CI: Travis → GitHub Actions

Замените `.travis.yml` на `.github/workflows/ci.yml`. Новый CI выполняет задачи lint, test:browser и build.

### Git-хуки: git-hooks → husky

Директория `.githooks/` заменена на husky. Скрипт `prepare` в `package.json` автоматически настраивает husky при `npm install`.

### Bower удалён

Bower больше не используется. Все зависимости управляются через npm.

## 2.1.0

В блоках `input`, `select` и `textarea` модификатор `width` вынесен из темы `islands`. Это дает возможность использовать его без указания темы. Теперь при динамической генерации BEMJSON нужно добавить модификатор в зависимости:

```
({
    shouldDeps : { block : 'input', mods : { width : 'available' } }
})
```
