# select

`select` block is used for creation of different types of popups with menu-items list for selection. `select` is based on the following blocks:

* [button](../button/button.en.md)
* [popup](../popup/popup.en.md)
* [menu](../menu/menu.en/md)
* [menu-item](../menu-item/menu-item.en.md)

`select` is visually represented by a button and popup list of menu items. Mouse click opens popup above or below a button, depending on its position on a page (`{ directions : ['bottom-left', 'bottom-right', 'top-left', 'top-right'] }`). Click outside the popup area automatically hides it (`{ autoclosable : true }`).

Dropdown list allows user to choose:

* a single value from the list ([`select_mode_radio`](#radio-select));
* a single, multiple or none values from the list ([`select_mode_check`](#multiple-choice));
* a single or none values from the list ([`select_mode_radio-check`](#single-choice)).

## Block attributes

Block provides the following attributes that could be specified in corresponding fields of BEMJSON declaration:

<table>
    <tr>
        <th>Attribute</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td>Name of <code>select</code>.</td>
    </tr>
    <tr>
        <td>id</td>
        <td>
            <code>String</code>
        </td>
        <td>Unique identifier of <code>select</code> block.</td>
    </tr>
    <tr>
        <td>options</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>Defines a list of <code>menu-items</code>. Each item has mandatory attribute <code>val</code> realized by hidden element <code>control</code>.</td>
    </tr>
    <tr>
        <td>textMaxWidth</td>
        <td>
            <code>String</code>
        </td>
        <td>Defines maximum width of <code>button</code> from <code>select</code> block. <code>popup</code> width depends on width of <code>menu-item</code>.</td>
    </tr>
    <tr>
        <td>optionsMaxHeight</td>
        <td>
            <code>String</code>
        </td>
        <td>Defines maximum height of <code>popup</code>.
            <br> If all <code>menu-items</code> cannot be located within <code>popup</code>, scroll element appears.
            <br> If value of <code>optionsMaxHeight</code> attribute is not specified, height of <code>popup</code> depends on total height of all <code>menu-items</code>'.</td>
    </tr>
    <tr>
        <td>text</td>
        <td>
            <code>String</code>
        </td>
        <td>Default text of <code>button</code> when any <code>menu-item</code> is not chosen.
            <br> This attribute is used for <code>select</code> with the following specified modifiers: <code>select_mode_check</code> and <code>select_mode_radio-check</code>.</td>
    </tr>
</table>

All other needed block attributes could be specified in `attrs` field in BEMJSON.

## Block modifiers

### _theme

Block supports the following themes:

* simple
* normal (**NB!** This theme requires additional modifier [`size`](../button/button.en.md))

If `theme` modifier is not specified, [custom](#custom) representation of a control is applied (without CSS styles).

See the following examples for demonstration:

<a name="custom"></a>
**custom**

```bemjson
{
    block : 'select',
    mods : { mode : 'radio' },
    name : 'select1',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

**simple**

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'simple' },
    name : 'select1',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

**normal**

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'normal', size : 'm' },
    name : 'select1',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

### _mode

Use `mode` modifier to define a type of `select`:

<a name="multiple-choice"></a>
* Multiple-choice select (`select_mode_check`) allows user to check more than one menu item from the list or leave all items unchecked. Click on menu item changes its value to the opposite.

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'normal', size : 'm' },
    name : 'select1',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third', checked : true }
    ]
}
```

<a name="radio-select"></a>
* Radio-select (`select_mode_radio`) is used to allow user a single choice.
Text in the button of `select` block depends on a chosen menu item. The first item is represented as a button text by default.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'normal', size : 'm' },
    name : 'select2',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

<a name="rsingle-choice"></a>
* Single-choice select (`select_mode_radio-check`) allows user to check only one menu item from the list or leave all items unchecked. Click on menu item changes its value to the opposite.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'normal', size : 'm' },
    name : 'select3',
    text : '–',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

### Select states

#### _width

To set the ability of select button's width to fit the width of the chosen item, use `width` modifier with `available` value.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'normal', size : 'm', width : 'available' },
    name : 'select4',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second second second second second second second second' },
        { val : 3, text : 'third' }
    ]
}
```

#### _focused

Block could be focused in different ways, e.g. by pressing `Tab` or on mouse click. In this case `focused` modifier with `true` value is set automatically.

## Block elements

### __button

`select` block is visually represented by a button (block [button](../button/button.en.md)) that contains an icon `<i>` (block [icon](../icon/icon.en.md)) with mixed element `tick`. Size of the icon is specified by `button` block size. Click the button opens popup with options.

The following modifiers of `button` could be propagate to `select` block:

* `theme`
* `size`
* `focused`
* `checked`
* `disabled`

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'normal', size : 'm', disabled : true },
    name : 'select5',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

## __menu

`menu` element allows user to manage `menu-items` within selection list:

* `val` – value to be sent to a server when menu item is chosen. This attribute could contain unique identifier `{ val : { id : 1 } }`.
* `text` – name of menu item.
* `checked` – state that is set to `menu-item`, e.g. on mouse click.
* `checkedText` – text represented within select's button instead of chosen menu item name. This attribute is used for [multiple-choice](#multiple-choice) select.
* `icon` – graphical element (icon).

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'normal', size : 'm' },
    name : 'select5',
    text : '—',
    options : [
        {
            val : { id : 1 },
            text : 'Twitter',
            checkedText : 'tw',
            icon : { block : 'icon', mods : { social : 'twitter' } }
        },
        {
            val : { id : 2 },
            text : 'VKontakte',
            checkedText : 'vk',
            icon : { block : 'icon', mods : { social : 'vk' } },
            checked : true
        }
    ]
}
```

`menu-items` could be grouped by `group` element. Group name is specified by `title` attribute.

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'normal', size : 'm' },
    name : 'select5',
    text : 'empty',
    options : [
        {
            group : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true },
                { val : 3, text : 'third' }
            ],
            title : 'title of group 1'
        },
        {
            group : [
                { val : 4, text : 'fourth' },
                { val : 5, text : 'fifth', checked : true },
                { val : 6, text : 'sixth', disabled : true }
            ]
        }
    ]
}
```

## __control

`control` element is added to the block on template engine level and used to draw `menu-item`s in `popup`.
