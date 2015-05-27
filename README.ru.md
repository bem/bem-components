BEM Components Library
======================
[![GitHub Release](https://img.shields.io/github/release/bem/bem-components.svg?style=flat)](https://github.com/bem/bem-components/releases)
[![Build Status](https://img.shields.io/travis/bem/bem-components/v2.svg?style=flat)](https://travis-ci.org/bem/bem-components)
[![Coverage Status](https://img.shields.io/coveralls/bem/bem-components/v2.svg?style=flat)](https://coveralls.io/r/bem/bem-components?branch=v2)
[![devDependency Status](https://img.shields.io/david/dev/bem/bem-components.svg?style=flat)](https://david-dm.org/bem/bem-components#info=devDependencies)

## Что это?

Библиотека с открытым кодом, которая предоставляет набор готовых визуальных компонентов (блоков) для создания веб-интерфейсов.

Библиотека предоставляет темы оформления. В данной версии представлена тема islands, реализующая новый дизайн Яндекса. Предусмотрена одновременная поддержка нескольких тем и возможность создания новых.

## Содержание

* <a href="#levels">Уровни</a>
* <a href="#blocks">Блоки</a>
* <a href="#supported-browsers">Поддерживаемые браузеры</a>
* <a href="#techs">Технологии</a>
* <a href="#tools">Инструменты</a>
* <a href="#usage">Использование</a>
* <a href="#supply">Варианты поставки библиотеки</a>
* <a href="#development">Разработка</a>
* <a href="#maintain">Команда основной разработки</a>
* <a href="#workflow">Рабочий процесс</a>

**Дополнительная информация**

* [История изменений](/CHANGELOG.ru.md)
* [Миграция на последующие версии](/MIGRATION.ru.md)

<a name="levels"></a>
## Уровни переопределения

* `common.blocks` — поддержка всех устройств и браузеров.
* `desktop.blocks` — поддержка всех десктопных браузеров.
* `touch.blocks` — реализация специфических особенностей для touch-платформ.
* `touch-phone.blocks` — реализация специфических особенностей для смартфонов.
* `touch-pad.blocks` — реализация специфических особенностей для планшетов.
* `design/<common|desktop|touch|touch-phone|touch-pad>.blocks` — реализация различных дизайнов (тем).

<a name="blocks"></a>
## Блоки

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
* [modal](common.blocks/modal/modal.ru.md)
* [popup](common.blocks/popup/popup.ru.md)
* [progressbar](common.blocks/progressbar/progressbar.ru.md)
* [radio](common.blocks/radio/radio.ru.md)
* [radio-group](common.blocks/radio-group/radio-group.ru.md)
* [select](common.blocks/select/select.ru.md)
* [spin](common.blocks/spin/spin.ru.md)
* [textarea](common.blocks/textarea/textarea.ru.md)
* [z-index-group](common.blocks/z-index-group/z-index-group.ru.md)

<a name="supported-browsers"></a>
## Поддерживаемые браузеры

* **Desktop**
  * Firefox *(две последние стабильные версии)*
  * Chrome *(две последние стабильные версии)*
  * Safari *(две последние стабильные версии)*
  * Yandex *(две последние стабильные версии)*
  * Opera 12.6+
  * Internet Explorer 9+
  * [Частичная поддержка](#ie8) Internet Explorer 8

* **Touch**
  * Android 4+
  * iOS 5+
  * Internet Explorer 10+

<a name="ie8"></a>
### Поддержка Internet Explorer 8

Для поддержки Internet Explorer 8 подключите на страницу:

* [es5-shim](https://www.npmjs.com/package/es5-shim);
* файлы стилей с расширением `*.ie.styl`. Для этого укажите их в сборке ([пример](https://github.com/bem/bem-components/blob/1f218c8ba10183fda21660e28cfbb280cd8cde54/.enb/make.js#L174)) и добавьте условные комментарии в блоке `page` ([пример](https://gist.github.com/innabelaya/904ab01666fd1a19d312)). Подключить стили для Internet Explorer 8 можно также на уровне шаблонов.

<a name="techs"></a>
## Технологии

* [YModules](https://ru.bem.info/tools/bem/modules/)
* [i-bem.js](https://ru.bem.info/technology/i-bem/current/i-bem-js/)
* [BEMHTML](https://ru.bem.info/technology/bemhtml/current/reference/)
* [BH](https://ru.bem.info/technology/bh/current/about/)
* [DEPS](https://ru.bem.info/technology/deps/about/)
* [Stylus](https://learnboost.github.io/stylus/)

<a name="tools"></a>
## Инструменты

**Сборщики**

* [bem-tools](https://ru.bem.info/tools/bem/bem-tools/)
* [ENB](http://enb-make.info/)
* [borschik](https://ru.bem.info/tools/optimizers/borschik/)

**Оптимизаторы**

* [SVGO](https://ru.bem.info/tools/optimizers/svgo/svgo/)
* [CleanCSS](http://www.cleancss.com/about.php)
* [ImageOptim](http://imageoptim.com/)

**Проверка кода**

* [jshint](http://www.jshint.com/)
* [jscs](https://github.com/jscs-dev/node-jscs)

**Прочее**

* [Autoprefixer](https://github.com/ai/autoprefixer/) — применяется во время сборки для генерации вендорных префиксов для поддерживаемых браузеров на основании конфигурации.

<a name="usage"></a>
## Использование

Библиотека в проект подключается с помощью [bem-tools](https://ru.bem.info/tools/bem/bem-tools/) или [ENB](http://enb-make.info/). Укажите название и версию библиотеки в конфигурационном файле выбранного вами сборщика.

При разработке проекта на основе [project-stub](https://ru.bem.info/tutorials/project-stub/) библиотека подключена по умолчанию.

<a name="supply"></a>
## Варианты поставки библиотеки

**Source**

Для технически идентичных сервисов и проектов, которые используют препроцессор и шаблонизатор, указанные в разделе [Инструменты](#tools).

**Compiled**

Для сервисов и проектов, которые не используют препроцессор или используют отличный от указанного в разделе [Инструменты](#tools).

**Library**

Для возможности подключения библиотеки ссылками на страницу, по аналогии с jQuery или Bootstrap.

Для выбора этого варианта поставки необходимо выполнить `npm run dist` в корне библиотеки после установки `npm`-зависимостей. В результате бандлы сформируются в папке `dist`.

<a name="development"></a>
## Разработка

* <a href="#working-copy">Рабочая копия</a>
* <a href="#how-to-contribute">Внесение изменений</a>
* <a href="#modular-tests">Тестирование</a>
  * <a href="#unit-tests">Юнит-тесты на JavaScript</a>
  * <a href="#regression-tests">Регрессионное тестирование верстки</a>
  * <a href="#template-tests">Тесты на шаблоны</a>

<a name="working-copy"></a>
### Рабочая копия

Получение исходников:

```bash
$ git clone git://github.com/bem/bem-components.git
$ cd bem-components
```

Установка зависимостей (инструментов):

```bash
$ npm install
```
Для последующего запуска локально установленных инструментов потребуется `export PATH=./node_modules/.bin:$PATH` или любой альтернативный способ.

Установка зависимых библиотек:

```bash
$ bower install
```

Сборка примеров и тестов:

```bash
$ npm run build-all
```

Запуск сервера для разработки:

```bash
$ npm start
$ open http://localhost:8080/
```

**NB** Точечная сборка отдельных блоков описана в разделе [Тесты на шаблоны](#template-tests).

Проверка кода:

```bash
$ npm run lint
```

<a name="how-to-contribute"></a>
### Внесение изменений

1. [Создать issue](https://github.com/bem/bem-components/issues/new) с описанием сути изменений.
1. Определить версию библиотеки для внесения изменений.
1. Создать отдельную ветку с указанием номера issue и версии (`issues/<номер issue>@v<номер версии>`) на основе ветки версии.
Например, для issue с номером 42 и версией 2: `git checkout -b issues/42@v2`. Если изменения вносятся в несколько версий, то для каждой версии создается отдельная ветка.
1. Внести изменения. Локально проверить результаты изменений на наличие ошибок можно, запустив `npm test`.
1. Сделать коммит и отправить изменения в удаленный репозиторий. При необходимости, сделать `rebase` от базовой ветки версии.
1. Создать pull request на основе созданной ветки. В случае изменений нескольких версий, создать pull request для каждой версии.
1. Связать pull request и issue (например, c помощью [комментария](https://github.com/blog/1506-closing-issues-via-pull-requests)).
1. Ждать принятия pull request и закрытия issue.

<a name="modular-tests"></a>
### Тестирование

<a name="unit-tests"></a>
#### Юнит-тесты на JavaScript

Команда `npm run test-specs` запускает юнит-тесты на JS.

Для запуска точечной сборки используйте команду `enb make specs desktop.specs/<block-name>` (например, `enb make specs desktop.specs/input`).

Тесты запускаются автоматически на [Travis](https://travis-ci.org) для каждого pull request'а.

<a name="regression-tests"></a>
#### Регрессионное тестирование верстки

Для тестирования верстки используется [Gemini](https://ru.bem.info/tools/testing/gemini/).

Тесты каждого блока находятся в отдельном файле вида `block-name.gemini.js` в директории `gemini/`. Локально тесты запускаются вручную. Тесты на Travis запускаются автоматически. В качестве [Selenium Grid](https://code.google.com/p/selenium/wiki/Grid2) используется сервис [SauceLabs](https://saucelabs.com).

<a name="run-test"></a>
Для запуска тестов локально необходимо:

1. Создайте учетную запись [OpenSauce](https://saucelabs.com/opensauce) в SauceLabs.
1. Установите утилиту [Sauce Connect](https://saucelabs.com/connect).
1. Настройте окружение (переменные среды `SAUCE_USERNAME` и `SAUCE_ACCESS_KEY`).
1. Запустите утилиту `sc` (SauceConnect) и дождаться установки туннеля.
1. Запустите тесты командой `npm run gemini`.
1. Соберите новые версии скриншотов при необходимости командой `npm run gemini-gather`.

При разработке новых тестов для ускорения локального запуска:

1. Установите и запустите [Selenium Server](http://docs.seleniumhq.org/download/) или [PhantomJS](http://phantomjs.org/).
1. Исправьте в файле `.gemini.yml` опцию `gridUrl` на `http://localhost:4444/`.
1. [Запустите тесты](#run-test).

Подробно про использование `Gemini` с разными бекендами читайте в статье [Введение в работу с Gemini](https://ru.bem.info/tools/testing/gemini/).

**NB** В репозиторий необходимо сохранять скриншоты, собранные в SauceLabs. Это позволит избежать отличий в отрисовке шрифтов.

Перед коммитом новых или измененных эталонных изображений необходимо:

1. Проверить корректность изображения. Для определения разницы между старой и новой версиями, используйте утилиту Araxis Merge или аналогичную.
1. Сжать изображения с помощью [ImageOptim](http://imageoptim.com/) (самый эффективный инструмент сжатия изображений на май 2014 года).

<a name="template-tests"></a>
#### Тесты на шаблоны

Инструменты сборки библиотеки позволяют собирать и запускать тесты на BEMHTML- и BH-шаблоны блоков.

**Добавление теста для блока**

* Создать каталог с названием `[имя блока].tmpl-specs` в директории блока на требуемом уровне переопределения. В данном каталоге будут храниться файлы тестов.
* Для каждого теста создать пару файлов: BEMJSON и HTML. В BEMJSON-файле находится пример для блока, в HTML-файле – эталонный HTML-код, который должен
получиться после применения шаблона блока к BEMJSON-у примера.
Имена файлов (не включая расширения) для одного
теста должны совпадать. Например, **10-default**.bemjson.js и **10-default**.html.

К блоку могут быть написаны несколько тестов и, соответственно, каждый тест будет состоять из пары файлов BEMJSON + HTML с одинаковыми именами.

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

```bash
magic run tmpl-specs
```

Сборка тестов на нужном уровне переопределения:

```bash
magic make desktop.tmpl-specs
```

Сборка тестов только для одного блока (точечная сборка):

```bash
magic make desktop.tmpl-specs/button
```

В случае успешной сборки, тесты будут запущены с последующим выводом результатов. Если результат применения
шаблона не совпадает с эталонным HTML, то в логе будет ошибка с указанием отличий от эталона.

Все тесты автоматически запускаются на [Travis](https://travis-ci.org) для каждого pull request'a.

<a name="maintain"></a>
## Команда основной разработки

* [veged](https://github.com/veged)
* [dfilatov](https://github.com/dfilatov)
* [mishanga](https://github.com/mishanga)
* [narqo](https://github.com/narqo)

<a name="workflow"></a>
## Рабочий процесс

Список текущих задач отображается на специальном [Agile Board](https://waffle.io/bem/bem-components).

Статусы задач:

- **backlog** — неразобранные задачи, которые требуют обсуждения командой для оценки и принятия решения о реализации. В таком статусе также могут находиться задачи, по которым нужна дополнительная информация.
- **ready** — разобранные задачи, решение о реализации которых принято.
- **in progress** — задачи с конкретным исполнителем, которые находятся в работе.
- **done** — задачи, закрытые за последние семь дней (это временное техническое ограничение выбранного Agile Board).

## Лицензия
© 2012 YANDEX LLC. Код лицензирован [Mozilla Public License 2.0](LICENSE.txt).
