# select

Блок `select` («селект») – раскрывающийся список выбора. Реализация блока основана на блоках `button`, `popup`, `menu` и `menu-item`. Визуально представлен кнопкой и выпадающим списком с элементами меню. Щелчок по кнопке раскрывает выпадающий список под или над кнопкой в зависимости от ее положения на странице (`{ directions : ['bottom-left', 'bottom-right', 'top-left', 'top-right'] }`). Щелчок вне зоны попапа автоматически скрывает его (`{ autoclosable : true }`).

Раскрывающийся список имеет всего один уровень вложенности и позволяет выбрать:

* только один элемент из списка (`select_mode_radio`);
* один, несколько или ни одного элемента из списка (`select_mode_check`);
* один или ни одного элемента из списка (`select_mode_radio-check`).

## Допустимые атрибуты блока

Допустимые атрибуты блока задаются в одноименных полях входного BEMJSON-блока:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td>Задает имя выпадающего списка.</td>
    </tr>
    <tr>
        <td>id</td>
        <td>
            <code>String</code>
        </td>
        <td>Задает уникальный идентификатор селекта.</td>
    </tr>
    <tr>
        <td>options</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>Задает массив пунктов списка. Каждый пункт имеет обязательный атрибут <code>val</code>, реализованный скрытым элементом <code>control</code>.</td>
    </tr>
    <tr>
        <td>textMaxWidth</td>
        <td>
            <code>String</code>
        </td>
        <td>Устанавливает максимальную ширину кнопки селекта. Ширина раскрывающегося списка при этом вычисляется в зависимости от ширины пунктов.</td>
    </tr>
    <tr>
        <td>optionsMaxHeight</td>
        <td>
            <code>String</code>
        </td>
        <td>Устанавливает максимальную высоту выпадающего списка.<br>Если все пункты списка не вмещаются, появляется скролл.<br> Если значение не указано, высота выпадающего списка по умолчанию будет вычисляться в зависимости от количества пунктов.</td>
    </tr>
    <tr>
        <td>text</td>
        <td>
            <code>String</code>
        </td>
        <td>Задает значение раскрывающегося списка выбора в случае, если ни один из пунктов не отмечен.<br> Применяется только для селектов с установленным модификатором <code>mode</code> в значении <code>check</code> или <code>radio-check</code>.</td>
    </tr>
</table>

Другие допустимые атрибуты блока могут задаваться в зарезервированном поле `attrs` в BEMJSON.

## Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

* simple
* normal

Если модификатор темы не указан, отображается кастомная реализация контрола без применения стилей.

Наглядно показано на примерах ниже:

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', focused : true },
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
    mods : { mode : 'radio', theme : 'simple', focused : true },
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
    mods : { mode : 'radio', theme : 'normal', size : 'm', focused : true },
    name : 'select1',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

### Типы `_mode`

Обязательный модификатор.

Блок представлен следующими типами:

* селект с множественным выбором, который позволяет оставить список без выбранных элементов (`select_mode_check`). При щелчке мышью по пункту списка, его состояние меняется на противоположное. Если пункт был активен – он деактивируется, и наоборот.


```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'normal', size : 'm' },
    name : 'select1',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third', checked : true }
    ]
}
```

* меню-переключатель (`select_mode_radio`). Применяется для создания селектов, позволяющих только одиночный выбор.
Для этого типа селекта текст в кнопке устанавливается в зависимости от выбранного элемента. Если элемент не выбран, то по умолчанию выбирается первый пункт из списка.


```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'normal', size : 'm' },
    name : 'select2',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

* селект с одиночным выбором, который позволяет оставить список без выбранных элементов (`select_mode_radio-check`). При щелчке мышью по пункту списка, его состояние меняется на противоположное. Если пункт был активен – он деактивируется, и наоборот.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'normal', size : 'm' },
    name : 'select3',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

### Состояния блока

#### В фокусе `_focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

#### Ширина кнопки селекта `_width`

Модификатор `width` в значении `available` растягивает кнопку селекта по ширине в зависимости от длины выбранного пункта.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'normal', size : 'm', width : 'available' },
    name : 'select4',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second second second second second second second second' },
        { val : 3, text : 'third' }
    ]
}
```

## Элементы блока

### Кнопка `__button`

Селект визуально представлен кнопкой (элемент `button`), которая содержит иконку `<i>`, реализованную блоком [icon](../icon/icon.ru.md) с примиксованным элементом `tick`. Так как иконка является частью кнопки селекта, ее размер устанавливается размером кнопки. Щелчок по кнопке раскрывает список выбора.

Так как селект реализован с помощью блока [button](../button/button.ru.md), ему можно задавать следующие модификаторы:

* `theme`
* `size`
* `focused`
* `checked`
* `disabled`

## Контрол `__control`

Вспомогательный скрытый элемент, который отвечает за формирование элементов списка выбора.

## Меню `__menu`

Элемент `menu` позволяет управлять пунктами списка выбора:

* `val` – значение, возвращаемое пунктом из списка, если он выбран. Обязательный атрибут. Может содержать уникальный идентификатор `{ val : { id : 1 } }`.
* `text` – название пункта в списке.
* `checked` – присваивается пункту из списка, если он выбран. `{ checked : true }` – пункт выбран.
* `checkedText` – задает значение, отображаемое в кнопке селекта, для выбранного пункта. Задается только для блока `select` с модификатором `mode` в значении `check`.
* `icon` – графический элемент (иконка)

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'normal', size : 'm' },
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
    mods : { mode : 'check', theme : 'normal', size : 'm' },
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
