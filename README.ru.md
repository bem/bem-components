# BEM Components Library [![Build Status](https://travis-ci.org/bem/bem-components.svg?branch=v2)](https://travis-ci.org/bem/bem-components) [![Coverage Status](https://coveralls.io/repos/bem/bem-components/badge.png?branch=v2)](https://coveralls.io/r/bem/bem-components?branch=v2)

## Что это?

Библиотека блоков, предоставляющая готовые элементы управления форм и некоторые другие блоки.
Содержит абстрагированные от дизайна базовые реализации. Возможно опциональное использование тем.

## Использование

Подключить библиотеку в проект можно любым известным вам способом. Например, с помощью [bem-tools](http://ru.bem.info/tools/bem/bem-tools/) или `ENB`. Сделать это можно в конфигурационном файле выбранного вами сборщика.

Если вы используете [project-stub](http://ru.bem.info/tutorials/project-stub/) как основу проекта, то подключать библиотеку не нужно. Она подключена в проект по умолчанию.

<a name="supported-browsers"></a>

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
* [button](common.blocks/button/button.ru.md)
* [checkbox](common.blocks/checkbox/checkbox.ru.md)
* [checkbox-group](common.blocks/checkbox-group/checkbox-group.ru.md)
* [control](common.blocks/control/control.ru.md)
* [control-group](common.blocks/control-group/control-group.ru.md)
* [dropdown](common.blocks/dropdown/dropdown.ru.md)
* [icon](common.blocks/icon/icon.ru.md)
* [image](common.blocks/image/image.ru.md)
* [input](common.blocks/input/input.ru.md)
* [link](common.blocks/link/link.ru.md)
* [menu](common.blocks/menu/menu.ru.md)
* [menu-item](common.blocks/menu-item/menu-item.ru.md)
* [popup](common.blocks/popup/popup.ru.md)
* [radio](common.blocks/radio/radio.ru.md)
* [radio-group](common.blocks/radio-group/radio-group.ru.md)
* [select](common.blocks/select/select.ru.md)
* [spin](common.blocks/spin/spin.ru.md)
* [textarea](common.blocks/textarea/textarea.ru.md)
* [z-index-group](common.blocks/z-index-group/z-index-group.ru.md)

### Технологии

* [i-bem.js](https://ru.bem.info/technology/i-bem/current/i-bem-js/)
* [YModules](https://ru.bem.info/tools/bem/modules/)
* [BEMHTML](https://ru.bem.info/technology/bemhtml/current/reference/)
* [BH](https://ru.bem.info/technology/bh/current/reference/)
* [BEMTREE](https://ru.bem.info/technology/bemtree/current/bemtree/)
* [Stylus](https://learnboost.github.io/stylus/)

### Инструменты

* [borschik](http://ru.bem.info/tools/optimizers/borschik/)
* [bem-tools](http://ru.bem.info/tools/bem/bem-tools/)
* [ENB](http://enb-make.info/)

### Оптимизаторы

* [svgo](https://github.com/svg/svgo)
* [clean-css](http://www.cleancss.com/about.php)
* [ImageOptim](http://imageoptim.com/)

### Линтеры

* [jshint](http://www.jshint.com/)
* [jscs](https://github.com/jscs-dev/node-jscs)

### Автопрефиксер

* [Autoprefixer](https://github.com/ai/autoprefixer/)

Применяется во время сборки для генерации вендорных префиксов для поддерживаемых браузеров на основании конфигурации.

## История изменений

История изменений доступна на [отдельной странице](CHANGELOG.md).

## Миграция

Миграция описана на [отдельной странице](MIGRATION.md).

## Команда разработчиков

* [veged](https://github.com/veged)
* [dfilatov](https://github.com/dfilatov)
* [mishanga](https://github.com/mishanga)

## Принципы разработки библиотеки

В основе всех принципов разработки bem-components лежит опыт работы над другими библиотеками: «взять все лучшее из старого и не повторять прошлые ошибки».

**Проект open source**

Разработка библиотеки ведется на [GitHub](https://github.com/bem/bem-components). Все задачи, все планы по разработке и сроки доступны там же. Любой разработчик может принять участие в работе над библиотекой: создать задачу с пожеланиями для команды разработчиков или прислать pull request со своими правками или собственным кодом.

**Автоматизация**

Автоматизация всех возможных процессов для облегчения жизни разработчиков: разработчик не должен совершать повторяющиеся действия, для этого есть роботы.

**Bleeding edge**

Библиотека разрабатывается с ориентацией на будущее: на [актуальные версии браузеров](#supported-browsers) и на использование только последних версий инструментов. Все это направлено на то, чтобы библиотека не теряла свою актуальность в процессе разработки.

**Оптимизация**

Решения по оптимизации внедряются непосредственно во время разработки кода каждого конкретного блока. Пути оптимизации продумываются заранее, чтобы не возникало желания оптимизировать уже написанный код.

**Селекторы в контексте темы**

Библиотека предоставляет возможность создавать разные темы для блоков или подключать уже имеющиеся в любом количестве и сочетании на страницу. Есть также возможность полностью отказаться от использования тем в своем проекте и получить привычные нативные браузерные контроллы, для которых уже написаны шаблоны и JavaScript-реализация.

**Поддержка нескольких тем**

В библиотеке реализована одновременная поддержка нескольких тем. На данном этапе основной темой (и пока единственной) является тема `islands`, которая реализует новый дизайн сервисов Яндекса. В `bem-components` создан еще один служебный дизайн, представленный темой `simple`. Он разработан для проверки возможности сосуществования нескольких тем внутри одной библиотеки.

**Поддержка платформ**

В библиотеке реализована поддержка разных платформ: `desktop`, `touch` и `mobile`. При этом блоки разработаны таким образом, чтобы реализация для одной платформы могла корректно отображаться и правильно себя вести и на другой.

### Варианты поставки библиотеки

**Source**

Для технически идентичных сервисов, которые используют тот же препроцессор и шаблонизатор, библиотека будет поставляться в исходном виде — «source».

**Compiled**

Для тех, кто использует другой препроцессор или вообще его не использует, будет возможность поставки скомпилированной версии — «compiled».

**Library**

Для возможности подключения библиотеки ссылками на страницу, по аналогии с jQuery или Bootstrap, будет поставка в виде библиотеки — «library».

## Разработка

### Рабочая копия

Получаем исходники:

```bash
$ git clone git://github.com/bem/bem-components.git
$ cd bem-components
```

Устанавливаем зависимости:

```bash
$ npm install
```
Для последующего запуска локально установленных `enb` нам потребуется `export PATH=./node_modules/.bin:$PATH` или любой альтернативный способ.

Устанавливаем зависимые библиотеки:

```bash
$ bower install
```

Собираем примеры и тесты:

```bash
$ npm run build-all
```

Запускаем сервер для разработки:

```bash
$ enb server
```

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
1. Сделать коммит и отправить изменения в удаленный репозиторий (`push`). Если это необходимо, то нужно сделать `rebase` от базовой ветки версии.
1. Создать pull request на основе созданной ветки (или несколько pull request'ов для случая изменений в нескольких версиях).
1. Любым способом связать pull request и issue (например, c помощью [комментария](https://github.com/blog/1506-closing-issues-via-pull-requests)).
1. Ждать закрытия pull request и issue ;-)

### Модульное тестирование

#### Юнит-тесты на JavaScript

Чтобы запустить юнит-тесты на JS, используйте команду `npm run test-specs`. Кроме того, можно использовать точечную сборку, например, `enb make specs desktop.specs/input`.

Все тесты автоматически запускаются на [Travis](https://travis-ci.org) для каждого pull request'а.

### Регрессионное тестирование верстки

Для тестирования верстки мы используем [gemini](https://github.com/bem/gemini).

Тесты каждого блока находятся в отдельном файле вида `block-name.gemini.js` в директории `gemini/`. Запускаются тесты локально руками и в Travis автоматически. В качестве [Selenium Grid](https://code.google.com/p/selenium/wiki/Grid2) мы используем сервис [SauceLabs](https://saucelabs.com).

Для запуска тестов локально вам понадобится [OpenSauce](https://saucelabs.com/opensauce) аккаунт в SauceLabs и утилита [Sauce Connect](https://saucelabs.com/connect). Разработчики команды БЭМ могут использовать аккаунт `bem-components` (мы не публикуем логин и пароль, потому что на аккаунте лимит на 3 одновременно запущенных браузера; будет эффективнее использовать разные аккаунты для ручного запуска тестов, тем более что они бесплатные).

Для запуска тестов:

1. Настройте окружение (переменные среды `SAUCE_USERNAME` и `SAUCE_ACCESS_KEY`).
1. Запустите утилиту `sc` (SauceConnect) и дождитесь, пока она поднимет туннель.
1. Запустите тесты командой `npm run gemini`.
1. Для сбора новых версий скриншотов используйте команду `npm run gemini-gather`.

Если вы разрабатываете новые тесты и хотите их запускать локально и быстрее, можно поднять свой собственный Selenium Server или phantomjs с WebDriver сервером. Для этого нужно:

1. Установить и запустить [selenium-server](http://docs.seleniumhq.org/download/) или [phantomjs](http://phantomjs.org/).
1. Исправить в файле `.gemini.yml` опцию `gridUrl` на `http://localhost:4444/`.
1. Запустить тесты (см. выше).

Более подробно про запуск `gemini` с разными бекендами читайте в [документации](https://github.com/bem/gemini/blob/master/README.md).

**Важно!** Коммитить в репозиторий необходимо скриншоты, собранные в SauceLabs, чтобы избежать, например, незначительных отличий в отрисовке шрифтов.

Перед коммитом новых или изменённых эталонных изображений:

1. Внимательно проверьте их правильность. Если есть сомнения, используйте утилиту Araxis Merge или аналогичную, чтобы увидеть разницу между старой и новой версией изображения.
1. Сожмите их утилитой [ImageOptim](http://imageoptim.com/) (это самый эффективный инструмент сжатия изображений на май 2014 года).

#### Тесты на шаблоны

Инструменты сборки библиотеки позволяют собирать и запускать тесты на BEMHTML- и BH-шаблоны блоков.

Чтобы добавить тест для блока, нужно в его директории на требуемом уровне переопределения создать
каталог с названием `[имя блока].tmpl-specs` для хранения файлов тестов.

Каждый тест состоит из пары файлов в технологиях BEMJSON и HTML. Таких пар файлов у блока
может быть несколько. Имена файлов произвольные, но они (не включая расширения) для каждого теста должны совпадать. Например, **10-default**.bemjson.js и **10-default**.html.

В BEMJSON-файле находится пример для блока, в HTML – эталонный HTML-код, который должен
получиться после применения шаблона блока к BEMJSON-у примера.

```
desktop.blocks
    └── myblocks
        ├── myblock.bemhtml.js
        ├── myblock.bh.js
        ├── ...
        └── myblock.tmpl-specs
            ├── 10-default.bemjson.js
            ├── 10-default.html
            ├── 20-advanced.bemjson.js
            └── 20-advanced.html
```

Команда для сборки и запуска тестов:

`enb make tmpl-specs` или `npm run test-tmpls`

Сборка тестов на нужном уровне переопределения:

`enb make tmpl-specs desktop.tmpl-specs`

Сборка тестов только для одного блока (точечная сборка):

`enb make tmpl-specs desktop.tmpl-specs/button`

В случае успешной сборки, тесты будут запущены с последующим выводом результатов. Если результат применения
шаблона не совпадает с эталонным HTML, то в логе будет ошибка с указанием отличий от эталона.

Все тесты автоматически запускаются на [Travis](https://travis-ci.org) для каждого pull request'a.
