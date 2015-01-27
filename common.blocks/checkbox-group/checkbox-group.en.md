# checkbox-group

Use this block for managing a group of [checkboxes](../checkbox/checkbox.en.md).

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#checkboxtype">type</a> | <code>'button'</code>, <code>'line'</code> | <code>BEMJSON</code> | The type of checkbox group. |
| <a href="#checkboxdisabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The disabled state. |
| <a href="#checkboxfocused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#checkboxtheme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design.  |
| <a href="#checkboxsize">size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | The size of checkbox group. Use sizes only for checkboxes with the <a href="#checkboxtheme">theme modifier set to islands</a>. |

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#checkboxname">name</a> | <code>String</code> | The block unique name. |
| <a href="#val">val</a> | <code>Array</code> | A set of values for the selected checkboxes. |
| <a href="#checkboxopt">options</a> | <code>Array</code> | A set of values for each checkbox of the group. Each checkbox has its own <a href="#checkboxoptset">set of values</a>. |

## Block description

Use the `checkbox-group` block to control the size, state, and appearance of the checkboxes in the group.

### Modifiers of the block

<a name="checkboxtype"></a>

#### `type` modifier

Acceptable values: `'button'`, `'line'`.

Use case: `BEMJSON`.

<a name="checkboxtype-button"></a>

##### A `button`-based checkbox group (`type` modifier with `button` value)

Implements the `checkbox-group` block using the [button-based](../checkbox/checkbox.en.md/#checkboxtype) type of checkboxes.

Grouped button-based checkboxes are always aligned in a line.

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

<a name="checkboxtype-line"></a>

##### A `line`-aligned checkbox group (`type` modifier with `line` value)

The modifier aligns all checkboxes of the group in a line.

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'line' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

<a name="checkboxdisabled"></a>

#### `disabled` modifier

Acceptable value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier makes the block inactive. The disabled block is visible but not available for user actions.

The modifier can be applied to:

* The checkbox-group:

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', disabled : true },
    name : 'checkbox',
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

* The separate checkbox of the group:

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'Block', disabled : true },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'Block', disabled : true },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

<a name="checkboxfocused"></a>

#### `focused` modifier

Acceptable value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier puts the focus on the block.

```javascript
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', focused : true },
    name : 'checkbox',
    val : [2],
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

```javascript
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button', focused : true },
    name : 'checkbox-button',
    val : [2],
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

<a name="checkboxtheme"></a>

#### `theme` modifier

Acceptable value: `'islands'`.

Use case: `BEMJSON`.

The modifier gives the block a custom design.

The islands theme requires the <a href="#checkboxsize">size</a> modifier.

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'checkbox-islands',
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-islands',
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

<a name="checkboxsize"></a>

#### `size` modifier

Acceptable values for the `islands` theme: `'m'`, `'l'`.

Use case: `BEMJSON`.

Use the `size` modifier only for blocks with the `islands` <a href="#checkboxthemes">theme</a>.

Sets the size value for all types of checkbox groups.

**m**

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'checkbox-button',
    val : [1, 2],
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-button',
    val : [2, 3],
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

**l**

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'l' },
    name : 'checkbox-button',
    val : [1, 2],
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'l', type : 'button' },
    name : 'checkbox-button',
    val : [2, 3],
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

### Custom fields of the block

<a name="checkboxname"></a>

#### `name` field

Type: `String`

Specifies the block unique name.

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-button-1',
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

<a name="val"></a>

#### `val` field

Type: `Array`.

Specifies a set of values for the selected checkboxes.

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-button-1',
    val : [1, 2],
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element' },
        { val : 3, text : 'Modifier' }
    ]
}
```

<a name="checkboxopt"></a>

#### `options` field

Type: `Array`

Specifies a set of values for each checkbox of the group.

<a name="checkboxoptset"></a>

Each checkbox has its own set of values.

| Field | Type | description |
| ---- | --- | -------- |
| <code>val</code> | <code>String</code>, <code>Number</code> | The value to send to the server if the checkbox is selected. |
| <code>text</code> | <code>String</code> | The checkbox label, or the button label if the <code>type</code> modifier is set to <code>button</code>. |
| <code>disabled</code> | <code>Boolean</code> | The disabled state. |
| <code>icon</code> | <code>BEMJSON</code> | The checkbox icon, which is created by the <a href="../icon/icon.en.md">icon</a> block. Use icons only for checkboxes with the <code>type</code> modifier set to <code>button</code>. |
| <code>title</code> | <code>String</code> | Tooltip content. Use tooltips only for checkboxes with <code>type</code> modifier set to <code>button</code>. |
| <code>id</code> | <code>String</code> | The checkbox unique ID. |

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'checkbox-islands',
    val : [1, 3],
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element', disabled : true },
        { val : 3, text : 'Modifier', disabled : true },
        { val : 4, text : 'Modifier' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-islands',
    val : [3],
    options : [
        { val : 1, text : 'Block' },
        { val : 2, text : 'Element', disabled : true, title : 'Disabled' },
        { val : 3, text : 'Modifier', disabled : true, title : 'Checked and disabled' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-islands',
    val : [1],
    options : [
        {
            val : 1,
            text : 'Twitter',
            title : 'Follow BEM on Twitter',
            icon : {
                block : 'icon',
                mods : { social : 'twitter' }
            },
        },
        {
            val : 2,
            text : 'VKontakte',
            disabled : true,
            title : 'Follow BEM on VKontakte',
            icon : {
                block : 'icon',
                mods : { social : 'vk' }
            },
        }
    ]
}
```
