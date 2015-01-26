# menu

A block is used to create different types of menu.

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | --------------------- | -------- |
| <a href="#mode">mode</a> | <code>'radio'</code>, <code>'radio-check'</code>, <code>'check'</code> | <code>BEMJSON</code> | A menu type. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | A menu size. Use sizes only for menus with <a href="#themes">theme modifier with islands value</a>. |

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code>, <code>Array</code> | A selected value from the menu. If <a href="#mode-check">mode modifier with check value</a> is applied to the block, the selected values must be declared as an <code>array</code>. |

### Elements of the block

| Element | Use cases | Description |
| --------| --------------------- | -------- |
| <a href=#group>group</a> | <code>BEMJSON</code> | A visual grouping of the menu items. |

### Custom fields of the block elements

| Field | Type | description |
| ------- | ---- | --- | -------- |
| group | <a href="#group-title">title</a> | <code>String</code> | A name of the menu items group. |

## Block overview

`menu` block allows a user to manage state, behavior and appearance of the menu and its nested components – [menu-item](../menu-item/menu-item.en.md) blocks.

### Modifiers of the block

<a name="mode"></a>

#### `mode` modifier

Available values: `'check`, `'radio'`, `'radio-check'`.

Use case: `BEMJSON`.

`mode` modifier changes a type of `menu` block depending on the selected value:

* A basic list ([mode modifier is not specified](#mode-none))
* A multiple-choice list ([mode modifier with check value](#mode-check))
* A mandatory single-choice list ([mode modifier with radio value](#mode-radio))
* An optional single-choice list ([mode modifier with radio-check value](#mode-radiocheck)).

<a name="mode-none"></a>
##### A basic list (`mode` modifier is not specified)

If `mode` modifier is not specified, a basic list without the possibility to create a menu item is created.

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
##### A multiple-choice list (`mode` modifier with `check` value)

Use to create a menu with the possibility to select any number of menu items.

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

##### A mandatory single-choice list (`mode` modifier with `radio` value)

Use to create a menu that has one mandatory selected item.

If any item is not specified in BEMJSON as selected, the first menu item is selected by default.

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
##### An optional single-choice list (`mode` modifier with `radio-check` value)

Use to create a menu that has one mandatory selected item like in the `mandatory single-choice list`. The fundamental difference between these two menu types is that `menu` block with `mode` modifier with `radio-check` value has an opportunity to leave the menu without the selected items.

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

Available value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides inactive state to the block. Disabled block is visible but not available for user actions.

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

`disabled` modifier with `true` value could be applied to a separate menu items:

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

Available value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides a focus to the block.

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

Available value: `'islands'`.

Use case: `BEMJSON`.

The modifier provides a custom design to the block.

`islands` theme requires <a href="#size">size</a> modifier usage.

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

Available values for `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use `size` modifier only for blocks with `islands` <a href="#themes">theme</a>.

Provides all types of menus with `size` value.

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

<a name="val"></a>

#### `val` field

Type: `String`, `Number`, `Array`.

Specifies:

* A selected value from the menu. In this case the type of the filed is `String` or `Number`.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    val : 2,
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отпуск на работе'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отпуск на диване'
        }
    ]
}
```

* A set of selected values from the menu. This case is possible if the block has [mode modifier with check value](#mode-check). The field type is an array.

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

Specifies a name of the menu items group.

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
