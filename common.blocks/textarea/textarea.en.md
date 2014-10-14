# textarea

`textarea` block is designed to create different types of text fields:

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
        <td>
            <code>String</code>
        </td>
        <td>Specifies value that will be sent to a server or obtained using client scripts. It is empty by default. Pair <code>name=val</code> is sent to a server, where name is set by <code>name</code> attribute and value – by <code>val</code> attribute.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td>Defines name of an text area that is used for its identification.</td>
    </tr>
    <tr>
        <td>placeholder</td>
        <td>
            <code>String</code>
        </td>
        <td>A hint that describes expected value of an text area.</td>
    </tr>
    <tr>
        <td>id</td>
        <td>
            <code>String</code>
        </td>
        <td>Unique block identifier. Should be specified manually in BEMJSON file.</td>
    </tr>
    <tr>
        <td>maxLength</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies maximum number of characters allowed in text area.</td>
    </tr>
    <tr>
        <td>tabIndex</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies the position of current <code>textarea</code> block in the tabbing order for current page.</td>
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
    block : 'textarea',
    placeholder : 'default'
}
```

**simple**

```bemjson
{
    block : 'textarea',
    mods : { theme : 'simple' },
    placeholder : 'simple'
}
```

**islands**

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'islands'
}
```

<a name="size"></a>
### _size

Implemented only for theme `islands`.

Provides with size values to all types of text fields.

There are four sizes available: **s**, **m**, **l**, **xl**.

<table>
    <tr>
        <th>Size</th>
        <th>Font size</th>
        <th>String height</th>
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
    block : 'textarea',
    mods : { theme : 'islands', size: 's' },
    placeholder : 'Small'
}
```

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'Medium'
}
```

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'l' },
    placeholder : 'Large'
}
```

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'xl' },
    placeholder : 'X-Large'
}
```

### States of a block

#### _disabled

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing ‘Tab’, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm', disabled : true },
    val : 'Disabled'
}
```

#### _focused

When a block is focused, a modifier ‘focused’ with ‘true’ value is set automatically, e.g. by pressing ‘Tab’ or clicking a mouse.


## Block elements

The following elements provide visual representation of `textarea` block:

### __control

An auxiliary element is added to the block on template engine level.
