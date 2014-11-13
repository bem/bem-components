# textarea

Блок `textarea` (текстовая область).

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>val</td>
        <td>
            <code>String</code>
        </td>
        <td>Определяет значение (по умолчанию пустое), которое будет отправлено на сервер или получено с помощью клиентских скриптов. На сервер отправляется пара «имя=значение», где имя задается ключом <code>name</code>, а значение — ключом <code>val</code>.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td>Имя поля ввода, предназначено для того, чтобы обработчик формы мог его идентифицировать.
            <br>Преобразуется в HTML-атрибут <code>name</code> вложенного блока <code>textarea</code>.</td>
    </tr>
    <tr>
        <td>placeholder</td>
        <td>
            <code>String</code>
        </td>
        <td>Подсказка в поле ввода.</td>
    </tr>
    <tr>
        <td>id</td>
        <td>
            <code>String</code>
        </td>
        <td>Уникальный идентификатор блока. Задается вручную. Преобразуется в HTML-атрибут <code>id</code> вложенного блока <code>textarea</code>.</td>
    </tr>

    <tr>
        <td>maxLength</td>
        <td>
            <code>String</code>
        </td>
        <td>Определяет максимальное количество вводимых символов.</td>
    </tr>
    <tr>
        <td>tabIndex</td>
        <td>
            <code>String</code>
        </td>
        <td>Определяет последовательность перехода между полями ввода при нажатии на `Tab`.</td>
    </tr>
</table>

При необходимости дополнительные HTML-атрибуты блока могут быть заданы в зарезервированном поле `attrs` в BEMJSON.

## Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * islands (**Важно:** При выборе темы `islands` необходимо указывать обязательный модификатор [size](#size).)

Без указания модификатора `theme` отображается [нативный](#native) вид контрола.

Наглядно показано на примерах ниже:

<a name="native"></a>
**default**

```bemjson
{
    block : 'textarea',
    placeholder : 'default'
}
```

**simple**

```bemjson
{
    block : 'textarea',
    mods : { theme : 'simple' },
    placeholder : 'simple'
}
```

**islands**

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'islands'
}
```

### Размеры `_size`

Реализован только в теме `islands`.

Задает размер всем типам текстовых полей.

Доступно четыре размера реализации блока: **s**, **m**, **l**, **xl**.

<table>
    <tr>
        <th>Размер</th>
        <th>Размер шрифта</th>
        <th>Высота строки</th>
    </tr>
    <tr>
        <th>S</th>
        <td>13px</td>
        <td>24px</td>
    </tr>
    <tr>
        <th>M</th>
        <td>13px</td>
        <td>28px</td>
    </tr>
    <tr>
        <th>L</th>
        <td>15px</td>
        <td>32px</td>
    </tr>
    <tr>
        <th>XL</th>
        <td>18px</td>
        <td>38px</td>
    </tr>
</table>

Наглядно показано на примерах ниже:

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size: 's' },
    placeholder : 'Small'
}
```

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'Medium'
}
```

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'l' },
    placeholder : 'Large'
}
```

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'xl' },
    placeholder : 'X-Large'
}
```

### Состояния блока

#### Неактивен `_disabled`

В состоянии «неактивен» блок виден, но недоступен для действий пользователя. Такой блок не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами. В большинстве случаев к неактивному блоку применяются дополнительные стили, чтобы выделить его на странице.

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', disabled : true },
    val : 'Неактивно'
}
```

#### В фокусе `_focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

## Элементы блока

Визуально представлен следующими элементами:


### __control

Вспомогательный скрытый элемент. Добавляется блоку на уровне шаблонизатора.
