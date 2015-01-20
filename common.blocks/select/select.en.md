# select

A block is used to create a dropdown menu with the possibility of single- or multiple-choice. `select` block is implemented by a button and a dropdown menu list.

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#mode">mode</a> | <code>'check'</code>, <code>'radio'</code>, <code>'radio-check'</code> | <code>BEMJSON</code> | A selection mode for the dropdown menu list. |
| <a href="#width">width</a> | <code>'available'</code> | <code>BEMJSON</code> | A button width. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code>  | <code>BEMJSON</code> | A dropdown menu list size. Use sizes only with <a href="#themes">theme modifier with islands value</a>. |

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#name">name</a> | <code>String</code> | A unique block name. |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code>, <code>Array</code> | A selected value from the dropdown menu list. If <a href="#mode-check">mode modifier with check value</a> is applied to the block, the selected values must be declared as an <code>array</code>. |
 |
| <a href="#text">text</a> | <code>String</code> | Content of the button if any menu item is not selected. Use for the button with <a href="#mode-check">type modifier with check value</a> or with <a href="#mode-radiocheck">radio-check</a> value. |
| <a href="#options">options</a> | <code>Array</code> | An array of the menu items. |
| <a href="#textmaxwidth">textMaxWidth</a> | <code>Number</code> | The maximum width of the dropdown menu button. |
| <a href="#optionsmaxheight">optionsMaxHeight</a> | <code>Number</code> | The maximum height of the dropdown menu. |
| <a href="#id">id</a> | <code>String</code> | A unique identifier of the block. |
| <a href="#tab">tabIndex</a> | <code>Number</code> | A sequence that user follows when he uses the <code>Tab</code> key to navigate through a page. |

## Block overview

`select` block is implemented by a button and a dropdown menu list.

### Modifiers of the block

<a name="mode"></a>

#### `mode` modifier

Available values: `'check`, `'radio'`, `'radio-check'`.

Use case: `BEMJSON`.

The mandatory modifier.

<a name="mode-check"></a>

##### A multiple-choice list (`mode` modifier with `check` value)

Use to create a dropdown menu with the possibility to select any number of menu items.

```js
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select1',
    val : [2, 3],
    text : 'Программа конференции',
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

<a name="mode-radio"></a>

##### A mandatory single-choice list (`mode` modifier with `radio` value)

Use to create a dropdown menu that has one mandatory selected item.

If any item is not specified in BEMJSON as selected, the first menu item is selected by default.

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select2',
    val : 2,
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

<a name="mode-radiocheck"></a>

##### An optional single-choice list (`mode` modifier with `radio-check` value)

Use to create a menu that has one mandatory selected item like in the `mandatory single-choice list`. The fundamental difference between these two menu types is that `menu` block with `mode` modifier with `radio-check` value has an opportunity to leave the menu without the selected items.

```js
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
    name : 'select3',
    val : 2,
    text : '—',
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

<a name="width"></a>

#### `width` modifier

Available value: `'available'`.

Use case: `BEMJSON`.

Use to set the maximum available width of the button.

```js
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm', width : 'available' },
    name : 'select4',
    val : 2,
    text : '—',
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

<a name="disabled"></a>

#### `disabled` modifier

Available value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides inactive state to the block. Disabled block is visible but not available for user actions.

The modifier could be applied to:

* The whole block

```js
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm', disabled : true },
    name : 'select4',
    val : 2,
    text : '—',
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

* A separate menu item

```js
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
    name : 'select4',
    val : 2,
    text : '—',
    options : [
        { val : 1, text : 'Report', disabled : true },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

<a name="focused"></a>

#### `focused` modifier

Available value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides a focus to the block.

```javascript
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm', focused : true },
    name : 'select4',
    val : 2,
    text : '—',
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

<a name="theme"></a>

#### `theme` modifier

Available value: `'islands'`.

Use case: `BEMJSON`.

The modifier provides a custom design to the block.

`islands` theme requires <a href="#size">size</a> modifier usage.

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    val : 2,
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

<a name="size"></a>

#### `size` modifier

Available values: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use `size` modifier only for blocks with `islands` <a href="#themes">theme</a>.

Provides all types of dropdown menus with `size` value.

**s**

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 's' },
    name : 'select1',
    val : 2,
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

**m**

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    val : 2,
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

**l**

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'l' },
    name : 'select1',
    val : 2,
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

**xl**

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'xl' },
    name : 'select1',
    val : 2,
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

### Custom fields of the block

<a name="name"></a>

#### `name` field

Type: `String`.

Specifies a unique name of the block.

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

<a name="val"></a>

#### `val` field

Type: `String`, `Number`, `Array`.

Specifies:

* A selected value from the dropdown menu. In this case the type of the filed is `String` or `Number`.

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    val : 2,
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

* A set of selected values from the dropdown menu. This case is possible if the block has [mode modifier with check value](#mode-check). The field type is an array.

```js
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select1',
    val : [2, 3],
    text : 'Программа конференции',
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

<a name="text"></a>

#### `text` field

Type: `String`.

Specifies content of the button if any menu item is not selected.

Use for the button with <a href="#mode-check">type modifier with check value</a> or with <a href="#mode-radiocheck">radio-check</a> value.

```js
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
    name : 'select3',
    text : 'Training',
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

```js
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select1',
    text : 'Select a training',
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

<a name="options"></a>

#### `options` field

Type: `Array`.


Specifies an array of menu items or groups with an optional name.

Each menu item has its own set of values.

| Field | Type | description |
| ---- | --- | -------- |
| <code>val</code> | <code>String</code>, <code>Number</code> | A value that will be sent to a server if a menu item is selected. A mandatory field. |
| <code>text</code> | <code>String</code> | A name of the menu item. |
| <code>checkedText</code> | <code>String</code> | A text on a button that is shown instead of the name of the selected menu item. Use only for a <a href="#mode-check">multiple-choice dropdown menu</a>. |
| <code>disabled</code> | <code>Boolean</code> | A disabled state of a single menu item. |
| <code>icon</code> | <code>BEMJSON</code> | An icon that is formed by <a href="../icon/icon.en.md">icon</a> block. Use icons only for menu items with <a href="#checkboxtype">type modifier with button value</a>. |

```js
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select5',
    val : [2],
    text : 'Subscribe',
    options : [
        {
            val : 1,
            text : 'Twitter',
            checkedText : 'tw',
            icon : { block : 'icon', mods : { social : 'twitter' } }
        },
        {
            val : 2,
            text : 'VKontakte',
            checkedText : 'vk',
            icon : { block : 'icon', mods : { social : 'vk' } }
        }
    ]
}
```

Dropdown menu items could be grouped:

| Field | Type | description |
| ---- | --- | -------- |
| <code>title</code> | <code>String</code> | A name of a menu items group. |
| <code>Group</code> | <code>Array</code> | An array of menu items. |

```js
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select5',
    val : [2, 5],
    text : 'A conference agenda',
    options : [
        {
            title : 'Theory',
            group : [
                { val : 1, text : 'Report #1' },
                { val : 2, text : 'Report #2' },
                { val : 3, text : 'Report #3' },
            ]
        },
        {
            title : 'Practice',
            group : [
                { val : 4, text : 'Workshop #1' },
                { val : 5, text : 'Workshop #2' }
            ]
        }
    ]
}
```

<a name="textmaxwidth"></a>
#### `textMaxWidth` field

Type: `Number`.

Specifies the maximum width of the dropdown menu button.

The maximum width of the dropdown menu depends on the text length of menu items. Or it could be defined by CSS rules.

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    textMaxWidth : 100,
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

<a name="optionsmaxheight"></a>

#### `optionsMaxHeight` field

Type: `Number`.

Specifies the maximum height of the dropdown menu.

A vertical scrollbar appears automatically if all menu items cannot fit a specified popup height.

If a value of `optionsMaxHeight` field is not specified, the popup height depends on the total height of all menu items.

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    textMaxWidth : 100,
    optionsMaxHeight : 100,
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

<a name="id"></a>

#### `id` field

Type: `String`.

Specifies a unique identifier of the block.

```js
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    id : 'Unique_1',
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```
