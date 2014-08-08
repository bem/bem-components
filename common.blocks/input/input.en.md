# input

`input` block is designed to create different types of text fields:

* input field (default value);
* text area;
* password field;
* search form.

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
        <td>Defines name of an input field that is used for its identification.</td>
    </tr>
    <tr>
        <td>placeholder</td>
        <td>
            <code>String</code>
        </td>
        <td>A hint that describes expected value of an input field.</td>
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
        <td>Specifies maximum number of characters allowed in input field.</td>
    </tr>
    <tr>
        <td>tabIndex</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies the position of current <code>input</code> block in the tabbing order for current page.</td>
    </tr>
</table>

Additional required HTML attributes could be specified in `attrs` field of BEMJSON.

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
    block : 'input',
    placeholder : 'default'
}
```

**simple**

```bemjson
{
    block : 'input',
    mods : { theme : 'simple' },
    placeholder : 'simple'
}
```

**normal**

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size: 'm' },
    placeholder : 'normal'
}
```

<a name="size"></a>
### _size

Implemented only for theme `normal`.

Provides with size values to all types of text fields.

There are four sizes available: **s**, **s**, **l**, **xl**.

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
    block : 'input',
    mods : { theme : 'normal', size: 's' },
    placeholder : 'Small'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size: 'm' },
    placeholder : 'Medium'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size: 'l' },
    placeholder : 'Large'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size: 'xl' },
    placeholder : 'X-Large'
}
```

### _type

Following types of `input` block are available:

* text area (`input_type_textarea`)

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', type : 'textarea' },
    placeholder : 'Text area'
}
```

* password field (`input_type_password`)

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size: 'm', type : 'password' },
    placeholder : 'Password field'
}
```

* search form (`input_type_search`)

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', type : 'search' },
    placeholder : 'Search form'
}
```

If `type` modifier is not specified, `input` block obtains `<input type="text"/>` value by default.


### States of a block

#### _disabled

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing ‘Tab’, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', disabled : true },
    val : 'Disabled'
}
```

#### _focused

When a block is focused, a modifier ‘focused’ with ‘true’ value is set automatically, e.g. by pressing ‘Tab’ or clicking a mouse.

### _has-clear

`has-clear` modifier is set automatically when some data is entered into an input field. This modifier is used to add [`clear`](#clear_elem) element.

## Block elements

The following elements provide visual representation of `input` block:

<a name="clear_elem"></a>
### __clear

This element is used to clear `input` field content.

### __box

Element for grouping native `<input>` field and additional elements (e.g `clear`).

An auxiliary element is added to the block on template engine level.

### __control

An auxiliary element is added to the block on template engine level.
