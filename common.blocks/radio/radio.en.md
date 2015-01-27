# radio

Use this block as a part of the [radio-group](../radio-group/radio-group.en.md) block for creating a single radio switch.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#type">type</a> | <code>'button'</code> | <code>BEMJSON</code> | The type of the radio switch. |
| <a href="#checked">checked</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Selection of the radio switch. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#hovered">hovered</a> | <code>true</code> | – | The hovered state. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | The size of the radio switch. Use sizes only for radio switches when the <a href="#theme">theme modifier is set to islands</a>. |

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="#name">name</a> | <code>String</code> | The unique block name. |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code> | The value to send to the server if the radio switch is selected. |
| <a href="#text">text</a> | <code>String</code> | Radio switch lable. |
| <a href="#icon">icon</a> | <code>BEMJSON</code> | Radio switch icon. It is created by the <a href="../icon/icon.en.md">icon</a> block. Use icons only for radio switches when the <a href="#type">type modifier is set to button</a>. |
| <a href="#title">title</a> | <code>String</code> | Tooltip content. Use tooltips only for radio switches when the <a href="#type">type modifier is set to button</a>. |
| <a href="#tab">tabIndex</a> | <code>Number</code> | The order when navigating through controls on a page by pressing the Tab key.|

## Block descriptopn

Use the `radio` block to control the size, state and appearance of the single radio switch.

### Modifiers of the block

<a name="type"></a>

#### `type` modifier

Acceptable value: `'button'`.

Use case: `BEMJSON`.

Use the `type` modifier with the  `button` value to change the appearance of the block: the radio switch is implemented by the [button](../button/button.en.md) block. Press the button to select the radio switch.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

<a name="checked"></a>

#### `checked` modifier

Acceptable value: `true`.

Use case: `BEMJSON`, `JS`.

Use the `checked` modifier with the `true` value to select the radio switch.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', checked : true },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

<a name="disabled"></a>

#### `disabled` modifier

Acceptable value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier makes the block inactive. The disabled block is visible but not available for user actions.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', disabled : true },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

<a name="focused"></a>

#### `focused` modifier

Acceptable value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier puts the focus on the block.

```javascript
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', focused : true },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

```javascript
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button', focused : true },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

<a name="hovered"></a>

#### `hovered` modifier

Acceptable value: `true`.

Use case: – .

The modifier is added to the block automatically at the moment when you mouse it over.

<a name="theme"></a>

#### `theme` modifier

Acceptable value: `'islands'`.

Use case: `BEMJSON`.

The modifier gives the block a custom design.

The `islands` theme requires the <a href="#size">size</a> modifier.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

<a name="size"></a>

#### `size` modifier

Acceptable values for the `islands` theme: `'m'`, `'l'`.

Use case: `BEMJSON`.

Use the `size` modifier only for blocks with the `islands` <a href="#themes">theme</a>.

Sets the size value for all types of radio switches.

**m**

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

**l**

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'l' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'l', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

### Custom fields of the block

<a name="name"></a>

#### `name` field

Type: `String`.

Specifies the block unique name.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

<a name="val"></a>

#### `val` field

Type: `String`, `Number`.

Specifies the radio switch value to send to the server.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

<a name="text"></a>

#### `text` field

Type: `String`.

Specifies the radio switch lable or the text on the button if the <a href="#type">type modifier with the button value</a> is set to the block.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML'
}
```

<a name="icon"></a>

#### `icon` field

Type: `BEMJSON`.

Specifies the [icon](../icon/icon.ru.md) on the radio switch implemented by the button (the <a href="#type">type modifier is set to button</a>).

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'twitter',
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

<a name="title"></a>

#### `title` field

Type: `String`.

Specifies the tooltip content. The tooltip appearance depends on the browser and your operating system settings. You cannot change it applying HTML or different styles.

Use the `title` field for radio switches only with the <a href="#type">type modifier set to button</a>.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Twitter',
    title : 'Share in Twitter',
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

<a name="tab"></a>

#### `tabIndex` field

Type: `Number`.

Specifies the tab order when pressing Tab to navigate between controls on a page.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Use BEMHTML',
    tabIndex : 3
}
```
