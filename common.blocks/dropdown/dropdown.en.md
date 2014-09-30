# dropdown

`dropdown` block is used to create different dropdown types, manage their state, behavior and appearance on a page.

Block consist of two components:

* control component. Button, link or pseudo link can be used as a control component. The value of [switcher](#switcher) modifier defines a control component type.

* popup ([popup](../popup/popup.md) block). Mouse click on the control component opens `popup` that is always displayed above all other elements on a page. In this case `popup` automatically obtains `visible` and `opened` modifiers. Clicking outside the popup area hides it automatically (`{ autoclosable : true }`).

## Custom fields of a block

The following custom fields could be specified in BEMJSON declaration of the block:

<table>
    <tr>
        <th>Custom field name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>switcher</td>
        <td><code>String</code></td>
        <td>Text of the control component. May contain a string with text label or BEMJSON description of nested BEM entities. For example, it allows to implement the control component by other block or propagate additional attribute values.</td>
    </tr>
       <tr>
        <td>popup</td>
        <td><code>String|BEMJSON</code></td>
        <td>Text value or BEMJSON description of popup window content.</td>
    </tr>
</table>

Additional required HTML attributes could be specified in `attrs` field of BEMJSON.

## Modifiers of a block

### _theme

Block supports the following themes:

 * simple
 * islands (**NB!** Choosing a theme `islands` requires additional modifier [`size`](#size).)

If `theme` modifier is not specified, [native](#native) representation of a control is applied.

See following examples:

<a name="native"></a>
**default**

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link' },
    switcher : 'Link',
    popup : 'Hello, world!'
}
```

**simple**

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'simple' },
    switcher : 'Link',
    popup : 'Hello, world!'
}
```

**islands**

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm' },
    switcher : 'Link',
    popup : 'Hello, world!'
}
```

<a name="switcher"></a>
### _switcher

`switcher` modifier is used to specify a control component. The following values are available:

* `link` - creates a pseudo link that opens popup. Block `link` is used as a control component.
* `button` - creates a button that opens popup. Block `button` is used as a control component.


```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : 'Button',
    popup : 'Hello, world!'
}
```

### States of a block

#### _disabled

`disabled` modifier is used to make block visible but not available for user action. In most cases to mark out the disabled block on a page, additional styles are applied.

`disabled` modifier prevents the following modifiers to be applied:

* `popup` cannot be opened by clicking a mouse and get `opened` modifier;
* `popup` block cannot get `visible` modifier;
* control component cannot be `focused`;
* `button` control component cannot get `hovered` modifier.

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm', disabled : true },
    switcher : 'Button',
    popup : 'Hello, world!'
}
```

#### _opened

`opened` modifier is set automatically on mouse click on a control component when `popup` is opened. The second click closes `popup` – `opened` modifier is removed.

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm', opened : true },
    switcher : 'Button',`
    popup : 'Hello, world!'
}
```

## BEMJSON value of `switcher` and `popup` attributes

Control component and popup attributes can contain BEM entities that can be used for different purposes:

* to wrap or modify a control component;
* to propagate additional attribute values to a control component;
* to create nested content in popup window.

For example, you can make a button control component toggleable:

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : {
        block : 'button',
        mods : { togglable : 'true' },
        text : 'custom button'
    },
    popup : 'Popup message'
}
```

Or make dropdown list selector based on a block:

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'Button',
        theme : 'islands',
        size : 'xl'
    },
    switcher : 'Dropdown menu',
    popup : {
        block : 'menu',
        mods : {
            theme : 'islands',
            size : 'xl',
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
}
```
