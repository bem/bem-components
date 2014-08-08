# checkbox-group

`checkbox-group` block is a set of independent checkboxes ([checkbox](../checkbox/checkbox.en.md) block).

Block implementation allows a user to manage the appearance and state of nested checkboxes.

On a page `checkbox-group` block will be represented by `<span>` HTML element, with a nested set of checkboxes and their labels.

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
        <td>Checkbox group name. Represented by HTML attribute <code>name</code> of a nested block <code>input</code>.</td>
    </tr>
    <tr>
        <td>options</td>
        <td><code>Array</code></td>
        <td>An array of pairs that maps <code>text</code> to <code>val</code> for each checkbox. Each pair <code>name=val</code> within the array corresponds to one checkbox. Pair <code>name=val</code> is sent to a server, where name of a checkbox group is set by <code>name</code> field and its value – by <code>val</code> field.
            <br>The following <code>checkbox</code> block modifiers can be propagated to each checkbox of <code>options</code> array: <code>checked</code>, <code>disabled</code>.</td>
    </tr>
</table>

Additional required HTML attributes could be specified in `attrs` field of BEMJSON.

## Modifiers of a block

The following `checkbox-group` modifiers are propagated to each checkbox within the group:

### _theme

Block supports the following themes:

 * simple
 * normal (**NB!** Choosing a theme `normal` requires additional modifier [`size`](#size).)

If `theme` modifier is not specified, [native](#native) representation of a control is applied.

See following examples:

<a name="native"></a>
#### default

```bemjson
{
    block : 'checkbox-group',
    name : 'checkbox-default',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

#### simple

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'simple' },
    name : 'checkbox-simple',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

#### normal

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'l' },
    name : 'checkbox-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

### _size

Implemented only for theme `normal`.

Provides all types of checkbox groups with the size value.

There are four sizes available: **s**, **m**, **l**, **xl**.

Depending on a [type](#type) modifier value the following sizes are available:

<table>
    <tr>
        <th>Size</th>
        <th>Plain checkbox-group and
            <br>checkbox-group with
            <br><code>type</code> modifier
            <br>with <code>line</code> value
            <br>(<code>checkbox-group_type_line</code>).</th>
        <th>Checkbox group implemented
            <br>by <code>button</code> block
            <br>(<code>checkbox-group_type_button</code>).</th>
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
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 's', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'l', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'xl', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

<a name="type"></a>
### _type

The following types of `checkbox-group` block are available:

* `button`-based. Use `type` modifier with `button` value to create `checkbox-group` block implemented by [button](..button/button.en.md) block. Button-based checkboxes of a group are always aligned in line.

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

* `line`-aligned. Use `type` modifier with `line` value to align all checkboxes of the group in a line. Right gap is automatically added after each checkbox of the group except the last one. Implemented only for theme `normal`.

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm', type : 'line' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

### States of a block

#### _disabled

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing ‘Tab’, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

If `checkbox-group` block is disabled, all checkboxes within this group are also disabled. `checked` modifier value cannot be changed in disabled state.

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm', type : 'button', disabled : true },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true }
    ]
}
```
You can apply `disabled` modifier to a separate checkbox of a group.

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm', type : 'line' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'first', disabled : true },
        { val : 2, text : 'second' }
    ]
}
```

#### _focused

When a block is focused, a modifier ‘focused’ with ‘true’ value is set automatically, e.g. by pressing ‘Tab’ or clicking a mouse.
