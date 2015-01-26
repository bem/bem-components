# checkbox

A block is used to control a selection parameter with two available states – ”ON“ and ”OFF“.

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#checkboxtype">type</a> | <code>'button'</code> | <code>BEMJSON</code> | A checkbox type. |
| <a href="#checkboxchecked">checked</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A checkbox selection. |
| <a href="#checkboxdisabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A disabled state. |
| <a href="#checkboxfocused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#hovered">hovered</a> | <code>true</code> | – | A hovered state. |
| <a href="#checkboxtheme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#checkboxsize">size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | A checkbox size. Use sizes only for checkboxes with <a href="#checkboxtheme">theme modifier with islands value</a>. |

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#checkboxname">name</a> | <code>String</code> | A unique block name. |
| <a href="#checkboxval">val</a> | <code>String</code>, <code>Number</code> | A value that will be sent to a server if a checkbox is selected. |
| <a href="#checkboxtext">text</a> | <code>String</code> | A checkbox text. |
| <a href="#checkboxicon">icon</a> | <code>BEMJSON</code> | An icon on a checkbox that is formed by <a href="../icon/icon.en.md">icon</a> block. Use icons only for checkboxes with <a href="#checkboxtype">type modifier with button value</a>. |
| <a href="#checkboxtitle">title</a> | <code>String</code> | A tooltip content. Use tooltips only for checkboxes with <a href="#checkboxtype">type modifier with button value</a>. |
| <a href="#id">id</a> | <code>String</code> | A unique identifier of a checkbox. |
| <a href="#tab">tabIndex</a> | <code>Number</code> | A sequence that user follows when he uses the `Tab` key to navigate through a page. |

## Block overview

**Note** `autocomplete` HTML attribute is forced to `OFF` state by default to provide correct behavior of the block.

### Modifiers of the block

<a name="checkboxtype"></a>

#### `type` modifier

Available value: `'button'`.

Use case: `BEMJSON`.

Use `type` modifier with `button` value to change the appearance of the block: a checkbox is implemented by a [button](../button/button.en.md). Press the button to select the checkbox.

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

Available value: `true`.

Use case: `BEMJSON`, `JS`.

Use `checked` modifier with `true` value to select a checkbox.

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

Available value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier provides inactive state to the block. Disabled block is visible but not available for user actions.

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

<a name="hovered"></a>

#### `hovered` modifier

Available value: `true`.

Use case: – .

The modifier is added to a block automatically at the moment when you mouse it over.

<a name="checkboxtheme"></a>

#### `theme` modifier

Available value: `'islands'`.

Use case: `BEMJSON`.

The modifier provides a custom design to the block.

`islands` theme requires <a href="#checkboxsize">size</a> modifier usage.

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

Available values for `islands` theme: `'m'`, `'l'`.

Use case: `BEMJSON`.

Use `size` modifier only for blocks with `islands` <a href="#checkboxthemes">theme</a>.

Provides all types of checkboxes with `size` value.

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

Specifies a unique name of the block.

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

Specifies a checkbox value that is sent to a server.

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

Specifies a text of a checkbox or a text on a button if <a href="#checkboxtype">type modifier with button value</a> is set to the block.

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

Specifies an [icon](../icon/icon.ru.md) on a checkbox implemented by a button (<a href="#checkboxtype">type modifier with button value</a>).

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

Specifies a tooltip content. The tooltip appearance depends on a browser and your operating system settings. You cannot change it applying HTML or different styles.

Use `title` field for checkboxes with <a href="#checkboxtype">type modifier with button value</a> only.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true },
    name: 'name1',
    val : 1,
    text : 'Share',
    title : 'Share with freinds',
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

<a name="id"></a>

#### `id` field

Type: `String`.

Specifies a unique identifier of a checkbox.

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

Specifies a tab order between controls on a page by pressing `Tab`.

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
