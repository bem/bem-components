# radio-group

The block is a set of related radio switches (block [radio](../radio/radio.en.md)).

## Short information

### Modifiers of a block

| Modifier | Valid values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#type>type</a> | <code>'button'</code>, <code>'line'</code> | <code>BEMJSON</code> | Aligns radio switches. |
| <a href=#mode>mode</a> | <code>'radio-check'</code> | | Allows to choose one element or none. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code> | In focus. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Makes block unavailable. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code>  | <code>BEMJSON</code> | Radio switch size. |
| <a href=#theme>theme</a> | <code>'simple'</code>, <code>'islands'</code> | <code>BEMJSON</code> | Styling. |

### Custom fields of a block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href=#name>name</a> | <code>String</code> | `radio-group` name that is used for its identification. |
| <a href=#options>options</a> | <code>Array</code> | An array of pairs that maps `text` to `val` for each switch in radio-group. |

Additional required HTML attributes could be specified in `attrs` field of BEMJSON.

## Block overview

The block allows a user to select a single option from a group of options.

On a page, a `radio-group` block is represented as `<span>` HTML element with nested set of radio switches.

### Modifiers of a block

<a name="type"></a>
#### `type`

Valid values: `'button'`, `'line'`.

Use case: `BEMJSON`.

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

<a name="mode"></a>
#### `mode`

Valid value: `radio-check`.

Use case:

`mode` modifier with `radio-check` value is implemented only for [`button`-based](#types) radio group (`radio-group_type_button`). This mode allows a user to check only one item from the group or leave all items unchecked. Click on a button changes its value to the opposite.

Example:

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

<a name="focused"></a>
#### `focused`

Valid value: `true`.

Use case: `BEMJSON`.

When a block is focused, a modifier `focused` with `true` value is set automatically, e.g. by pressing `Tab` or clicking a mouse.

<a name="disabled"></a>
#### `disabled`

Valid value: `true`.

Use cases: `BEMJSON`, `JS`.

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused, pressed or hovered. In most cases to mark out the disabled block on a page, additional styles are applied.

If `checkbox-group` block is disabled, all checkboxes within this group are also disabled. `checked` modifier value cannot be changed in `disabled` state.

Example:

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name : 'radio-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```
You can apply `disabled` modifier to separate switches in a group.

Example:

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

<a name="size"></a>
#### `size`

Valid values: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Implemented only for theme `islands`.

Provides to all types of `radio-group` with the size value.

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

<a name="theme"></a>
#### `theme`

Valid values: `'simple'`, `'islands'`.

Use case: `BEMJSON`.

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

### Custom fields of a block

<a name="name"></a>
#### `name`

`radio-group` name that is used for its identification. Specifies `name` HTML attribute to a nested `input` block.

<a name="options"></a>
#### `options`

An array of pairs that maps `text` to `val` for each switch in radio-group. Each pair `name=val` within the array corresponds to one radio switch. Pair `name=val` is sent to a server, where name of a radio group is set by `name` field and value of each radio switch – by `val` field.
`disabled` modifier of `radio` block could be propagated to each radio switch of options `array`.
