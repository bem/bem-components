# checkbox-group

Блок `checkbox-group` служит для отображения группы однотипных переключателей – чекбоксов (блоков [checkbox](../checkbox/checkbox.ru.md)).

Блок позволяет управлять внешним видом и состоянием вложенных независимых чекбоксов.

В результате BEMHTML-преобразований блок `checkbox-group` становится HTML-элементом с тегом `<span>` – контейнером, содержащим группу чекбоксов и подписи к ним.

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
        <td>Имя группы чекбоксов. Преобразуется в HTML-атрибут <code>name</code> вложенного блока <code>input</code>.</td>
    </tr>
    <tr>
        <td>options</td>
        <td><code>Array</code></td>
        <td>Массив пар значений <code>text=val</code>, которые соответствуют одному чекбоксу группы. На сервер отправляется пара <code>name=val</code>, где имя группы чекбоксов задается ключом <code>name</code>, а значение каждого чекбокса — ключом <code>val</code>.
            <br>Независимый чекбокс из группы может получать модификаторы блока <code>checkbox</code>. Например, модификаторы <code>checked</code> или <code>disabled</code> могут быть заданы не блоку <code>checkbox-group</code>, а отдельным чекбоксам.</td>
    </tr>
</table>

При необходимости дополнительные HTML-атрибуты блока могут быть заданы в зарезервированном поле `attrs` в BEMJSON.

## Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

* simple
* islands (**Важно:** При выборе темы `islands` необходимо указывать обязательный модификатор [size](#size).)

Без указания модификатора `theme` отображается [нативный](#default) вид контрола.

Наглядно показано на примерах ниже:

<a name="default"></a>
**default**

```bemjson
{
    block : 'checkbox-group',
    name : 'checkbox-default',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

**simple**

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'simple' },
    name : 'checkbox-simple',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

**islands**

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'checkbox-islands',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

<a name="size"></a>
### Размеры `_size`

Реализован только в теме `islands`.

Модификатор `size` устанавливает размер переключателей для всех типов групп чекбоксов.

В зависимости от значения модификатора [`type`](#type) доступны следующие размеры реализации блока:

<table>
    <tr>
        <th>Размер</th>
        <th>Группа чекбоксов без модификатора <code>type</code>.
            <br>Группа чекбоксов c модификатором <code>type</code> в значении <code>link</code>.</th>
        <th>Группа чекбоксов c модификатором <code>type</code> в значении <code>button</code>.</th>
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
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 's', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'l', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'xl', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

<a name="type"></a>
### Типы `_type`

Доступны следующие значения модификатора `type`:

* `button`. Модификатор `type` в значении `button` позволяет реализовать блок `checkbox-group` с помощью блока [button](..button/button.ru.md). Все чекбоксы группы в данном случае всегда располагаются в линию.

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

* `line`. Модификатор `type` в значении `line` применяется к группе чекбоксов для выравнивания их в строку. После каждого чекбокса группы, кроме последнего, автоматически добавляется отступ справа. Размер отступа зависит от значения модификатора `size`. Реализован только в теме *islands*.

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'line' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

### Состояния блока

#### Неактивен `_disabled`

В состоянии «неактивен» блок виден, но недоступен для действий пользователя. Такой блок не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами. В большинстве случаев к неактивному блоку применяются дополнительные стили, чтобы выделить его на странице.

При установке модификатора `disabled` для группы всем чекбоксам группы также устанавливается модификатор `disabled`. Как следствие, для них не будут:

* устанавливаться модификаторы состояния `hovered`, `pressed` и `focused`;
* изменяться значения модификатора `checked`.

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true }
    ]
}
```

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', disabled : true },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true }
    ]
}
```

Модификатор `disabled` может быть назначен отдельным чекбоксам в группе.

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'line' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'first', disabled : true },
        { val : 2, text : 'second' }
    ]
}
```

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'first', disabled : true },
        { val : 2, text : 'second' }
    ]
}
```

#### В фокусе `_focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

