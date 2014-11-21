# checkbox

# checkbox

Блок `checkbox` используется для управления параметром выбора с двумя состояниями – «включено» и «выключено».

```bemjson
{
    block : 'checkbox',
    text : 'Вариант 1',
    name: 'name1',
    val: '1'
}
```

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#checkboxtype>type</a> | <code>'button'</code> | <code>BEMJSON</code> | Тип кнопки. |
| <a href=#checkboxchecked>checked</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Чекбокс отмечен. |
| <a href=#checkboxdisabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code> | Блок в фокусе. |
| <a href=#checkboxsize>size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | Размер чекбокса. Используется только для <a href=#checkboxtheme>чекбоксов с модификатором theme в значении islands</a>. |
| <a href=#checkboxtheme>theme</a> | <code>'simple'</code>, <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#checkboxname>name</a> | <code>String</code> | Имя чекбокса. |
| <a href=#checkboxval>val</a> | <code>String</code> | Значение, которое будет отправлено на сервер или получено с помощью клиентских скриптов.  |
| <a href=#checkboxtext>text</a> | <code>String</code> | Текст чекбокса. |
| <a href=#checkboxicon>icon</a> | <code>BEMJSON</code> | Иконка. Формируется блоком <a href="../icon/icon.ru.md">icon</a>. Используется только для <a href=#checkboxtype>чекбокса с модификатором type в значении button</a>. |
| <a href=#checkboxtitle>title</a> | <code>String</code> | Всплывающая подсказка. Используется только для <a href=#checkboxtype>чекбокса с модификатором type в значении button</a>. |








A block is used to select ZERO or MORE options of a limited number of choices.

## Short information

### Modifiers of a block

| Modifier | Valid values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#type>type</a> | <code>'button'</code> | <code>BEMJSON</code> | Represents checkbox as a button. |
| <a href=#checked>checked</a> | <code>true</code> | | Defines checkbox as selected. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code> | In focus. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Makes block unavailable. |
| <a href=#theme>theme</a> | <code>'simple'</code>, <code>'islands'</code> | <code>BEMJSON</code> | Styling. |

### Custom fields of a block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href=#name>name</a> | <code>String</code> | Checkbox name. |
| <a href=#text>text</a> | <code>String</code> | Specifies text of a checkbox. |
| <a href=#val>val</a> | <code>String</code> | Specifies value that will be sent to a server or obtained using client scripts. |
| <a href=#icon>icon</a> | <code>BEMJSON</code> | Icon. |

Additional required HTML attributes could be specified in `attrs` field of BEMJSON.










## Обзор блока

Атрибут `autocomplete` принудительно переведен в состояние `off` для обеспечения корректной работы блока.

### Модификаторы блока

<a name="checkboxtype"></a>

#### Модификатор `type`

Допустимое значение: `'button'`.

Способ использования: `BEMJSON`.

Модификатор `type` в значении `button` изменяет внешний вид блока на кнопочный. В таком случае выбор элемента происходит нажатием на [кнопку](../button/button.ru.md).

```bemjson
{
    block : 'checkbox',
    text : 'Конфеты',
    name: 'button',
    val: '1',
    mods : { theme : 'islands', size : 'm', type : 'button' }
}
```

<a name="checkboxchecked"></a>

#### Модификатор `checked`

Допустимое значение: `true`.

Способ использования: `BEMJSON`, `JS`.

Модификатор `checked` в значении `true` определяет, что чекбокс отмечен (выбран).

```bemjson
{
    block : 'checkbox',
    text : 'Конфеты',
    name: 'name1',
    val : 1,
    mods : { theme : 'islands', size : 'm', checked : true }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Конфеты',
    name: 'name2',
    val : 2,
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true }
}
```

<a name="checkboxdisabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `disabled` в значении `true` отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```bemjson
{
    block : 'checkbox',
    text : 'Конфеты закончились',
    name: 'name1',
    val : 1,
    mods : { theme : 'islands', size : 'm', disabled : true }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Конфеты закончились',
    name: 'name2',
    val : 2,
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true }
}
```

<a name="checkboxfocused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `focused` в значении `true` отвечает за наличие фокуса на блоке.

```js
{
    block : 'button',
    text : 'В фокусе',
    mods : { theme : 'islands', size : 'm', focused : true }
}
```

<a name="checkboxsize"></a>

#### Модификатор `size`

Допустимые значения: `'m'`, `'l'`.

Способ использования: `BEMJSON`.

Задает размер шрифта.

Модификатор `size` используется, только если блоку установлен модификатор <a href="#checkboxtheme">theme</a> в значении `islands`.

**m**

```bemjson
{
    block : 'checkbox',
    text : 'Размер m',
    name: 'name1',
    val: '1',
    mods : { theme : 'normal', size : 'm' }
}
```

**l**

```bemjson
{
    block : 'checkbox',
    text : 'Размер l',
    name: 'name2',
    val: '2',
    mods : { theme : 'normal', size : 'l' }
}
```

<a name="checkboxtheme"></a>
#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

При выборе модификатора `theme` в значении `islands` необходимо обязательно указывать модификатор <a href="#checkboxnsize">size</a>.

Без указания модификатора `theme` отображается нативный вид контрола.

```bemjson
{
    block : 'checkbox',
    text : 'Тема islands',
    name: 'islands',
    val: '3',
    mods : { theme : 'islands', size : 'm' }
}
```

### Специализированные поля блока

<a name="checkboxname"></a>
#### Поле `name`

Имя чекбокса, предназначено для того, чтобы обработчик формы мог его идентифицировать. Определяет значение поля `name`, отправляемое на сервер. Всегда отправляется в паре со значением поля `val`, чтобы клиентская или серверная программа могла однозначно установить, какой пункт выбрал пользователь.

<a name="checkboxval"></a>

#### Поле `val`

Определяет значение поля `val`, отправляемое на сервер. Всегда отправляется в паре со значением поля `name`, чтобы клиентская или серверная программа могла однозначно установить, какой пункт выбрал пользователь.

<a name="checkboxtext"></a>
#### Поле `text`

Определяет текст подписи к чекбоксу.

<a name="checkboxicon"></a>
#### Поле `icon`

Определяет иконку, которая отображается с помощью блока `icon`.

Используется только для <a href=#checkboxtype>чекбокса с модификатором type в значении button</a>.

```bemjson
{
    block : 'checkbox',
    text : 'Поделиться',
    name: 'name1',
    val : 1,
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    },
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true }
}
```

<a name="checkboxtitle"></a>
#### Поле `title`

Определяет содержание всплывающей подсказки. Вид такой подсказки зависит от браузера, настроек операционной системы и не может быть изменен с помощью HTML-кода или стилей.

Используется только для <a href=#checkboxtype>чекбокса с модификатором type в значении button</a>.

```bemjson
{
    block : 'checkbox',
    text : 'Поделиться',
    name: 'name1',
    val : 1,
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true },
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    },
    title : 'Кнопка выбора социальной сети'
}
```















## Block overview

Block creates a container that includes a native checkbox control (`control` element) `<input class="checkbox__control" type="checkbox" attributes>` that is hidden if [theme](#theme) modifier is specified.

`autocomplete` attribute is forced by templates to `off` state to provide correct behavior of the block.

```bemjson
{
    block : 'checkbox',
    text : 'Item 1',
    name: 'name1',
    val: '1'
}
```

### Modifiers of a block

<a name="type"></a>
#### `type`

Valid value: `'button'`.

Use case: `BEMJSON`.

Checkbox can be implemented by a button. For this purpose use modifier `type` with `button` value. Press the button to select a checkbox.

All [button](../button/button.en.md) block modifiers are propagated to `checkbox`.

Example:

```bemjson
{
    block : 'checkbox',
    text : 'Checkbox',
    name: 'button',
    val: '1',
    mods : { theme : 'islands', size : 'm', type : 'button' }
}
```

<a name="checked"></a>
#### `checked`

Valid value: `true`.

Use case:

`checked` modifier with `true` value defines checkbox as selected.

`checked` modifier can be used for all checkboxes within the group.

Examples:

```bemjson
{
    block : 'checkbox',
    text : 'Checked',
    name: 'name1',
    val : 1,
    mods : { theme : 'islands', size : 'm', checked : true }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Checked',
    name: 'name2',
    val : 2,
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true }
}
```

<a name="focused"></a>
#### `focused`

Valid value: `true`.

Use case: `BEMJSON`.

When a block is focused, a modifier ‘focused’ with ‘true’ value is set automatically, e.g. by pressing ‘Tab’ or clicking a mouse.

Checkbox implemented by a button has yellow shadow in `focused` state.

<a name="disabled"></a>
#### `disabled`

Valid value: `true`.

Use cases: `BEMJSON`, `JS`.

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing ‘Tab’, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

Examples:

```bemjson
{
    block : 'checkbox',
    text : 'Disabled',
    name: 'name1',
    val : 1,
    mods : { theme : 'islands', size : 'm', disabled : true }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Disabled',
    name: 'name2',
    val : 2,
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true }
}
```

<a name="size"></a>
#### `size`

Valid values: `'m'`, `'l'`.

Use case: `BEMJSON`.

Implemented only for theme `islands`.

Provides checkbox text elements with font size value.

<table>
    <tr>
        <th>Block size</th>
        <th>Font size</th>
        <th>String height of <code>box</code> element</th>
    </tr>
    <tr>
        <th>m</th>
        <td>13px</td>
        <td>14px</td>
    </tr>
    <tr>
        <th>l</th>
        <td>15px</td>
        <td>17px</td>
    </tr>
</table>

Examples:

```bemjson
{
    block : 'checkbox',
    text : 'Size M',
    name: 'name2',
    val: '2',
    mods : { theme : 'islands', size : 'm' }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Size L',
    name: 'name3',
    val: '3',
    mods : { theme : 'islands', size : 'l' }
}
```

<a name="theme"></a>
#### `theme`

Valid values: `'simple'`, `'islands'`.

Use case: `BEMJSON`.

Block supports the following themes:

 * simple
 * islands (**NB!** Choosing a theme `islands` requires additional modifier [`size`](#size))

If `theme` modifier is not specified, [native](#native) representation of a control is applied.

See following examples:

<a name="native"></a>
**default**

```bemjson
{
    block : 'checkbox',
    text : 'Default',
    name: 'default',
    val: '1'
}
```

**simple**

```bemjson
{
    block : 'checkbox',
    text : 'Theme simple',
    name: 'simple',
    val: '2',
    mods : { theme : 'simple' }
}
```

**islands**

```bemjson
{
    block : 'checkbox',
    text : 'Theme islands',
    name: 'islands',
    val: '3',
    mods : { theme : 'islands', size : 'm' }
}
```

### Custom fields of a block

<a name="name"></a>
#### `name`

Checkbox name that is used for its identification.

<a name="text"></a>
#### `text`

Specifies text of a checkbox. Specifies `text` HTML attribute to a checkbox.

<a name="val"></a>
#### `val`

Specifies value that will be sent to a server or obtained using client scripts. Pair `name=val` is sent to a server, where name is set by `name` attribute and value – by `val` attribute.

<a name="icon"></a>
#### `icon`

An icon that is rendered using an `icon` block.

### Elements of a block

#### __box

`box` element is used to draw the checkbox. Native checkbox is hidden.

`box` element is added to the block on template engine level.

#### __control

An auxiliary element is used to provide native control checkbox functionality.

`control` element is added to the block on template engine level.

















`checkbox` block allows a user to select ZERO or MORE options of a limited number of choices.

Block creates a container that includes a native checkbox control (`control` element) `<input class="checkbox__control" type="checkbox" attributes>` that is hidden if [theme](#theme) modifier is specified.

`autocomplete` attribute is forced by templates to `off` state to provide correct behavior of the block.

```bemjson
{
    block : 'checkbox',
    text : 'Item 1',
    name: 'name1',
    val: '1'
}
```

## Custom fields of a block

The following custom fields could be specified in BEMJSON declaration of the block:

<table>
    <tr>
        <th>Custom field name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>text</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies text of a checkbox. Specifies <code>text</code> HTML attribute to a checkbox.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td>Checkbox name that is used for its identification.</td>
    </tr>
    <tr>
        <td>val</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies value that will be sent to a server or obtained using client scripts. Pair <code>name=val</code> is sent to a server, where name is set by <code>name</code> attribute and value – by <code>val</code> attribute.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>An icon that is rendered using an <code>icon</code> block.</td>
    </tr>
</table>

Additional required HTML attributes could be specified in `attrs` field of BEMJSON.

## Modifiers of a block

<a name="theme"></a>
### _theme

Block supports the following themes:

 * simple
 * normal (**NB!** Choosing a theme `normal` requires additional modifier [`size`](#size).)

If `theme` modifier is not specified, [native](#native) representation of a control is applied.

See following examples:

<a name="native"></a>
**default**

```bemjson
{
    block : 'checkbox',
    text : 'Default',
    name: 'default',
    val: '1'
}
```

**simple**

```bemjson
{
    block : 'checkbox',
    text : 'Theme simple',
    name: 'simple',
    val: '2',
    mods : { theme : 'simple' }
}
```

**normal**

```bemjson
{
    block : 'checkbox',
    text : 'Theme normal',
    name: 'normal',
    val: '3',
    mods : { theme : 'normal', size : 'm' }
}
```

<a name="size"></a>
### _size

Implemented only for theme `normal`.

Provides checkbox text elements with font size value.

There are two sizes available: **m**, **l**.

<table>
    <tr>
        <th>Block size</th>
        <th>Font size</th>
        <th>String height of <code>box</code> element</th>
    </tr>
    <tr>
        <th>m</th>
        <td>13px</td>
        <td>14px</td>
    </tr>
    <tr>
        <th>l</th>
        <td>15px</td>
        <td>17px</td>
    </tr>
</table>

See following examples:

```bemjson
{
    block : 'checkbox',
    text : 'Size M',
    name: 'name2',
    val: '2',
    mods : { theme : 'normal', size : 'm' }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Size L',
    name: 'name3',
    val: '3',
    mods : { theme : 'normal', size : 'l' }
}
```

### _type

Checkbox can be implemented by a button. For this purpose use modifier `type` with `button` value. Press the button to select a checkbox.

All [button](../button/button.en.md) block modifiers are propagated to `checkbox`.

```bemjson
{
    block : 'checkbox',
    text : 'Checkbox',
    name: 'button',
    val: '1',
    mods : { theme : 'normal', size : 'm', type : 'button' }
}
```

### States of a block

#### _checked

`checked` modifier with `true` value defines checkbox as selected.

`checked` modifier can be used for all checkboxes within the group.

```bemjson
{
    block : 'checkbox',
    text : 'Checked',
    name: 'name1',
    val : 1,
    mods : { theme : 'normal', size : 'm', checked : true }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Checked',
    name: 'name2',
    val : 2,
    mods : { theme : 'normal', size : 'm', type : 'button', checked : true }
}
```

#### _disabled

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing ‘Tab’, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

```bemjson
{
    block : 'checkbox',
    text : 'Disabled',
    name: 'name1',
    val : 1,
    mods : { theme : 'normal', size : 'm', disabled : true }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Disabled',
    name: 'name2',
    val : 2,
    mods : { theme : 'normal', size : 'm', type : 'button', disabled : true }
}
```

#### _focused

When a block is focused, a modifier ‘focused’ with ‘true’ value is set automatically, e.g. by pressing ‘Tab’ or clicking a mouse.

Checkbox implemented by a button has yellow shadow in `focused` state.

## Elements of a block

### __box

`box` element is used to draw the checkbox. Native checkbox is hidden.

`box` element is added to the block on template engine level.

### __control

An auxiliary element is used to provide native control checkbox functionality.

`control` element is added to the block on template engine level.
