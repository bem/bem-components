# История изменений

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
