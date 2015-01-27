# button

Use this block for creating different types of buttons.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#buttontype">type</a> | <code>'link'</code>, <code>'submit'</code> | <code>BEMJSON</code> | The type of button. |
| <a href="#buttontoggle">togglable</a> | <code>'check'</code>, <code>'radio'</code> | <code>BEMJSON</code> | The toggle button.|
| <a href="#buttondisabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The disabled state. |
| <a href="#buttonfocused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#buttonpressed">pressed</a> | <code>true</code> | – | The pressed state. |
| <a href="#hovered">hovered</a> | <code>true</code> | – | The hovered state. |
| <a href="#buttonthemes">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#buttonsize">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | The size of the button. Use sizes only for buttons with the <a href="#buttonthemes">theme modifier set to islands</a>.|
| <a href="#buttonview">view</a> | <code>'action'</code>, <code>'pseudo'</code> | <code>BEMJSON</code> | Visual highlighting.|

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#buttonname">name</a> | <code>String</code> | The unique block name. Do not use when the <a href="#link-button">type modifier is set to link</a>. |
| <a href="#buttonval">val</a> | <code>String</code> | The value to send to the server. Do not use when the <a href="#link-button">type modifier is set to link</a>. |
| <a href="#buttontext">text</a> | <code>String</code>| Button lable. |
| <a href="#buttonurl">url</a> | <code>String</code>| Link address. Use only when the <a href="#link-button">type modifier is set to link</a>. |
| <a href="#buttonicon">icon</a> | <code>BEMJSON</code> | Button icon. It iscreated by the <a href="../icon/icon.en.md">icon</a> block. |
| <a href="#buttontitle">title</a> | <code>String</code> | Tooltip content. |
| <a href="#buttonid">id</a> | <code>BEMJSON</code> | The button unique identifier. |
| <a href="#buttontab">tabIndex</a> | <code>Number</code> | The order when navigating through controls on a page by pressing the <code>Tab</code> key.|

## Block description

Use the `button` block to control the size, state, and appearance of the button.

### Modifiers of the block

<a name="buttontype"></a>

#### `type` modifier

Acceptable values: `'link'`, `'submit'`.

Use case: `BEMJSON`.

<a name="link-button"></a>

##### Link-button (`type` modifier with `link` value)

Use the `type` modifier with the `link` value to create a button that does to the address specified in the <a href="#buttonurl">url</a> field.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'link' },
    url : 'https://bem.info/',
    text : 'Try BEM!'
}
```

##### Form submit button (`type` modifier with `submit` value)

Use the `type` modifier with the `submit` value for creating the button to send data to the server. This button type must be a part of a form.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'submit' },
    text : 'Send data'
}
```

<a name="buttontoggle"></a>

#### `togglable` modifier

Acceptable values: `'check'`, `'radio'`.

Use case: `BEMJSON`.

Defines behavior of the pressed button.

##### Toggle button (`togglable` modifier with `check` value)

The first click presses the button, and the second one releases it.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', togglable : 'check' },
    text : 'I am pressed'
}
```

##### Radio-button (`togglable` modifier with `radio` value)

The first click presses the button, and it cannot be released manually.
This button type is used as a part of a [radio-group](../radio-group/radio-group.en.md).

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

Acceptable value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier makes the block inactive. The disabled block is visible but not available for user actions.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', disabled : true },
    text : 'Disabled'
}
```

<a name="buttonfocused"></a>

#### `focused` modifier

Acceptable value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier puts the focus on the block.

```javascript
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', focused : true },
    text : 'In focus'
}
```

<a name="buttonpressed"></a>

#### `pressed` modifier

Acceptable value: `true`.

Use case: – .

The modifier is added to the button automatically at the moment when the button is pressed.

This modifier is used for buttons with the <a href="#buttontoggle">togglable</a> modifier.

<a name="hovered"></a>

#### `hovered` modifier

Acceptable value: `true`.

Use case: – .

The modifier is added to the block automatically at the moment when you mouse over it.

<a name="buttonthemes"></a>

#### `theme` modifier

Acceptable value: `'islands'`.

Use case: `BEMJSON`.

The modifier gives the block a custom design.

The `islands` theme requires the <a href="#buttonsize">size</a> modifier.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm' },
    text : 'Islands theme'
}
```

<a name="buttonsize"></a>

#### `size` modifier

Acceptable values for the `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use the `size` modifier only for blocks with the `islands` <a href="#buttonthemes">theme</a>.

Sets the size value for all types of buttons.

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

Acceptable values: `'action'`, `'pseudo'`.

Use case: `BEMJSON`.

##### Action button (`view` modifier with `action` value)

The modifier visually highlights the button on a page. For example, use it to create a promo button:

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', view : 'action' },
    text : 'Buy now!'
}
```

##### Pseudobutton (`view` modifier with `pseudo` value)

The modifier changes visual representation of the button. For example, use it if you do not need to focus attention on the button:

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
    text : 'Without borders'
}
```

### Custom fields of the block

<a name="buttonname"></a>

#### `name` field

Type: `String`.

Specifies the block unique name.

Do not use the `name` field when <a href="#link-button">type modifier is set to link</a>.

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

Specifies the value to send to the server.

Do not use the `val` field when <a href="#link-button">type modifier is set to link</a>.

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

Specifies the button lable.

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

Specifies the link address that will be opened by clicking the <a href="#link-button">link-button</a>.

Use the `url` field for <a href="#link-button">link-buttons</a> only.

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

Specifies the icon on the button. Declare the icon in BEMJSON using the [icon](../icon/icon.en.md) block.

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

Specifies the tooltip content. The tooltip appearance depends on the browser and your operating system settings. You cannot change it applying HTML or different styles.

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

Specifies the unique identifier of the button.

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

Specifies the tab order when pressing `Tab` to navigate between controls on a page.

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
