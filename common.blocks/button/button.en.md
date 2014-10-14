# button

`button` block is used to manage size, state, content and appearance of a button.

## Custom fields of a block

The following custom fields could be specified in BEMJSON declaration of the block:

<table>
    <tr>
        <th>Custom field name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>text</td>
        <td>
            <code>String</code>
        </td>
        <td>Text of a button. Specifies <code>text</code> HTML attribute to a button.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>Button with an icon realized by <a href="../icon/icon.en.md">icon</a> block.</td>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>URL address. It is used only for a <a href="#link-button">button with link behavior</a>.
            <br>Specifies <code>href</code> HTML attribute to a button.</td>
    </tr>
    <tr>
        <td>id</td>
        <td>
            <code>String</code>
        </td>
        <td>Unique identifier of a button.
            <br><br>Specifies <code>id</code> HTML attribute to a button.</td>
    </tr>
    <tr>
        <td>tabIndex</td>
        <td>
            <code>String</code>
        </td>
        <td>Defines tab order between the buttons.</td>
    </tr>
    <tr>
        <td>value</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies value that will be sent to a server or obtained using client scripts. It is empty by default. Pair <code>id=val</code> is sent to a server, where id is set by <code>id</code> attribute and value – by <code>val</code> attribute.</td>
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
    block : 'button',
    text : 'No theme'
}
```

**simple**

```bemjson
{
    block : 'button',
    text : 'Theme simple',
    mods : { theme : 'simple' }
}
```

**islands**

```bemjson
{
    block : 'button',
    text : 'Theme islands',
    mods : { theme : 'islands', size : 'm' }
}
```

<a name="size"></a>
### _size

Implemented only for theme `islands`.

Provides all types of buttons with `size` value.

There are four sizes available: **s**, **m**, **l**, **xl**.

<table>
     <tr>
        <th>Size</th>
        <th>Font size</th>
        <th>Button height</th>
    </tr>
    <tr>
        <th>s</th>
        <td>13px</td>
        <td>24px</td>
    </tr>
    <tr>
        <th>m</th>
        <td>13px</td>
        <td>28px</td>
    </tr>
    <tr>
        <th>l</th>
        <td>15px</td>
        <td>32px</td>
    </tr>
    <tr>
        <th>xl</th>
        <td>18px</td>
        <td>38px</td>
    </tr>
</table>

See following examples:

```bemjson
{
    block : 'button',
    text : 'Small',
    mods : { theme : 'islands', size : 's' }
}
```

```bemjson
{
    block : 'button',
    text : 'Medium',
    mods : { theme : 'islands', size : 'm' }
}
```

```bemjson
{
    block : 'button',
    text : 'Large',
    mods : { theme : 'islands', size : 'l' }
}
```

```bemjson
{
    block : 'button',
    text : 'X-large',
    mods : { theme : 'islands', size : 'xl' }
}
```

### _type

If `type` modifier is not specified for the block, islands button will be represented by default.

<a name="link-button"></a>
#### Button with link behavior

Use `type` modifier with `link` value to create a button that behaves like a link.

Specify additional `url` attribute in BEMJSON input data for this button type.

```bemjson
{
    block : 'button',
    url : '#',
    text : 'Link behavior',
    mods : { theme : 'islands', size : 'm', type : 'link' }
}
```

#### Form submit button

Use `type` modifier with `submit` value to create a button for data sending to a server (submit). This button type implemented for buttons located inside a form.

```bemjson
{
    block : 'button',
    text : 'Submit',
    mods : { theme : 'islands', size : 'm', type : 'submit' }
}
```

### States of a block

#### _disabled

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused, pressed or hovered. In most cases to mark out the disabled block on a page, additional styles are applied.

```bemjsom
{
    block : 'button',
    text : 'Disabled',
    mods : { theme : 'islands', size : 'm', disabled : true }
}
```

#### _focused

When a block is focused, a modifier ‘focused’ with ‘true’ value is set automatically, e.g. by pressing ‘Tab’ or clicking a mouse.

#### _togglable

Defines a behavior of the pressed button.

The following values of `togglable` modifier are available:

* `check` – the first click presses the button, and the second releases it.

```bemjson
{
    block : 'button',
    text : 'Check',
    mods : { theme : 'islands', size : 'm', togglable : 'check' },
}
```

* `radio` – the first click presses the button and it cannot be released by the next click.

```bemjson
{
    block : 'button',
    text : 'Radio',
    mods : { theme : 'islands', size : 'm', togglable : 'radio' }
}
```
#### _hovered

Defines “hovered” state of a button.

#### _pressed

Defines “pressed” state of a button.

### _view

#### _action

Implemented only for theme `islands`.

Visually highlights a button with yellow colour on a page. Could be used as a promo button.

```bemjson
{
    block : 'button',
    type : 'submit',
    text : 'Action',
    mods : { theme : 'islands', size : 'm', view : 'action' }
}
```

#### _pseudo

Implemented only for theme `islands`.

This modifier changes visual representation of a button. With `view` modifier set to `pseudo`, the background of a button becomes transparent.

```bemjson
{
    block : 'button',
    text : 'Pseudo',
    mods : { theme : 'islands', size : 'm', view : 'pseudo' }
}
```

If pseudo button is disabled, its borders disappear.

```bemjson
{
    block : 'button',
    text : 'Disabled',
    mods : { theme : 'islands', size : 'm', view : 'pseudo', disabled : true }
}
```

## Elements of a block

### __text

An auxiliary element that is added to the block on template engine level.
