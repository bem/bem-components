# textarea

A block is used to create a text area that allows to enter multiple lines of a text.

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#width">width</a> | <code>'available'</code> | <code>BEMJSON</code> | A maximum allowed width of the text area. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | A text area size. Use sizes only for text areas with <a href="#themes">theme modifier with islands value</a>.|

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#name">name</a> | <code>String</code> | A unique block name. |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code> | Default content of the text area. |
| <a href="#placeholder">placeholder</a> | <code>String</code> | A hint in the text area. |
| <a href="#id">id</a> | <code>String</code> | A unique identifier of the block. |
| <a href="#tab">tabIndex</a> | <code>Number</code> | A sequence that user follows when he uses the <code>Tab</code> key to navigate through a page. |

## Block overview

`textarea` block is used to create a text area that allows to enter multiple lines of a text.

### Modifiers of the block

<a name="width"></a>

#### `width` modifier

Available value:`'available'`.

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

Available value:`true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides inactive state to the block. Disabled block is visible but not available for user actions.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm', disabled : true },
    placeholder : 'Your text should be here'
}
```

<a name="focused"></a>

#### `focused` modifier

Available value:`true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides a focus to the block.

```javascript
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm', focused : true },
    placeholder : 'Your text should be here'
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
    block : 'textarea',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'Your text should be here'
}
```

<a name="size"></a>

#### `size` modifier

Available values for `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use `size` modifier only for blocks with `islands` <a href="#themes">theme</a>.

Provides all types of text areas with `size` value.

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

Specifies a unique name of the block.

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

Specifies content of the text area.

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

Specifies a hint in the text area.

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

Specifies a unique identifier of the text area.

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

Specifies a tab order between controls on a page by pressing `Tab`.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Your text should be here',
    tabIndex : 1
}
```
