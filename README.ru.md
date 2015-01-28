BEM Components Library
======================
[![Build Status](https://travis-ci.org/bem/bem-components.svg?branch=v2)](https://travis-ci.org/bem/bem-components)
[![Coverage Status](https://coveralls.io/repos/bem/bem-components/badge.png?branch=v2)](https://coveralls.io/r/bem/bem-components?branch=v2)
[![devDependency Status](https://david-dm.org/bem/bem-components/dev-status.svg)](https://david-dm.org/bem/bem-components#info=devDependencies)

## Что это?

Библиотека блоков, предоставляющая готовые элементы управления форм и некоторые другие блоки.
Содержит абстрагированные от дизайна базовые реализации. Возможно опциональное использование тем.

* <a href="#content">Состав</a>
  * <a href="#levels">Уровни</a>
  * <a href="#blocks">Блоки</a>
  * <a href="#techs">Технологии</a>
  * <a href="#tools">Инструменты</a>
  * <a href="#optimize">Оптимизаторы</a>
  * <a href="#linters">Линтеры</a>
  * <a href="#autopref">Автопрефиксер</a>
* <a href="#usage">Использование</a>
* <a href="#supported-browsers">Поддерживаемые браузеры</a>
* <a href="#migration">Миграция</a>
* <a href="#changelog">История изменений</a>
* <a href="#maintain">Команда основной разработки</a>
* <a href="#devprinciples">Принципы разработки библиотеки</a>
  * <a href="#supply">Варианты поставки библиотеки</a>
* <a href="#development">Разработка</a>
  * <a href="#working-copy">Рабочая копия</a>
  * <a href="#how-to-contribute">Внесение изменений</a>
  * <a href="#modular-tests">Модульное тестирование</a>
    * <a href="#unit-tests">Юнит-тесты на JavaScript</a>
    * <a href="#regression-tests">Регрессионное тестирование верстки</a>
    * <a href="#template-tests">Тесты на шаблоны</a>

<a name="content"></a>

## Состав

<a name="levels"></a>
### Уровни

* `common.blocks` — поддержка всех устройств и браузеров.
* `desktop.blocks` — поддержка всех десктопных браузеров.
* `touch.blocks` — реализация специфических особенностей для touch-платформ.

<a name="blocks"></a>
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
* [modal](common.blocks/modal/modal.ru.md)
* [popup](common.blocks/popup/popup.ru.md)
* [progressbar](common.blocks/progressbar/progressbar.ru.md)
* [radio](common.blocks/radio/radio.ru.md)
* [radio-group](common.blocks/radio-group/radio-group.ru.md)
* [select](common.blocks/select/select.ru.md)
* [spin](common.blocks/spin/spin.ru.md)
* [textarea](common.blocks/textarea/textarea.ru.md)
* [z-index-group](common.blocks/z-index-group/z-index-group.ru.md)


<a name="techs"></a>
### Технологии

* [i-bem.js](https://ru.bem.info/technology/i-bem/current/i-bem-js/)
* [YModules](https://ru.bem.info/tools/bem/modules/)
* [BEMHTML](https://ru.bem.info/technology/bemhtml/current/reference/)
* [BH](https://ru.bem.info/technology/bh/current/reference/)
* [BEMTREE](https://ru.bem.info/technology/bemtree/current/bemtree/)
* [Stylus](https://learnboost.github.io/stylus/)


<a name="tools"></a>
### Инструменты

* [borschik](https://ru.bem.info/tools/optimizers/borschik/)
* [bem-tools](https://ru.bem.info/tools/bem/bem-tools/)
* [ENB](http://enb-make.info/)

<a name="optimize"></a>
### Оптимизаторы

* [SVGO](https://ru.bem.info/tools/optimizers/svgo/svgo/)
* [CleanCSS](http://www.cleancss.com/about.php)
* [ImageOptim](http://imageoptim.com/)

<a name="linters"></a>
### Линтеры

* [jshint](http://www.jshint.com/)
* [jscs](https://github.com/jscs-dev/node-jscs)

<a name="autopref"></a>
### Автопрефиксер

* [Autoprefixer](https://github.com/ai/autoprefixer/)

Применяется во время сборки для генерации вендорных префиксов для поддерживаемых браузеров на основании конфигурации.


<a name="usage"></a>
## Использование

Подключить библиотеку в проект можно любым известным вам способом. Например, с помощью [bem-tools](https://ru.bem.info/tools/bem/bem-tools/) или [ENB](http://enb-make.info/). Сделать это можно в конфигурационном файле выбранного вами сборщика.

Если вы используете [project-stub](https://ru.bem.info/tutorials/project-stub/) как основу проекта, то подключать библиотеку не нужно. Она подключена в проект по умолчанию.

<a name="supported-browsers"></a>

## Поддерживаемые браузеры

* Desktop:
  * Firefox 24+
  * Chrome last 2 versions
  * Safari last 2 versions
  * Opera 12.6+
  * Internet Explorer 10+
* Touch-pad:
  * Android 4+
  * iOS 5+
* Touch-phone:
  * Android 4+
  * iOS 6+
  * Internet Explorer 10+
*Touch:
  * Android 4+
  * iOS >=5
  * Internet Explorer 10+

<a name="changelog"></a>
## История изменений

История изменений доступна на [отдельной странице](CHANGELOG.md).

<a name="migration"></a>
## Миграция

Миграция описана на [отдельной странице](MIGRATION.md).

## Команда основной разработки

* [veged](https://github.com/veged)
* [dfilatov](https://github.com/dfilatov)
* [mishanga](https://github.com/mishanga)

<a name="devprinciples"></a>
## Принципы разработки библиотеки

В основе всех принципов разработки bem-components лежит опыт работы нашей команды над другими библиотеками. Поэтому при разработке библиотеки мы старались взять все лучшее из прошлого, на его базе строить новое, и при этом не повторять прежних ошибок.

**Проект open source**

Разработка библиотеки ведется на [GitHub](https://github.com/bem/bem-components). Все задачи, планы по разработке и сроки доступны там же. Любой разработчик может принять участие в работе над библиотекой: создать задачу с пожеланиями для команды разработчиков или прислать pull request с правками или собственным кодом.

**Автоматизация**

При создании библиотеки мы автоматизировали все процессы, которые можно было автоматизировать: мы считаем, что разработчик не должен совершать повторяющиеся действия, для этого есть роботы.

**Bleeding edge**

Библиотека разрабатывается с ориентацией на будущее: мы используем только последние [версии браузеров](#supported-browsers) и инструментов. Все это направлено на то, чтобы библиотека bem-components не теряла свою актуальность в процессе разработки.

**Оптимизация**

Решения по оптимизации внедряются непосредственно во время разработки кода каждого конкретного блока. Пути оптимизации продумываются заранее, чтобы избежать ситуаций, когда приходится оптимизировать уже написанный код.

**Поддержка нескольких тем**

В библиотеке реализована одновременная поддержка нескольких тем. На данном этапе основной темой является тема `islands`, которая реализует новый дизайн сервисов Яндекса.

Сейчас в bem-components создан дополнительный служебный дизайн, представленный темой `simple`. Он разработан для проверки возможности сосуществования нескольких тем внутри одной библиотеки.

**Селекторы в контексте темы**

Библиотека предоставляет возможность создавать разные темы для блоков, а также подключать уже имеющиеся темы в любом количестве и сочетании на страницу. При этом есть возможность полностью отказаться от использования тем в своем проекте и получить привычные нативные браузерные контроллы, для которых уже написаны шаблоны и JavaScript-реализация.

**Поддержка платформ**

В библиотеке реализована поддержка разных платформ: `desktop`, `touch` (мобильные + планшеты). При этом блоки разработаны таким образом, чтобы реализация для одной платформы корректно отображалась и правильно себя вела и на другой.


<a name="supply"></a>
### Варианты поставки библиотеки

**Source**

Для технически идентичных сервисов и проектов, которые используют тот же препроцессор и шаблонизатор, библиотека может поставляться в исходном виде — «source».

**Compiled**

Для сервисов и проектов, которые вообще не используют препроцессор или используют, но другой, существует возможность поставки скомпилированной версии библиотеки — «compiled».

**Library**

Для возможности подключения библиотеки ссылками на страницу, по аналогии с jQuery или Bootstrap, предоставляется поставка в виде библиотеки — «library».

<a name="development"></a>
## Разработка

<a name="working-copy"></a>
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
$ npm start
$ open http://localhost:8080/
```

**NB** Возможность точечной сборки описана в разделе [Тесты на шаблоны](#template-tests).

Проверяем стиль кода:

```bash
$ npm run lint
```

<a name="how-to-contribute"></a>
### Внесение изменений

1. [Создать issue](https://github.com/bem/bem-components/issues/new) с описанием сути изменений.
1. Определить, в какую версию проекта необходимо внести изменения.
1. Создать отдельную ветку с указанием номера issue и версии (`issues/<номер issue>@v<номер версии>`) на основе ветки версии.
Например, для issue с номером 42 и версией 2: `git checkout -b issues/42@v2`. Если изменения нужно внести в несколько версий, то для каждой из версий создается отдельная ветка.
1. Внести изменения. Для версии библиотеки bem-components `v2`, можно локально проверить, что ничего не сломалось, запустив `npm test`.
1. Сделать коммит и отправить изменения в удаленный репозиторий (`push`). Если это необходимо, то нужно сделать `rebase` от базовой ветки версии.
1. Создать pull request на основе созданной ветки. Для случая изменений в нескольких версиях необходимо создать pull request для каждой версии.
1. Любым способом связать pull request и issue (например, c помощью [комментария](https://github.com/blog/1506-closing-issues-via-pull-requests)).
1. Ждать закрытия pull request и issue ;-)

<a name="modular-tests"></a>
### Модульное тестирование

<a name="unit-tests"></a>
#### Юнит-тесты на JavaScript

Чтобы запустить юнит-тесты на JS, используйте команду `npm run test-specs`. Кроме того, можно использовать точечную сборку, например, `enb make specs desktop.specs/input`.

Все тесты автоматически запускаются на [Travis](https://travis-ci.org) для каждого pull request'а.

<a name="regression-tests"></a>
### Регрессионное тестирование верстки

Для тестирования верстки мы используем [Gemini](http://ru.bem.info/tools/testing/gemini/).

Тесты каждого блока находятся в отдельном файле вида `block-name.gemini.js` в директории `gemini/`. Локально тесты запускаются руками, тесты на Travis запускаются автоматически. В качестве [Selenium Grid](https://code.google.com/p/selenium/wiki/Grid2) мы используем сервис [SauceLabs](https://saucelabs.com).

Для запуска тестов локально вам понадобится [OpenSauce](https://saucelabs.com/opensauce) аккаунт в SauceLabs и утилита [Sauce Connect](https://saucelabs.com/connect). Разработчики команды БЭМ могут использовать аккаунт `bem-components` (мы не публикуем логин и пароль, потому что на аккаунте лимит на 3 одновременно запущенных браузера; будет эффективнее использовать разные аккаунты для ручного запуска тестов, тем более что они бесплатные).

<a name="run-test"></a>
Для запуска тестов:

1. Настройте окружение (переменные среды `SAUCE_USERNAME` и `SAUCE_ACCESS_KEY`).
1. Запустите утилиту `sc` (SauceConnect) и дождитесь, пока она поднимет туннель.
1. Запустите тесты командой `npm run gemini`.
1. Для сбора новых версий скриншотов используйте команду `npm run gemini-gather`.

Если вы разрабатываете новые тесты и хотите их запускать локально и быстрее, можно поднять свой собственный Selenium Server или phantomjs с WebDriver сервером. Для этого нужно:

1. Установить и запустить [Selenium Server](http://docs.seleniumhq.org/download/) или [PhantomJS](http://phantomjs.org/).
1. Исправить в файле `.gemini.yml` опцию `gridUrl` на `http://localhost:4444/`.
1. [Запустить тесты](#run-test).

Более подробно про запуск `Gemini` с разными бекендами читайте в статье [Введение в работу с Gemini](http://ru.bem.info/tools/testing/gemini/).

**NB** В репозиторий необходимо коммитить скриншоты, собранные в SauceLabs. Это позволит избежать даже незначительных отличий в отрисовке шрифтов.

Перед коммитом новых или измененных эталонных изображений необходимо:

1. Внимательно проверить корректнотсь изображения. Если есть сомнения, используйте утилиту Araxis Merge или аналогичную, чтобы увидеть разницу между старой и новой версиями.
1. Сожмите изображения утилитой [ImageOptim](http://imageoptim.com/) (это самый эффективный инструмент сжатия изображений на май 2014 года).


<a name="template-tests"></a>
#### Тесты на шаблоны

Инструменты сборки библиотеки позволяют собирать и запускать тесты на BEMHTML- и BH-шаблоны блоков.

Чтобы добавить тест для блока, нужно в его директории на требуемом уровне переопределения создать
каталог с названием `[имя блока].tmpl-specs`. Здесь будут храниться файлы тестов.

Каждый тест состоит из пары файлов в технологиях BEMJSON и HTML. Тестов и, соответственно, пар файлов у блока может быть несколько. Имена файлов произвольные, но они (не включая расширения) для каждого
теста должны совпадать. Например, **10-default**.bemjson.js и **10-default**.html.

В BEMJSON-файле находится пример для блока, в HTML-файле – эталонный HTML-код, который должен
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

```bash
magic run tmpl-specs`
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

## Лицензия
© 2012 YANDEX LLC. Код лицензирован [Mozilla Public License 2.0](LICENSE.txt).
