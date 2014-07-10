# checkbox

Block `checkbox` is a graphical user interface element that allows user to make a binary choice. The block is used when more then one case should be selected.

Block creates a container that includes a native checkbox control (`control` element) `<input class="checkbox__control" type="checkbox" attributes>` that is hidden if a `theme` modifier is specified.

`autocomplete` attribute is forced to `off` state to provide correct behavior of the block.

```bemjson
{
    block : 'checkbox',
    text : 'Вариант 1',
    name: 'name1',
    val: '1'
}
```

## Valid block's attributes

Valid block's attributes could be specified within the corresponding fields of the block BEMJSON file:

<table>
    <tr>
        <th>Attribute</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>text</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies text string value of a checkbox.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies a checkbox name. A mandatory attribute. The name part of the name/val pair associated with this element for form's submission purposes.</td>
    </tr>
    <tr>
        <td>val</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies a checkbox value. Value part of the name/val pair associated with this element for the form's submission purposes.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>An icon that is rendered using an <code>icon</code> block.</td>
    </tr>
</table>

##  Block's modifiers

### _theme

Block supports following themes:

 * simple
 * normal

If a `theme` modifier is not specified, the native representation (*default*) of a control is available.

See the following examples for demonstration:

**default**

```bemjson
{
    block : 'checkbox',
    text : 'default',
    name: 'default',
    val: '1'
}
```

**simple**

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'simple' },
    text : 'Тема Simple',
    name: 'simple',
    val: '2'
}
```

**normal**

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm' },
    text : 'Тема Normal',
    name: 'normal',
    val: '3'
}
```

### _size

Mandatory modifier for *normal* theme only.
Provides checkbox text elements with font size value.

There are two sizes available: **M**, **L**.

See the following examples for demonstration:

<table>
    <tr>
        <th>Block size</th>
        <th>Font size</th>
        <th>String height<br>of <code>__box</code></th>
        <th>Example</th>
    </tr>
    <tr>
        <th>M</th>
        <td>13px</td>
        <td>14px</td>
        <td>
            <pre><code>
{
    block : 'checkbox',
    mods : {
        theme : 'normal',
        size : 'm'
    },
    text : 'Size M',
    name: 'name2',
    val: '2'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>L</th>
        <td>15px</td>
        <td>17px</td>
        <td>
            <pre><code>
{
    block : 'checkbox',
    mods : {
        theme : 'normal',
        size : 'l'
    },
    text : 'Size L',
    name: 'name3',
    val: '3'
}
            </code></pre>
        </td>
    </tr>
</table>

### _type

The `checkbox` block can be rendered as a button. If needed, use `type` modifier with `button` value. In this case `checked` state of a checkbox is defined by clicking the button.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', type : 'button' },
    text : 'Checkbox',
    name: 'button',
    val: '1'
}
```

### States of a checkbox

#### _focused

Checkbox is focused if block has `focused` modifier with `true` value. If block is designed as a button, in `focused` state it has a yellow shadow.

You can tick off the focused checkbox using `Space` or `Enter` button on your keyboard. To switch between controls use a `Tab` button.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', focused : true },
    text : 'Focused',
    name: 'name1',
    val : 1
}
```

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', type : 'button', focused : true },
    text : 'Focused',
    name: 'name2',
    val : 2
}
```

#### `_disabled`

If `disabled` modifier has `true` value, the checkbox is visible but not available for user's action.

Disabled checkbox cannot be focused by pressing `Tab` or on mouse click.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', disabled : true },
    text : 'Disabled',
    name: 'name1',
    val : 1
}
```

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', type : 'button', disabled : true },
    text : 'Disabled',
    name: 'name2',
    val : 2
}
```
#### `_checked`

`checked` modifier with `true` value defines checkbox as checked.

`checked` modifier can be used for all checkboxes within the group.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', checked : true },
    text : 'Checked',
    name: 'name1',
    val : 1
}
```

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', type : 'button', checked : true },
    text : 'Checked',
    name: 'name2',
    val : 2
}
```

## Block's elements

### `__box`

`box` element is used to draw the checkbox. Native checkbox is hidden.

`box` element is added to the block on template engine level.

### `__control`

`control` element is used to provide native control checkbox functionality.

`control` element is added to the block on template engine level.
