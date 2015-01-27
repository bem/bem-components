# menu-item

Use this block as a part of the [menu](../menu/menu.en.md) block.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#type">type</a> | <code>'link'</code> | <code>BEMJSON</code> | The menu item implemented by the <a href="../link/link.en.md">link</a> block. |
| <a href="#checked">checked</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Selection of the menu item. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The disabled state. |
| <a href="#hovered">hovered</a> | <code>true</code> | – | The hovered state. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | The size of the menu item. Use sizes only for menu items when the <a href="#theme">theme modifier is set to islands</a>. |

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="#val">val</a> | <code>Number</code>, <code>String</code> | The value of the menu item. |

## Block description

Use the `menu-item` block to control the size, state and appearance of the menu items.

### Modifiers of the block

<a name="type"></a>

#### `type` modifier

Acceptable value: `'link'`.

Use case: `BEMJSON`.

Use this modifier to create the menu items implemented by the [link](../link/link.en.md) block that must be declared in the `content` field in BEMJSON.

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm', type : 'link' },
    content : {
        block : 'link',
        url : 'https://bem.info/',
        content : 'bem.info'
    }
}
```

<a name="checked"></a>

#### `checked` modifier

Acceptable value: `true`.

Use case: `BEMJSON`, `JS`.

Use this modifier to select the menu item.

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm', checked : true },
    content : 'Choose BEM'
}
```

<a name="disabled"></a>

#### `disabled` modifier

Acceptable value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier makes the block inactive. The disabled block is visible but not available for user actions.

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm', disabled : true },
    content : 'Choose BEM'
}
```

<a name="hovered"></a>

#### `hovered` modifier

Acceptable value: `true`.

Use case: – .

The modifier is added to the block automatically at the moment when you mouse it over.

<a name="theme"></a>

#### `theme` modifier

Acceptable value: `'islands'`.

Use case: `BEMJSON`.

The modifier gives the block a custom design.

The `islands` theme requires the <a href="#size">size</a> modifier.

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm' },
    content : 'Choose BEM'
}
```

<a name="size"></a>

#### `size` modifier

Acceptable values for the `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use the `size` modifier only for blocks with the `islands` <a href="#themes">theme</a>.

Sets the size value for all types of menu items.

**s**

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 's' },
    content : 'Size s'
}
```

**m**

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm' },
    content : 'Size m'
}
```

**l**

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'l' },
    content : 'Size l'
}
```

**xl**

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'xl' },
    content : 'Size xl'
}
```

### Custom fields of the block

<a name="val"></a>

#### `val` field

Type: `Number`, `String`.

Specifies the value of the menu item.

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm' },
    content : 'Choose BEM',
    val : '1'
}
```
