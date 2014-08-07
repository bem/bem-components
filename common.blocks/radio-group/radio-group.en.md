# radio-group

`radio-group` block is a set of dependent switches – radio buttons (`radio` block). It is used for a single option selection from the list of options. 

On a web page, `radio-group` block will be rendered to `<span>` HTML element, with nested set of a switches (radio buttons).


## Valid block's attributes

Valid block's attributes can be specified in the corresponding fields of block's BEMJSON declaration:

<table>
    <tr>
        <th align="center">Attributes</th>
        <th align="center">Type</th>
        <th align="center">Description</th>
    </tr>
    <tr>
        <td>name</td>
        <td><code>String</code></td>
        <td>Radio button group's name. Renders to the nested <code>input</code> block's <code>name</code> HTML attribute.</td>
    </tr>
    <tr>
        <td>options</td>
        <td><code>Array</code></td>
        <td>Option objects array. Each object in the array are corresponds to one switch and contains it's attributes set.</td>
    </tr>    
</table>

Among the attributes passing to `option` field for the switch the following are mandatory:

* `val` (`String` | `Number`) – value returned by selected switcher (`radio__control` element);
* `text` (`String`) – a text label for the current switch.

## Block's modifiers

### The themes `theme`

 * simple
 * normal

If `theme` modifier is not set, the browser defaults (`default`) will be applied to the block.

For example:

#### default

```bemjson
{
    block : 'radio-group',
    name : 'radio-default',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```


#### simple

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'simple' },
    name : 'radio-simple',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

 
#### normal

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'normal', size : 'l' },
    name : 'radio-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```


### The sizes `size`

Mandatory modifier. Available for *normal* theme only.
Provides the size value to all types of radio groups.

There are four sizes available: **S**, **M**, **L**, **XL**.

Depending on `type` modifier value the following sizes are available:

<table>
    <tr>
        <th>Size</th>
        <th>Normal radio group</th>
        <th>Button radio group (<code>radio-group_type_button</code>)</th>
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


Here are some examples with *normal* theme and and with set `radio-group_type_button` modifier:

<table>
    <tr>
        <th>Размер</th>
        <th>Пример</th>
    </tr>
    <tr>
        <th>s</th>
        <td>
            <pre><code>
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 's', 
        type : 'button' 
    },
    name : 'radio-S',
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
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        type : 'button' 
    },
    name : 'radio-M',
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
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button' 
    },
    name : 'radio-L',
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
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'xl', 
        type : 'button' 
    },
    name : 'radio-XL',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
</table>


### Radio group type `type`

`type` modifier can have the following values:

* `button`. It is used for creation of a button radio group – a block of button switcher;
* `line`. Is used for a line-aligned radio group creation. Right gap is automatically added after each switch of the group except the last one. Available only for *normal* theme.

<table>
    <tr>
        <th>Type</th>

        <th>Example</th>
    </tr>
    <tr>
        <td>Normal radio group</td>
        <td>
            <pre><code>
{
    block : 'radio-group',
    mods : { theme : 'normal', size : 'l' },
    name : 'radio-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    <tr>
        <td>Button radio group</td>
        <td>
            <pre><code>
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button' 
    },
    name : 'radio-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>Line-aligned radio group (<code>radio-group_type_line</code>)</td>
        <td>
            <pre><code>
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'line' 
    },
    name : 'radio-line',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>    
</table>


### Switch's selection mode `mode`

`mode` modifier allows to control the switch's reaction on mouse click. For example, it controls an ability of inactivation the selected switch on click.  Available only with `radio-group_type_button` modifier set.

The following modifier value is available:

* `radio-check` – the radio-checkbox button mode. The switch will be activated on click, and inactivates on re-clicking. For example:

```bemjson
{
    block : 'radio-group',
    name : 'with-radio-check-mode',
    mods : { theme : 'normal', size : 'm', type : 'button', mode : 'radio-check' },
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```



### Radio group's states

### Inactive `disabled`

`radio-group_disabled` modifier is used for an inactive radio group creation. An inactive group is displayed but not available for user actions.  

Such a group will not obtain focus (`radio-group_focused` modifier will not be set).

When a `disabled` modifier is set to the group all it's switches will also be disabled. As a result, for the group's switches will not be performed:

* state modifiers `hovered`, `pressed` and `focused` seting;
* switching between `checked` modifier's values.

Modifier is available for all block themes.

```bemjson
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button',
        disabled : true 
    },
    name : 'radio-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```


#### `focused`

`radio-group_focused` modifier is automaticly seted when one of the block elements is in focus. For example, on mouse click or by `Tab` key press. 

Available for all block themes.

```bemjson
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button',
        focused : true 
    },
    name : 'radio-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```
