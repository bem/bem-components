# menu-item

`menu-item` block is used as independent switch element to form dropdowns, tab menus, lists and menu items. `menu-item` block allows to manage state, content and type of menu items.

Block is represented as `<div>` HTML element with `role="menuitem"` attribute.

## Custom fields of a block

The following custom fields could be specified in BEMJSON declaration of the block:

<table>
    <tr>
        <th>Custom field name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>val</td>
        <td><code>String</code></td>
        <td>Value to be sent to a server if <code>menu-item</code> is selected.</td>
    </tr>
</table>

Additional required HTML attributes could be specified in `attrs` field of BEMJSON.

## Modifiers of a block

### _theme

Block supports the following themes:

* simple
* islands (**NB!** Choosing a theme `islands` requires additional modifier `size`.)

If `theme` modifier is not specified, [native](#native) representation of a control is applied.

See following examples:

<a name="native"></a>
**default**

```bemjson
{
    block : 'menu-item',
    content : 'default',
    val : 'my value'
}
```

**simple**

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'simple' },
    content : 'simple',
    val : 'my value'
}
```

**islands**

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm' },
    content : 'islands',
    val : 'my value'
}
```

### _type

Use `type` modifier with `link` value to create `menu-item` based on [`link`](../link/link.en.md) block. In this case link is used instead of switch element. All modifiers of `link` block could be propagated to this type of `menu-item`.

```bemjson
{
    block : 'menu-item',
    mods : { type : 'link' },
    val : 2,
    content : {
        block : 'link',
        url : '#',
        content : 'Link 1'
    }
}
```

### States of a block

#### _checked

This modifier defines the selected menu item.

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm', checked : true },
    content : 'checked'
}
```

For `menu-item` blocks nested in `menu` block `checked` state can be set on mouse click automatically.

### _disabled

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing ‘Tab’, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm', disabled : true },
    content : 'disabled'
}
```

#### _hovered

This modifier is automatically set to `menu-item` when mouse pointer is over the block.
