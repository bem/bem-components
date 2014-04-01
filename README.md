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

