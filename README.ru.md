# Библиотека BEM Components

`bem-components` — это библиотека с открытым кодом, которая предоставляет набор готовых визуальных компонентов ([блоков](https://ru.bem.info/methodology/key-concepts/#Блок)). Содержит контролы форм и другие базовые компоненты для построения интерфейсов.

Библиотека предоставляет темы оформления. В данной версии представлена тема `islands`, реализующая дизайн Яндекса. Предусмотрена одновременная поддержка нескольких тем и возможность создания новых.

[![GitHub Release](https://img.shields.io/github/release/bem/bem-components.svg?style=flat)](https://github.com/bem/bem-components/releases)

## Содержание

* [Уровни](#Уровни-переопределения)
* [Блоки](#Блоки)
* [Поддерживаемые браузеры](#Поддерживаемые-браузеры)
* [Технологии](#Технологии)
* [Инструменты](#Инструменты)
* [Принципы работы](#Принципы-работы-библиотеки)
* [Использование](#Использование)
* [Разработка](#Разработка)
* [Команда основной разработки](#Команда-основной-разработки)
* [Рабочий процесс](#Рабочий-процесс)

**Дополнительная информация**

* [История изменений](./CHANGELOG.ru.md)
* [Миграция на последующие версии](./MIGRATION.ru.md)

## Уровни переопределения

Библиотека поддерживает следующие [Зачем нужны уровни переопределения](https://ru.bem.info/methodology/redefinition-levels/):

* `common.blocks` — поддержка всех устройств и браузеров.
* `desktop.blocks` — поддержка браузеров для настольных устройств.
* `touch.blocks` — реализация специфических особенностей для touch-платформ.
* `touch-phone.blocks` — реализация специфических особенностей для смартфонов.
* `touch-pad.blocks` — реализация специфических особенностей для планшетов.
* `design/<common|desktop|touch|touch-phone|touch-pad>.blocks` — реализация различных дизайнов (тем).

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

## Поддерживаемые браузеры

* **Desktop**
  * Firefox *(две последние стабильные версии)*
  * Chrome *(две последние стабильные версии)*
  * Safari *(две последние стабильные версии)*
  * Yandex *(две последние стабильные версии)*

* **Touch**
  * Android 5+
  * iOS 12+

## Технологии

* [ES-модули](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules)
* [i-bem.js](https://ru.bem.info/technology/i-bem/current/i-bem-js/)
* [BEMHTML](https://ru.bem.info/technology/bemhtml/current/reference/)
* [DEPS](https://ru.bem.info/technology/deps/about/)
* [PostCSS](http://postcss.org/)

## Инструменты

**Сборка**

* [Vite](https://vite.dev/) — сборка и сервер разработки
* [PostCSS](http://postcss.org/) — обработка CSS (через Vite)
* [Autoprefixer](https://github.com/ai/autoprefixer/) — вендорные префиксы

**Проверка кода**

* [ESLint 10](https://eslint.org/) — линтинг JavaScript

**Тестирование**

* [Playwright](https://playwright.dev/) — регрессионное тестирование в браузере

### Принципы работы библиотеки

#### Блок и его состояния

Библиотека состоит из блоков, у которых есть состояния. Состояния блока определяют его поведенческую модель и выражаются с помощью [модификаторов](https://ru.bem.info/methodology/key-concepts/#Модификатор) и специализированных полей. Установка/снятие модификатора создает событие, которое можно использовать для работы с блоком.

В зависимости от того, что изменяет состояние компонента (модификатор или поле), используются разные события:

* Для реакции на изменения «состояния» полей `value` применяется событие `change`.
* Для реакции на установку/снятие модификатора применяются события на изменение модификатора.

#### Контролы в `bem-components`

Контролы в `bem-components` могут использоваться как базовая часть для создания других компонентов библиотек. Такие контролы не имеют моделей, как в HTML, и могут использоваться для решения задач, в которых не нужна семантика конкретной HTML-модели.

В качестве примера можно рассмотреть «поведенческую модель» [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement), которая представляет собой высокоуровневый интерфейс, специально созданный для редактирования данных. Блоки в `bem-components` отличаются тем, что могут использоваться как базовая часть блока другой библиотеки, который будет решать эту же задачу. Но, помимо этого, они могут решать и другие интерфейсные задачи, в которых не нужна семантика `HTML input`.

#### Особенности реализации модификатора `focused`

Контролы в bem-components имеют два типа фокуса, которые выставляются с помощью модификаторов `focused` и `focused-hard`. Тип фокуса определяет внешний вид контрола.

Выбор модификатора происходит автоматически в зависимости от способа установки фокуса:
* `focused` — выставляется при клике на контрол курсором мыши.
* `focused-hard` — выставляется при переходе на контрол с помощью клавиатуры или через JavaScript. Создан для более явного визуального выделения компонента при получении фокуса. Например, в теме `islands` большинство контролов получают дополнительную рамку при установке модификатора `focused-hard`.

## Использование

### Установка

```bash
npm install bem-components
```

**Требования:** Node.js >= 20

**Зависимости (peerDependencies):**
* `bem-core` ^5.0.0
* `jquery` ^4.0.0

### Сборка из исходного кода

```bash
git clone https://github.com/bem/bem-components.git
cd bem-components
npm install
npm run build
```

Результат сборки для трёх платформ будет в директории `dist/`:
* `dist/desktop/`
* `dist/touch-pad/`
* `dist/touch-phone/`

## Разработка

* [Рабочая копия](#Рабочая-копия)
* [Внесение изменений](./CONTRIBUTING.ru.md)
* [Тестирование](#Тестирование)

### Рабочая копия

Получение исходников:

```bash
git clone git://github.com/bem/bem-components.git
cd bem-components
```

Установка зависимостей:

```bash
npm install
```

Сборка всех платформ:

```bash
npm run build
```

Запуск сервера для разработки:

```bash
npm run dev
```

Проверка кода:

```bash
npm run lint
```

### Тестирование

#### Регрессионное тестирование в браузере

Для тестирования в браузере используется [Playwright](https://playwright.dev/).

```bash
npm run test:browser        # запуск тестов в headless-режиме
npm run test:browser:ui     # запуск тестов с UI Playwright
```

#### Запуск всех проверок

```bash
npm test                    # запускает lint + test:browser
```

Тесты автоматически запускаются на GitHub Actions для каждого pull request.

## Команда основной разработки

* [veged](https://github.com/veged)
* [dfilatov](https://github.com/dfilatov)
* [tadatuta](https://github.com/tadatuta)

## Рабочий процесс

Текущие задачи отслеживаются через [GitHub Issues](https://github.com/bem/bem-components/issues).

## Лицензия
© 2012 YANDEX LLC. Код лицензирован [Mozilla Public License 2.0](LICENSE.txt).
