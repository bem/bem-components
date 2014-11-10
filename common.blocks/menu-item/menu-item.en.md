# menu-item

The block is used as independent switch element to form dropdowns, tab menus, lists and menu items.

## Short information

### Modifiers of a block

| Modifier | Valid values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#type>type</a> | <code>'link'</code> | <code>BEMJSON</code> | Creates `menu-item` based on `link` block. |
| <a href=#checked>checked</a> | <code>true</code> | | Defines that menu item is selected.  |
| <a href=#hovered>hovered</a> | <code>true</code> | | Mouse pointer is over the block. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Makes block unavailable. |
| <a href=#theme>theme</a> | <code>'simple'</code>, <code>'islands'</code> | <code>BEMJSON</code> | Styling. |

### Custom fields of a block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href=#val>val</a> | <code>String</code> | Value to be sent to a server if `menu-item` is selected. |

Additional required HTML attributes could be specified in `attrs` field of BEMJSON.

## Block overview

`menu-item` block allows to manage state, content and type of menu items.

Block is represented as `<div>` HTML element with `role="menuitem"` attribute.

### Modifiers of a block

<a name="type"></a>
#### `type`

Valid values: `'link'`.

Use case:

Use `type` modifier with `link` value to create `menu-item` based on [`link`](../link/link.en.md) block. In this case link is used instead of switch element. All modifiers of `link` block could be propagated to this type of `menu-item`.

Example:

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

<a name="checked"></a>
#### `checked`

Valid value: `true`.

Use case:

This modifier defines the selected menu item.

Example:

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm', checked : true },
    content : 'checked'
}
```

For `menu-item` blocks nested in `menu` block `checked` state can be set on mouse click automatically.

<a name="hovered"></a>
#### `hovered`

Valid value: `true`.

Use case:

This modifier is automatically set to `menu-item` when mouse pointer is over the block.

<a name="disabled"></a>
#### `disabled`

Valid value: `true`.

Use cases: `BEMJSON`, `JS`.

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing `Tab`, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

Example:

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm', disabled : true },
    content : 'disabled'
}
```

<a name="theme"></a>
#### `theme`

Valid values: `'simple'`, `'islands'`.

Use case: `BEMJSON`.

Block supports the following themes:

* simple
* islands (**NB!** Choosing a theme `islands` requires additional modifier `size`)

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

### Custom fields of a block

<a name="val"></a>
#### `val`

Value to be sent to a server if `menu-item` is selected.
