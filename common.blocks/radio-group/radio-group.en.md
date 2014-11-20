# radio-group

`radio-group` block is a set of related radio switches (block [radio](../radio/radio.en.md)). It allows a user to select a single option from a group of options.

On a page, a `radio-group` block is represented as `<span>` HTML element with nested set of radio switches.

## Custom fields of a block

The following custom fields could be specified in BEMJSON declaration of the block:

<table>
    <tr>
        <th>Custom field name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>name</td>
        <td><code>String</code></td>
        <td><code>radio-group</code> name that is used for its identification. Specifies <code>name</code> HTML attribute to a nested <code>input</code> block.</td>
    </tr>
    <tr>
        <td>options</td>
        <td><code>Array</code></td>
        <td>An array of pairs that maps <code>text</code> to <code>val</code> for each switch in radio-group. Each pair <code>name=val</code> within the array corresponds to one radio switch. Pair <code>name=val</code> is sent to a server, where name of a radio group is set by <code>name</code> field and value of each radio switch – by <code>val</code> field.
            <br><code>disabled</code> modifier of <code>radio</code> block could be propagated to each radio switch of <code>options</code> array.</td>
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
    block : 'radio-group',
    name : 'radio-default',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

**simple**

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'simple' },
    name : 'radio-simple',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

**islands**

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

<a name="size"></a>
### _size

Implemented only for theme `islands`.

Provides to all types of `radio-group` with the size value.

There are four sizes available: **s**, **m**, **l**, **xl**.

Depending on a [type](#types) modifier value following sizes are available:

<table>
    <tr>
        <th>Size</th>
        <th>Default radio group</th>
        <th>Button-based radio group
            <br>(<code>radio-group_type_button</code>)</th>
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

See following examples:


```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 's', type : 'button' },
    name : 'Small',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'Medium',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'l', type : 'button' },
    name : 'Large',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'xl', type : 'button' },
    name : 'X-Large',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

<a name="types"></a>
### _type

The following types of `radio-group` block are available:

* `button`-based. Use `type` modifier with `button` value to create `radio-group` block implemented by [button](..button/button.en.md) block. Button-based radio switches of a group are always aligned in a line.

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

* `line`-aligned. Use `type` modifier with `line` value to align all radio switches in the group in a line. Right gap is automatically added after each switch in the group except for the last one. Implemented only for theme `islands`.

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'line' },
    name : 'radio-line',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

### _mode

`mode` modifier with `radio-check` value is implemented only for [`button`-based](#types) radio group (`radio-group_type_button`). This mode allows a user to check only one item from the group or leave all items unchecked. Click on a button changes its value to the opposite.

```bemjson
{
    block : 'radio-group',
    name : 'button-radio-check',
    mods : { theme : 'islands', size : 'm', type : 'button', mode : 'radio-check' },
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

### States of a block

### _disabled

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused, pressed or hovered. In most cases to mark out the disabled block on a page, additional styles are applied.

If `checkbox-group` block is disabled, all checkboxes within this group are also disabled. `checked` modifier value cannot be changed in `disabled` state.

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' },
        { val : 3, text : 'third' }
    ]
}
```
You can apply `disabled` modifier to separate switches in a group.

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'line' },
    name : 'radio-line',
    options : [
        { val : 1, text : 'first', disabled : true },
        { val : 2, text : 'second' },
        { val : 3, text : 'third' }
    ]
}
```

#### _focused

When a block is focused, a modifier `focused` with `true` value is set automatically, e.g. by pressing `Tab` or clicking a mouse.
