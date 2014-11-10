# radio

Block is used to create a single radio switch.

## Short information

### Modifiers of a block

| Modifier | Valid values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#type>type</a> | <code>'button'</code> | <code>BEMJSON</code> | Creates button-based radio switch. |
| <a href=#checked>checked</a> | <code>true</code> | | Defines that radio switch is selected. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code> | In focus. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Makes block unavailabe. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code>  | <code>BEMJSON</code> | Radio switch size. |
| <a href=#theme>theme</a> | <code>'simple'</code>, <code>'islands'</code> | <code>BEMJSON</code> | Styling. |

### Custom fields of a block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href=#name>name</a> | <code>String</code> | Radio switch name that is used for its identification. |
| <a href=#val>val</a> | <code>String</code> | Specifies value that will be sent to a server or obtained using client scripts. |
| <a href=#text>text</a> | <code>String</code> | Specifies a label for the radio switch. |
Additional required HTML attributes could be specified in `attrs` field of BEMJSON.

## Block overview

The block can be implemented by a radio switch or by a button (block [button](../button/button.en.md)). `radio` block allows a user to manage state, content and type of radio switches.

[radio-group](../radio-group/radio-group.en.md) could be composed by `radio` blocks.

As a result of template appliance, it will be rendered to `<label>` HTML element, with following set of nested items:

* `box` element with hidden nested `input` HTML element;
* a radio switch label, if the `text` BEMJSON attribute is specified.

Block is implemented with native `input` HTML element with `type` attribute set to `radio`: `<input name="name" type="radio">`. If `theme` modifier is set, the `input` element is hidden by default.

### Modifiers of a block

<a name="type"></a>
#### `type`

Valid value: `'button'`.

Use case: `BEMJSON`.

Use `type` modifier with `button` value to create a radio switch based on [button](../button/button.en.md) block – `button_togglable_radio`.

`radio` block is mixed with `button` block with nested `control` element. As a result, the following `button` block states could be propagated to this type os radio switch:

*  `hovered`
*  `pressed`

In addition `role="button"` HTML attribute is set to the block.

Example:

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    text : 'radio switch'
}
```

<a name="checked"></a>
#### `checked`

Valid value: `true`.

Use case:

Modifier defines that radio switch is selected.

The modifier is set automatically:

* by clicking a mouse (next click does not release the radio switch);
* by pressing `Enter` or `Space` key if radio switch is in focus (key type depends on a browser settings);
* by pressing an arrow key if one of the next radio switches is in focus. Neighbour switch can be either a part of the same [radio group](../radio-group/radio-group.en.md) or independent switch nested in the same block.

Example:

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', checked : true },
    content : 'checked'
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

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing `Tab`, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

Example:

```bemjson
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', disabled : true },
    name : 'radio-islands',
    text : 'disabled'
}
```

<a name="size"></a>
#### `size`

Valid values: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

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


<a name="theme"></a>
#### `theme`

Valid values: `'simple'`, `'islands'`.

Use case: `BEMJSON`.

Block supports the following themes:

* simple
* islands (**NB!** Choosing a theme `islands` requires additional modifier [`size`](#size))

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

### Custom fields of a block

<a name="name"></a>
#### `name`

Radio switch name that is used for its identification. Specifies `name` HTML attribute to a nested `input` block.

<a name="val"></a>
#### `val`

Specifies value that will be sent to a server or obtained using client scripts. Pair `name=val` is sent to a server, where name is set by `name` attribute and value – by `val` attribute. Specifies `value` HTML attribute to a nested `input` block.

<a name="text"></a>
#### `text`

Specifies a label for the radio switch.

### Elements of a block

#### __box

`box` element is used in basic block implementation as a container with nested control element (`control` element). It is represented as `<span>` HTML element. An auxiliary element is added to the block on template engine level.

#### __control

`control` element is represented as `<input>` HTML element with specified `type="radio"` attribute. An auxiliary element is added to the block on template engine level.
