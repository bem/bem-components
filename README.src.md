<!--@nrg.languages=en,ru-->
<!--@nrg.defaultLanguage=en-->
# BEM Components Library<!--en-->
<!--en-->
`bem-components` is an open-source library that provides a set of ready-made visual components ([blocks](https://en.bem.info/methodology/key-concepts/#block)) for creating web interfaces.<!--en-->
<!--en-->
The library provides design themes. This version introduces the `islands` theme, which implements the new Yandex design. Features include supporting multiple themes at once, and creating new themes.<!--en-->
<!--en-->
[![GitHub Release](https://img.shields.io/github/release/bem/bem-components.svg?style=flat)](https://github.com/bem/bem-components/releases)<!--en-->
<!--en-->
## Contents<!--en-->
<!--en-->
* [Levels](#levels)<!--en-->
* [Blocks](#blocks)<!--en-->
* [Supported browsers](#supported-browsers)<!--en-->
* [Technologies](#technologies)<!--en-->
* [Tools](#tools)<!--en-->
* [Usage](#usage)<!--en-->
* [Development](#development)<!--en-->
* [Maintainers](#maintainers)<!--en-->
* [Workflow](#workflow)<!--en-->
<!--en-->
**Additional information**<!--en-->
<!--en-->
* [Changelog](./CHANGELOG.md)<!--en-->
* [Migration to future versions](./MIGRATION.md)<!--en-->
<!--en-->
## Levels<!--en-->
<!--en-->
* `common.blocks` — support of any devices and browsers.<!--en-->
* `desktop.blocks` — support of desktop browsers.<!--en-->
* `touch.blocks` — implementation of specific features for touch platforms.<!--en-->
* `touch-phone.blocks` — implementation of specific features for smartphones.<!--en-->
* `touch-pad.blocks` — implementation of specific features for tablets.<!--en-->
* `design/<common|desktop|touch|touch-phone|touch-pad>.blocks` — implementation of various designs (themes).<!--en-->
<!--en-->
## Blocks<!--en-->
<!--en-->
* [attach](common.blocks/attach/attach.en.md)<!--en-->
* [button](common.blocks/button/button.en.md)<!--en-->
* [checkbox](common.blocks/checkbox/checkbox.en.md)<!--en-->
* [checkbox-group](common.blocks/checkbox-group/checkbox-group.en.md)<!--en-->
* [control](common.blocks/control/control.en.md)<!--en-->
* [control-group](common.blocks/control-group/control-group.en.md)<!--en-->
* [dropdown](common.blocks/dropdown/dropdown.en.md)<!--en-->
* [icon](common.blocks/icon/icon.en.md)<!--en-->
* [image](common.blocks/image/image.en.md)<!--en-->
* [input](common.blocks/input/input.en.md)<!--en-->
* [link](common.blocks/link/link.en.md)<!--en-->
* [menu](common.blocks/menu/menu.en.md)<!--en-->
* [menu-item](common.blocks/menu-item/menu-item.en.md)<!--en-->
* [modal](common.blocks/modal/modal.en.md)<!--en-->
* [popup](common.blocks/popup/popup.en.md)<!--en-->
* [progressbar](common.blocks/progressbar/progressbar.en.md)<!--en-->
* [radio](common.blocks/radio/radio.en.md)<!--en-->
* [radio-group](common.blocks/radio-group/radio-group.en.md)<!--en-->
* [select](common.blocks/select/select.en.md)<!--en-->
* [spin](common.blocks/spin/spin.en.md)<!--en-->
* [textarea](common.blocks/textarea/textarea.en.md)<!--en-->
* [z-index-group](common.blocks/z-index-group/z-index-group.en.md)<!--en-->
<!--en-->
## Supported browsers<!--en-->
<!--en-->
* **Desktop**<!--en-->
  * Firefox *(the last two stable versions)*<!--en-->
  * Chrome *(the last two stable versions)*<!--en-->
  * Safari *(the last two stable versions)*<!--en-->
  * Yandex *(the last two stable versions)*<!--en-->
<!--en-->
* **Touch**<!--en-->
  * Android 5+<!--en-->
  * iOS 12+<!--en-->
<!--en-->
<!--en-->
## Technologies<!--en-->
<!--en-->
* [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)<!--en-->
* [i-bem.js](https://en.bem.info/tutorials/bem-js-tutorial/)<!--en-->
* [BEMHTML](https://en.bem.info/technology/bemhtml/current/reference/)<!--en-->
* [DEPS](https://en.bem.info/technology/deps/about/)<!--en-->
* [PostCSS](http://postcss.org/)<!--en-->
<!--en-->
## Tools<!--en-->
<!--en-->
**Build**<!--en-->
<!--en-->
* [Vite](https://vite.dev/) — build tool and dev server<!--en-->
* [PostCSS](http://postcss.org/) — CSS processing (via Vite)<!--en-->
* [Autoprefixer](https://github.com/ai/autoprefixer/) — vendor prefixes<!--en-->
<!--en-->
**Code analysis**<!--en-->
<!--en-->
* [ESLint 10](https://eslint.org/) — JavaScript linting<!--en-->
<!--en-->
**Testing**<!--en-->
<!--en-->
* [Playwright](https://playwright.dev/) — browser regression testing<!--en-->
<!--en-->
## Usage<!--en-->
<!--en-->
### Installation<!--en-->
<!--en-->
```bash<!--en-->
npm install bem-components<!--en-->
```<!--en-->
<!--en-->
**Requirements:** Node.js >= 20<!--en-->
<!--en-->
**Peer dependencies:**<!--en-->
* `bem-core` ^5.0.0<!--en-->
* `jquery` ^4.0.0<!--en-->
<!--en-->
### Building from source<!--en-->
<!--en-->
```bash<!--en-->
git clone https://github.com/bem/bem-components.git<!--en-->
cd bem-components<!--en-->
npm install<!--en-->
npm run build<!--en-->
```<!--en-->
<!--en-->
The build produces output for three platforms in the `dist/` directory:<!--en-->
* `dist/desktop/`<!--en-->
* `dist/touch-pad/`<!--en-->
* `dist/touch-phone/`<!--en-->
<!--en-->
### Library concepts<!--en-->
<!--en-->
#### The block and its states<!--en-->
<!--en-->
The library consists of blocks, which you can see represented visually in the [`bem-components` showcase](https://ru.bem.info/libs/bem-components/current/showcase/).  Blocks have states that determine the behavioral model.  A block’s state is expressed through modifiers and specialized fields.  Changing a modifier creates an event that can be used for working with the block.<!--en-->
<!--en-->
There is no need to create a special BEM event if you can work with the modifier change event.  Depending on what is used for changing a component’s state (a modifier or a field), different events are used:<!--en-->
<!--en-->
* To respond to changing the "state" of `value` fields, the `change` event is used.<!--en-->
* To respond to setting or removing a modifier, various modifier change events are used.<!--en-->
<!--en-->
#### Controls in `bem-components`<!--en-->
<!--en-->
The controls in `bem-components` can be used as the basis for creating other library components.  Such controls don't have models as in HTML, and they can be used for tasks that don't require the semantics of a specific HTML model.<!--en-->
<!--en-->
As an example, think of the "behavioral model" for the [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement), which is a higher-level interface designed specifically for editing data.  What is different about `bem-components` blocks is that they can be used as the basis of a block in another library that will solve the same problem.  But along with that, they can serve other purposes in the interface that don't require `HTML input` semantics.<!--en-->
<!--en-->
#### Implementation details<!--en-->
<!--en-->
##### `focused` modifier<!--en-->
<!--en-->
Controls in bem-components have two types of focus, which are set using the modifiers `focused` and `focused-hard`.  The type of focus determines the appearance of the control.<!--en-->
<!--en-->
The modifier is chosen automatically based on how the focus is set:<!--en-->
* `focused` — Set for a mouse click on the control.<!--en-->
* `focused-hard` — Set when the control is selected using the keyboard or through JavaScript.  It highlights the component more obviously when it gets the focus.  For example, in the `Islands` theme, most of the controls get an extra border when `focused-hard` is set.<!--en-->
<!--en-->
## Development<!--en-->
<!--en-->
* [Working copy](#working-copy)<!--en-->
* [How to contribute](./CONTRIBUTING.md)<!--en-->
* [Testing](#testing)<!--en-->
<!--en-->
### Working copy<!--en-->
<!--en-->
Get sources:<!--en-->
<!--en-->
```bash<!--en-->
git clone git://github.com/bem/bem-components.git<!--en-->
cd bem-components<!--en-->
```<!--en-->
<!--en-->
Install dependencies:<!--en-->
<!--en-->
```bash<!--en-->
npm install<!--en-->
```<!--en-->
<!--en-->
Build all platforms:<!--en-->
<!--en-->
```bash<!--en-->
npm run build<!--en-->
```<!--en-->
<!--en-->
Start the development server:<!--en-->
<!--en-->
```bash<!--en-->
npm run dev<!--en-->
```<!--en-->
<!--en-->
Code analysis:<!--en-->
<!--en-->
```bash<!--en-->
npm run lint<!--en-->
```<!--en-->
<!--en-->
### Testing<!--en-->
<!--en-->
#### Browser regression tests<!--en-->
<!--en-->
[Playwright](https://playwright.dev/) is used for browser testing.<!--en-->
<!--en-->
```bash<!--en-->
npm run test:browser        # run tests headless<!--en-->
npm run test:browser:ui     # run tests with Playwright UI<!--en-->
```<!--en-->
<!--en-->
#### Run all checks<!--en-->
<!--en-->
```bash<!--en-->
npm test                    # runs lint + test:browser<!--en-->
```<!--en-->
<!--en-->
Tests are run automatically on GitHub Actions for each pull request.<!--en-->
<!--en-->
## Maintainers<!--en-->
<!--en-->
* [veged](https://github.com/veged)<!--en-->
* [dfilatov](https://github.com/dfilatov)<!--en-->
* [tadatuta](https://github.com/tadatuta)<!--en-->
<!--en-->
## Workflow<!--en-->
<!--en-->
Current tasks are tracked via [GitHub Issues](https://github.com/bem/bem-components/issues).<!--en-->
<!--en-->
## License<!--en-->
<!--en-->
Code and documentation © 2012 YANDEX LLC. Code released under the [Mozilla Public License 2.0](LICENSE.txt).<!--en-->
# Библиотека BEM Components<!--ru-->
<!--ru-->
`bem-components` — это библиотека с открытым кодом, которая предоставляет набор готовых визуальных компонентов ([блоков](https://ru.bem.info/methodology/key-concepts/#Блок)). Содержит контролы форм и другие базовые компоненты для построения интерфейсов.<!--ru-->
<!--ru-->
Библиотека предоставляет темы оформления. В данной версии представлена тема `islands`, реализующая дизайн Яндекса. Предусмотрена одновременная поддержка нескольких тем и возможность создания новых.<!--ru-->
<!--ru-->
[![GitHub Release](https://img.shields.io/github/release/bem/bem-components.svg?style=flat)](https://github.com/bem/bem-components/releases)<!--ru-->
<!--ru-->
## Содержание<!--ru-->
<!--ru-->
* [Уровни](#Уровни-переопределения)<!--ru-->
* [Блоки](#Блоки)<!--ru-->
* [Поддерживаемые браузеры](#Поддерживаемые-браузеры)<!--ru-->
* [Технологии](#Технологии)<!--ru-->
* [Инструменты](#Инструменты)<!--ru-->
* [Принципы работы](#Принципы-работы-библиотеки)<!--ru-->
* [Использование](#Использование)<!--ru-->
* [Разработка](#Разработка)<!--ru-->
* [Команда основной разработки](#Команда-основной-разработки)<!--ru-->
* [Рабочий процесс](#Рабочий-процесс)<!--ru-->
<!--ru-->
**Дополнительная информация**<!--ru-->
<!--ru-->
* [История изменений](./CHANGELOG.ru.md)<!--ru-->
* [Миграция на последующие версии](./MIGRATION.ru.md)<!--ru-->
<!--ru-->
## Уровни переопределения<!--ru-->
<!--ru-->
Библиотека поддерживает следующие [Зачем нужны уровни переопределения](https://ru.bem.info/methodology/redefinition-levels/):<!--ru-->
<!--ru-->
* `common.blocks` — поддержка всех устройств и браузеров.<!--ru-->
* `desktop.blocks` — поддержка браузеров для настольных устройств.<!--ru-->
* `touch.blocks` — реализация специфических особенностей для touch-платформ.<!--ru-->
* `touch-phone.blocks` — реализация специфических особенностей для смартфонов.<!--ru-->
* `touch-pad.blocks` — реализация специфических особенностей для планшетов.<!--ru-->
* `design/<common|desktop|touch|touch-phone|touch-pad>.blocks` — реализация различных дизайнов (тем).<!--ru-->
<!--ru-->
## Блоки<!--ru-->
<!--ru-->
* [attach](common.blocks/attach/attach.ru.md)<!--ru-->
* [button](common.blocks/button/button.ru.md)<!--ru-->
* [checkbox](common.blocks/checkbox/checkbox.ru.md)<!--ru-->
* [checkbox-group](common.blocks/checkbox-group/checkbox-group.ru.md)<!--ru-->
* [control](common.blocks/control/control.ru.md)<!--ru-->
* [control-group](common.blocks/control-group/control-group.ru.md)<!--ru-->
* [dropdown](common.blocks/dropdown/dropdown.ru.md)<!--ru-->
* [icon](common.blocks/icon/icon.ru.md)<!--ru-->
* [image](common.blocks/image/image.ru.md)<!--ru-->
* [input](common.blocks/input/input.ru.md)<!--ru-->
* [link](common.blocks/link/link.ru.md)<!--ru-->
* [menu](common.blocks/menu/menu.ru.md)<!--ru-->
* [menu-item](common.blocks/menu-item/menu-item.ru.md)<!--ru-->
* [modal](common.blocks/modal/modal.ru.md)<!--ru-->
* [popup](common.blocks/popup/popup.ru.md)<!--ru-->
* [progressbar](common.blocks/progressbar/progressbar.ru.md)<!--ru-->
* [radio](common.blocks/radio/radio.ru.md)<!--ru-->
* [radio-group](common.blocks/radio-group/radio-group.ru.md)<!--ru-->
* [select](common.blocks/select/select.ru.md)<!--ru-->
* [spin](common.blocks/spin/spin.ru.md)<!--ru-->
* [textarea](common.blocks/textarea/textarea.ru.md)<!--ru-->
* [z-index-group](common.blocks/z-index-group/z-index-group.ru.md)<!--ru-->
<!--ru-->
## Поддерживаемые браузеры<!--ru-->
<!--ru-->
* **Desktop**<!--ru-->
  * Firefox *(две последние стабильные версии)*<!--ru-->
  * Chrome *(две последние стабильные версии)*<!--ru-->
  * Safari *(две последние стабильные версии)*<!--ru-->
  * Yandex *(две последние стабильные версии)*<!--ru-->
<!--ru-->
* **Touch**<!--ru-->
  * Android 5+<!--ru-->
  * iOS 12+<!--ru-->
<!--ru-->
## Технологии<!--ru-->
<!--ru-->
* [ES-модули](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules)<!--ru-->
* [i-bem.js](https://ru.bem.info/technology/i-bem/current/i-bem-js/)<!--ru-->
* [BEMHTML](https://ru.bem.info/technology/bemhtml/current/reference/)<!--ru-->
* [DEPS](https://ru.bem.info/technology/deps/about/)<!--ru-->
* [PostCSS](http://postcss.org/)<!--ru-->
<!--ru-->
## Инструменты<!--ru-->
<!--ru-->
**Сборка**<!--ru-->
<!--ru-->
* [Vite](https://vite.dev/) — сборка и сервер разработки<!--ru-->
* [PostCSS](http://postcss.org/) — обработка CSS (через Vite)<!--ru-->
* [Autoprefixer](https://github.com/ai/autoprefixer/) — вендорные префиксы<!--ru-->
<!--ru-->
**Проверка кода**<!--ru-->
<!--ru-->
* [ESLint 10](https://eslint.org/) — линтинг JavaScript<!--ru-->
<!--ru-->
**Тестирование**<!--ru-->
<!--ru-->
* [Playwright](https://playwright.dev/) — регрессионное тестирование в браузере<!--ru-->
<!--ru-->
### Принципы работы библиотеки<!--ru-->
<!--ru-->
#### Блок и его состояния<!--ru-->
<!--ru-->
Библиотека состоит из блоков, у которых есть состояния. Состояния блока определяют его поведенческую модель и выражаются с помощью [модификаторов](https://ru.bem.info/methodology/key-concepts/#Модификатор) и специализированных полей. Установка/снятие модификатора создает событие, которое можно использовать для работы с блоком.<!--ru-->
<!--ru-->
В зависимости от того, что изменяет состояние компонента (модификатор или поле), используются разные события:<!--ru-->
<!--ru-->
* Для реакции на изменения «состояния» полей `value` применяется событие `change`.<!--ru-->
* Для реакции на установку/снятие модификатора применяются события на изменение модификатора.<!--ru-->
<!--ru-->
#### Контролы в `bem-components`<!--ru-->
<!--ru-->
Контролы в `bem-components` могут использоваться как базовая часть для создания других компонентов библиотек. Такие контролы не имеют моделей, как в HTML, и могут использоваться для решения задач, в которых не нужна семантика конкретной HTML-модели.<!--ru-->
<!--ru-->
В качестве примера можно рассмотреть «поведенческую модель» [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement), которая представляет собой высокоуровневый интерфейс, специально созданный для редактирования данных. Блоки в `bem-components` отличаются тем, что могут использоваться как базовая часть блока другой библиотеки, который будет решать эту же задачу. Но, помимо этого, они могут решать и другие интерфейсные задачи, в которых не нужна семантика `HTML input`.<!--ru-->
<!--ru-->
#### Особенности реализации модификатора `focused`<!--ru-->
<!--ru-->
Контролы в bem-components имеют два типа фокуса, которые выставляются с помощью модификаторов `focused` и `focused-hard`. Тип фокуса определяет внешний вид контрола.<!--ru-->
<!--ru-->
Выбор модификатора происходит автоматически в зависимости от способа установки фокуса:<!--ru-->
* `focused` — выставляется при клике на контрол курсором мыши.<!--ru-->
* `focused-hard` — выставляется при переходе на контрол с помощью клавиатуры или через JavaScript. Создан для более явного визуального выделения компонента при получении фокуса. Например, в теме `islands` большинство контролов получают дополнительную рамку при установке модификатора `focused-hard`.<!--ru-->
<!--ru-->
## Использование<!--ru-->
<!--ru-->
### Установка<!--ru-->
<!--ru-->
```bash<!--ru-->
npm install bem-components<!--ru-->
```<!--ru-->
<!--ru-->
**Требования:** Node.js >= 20<!--ru-->
<!--ru-->
**Зависимости (peerDependencies):**<!--ru-->
* `bem-core` ^5.0.0<!--ru-->
* `jquery` ^4.0.0<!--ru-->
<!--ru-->
### Сборка из исходного кода<!--ru-->
<!--ru-->
```bash<!--ru-->
git clone https://github.com/bem/bem-components.git<!--ru-->
cd bem-components<!--ru-->
npm install<!--ru-->
npm run build<!--ru-->
```<!--ru-->
<!--ru-->
Результат сборки для трёх платформ будет в директории `dist/`:<!--ru-->
* `dist/desktop/`<!--ru-->
* `dist/touch-pad/`<!--ru-->
* `dist/touch-phone/`<!--ru-->
<!--ru-->
## Разработка<!--ru-->
<!--ru-->
* [Рабочая копия](#Рабочая-копия)<!--ru-->
* [Внесение изменений](./CONTRIBUTING.ru.md)<!--ru-->
* [Тестирование](#Тестирование)<!--ru-->
<!--ru-->
### Рабочая копия<!--ru-->
<!--ru-->
Получение исходников:<!--ru-->
<!--ru-->
```bash<!--ru-->
git clone git://github.com/bem/bem-components.git<!--ru-->
cd bem-components<!--ru-->
```<!--ru-->
<!--ru-->
Установка зависимостей:<!--ru-->
<!--ru-->
```bash<!--ru-->
npm install<!--ru-->
```<!--ru-->
<!--ru-->
Сборка всех платформ:<!--ru-->
<!--ru-->
```bash<!--ru-->
npm run build<!--ru-->
```<!--ru-->
<!--ru-->
Запуск сервера для разработки:<!--ru-->
<!--ru-->
```bash<!--ru-->
npm run dev<!--ru-->
```<!--ru-->
<!--ru-->
Проверка кода:<!--ru-->
<!--ru-->
```bash<!--ru-->
npm run lint<!--ru-->
```<!--ru-->
<!--ru-->
### Тестирование<!--ru-->
<!--ru-->
#### Регрессионное тестирование в браузере<!--ru-->
<!--ru-->
Для тестирования в браузере используется [Playwright](https://playwright.dev/).<!--ru-->
<!--ru-->
```bash<!--ru-->
npm run test:browser        # запуск тестов в headless-режиме<!--ru-->
npm run test:browser:ui     # запуск тестов с UI Playwright<!--ru-->
```<!--ru-->
<!--ru-->
#### Запуск всех проверок<!--ru-->
<!--ru-->
```bash<!--ru-->
npm test                    # запускает lint + test:browser<!--ru-->
```<!--ru-->
<!--ru-->
Тесты автоматически запускаются на GitHub Actions для каждого pull request.<!--ru-->
<!--ru-->
## Команда основной разработки<!--ru-->
<!--ru-->
* [veged](https://github.com/veged)<!--ru-->
* [dfilatov](https://github.com/dfilatov)<!--ru-->
* [tadatuta](https://github.com/tadatuta)<!--ru-->
<!--ru-->
## Рабочий процесс<!--ru-->
<!--ru-->
Текущие задачи отслеживаются через [GitHub Issues](https://github.com/bem/bem-components/issues).<!--ru-->
<!--ru-->
## Лицензия<!--ru-->
© 2012 YANDEX LLC. Код лицензирован [Mozilla Public License 2.0](LICENSE.txt).<!--ru-->
