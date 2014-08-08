# checkbox

`checkbox` block allows a user to select ZERO or MORE options of a limited number of choices.

Block creates a container that includes a native checkbox control (`control` element) `<input class="checkbox__control" type="checkbox" attributes>` that is hidden if [theme](#theme) modifier is specified.

`autocomplete` attribute is forced by templates to `off` state to provide correct behavior of the block.

```bemjson
{
    block : 'checkbox',
    text : 'Item 1',
    name: 'name1',
    val: '1'
}
```

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
        <td>Specifies text of a checkbox. Specifies <code>text</code> HTML attribute to a checkbox.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td>Checkbox name that is used for its identification.</td>
    </tr>
    <tr>
        <td>val</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies value that will be sent to a server or obtained using client scripts. Pair <code>name=val</code> is sent to a server, where name is set by <code>name</code> attribute and value – by <code>val</code> attribute.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>An icon that is rendered using an <code>icon</code> block.</td>
    </tr>
</table>

Additional required HTML attributes could be specified in `attrs` field of BEMJSON.

## Modifiers of a block

<a name="theme"></a>
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
    block : 'checkbox',
    text : 'Default',
    name: 'default',
    val: '1'
}
```

**simple**

```bemjson
{
    block : 'checkbox',
    text : 'Theme simple',
    name: 'simple',
    val: '2',
    mods : { theme : 'simple' }
}
```

**normal**

```bemjson
{
    block : 'checkbox',
    text : 'Theme normal',
    name: 'normal',
    val: '3',
    mods : { theme : 'normal', size : 'm' }
}
```

<a name="size"></a>
### _size

Implemented only for theme `normal`.

Provides checkbox text elements with font size value.

There are two sizes available: **m**, **l**.

<table>
    <tr>
        <th>Block size</th>
        <th>Font size</th>
        <th>String height of <code>box</code> element</th>
    </tr>
    <tr>
        <th>m</th>
        <td>13px</td>
        <td>14px</td>
    </tr>
    <tr>
        <th>l</th>
        <td>15px</td>
        <td>17px</td>
    </tr>
</table>

See following examples:

```bemjson
{
    block : 'checkbox',
    text : 'Size M',
    name: 'name2',
    val: '2',
    mods : { theme : 'normal', size : 'm' }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Size L',
    name: 'name3',
    val: '3',
    mods : { theme : 'normal', size : 'l' }
}
```

### _type

Checkbox can be implemented by a button. For this purpose use modifier `type` with `button` value. Press the button to select a checkbox.

All [button](../button/button.en.md) block modifiers are propagated to `checkbox`.

```bemjson
{
    block : 'checkbox',
    text : 'Checkbox',
    name: 'button',
    val: '1',
    mods : { theme : 'normal', size : 'm', type : 'button' }
}
```

### States of a block

#### _checked

`checked` modifier with `true` value defines checkbox as selected.

`checked` modifier can be used for all checkboxes within the group.

```bemjson
{
    block : 'checkbox',
    text : 'Checked',
    name: 'name1',
    val : 1,
    mods : { theme : 'normal', size : 'm', checked : true }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Checked',
    name: 'name2',
    val : 2,
    mods : { theme : 'normal', size : 'm', type : 'button', checked : true }
}
```

#### _disabled

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing ‘Tab’, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

```bemjson
{
    block : 'checkbox',
    text : 'Disabled',
    name: 'name1',
    val : 1,
    mods : { theme : 'normal', size : 'm', disabled : true }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Disabled',
    name: 'name2',
    val : 2,
    mods : { theme : 'normal', size : 'm', type : 'button', disabled : true }
}
```

#### _focused

When a block is focused, a modifier ‘focused’ with ‘true’ value is set automatically, e.g. by pressing ‘Tab’ or clicking a mouse.

Checkbox implemented by a button has yellow shadow in `focused` state.

## Elements of a block

### __box

`box` element is used to draw the checkbox. Native checkbox is hidden.

`box` element is added to the block on template engine level.

### __control

An auxiliary element is used to provide native control checkbox functionality.

`control` element is added to the block on template engine level.
