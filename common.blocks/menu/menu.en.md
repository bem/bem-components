# menu

Use this block for creating different types of menu.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | --------------------- | -------- |
| <a href="#mode">mode</a> | <code>'radio'</code>, <code>'radio-check'</code>, <code>'check'</code> | <code>BEMJSON</code> | The type of the menu. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | The size of the menu. Use sizes only for menus when the <a href="#themes">theme modifier is set to islands</a>. |

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="content">content</a> | `Array` | The array of the menu items. |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code>, <code>Array</code> | The selected value from the menu. If the <a href="#mode-check">mode modifier with check value</a> is applied to the block, the selected values must be declared as an <code>array</code>. |

### Elements of the block

| Element | Use cases | Description |
| --------| --------------------- | -------- |
| <a href=#group>group</a> | <code>BEMJSON</code> | The menu items visual grouping. |

### Custom fields of the block elements

| Element | Field | Type | Description |
| ------- | ---- | --- | -------- |
| group | <a href="#group-title">title</a> | <code>String</code> | The name of the menu items group. |

## Block description

Use the `menu` block to control the state, behavior and appearance of the menu and its nested components – the [menu-item](../menu-item/menu-item.en.md) blocks.

The block supports key-pad control. If `menu` block is in [focus](#focused) (`focused` modifier with `true` value), type a menu item name on your keyboard to switch to the menu item. Use `Space bar` or `Enter` buttons to select the menu item.

### Modifiers of the block

<a name="mode"></a>

#### `mode` modifier

Acceptable values: `'check`, `'radio'`, `'radio-check'`.

Use case: `BEMJSON`.

The `mode` modifier changes the type of the `menu` block depending on the selected value:

* basic list ([mode modifier is not specified](#mode-none))
* multiple-choice list ([mode modifier with check value](#mode-check))
* mandatory single-choice list ([mode modifier with radio value](#mode-radio))
* optional single-choice list ([mode modifier with radio-check value](#mode-radiocheck)).

<a name="mode-none"></a>
##### Basic list (`mode` modifier is not specified)

If the `mode` modifier is not set to the block, the basic list without the possibility to select the menu item is created.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Swimming'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Skiing'
        }
    ]
}
```

<a name="mode-check"></a>
##### Multiple-choice list (`mode` modifier with `check` value)

Use this modifier to create the menu with the possibility to select any number of menu items.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'check' },
    val : [1, 3],
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Skiing'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Swimming'
        },
        {
            block : 'menu-item',
            val : 3,
            content : 'Downshifting'
        }
    ]
}
```

<a name="mode-radio"></a>

##### Mandatory single-choice list (`mode` modifier with `radio` value)

Use this modifier to create the menu that has one mandatory selected item.

If any item is not selected in BEMJSON declaration, the first menu item is selected by default.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Skiing'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Swimming'
        }
    ]
}
```

<a name="mode-radiocheck"></a>
##### Optional single-choice list (`mode` modifier with `radio-check` value)

Use this modifier to create the menu that has one mandatory selected item like in the `mandatory single-choice list`. The fundamental difference between these two menu types is that the `menu` block with the `mode` modifier with the `radio-check` value has the opportunity to leave the menu without the selected items.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check' },
    val : 2,
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Skiing'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Swimming'
        }
    ]
}
```

<a name="disabled"></a>

#### `disabled` modifier

Acceptable value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier makes the block inactive. The disabled block is visible but not available for user actions.

If `menu` block is disabled, all nested `menu-item` blocks are also disabled:

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check', disabled : true },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Skiing'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Swimming'
        }
    ]
}
```

The `disabled` modifier with the `true` value could be set to a separate menu items:

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check' },
    val : 2,
    content : [
        {
            block : 'menu-item',
            mods : { disabled : true },
            val : 1,
            content : 'Skiing'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Swimming'
        }
    ]
}
```

<a name="focused"></a>

#### `focused` modifier

Acceptable value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier puts the focus on the block.

```javascript
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check', focused : true },
    val : 2,
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Skiing'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Swimming'
        }
    ]
}
```

<a name="theme"></a>
#### `theme` modifier

Acceptable value: `'islands'`.

Use case: `BEMJSON`.

The modifier gives the block a custom design.

The `islands` theme requires the <a href="#size">size</a> modifier.

```js
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'm' },
    val : [1],
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Skiing'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Swimming'
        }
    ]
}
```

<a name="size"></a>
#### `size` modifier

Acceptable values for the `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use the `size` modifier only for blocks with the `islands` <a href="#themes">theme</a>.

Sets the size value for all types of menus.

**s**

```js
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 's' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Skiing'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Swimming'
        }
    ]
}
```

**m**

```js
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'm' },
    val : [2],
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Skiing'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Swimming'
        }
    ]
}
```
**l**

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'check' },
    val : [2],
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Skiing'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Swimming'
        }
    ]
}
```

**xl**

```js
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'xl' },
    val : [2],
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Skiing'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Swimming'
        }
    ]
}
```

### Custom fields of the block

<a name="content"></a>
#### `content` field

Type: `Array`.

Specifies the list of the menu items.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Vacation at work'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Vacation on the couch'
        }
    ]
}
```

<a name="val"></a>

#### `val` field

Type: `String`, `Number`, `Array`.

Specifies:

* The selected value from the menu. In this case the field type is `String` or `Number`.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    val : 2,
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Vacation at work'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Vacation on the couch'
        }
    ]
}
```

* The set of selected values from the menu. This case is possible if the block has the [mode modifier set to check](#mode-check). The field type is an `Array`.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'check' },
    val : [1, 2],
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Skiing'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Swimming'
        }
    ]
}
```

### Elements of the block

<a name="group"></a>

#### `group` element

A visual grouping of the menu items that does not affect the general logic of items selection.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    val : 2,
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Work'
        },
        {
            elem : 'group',
            content : [
                {
                    block : 'menu-item',
                    val : 2,
                    content : 'Skiing'
                },
                {
                    block : 'menu-item',
                    val : 3,
                    content : 'Swimming'
                }
            ]
        },
        {
            block : 'menu-item',
            val : 4,
            content : 'Downshifting'
        }
    ]
}
```

### Custom fields of the block elements

<a name="group-title"></a>

#### `title` field of `group` element

Type: `String`.

Specifies the title for a group of menu items.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    val : 2,
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Work'
        },
        {
            elem : 'group',
            title : 'Outdoor activity',
            content : [
                {
                    block : 'menu-item',
                    val : 2,
                    content : 'Skiing'
                },
                {
                    block : 'menu-item',
                    val : 3,
                    content : 'Swimming'
                }
            ]
        }
    ]
}
```
