# dropdown

`dropdown` block is used to create different dropdown types, manage their state, behavior and appearance on a page.

Block consist of two components:

* control component. Button, link or pseudo link can be used as a control component. The value of [switcher](#switcher) modifier defines a control component type.

* popup ([popup](../popup/popup.md) block). Mouse click on the control component opens `popup` that is always displayed above all other elements on a page. In this case `popup` automatically obtains `visible` and `opened` modifiers. Clicking outside the popup area hides it automatically (`{ autoclosable : true }`).

## Quick overview

### Modifiers of the block

| Modifier name| Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#theme>theme</a> | <code>'simple'</code>, <code>'islands' </code> | <code>BEMJSON</code> | Custom design. |
| <a href=#switcher>switcher</a> | <code>'link'</code>, <code>'button'</code> | <code></code> | Specifies a control element. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Disabled state. |
| <a href=#opened>opened</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> |  |

### Custom fields of the block

The following custom fields could be specified in BEMJSON declaration of the block:

| Field | Type | Description |
| ---- | --- | -------- |
| <a href=#switcher>switcher</a> | <code>String</code> | Text of the control component. May contain a string with text label or BEMJSON description of nested BEM entities. For example, it allows to implement the control component by other block or propagate additional attribute values. |
| <a href=#popup>popup</a> | <code>String</code>, <code>BEMJSON</code> | Text value or BEMJSON description of popup window content.|

Additional required HTML attributes could be specified in `attrs` field of BEMJSON.

## Block overview

### Modifiers of the block

<a name="theme"></a>

#### `theme` modifier

Available values: `simple`, `islands`.

Use case:

If `theme` modifier is not specified, [native](#native) representation of a control is applied.

Example:

<a name="default"></a>

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link' },
    switcher : 'Ссылка',
    popup : 'Hello, world!'
}
```


```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'simple' },
    switcher : 'Ссылка',
    popup : 'Hello, world!'
}
```


```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm' },
    switcher : 'Ссылка',
    popup : 'Hello, world!'
}
```
<a name="switcher"></a>

#### `switcher` modifier

Available values: `link`, `button`.

Use case:

`switcher` modifier is used to specify a control component. The following values are available:

* `link` - creates a pseudo link that opens popup. Block `link` is used as a control component.
* `button` - creates a button that opens popup. Block `button` is used as a control component.

Example:

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : 'Кнопка',
    popup : 'Hello, world!'
}
```
<a name="disabled"></a>

#### `disabled` modifier

Available value: `true`.

Use case:

`disabled` modifier is used to make block visible but not available for user action. In most cases to mark out the disabled block on a page, additional styles are applied.

`disabled` modifier prevents the following modifiers to be applied:

* `popup` cannot be opened by clicking a mouse and get `opened` modifier;
* `popup` block cannot get `visible` modifier;
* control component cannot be `focused`;
* `button` control component cannot get `hovered` modifier.

Example:

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm', disabled : true },
    switcher : 'Кнопка',
    popup : 'Hello, world!'
}
```
<a name="opened"></a>

#### `opened` modifier

Available value: `true`.

Use case:

`opened` modifier is set automatically on mouse click on a control component when `popup` is opened. The second click closes `popup` – `opened` modifier is removed.

Example:

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm', opened : true },
    switcher : 'Кнопка',
    popup : 'Hello, world!'
}
```
### Custom fields of the block

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
        switcher : 'Кнопка',
        theme : 'islands',
        size : 'xl'
    },
    switcher : 'Выпадающий список',
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
