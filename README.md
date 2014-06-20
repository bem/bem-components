# BEM Components Library [![Build Status](https://travis-ci.org/bem/bem-components.svg?branch=v2)](https://travis-ci.org/bem/bem-components) [![Coverage Status](https://coveralls.io/repos/bem/bem-components/badge.png?branch=v2)](https://coveralls.io/r/bem/bem-components?branch=v2)

## Что это?

Библиотека блоков для управления формами.
Содержит абстрагированные от дизайна базовые реализации.

## Использование

Подключить библиотеку в проект любым известным способом.

## Поддерживаемые браузеры
* Desktop:
  * Firefox 24+
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

### Блоки

### Технологии

## История изменений

История изменений доступна на [отдельной странице](CHANGELOG.md).

## Миграция

Миграция описана на [отдельной странице](MIGRATION.md).

## Разработка

### Рабочая копия

1. 
  Получаем исходники:
  ```bash
  $ git clone -b v2 git://github.com/bem/bem-components.git
  $ cd bem-components
  ```

1. 
  Устанавливаем зависимости:
  ```bash
  $ npm install
  ```
  Для последующего запуска локально установленных bem-tools нам потребуется `export PATH=./node_modules/.bin:$PATH` или любой альтернативный способ.

1. 
  Устанавливаем зависимые библиотеки:
  ```bash
  $ bower-npm-install
  ```

1. 
  Собираем примеры и тесты:
  ```bash
  $ bem make sets
  ```

1. 
  Запускаем разработческий сервер:
  ```bash
  $ bem server
  ```

1. 
  Проверяем code-style
  ```bash
  $ npm run lint
  ```

### Внесение изменений

1. [Создать issue](https://github.com/bem/bem-components/issues/new) с описанием сути изменений.
1. Определить в какую версию необходимо внести изменения.
1. Сделать feature-branch с указанием номера issue и версии (`issues/<номер issue>@v<номер версии>`) на основе ветки версии.
Например для issue с номером 42 и версией 1: `git checkout -b issues/42@v1 v1`. Если изменения нужно внести в несколько версий, то для каждой из версий создаётся отдельная ветка.
1. Внести изменения (для версии v2, можно локально проверить, что ничего не сломалось, запустив `npm test`).
1. Закоммитить и сделать `push`. Если это необходимо, то нужно сделать `rebase` от базовой ветки версии.
1. Создать pull-request на основе созданной ветки (или несколько pull-request'ов для случая изменений в нескольких версиях).
1. Любым способом связать pull-request и issue (например, c помощью [комментария](https://github.com/blog/1506-closing-issues-via-pull-requests)).
1. Ждать закрытия pull-request и issue ;-)

### Модульное тестирование

### Регрессионное тестирование вёрстки

Для тестирования вёрстки мы используем [gemini](https://github.com/bem/gemini).

Тесты каждого блока находятся в отдельном файле вида `block-name.gemini.js` в директории `gemini/`. Запускаются тесты локально руками и в Travis автоматически. В качестве [Selenium Grid](https://code.google.com/p/selenium/wiki/Grid2) мы используем сервис [SauceLabs](https://saucelabs.com).

Для запуска тестов локально вам понадобится [OpenSauce](https://saucelabs.com/opensauce) аккаунт в SauceLabs и утилита [Sauce Connect](https://saucelabs.com/connect). Разработчики команды БЭМ могут использовать аккаунт `bem-components` (мы не публикуем логин и пароль, потому что на аккаунте лимит на 3 одновременно запущенных браузера; будет эффективнее использовать разные аккаунты для ручного запуска тестов, тем более что они бесплатные).

Для запуска тестов:

1. Настройте окружение (переменные среды `SAUCE_USERNAME` и `SAUCE_ACCESS_KEY`)
2. Запустите утилиту `sc` (SauceConnect) и дождитесь, пока она поднимет туннель
3. Запустите тесты командой `npm run gemini`
4. Для сбора новых версий скриншотов используйте команду `npm run gemini-gather`

Если вы разрабатываете новые тесты и хотите их запускать локально и быстрее, можно поднять свой собственный Selenium Server или phantomjs с WebDriver сервером. Для этого нужно:

1. Установить и запустить [selenium-server](http://docs.seleniumhq.org/download/) или [phantomjs](http://phantomjs.org/)
2. Исправить в файле `.gemini.yml` опцию `gridUrl` на `http://localhost:4444/`
3. Запустить тесты (см. выше)

Более подробно про запуск `gemini` с разными бекендами читайте в [документации](https://github.com/bem/gemini/blob/master/README.md).

**Важно!** Коммитить в репозиторий необходимо скриншоты, собранные в SauceLabs, чтобы избежать, например, незначительных отличий в отрисовке шрифтов.

Перед коммитом новых или изменённых эталонных изображений:

1. Внимательно проверьте их правильность. Если есть сомнения, используйте утилиту Araxis Merge или аналогичную, чтобы увидеть разницу между старой и новой версией изображения.
2. Сожмите их утилитой [ImageOptim](http://imageoptim.com/) (это самый эффективный инструмент сжатия изображений на май 2014 года).
