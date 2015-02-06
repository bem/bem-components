# checkbox

Use this block to control a selection parameter with two available states – ”ON“ and ”OFF“.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#checkboxtype">type</a> | <code>'button'</code> | <code>BEMJSON</code> | The type of checkbox. |
| <a href="#checkboxchecked">checked</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Selection of the checkbox. |
| <a href="#checkboxdisabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The disabled state. |
| <a href="#checkboxfocused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#hovered">hovered</a> | <code>true</code> | – | The hovered state. |
| <a href="#checkboxtheme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#checkboxsize">size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | The size of the chackbox. Use sizes only for checkboxes with the <a href="#checkboxtheme">theme modifier set to islands</a>. |

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="#checkboxname">name</a> | <code>String</code> | The unique block name. |
| <a href="#checkboxval">val</a> | <code>String</code>, <code>Number</code> | The value to send to the server if the checkbox is selected. |
| <a href="#checkboxtext">text</a> | <code>String</code> | Checkbox lable. |
| <a href="#checkboxicon">icon</a> | <code>BEMJSON</code> | Checkbox icon. It is created by the <a href="../icon/icon.en.md">icon</a> block. Use icons only when checkboxes with the <a href="#checkboxtype">type modifier is set to button</a>. |
| <a href="#checkboxtitle">title</a> | <code>String</code> | Tooltip content. Use tooltips only for checkboxes when the <a href="#checkboxtype">type modifier is set to button</a>. |
| <a href="#id">id</a> | <code>String</code> | The checkbox unique identifier. |
| <a href="#tab">tabIndex</a> | <code>Number</code> | The order when navigating through controls on a page by pressing the <code>Tab</code> key.|

## Block description

**NB** The `autocomplete` HTML attribute is forced to `OFF` state by default to provide correct behavior of the block.

### Modifiers of the block

<a name="checkboxtype"></a>

#### `type` modifier

Acceptable value: `'button'`.

Use case: `BEMJSON`.

Use the `type` modifier with the `button` value to change the appearance of the block: the checkbox is implemented by the [button](../button/button.en.md). Press the button to select the checkbox.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name: 'button',
    val: 'val_1',
    text : 'Candies'
}
```

<a name="checkboxchecked"></a>

#### `checked` modifier

Acceptable value: `true`.

Use case: `BEMJSON`, `JS`.

Use the `checked` modifier with the `true` value to select the checkbox.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', checked : true },
    name: 'name1',
    val : 'val_1',
    text : 'Candies'
}
```

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true },
    name: 'name2',
    val : 'val_2',
    text : 'Candies'
}
```

<a name="checkboxdisabled"></a>

#### `disabled` modifier

Acceptable value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier makes the block inactive. The disabled block is visible but not available for user actions.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', disabled : true },
    name: 'name1',
    val : 'val_0',
    text : 'Candies'
}
```

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name: 'name2',
    val : 'val_1',
    text : 'Candies'
}
```

<a name="checkboxfocused"></a>

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

<a name="hovered"></a>

#### `hovered` modifier

Acceptable value: `true`.

Use case: – .

The modifier is added to the block automatically at the moment when you mouse it over.

<a name="checkboxtheme"></a>

#### `theme` modifier

Acceptable value: `'islands'`.

Use case: `BEMJSON`.

The modifier gives the block a custom design.

The `islands` theme requires the <a href="#checkboxsize">size</a> modifier.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm' },
    name: 'islands',
    val: 'val_3',
    text : 'islands theme'
}
```

<a name="checkboxsize"></a>

#### `size` modifier

Acceptable values for the `islands` theme: `'m'`, `'l'`.

Use case: `BEMJSON`.

Use the `size` modifier only for blocks with the `islands` <a href="#checkboxthemes">theme</a>.

Sets the size value for all types of checkboxes.

**m**

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm' },
    name: 'name1',
    val: 'val_1',
    text : 'Size m'
}
```

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name: 'name1',
    val: 'val_1',
    text : 'Size m'
}
```

**l**

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'l' },
    name: 'name2',
    val: 'val_2',
    text : 'Size l'
}
```

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'l', type : 'button' },
    name: 'name1',
    val: 'val_1',
    text : 'Size l'
}
```

### Custom fields of the block

<a name="checkboxname"></a>

#### `name` field

Type: `String`.

Specifies the block unique name.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name: 'name1',
    val: 'val_1',
    text : 'Candies'
}
```

<a name="checkboxval"></a>

#### `val` field

Type: `String`, `Number`.

Specifies the checkbox value to send to the server.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name: 'name2',
    val: 'val_2',
    text : 'Candies'
}
```

<a name="checkboxtext"></a>
#### `text` field

Type: `String`.

Specifies checkbox lable or the text on the button if the <a href="#checkboxtype">type modifier with the button value</a> is set to the block.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm' },
    name: 'name1',
    val: '1',
    text : 'Candies'
}
```

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name: 'name1',
    val: '1',
    text : 'Candies'
}
```

<a name="checkboxicon"></a>
#### `icon` field

Type: `BEMJSON`.

Specifies the [icon](../icon/icon.ru.md) on the checkbox implemented by the button (the <a href="#checkboxtype">type modifier is set to button</a>).

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true },
    name: 'name1',
    val : 1,
    text : 'Share',
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

<a name="checkboxtitle"></a>
#### `title` field

Type: `String`.

Specifies the tooltip content. The tooltip appearance depends on the browser and your operating system settings. You cannot change it applying HTML or different styles.

Use the `title` field for checkboxes only with the <a href="#checkboxtype">type modifier set to button</a>.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true },
    name: 'name1',
    val : 1,
    text : 'Share',
    title : 'Share with friends',
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

<a name="id"></a>

#### `id` field

Type: `String`.

Specifies the checkbox unique ID.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name: 'name1',
    val: '1',
    text : 'Candies',
    id : 'checkbox-id'
}
```

<a name="tab"></a>

#### `tabIndex` field

Type: `Number`.

Specifies the tab order when pressing `Tab` to navigate between controls on a page.
```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name: 'name1',
    val: '1',
    text : 'Candies',
    tabIndex : 3
}
```
