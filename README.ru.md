bem-components
======================
[![GitHub Release](https://img.shields.io/github/release/bem/bem-components.svg?style=flat)](https://github.com/bem/bem-components/releases)
[![Build Status](https://img.shields.io/travis/bem/bem-components/v2.svg?style=flat)](https://travis-ci.org/bem/bem-components)
[![Coverage Status](https://img.shields.io/coveralls/bem/bem-components/v2.svg?style=flat)](https://coveralls.io/r/bem/bem-components?branch=v2)
[![devDependency Status](https://img.shields.io/david/dev/bem/bem-components.svg?style=flat)](https://david-dm.org/bem/bem-components#info=devDependencies)

## Что это?

Библиотека с открытым кодом, которая предоставляет набор готовых визуальных компонентов (блоков). Содержит контролы форм и другие базовые компоненты для построения интерфейсов.

Библиотека предоставляет темы оформления. В данной версии представлена тема «islands», реализующая новый дизайн Яндекса. Предусмотрена одновременная поддержка нескольких тем и возможность создания новых.

## Содержание

* [Уровни](#levels)
* [Блоки](#blocks)
* [Поддерживаемые браузеры](#supported-browsers)
* [Технологии](#techs)
* [Инструменты](#tools)
* [Использование](#usage)
* [Разработка](#development)
* [Команда основной разработки](#maintain)
* [Рабочий процесс](#workflow)

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

Существует несколько способов начать работу с `bem-components`. Выбор подходящего способа использования зависит от требований проекта и его совместимости с [технологиями](#techs) и [инструментами](#tools) библиотеки, а также от вашего опыта работы с БЭМ-проектами.

Выберите способ поставки, наиболее подходящий вашему проекту:

| Dist | Source | Compiled |
|---------|--------|----------|
| Предсобранный CSS- и JavaScript-код и шаблоны библиотеки. Подключается ссылками на страницу. Не требует сборки и совместимости с вашим проектом.| Полный исходный код библиотеки. Для использования необходима предварительная сборка. Требует полной совместимости проекта с [технологиями](#techs) и [инструментами](#tools) библиотеки. | Полный исходный код библиотеки. Для использования необходима предварительная сборка. Отличается от способа «Source» тем, что [Stylus](#techs) скомпилирован в CSS. Подходит для проектов, не использующих [Stylus](https://learnboost.github.io/stylus/). |

Способ использования библиотеки определяет порядок ее подключения в проект:

* [Подключение исходного кода библиотеки (Source и Compiled)](#source-compiled)
* [Подключение предсобранных файлов библиотеки (Dist)](#dist)

<a name="source-compiled"></a>
### Подключение исходного кода библиотеки (Source и Compiled)

Рекомендуемый способ подключения — использование инструментов [ENB](http://enb-make.info/) или [bem-tools](https://ru.bem.info/tools/bem/bem-tools/).

В качестве примера воспользуйтесь [project-stub](https://ru.bem.info/tutorials/project-stub/), где библиотека подключена по умолчанию. Также можно создать проект и подключить в него библиотеку с помощью [генератора на Yo](https://ru.bem.info/tools/bem/bem-stub/), который позволяет создать необходимую конфигурацию проекта.

<a name="dist"></a>
### Подключение предсобранных файлов библиотеки (Dist)

Самый простой способ подключить библиотеку в проект — скачать предварительно собранные файлы библиотеки и добавить их в HTML страницы с помощью элементов `<link>` и `<script>`. Сделать это можно разными способами:

* [Подключить файлы с CDN](#Подключение-файлов-с-cdn) — самый быстрый способ.
* [Скачать в виде архива](#Загрузка-в-виде-архива) — возможность выбрать нужную версию сборки.
* [Самостоятельно собрать файлы из исходного кода](#Сбор-файлов-из-исходного-кода) — возможность собрать еще не выпущенную версию библиотеки.
* [Установить с помощью Bower](#Установка-с-помощью-bower)

О том, как работать с подключенными файлами библиотеки, читайте в разделе [Работа с библиотекой](#Работа-с-библиотекой-в-виде-dist).

**Состав предсобранной библиотеки**

Доступны отдельные наборы файлов для трех платформ:
* desktop
* touch-pad
* touch-phone

Каждый набор включает в себя:
* `bem-components.css` — стили
* `bem-components.ie.css` — стили для IE8 ([подробнее](#Поддержка-internet-explorer-8))
* `bem-components.js` — JavaScript
* `bem-components.bemhtml.js` — BEMHTML-шаблоны
* `bem-components.bh.js` — BH-шаблоны
* `bem-components.js+bemhtml.js` — объединение JavaScript-кода и BEMHTML-шаблонов для использования шаблонов в браузере
* `bem-components.js+bh.js` — объединение JavaScript-кода и BH-шаблонов для использования шаблонов в браузере

* bem-components.no-autoinit.js - JavaScript без автоматической инициализации. Следует использовать при необходимости писать собственный код на `i-bem.js`
* bem-components.no-autoinit.js+bemhtml.js
* bem-components.no-autoinit.js+bh.js

В каждый набор также включены аналогичные dev-версии (с сохранением форматирования и комментариев).

#### Подключение файлов с CDN

Самый быстрый и простой способ подключить библиотеку в проект — добавить элементы `<link>` и `<script>` в HTML страницы:

```html
<link rel="stylesheet" href="https://yastatic.net/bem-components/latest/desktop/bem-components.css">
<script src="https://yastatic.net/bem-components/latest/desktop/bem-components.js+bemhtml.js"></script>
```

Схема подключения файла с CDN: `//yastatic.net/название-библиотеки/версия/платформа/имя-файла`.

Пример: `//yastatic.net/bem-components/latest/desktop/bem-components.dev.js+bemhtml.js`.

#### Загрузка в виде архива

Выберите необходимую версию библиотеки и скачайте [архив](https://github.com/bem/bem-components-dist/releases). Распакуйте. Добавьте файлы на страницу с помощью элементов `<link>` и `<script>`:

```html
<link rel="stylesheet" href="desktop/bem-components.css">
<script src="desktop/bem-components.js+bemhtml.js"></script>
```

#### Сбор файлов из исходного кода

Код библиотеки находится на Github: [https://github.com/bem/bem-components](https://github.com/bem/bem-components).

Для сборки выполните следующие команды:

```
# Клонируйте исходный код библиотеки
git clone https://github.com/bem/bem-components.git
# Перейдите в папку библиотеки
cd bem-components
# Установите необходимые зависимости
npm install
# Соберите Dist
npm run dist
```

В результате сборки файлы будут доступны в папке `bem-components-dist`. Подключите файлы в HTML страницы:

```html
<link rel="stylesheet" href="bower_components/bem-components-dist/desktop/bem-components.css">
<script src="bower_components/bem-components-dist/desktop/bem-components.js+bemhtml.js"></script>
```

#### Установка с помощью Bower

При условии, что [Bower](http://bower.io/) уже установлен в ваш проект, выполните следующую команду:

```
bower i bem/bem-components-dist
```

В результате сборки файлы будут доступны в папке `bem-components-dist`. Подключение не отличается от предыдущего способа:

```html
<link rel="stylesheet" href="bower_components/bem-components-dist/desktop/bem-components.css">
<script src="bower_components/bem-components-dist/desktop/bem-components.js+bemhtml.js"></script>
```

#### Работа с библиотекой в виде Dist

Работу с библиотекой можно разбить на два шага:

1. Найти нужный блок на сайте библиотеки: [bem.info](https://ru.bem.info). Например, [select](https://ru.bem.info/libs/bem-components/current/desktop/select/#Список-с-одиночным-обязательным-выбором-модификатор-mode-в-значении-radio).
1. Получить необходимый HTML.

Первый шаг всегда одинаковый. Второй — выполняется тремя разными способами, которые можно произвольно комбинировать:

**Способ I.** Скопировать нужный HTML из примера. Для этого перейдите во вкладку `HTML` в шапке примера.

Этот вариант максимально простой, но при обновлении шаблонов в последующих версиях библиотеки потребуется вручную вносить изменения в каждый обновленный блок.

**Способ II.** Использовать шаблонизацию в браузере. Сборка библиотеки `Dist` включает предсобранные шаблоны BEMHTML и BH на выбор.

Для этого скопируйте из документации BEMJSON-код примера и вставьте его в HTML страницы. Используйте вкладку `BEMJSON` в шапке примера.

HTML страницы будет выглядеть следующим образом:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>bem-components as a library</title>
    <link rel="stylesheet" href="https://yastatic.net/bem-components/latest/desktop/bem-components.css">
</head>
<body class="page page_theme_islands">
    <form class="form" action="/"></form>
<script src="https://yastatic.net/bem-components/latest/desktop/bem-components.no-autoinit.js+bemhtml.js"></script>
<script>
modules.require(['i-bem__dom', 'BEMHTML', 'jquery'], function(BEMDOM, BEMHTML, $) {
    var html = BEMHTML.apply({
        block : 'select',
        mods : { mode : 'check', theme : 'islands', size : 'm' },
        name : 'select1',
        val : [2, 3],
        text : 'Программа конференции',
        options : [
            { val : 1, text : 'Доклад' },
            { val : 2, text : 'Мастер-класс' },
            { val : 3, text : 'Круглый стол' }
        ]
    });

    BEMDOM.append($('.form'), html);    // https://ru.bem.info/libs/bem-core/current/desktop/i-bem/jsdoc/#append-1
});
</script>
</body>
</html>
```

Такой код не потребует изменений в разметке при обновлении библиотеки до новой версии в отличие от способа I. Однако генерируемая на клиенте разметка может хуже индексироваться поисковыми системами.

**Способ III.** Выполнять `{BEMHTML,BH}.apply()` в Node.js и отдавать браузеру уже готовый HTML:

```
var BEMHTML = require('./dist/desktop/bem-components.bemhtml.js').BEMHTML;

BEMHTML.apply({
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select1',
    val : [2, 3],
    text : 'Программа конференции',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}); // возвращает HTML-строку
```

### Понимание принципов библиотеки

#### Блок и его состояния

Библиотека состоит из блоков, визуальное представление которых можно увидеть на [витрине `bem-components`](https://ru.bem.info/libs/bem-components/current/showcase/). У блоков есть состояния, которые определяют его поведенческую модель. Состояние блока выражается через модификаторы и специализированные поля. Изменение модификатора создает событие, которое можно использовать для работы с блоком.

Нет необходимости создавать специальное дополнительное БЭМ-событие, если есть возможность работать с событием на изменение модификатора. В зависимости от того, с помощью чего изменяется состояние компонента (модификатор или поле), используются разные события:

* Для реакции на изменения «состояния» полей `value` применяется событие `change`.
* Для реакции на установку/снятие модификатора применяются различные события на изменение модификатора.

#### Контролы в `bem-components`

Контролы в `bem-components` могут использоваться как базовая часть для создания других компонетов библиотек. Такие контролы не имеют моделей, как в HTML, и могут использоваться для решения задач, в которых не нужна семантика конкретной HTML-модели.

В качестве примера рассмотрим «поведенческую модель» [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement), которая представляет собой высокоуровневый интерфейс, специально созданый для редактирования данных. Блоки в `bem-components` отличаются тем, что могут использоваться как базовая часть блока другой библиотеки, который будет решать эту же задачу. Но, помимо этого, они могут решать и другие интерфейсные задачи, в которых не нужна семантика `HTML input`.

#### Особенности реализации

##### Модификатор `focused`

Контролы в bem-components имеют два типа фокуса, которые выставляются с помощью модификаторов `focused` и `focused-hard`. Тип фокуса определяет внешний вид контрола.

Выбор модификатора происходит автоматически в зависимости от способа установки фокуса:
* `focused` —  выставляется при клике на контрол курсором мыши.
* `focused-hard` — выставляется при переходе на контрол с помощью клавиатуры или через JavaScript. Создан для более явного визуального выделения компонента при получении фокуса. Например, в теме `islands` большинство контролов получают дополнительную рамку при установке модификатора `focused-hard`.

<a name="development"></a>
## Разработка

* <a href="#working-copy">Рабочая копия</a>
* <a href="/CONTRIBUTING.ru.md">Внесение изменений</a>
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
