# История изменений

## 6.0.1

### Крупные изменения
* Библиотека [bem-core](https://en.bem.info/libs/bem-core/) была обновлена до версии [4.2.1](https://github.com/bem/bem-core/releases/tag/v4.2.1) ([#2054](https://github.com/bem/bem-components/issues/2054)).

### В релиз вошли следующие исправления ошибок
* Поддержка bem-xjst 8.x: режим `js()` был заменен на `addJs()` ([#2050](https://github.com/bem/bem-components/issues/2050)).
* popup_target_anchor: Исправлены вычисления позиции для поддержки новой версии jQuery ([#2051](https://github.com/bem/bem-components/issues/2051)).
* Исправлена ошибка, при которой не удалялись контролы в `select_mode_radio-check` ([#2055](https://github.com/bem/bem-components/pull/2055)).

### Также в релиз вошли следующие изменения
* Добавлено CLA ([#2034](https://github.com/bem/bem-components/issues/2034)).
* attach: Удалены неиспользуемые шаблоны ([#2056](https://github.com/bem/bem-components/pull/2056)).

## 6.0.0

### Изменения, ломающие обратную совместимость
* BEMHTML-шаблоны теперь зависят от `bem-xjst v8.6.7` ([#1942](https://github.com/bem/bem-components/issues/1942)).

## 5.1.0

### Крупные изменения
* Библиотека [bem-core](https://en.bem.info/libs/bem-core/) была обновлена до версии [4.2.0](https://github.com/bem/bem-core/releases/tag/v4.2.0) ([#2019](https://github.com/bem/bem-components/issues/2019)).

### В релиз вошли следующие исправления ошибок
* Исправлена ошибка в `dropdown`, приводящая к его неожиданному закрытию ([#1998](https://github.com/bem/bem-components/issues/1998)).
* dist: Исправлена ошибка, при которой `i-bem-dom__init_auto` подключался в `no-autoinit`-бандл ([#2002](https://github.com/bem/bem-components/issues/2002)).

### Также в релиз вошли следующие изменения
* Add styles for link_disabled ([#2004](https://github.com/bem/bem-components/issues/2004)).
* dist: Provide concatenated bem-xjst templates ([#1855](https://github.com/bem/bem-components/issues/1855)).

## 5.0.0

### Изменения, ломающие обратную совместимость
* Библиотека [bem-core](https://en.bem.info/libs/bem-core/) была обновлена до версии [4.1.1](https://github.com/bem/bem-core/releases/tag/v4.1.1).

Подробнее об [изменениях](https://ru.bem.info/platform/libs/bem-core/4.1.1/changelog/) и [способе миграции](https://ru.bem.info/platform/libs/bem-core/4.1.1/migration/) с предыдущей версии.

## 4.0.0

### Изменения, ломающие обратную совместимость
* Обновлен дизайн контролов ([#1853](https://github.com/bem/bem-components/pull/1853)).
* Вместо Stylus теперь используется [PostCSS](http://postcss.org/) ([#1912](https://github.com/bem/bem-components/pull/1912)).

### Крупные изменения
* Библиотека [bem-core](https://en.bem.info/libs/bem-core/) была обновлена до версии [3.2.0](https://github.com/bem/bem-core/releases/tag/v3.2.0) ([#1944](https://github.com/bem/bem-components/issues/1944)).

### В релиз вошли следующие исправления ошибок
* Исправлена ошибка в BEMHTML-шаблоне блока `menu`, не позволявшая использовать `bem-xjst` выше 6 версии.
* Исправлена ошибка в `checkbox-group`, из-за которой не отображался разделитель между кнопками ([#1896](https://github.com/bem/bem-components/issues/1896)).

### Также в релиз вошли следующие изменения
* Лишние файлы исключены из пакетов при установке через `npm` и `bower`.
* Обновлена документация.

## 3.1.3

### В релиз вошли следующие исправления ошибок
* Исправлена ошибка в `modal_autoclosable`, приводящая к моментальному закрытию ([1963](https://github.com/bem/bem-components/pull/1963)).

## 3.1.2

### В релиз вошли следующие исправления ошибок
* `*.styl`-файлы скомпилированы в `*.css`.

## 3.1.0

### Крупные изменения
* Библиотека [bem-core](https://en.bem.info/libs/bem-core/) была обновлена до версии [3.2.0](https://github.com/bem/bem-core/releases/tag/v3.2.0).

### В релиз вошли следующие исправления ошибок
* Блок `button` теперь генерирует событие `click` на DOM-событие `pointerclick` вместо `pointerup`, что исправляет ошибку в `popup__autocloseable` ([#1958](https://github.com/bem/bem-components/issues/1958)).

## 3.0.2

### В релиз вошли следующие изменения
* В блоке `button` не будет сгенерирован элемент `text`, если в поле `text` в BEMJSON блока передан `null` или `undefined` ([#1951](https://github.com/bem/bem-components/issues/1951)).
* Изменен BEMHTML-шаблон блока `menu` для обеспечения поддержки в `bem-components` шаблонов на `bem-xjst` версии 7.x.
* Незначительные изменения в документации.

## 3.0.1

### В релиз вошли следующие исправления ошибок
* Исправлено поведение `button` с модификатором `disabled` в Firefox, при котором `document.activeElement` продолжал указывать на блок, если он был в фокусе в момент выставления модификатора `disabled` ([#1913](https://github.com/bem/bem-components/issues/1913)).

### Также в релиз вошли следующие изменения
* Добавлено правило `cursor: pointer` для блока `attach` ([#1860](https://github.com/bem/bem-components/issues/1860)).
* Обновлена документация.

## 3.0.0

### Изменения, ломающие обратную совместимость
* Библиотека [bem-core](https://en.bem.info/libs/bem-core/) была обновлена до версии [3.0.1](https://github.com/bem/bem-core/releases/tag/v3.0.1). С этим обновлением больше не используется библиотека [FastClick](https://github.com/ftlabs/fastclick) и вместо нее для iOS-устройств внедрена собственная реализация pointer-событий. Кроме того, для контролов было добавлено свойство `touch-action: manipulation` ([#1787](https://github.com/bem/bem-components/issues/1787)).
* Прекращена поддержка старых версий `bem-xjst` и `bh` ([#1803](https://github.com/bem/bem-components/issues/1803)). Следует использовать [bem-xjst](https://github.com/bem/bem-xjst) 6.3.0+. С этого момента нет необходимости добавлять зависимость от блока `i-bem` ради базовых шаблонов.
* Расширения файлов BEMHTML-шаблонов переименованы с `*.bemhtml` на `*.bemhtml.js` ([#1464](https://github.com/bem/bem-components/issues/1464). Необходимо убедиться, что в конфиге сборки поддерживается новое расширение.
* Метод `onSwitcherClick` блока `dropdown` был перенесен в прототип ([#1502](https://github.com/bem/bem-components/issues/1502)).
* Удалены конфиги `bem-tools` ([#1816](https://github.com/bem/bem-components/issues/1816)).

### В релиз вошли следующие исправления ошибок
* Исправлено отображение `dropdown` внутри `control-group` ([#1741](https://github.com/bem/bem-components/issues/1741)).

## 2.5.1

### Крупные изменения
* Библиотека [bem-core](https://ru.bem.info/libs/bem-core/) была обновлена до версии [2.9.1](https://github.com/bem/bem-core/releases/tag/v2.9.1) ([#1789](https://github.com/bem/bem-components/issues/1789)). Это обновление исправляет баг в `page`, из-за которого в `<meta name=viewport>` было неверное значение `user-scalable` на уровне `touch`.

### В релиз вошли следующие исправления ошибок
* Исправлена ошибка в блоке `menu`, из-за которой не проставлялся `tabindex` после состояния `disabled` ([#1791](https://github.com/bem/bem-components/pull/1791)).
* Исправлена ошибка в блоке `control-group`, которая приводила к лишней границе на стыке нескольких `button_checked`.

## 2.5.0

### Крупные изменения
* Библиотека [bem-core](https://ru.bem.info/libs/bem-core/) была обновлена до версии 2.9.0 ([#1755](https://github.com/bem/bem-components/issues/1755)).

### В релиз вошли следующие исправления ошибок
* Исправлена ошибка, при которой значение скрытого инпута в блоке `select` кэшировалось при перезагружке страницы ([#1752](https://github.com/bem/bem-components/issues/1752)).
* Исправлена ошибка, при которой в блоке `button` происходило событие `click` после `pointercancel` [#1764](https://github.com/bem/bem-components/pull/1764).
* Исправлена ошибка, при которой неправильно сериализовались значения `checkbox` и `radio` с помощью `jQuery` [#1768](https://github.com/bem/bem-components/issues/1768).
* Исправлено отображение `button` в состоянии `focused-hard` ([#1721](https://github.com/bem/bem-components/pull/1721)).
* Исправлено отображение правой границы `button` внутри `control-group` ([#1723](https://github.com/bem/bem-components/pull/1723)).
* Исправлено отображение границ для автозаполненных инпутов в браузерах, основанных на Blink ([#1710](https://github.com/bem/bem-components/issues/1710)).
* Исправлена a11y-разметка в блоке `select` ([#1734](https://github.com/bem/bem-components/issues/1734)).
* Добавлены недостающие зависимости для `select` ([#1667](https://github.com/bem/bem-components/pull/1667))&

### Также в релиз вошли следующие изменения
* Dist: добавлена генерация бандлов без автоинициализации клиентского JS [#1781](https://github.com/bem/bem-components/pull/1781).
* BEMHTML: внесены изменения для поддержки новых версий `bem-xjst` ([#1745](https://github.com/bem/bem-components/issues/1745)).
* Обновлена документация.

## 2.4.0

### Крупные изменения
* Библиотека `bem-core` была обновлена до версии [2.8.0](https://ru.bem.info/libs/bem-core/v2.8.0/changelog/#280).
* Проработана доступность (a11y) всех блоков ([#1206](https://github.com/bem/bem-components/issues/1206)).
* dist-сборка теперь собирает шаблоны с помощью `bem-xjst@next`, что позволяет добавлять шаблоны в рантайме.

### Также в релиз вошли следующие изменения
* `dropdown` теперь не генерирует обертку вокруг `switcher` и `popup` ([#1392](https://github.com/bem/bem-components/issues/1392)).
* Несемантичное использования тега `<i>` заменено на `<span>` во всех блоках ([#1668](https://github.com/bem/bem-components/issues/1668)).
* Многострочные комментарии в файлах stylus, ломающие карты кода, заменены на однострочные ([#1702](https://github.com/bem/bem-components/issues/1702)).

## 2.3.0

### Крупные изменения
* Библиотека `bem-core` была обновлена до версии [2.7.0](https://ru.bem.info/libs/bem-core/v2.7.0/changelog/#270).
* Добавлена поддержка BH 4.x ([#1587](https://github.com/bem/bem-components/issues/1587)).
* Добавлена поддержка BEM-XJST 2.x ([#1495](https://github.com/bem/bem-components/pull/1495)).
* В `input`, `textarea` и `select` специфичные для темы стили модификатора `_width_available` вынесены из `common`-уровня обратно на `design`-уровень переопределения ([#1548](https://github.com/bem/bem-components/issues/1548)).

### В релиз вошли следующие исправления ошибок
* В `checkbox` иправлена ошибка в MSIE 11/Edge ([#1590](https://github.com/bem/bem-components/issues/1590)).
* В `attach` иправлена ошибка в MSIE 11/Edge ([#1596](https://github.com/bem/bem-components/issues/1596)).
* В `button` исправлена поддержка нестандартных HTML-тегов для собственных реализаций кнопки ([#1566](https://github.com/bem/bem-components/issues/1566)).
* В `textarea` исправлена ошибка, из-за которой блок неправильно обрабатывал собственные зависимости ([#1565](https://github.com/bem/bem-components/issues/1565)).

### Также в релиз вошли следующие изменения
* Обновлена английская версия описания библиотеки ([#1552](https://github.com/bem/bem-components/pull/1552)).
* В русскую документацию добавлен раздел «Понимание принципов библиотеки» и внесены другие мелкие исправления ([#1613](https://github.com/bem/bem-components/pull/1613)).
* В русскую документацию добавлена информация об использовании `dist`-сборки ([#1584](https://github.com/bem/bem-components/pull/1584)).
* В разработческой версии `dist` картинки теперь «замораживаются» внутри CSS-файлов ([#1568](https://github.com/bem/bem-components/issues/1568)).
* В `select` ускорена инициализация ([#1595](https://github.com/bem/bem-components/pull/1595)).
* Улучшено отображение `input_theme_islands` без модификатора `_has-clear` ([#1610](https://github.com/bem/bem-components/issues/1610)).
* В `input_theme_islands` исправлено отображение выделенного текста ([#1608](https://github.com/bem/bem-components/issues/1608)).

## 2.2.1

### В релиз вошли следующие исправления ошибок
* В `checkbox` исправлена ошибка, из-за которой не работало переключение состояний по клику в чекбокс в большинстве браузеров ([#1538](https://github.com/bem/bem-components/issues/1538)).

## 2.2.0

### В релиз вошли следующие исправления ошибок
* В `select` исправлена ошибка, при которой он не раскрывался по первому нажатию на `space` ([#1486](https://github.com/bem/bem-components/issues/1486)).
* В `checkbox` исправлена поддержка touch-устройств ([#1472](https://github.com/bem/bem-components/issues/1472)).

### Также в релиз вошли следующие изменения
* В блоке `link` добавлена возможность отменить поведение по умолчанию ([#1485](https://github.com/bem/bem-components/issues/1485)).
* Добавлена дополнительная проверка на существование группы в шаблонах `menu` ([#1513](https://github.com/bem/bem-components/issues/1513)).
* В BH-бандлы в `dist` добавлена мимикрия под BEMHTML ([#1530](https://github.com/bem/bem-components/issues/1530)).
* Были внесены мелкие исправления в документацию.

## 2.1.1

### В релиз вошли следующие исправления ошибок
* В `select` исправлена деградация поддержки уравления с клавиатуры ([#1456](https://github.com/bem/bem-components/issues/1456)).

### Также в релиз вошли следующие изменения
* Теперь полю `val` в блоке `progressbar` по умолчанию присваивается ноль ([#1468](https://github.com/bem/bem-components/issues/1468)).
* Добавлено описание `button_view_plain` в документацию ([#1454](https://github.com/bem/bem-components/issues/1454)).

## 2.1.0

### Крупные изменения

* Реализована опциональная поддержка Internet Explorer 8 с деградацией ([#1205](https://github.com/bem/bem-components/issues/1205)). Инструкцию по использованию см. [в README](/README.ru.md#Поддержка-ie8).
* Библиотека `bem-core` была обновлена до версии [2.6.0](https://github.com/bem/bem-core/blob/v2/CHANGELOG.ru.md#260).


### В релиз вошли следующие исправления ошибок

* Исправлена ошибка при изменении размеров `textarea` ([#1330](https://github.com/bem/bem-components/issues/1330)).
* Исправлена ошибка, при которой в момент раскрытия `select` мог вызвать появление полос прокрутки на странице ([#1323](https://github.com/bem/bem-components/issues/1323)).
* Убрана подсветка контролов при тапе на тач-устройствах ([#1390](https://github.com/bem/bem-components/issues/1390)).
* Исправлен внешний вид `button_view_plain` в состоянии disabled ([#1378](https://github.com/bem/bem-components/issues/1378)).
* Исправлена ошибка в блоке `input`, возникавшая в Chrome, если текст не помещался в поле ([#1382](https://github.com/bem/bem-components/issues/1382)).
* Исправлена ошибка, при которой могло быть видно содержимое закрытого блока `modal` ([#1372](https://github.com/bem/bem-components/issues/1372)).
* Исправлена ошибка лишней подписки на `keydown` в блоке `menu` ([#1381](https://github.com/bem/bem-components/issues/1381)).
* Событие при нажатии на `escape` в блоке `select` теперь не всплывает ([#1367](https://github.com/bem/bem-components/issues/1367)).
* Блок `link` внутри `menu-item_type_link` в состоянии disabled тоже получает состояние disabled автоматически ([#1353](https://github.com/bem/bem-components/issues/1367)).

### Также в релиз вошли следующие изменения

* Добавлена возможность использовать модификатор `_width_available` без указания темы ([#1404](https://github.com/bem/bem-components/issues/1404)).
* Улучшен конфиг сборки поставки `bem-components` как библиотеки (`dist`) ([#1411](https://github.com/bem/bem-components/issues/1411)).
* `menu` теперь генерирует исключения с подробным описанием, если используется с несоответствующим содержимым ([#1320](https://github.com/bem/bem-components/issues/1320)).
* Обновлена документация.
