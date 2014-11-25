# radio

Используется в составе блока [radio-group](../radio-group/radio-group.ru.md) для создания радиопереключателей.

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#type>type</a> | <code>'button'</code> | <code>BEMJSON</code> | Тип радиопереключателя. |
| <a href=#checked>checked</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Выбор радиопереключателя. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code> | Фокус на блоке. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code>  | <code>BEMJSON</code> | Размер шрифта и отступов радиопереключателя. |
| <a href=#theme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#name>name</a> | <code>String</code> | Имя радиопереключателя. |
| <a href=#val>val</a> | <code>String</code> | Значение, возвращаемое радиопереключателем, если он выбран. |
| <a href=#text>text</a> | <code>String</code> | Текст подписи к радиопереключателю. |
| <a href=#icon>icon</a> | <code>BEMJSON</code> | Иконка. Формируется блоком <a href="../icon/icon.ru.md">icon</a>. Используется только для <a href=#type>радиопереключателя с модификатором type в значении button</a>. |

## Обзор блока

### Модификаторы блока

<a name="type"></a>
##### Модификатор `type`

Допустимое значение: `'button'`.

Способ использования: `BEMJSON`.

Модификатор `type` в значении `button` используется для изменения внешнего вида блока на кнопочный. В таком случае выбор радиопереключателя происходит нажатием на [кнопку](../button/button.ru.md).

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

<a name="checked"></a>
#### Модификатор `checked`

Допустимое значение: `true`.

Способ использования: `BEMJSON`, `JS`.

Модификатор `checked` в значении `true` используется для выбора радиопереключателя.

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', checked : true },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

<a name="disabled"></a>
#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `disabled` в значении `true` отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', disabled : true },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

<a name="focused"></a>
#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `focused` в значении `true` отвечает за наличие фокуса на блоке.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', focused : true },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button', focused : true },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

<a name="size"></a>
#### Модификатор `size`

Допустимые значения: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Задает размер шрифта и отступов, либо размер кнопки.

Модификатор `size` используется, только если блоку установлен модификатор <a href="#theme">theme</a> в значении `islands`.

**s**

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 's' },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 's', type : 'button' },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

**m**

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

**l**

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'l' },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'l', type : 'button' },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

**xl**

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'xl' },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'xl', type : 'button' },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

<a name="theme"></a>
#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Модификатор отвечает за стилевое оформление блока.

При выборе модификатора `theme` в значении `islands` необходимо обязательно указывать модификатор <a href="#size">size</a>.

Без указания модификатора `theme` отображается нативный вид контрола.

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 1,
    text : 'Использовать BEMHTML'
}
```

### Специализированные поля блока

<a name="name"></a>
#### Поле `name`

Имя радиопереключателя, предназначено для того, чтобы обработчик формы мог его идентифицировать. Определяет значение поля `name`, отправляемое на сервер. Всегда отправляется в паре со значением поля `val`, чтобы клиентская или серверная программа могла однозначно установить, какой пункт выбрал пользователь.

<a name="val"></a>
#### Поле `val`

Определяет значение поля `val`, отправляемое на сервер. Всегда отправляется в паре со значением поля `name`, чтобы клиентская или серверная программа могла однозначно установить, какой пункт выбрал пользователь.

<a name="text"></a>
#### `text`

Определяет текст подписи к радиопереключателю.

<a name="icon"></a>
#### Поле `icon`

Определяет иконку, которая отображается с помощью блока `icon`.

Используется только для <a href=#type>радиопереключателей с модификатором type в значении button</a>.

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 1,
    text : 'twitter',
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    },
}
```
