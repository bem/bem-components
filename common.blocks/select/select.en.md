# select

Use this block for creating a dropdown menu with the possibility of single or multiple choice. The `select` block is implemented by a button and a dropdown menu list.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#mode">mode</a> | <code>'check'</code>, <code>'radio'</code>, <code>'radio-check'</code> | <code>BEMJSON</code> | The selection mode for the dropdown menu list. |
| <a href="#width">width</a> | <code>'available'</code> | <code>BEMJSON</code> | The button width. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code>  | <code>BEMJSON</code> | The size of the dropdown menu list. Use sizes only with the <a href="#themes">theme modifier set to islands</a>. |

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="#name">name</a> | <code>String</code> | The block unique name. |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code>, <code>Array</code> | The selected value from the dropdown menu list. If the <a href="#mode-check">mode modifier with the check value</a> is applied to the block, the selected values must be declared as an <code>array</code>. |
 |
| <a href="#text">text</a> | <code>String</code> | Button lable if any menu item is not selected. Use for the button with the <a href="#mode-check">type modifier set to check</a> or to <a href="#mode-radiocheck">radio-check</a>. |
| <a href="#options">options</a> | <code>Array</code> | The array of the menu items. |
| <a href="#optionsmaxheight">optionsMaxHeight</a> | <code>Number</code> | The maximum height of the dropdown menu. |
| <a href="#id">id</a> | <code>String</code> | The unique identifier of the block. |

## Block description

The `select` block is implemented by a button and a dropdown menu list.

The block in the [focused](#focused) state supports key-pad control:

* If the dropdown menu list is hidden, type the menu item name on your keyboard to select the menu item. The name of the menu item appears in the select button.
* If the dropdown menu list is shown, type the menu item name on your keyboard to set the focused state to this menu item. Use `Space bar` or `Enter` buttons to select the menu item.
* To show the dropdown menu list, use `Space bar`, `Enter`, `Up` or `Down` buttons.

### Modifiers of the block

<a name="mode"></a>

#### `mode` modifier

Acceptable values: `'check`, `'radio'`, `'radio-check'`.

Use case: `BEMJSON`.

The mandatory modifier.

<a name="mode-check"></a>

##### Multiple-choice list (`mode` modifier with `check` value)

Use to create the dropdown menu with the possibility to select any number of menu items.

```js
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select1',
    val : [2, 3],
    text : 'Agenda',
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Workshop' },
        { val : 3, text : 'Round-table conference' }
    ]
}
```

<a name="mode-radio"></a>

##### Mandatory single-choice list (`mode` modifier with `radio` value)

Use to create the dropdown menu that has one mandatory selected item.

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

##### Optional single-choice list (`mode` modifier with `radio-check` value)

Use to create the menu with one mandatory selected item like in the `mandatory single-choice list`. The fundamental difference between these two menu types is that the `menu` block with the `mode` modifier set to `radio-check` has an opportunity to leave the menu without the selected items.

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

Acceptable value: `'available'`.

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

Acceptable value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier makes the block inactive. The disabled block is visible but not available for user actions.

The modifier can be applied to:

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

* The separate menu item

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

Acceptable value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier puts the focus on the block.

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

Acceptable value: `'islands'`.

Use case: `BEMJSON`.

The modifier gives the block a custom design.

The `islands` theme requires the <a href="#size">size</a> modifier.

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

Acceptable values for the `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use the `size` modifier only for blocks with the `islands` <a href="#themes">theme</a>.

Sets the size value for all types of dropdown menus.

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

Specifies the unique name of the block.

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

* The selected value from the dropdown menu. In this case the field type is `String` or `Number`.

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

* The set of selected values from the dropdown menu. This case is possible if the block has the [mode modifier set to check](#mode-check). The field type is an `Array`.

```js
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select1',
    val : [2, 3],
    text : 'Agenda',
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

Specifies the button lable if any menu item is not selected.

Use for the button when the `type` modifier is set to <a href="#mode-check">check</a> or to <a href="#mode-radiocheck">radio-check</a> value.

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

Specifies an array of the menu items or groups with an optional name.

Each menu item has its own set of values.

| Field | Type | description |
| ---- | --- | -------- |
| <code>val</code> | <code>String</code>, <code>Number</code> | The value to send to the server if the menu item is selected. The mandatory field. |
| <code>text</code> | <code>String</code> | Menu item lable. |
| <code>checkedText</code> | <code>String</code> | The text on the button that is shown instead of the selected menu item lable. Use only for a <a href="#mode-check">multiple-choice dropdown menu</a>. |
| <code>disabled</code> | <code>Boolean</code> | The disabled state of the single menu item. |
| <code>icon</code> | <code>BEMJSON</code> | The icon created by the <a href="../icon/icon.en.md">icon</a> block. Use icons only for menu items with the <a href="#checkboxtype">type modifier set to button</a>. |

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
| <code>title</code> | <code>String</code> | The name of the menu items group. |
| <code>Group</code> | <code>Array</code> | The array of menu items. |

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

<a name="optionsmaxheight"></a>

#### `optionsMaxHeight` field

Type: `Number`.

Specifies the maximum height of the dropdown menu.

A vertical scrollbar appears automatically if all menu items cannot fit a specified popup height.

If a value of the `optionsMaxHeight` field is not specified, the popup height depends on the total height of all menu items.

```js
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select5',
    val : [2, 5],
    optionsMaxHeight : 100,
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

<a name="id"></a>

#### `id` field

Type: `String`.

Specifies the block unique ID.

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
