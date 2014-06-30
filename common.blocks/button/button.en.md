# button

The **button** block is used for different types of buttons creating. It allows you to manage size, sate, content and appearance of a button.

In MSIE8 block **button** is rendered as native button `<button>`; `link-button` is rendered as native link `<a>`.

## Button use cases

<table>
  <tr>
    <th align="center">Type</th>
    <th align="center">Description</th>
    <th align="center">Example</th>
  </tr>
  <tr>
    <td>Button</td>
    <td>Used by default.</td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : {
    theme : 'normal',
    size : 'm'
  },
  icon : {
    block : 'icon',
    mods : {
      action : 'download'
    }
  }
}
      </code></pre>
    </td>
   <tr>
    <td>Link-button</td>
    <td>A button that provides link functionality. <br>Has an optional attribute `url`<br> to specify the address to which to <br>navigate.</td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : {
    theme : 'normal',
    size : 'm',
    type : 'link'
  },
  url : '#',
  text : 'link'
}
      </code></pre>
    </td>
   </tr>
   <tr>
    <td>Action button</td>
    <td>Designed to send data to the server (submit).<br> Always located in the form. <br>Set a `type` modifier with `submit` value in <br>BEMJSON to create an action button.
    </td>
    <td>
      <pre><code>
{
  tag: 'form',
  content: {
    block : 'button',
    mods : {
      theme : 'normal',
      size : 'm',
      type : 'submit'
    },
    text : 'button'
  }
}
      </code></pre>
    </td>
   </tr>
</table>

## Block's API

The public methods of the block are:

<table>
  <tr>
    <th align="center">Method</th>
    <th align="center">Description</th>
  </tr>
  <tr>
    <td>getText</td>
    <td>Returns text of the button {String}.</td>
  </tr>
  <tr>
    <td>setText</td>
    <td>Sets text to the button.</td>
  </tr>
</table>

## Valid block's attributes

Valid block's attributes could be specified in the corresponding fields of the block BEMJSON file:

<table>
  <tr>
    <th align="center">Attributes</th>
    <th align="center">Type</th>
    <th align="center">Description</th>
  </tr>
  <tr>
    <td>text</td>
    <td>String</td>
    <td>Text of the button.</td>
   </tr>
   <tr>
    <td>icon</td>
    <td>BEMJSON</td>
    <td>The **icon** block.</td>
  </tr>
  <tr>
    <td>url</td>
    <td>String</td>
    <td>URL address. If URL address is specified the <br>button provides a link functionality.</td>
  </tr>
</table>

The other valid block's attributes could be specified in the `attrs` field in BEMJSON.

## Block's modifiers

### The themes `_theme`

The block supports the follwing themes:

 * simple
 * normal

It a `_theme` modifier is not specified the native representation (`default`) of a control is available.

#### default

```bemjson
{
    block : 'button',
    text : 'default'
}
```

#### simple

```bemjson
{
    block : 'button',
    mods : { theme : 'simple' },
    text : 'simple'
}
```

#### normal

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    text : 'normal'
}
```

### The sizes `_size`

Mandatory modifier for *normal* theme only.
Provides the size value to all types of buttons.

There are four sizes available: **S**, **M**, **L**, **XL**.

Following example demonstrates this:

<table>
  <tr>
    <th align="center">Size/Values</th>
    <th align="center">Font size</th>
    <th align="center">Button height</th>
    <th align="center">Example</th>
  </tr>
  <tr>
    <th align="center">s</th>
    <td>13px</td>
    <td>24px</td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : {
    theme : 'normal',
    size : 's'
  },
  text : 'Small'
}
      </code></pre>
    </td>
  </tr>
  <tr>
    <th align="center">m</th>
    <td>13px</td>
    <td>28px</td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : {
    theme : 'normal',
    size : 'm'
  },
  text : 'Medium'
}
      </code></pre>
    </td>
  </tr>
  <tr>
    <th align="center">l</th>
    <td>15px</td>
    <td>32px</td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : {
    theme : 'normal',
    size : 'l'
  },
  text : 'Large'
}
      </code></pre>
    </td>
  </tr>
  <tr>
    <th align="center">xl</th>
    <td>18px</td>
    <td>38px</td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : {
    theme : 'normal',
    size : 'xl'
  },
  text : 'X-large'
}
      </code></pre>
    </td>
  </tr>
</table>

### Button's type `_type`

The following types of button are available:

* link-button (`_link`). Has a mandatory attribute `url`. A link-button has an `<a>` attribute and the `url` value becomes a `href` attribute.

* action  button (`_submit`). Should be a part of a form only.

The `_type` modifier is available for *simple* and *normal* themes.

<table>
  <tr>
    <th align="center">Type/<br>Realisation</th>
    <th align="center">default</th>
    <th align="center">normal</th>
  </tr>
  <tr>
    <td> `_link`</td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : { type : 'link' },
  url : '#',
  text : 'link'
}
      </code></pre>
    </td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : {
    theme : 'normal',
    size : 'm',
    type : 'link'
  },
  url : '#',
  text : 'link'
}
      </code></pre>
    </td>
  </tr>
  <tr>
    <td>`_submit`</td>
    <td>
      <pre><code>
{
  tag: 'form',
  content: {
    block : 'button',
    mods : { type : 'submit' },
    text : 'default'
}
}
      </code></pre>
    </td>
    <td>
      <pre><code>
{
  tag: 'form',
  content: {
    block : 'button',
    mods : {
      theme : 'normal',
      size : 'm',
      type : 'submit'
    },
    text : 'normal'
  }
}
      </code></pre>
    </td>
  </tr>
</table>

### Button's states

#### `_disabled`

If a `_disabled` modifier has `_true` value the button is visible, but is not available for user action.

Disabled button cannot be focused by `Tab` pressing or mouse click.

Available for all themes of block.

<table>
  <tr>
    <th align="center">default</th>
    <th align="center">normal</th>
  </tr>
  <tr>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_disabled_true',
  mods : { disabled : true }
}
      </code></pre>
    </td>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_disabled_true',
  mods : {
    theme : 'normal',
    size : 'm',
    disabled : true
  }
}
      </code></pre>
    </td>
  </tr>
</table>

#### `_focused`

If `focused` modifier has a `true` value the button is always focused. You can click the focused button using `Space` button on your keyboard. To switch between controls use a `Tab` button.

Available for all themes of block.

```bemjson
{
    block : 'button',
    text : '_focused_true',
    mods : {
        theme : 'normal',
        size : 'm',
        focused : true
    }
}
```
#### `_hovered`

Defines the "hover" action.

Available for all themes of block.

<table>
  <tr>
    <th align="center">default</th>
    <th align="center">normal</th>
  </tr>
  <tr>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_hovered_true',
  mods : { hovered : true }
}
      </code></pre>
    </td>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_hovered_true',
  mods : {
    theme : 'normal',
    size : 'm',
    hovered : true
  }
}
      </code></pre>
    </td>
  </tr>
</table>

#### `_pressed`

Defines a "pressed" state of a button.

Available for all themes of block.

<table>
  <tr>
    <th align="center">default</th>
    <th align="center">normal</th>
  </tr>
  <tr>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_pressed_true',
  mods : { pressed : true }
}
      </code></pre>
    </td>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_pressed_true',
  mods : {
    theme : 'normal',
    size : 'm',
    pressed : true
  }
}
      </code></pre>
    </td>
  </tr>
</table>

#### `_togglable`

Determines the state of the pressed button when the first click the button presses it, and the second returns to its original state.

Available for all themes of block.

<table>
  <tr>
    <th align="center">default</th>
    <th align="center">normal</th>
  </tr>
  <tr>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_togglable_true',
  mods : { togglable : true }
}
      </code></pre>
    </td>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_togglable_true',
  mods : {
    theme : 'normal',
    size : 'm',
    togglable : true
  }
}
      </code></pre>
    </td>
  </tr>
</table>

#### `_action`

Visually detects the button on a page.

Available for all themes of block.

<table>
  <tr>
    <th align="center">default</th>
    <th align="center">normal</th>
  </tr>
  <tr>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_action_true',
  mods : { action : true }
}
      </code></pre>
    </td>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_action_true',
  mods : {
    theme : 'normal',
    size : 'm',
    action : true
  }
}
      </code></pre>
  </td>
  </tr>
</table>

#### Pseudo button `_pseudo`

If `pseudo` modifier has `true` value the button background becomes transparent. If pseudo button is disabled its boarders disappear.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', pseudo : true },
    text : 'pseudo'
}
```

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', pseudo : true, disabled : true },
    text : 'pseudo'
}
```

## B;ock's elements

The block is visually represented by the following elements:

### __text

This element intended to set a text position in the button.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    icon : { block : 'icon', mods : { action : 'download' } },
    text : 'with icon'
}
```

## Dependencies

The `button` block depends on

* `control`, that provides public API for the controls
* `i-bem__dom`
