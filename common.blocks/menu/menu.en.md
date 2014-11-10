# menu

The block is used to create various types of selects and menu lists.

## Short information

### Modifiers of a block

| Modifier | Valid values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#mode>mode</a> | <code>'menu_mode_radio'</code>, <code>'menu_mode_radio-check'</code>, <code>'menu_mode_check'</code> | | Declares menu type. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code> | In focus. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Makes block unavailable. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code>  | <code>BEMJSON</code> | Block size. |
| <a href=#theme>theme</a> | <code>'simple'</code>, <code>'islands'</code> | <code>BEMJSON</code> | Styling. |

## Block overview

The block allows a user to manage state, behavior and appearance of `menu` and its nested components – [menu-item](../menu-item/menu-item.md) blocks.

Block is represented as `<div>` HTML element with `role="menu"` attribute value.

The following types of `menu` are available:

* basic list (`mode` modifier is not specified);
* radio-select list (`menu_mode_radio`);
* single-choice list (`menu_mode_radio-check`);
* multiple-choice list (`menu_mode_check`).

For details see [`mode`](#mode) section.

### Modifiers of a block

<a name="mode"></a>
#### `mode`

Valid values: `'menu_mode_radio'`, `'menu_mode_radio-check'`, `'menu_mode_check'`.

Use case:

Use `mode` modifier to define a type of menu list:

* Basic list (`mode` modifier is not specified). Mouse click on menu item does not change its state to checked or unchecked.

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

* Radio-select list (`menu_mode_radio`). This modifier is used to allow user a single choice.

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

* Single-choice list (`menu_mode_radio-check`). This modifier allows a user to check only one menu item from the list or leave all items unchecked. Mouse click on menu item changes its value to the opposite.

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            mods : { checked : true },
            val : 2,
            content : 'Second item'
        }
    ]
}
```

* Multiple-choice list (`menu_mode_check`). This modifier allows user to check more than one menu item from the list or leave all items unchecked. Mouse click on menu item changes its value to the opposite.

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            mods : { checked : true },
            val : 2,
            content : 'Second item'
        }
    ]
}
```

<a name="focused"></a>
#### `focused`

Valid value: `true`.

Use case: `BEMJSON`.

When a block is focused, a modifier `focused` with `true` value is set automatically, e.g. by pressing `Tab` or clicking a mouse.

<a name="disabled"></a>
#### `disabled`

Valid value: `true`.

Use case: `BEMJSON`, `JS`.

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing ‘Tab’, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

If `menu` block is disabled, all nested `menu-item` blocks are also disabled.

<a name="size"></a>
#### `size`

Valid values: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Implemented only for theme `islands`.

Provides to all types of menus with the `size` value.

<table>
    <tr>
        <th>Block size</th>
        <th>Font size</th>
        <th>Line height <code>line-heigh</code></th>
    </tr>
    <tr>
        <td>s</td>
        <td>13px</td>
        <td>24px</td>
    </tr>
    <tr>
        <td>m</td>
        <td>13px</td>
        <td>24px</td>
    </tr>
    <tr>
        <td>l</td>
        <td>15px</td>
        <td>28px</td>
    </tr>
    <tr>
        <td>xl</td>
        <td>15px</td>
        <td>32px</td>
    </tr>
</table>

Examples:

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 's' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'm' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'l' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'xl' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

<a name="theme"></a>
#### `theme`

Valid values: `'simple'`, `'islands'`.

Use case: `BEMJSON`.

Block supports the following themes:

 * simple
 * islands (**NB!** Choosing a theme `islands` requires additional modifier [`size`](#size))

If `theme` modifier is not specified, [native](#native) representation of a control is applied.

Examples:

<a name="native"></a>
**default**

```bemjson
{
    block : 'menu',
    mods : { mode : 'check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

**simple**

```bemjson
{
    block : 'menu',
    mods : { theme : 'simple', mode : 'check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

**islands**

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

### Elements of a block

`menu` block is visually represented by the following elements:

#### __group

`__group` element is used to combine several `menu-items` blocks into the group. All `menu-items` from one group must be declared in BEMJSON in `content` field of `group` element.

For a theme `islands` a gray line separates groups from each other.

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'New'
        },
        {
            elem : 'group',
            content : [
                {
                    block : 'menu-item',
                    mods : { checked : true },
                    val : 2,
                    content : 'Open'
                },
                {
                    block : 'menu-item',
                    val : 3,
                    content : 'Open Recent'
                }
            ]
        },
        {
            block : 'menu-item',
            val : 4,
            content : 'Open Not so Recent'
        }
    ]
}
```

#### __group-title

This element is used to set titles for menu items group.

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'New'
        },
        {
            elem : 'group',
            title : 'Cool title',
            content : [
                {
                    block : 'menu-item',
                    mods : { checked : true },
                    val : 2,
                    content : 'Open'
                },
                {
                    block : 'menu-item',
                    val : 3,
                    content : 'Open Recent'
                }
            ]
        }
    ]
}
```
