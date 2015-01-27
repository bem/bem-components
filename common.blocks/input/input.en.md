# input

Use this block for creating different types of text fields.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#type">type</a> | <code>'password'</code>, <code>'search'</code> | <code>BEMJSON</code> | The type of the text field. |
| <a href="#width">width</a> | <code>'available'</code> | <code>BEMJSON</code> | The maximum allowed width of the text field. |
| <a href="#has-clear">has-clear</a> | <code>true</code> | <code>BEMJSON</code> | The element that clears the `input` field content. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | The size of the text field. Use sizes only for text fields when the <a href="#themes">theme modifier is set to islands</a>.|

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="#name">name</a> | <code>String</code> | The unique block name. |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code> | Default content of the text field. |
| <a href="#placeholder">placeholder</a> | <code>String</code> | The hint in the text field. |
| <a href="#maxLength">maxLength</a> | <code>String</code> | The maximum number of characters allowed in the text field. |
| <a href="#autocomplete">autocomplete</a> | <code>Boolean</code> | Browser predictions of the rest of a word while a user is typing. |
| <a href="#id">id</a> | <code>String</code> | The unique identifier of the text field. |
| <a href="#tab">tabIndex</a> | <code>Number</code> | The order when navigating through controls on a page by pressing the <code>Tab</code> key. |

## Block description

Use the `input` block to control the size, state and appearance of the text fields.

### Modifiers of the block

<a name="type"></a>

#### `type` modifier

Acceptable values:`'password'`, `'search'`.

Use case: `BEMJSON`.

This modifier changes types of the text fields.

<a name="input"></a>
If the `type` modifier is not set, the `input` block is a common text field by default.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Enter your name'
}
```

##### Password field (`type` modifier with `password` value)

Use to create the specialized text fields for a password entry. For security reasons, the password field does not show the characters that the user types. Instead, the field displays the character different from the one typed such as an asterisk '*' (depends on a browser).

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'm', type : 'password' },
    placeholder : 'Enter the password'
}
```

##### Search field (`type` modifier wirh `search` value)

Use to create the search field.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', type : 'search' },
    placeholder : 'Enter your question'
}
```

<a name="width"></a>

#### `width` modifier

Acceptable value:`'available'`.

Use cases: `BEMJSON`.

Use to set the maximum available width to the text field.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', width : 'available' },
    placeholder : 'Enter your name'
}
```

<a name="has-clear"></a>

#### `has-clear` modifier

Acceptable value:`true`.

Use cases: `BEMJSON`.

Use this modifier to add the `clear` element into the text field to remove entered content.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', 'has-clear' : true },
    val : 'Hello!'
}
```

<a name="disabled"></a>

#### `disabled` modifier

Acceptable value:`true`.

Use cases: `BEMJSON`, `JS`.

The modifier makes the block inactive. The disabled block is visible but not available for user actions.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', disabled : true },
    placeholder : 'Enter your name'
}
```

<a name="focused"></a>

#### `focused` modifier

Acceptable value:`true`.

Use cases: `BEMJSON`, `JS`.

The modifier puts the focus on the block.

```javascript
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', focused : true },
    placeholder : 'Enter your name'
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
    block : 'input',
    mods : { theme : 'islands', size: 'm', type : 'search' },
    placeholder : 'Enter your question'
}
```

<a name="size"></a>

#### `size` modifier

Acceptable values for the `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use the `size` modifier only for blocks with the `islands` <a href="#themes">theme</a>.

Sets the size value for all types of text fields.

**s**

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 's' },
    placeholder : 'Size s'
}
```

**m**

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'Size m'
}
```

**l**

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'l' },
    placeholder : 'Size l'
}
```

**xl**

```js
{
    block : 'input',
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
    block : 'input',
    mods : { theme : 'islands', size: 'm' },
    name : 'Statistics'
}
```

<a name="val"></a>

#### `val` field

Type: `String`.

Specifies the content of the text field.

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'm' },
    name : 'Statistics',
    val : 'Hello'
}
```

<a name="placeholder"></a>

#### `placeholder` field

Type: `String`.

Specifies the hint in the text field.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Enter your name'
}
```

<a name="maxLength"></a>

#### `maxLength` field

Type: `Number`.

Specifies the maximum number of characters allowed in the text field.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Enter your name',
    maxLength : 20
}
```

<a name="autocomplete"></a>

#### `autocomplete` field

Type: `Boolean`.

Specifies the browser predictions of the rest of the word while a user is typing.

If the `autocomplete` field is not specified, the autocomplete function is turned on by default.

To turn off the autocomplete function, use the `false` value:

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Enter your name',
    autocomplete : false
}
```

<a name="id"></a>
#### `id` field

Type: `String`.

Specifies the text field unique ID.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Enter your name',
    id : 'Unique_1'
}
```

<a name="tab"></a>

#### `tabIndex` field

Type: `Number`.

Specifies the tab order when pressing `Tab` to navigate between controls on a page.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Enter your name',
    tabIndex : 3
}
```
