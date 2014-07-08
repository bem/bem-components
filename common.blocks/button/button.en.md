# button

The `button` block is used for different types of buttons creation. It allows you to manage size, sate, content and appearance of a button.

## Button use cases

* button – is used to create the majority of web inteface buttons. Used by default.
* link-button – a button that provides link functionality. Must have a mandatory modifier `type` with `link` value.
* action button – a button designed to send data to the server (submit). Must be always located inside a form. Sets `type` modifier with `submit` value in BEMJSON to create an action button.

## Valid block's attributes

Valid block's attributes could be specified in corresponding fields of block's BEMJSON file:

<table>
    <tr>
        <th>Attributes</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>text</td>
        <td>
            <code>String</code>
        </td>
        <td>Text of a button.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>Button with an icon provided by an <code>icon</code> block.</td>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>URL address. It is used only if <code>button_type_link</code> modifier is specified. In this case a button
            acts as a link and <code>url</code> value is represented as a <code>href</code> attribute.
        </td>
    </tr>
    <tr>
        <td>id</td>
        <td>
            <code>String</code>
        </td>
        <td>Unique identifier of a button.</td>
    </tr>
    <tr>
        <td>tabindex</td>
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
        <td>Value to be sent to a server. It is empty by default.</td>
    </tr>
</table>

The other valid block's attributes could be specified in the `attrs` field in BEMJSON.

## Block's modifiers

### _theme

The block supports the following themes:

 * simple
 * normal

If a `theme` modifier is not specified, the native representation (*default*) of a control is available.

Following examples demonstrate this:

**default**

```bemjson
{
    block : 'button',
    text : 'Theme is not specified'
}
```

**simple**

```bemjson
{
    block : 'button',
    mods : { theme : 'simple' },
    text : 'Simple theme'
}
```

**normal**

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    text : 'Normal theme'
}
```

### _size

Mandatory modifier that is available for *normal* theme only.

Provides all types of buttons with the `size` value.

There are four sizes available: **S**, **M**, **L**, **XL**.

Following examples demonstrate this:

<table>
  <tr>
    <th>Size</th>
    <th>Font size</th>
    <th>Button height</th>
    <th>Example</th>
  </tr>
  <tr>
        <th>S</th>
        <td>13px</td>
        <td>24px</td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 's' },
    text : 'Small'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>M</th>
        <td>13px</td>
        <td>28px</td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    text : 'Medium'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>L</th>
        <td>15px</td>
        <td>32px</td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 'l' },
    text : 'Large'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>XL</th>
        <td>18px</td>
        <td>38px</td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 'xl' },
    text : 'X-large'
}
            </code></pre>
        </td>
    </tr>
</table>

### _type

The block could be represented as a `link-button` (`button_type_link`).

This button type has mandatory attribute `url` that should be specified in BEMJSON input data. A link-button has an `<a>` attribute. `url` value becomes `href` attribute.

```
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', type : 'link' },
    url : '#',
    text : 'Link-button'
}
```

### Button's states

#### _disabled

If `disabled` modifier has `true` value, button is visible but not available for user action.

Disabled button cannot be focused by pressing a `Tab` or on mouse click.

```bemjsom
{
    block : 'button',
    text : 'Disabled',
    mods : { theme : 'normal', size : 'm', disabled : true }
}
```

#### _focused

If `focused` modifier has `true` value, the button is always focused. You can click the focused button using `Space` or `Enter` button on your keyboard. To switch between controls use a `Tab` button.

```bemjson
{
    block : 'button',
    text : 'Focused',
    mods : { theme : 'normal', size : 'm', focused : true }
}
```

#### _hovered

Defines "hover" action.

#### _pressed

Defines "pressed" state of a button.

#### _togglable

Defines a state of the pressed button when the first click presses the button, and the second returns it to its original state.

```bemjson
{
    block : 'button',
    text : 'Togglable',
    mods : { theme : 'normal', size : 'm', togglable : true }
}
```

#### _action

Visually highlights a button on a page.


```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', action : true },
    type : 'submit',
    text : 'Action'
}
```

#### _pseudo

If `pseudo` modifier has `true` value, the button background becomes transparent.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', pseudo : true },
    text : 'pseudo'
}
```
If pseudo button is disabled, its boarders disappear.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', pseudo : true, disabled : true },
    text : 'pseudo'
}
```

## Block's elements

### __text

This auxiliary element sets a text position inside the button.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    icon : {
        block : 'icon',
        mods : { action : 'download' }
    },
    text : 'With icon'
}
```

## Block's dependencies

* `control`, that provides public API for the controls
* `i-bem__dom`
* `keyboard`
