# checkbox-group

A block is used to manage a group of [checkboxes](../checkbox/checkbox.en.md).

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#checkboxtype">type</a> | <code>'button'</code>, <code>'line'</code> | <code>BEMJSON</code> | A checkbox group type. |
| <a href="#checkboxdisabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A disabled state. |
| <a href="#checkboxfocused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#checkboxtheme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design.  |
| <a href="#checkboxsize">size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | A checkbox group size. Use sizes only for checkboxes with <a href="#checkboxtheme">theme modifier with islands value</a>. |

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#checkboxname">name</a> | <code>String</code> | A unique block name. |
| <a href="#val">val</a> | <code>Array</code> | A set of values of the selected checkboxes. |
| <a href="#checkboxopt">options</a> | <code>Array</code> | A set of values for each checkbox of the group. Each checkbox has its own <a href="#checkboxoptset">set of values</a>. |

## Block overview

`checkbox-group` block is used to manage a size, state, and appearance of the embedded checkboxes.

### Modifiers of the block

<a name="checkboxtype"></a>

#### `type` modifier

Available values: `'button'`, `'line'`.

Use case: `BEMJSON`.

<a name="checkboxtype-button"></a>

##### A `button`-based checkbox group (`type` modifier with `button` value)

The modifier allows to implements `checkbox-group` block using on [button-based checkboxes](../checkbox/checkbox.en.md/#checkboxtype) type.

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

Available value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides inactive state to the block. Disabled block is visible but not available for user actions.

The modifier could be applied to:

* A checkbox-group:

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

* A separate checkbox of the group:

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

Available value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides a focus to the block.

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

Available value: `'islands'`.

Use case: `BEMJSON`.

The modifier provides a custom design to the block.

`islands` theme requires <a href="#checkboxsize">size</a> modifier usage.

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

Available values for `islands` theme: `'m'`, `'l'`.

Use case: `BEMJSON`.

Use `size` modifier only for blocks with `islands` <a href="#checkboxthemes">theme</a>.

Provides all types of checkbox groups with `size` value.

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

Specifies a unique name of the block.

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

Specifies a set of the selected checkboxes values.

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
| <code>val</code> | <code>String</code>, <code>Number</code> | A value that will be sent to a server if a checkbox is selected. |
| <code>text</code> | <code>String</code> | A text of a checkbox or a text on a button if <code>type</code> modifier with <code>button</code> value is set to the checkbox. |
| <code>disabled</code> | <code>Boolean</code> | A disabled state. |
| <code>icon</code> | <code>BEMJSON</code> | An icon on a checkbox that is formed by <a href="../icon/icon.en.md">icon</a> block. Use icons only for checkboxes with <a href="#checkboxtype">type modifier with button value</a>. |
| <code>title</code> | <code>String</code> | A tooltip content. Use tooltips only for checkboxes with <code>type</code> modifier with <code>button</code> value. |
| <code>id</code> | <code>String</code> | A unique identifier of a checkbox. |

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
