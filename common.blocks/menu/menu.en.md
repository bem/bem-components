# menu

`menu` block is used to create various types of selects and menu lists. It allows a user to manage state, behavior and appearance of `menu` block and its nested components – [menu-item](../menu-item/menu-item.md) blocks.

Block is represented as `<div>` HTML element with `role="menu"` attribute value.

The following types of `menu` are available:

* basic list (`mode` modifier is not specified);
* radio-select list (`menu_mode_radio`);
* single-choice list (`menu_mode_radio-check`);
* multiple-choice list (`menu_mode_check`).

For details see [`mode`](#types) section.

## Modifiers of a block

### _theme

Block supports the following themes:

 * simple
 * normal (**NB!** Choosing a theme `normal` requires additional modifier [`size`](#size).)

If `theme` modifier is not specified, [native](#native) representation of a control is applied.

See following examples:

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

**normal**

```bemjson
{
    block : 'menu',
    mods : { theme : 'normal', size : 'm', mode : 'check' },
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

<a name="size"></a>
### _size

Implemented only for theme `normal`.

Provides to all types of menus with the `size` value.

There are four sizes available: **s**, **m**, **l**, **xl**.

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

See following examples:

```bemjson
{
    block : 'menu',
    mods : { theme : 'normal', mode : 'check', size : 's' },
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
    mods : { theme : 'normal', mode : 'check', size : 'm' },
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
    mods : { theme : 'normal', mode : 'check', size : 'l' },
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
    mods : { theme : 'normal', mode : 'check', size : 'xl' },
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

<a name="types"></a>
### _mode

Use `mode` modifier to define a type of menu list:

* Basic list (`mode` modifier is not specified). Mouse click on menu item does not change its state to checked or unchecked.

```bemjson
{
    block : 'menu',
    mods : { theme : 'normal', size : 'm' },
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
    mods : { theme : 'normal', size : 'm', mode : 'radio' },
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
    mods : { theme : 'normal', size : 'm', mode : 'radio-check' },
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
    mods : { theme : 'normal', size : 'm', mode : 'check' },
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

### States of a block

#### _disabled

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing ‘Tab’, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

If `menu` block is disabled, all nested `menu-item` blocks are also disabled.

#### _focused

When a block is focused, a modifier ‘focused’ with ‘true’ value is set automatically, e.g. by pressing ‘Tab’ or clicking a mouse.

## Elements of a block

`menu` block is visually represented by the following elements:

### __group

`__group` element is used to combine several `menu-items` blocks into the group. All `menu-items` from one group must be declared in BEMJSON in `content` field of `group` element.

For a theme `normal` a gray line separates groups from each other.

```bemjson
{
    block : 'menu',
    mods : { theme : 'normal', size : 'm', mode : 'radio' },
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

### __group-title

This element is used to set titles for menu items group.

```bemjson
{
    block : 'menu',
    mods : { theme : 'normal', size : 'm', mode : 'radio' },
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
