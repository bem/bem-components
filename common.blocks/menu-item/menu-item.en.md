# menu-item

Use this block as a part of the [menu](../menu/menu.en.md) block.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#type">type</a> | <code>'link'</code> | <code>BEMJSON</code> | The menu item implemented by the <a href="../link/link.en.md">link</a> block. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The disabled state. |
| <a href="#hovered">hovered</a> | <code>true</code> | – | The hovered state. |

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="#val">val</a> | <code>Number</code>, <code>String</code> | The value of the menu item. |

## Block description

Use the `menu-item` block to control the size, state and appearance of the menu items. Use this block as a part of the [menu](../menu/menu.en.md) block.

### Modifiers of the block

<a name="type"></a>

#### `type` modifier

Acceptable value: `'link'`.

Use case: `BEMJSON`.

Use this modifier to create the menu items implemented by the [link](../link/link.en.md) block that must be declared in the `content` field in BEMJSON.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm' },
    content : [
        {
            block : 'menu-item',
            mods : { type : 'link' },
            content : {
                block : 'link',
                url : 'https://bem.info/',
                content : 'bem.info'
            }
        },
        {
            block : 'menu-item',
            mods : { type : 'link' },
            content : {
                block : 'link',
                url : 'https://tech.yandex.ru/',
                content : 'tech.yandex.ru'
            }
        }
    ]
}
```

<a name="disabled"></a>

#### `disabled` modifier

Acceptable value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier makes the block inactive. The disabled block is visible but not available for user actions.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm' },
    content : [
        {
            block : 'menu-item',
            mods : { disabled : true },
            content : 'BH'
        },
        {
            block : 'menu-item',
            content : 'BEMHTML'
        }
    ]
}
```

<a name="hovered"></a>

#### `hovered` modifier

Acceptable value: `true`.

Use case: – .

The modifier is added to the block automatically at the moment when you mouse it over.

### Custom fields of the block

<a name="val"></a>

#### `val` field

Type: `Number`, `String`.

Specifies the value of the menu item.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    val : 'item-1',
    content : [
        {
            block : 'menu-item',
            val : 'item-1',
            content : 'BH'
        },
        {
            block : 'menu-item',
            val : 'item-2',
            content : 'BEMHTML'
        }
    ]
}
```
