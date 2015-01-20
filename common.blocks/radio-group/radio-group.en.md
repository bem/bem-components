# radio-group

A block is used to create a group of related radio switches (based on [radio](../radio/radio.en.md) block).

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#type">type</a> | <code>'button'</code>, <code>'line'</code> | <code>BEMJSON</code> | A radio switches group type. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design.  |
| <a href="#size">size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | A radio switches group size. Use sizes only for radio switches group with <a href="#theme">theme modifier with islands value</a>. |

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#name">name</a> | <code>String</code> | A unique block name. |
| <a href="#val">val</a> | <code>Array</code> | A set of values of the selected radio switches. |
| <a href="#opt">options</a> | <code>Array</code> | A set of values for each radio switch of the group. Each radio switch has its own <a href="#optset">set of values</a>. |

## Block overview

`radio-group` block is used to manage a size, state, and appearance of the embedded radio switches. The block allows to choose the only one radio switch from the group.

### Modifiers of the block

<a name="type"></a>

#### `type` modifier

Available values: `'button'`, `'line'`.

Use case: `BEMJSON`.

<a name="type-button"></a>

##### A button-based radio-group (`type` modifier with `button` value)

The modifier allows to implement `radio-group` block using on [button-based radio switches](../radio/radio.en.md/#type) type.

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

##### A line-aligned radio-group (`type` modifier with `line` value)

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

Available value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides inactive state to the block. Disabled block is visible but not available for user actions.

The modifier could be applied to:

* A radio-group:

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

* A separate radio switch of the group:

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

Available value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides a focus to the block.

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

Available value: `'islands'`.

Use case: `BEMJSON`.

The modifier provides a custom design to the block.

`islands` theme requires <a href="#size">size</a> modifier usage.

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

Available values for `islands` theme: `'m'`, `'l'`.

Use case: `BEMJSON`.

Use `size` modifier only for blocks with `islands` <a href="#theme">theme</a>.

Provides all types of radio-groups with `size` value.

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

Specifies a unique name of the block.

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

Specifies a set of the selected radio switches values.

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
| <code>val</code> | <code>String</code>, <code>Number</code> | A value that will be sent to a server if a radio switch is selected. |
| <code>text</code> | <code>String</code> | A text of a radio switch or a text on a button if <code>type</code> modifier with <code>button</code> value is set to the radio switch. |
| <code>disabled</code> | <code>Boolean</code> | A disabled state. |
| <code>icon</code> | <code>BEMJSON</code> | An icon on a radio switch that is formed by <a href="../icon/icon.en.md">icon</a> block. Use icons only for radio switches with <a href="#type">type modifier with button value</a>. |
| <code>title</code> | <code>String</code> | A tooltip content. Use tooltips only for radio switches with <code>type</code> modifier with <code>button</code> value. |
| <code>id</code> | <code>String</code> | A unique identifier of a radio switch. |

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
