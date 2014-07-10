# checkbox-group

A `checkbox-group` block is a set of independed switches – checkboxes (a `checkbox` block). Any of group's switches can be either active or not regardless of other switches state.

The block allows to manage the appearance and state of a nested switches.

On a web page `checkbox-group` block will be rendered to `<span>` HTML element, with a nested set of checkboxes and their labels.


## Valid block's attributes

Valid block's attributes could be specified in the corresponding fields of block BEMJSON declaration:

<table>
    <tr>
        <th align="center">Attributes</th>
        <th align="center">Type</th>
        <th align="center">Description</th>
    </tr>
    <tr>
        <td>name</td>
        <td><code>String</code></td>
        <td>The checkbox group name. Renders to nested <code>input</code> block's <code>name</code> HTML attribute.</td>
    </tr>
    <tr>
        <td>options</td>
        <td><code>Array</code></td>
        <td>The option objects array. Each object within the array corresponds to one switch and contains it's attributes set.</td>
    </tr>    
</table>

Following attributes should be passed in an `option` field for each switch:

* `val` (`String` | `Number`) – value returned by selected switcher (a 'checkbox__control' element);
* `text` (`String`) – a text label for the current switch.

In an `options` array any valid `checkbox` block attributes can be passed. For example, a `_checked` or `_disabled` modifiers can be set for the `checkbox`.


## Block's modifiers

### The themes `_theme`

 * simple
 * normal

If a `_theme` modifier is not set, browser defaults (`default`) will be applied to the block.

For example:

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


### The sizes `_size`

Mandatory modifier. Available for *normal* theme only.
Provides all types of checkbox groups with the size value.

There are four sizes available: **S**, **M**, **L**, **XL**.

Depending on a `_type` modifier value following sizes are available:

<table>
    <tr>
        <th>Size</th>
        <th>Normal checkbox group and <code>_type_line</code></th>
        <th>Button checkbox group (<code>_type_button</code>)</th>
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


Here are some examples with *normal* theme and the `_type_button` modifier is set:

<table>
    <tr>
        <th>Size</th>
        <th>Example</th>
    </tr>
    <tr>
        <th>s</th>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 's', 
        type : 'button' 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>m</th>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        type : 'button' 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>l</th>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button' 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>xl</th>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'xl', 
        type : 'button' 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
</table>


### Checkbox group type `_type`

A `_type` modifier can have following values:

* `button`. It is used for creation of button checkbox group – a block of button switches;
* `line`. It is used for line-aligned checkbox group creation. Right gap is automatically added after each switch of the group except the last one. Available only for *normal* theme.

Modifier is available for all block themes.

<table>
    <tr>
        <th>Type</th>

        <th>Example</th>
    </tr>
    <tr>
        <td>Normal checkbox group</td>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'l' },
    name : 'checkbox-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    <tr>
        <td>Button checkbox group</td>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button' 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>Line-aligned checkbox group (<code>_type_line</code>)</td>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'line' 
    },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>    
</table>


### Inactive `_disabled`

A `_disabled` modifier helps to create an inactive menu item. Inactive menu item is displayed, but not available for user actions.

Such a group will not obtain a focus (`_focused` modifier will not be toggled).

When a `_disabled` modifier is set for the group, all it's switches also will be disabled. As a result, the following will not be performed on switches:

* state modifiers `_hovered`, `_pressed` and `_focused` toggling;
* switching between `_checked` modifier's values.

Modifier is available for all block themes.

```bemjson
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button',
        disabled : true 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true }
    ]
}
```


### Block's states

#### `_focused`

A `_focused` 
_focused modifier is automatically toggled when one of the block's elements is in focus. For example, on mouse click or by `Tab` key press. 

Available for all block themes.

```bemjson
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button',
        focused : true 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```


## Dependencies

The block depends on:

* `i-bem__dom `
* `checkbox`
* `jquery`
