# select

Позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#mode>mode</a> | <code>'check'</code>, <code>'radio'</code>, <code>'radio-check'</code> | | Тип переключателя. |
| <a href=#width>width</a> | <code>'available'</code> | | Ширина кнопки селекта. |
| <a href=#focused>focused</a> | <code>true</code> | | В фокусе. |
| <a href=#theme>theme</a> | <code>'custom'</code>, <code>'simple'</code>, <code>'normal'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#name>name</a> | <code>String</code> | Задает имя выпадающего списка. |
| <a href=#text>text</a> | <code>String</code> | Задает значение раскрывающегося списка выбора в случае, если ни один из пунктов не отмечен.  Применяется только для селектов с модификатором `mode` установленным в значение `check` или `radio-check`. |
| <a href=#id>id</a> | <code>String</code> | Задает уникальный идентификатор селекта. |
| <a href=#options>options</a> | <code>BEMJSON</code> | Задает массив пунктов списка. Каждый пункт имеет обязательный атрибут `val`, реализованный скрытым элементом `control`. |
| <a href=#textmaxwidth>textMaxWidth</a> | <code>String</code> | Устанавливает максимальную ширину кнопки селекта. Ширина раскрывающегося списка при этом определяется самым широким текстом пункта или корректируется с помощью стилей. |
| <a href=#optionsmaxheight>optionsMaxHeight</a> | <code>String</code> | Устанавливает максимальную высоту выпадающего списка. Если все пункты списка не вмещаются, появляется скролл. Если значение не указано, высота выпадающего списка по умолчанию будет вычисляться в зависимости от количества пунктов. |

### Описание

Реализация блока основана на блоках [button](../button/button.ru.md), [popup](../popup/popup.ru.md), [menu](../menu/menu.ru.md) и [menu-item](../menu-item/menu-itemru.md). Визуально представлен кнопкой и выпадающим списком с элементами меню. Щелчок по кнопке раскрывает выпадающий список под или над кнопкой в зависимости от ее положения на странице (`{ directions : ['bottom-left', 'bottom-right', 'top-left', 'top-right'] }`). Щелчок вне зоны попапа автоматически скрывает его (`{ autoclosable : true }`).

Раскрывающийся список имеет всего один уровень вложенности и позволяет выбрать:

* только один элемент из списка ([`select_mode_radio`](#select_mode_radio));
* один, несколько или ни одного элемента из списка ([`select_mode_check`](#select_mode_check));
* один или ни одного элемента из списка ([`select_mode_radio-check`](#select_mode_radio-check)).

### Обзор блока

#### Модификаторы блока

<a name="mode"></a>
##### Модификатор `mode`

Допустимые значения: `'radio'`, `'check`, `'radio-check'`.

Способ использования:

Обязательный модификатор.

Примеры:

<a name="select_mode_check"></a>
* селект с множественным выбором, который позволяет оставить список без выбранных элементов (`select_mode_check`). При щелчке мышью по пункту списка, его состояние меняется на противоположное.

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select1',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third', checked : true }
    ]
}
```

<a name="select_mode_radio"></a>
* меню-переключатель (`select_mode_radio`). Применяется для создания селектов, которые позволяют выбрать только один пункт из списка.
Для этого типа селекта текст в кнопке устанавливается в зависимости от выбранного элемента. Если элемент не выбран, то по умолчанию выбирается первый пункт из списка.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select2',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

<a name="select_mode_radio-check"></a>
* селект с одиночным выбором, который позволяет оставить список без выбранных элементов (`select_mode_radio-check`). При щелчке мышью по пункту списка, его состояние меняется на противоположное.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
    name : 'select3',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

<a name="width"></a>
##### Модификатор `width`

Допустимое значение: `'available'`.

Способ использования:

Модификатор `width` в значении `available` растягивает кнопку селекта по ширине в зависимости от длины выбранного пункта.

Пример:

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm', width : 'available' },
    name : 'select4',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second second second second second second second second' },
        { val : 3, text : 'third' }
    ]
}
```

<a name="focused"></a>
##### Модификатор `focused`

Допустимое значение: true.

Способ использования:

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

<a name="theme"></a>
##### Модификатор `theme`

Допустимые значения: `'simple'`, `'islands'`.

Способ использования: `BEMJSON`.

Блок представлен в следующих темах:

* simple
* normal (**Важно**: При выборе темы `normal` необходимо указывать обязательный модификатор `size`)

Если модификатор `theme` не указан, отображается [кастомная](#custom) реализация контрола без применения стилей.

Примеры:

<a name="custom"></a>
**custom**

```bemjson
{
    block : 'select',
    mods : { mode : 'radio' },
    name : 'select1',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

**simple**

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'simple' },
    name : 'select1',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

**normal**

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'normal', size : 'm' },
    name : 'select1',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

#### Специализированные поля блока

<a name="name"></a>
#### `name`

Задает имя выпадающего списка.

<a name="text"></a>
#### `text`

Задает значение раскрывающегося списка выбора в случае, если ни один из пунктов не отмечен. Применяется только для селектов с модификатором `mode` установленным в значение `check` или `radio-check`.

<a name="id"></a>
#### `id`

Задает уникальный идентификатор селекта.

<a name="options"></a>
#### `options`

Задает массив пунктов списка. Каждый пункт имеет обязательный атрибут `val`, реализованный скрытым элементом `control`.

<a name="textmaxwidth"></a>
#### `textMaxWidth`

Устанавливает максимальную ширину кнопки селекта. Ширина раскрывающегося списка при этом определяется самым широким текстом пункта или корректируется с помощью стилей.

<a name="optionsmaxheight"></a>
#### `optionsMaxHeight`

Устанавливает максимальную высоту выпадающего списка. Если все пункты списка не вмещаются, появляется скролл. Если значение не указано, высота выпадающего списка по умолчанию будет вычисляться в зависимости от количества пунктов.

#### Элементы блока

##### Кнопка `__button`

Селект визуально представлен кнопкой (блок [button](../button/button.ru.md)), которая содержит иконку `<i>`, реализованную блоком [icon](../icon/icon.ru.md) с примиксованным элементом `tick`. Так как иконка является частью кнопки селекта, ее размер устанавливается размером кнопки. Щелчок по кнопке раскрывает список выбора.

Селект реализован с помощью блока [button](../button/button.ru.md), поэтому ему можно задавать следующие модификаторы:

* `theme`
* `size`
* `focused`
* `checked`
* `disabled`

##### Меню `__menu`

Элемент `menu` позволяет управлять пунктами списка выбора:

* `val` – значение, возвращаемое пунктом из списка, если он выбран. Обязательный атрибут. Может содержать уникальный идентификатор `{ val : { id : 1 } }`.
* `text` – название пункта в списке.
* `checked` – присваивается пункту из списка, если он выбран. `{ checked : true }` – пункт выбран.
* `checkedText` – текст, отображаемый вместо названия пункта в кнопке селекта. Задается только для блока `select` с возможностью [множественного выбора](#multiple-choice).
* `icon` – графический элемент (иконка).

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select5',
    text : '—',
    options : [
        {
            val : { id : 1 },
            text : 'Twitter',
            checkedText : 'tw',
            icon : { block : 'icon', mods : { social : 'twitter' } }
        },
        {
            val : { id : 2 },
            text : 'VKontakte',
            checkedText : 'vk',
            icon : { block : 'icon', mods : { social : 'vk' } },
            checked : true
        }
    ]
}
```

Элементы списка могут быть объединены в группы. Для группировки пунктов выбора служит элемент `group`, в который вкладываются необходимые элементы списка. Название группы задается через атрибут `title`.

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select5',
    text : 'empty',
    options : [
        {
            group : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true },
                { val : 3, text : 'third' }
            ],
            title : 'title of group 1'
        },
        {
            group : [
                { val : 4, text : 'fourth' },
                { val : 5, text : 'fifth', checked : true },
                { val : 6, text : 'sixth', disabled : true }
            ]
        }
    ]
}
```

##### Контрол `__control`

Вспомогательный скрытый элемент, который отвечает за формирование элементов списка выбора. Добавляется блоку на уровне шаблонизатора.
