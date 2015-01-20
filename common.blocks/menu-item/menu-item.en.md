# menu-item

A block that is used as a part of [menu](../menu/menu.en.md) block.

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#type">type</a> | <code>'link'</code> | <code>BEMJSON</code> | A menu item implemented by <a href="../link/link.en.md">link</a> block. |
| <a href="#checked">checked</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A menu item selection. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A disabled state. |
| <a href="#hovered">hovered</a> | <code>true</code> | – | A hovered state. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | A menu item size. Use sizes only for menu items with <a href="#theme">theme modifier with islands value</a>. |

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#val">val</a> | <code>Number</code>, <code>String</code> | A value of the menu item. |

## Block overview

`menu-item` block is used to manage a size, state and appearance of menu items.

### Modifiers of the block

<a name="type"></a>

#### `type` modifier

Available value: `'link'`.

Use case: `BEMJSON`.

Use to create menu items implemented by [link](../link/link.en.md) block that must be declared in `content` field in BEMJSON.

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

Available value: `true`.

Use case: `BEMJSON`, `JS`.

Use to select the menu item.

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm', checked : true },
    content : 'Choose BEM'
}
```

<a name="disabled"></a>

#### `disabled` modifier

Available value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides inactive state to the block. Disabled block is visible but not available for user actions.

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm', disabled : true },
    content : 'Choose BEM'
}
```

<a name="hovered"></a>

#### `hovered` modifier

Available value: `true`.

Use case: – .

The modifier is added to a block automatically at the moment when you mouse it over.

<a name="theme"></a>

#### `theme` modifier

Available value: `'islands'`.

Use case: `BEMJSON`.

The modifier provides a custom design to the block.

`islands` theme requires <a href="#size">size</a> modifier usage.

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm' },
    content : 'Choose BEM'
}
```

<a name="size"></a>

#### `size` modifier

Available values for `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use `size` modifier only for blocks with `islands` <a href="#themes">theme</a>.

Provides menu items with `size` value.

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

Specifies a value of the menu item.

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm' },
    content : 'Choose BEM',
    val : '1'
}
```
