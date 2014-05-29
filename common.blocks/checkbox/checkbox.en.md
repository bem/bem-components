# checkbox

Block `checkbox` is a graphical user interface element that permits the user to make a binary choice.

The block creates a container that includes a native checkbox control (`control` element) `<input class="checkbox__control" type="checkbox" attributes>` and uses its functionality. A native control is hidden. An `autocomplete` attribute is `off` by default.

```bemjson
{
    block : 'checkbox',
    text : 'Label 1',
    name: 'name1',
    value: '1'
}
```

## ## Valid block's attributes

Valid block's attributes could be specified in the corresponding fields of the block BEMJSON file:

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
        <td>Specifies a checkbox name. A mandatory attribute. The name part of the name/value pair associated with this element for the purposes of form submission.</td>
    </tr>
    <tr>
        <td>val</td>
            <code>String</code>
        <td>Specifies a checkbox value. The value part of the name/value pair associated with this element for the purposes of form submission.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>An icon that is rendered using an `icon` block.</td>
    </tr>
</table>

##  Block's modifiers

### Themes `_theme`

The block supports the following themes:

 * simple
 * normal

It a `_theme` modifier is not specified the native representation (`default`) of a control is available.

Following example demonstrates this:

* default

    ```bemjson
    {
        block : 'checkbox',
        text : 'default',
        name: 'default',
        value: '1'
    }
    ```

* simple

    ```bemjson
    {
        block : 'checkbox',
        mods : { theme : 'simple' },
        text : 'Theme Simple',
        name: 'simple',
        value: '2'
    }
    ```

* normal

    ```bemjson
    {
        block : 'checkbox',
        mods : { theme : 'normal', size : 'm' },
        text : 'Theme Normal',
        name: 'normal',
        value: '3'
    }
    ```

### Font size `_size`

Mandatory modifier for *normal* theme only.
Provides the font size value to the checkbox text elements.

There are four sizes available: **S**, **M**, **L**, **XL**.

Following example demonstrates this:

<table>
    <tr>
        <th>Size/Parameters</th>
        <th>Font size</th>
        <th>String height</th>
        <th>Example</th>
    </tr>
    <tr>
        <th>S</th>
        <td>13px</td>
        <td>24px</td>
        <td>
            <pre><code>
{
    block : 'checkbox',
    mods : {
        theme : 'normal',
        size : 's'
    },
    text : 'Size S',
    name: 'name1',
    value: '1'
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
    block : 'checkbox',
    mods : {
        theme : 'normal',
        size : 'm'
    },
    text : 'Size M',
    name: 'name2',
    value: '2'
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
    block : 'checkbox',
    mods : {
        theme : 'normal',
        size : 'l'
    },
    text : 'Size L',
    name: 'name3',
    value: '3'
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
    block : 'checkbox',
    mods : {
        theme : 'normal',
        size : 'xl'
    },
    text : 'Size XL',
    name: 'name4',
    value: '4'
}
            </code></pre>
        </td>
    </tr>
</table>

### Types `_type`

The `checkbox` block can be rendered as a buttons. For this use a `type` modifier with a `button` value. In this case a `checked` state of a checkbox is defined by clicking the button.

```bemjson
{
    block : 'checkbox',
    mods : {
        theme : 'normal',
        size : 'm',
        type : 'button'
    },
    text : 'Label',
    name: 'button',
    value: '1'
}
```

### States of a checkbox

#### `_focused`

Checkbox is focused if a block has a `focused` modifier with a `true` value.

You can tick off the focused checkbox using `Space` button on your keyboard. To switch between controls use a `Tab` button.

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

If a `disabled` modifier has `true` value the checkbox is visible, but is not available for the user action.

Disabled checkbox cannot be focused by `Tab` pressing or mouse click.


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

A `checked` modifier with `true` value ticks off the checkbox, or clicks a button if a checkbox has `{ type : 'button' }` modifier.

A `checked` modifier can be used for all checkboxes in the group.ппе.

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

The `box` element is used to draw the checkbox. A native checkbox is hidden.

The `box` element is added to the block on a template engine level.

### `__control`

The `control` element is used to provide native control checkbox functionality.

The `control` element is added to the block on a template engine level.

### `__tick`

The element is used to display the tick on the checkbox.

There is a vector image of a tick (`background-image`) in svg format .In the CSS property of the element `tick` is a vector image ticks `background-image` in svg format.
Элемент для отображения галочки в поле чекбокса.

В CSS-свойстве элемента `tick` находится векторное изображение «галочки» `background-image` в формате svg.



