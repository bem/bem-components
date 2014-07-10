# menu item

A `menu-item` block is used for creation of various types of menu and list items. It is used inside a `menu` block. The `menu-item` block allows to manage state, content and type of menu items.

As a result of BEMHTML transformations block will be rendered to a `<div>` HTML element, with `role="menuitem"` attribute set.


## menu item use cases

The block helps to create following menu item types:

<table>
    <tr>
        <th>Type</th>
        <th>Description</th>
        <th>An example</th>
    </tr>
    <tr>
        <td>A switch element</td>
        <td>Is used to set up a dropdowns, tab menus, lists and menu items, etc.</td>
        <td>
            <pre><code>
{
    block : 'menu-item',
    val : 1,
    content : 'Selector value'
}
            </code></pre>
        </td>
    <tr>
        <td>A link element (<code>_type_link</code>)</td>
        <td>An element with nested depended link. A <code>link</code> block should be placed into block's BEMJSON declaration <code>content</code> field. The <code>_type_link</code> modifier is required.
        </td>
        <td>
            <pre><code>
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
            </code></pre>
        </td>
    </tr>
</table>


## Valid block's attributes

Valid block's attributes can be specified in the corresponding fields of block's BEMJSON declaration:

<table>
    <tr>
        <th align="center">Attributes</th>
        <th align="center">Type</th>
        <th align="center">Description</th>
    </tr>
    <tr>
        <td>val</td>
        <td><code>String|Number</code></td>
        <td>A value returned by menu item if selected.</td>
    </tr>
</table>

## Block's modifiers

### The themes `_theme`

 * simple
 * normal

If a `_theme` modifier is not set, the browser defaults (`default`) will be applied to the block.

For example:

#### default

```bemjson
{
    block : 'menu-item',
    content : 'default',
    val : 'my value'
}
```

#### simple

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'simple' },
    content : 'simple',
    val : 'my value'
}
```

#### normal

```bemjson
{
    block : 'menu-item',
    mods : { 
        theme : 'normal', 
        size : 'l'
    },
    content : 'normal',
    val : 'my value'
}
```


### Block's states

### Inactive `_disabled`

A `_disabled` modifier helps to create an inactive menu item. Inactive menu item is displayed, but not available for user actions.  

If a `_type_link` modifier is set for the block with a nested link, the link will not be followed on mouse click.

Available for all block themes.

```bemjson
{
    block : 'menu-item',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        disabled : true 
    },
    content : '_disabled'
}
```
    

#### Mouse over `_hovered`

This modifier is automatically toggled when the mouse pointer is over the block. 

Available for all block themes.

```bemjson
{
    block : 'menu-item',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        hovered : true 
    },
    content : '_hovered'
}
```


#### Selected menu item `_checked`

Modifier defines the selected menu item.

```bemjson
{
    block : 'menu-item',
    content : '_checked',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        checked : true 
    }
}
```


For the `menu-item` blocks nested in a `menu` block `_checked` state toggles automatically on mouse click. 

```bemjson
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        size : 'l',
        select : 'check'
    },
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

## Dependencies

The block depends on:

* `i-bem__dom `
* `jquery`
* `dom`
