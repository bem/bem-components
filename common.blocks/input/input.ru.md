# input

Блок `input` служит для создания различных типов текстовых полей:

* поле ввода (значение по умолчанию);
* текстовая область;
* поле для ввода пароля;
* поисковая форма.

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
            <br>Преобразуется в HTML-атрибут <code>name</code> вложенного блока <code>input</code>.</td>
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
        <td>Уникальный идентификатор блока. Задается вручную. Преобразуется в HTML-атрибут <code>id</code> вложенного блока <code>input</code>.</td>
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
 * normal (**Важно:** При выборе темы `normal` необходимо указывать обязательный модификатор [size](#size).)

Без указания модификатора `theme` отображается [нативный](#native) вид контрола.

Наглядно показано на примерах ниже:

<a name="native"></a>
**default**

```bemjson
{
    block : 'input',
    placeholder : 'default'
}
```

**simple**

```bemjson
{
    block : 'input',
    mods : { theme : 'simple' },
    placeholder : 'simple'
}
```

**normal**

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size: 'm' },
    placeholder : 'normal'
}
```

### Размеры `_size`

Реализован только в теме `normal`.

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
    block : 'input',
    mods : { theme : 'normal', size: 's' },
    placeholder : 'Small'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size: 'm' },
    placeholder : 'Medium'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size: 'l' },
    placeholder : 'Large'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size: 'xl' },
    placeholder : 'X-Large'
}
```

### Типы `_type`

Блок представлен следующими типами:

* текстовая область (`input_type_textarea`)

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', type : 'textarea' },
    placeholder : 'Text area'
}
```

* поле с паролем (`input_type_password`)

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size: 'm', type : 'password' },
    placeholder : 'Password field'
}
```

* поисковая форма (`input_type_search`)

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', type : 'search' },
    placeholder : 'Search form'
}
```

Без указания типа поля блок `input` по умолчанию получает значение `<input type="text"/>`.

### Состояния блока

#### Неактивен `_disabled`

В состоянии «неактивен» блок виден, но недоступен для действий пользователя. Такой блок не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами. В большинстве случаев к неактивному блоку применяются дополнительные стили, чтобы выделить его на странице.

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', disabled : true },
    val : 'Неактивно'
}
```

#### В фокусе `_focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

### Очистка содержимого `_has-clear`

Модификатор `has-clear` в значении `true` появляется автоматически, если в текстовое поле введены данные. Показывает в инпуте крестик для очистки содержимого (элемент [`clear`](#clear_elem)).

## Элементы блока

Визуально представлен следующими элементами:

<a name="clear_elem"></a>
### __clear

Кнопка очистки содержимого инпута.

### __box

Вспомогательный скрытый элемент. Добавляется блоку на уровне шаблонизатора.

Элемент, группирующий нативный контрол `<input>` и дополнительные элементы (например, `clear`).

### __control

Вспомогательный скрытый элемент. Добавляется блоку на уровне шаблонизатора.
