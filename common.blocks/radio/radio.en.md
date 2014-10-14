# radio

`radio` block is used to create a single radio switch. It can be implemented by a radio switch or by a button (block [button](../button/button.en.md)). `radio` block allows a user to manage state, content and type of radio switches.

[radio-group](../radio-group/radio-group.en.md) could be  composed by `radio` blocks.

As a result of template appliance, it will be rendered to `<label>` HTML element, with following set of nested items:

* `box` element with hidden nested `input` HTML element;
* a radio switch label, if the `text` BEMJSON attribute is specified.

Block is implemented with native `input` HTML element with `type` attribute set to `radio`: `<input name="name" type="radio">`. If `theme` modifier is set, the `input` element is hidden by default.

## Custom fields of a block

The following custom fields could be specified in BEMJSON declaration of the block:

<table>
    <tr>
        <th>Custom field name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>name</code></td>
        <td><code>String</code></td>
        <td>Radio switch name that is used for its identification. Specifies <code>name</code> HTML attribute to a nested <code>input</code> block.</td>
    </tr>
    <tr>
        <td><code>val</code></td>
        <td><code>String</code></td>
        <td>Specifies value that will be sent to a server or obtained using client scripts.
            <br>Pair <code>name=val</code> is sent to a server, where name is set by <code>name</code> attribute and value – by <code>val</code> attribute.
            <br>Specifies <code>value</code> HTML attribute to a nested <code>input</code> block.</td>
    </tr>
    <tr>
        <td><code>text</code></td>
        <td><code>String</code></td>
        <td>Specifies a label for the radio switch.</td>
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
    block : 'radio',
    name : 'radio-simple',
    text : 'radio switch'
}
```

**simple**

```bemjson
{
    block : 'radio',
    mods : { theme : 'simple' },
    name : 'radio-simple',
    text : 'radio switch'
}
```

**islands**

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    text : 'radio switch'
}
```

<a name="size"></a>
### _size

Implemented only for theme `islands`.
Provides to all types of radio switches with the size value.

Depending on `type` modifier the following sizes are available:

<table>
    <tr>
        <th>Size</th>
        <th>Default radio switch</th>
        <th>Button radio switch
            <br>(<code>radio_type_button</code>)</th>
    </tr>
    <tr>
        <th>s</th>
        <td>–</td>
        <td>+</td>
    </tr>
    <tr>
        <th>m</th>
        <td>+</td>
        <td>+</td>
    </tr>
    <tr>
        <th>l</th>
        <td>+</td>
        <td>+</td>
    </tr>
    <tr>
        <th>xl</th>
        <td>–</td>
        <td>+</td>
</table>

### _type

Use `type` modifier with `button` value to create a radio switch based on [button](../button/button.en.md) block – `button_togglable_radio`.

`radio` block is mixed with `button` block with nested `control` element. As a result, the following `button` block states could be propagated to this type os radio switch:

*  `hovered`
*  `pressed`

In addition `role="button"` HTML attribute is set to the block.

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    text : 'radio switch'
}
```

### States of a block

#### _checked

Modifier defines that radio switch is selected.

The modifier is set automatically:

* by clicking a mouse (next click does not release the radio switch);
* by pressing `Enter` or `Space` key if radio switch is in focus (key type depends on a browser settings);
* by pressing an arrow key if one of the next radio switches is in focus. Neighbour switch can be either a part of the same [radio group](../radio-group/radio-group.en.md) or independent switch nested in the same block.

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', checked : true },
    content : 'checked'
}
```

#### _disabled

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing ‘Tab’, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', disabled : true },
    name : 'radio-islands',
    text : 'disabled'
}
```

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name : 'radio-islands',
    text : 'disabled'
}
```

#### _focused

When a block is focused, a modifier ‘focused’ with ‘true’ value is set automatically, e.g. by pressing ‘Tab’ or clicking a mouse.

## Elements of a block

### __box

`box` element is used in basic block implementation as a container with nested control element (`control` element). It is represented as `<span>` HTML element. An auxiliary element is added to the block on template engine level.

### __control

`control` element is represented as `<input>` HTML element with specified `type="radio"` attribute. An auxiliary element is added to the block on template engine level.
