# select

Block is used to create a drop-down list.

## Short information

### Modifiers of a block

| Modifier | Valid values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#mode>mode</a> | <code>'check'</code>, <code>'radio'</code>, <code>'radio-check'</code> | | Type of select. |
| <a href=#width>width</a> | <code>'available'</code> | | Width of select button. |
| <a href=#focused>focused</a> | <code>true</code> | BEMJSON | In focus. |
| <a href=#theme>theme</a> | <code>'custom'</code>, <code>'simple'</code>, <code>'normal'</code> | <code>BEMJSON</code> | Styling. |

### Custom fields of a block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href=#name>name</a> | <code>String</code> | Name of `select`. |
| <a href=#text>text</a> | <code>String</code> | Default text for a button when any `menu-item` is not specified. This attribute is used for select with the following specified modifiers: `select_mode_check` and `select_mode_radio-check`. |
| <a href=#id>id</a> | <code>String</code> | Unique identifier of `select` block. |
| <a href=#options>options</a> | <code>BEMJSON</code> | Defines a list of menu-items. Each item has mandatory attribute `val` implemented by a hidden element `control`. |
| <a href=#textmaxwidth>textMaxWidth</a> | <code>String</code> | Defines maximum width of button from `select` block. `popup` width depends on width of `menu-item` text. It could be defined also using CSS styles. |
| <a href=#optionsmaxheight>optionsMaxHeight</a> | <code>String</code> | Defines maximum height of `popup`. If all `menu-items` cannot be fit within `popup`, scroll element appears. If value of `optionsMaxHeight` attribute is not specified, height of `popup` depends on total height of all `menu-items`. |

### Description

The block allows a user to set up different types of popups with menu-items list for selection. `select` is based on the following blocks:

* [button](../button/button.en.md)
* [popup](../popup/popup.en.md)
* [menu](../menu/menu.en/md)
* [menu-item](../menu-item/menu-item.en.md)

`select` is visually represented by a button and popup list of menu items. Mouse click opens popup above or below a button depending on its position on a page (`{ directions : ['bottom-left', 'bottom-right', 'top-left', 'top-right'] }`). Clicking outside the popup area hides it automatically (`{ autoclosable : true }`).

Dropdown list allows user to choose:

* a single value from the list ([`select_mode_radio`](#radio-select));
* a single, multiple or none values from the list ([`select_mode_check`](#multiple-choice));
* a single or none values from the list ([`select_mode_radio-check`](#single-choice)).

### Block overview

#### Modifiers of a block

##### `mode`

Valid values: `'radio'`, `'check`, `'radio-check'`.

Use cases:

Mandatory modifier.

Examples:

<a name="select_mode_check"></a>
* Multiple-choice select (`select_mode_check`) allows a user to check more than one menu item from the list or leave all items unchecked. Clicking on menu item changes its value to the opposite.

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select1',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third', checked : true }
    ]
}
```

<a name="select_mode_radio"></a>
* Radio-select (`select_mode_radio`) is used to allow user a single choice. Text in the button of `select` block depends on a chosen menu item. The first item is represented by a button text by default.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select2',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

<a name="select_mode_radio-check"></a>
* Single-choice select (`select_mode_radio-check`) allows a user to check only one menu item from the list or leave all items unchecked. Click on menu item changes its value to the opposite.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
    name : 'select3',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

<a name="width"></a>
##### `width`

Valid value: `'available'`.

Use cases:

To set the ability of select button's width to fit the width of the chosen item, use `width` modifier with `available` value.

Example:

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm', width : 'available' },
    name : 'select4',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second second second second second second second second' },
        { val : 3, text : 'third' }
    ]
}
```

<a name="focused"></a>
##### `focused`

Valid value: true.

Use cases: BEMJSON.

When a block is focused, a modifier `focused` with `true` value is set automatically, e.g. by pressing `Tab` or clicking a mouse.

<a name="theme"></a>
##### `theme`

Valid values: `'simple'`, `'islands'`.

Use case: `BEMJSON`.

Block supports the following themes:

* simple
* normal (**NB**: Choosing a theme `normal` requires additional modifier `size`)

If `theme` modifier is not specified, [custom](#custom) representation of a control is applied (without CSS styles).

Examples:

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

#### Custom fields of a block

<a name="name"></a>
#### `name`

Name of `select`.

<a name="text"></a>
#### `text`

Default text for a button when any `menu-item` is not specified. This attribute is used for select with the following specified modifiers: `select_mode_check` and `select_mode_radio-check`.

<a name="id"></a>
#### `id`

Unique identifier of `select` block.

<a name="options"></a>
#### `options`

Defines a list of menu-items. Each item has mandatory attribute `val` implemented by a hidden element `control`.

<a name="textmaxwidth"></a>
#### `textMaxWidth`

Defines maximum width of button from `select` block. `popup` width depends on width of `menu-item` text. It could be defined also using CSS styles.

<a name="optionsmaxheight"></a>
#### `optionsMaxHeight`

Defines maximum height of `popup`. If all `menu-items` cannot be fit within `popup`, scroll element appears. If value of `optionsMaxHeight` attribute is not specified, height of `popup` depends on total height of all `menu-items`.

#### Elements of a block

##### __button

`select` block is visually represented by a button (block [button](../button/button.en.md)) that contains an icon `<i>` (block [icon](../icon/icon.en.md)) with mixed element `tick`. Size of the icon is specified by `button` block size. Clicking the button opens popup with options.

The following modifiers of a button could be propagated to `select` block:

* `theme`
* `size`
* `focused`
* `checked`
* `disabled`

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm', disabled : true },
    name : 'select5',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

##### __menu

`menu` element allows user to manage `menu-items` within selection list:

* `val` – value to be sent to a server when menu item is chosen. This attribute could contain unique identifier `{ val : { id : 1 } }`.
* `text` – name of menu item.
* `checked` – state that is set to `menu-item`, e.g. on mouse click.
* `checkedText` – text represented within select's button instead of chosen menu item name. This attribute is used for [multiple-choice](#multiple-choice) select.
* `icon` – graphical element (icon).

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
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
    mods : { mode : 'check', theme : 'islands', size : 'm' },
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

##### __control

`control` element is added to the block on template engine level and used to draw `menu-item`s in `popup`.
