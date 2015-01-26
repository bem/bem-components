# button

A block is used to create different types of buttons.

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#buttontype">type</a> | <code>'link'</code>, <code>'submit'</code> | <code>BEMJSON</code> | A button type.|
| <a href="#buttontoggle">togglable</a> | <code>'check'</code>, <code>'radio'</code> | <code>BEMJSON</code> | A toggle type of a button.|
| <a href="#buttondisabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A disabled state. |
| <a href="#buttonfocused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#buttonpressed">pressed</a> | <code>true</code> | – | A pressed state. |
| <a href="#hovered">hovered</a> | <code>true</code> | – | A hovered state. |
| <a href="#buttonthemes">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#buttonsize">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | A button size. Use sizes only for buttons with <a href="#buttonthemes">theme modifier with islands value</a>.|
| <a href="#buttonview">view</a> | <code>'action'</code>, <code>'pseudo'</code> | <code>BEMJSON</code> | Visual highlighting.|

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#buttonname">name</a> | <code>String</code> | A unique block name. Do not use for <a href="#link-button">type modifier with link value</a>. |
| <a href="#buttonval">val</a> | <code>String</code> | A value that will be sent to a server. Do not use for <a href="#link-button">type modifier with link value</a>. |
| <a href="#buttontext">text</a> | <code>String</code>| A button text. |
| <a href="#buttonurl">url</a> | <code>String</code>| A link address. Use only for <a href="#link-button">type modifier with link value</a>. |
| <a href="#buttonicon">icon</a> | <code>BEMJSON</code> | An icon on a button that is formed by <a href="../icon/icon.en.md">icon</a> block. |
| <a href="#buttontitle">title</a> | <code>String</code> | A tooltip content. |
| <a href="#buttonid">id</a> | <code>BEMJSON</code> | A unique identifier of a button. |
| <a href="#buttontab">tabIndex</a> | <code>Number</code> | A sequence that user follows when he uses the `Tab` key to navigate through a page. |

## Block overview

`button` block is used to manage a size, state, and appearance of a button.

### Modifiers of the block

<a name="buttontype"></a>

#### `type` modifier

Available values: `'link'`, `'submit'`.

Use case: `BEMJSON`.

<a name="link-button"></a>

##### A link-button (`type` modifier with `link` value)

Use `type` modifier with `link` value to create a button that opens a page by an address specified in <a href="#buttonurl">url</a> field.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'link' },
    url : 'https://bem.info/',
    text : 'Try BEM!'
}
```

##### A form submit button (`type` modifier with `submit` value)

Use `type` modifier with `submit` value to create a button that sends data to a server. This button type must be a part of a form.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'submit' },
    text : 'Send data'
}
```

<a name="buttontoggle"></a>

#### `togglable` modifier

Available values: `'check'`, `'radio'`.

Use case: `BEMJSON`.

Defines behavior of a pressed button.

##### A toggle button (`togglable` modifier with `check` value)

The first click presses the button, and the second one releases it.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', togglable : 'check' },
    text : 'I am pressed'
}
```

##### A radio-button (`togglable` modifier with `radio` value)

The first click presses the button, and it cannot be released manually.
This button type is used as a part of [radio-group](../radio-group/radio-group.en.md).

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', togglable : 'radio' },
    text : 'I am toggled'
}
```

An example of the button usage as a part of the radio-group:

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button', togglable : 'radio' },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'First' },
        { val : 2, text : 'Second' },
        { val : 3, text : 'Third' }
    ]
}
```

<a name="buttondisabled"></a>

#### `disabled` modifier

Available value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier provides inactive state to the block. Disabled block is visible but not available for user actions.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', disabled : true },
    text : 'Disabled'
}
```

<a name="buttonfocused"></a>

#### `focused` modifier

Available value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier provides a focus to the block.

```javascript
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', focused : true },
    text : 'In focus'
}
```

<a name="buttonpressed"></a>

#### `pressed` modifier

Available value: `true`.

Use case: – .

The modifier is added to a button automatically at the moment when the button is pressed.

This modifier is used for buttons with <a href="#buttontoggle">togglable</a> modifier.

<a name="hovered"></a>

#### `hovered` modifier

Available value: `true`.

Use case: – .

The modifier is added to a block automatically at the moment when you mouse over it.

<a name="buttonthemes"></a>

#### `theme` modifier

Available value: `'islands'`.

Use case: `BEMJSON`.

The modifier provides a custom design to the block.

`islands` theme requires <a href="#buttonsize">size</a> modifier usage.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm' },
    text : 'Islands theme'
}
```

<a name="buttonsize"></a>

#### `size` modifier

Available values for `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use `size` modifier only for blocks with `islands` <a href="#buttonthemes">theme</a>.

Provides all types of buttons with `size` value.

**s**

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 's' },
    text : 'Size s'
}
```

**m**

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm' },
    text : 'Size m'
}
```

**l**

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'l' },
    text : 'Size l'
}
```

**xl**

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'xl' },
    text : 'Size xl'
}
```

<a name="buttonview"></a>

#### `view` modifier

Available values: `'action'`, `'pseudo'`.

Use case: `BEMJSON`.

##### An action button (`view` modifier with `action` value)

The modifier visually highlights a button on a page. For example, use it to create a promo button:

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', view : 'action' },
    text : 'Buy now!'
}
```

##### A pseudobutton (`view` modifier with `pseudo` value)

The modifier changes visual representation of a button. For example, use it if you do not need to focus attention on the button:

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', view : 'pseudo' },
    text : 'With transparent background'
}
```

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', view : 'pseudo', disabled : true },
    text : 'Without boarders'
}
```

### Custom fields of the block

<a name="buttonname"></a>

#### `name` field

Type: `String`.

Specifies a unique name of the block.

Do not use `name` field with <a href="#link-button">type modifier with link value</a>.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'submit' },
    name : 'Test_1',
    val : 'passed',
    text : 'Check results'
}
```

<a name="buttonval"></a>

#### `val` field

Type: `String`, `Number`.

Specifies a value that is sent to a server.

Do not use `val` field for <a href="#link-button">type modifier with link value</a>.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'submit' },
    name : 'Test_1',
    val : 'passed',
    text : 'Check results'
}
```

#### `text` field

Type: `String`.

Specifies a text on a button.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'submit' },
    name : 'Test_1',
    val : 'passed',
    text : 'Check results'
}
```

<a name="buttonurl"></a>

#### `url` field

Type: `String`.

Specifies a link address that will be opened by clicking a <a href="#link-button">link-button</a>.

Use `url` field for a <a href="#link-button">link-buttons</a> only.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'link' },
    url : 'https://bem.info/',
    text : 'Try BEM!'
}
```

#### `icon` field

Type: `BEMJSON`.

Specifies an icon on a button. Declare the icon in BEMJSON using [icon](../icon/icon.en.md) block.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm' },
    text : 'Twitter',
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

<a name="buttontitle"></a>

#### `title` title

Type: `String`.

Specifies a tooltip content. The tooltip appearance depends on a browser and your operating system settings. You cannot change it applying HTML or different styles.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'submit' },
    name : 'Test #1',
    val : 'Passed',
    text : 'Check the result',
    title : 'This button shows the test results'
}
```

<a name="buttonid"></a>

#### `id` field

Type: `String`.

Specifies a unique identifier of a button.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'submit' },
    name : 'Test #1',
    val : 'Passed',
    text : 'Check the result',
    id : 'Unique_1'
}
```

<a name="buttontab"></a>

#### `tabIndex` field

Type: `Number`.

Specifies a tab order between controls on a page by pressing `Tab`.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'submit' },
    name : 'Test #1',
    val : 'Passed',
    text : 'Check the result',
    tabIndex : 3
}
```
