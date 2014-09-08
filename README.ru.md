# BEM Components Library [![Build Status](https://travis-ci.org/bem/bem-components.svg?branch=v2)](https://travis-ci.org/bem/bem-components) [![Coverage Status](https://coveralls.io/repos/bem/bem-components/badge.png?branch=v2)](https://coveralls.io/r/bem/bem-components?branch=v2)

## Что это?

Библиотека блоков, предоставляющая готовые элементы управления форм и некоторые другие блоки.
Содержит абстрагированные от дизайна базовые реализации. Возможно опциональоне использование тем.

## Использование

Подключить библиотеку в проект любым известным способом. Например, с помощью `bem-tools` или `ENB`.

## Поддерживаемые браузеры
* Desktop:
  * Firefox 30+
  * Chrome last 2 versions
  * Safari 6.0+
  * Opera 12.1+
  * Internet Explorer 9+
* Touch-pad:
  * Android 4+
  * iOS 5+
* Touch-phone:
  * Android 4+
  * iOS 6+
  * Windows Phone 8+ (Internet Explorer 10+)

## Состав

### Уровни

* `common.blocks` — предназначен для любых устройств и браузеров
* `desktop.blocks` — следует использовать для всех десктопных браузеров
* `touch.blocks` — реализует некоторую специфику для тач-платформ

### Блоки

* [attach](common.blocks/attach/attach.ru.md)
* [control](common.blocks/control/control.ru.md)
* [control-group](common.blocks/control-group/control-group.ru.md)
* [input](common.blocks/input/input.ru.md)
* [button](common.blocks/button/button.ru.md)
* [checkbox](common.blocks/checkbox/checkbox.ru.md)
* [checkbox-group](common.blocks/checkbox-group/checkbox-group.ru.md)
* [icon](common.blocks/icon/icon.ru.md)
* [image](common.blocks/image/image.ru.md)
* [input](common.blocks/input/input.ru.md)
* [spin](common.blocks/spin/spin.ru.md)
* [dropdown](common.blocks/dropdown/dropdown.ru.md)
* [link](common.blocks/link/link.ru.md)
* [menu-item](common.blocks/menu-item/menu-item.ru.md)
* [menu](common.blocks/menu/menu.ru.md)
* [popup](common.blocks/popup/popup.ru.md)
* [radio-group](common.blocks/radio-group/radio-group.ru.md)
* [radio](common.blocks/radio/radio.ru.md)
* [z-index-group](common.blocks/z-index-group/z-index-group.ru.md)

## История изменений

История изменений доступна на [отдельной странице](CHANGELOG.md).

## Миграция

Миграция описана на [отдельной странице](MIGRATION.md).

## Команда разработчиков

* [veged](https://github.com/veged)
* [dfilatov](https://github.com/dfilatov)
* [mishanga](https://github.com/mishanga)

## Разработка

### Рабочая копия

1.
  Получаем исходники:
  ```bash
  $ git clone git://github.com/bem/bem-components.git
  $ cd bem-components
  ```

1.
  Устанавливаем зависимости:
  ```bash
  $ npm install
  ```
  Для последующего запуска локально установленных `enb` нам потребуется `export PATH=./node_modules/.bin:$PATH` или любой альтернативный способ.

1.
  Устанавливаем зависимые библиотеки:
  ```bash
  $ bower install
  ```

1.
  Собираем примеры и тесты:
  ```bash
  $ npm run build-all
  ```

1.
  Запускаем разработческий сервер:
  ```bash
  $ enb server
  ```

1.
  Проверяем code-style:
  ```bash
  $ npm run lint
  ```

### Внесение изменений

1. [Создать issue](https://github.com/bem/bem-components/issues/new) с описанием сути изменений.
1. Определить в какую версию необходимо внести изменения.
1. Сделать feature-branch с указанием номера issue и версии (`issues/<номер issue>@v<номер версии>`) на основе ветки версии.
Например для issue с номером 42 и версией 2: `git checkout -b issues/42@v2`. Если изменения нужно внести в несколько версий, то для каждой из версий создаётся отдельная ветка.
1. Внести изменения (для версии v2, можно локально проверить, что ничего не сломалось, запустив `npm test`).
1. Закоммитить и сделать `push`. Если это необходимо, то нужно сделать `rebase` от базовой ветки версии.
1. Создать pull-request на основе созданной ветки (или несколько pull-request'ов для случая изменений в нескольких версиях).
1. Любым способом связать pull-request и issue (например, c помощью [комментария](https://github.com/blog/1506-closing-issues-via-pull-requests)).
1. Ждать закрытия pull-request и issue ;-)

### Модульное тестирование

#### Юнит-тесты на JavaScript

Чтобы запустить юнит-тесты на JS, используйте команду `npm run test-specs`. Кроме того, можно использовать точечную сборку, например, `enb make specs desktop.specs/input`.

Все тесты автоматически запускаются на [Travis](https://travis-ci.org) для каждого пулл-реквеста.

### Регрессионное тестирование верстки

Для тестирования верстки мы используем [gemini](https://github.com/bem/gemini).

Тесты каждого блока находятся в отдельном файле вида `block-name.gemini.js` в директории `gemini/`. Запускаются тесты локально руками и в Travis автоматически. В качестве [Selenium Grid](https://code.google.com/p/selenium/wiki/Grid2) мы используем сервис [SauceLabs](https://saucelabs.com).

Для запуска тестов локально вам понадобится [OpenSauce](https://saucelabs.com/opensauce) аккаунт в SauceLabs и утилита [Sauce Connect](https://saucelabs.com/connect). Разработчики команды БЭМ могут использовать аккаунт `bem-components` (мы не публикуем логин и пароль, потому что на аккаунте лимит на 3 одновременно запущенных браузера; будет эффективнее использовать разные аккаунты для ручного запуска тестов, тем более что они бесплатные).

Для запуска тестов:

1. Настройте окружение (переменные среды `SAUCE_USERNAME` и `SAUCE_ACCESS_KEY`).
2. Запустите утилиту `sc` (SauceConnect) и дождитесь, пока она поднимет туннель.
3. Запустите тесты командой `npm run gemini`.
4. Для сбора новых версий скриншотов используйте команду `npm run gemini-gather`.

Если вы разрабатываете новые тесты и хотите их запускать локально и быстрее, можно поднять свой собственный Selenium Server или phantomjs с WebDriver сервером. Для этого нужно:

1. Установить и запустить [selenium-server](http://docs.seleniumhq.org/download/) или [phantomjs](http://phantomjs.org/).
2. Исправить в файле `.gemini.yml` опцию `gridUrl` на `http://localhost:4444/`.
3. Запустить тесты (см. выше).

Более подробно про запуск `gemini` с разными бекендами читайте в [документации](https://github.com/bem/gemini/blob/master/README.md).

**Важно!** Коммитить в репозиторий необходимо скриншоты, собранные в SauceLabs, чтобы избежать, например, незначительных отличий в отрисовке шрифтов.

Перед коммитом новых или изменённых эталонных изображений:

1. Внимательно проверьте их правильность. Если есть сомнения, используйте утилиту Araxis Merge или аналогичную, чтобы увидеть разницу между старой и новой версией изображения.
2. Сожмите их утилитой [ImageOptim](http://imageoptim.com/) (это самый эффективный инструмент сжатия изображений на май 2014 года).

#### Тесты на шаблоны

Чтобы запустить тесты на шаблоны выполните команду `npm run test-tmpls`. Кроме того, можно использовать точечную сборку, например, `enb make tmpl-specs desktop.tmpl-specs/input`.

Все тесты автоматически запускаются на [Travis](https://travis-ci.org) для каждого пулл-реквеста.
