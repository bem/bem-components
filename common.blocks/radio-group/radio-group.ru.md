# radio-group

Блок `radio-group` служит для создания группы зависимых переключателей, реализованных блоком [radio](../radio/radio.ru.md). Блок позволяет пользователю выбрать только одну опцию (пункт) из предопределенного набора (группы).

Блок `radio-group` преобразуется в  HTML-элемент с тегом `<span>` – контейнером, содержащим группу переключателей.

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
        <td><code>String</code></td>
        <td>Имя радиогруппы. Преобразуется в HTML-атрибут <code>name</code> вложенного блока <code>input</code>.</td>
    </tr>
    <tr>
        <td>options</td>
        <td><code>Array</code></td>
        <td>Массив пар значений <code>text=val</code>, которые соответствуют одному радиопереключателю. На сервер отправляется пара <code>name=val</code>, где имя группы радиопереключателей задается ключом <code>name</code>, а значение каждого радипереключателя — ключом <code>val</code>.
            <br>Модификатор <code>disabled</code> блока <code>radio</code> может быть передан радиопереглючателю из группы.</td>
    </tr>
</table>

При необходимости дополнительные HTML-атрибуты блока могут быть заданы в зарезервированном поле `attrs` в BEMJSON.

## Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * normal (**Важно:** При выборе темы `normal` необходимо указывать обязательный модификатор [size](#size).)

Без указания модификатора `theme` отображается [нативный](#native) вид контрола.

Наглядно показано на примерах ниже:

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

**normal**

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'normal', size : 'm' },
    name : 'radio-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

### Размеры `_size`

Реализован только в теме `normal`.

Модификатор `size` устанавливает размер переключателей для всех типов радиогруппы.

В зависимости от значения модификатора [`type`](#types) доступны следующие размеры реализации блока:

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

Наглядно показано на примерах ниже:

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'normal', size : 's', type : 'button' },
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
    mods : { theme : 'normal', size : 'm', type : 'button' },
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
    mods : { theme : 'normal', size : 'l', type : 'button' },
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
    mods : { theme : 'normal', size : 'xl', type : 'button' },
    name : 'X-Large',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

<a name="types"></a>
### Типы `_type`

Доступны следующие значения модификатора `type`:

* `button`. Модификатор `type` в значении `button` позволяет реализовать блок `radio-group` с помощью блока [button](..button/button.ru.md). Все радиопереключатели группы в данном случае всегда располагаются в линию.

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'normal', size : 'm', type : 'button' },
    name : 'radio-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

* `line`. Модификатор `type` в значении `line` применяется к радиогруппе для выравнивания переключателей в строку. После каждого радиопереключателя группы, кроме последнего, автоматически добавляется отступ справа. Размер отступа зависит от значения модификатора `size`. Реализован только в теме `normal`.

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'normal', size : 'm', type : 'line' },
    name : 'radio-line',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

### Режимы `_mode`

Модификатор `mode` в значении `radio-check` реализован только для радиогруппы, созданной на основе блока `button` (`radio-group_type_button`). Данный режим позволяет выбрать только один элемент из группы или оставить ее без выбранных элементов. При щелчке мышью по кнопке, ее состояние меняется на противоположное.

```bemjson
{
    block : 'radio-group',
    name : 'button-radio-check',
    mods : { theme : 'normal', size : 'm', type : 'button', mode : 'radio-check' },
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

### Состояния блока

#### Неактивен `_disabled`

В состоянии «неактивен» блок виден, но недоступен для действий пользователя. Такой блок не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами. В большинстве случаев к неактивному блоку применяются дополнительные стили, чтобы выделить его на странице.

При установке модификатора `disabled` для группы всем радиопереключателям также устанавливается модификатор `disabled`. Как следствие, для них не будут:

* устанавливаться модификаторы состояния `hovered`, `pressed` и `focused`;
* изменяться значения модификатора `checked`.

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'normal', size : 'm', type : 'button', disabled : true },
    name : 'radio-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true }
    ]
}
```

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'normal', size : 'm', disabled : true },
    name : 'radio-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true }
    ]
}
```

Модификатор `disabled` может быть назначен отдельным переключателям в группе.

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'normal', size : 'm', type : 'line' },
    name : 'radio-line',
    options : [
        { val : 1, text : 'first', disabled : true },
        { val : 2, text : 'second' },
        { val : 3, text : 'third' }
    ]
}
```

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'normal', size : 'm', type : 'button' },
    name : 'radio-line',
    options : [
        { val : 1, text : 'first', disabled : true },
        { val : 2, text : 'second' },
        { val : 3, text : 'third' }
    ]
}
```

#### В фокусе `_focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.
