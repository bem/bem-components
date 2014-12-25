# select

Используется для создания раскрывающегося списка с возможностью одиночного или множественного выбора.

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#mode">mode</a> | <code>'check'</code>, <code>'radio'</code>, <code>'radio-check'</code> | <code>BEMJSON</code> | Режим выбора пунктов раскрывающегося списка. |
| <a href="#width">width</a> | <code>'available'</code> | <code>BEMJSON</code> | Ширина кнопки раскрывающегося списка. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code>  | <code>BEMJSON</code> | Размер блока. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#name">name</a> | <code>String</code> | Имя раскрывающегося списка. |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code>, <code>Array</code> | Выбранное значение из списка. Если блоку установлен <a href="#mode-check">модификатор mode в значении check</a>, выбранные значения всегда оформляются в виде массива. |
| <a href="#text">text</a> | <code>String</code> | Значение, которое отображается в кнопке раскрывающегося списка, в случае, если ни один из пунктов выбран. Используется только для кнопки с <a href="#mode-check">модификатором type в значении check</a> или <a href="#mode-radiocheck">в значении radio-check</a>. |
| <a href="#options">options</a> | <code>Array</code> | Массив пунктов списка. |
| <a href="#textmaxwidth">textMaxWidth</a> | <code>Number</code> | Максимальная ширина кнопки раскрывающегося списка. |
| <a href="#optionsmaxheight">optionsMaxHeight</a> | <code>Number</code> | Максимальная высота выпадающего списка. |
| <a href="#id">id</a> | <code>String</code> | Уникальный идентификатор раскрывающегося списка. |
| <a href="#tab">tabIndex</a> | <code>Number</code> | Последовательность перехода между контролами при нажатии на <code>Tab</code>. |


## Описание блока

Блок визуально представлен кнопкой и выпадающим списком.

### Модификаторы блока

<a name="mode"></a>
#### Модификатор `mode`

Допустимые значения: `'check`, `'radio'`, `'radio-check'`.

Способ использования: `BEMJSON`.

Обязательный модификатор.

<a name="mode-check"></a>
##### Список с множественным выбором (модификатор `mode` в значении `check`)

Позволяет выбрать произвольное количество пунктов в раскрывающемся списке.

```js
{
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
}
```

<a name="mode-radio"></a>
##### Список с одиночным обязательным выбором (модификатор `mode` в значении `radio`)

Позволяет создать раскрывающийся список, в котором выбран ровно один пункт.

Если пункт не выбран, то по умолчанию выбирается первое значение из списка.

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select2',
    val : 2,
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

<a name="mode-radiocheck"></a>
##### Список с одиночным необязательным выбором (модификатор `mode` в значении `radio-check`)

Модификатор `mode` в значении `radio-check`, так же как и <a href="#mode-radio">модификатор mode в значении radio</a>, позволяет выбрать ровно один пункт из выпадающего списка. Принципиальное отличие в том, что в значении `radio-check` есть возможность оставить список без выбранных пунктов.

```js
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
    name : 'select3',
    val : 2,
    text : '—',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

<a name="width"></a>
#### Модификатор `width`

Допустимое значение: `'available'`.

Способ использования: `BEMJSON`.

Позволяет растягивать кнопку раскрывающегося списка на максимально допустимую ширину.

```js
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm', width : 'available' },
    name : 'select4',
    val : 2,
    text : '—',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс наоборот: вы пишете БЭМ-проект, а мы подсказываем' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

Модификатор может быть установлен:

* всему блоку

```js
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm', disabled : true },
    name : 'select4',
    val : 2,
    text : '—',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс наоборот: вы пишете БЭМ-проект, а мы подсказываем' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

* отдельному пункту списка

```js
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
    name : 'select4',
    val : 2,
    text : '—',
    options : [
        { val : 1, text : 'Доклад', disabled : true },
        { val : 2, text : 'Мастер-класс наоборот: вы пишете БЭМ-проект, а мы подсказываем' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

<a name="focused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Выставляется автоматически при получении блока фокуса.

Отвечает за наличие фокуса на блоке.

```javascript
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm', focused : true },
    name : 'select4',
    val : 2,
    text : '—',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

<a name="theme"></a>
#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Модификатор отвечает за стилевое оформление блока.

Необходимо использовать с модификатором <a href="#checkboxsize">size</a>.

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    val : 2,
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

<a name="size"></a>
#### Модификатор `size`

Допустимые значения: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Задает размер блоку.

Необходимо использовать с модификатором <a href="#theme">theme</a> в значении `islands`.

**s**

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 's' },
    name : 'select1',
    val : 2,
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

**m**

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    val : 2,
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

**l**

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'l' },
    name : 'select1',
    val : 2,
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

**xl**

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'xl' },
    name : 'select1',
    val : 2,
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

### Специализированные поля блока

<a name="name"></a>

#### Поле `name`

Тип: `String`.

Определяет имя выпадающего списка.

<a name="val"></a>
#### Поля `val`

Тип: `String`, `Number`, `Array` (если указан [модификатор mode в значении check](#mode-check)).

Определяет:

* выбранный пункт списка.

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    val : 2,
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

* список выбранных пунктов списка, если блоку установлен [модификатор mode в значении check](#mode-check), и используется тип поля `Array`.

```js
{
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
}
```

<a name="text"></a>
#### Поле `text`

Тип: `String`.

Определяет значение, которое отображается в кнопке раскрывающегося списка, в случае, если ни один из пунктов выбран. Используется только для кнопки с <a href="#mode-check">модификатором type в значении check</a> или <a href="#mode-radiocheck">в значении radio-check</a>.

```js
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
    name : 'select3',
    text : 'Обучатор',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

```js
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select1',
    text : 'Ничего не выбрано',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

<a name="options"></a>
#### Поле `options`

Тип: `Array`.

Определяет массив объектов (пунктов списка) либо групп с опциональным названием.

Задает набор значений для каждого пункта.

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <code>val</code> | <code>String</code>, <code>Number</code> | Значение, которое будет отправлено на сервер при выборе пункта. Обязательное поле. |
| <code>text</code> | <code>String</code> | Название пункта в списке. |
| <code>checkedText</code> | <code>String</code> | Текст, отображаемый вместо названия пункта в кнопке раскрывающегося списка. Задается только для списков с возможностью <a href=#mode-check>множественного выбора</a>. |
| <code>disabled</code> | <code>Boolean</code> | Неактивное состояние отдельного пункта. |
| <code>icon</code> | <code>BEMJSON</code> | Иконка. Формируется блоком <a href="../icon/icon.ru.md">icon</a>. |

```js
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select5',
    val : [2],
    text : 'Подписаться на новости',
    options : [
        {
            val : 1,
            text : 'Twitter',
            checkedText : 'tw',
            icon : { block : 'icon', mods : { social : 'twitter' } }
        },
        {
            val : 2,
            text : 'VKontakte',
            checkedText : 'vk',
            icon : { block : 'icon', mods : { social : 'vk' } }
        }
    ]
}
```

Пункты раскрывающегося списка могут быть организованы в группы:

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <code>title</code> | <code>String</code> | Название группы пунктов. |
| <code>Group</code> | <code>Array</code> | Массив пунктов. |

```js
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select5',
    val : [2, 5],
    text : 'Программа конференции',
    options : [
        {
            title : 'Теория',
            group : [
                { val : 1, text : 'Доклад №1' },
                { val : 2, text : 'Доклад №2' },
                { val : 3, text : 'Доклад №3' },
            ]
        },
        {
            title : 'Практика',
            group : [
                { val : 4, text : 'Мастер-класс №1' },
                { val : 5, text : 'Мастер-класс №2' }
            ]
        }
    ]
}
```

<a name="textmaxwidth"></a>
#### Поле `textMaxWidth`

Тип: `Number`.

Определяет максимальную ширину кнопки раскрывающегося списка. Ширина списка при этом определяется самым широким текстом пункта или корректируется с помощью стилей.

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    textMaxWidth : 100,
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

<a name="optionsmaxheight"></a>

#### Поле `optionsMaxHeight`

Тип: `Number`.

Определяет максимальную высоту раскрывающегося списка. Если все пункты списка не вмещаются, появляется полоса прокрутки.

Если значение не указано, высота раскрывающегося списка по умолчанию будет вычисляться в зависимости от количества пунктов.

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    textMaxWidth : 100,
    optionsMaxHeight : 100,
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

<a name="id"></a>
#### Поле `id`

Тип: `String`.

Определяет уникальный идентификатор раскрывающегося списка.

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    id : 'Unique_1',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```
