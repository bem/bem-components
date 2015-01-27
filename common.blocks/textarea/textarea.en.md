# textarea

Use this block for creating a text area that allows to enter multiple lines of a text.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#width">width</a> | <code>'available'</code> | <code>BEMJSON</code> | The maximum allowed width of the text area. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | The size of the text area. Use sizes only for text areas when the <a href="#themes">theme modifier is set to islands</a>.|

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="#name">name</a> | <code>String</code> | The unique block name. |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code> | Default content of the text area. |
| <a href="#placeholder">placeholder</a> | <code>String</code> | The hint in the text area. |
| <a href="#id">id</a> | <code>String</code> | The unique identifier of the block. |
| <a href="#tab">tabIndex</a> | <code>Number</code> | The order when navigating through controls on a page by pressing the <code>Tab</code> key. |

## Block description

Use the `textarea` block to create the text area that allows to enter multiple lines of the text.

### Modifiers of the block

<a name="width"></a>

#### `width` modifier

Acceptable value:`'available'`.

Use cases: `BEMJSON`.

Use to set the maximum available width of the text area.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm', width : 'available' },
    placeholder : 'Your text should be here'
}
```

<a name="disabled"></a>

#### `disabled` modifier

Acceptable value:`true`.

Use cases: `BEMJSON`, `JS`.

The modifier makes the block inactive. The disabled block is visible but not available for user actions.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm', disabled : true },
    placeholder : 'Your text should be here'
}
```

<a name="focused"></a>

#### `focused` modifier

Acceptable value:`true`.

Use cases: `BEMJSON`, `JS`.

The modifier puts the focus on the block.

```javascript
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm', focused : true },
    placeholder : 'Your text should be here'
}
```

<a name="theme"></a>

#### `theme` modifier

Acceptable value:`'islands'`.

Use case: `BEMJSON`.

The modifier gives the block a custom design.

The `islands` theme requires the <a href="#size">size</a> modifier.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'Your text should be here'
}
```

<a name="size"></a>

#### `size` modifier

Acceptable values for the `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use the `size` modifier only for blocks with the `islands` <a href="#themes">theme</a>.

Sets the size value for all types of text areas.

**s**

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size: 's' },
    placeholder : 'Size s'
}
```

**m**

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'Size m'
}
```

**l**

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'l' },
    placeholder : 'Size l'
}
```

**xl**

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'xl' },
    placeholder : 'Size xl'
}
```

### Custom fields of the block

<a name="name"></a>

#### `name` field

Type: `String`.

Specifies the block unique name.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'm' },
    name : 'Feedback'
}
```

<a name="val"></a>

#### `val` field

Type: `String`.

Specifies the content of the text area.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'm' },
    name : 'Feedback',
    val : 'The text should be changed if necessary'
}
```

<a name="placeholder"></a>

#### `placeholder` field

Type: `String`.

Specifies the hint in the text area.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Your text should be here'
}
```

<a name="id"></a>

#### `id` field

Type: `String`.

Specifies the text area unique ID.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Your text should be here',
    id : 'Unique_1'
}
```

<a name="tab"></a>

#### `tabIndex` field

Type: `Number`.

Specifies the tab order when pressing `Tab` to navigate between controls on a page.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Your text should be here',
    tabIndex : 1
}
```
