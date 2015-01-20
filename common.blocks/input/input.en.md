# input

A block is used to create different types of text fields.

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#type">type</a> | <code>'password'</code>, <code>'search'</code> | <code>BEMJSON</code> | A text field type. |
| <a href="#width">width</a> | <code>'available'</code> | <code>BEMJSON</code> | A maximum allowed width of the text field. |
| <a href="#has-clear">has-clear</a> | <code>true</code> | <code>BEMJSON</code> | An element that clears `input` field content. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | A text field size. Use sizes only for text fields with <a href="#themes">theme modifier with islands value</a>.|

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#name">name</a> | <code>String</code> | A unique block name. |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code> | Default content of the text field. |
| <a href="#placeholder">placeholder</a> | <code>String</code> | A hint in the text field. |
| <a href="#maxLength">maxLength</a> | <code>String</code> | A maximum number of characters allowed in text field. |
| <a href="#autocomplete">autocomplete</a> | <code>Boolean</code> | Browser predictions of the rest of a word while a user is typing. |
| <a href="#id">id</a> | <code>String</code> | A unique identifier of the text field. |
| <a href="#tab">tabIndex</a> | <code>Number</code> | A sequence that user follows when he uses the <code>Tab</code> key to navigate through a page. |

## Block overview

`input` block is used to manage a size, state and appearance of a text fields.

### Modifiers of the block

<a name="type"></a>

#### `type` modifier

Available values:`'password'`, `'search'`.

Use case: `BEMJSON`.

The modifier changes types of the text fields.

<a name="input"></a>
If `type` modifier is not specified, `input` block is a common text field by default.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Enter your name'
}
```

##### A password field (`type` modifier with `password` value)

Use to create a specialized text fields for password entry. For security reasons, a password field does not show the characters that the user types. Instead, the field displays a character different from the one typed such as an asterisk '*' (depends on a browser).

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'm', type : 'password' },
    placeholder : 'Enter the password'
}
```

##### A search field (`type` modifier wirh `search` value)

Use to create a search field.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', type : 'search' },
    placeholder : 'Enter your question'
}
```

<a name="width"></a>

#### `width` modifier

Available value:`'available'`.

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

Available value:`true`.

Use cases: `BEMJSON`.

Use to add `clear` element into the text field to remove entered content.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', 'has-clear' : true },
    val : 'Hello!'
}
```

<a name="disabled"></a>

#### `disabled` modifier

Available value:`true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides inactive state to the block. Disabled block is visible but not available for user actions.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', disabled : true },
    placeholder : 'Enter your name'
}
```

<a name="focused"></a>

#### `focused` modifier

Available value:`true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides a focus to the block.

```javascript
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', focused : true },
    placeholder : 'Enter your name'
}
```
<a name="theme"></a>

#### `theme` modifier

Available value:`'islands'`.

Use case: `BEMJSON`.

The modifier provides a custom design to the block.

`islands` theme requires <a href="#size">size</a> modifier usage.

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'm', type : 'search' },
    placeholder : 'Enter your question'
}
```

<a name="size"></a>

#### `size` modifier

Available values for `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use `size` modifier only for blocks with `islands` <a href="#themes">theme</a>.

Provides all types of text fields with `size` value.

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

Specifies a unique name of the block.

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

Specifies content of the text field.

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

Specifies a hint in the text field.

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

Specifies a maximum number of characters allowed in text field.

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

Specifies browser predictions of the rest of a word while a user is typing.

If `autocomplete` field is not specified, the autocomplete function is turned on by default.

To turn off the autocomplete function use `false` value:

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

Specifies a unique identifier of the text field.

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

Specifies a tab order between controls on a page by pressing `Tab`.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Enter your name',
    tabIndex : 3
}
```
