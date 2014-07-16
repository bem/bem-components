# dropdown

A `dropdown` block is used to create different types of dropdowns.  It allows to manage state, behavior and appearance of dropdowns. Block consist of two components – the control component and the popup window (`popup` block). Popup window is displayed in front of all other page elements.

On mouse click over control component it shows the popup window (toggles `visible` modifier for the `popup` block).

Depending on a `switcher` modifier value, either link, pseudo link or button can be used as a control component.


## Valid block's attributes

Valid block's attributes can be specified in a corresponding fields of block's BEMJSON declaration:

<table>
    <tr>
        <th align="center">Attributes</th>
        <th align="center">Type</th>
        <th align="center">Description</th>
    </tr>
    <tr>
        <td>switcher</td>
        <td><code>String|BEMJSON</code></td>
        <td>Label for the control component. May contain a string with the text label or BEMJSON notation of nested BEM-entities. For example, it allows to wrap the control component with other block or pass it an additional attribute values.</td>
    </tr>
       <tr>
        <td>popup</td>
        <td><code>String|BEMJSON</code></td>
        <td>Text value or BEMJSON description of popup window content. In runtime BEMJSON entities will be rendered into HTML.</td>
    </tr>
</table>

Also, BEMJSON declaration can contain an arbitrary fields used for templating.


## Block's modifiers

### The themes `theme`

 * simple
 * normal

If a `theme` modifier is not set, the browser defaults (`default`) will be applied to block.

#### default

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link' },
    switcher : 'link',
    popup : 'Hello, world!'
}
```


#### simple

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'simple' },
    switcher : 'link',
    popup : 'Hello, world!'
}
```


#### normal

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'normal' },
    switcher : 'link',
    popup : 'Hello, world!'
}
```


### Control component type `switcher`

Mandatory modifier. It specifies which block to use as a control component. Next types are available:

* `switcher_link` - the pseudo link. `link` block is used as a base of the control component. 
* `switcher_button` - the button. `button` block is used as a base of the control component. 

Available for all block themes.

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'normal',
        size : 'xl'
    },
    switcher : 'button',
    popup : 'Hello, world!'
}
```


### `disabled`

If a `disabled` modifier is set, the dropdown is displayed but not available for user's actions.

For such disabled block an `opened` state will not be toggled on mouse click.

If a `disabled` modifier set, it prevents the block components from the following actions:

* `popup` block – `visible` modifier toggle;
* `link` control component – `focused` state toggle. Link does not obtain focus on mouse click or by `Tab` key press;
* `button` control component:
    * `focused` state toggle. Button will not obtain focus on mouse click or by `Tab` key press;
    * `hovered` state toggle on mouse pointer hover.

Available for all block themes.

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'normal',
        size : 'xl',
        disabled : true
    },
    switcher : 'button',
    popup : 'Hello, world!'
}
```


### dropdown's states

#### `opened`

An `opened` modifier toggles automatically on mouse click on the control component.

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'normal',
        size : 'xl',
        opened : true
    },
    switcher : 'button',
    popup : 'Hello, world!'
}
```


Modifier can be removed by re-clicking on the control component or outside popup's window (in case of `autoclosable` modifier availability for `popup` block).


## BEMJSON value of `switcher` and `popup` attributes 

As the control component and the popup attributes can contain BEM-entities it can be used for different purposes such as:

* control component warping or modifying;
* passing additional attribute values to control component;
* creating nested content in popup window.

For example, you can make a control component's button toggleable:

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'normal',
        size : 'xl'
    },
    switcher : {
        block : 'button',
        mods : { togglable : 'true' },
        text : 'custom button'
    },
    popup : 'Popup message'
}
```


Or make dropdown list selector based on block:

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'normal',
        size : 'xl'
    },
    switcher : 'Dropdown menu',
    popup : {
        block : 'menu',
        mods : {
            theme : 'normal',
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
