# radio

`radio` block is used for creating of a single radio switch. A switch can be represented by the radio switch or by the button. `radio` block allows to manage state, content and type of a radio switches.

`radio` blocks are used inside `radio-group` block as a group elements.

As a result of block's template application, it will be rendered to `<label>` HTML element, with the following set of nested items:

* `radio__box` element with hidden nested `input` HTML element (`__control` element);
* a radio switch label, if `text` BEMJSON attribute is passed.

Block's implementation use the logic of a native `input` HTML element with set `radio` control type: `<input name="name" type="radio">`. If `theme` modifier is set, `input` element is hidden by default.


## Valid block's attributes

Valid block's attributes can be specified in the corresponding fields of block's BEMJSON declaration:

<table>
    <tr>
        <th align="center">Attributes</th>
        <th align="center">Type</th>
        <th align="center">Description</th>
    </tr>
    <tr>
        <td><code>name</code></td>
        <td><code>String|Number</code></td>
        <td>Radio switch name. Renders to a nested <code>input</code> block's <code>name</code> HTML attribute.</td>
    </tr>
    <tr>
        <td><code>text</code></td>
        <td><code>String|Number</code></td>
        <td>A label for the radio switch.</td>
    </tr>
    <tr>
        <td><code>val</code></td>
        <td><code>String|Number</code></td>
        <td>A value which the selected radio switch will return. Renders to a nested <code>input</code> block's <code>value</code> HTML attribute.</td>
    </tr>
</table>

## Block's modifiers

### The themes `theme`

 * simple
 * normal

If `theme` modifier is not set, the browser defaults (`default`) will be applied to the block.

For example:

**default**

```bemjson
{
    block : 'radio',
    name : 'radio-simple',
    text : 'Lonely switch'
}
```

**simple**

```bemjson
{
    block : 'radio',
    mods : { theme : 'simple' },
    name : 'radio-simple',
    text : 'Lonely switch'
}
```

**normal**

```bemjson
{
    block : 'radio',
    mods : { theme : 'normal', size : 'l' },
    name : 'radio-normal',
    text : 'Lonely switch'
}
```

### The sizes `size`

Mandatory modifier. Available for *normal* theme only.
Provides all types of radio switches with the size value.

The set of available sizes depends on `type` modifier's value. Following sizes are available:

<table>
    <tr>
        <th>Size</th>
        <th>Default radio switch</th>
        <th>Button radio switch (<code>radio_type_button</code>)</th>
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

### Radio switch type `type`

`type` modifier can be set to `button` state for creating a button radio switch – `button` block with `button_togglable_radio` modifier set.

The `radio` block is mixed up to the `button` block with nested `radio__control` element.

In addition `role="button"` HTML attribute is set for the block.

<table>
    <tr>
        <th>Type</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>Default radio switch</td>
        <td>
            <pre><code>
{
    block : 'radio',
    mods : { theme : 'normal', size : 'l' },
    name : 'radio-normal',
    text : 'Lonely switch'
}
            </code></pre>
        </td>
    <tr>
        <td>Button radio switch</td>
        <td>
            <pre><code>
{
    block : 'radio',
    mods : {
        theme : 'normal',
        size : 'l',
        type : 'button'
    },
    name : 'radio-normal',
    text : 'Lonely switch2'
}
            </code></pre>
        </td>
    </tr>
</table>


### Block's states

#### Inactive `disabled`

`disabled` modifier is used for an inactive radio switch creation. An inactive radio switch is displayed but not available for user actions.  

Inactive radio switch will not obtain focus (`focused` modifier will not set) on mouse click or by `Tab` key press.

For such a inactive block will not be performed:

* `hovered`, `pressed` and `focused` state modifier seting;
* `checked` modifier value changing.

```bemjson
{
    block : 'radio',
    mods : { theme : 'normal', size : 'l', disabled : true },
    name : 'radio-normal',
    text : 'Lonely switch'
}
```
   

#### In focus `focused`

`focused` modifier is automatically sets to the block when it is in focus. For example, on mouse click or by `Tab` key press.

Available for all block themes.

```bemjson
{
    block : 'radio',
    mods : {
        theme : 'normal',
        size : 'l',
        focused : true
    },
    name : 'radio-normal',
    text : 'Lonely switch'
}
```


#### Selected radio switch `checked`

Modifier defines the selected radio switch.

The modifier is seted on:

* mouse click (on re-clicking modifier state remains);
* `Enter` and `Space` key press (an option of `Enter` usage depends on a browser), if radio switch is in focus (`focused` modifier is set);
* arrow key press, if one of the neighbour `radio` switches is in focus. Neighbour switch can be either a part of the same radio group or independent switch nested in the same block.

```bemjson
{
    block : 'radio',
    content : '_checked',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        checked : true 
    }
}
```


#### States available with `radio_type_button` modifier

If `radio_type_button` modifier is set, `radio` block is mixed up to `button` block. As a result, for `radio` block with `radio_type_button` modifier are available the following `button` block's states:

*  `hovered` – mouse pointer over the block;
*  `pressed` – button is pressed.


## Block's elements

### `__box`

`__box` element is used in basic block's implementation as a container with nested control element (`__control` element). It renders to `<span>` HTML element.

### `__control`

`__control` element is a radio switch controller. It renders to `<input>` HTML element with `type="radio"` attribute is set. In all block themes it is hidden by default. Block uses only the control's logic.
