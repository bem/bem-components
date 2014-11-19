# button

`button` block is used to manage a size, state, content and appearance of a button.

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#buttontype>type</a> | <code>'link'</code>, <code>'submit'</code> | <code>BEMJSON</code> | A button type.|
| <a href=#buttonview>view</a> | <code>'action'</code>, <code>'pseudo'</code> | <code>BEMJSON</code> | Visual highlighting.|
| <a href=#buttontoggle>togglable</a> | <code>'check'</code>, <code>'radio'</code> | <code>BEMJSON</code> | A toggle type of a button.|
| <a href=#buttonpressed>pressed</a> | <code>true</code> | Automatic | A pressed state. |
| <a href=#buttondisabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A disabled state. |
| <a href=#buttonfocused>focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href=#buttonsize>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | A button size. The sizes are used only for a <a href="#buttonthemes">button with theme modifier with islands value</a>.|
| <a href=#buttonthemes>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href=#buttonname>name</a> | <code>String</code> | A value that will be sent to a server or obtained using client scripts. Do not use for a <a href="#link-button">button with link behavior</a>. |
| <a href=#buttonval>val</a> | <code>String</code> | A value that will be sent to a server or obtained using client scripts. Do not use for a <a href="#link-button">button with link behavior</a>. |
| <a href=#buttontext>text</a> | <code>String</code>| A button text. |
| <a href=#buttonurl>url</a> | <code>String</code>| A link address. Use only for a <a href="#link-button">button with link behavior</a>. |
| <a href=#buttonicon>icon</a> | <code>BEMJSON</code> | An icon on a button that is based on <a href="../icon/icon.en.md">icon</a> block. |
| <a href=#buttontitle>title</a> | <code>String</code> | A tooltip. |
| <a href=#buttonid>id</a> | <code>BEMJSON</code> | A unique identifier of a button. |
| <a href=#buttontab>tabIndex</a> | <code>Number</code> | A tab order between buttons. |

## Block overview

### Modifiers of the block

<a name="buttontype"></a>

#### `type` modifier

Available values: `'link'`, `'submit'`.

Use case: `BEMJSON`.

<a name="link-button"></a>

##### A button with link behavior (`type` modifier with `link` value)

Use `type` modifier with `link` value to create a button that behaves like a link.

Specify additional a link address in <a href="#buttonurl">url</a> field in BEMJSON input data.

```bemjson
{
    block : 'button',
    url : 'www.bem.info',
    text : 'Try to use BEM!',
    mods : { theme : 'islands', size : 'm', type : 'link' }
}
```

##### A form submit button (`type` modifier with `submit` value)

Use `type` modifier with `submit` value to create a button to send data to a server. This button type must be located inside a form.

```bemjson
{
    block : 'button',
    text : 'To send data',
    mods : { theme : 'islands', size : 'm', type : 'submit' }
}
```

<a name="buttonview"></a>

#### `view` modifier

Available values: `'action'`, `'pseudo'`.

Use case: `BEMJSON`.

##### An action button (`view` modifier with `action` value)

Use `view` modifier with `action` value to visually highlight a button on a page. Could be used as a promo button.

```bemjson
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', view : 'action' },
    text : 'Buy now!'
}
```

##### A pseudobutton (`view` modifier with `pseudo` value)

Use `view` modifier with `pseudo` value to change visual representation of a button. For example in case you do not need to focus attention on the button.

```bemjson
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', view : 'pseudo' },
    text : 'With transparent background'
}
```

```bemjson
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', view : 'pseudo', disabled : true },
    text : 'Without boarders'
}
```

<a name="buttontoggle"></a>

#### `togglable` modifier

Available values: `'check'`, `'radio'`.

Use case: `BEMJSON`.

Defines behavior of a pressed button.

##### A toggle button (`togglable` modifier with `check` value)

The first click presses the button, and the second releases it.

```bemjson
{
    block : 'button',
    text : 'Pressed button',
    mods : { theme : 'islands', size : 'm', togglable : 'check' }
}
```

##### A radio-button (`togglable` modifier with `radio` value)

The first click presses the button and it cannot be released by the next click.
This button type is used as a part of [radio-group](../radio-group/radio-group.en.md).

```bemjson
{
    block : 'button',
    text : 'Selected button',
    mods : { theme : 'islands', size : 'm', togglable : 'radio' }
}
```

An example of button usage as a part of a radio-group:

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-button',
    options : [
        { val : 1, text : 'First' },
        { val : 2, text : 'Second', checked : true },
        { val : 3, text : 'Third' }
    ]
}
```

<a name="buttonpressed"></a>

#### `pressed` modifier

Available value: `true`.

Use case: automatic.

`pressed` modifier with `true` value is added to a button automatically at the moment when this button is pressed.

This modifier is used for buttons with <a href="#buttontoggle">togglable</a> modifier.

<a name="buttondisabled"></a>

#### `disabled` modifier

Available value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier provides inactive/disabled state to the block. `disabled` modifier is used to make the block visible but not available for user actions.

```bemjson
{
    block : 'button',
    text : 'Disabled',
    mods : { theme : 'islands', size : 'm', disabled : true }
}
```

<a name="buttonfocused"></a>

#### `focused` modifier

Available value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier provides focus to the block.

```js
{
    block : 'button',
    text : 'In focus',
    mods : { theme : 'islands', size : 'm', focused : true }
}
```

<a name="buttonsize"></a>

#### `size` modifier

Available values for `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use `size` modifier only for blocks with `islands` <a href="#buttonthemes">theme</a>.

Provides all types of buttons with `size` value.

**s**

```bemjson
{
    block : 'button',
    text : 'Size s',
    mods : { theme : 'islands', size : 's' }
}
```

**m**

```bemjson
{
    block : 'button',
    text : 'Size m',
    mods : { theme : 'islands', size : 'm' }
}
```

**l**

```bemjson
{
    block : 'button',
    text : 'Size l',
    mods : { theme : 'islands', size : 'l' }
}
```

**xl**

```bemjson
{
    block : 'button',
    text : 'Size xl',
    mods : { theme : 'islands', size : 'xl' }
}
```

<a name="buttonthemes"></a>

#### `theme` modifier

Available value: `'islands'`.

Use case: `BEMJSON`.

If `theme` modifier is not specified, native representation of a control is applied.

**Note!** Choosing a theme `normal` requires <a href="#buttonsize">size</a> modifier usage.

```bemjson
{
    block : 'button',
    text : 'Islands theme',
    mods : { theme : 'islands', size : 'm' }
}
```

### Custom fields of the block

<a name="buttonname"></a>

#### `name` field

Specifies a value that is sent to a server. This value always goes in pair with a value of `val` value.

Do not use `name` field for a <a href="#link-button">button with link behavior</a>.

<a name="buttonval"></a>

#### `val` field

Specifies a value that is sent to a server. This value always goes in pair with a value of `name` value.

Do not use `val` field for a <a href="#link-button">button with link behavior</a>.

```bemjson
{
    block : 'button',
    text : 'Check the result',
    name : 'Test #1',
    val : 'Passed',
    mods : { theme : 'islands', size : 'm', type : 'submit' }
}
```

#### `text` field

Specifies a text on a button.

<a name="buttonurl"></a>

#### `url` field

Specifies a link address that will be opened by clicking a <a href="#link-button">button with link behavior</a>.

You must use this field only for a <a href="#link-button">button with link behavior</a>.

#### `icon` field

Specifies an icon on a button. Declare the icon in BEMJSON using [icon](../icon/icon.en.md) block.

```bemjson
{
    block : 'button',
    text : 'Twitter',
    mods : { theme : 'normal', size : 'm' },
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

<a name="buttontitle"></a>

#### `title` title

Specifies a tooltip content. The tooltip appearance depends on a browser and your operating system settings. You cannot change it applying HTML or different styles.

```bemjson
{
    block : 'button',
    text : 'Check the result',
    name : 'Test #1',
    val : 'Passed',
    title : 'This button shows the test results'
    mods : { theme : 'islands', size : 'm', type : 'submit' }
}
```

<a name="buttonid"></a>

#### `id` field

Specifies a unique identifier of a button.

<a name="buttontab"></a>

#### `tabIndex` field

Specifies a tab order between the buttons by pressing `Tab`.
