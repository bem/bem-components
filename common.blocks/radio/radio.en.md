# radio

A block is used as a part of [radio-group](../radio-group/radio-group.en.md) block to create a single radio switch.

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#type">type</a> | <code>'button'</code> | <code>BEMJSON</code> | A radio switch type. |
| <a href="#checked">checked</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A radio switch selection. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#hovered">hovered</a> | <code>true</code> | – | A hovered state. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | A radio switch size. Use sizes only for radio switches with <a href="#theme">theme modifier with islands value</a>. |

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#name">name</a> | <code>String</code> | A unique block name. |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code> | A value that will be sent to a server if a radio switch is selected. |
| <a href="#text">text</a> | <code>String</code> | A radio switch text. |
| <a href="#icon">icon</a> | <code>BEMJSON</code> | An icon on a radio switch that is formed by <a href="../icon/icon.en.md">icon</a> block. Use icons only for radio switches with <a href="#type">type modifier with button value</a>. |
| <a href="#title">title</a> | <code>String</code> | A tooltip content. Use tooltips only for radio switches with <a href="#type">type modifier with button value</a>. |
| <a href="#tab">tabIndex</a> | <code>Number</code> | A sequence that user follows when he uses the `Tab` key to navigate through a page. |

## Block overview

`radio` block is used to manage a size, state, and appearance of a single radio switch.

### Modifiers of the block

<a name="type"></a>

#### `type` modifier

Available value: `'button'`.

Use case: `BEMJSON`.

Use `type` modifier with `button` value to change the appearance of the block: a radio switch is implemented by [button](../button/button.en.md) block. Press the button to select the radio switch.

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

Available value: `true`.

Use case: `BEMJSON`, `JS`.

Use `checked` modifier with `true` value to select a radio switch.

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

Available value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier provides inactive state to the block. Disabled block is visible but not available for user actions.

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

Available value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier provides a focus to the block.

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

Available value: `true`.

Use case: – .

The modifier is added to a block automatically at the moment when you mouse it over.

<a name="theme"></a>

#### `theme` modifier

Available value: `'islands'`.

Use case: `BEMJSON`.

The modifier provides a custom design to the block.

`islands` theme requires <a href="#size">size</a> modifier usage.

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

Available values for `islands` theme: `'m'`, `'l'`.

Use case: `BEMJSON`.

Use `size` modifier only for blocks with `islands` <a href="#themes">theme</a>.

Provides all types of radio switches with `size` value.

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

Specifies a unique name of the block.

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

Specifies a radio switch value that is sent to a server.

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

Specifies a text of a radio switch or a text on a button if <a href="type">type modifier with button value</a> is set to the block.

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

Specifies an [icon](../icon/icon.ru.md) on a radio switch implemented by a button (<a href="#type">type modifier with button value</a>).

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

Specifies a tooltip content. The tooltip appearance depends on a browser and your operating system settings. You cannot change it applying HTML or different styles.

Use `title` field for radio switches with <a href="#type">type modifier with button value</a> only.

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

Specifies a tab order between controls on a page by pressing `Tab`.

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
