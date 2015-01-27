# radio-group

Use this block for creating a group of related radio switches (based on the [radio](../radio/radio.en.md) block).

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#type">type</a> | <code>'button'</code>, <code>'line'</code> | <code>BEMJSON</code> | The type of the radio switches group. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design.  |
| <a href="#size">size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | The size of the radio switches group. Use sizes only for radio switches group when the <a href="#theme">theme modifier is set to islands</a>. |

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="#name">name</a> | <code>String</code> | The unique block name. |
| <a href="#val">val</a> | <code>Array</code> | A set of values of the selected radio switches. |
| <a href="#opt">options</a> | <code>Array</code> | A set of values for each radio switch of the group. Each radio switch has its own <a href="#optset">set of values</a>. |

## Block description

Use the `radio-group` block to control the size, state, and appearance of the radio switches in the group. The block allows to choose the only one radio switch from the group.

### Modifiers of the block

<a name="type"></a>

#### `type` modifier

Acceptable values: `'button'`, `'line'`.

Use case: `BEMJSON`.

<a name="type-button"></a>

##### Button-based radio-group (`type` modifier with `button` value)

Implements the `radio-group` block using the [button-based](../radio/radio.en.md/#type) radio switches.

Grouped button-based radio switches are always aligned in a line.

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-button',
    options : [
        { val : 1, text : 'Football' },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
    ]
}
```

<a name="type-line"></a>

##### Line-aligned radio-group (`type` modifier with `line` value)

The modifier aligns all radio switches of the group in a line.

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'line' },
    name : 'radio-line',
    options : [
        { val : 1, text : 'Football' },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
    ]
}
```

<a name="disabled"></a>

#### `disabled` modifier

Acceptable value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier makes the block inactive. The disabled block is visible but not available for user actions.

The modifier could be applied to:

* The radio-group:

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', disabled : true },
    name : 'radio',
    val : 2,
    options : [
        { val : 1, text : 'Football' },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Football' },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
    ]
}
```

* The separate radio switch of the group:

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-line',
    val : 2,
    options : [
        { val : 1, text : 'Football', disabled : true },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-line',
    val : 2,
    options : [
        { val : 1, text : 'Football', disabled : true },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
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
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button', focused : true },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Football' },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
    ]
}
```

```javascript
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', focused : true },
    name : 'radio',
    val : 2,
    options : [
        { val : 1, text : 'Football' },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
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
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    val : 2,
    options : [
        { val : 1, text : 'Football' },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 2,
    options : [
        { val : 1, text : 'Football' },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
    ]
}
```

<a name="size"></a>

#### `size` modifier

Acceptable values for the `islands` theme: `'m'`, `'l'`.

Use case: `BEMJSON`.

Use the `size` modifier only for blocks with the `islands` <a href="#theme">theme</a>.

Sets the size value for all types of radio-groups.

**m**

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Football' },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Football' },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
    ]
}
```

**l**

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'l' },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Football' },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'l', type : 'button' },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Football' },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
    ]
}
```

### Custom fields of the block

<a name="name"></a>

#### `name` field

Type: `String`

Specifies the block unique name.

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Football' },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
    ]
}
```

<a name="val"></a>

#### `val` field

Type: `Array`.

Specifies a set of values for the selected radio switches.

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Football' },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball' }
    ]
}
```

<a name="opt"></a>

#### `options` field

Type: `Array`

Specifies a set of values for each radio switch of the group.

<a name="optset"></a>

Each radio switch has its own set of values.

| Field | Type | description |
| ---- | --- | -------- |
| <code>val</code> | <code>String</code>, <code>Number</code> | The value to send to the server if the radio switch is selected. |
| <code>text</code> | <code>String</code> | The radio switch label, or the button label if the <code>type</code> modifier is set to <code>button</code>. |
| <code>disabled</code> | <code>Boolean</code> | A disabled state. |
| <code>icon</code> | <code>BEMJSON</code> | The radio switch icon, which is created by the <a href="../icon/icon.en.md">icon</a> block. Use icons only for radio switches with the <code>type</code> modifier set to <code>button</code>. |
| <code>title</code> | <code>String</code> | Tooltip content. Use tooltips only for radio switches with <code>type</code> modifier set to <code>button</code>. |
| <code>id</code> | <code>String</code> | The radio switch unique ID. |

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    val : 2,
    options : [
        { val : 1, text : 'Football' },
        { val : 2, text : 'Basketball' },
        { val : 3, text : 'Handball', disabled : true }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 3,
    options : [
        {
            val : 1,
            text : 'Football',
            title : 'View standings'
        },
        {
            val : 2,
            disabled : true,
            text : 'Basketball',
            title : 'View standings'
        },
        {
            val : 3,
            disabled : true,
            text : 'Handball',
            title : 'View standings'
        }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 1,
    options : [
        {
            val : 1,
            text : 'Football news',
            title : 'Subscribe to the news',
            icon : {
                block : 'icon',
                mods : { social : 'twitter' }
            },
        },
        {
            val : 2,
            disabled : true,
            text : 'Handball news',
            title : 'Subscribe to the news',
            icon : {
                block : 'icon',
                mods : { social : 'twitter' }
            }
        }
    ]
}
```
