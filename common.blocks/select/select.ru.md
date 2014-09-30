# select

Блок `select` («селект») позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором. Реализация блока основана на блоках [button](../button/button.ru.md), [popup](../popup/popup.ru.md), [menu](../menu/menu.ru.md) и [menu-item](../menu-item/menu-itemru.md). Визуально представлен кнопкой и выпадающим списком с элементами меню. Щелчок по кнопке раскрывает выпадающий список под или над кнопкой в зависимости от ее положения на странице (`{ directions : ['bottom-left', 'bottom-right', 'top-left', 'top-right'] }`). Щелчок вне зоны попапа автоматически скрывает его (`{ autoclosable : true }`).

Раскрывающийся список имеет всего один уровень вложенности и позволяет выбрать:

* только один элемент из списка ([`select_mode_radio`](#radio-select));
* один, несколько или ни одного элемента из списка ([`select_mode_check`](#multiple-choice));
* один или ни одного элемента из списка ([`select_mode_radio-check`](#single-choice)).

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
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
        <td>Устанавливает максимальную ширину кнопки селекта. Ширина раскрывающегося списка при этом определяется самым широким текстом пункта или корректируется с помощью стилей.</td>
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
        <td>Задает значение раскрывающегося списка выбора в случае, если ни один из пунктов не отмечен.
            <br> Применяется только для селектов с установленным модификатором <code>mode</code> в значении <code>check</code> или <code>radio-check</code>.</td>
    </tr>
</table>

При необходимости дополнительные HTML-атрибуты блока могут быть заданы в зарезервированном поле `attrs` в BEMJSON.

## Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

* simple
* islands (**Важно:** При выборе темы `islands` необходимо указывать обязательный модификатор [size](#size).)

Если модификатор `theme` не указан, отображается [кастомная](#custom) реализация контрола без применения стилей.

Наглядно показано на примерах ниже:

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

**islands**

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
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

<a name="multiple-choice"></a>
* селект с множественным выбором, который позволяет оставить список без выбранных элементов (`select_mode_check`). При щелчке мышью по пункту списка его состояние меняется на противоположное.

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

<a name="radio-select"></a>
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

<a name="single-choice"></a>
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

### Состояния блока

#### Ширина кнопки селекта `_width`

Модификатор `width` в значении `available` растягивает кнопку селекта по ширине в зависимости от длины выбранного пункта.

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

#### В фокусе `_focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.


## Элементы блока

### Кнопка `__button`

Селект визуально представлен кнопкой (блок [button](../button/button.ru.md)), которая содержит иконку `<i>`, реализованную блоком [icon](../icon/icon.ru.md) с примиксованным элементом `tick`. Так как иконка является частью кнопки селекта, ее размер устанавливается размером кнопки. Щелчок по кнопке раскрывает список выбора.

Селект реализован с помощью блока [button](../button/button.ru.md), поэтому ему можно задавать следующие модификаторы:

* `theme`
* `size`
* `focused`
* `checked`
* `disabled`

## Меню `__menu`

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

## Контрол `__control`

Вспомогательный скрытый элемент, который отвечает за формирование элементов списка выбора. Добавляется блоку на уровне шаблонизатора.
