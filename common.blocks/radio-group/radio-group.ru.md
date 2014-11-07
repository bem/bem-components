# radio-group

Служит для создания группы зависимых переключателей, реализованных блоком [radio](../radio/radio.ru.md).

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#type>type</a> | <code>'button'</code>, <code>'line'</code> | <code>BEMJSON</code> | Выравнивает радиопереключатели. |
| <a href=#mode>mode</a> | <code>'radio-check'</code> | | Позволяет выбрать один или ни одного элемента. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code> | В фокусе. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Делает блок недоступным. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code>  | <code>BEMJSON</code> | Размер радиопереключателя. |
| <a href=#theme>theme</a> | <code>'simple'</code>, <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#name>name</a> | <code>String</code> | Имя радиогруппы. Преобразуется в HTML-атрибут `name` вложенного блока `input`. |
| <a href=#options>options</a> | <code>Array</code> | Массив пар значений `text=val`, которые соответствуют одному радиопереключателю. На сервер отправляется пара `name=val`, где имя группы радиопереключателей задается ключом `name`, а значение каждого радипереключателя — ключом `val`. 
Модификатор `disabled` блока `radio` может быть передан радиопереключателю из группы. |

При необходимости дополнительные HTML-атрибуты блока могут быть заданы в зарезервированном поле `attrs` в BEMJSON.

### Описание

Блок позволяет пользователю выбрать только одну опцию (пункт) из предопределенного набора (группы).

Блок `radio-group` преобразуется в HTML-элемент с тегом `<span>` – контейнером, содержащим группу переключателей.


### Обзор блока

#### Модификаторы блока

<a name="type"></a>
##### Модификатор `type`

Допустимые значения: `'button'`, `'button'`.

Способ использования: `BEMJSON`.

Доступны следующие значения модификатора `type`:

* `button`. Модификатор `type` в значении `button` позволяет реализовать блок `radio-group` с помощью блока [button](..button/button.ru.md). Все радиопереключатели группы в данном случае всегда располагаются в линию.

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

* `line`. Модификатор `type` в значении `line` применяется к радиогруппе для выравнивания переключателей в строку. После каждого радиопереключателя группы, кроме последнего, автоматически добавляется отступ справа. Размер отступа зависит от значения модификатора `size`. Реализован только в теме `islands`.

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'line' },
    name : 'radio-line',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

<a name="mode"></a>
##### Модификатор `mode`

Допустимое значение: `radio-check`.

Способ использования:

Модификатор `mode` в значении `radio-check` реализован только для радиогруппы, созданной на основе блока `button` (`radio-group_type_button`). Данный режим позволяет выбрать только один элемент из группы или оставить ее без выбранных элементов. При щелчке мышью по кнопке, ее состояние меняется на противоположное.

Пример:

```bemjson
{
    block : 'radio-group',
    name : 'button-radio-check',
    mods : { theme : 'islands', size : 'm', type : 'button', mode : 'radio-check' },
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

<a name="focused"></a>
##### Модификатор `focused`

Допустимое значение: `true`.

Способ использования: `BEMJSON`.

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

<a name="disabled"></a>
##### Модификатор `disabled`

Допустимое значение: `true`.

Способ использования: `BEMJSON`, `JS`.

В состоянии «неактивен» блок виден, но недоступен для действий пользователя. Такой блок не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами. В большинстве случаев к неактивному блоку применяются дополнительные стили, чтобы выделить его на странице.

При установке модификатора `disabled` для группы всем радиопереключателям также устанавливается модификатор `disabled`. Как следствие, для них не будут:

* устанавливаться модификаторы состояния `hovered`, `pressed` и `focused`;
* изменяться значения модификатора `checked`.

Пример:

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name : 'radio-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true }
    ]
}
```

Модификатор `disabled` может быть назначен отдельным переключателям в группе.

Пример:

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'line' },
    name : 'radio-line',
    options : [
        { val : 1, text : 'first', disabled : true },
        { val : 2, text : 'second' },
        { val : 3, text : 'third' }
    ]
}
```

<a name="size"></a>
##### Модификатор `size`

Допустимое значение: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Реализован только в теме `islands`.

Модификатор `size` устанавливает размер переключателей для всех типов радиогруппы.

В зависимости от значения модификатора [`type`](#type) доступны следующие размеры реализации блока:

<table>
    <tr>
        <th>Размер</th>
        <th>Обычная радиогруппа</th>
        <th>Кнопочная радиогруппа
            <br>(<code>radio-group_type_button</code>)</th>
    </tr>
    <tr>
        <th>s</th>
        <td>–</td>
        <td>+</td>
    </tr>
    <tr>
        <th>m</th>
        <td>+</td>
        <td>+</td>
    </tr>
    <tr>
        <th>l</th>
        <td>+</td>
        <td>+</td>
    </tr>
    <tr>
        <th>xl</th>
        <td>–</td>
        <td>+</td>
</table>

Примеры:

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 's', type : 'button' },
    name : 'Small',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'Medium',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'l', type : 'button' },
    name : 'Large',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'xl', type : 'button' },
    name : 'X-Large',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

<a name="theme"></a>
##### Модификатор `theme`

Допустимое значение: `'simple'`, `'islands'`.

Способ использования: `BEMJSON`.

Блок представлен в следующих темах:

 * simple
 * islands (**Важно:** При выборе темы `islands` необходимо указывать обязательный модификатор [size](#size).)

Без указания модификатора `theme` отображается [нативный](#native) вид контрола.

Примеры:

<a name="native"></a>
**default**

```bemjson
{
    block : 'radio-group',
    name : 'radio-default',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

**simple**

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'simple' },
    name : 'radio-simple',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

**islands**

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

#### Специализированные поля блока

<a name="name"></a>
#### `name`

Имя радиогруппы. Преобразуется в HTML-атрибут `name` вложенного блока `input`.

<a name="options"></a>
#### `options`

Массив пар значений `text=val`, которые соответствуют одному радиопереключателю. На сервер отправляется пара `name=val`, где имя группы радиопереключателей задается ключом `name`, а значение каждого радипереключателя — ключом `val`. Модификатор `disabled` блока `radio` может быть передан радиопереключателю из группы.
