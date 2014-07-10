# input

`input` block is designed to create different types of text fields:

* input field (default value);
* text area;
* password field;
* search form.

## Valid block's attributes

Valid block's attributes could be specified within corresponding fields of block's BEMJSON file:

<table>
    <tr>
        <th>Attribute</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>val</td>
        <td>
            <code>String</code>
        </td>
        <td>Value to be sent to server. It is empty by default.</td>
    </tr>
    <tr>
        <td>placeholder</td>
        <td>
            <code>String</code>
        </td>
        <td>A short hint that describes expected value of an input field.</td>
    </tr>
    <tr>
        <td>id</td>
        <td>
            <code>String</code>
        </td>
        <td>Unique block identifier. The value is generated randomly by default. Could be specified manually in BEMJSON file.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td>Defines name of an input field.</td>
    </tr>
    <tr>
        <td>maxLength</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies maximum number of characters allowed in input field.</td>
    </tr>
    <tr>
        <td>tabIndex</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies the position of current <code>input</code> block in the tabbing order for current page.</td>
    </tr>
</table>

Other valid block's attributes could be specified in `attrs` field in BEMJSON.

## Block's modifiers

### _theme

Block supports following themes:

 * simple
 * normal

If a `theme` modifier is not specified, native representation (*default*) of a control is available.

See the following examples for demonstration:

**default**

```bemjson
{
    block : 'input',
    placeholder : 'default'
}
```
**simple**

```bemjson
{
    block : 'input',
    mods : { theme : 'simple' },
    placeholder : 'simple'
}
```
**normal**

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size: 'm' },
    placeholder : 'normal'
}
```

### _size

Mandatory modifier. Available for *normal* theme only.

Provides size values to all types of text fields.

There are four sizes available: **S**, **M**, **L**, **XL**.

See the following examples for demonstration:

<table>
    <tr>
        <th>Size</th>
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
    block : 'input',
    mods : { theme : 'normal', size: 's' },
    placeholder : 'Small'
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
    block : 'input',
    mods : { theme : 'normal', size: 'm' },
    placeholder : 'Medium'
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
    block : 'input',
    mods : { theme : 'normal', size: 'l' },
    placeholder : 'Large'
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
    block : 'input',
    mods : { theme : 'normal', size: 'xl' },
    placeholder : 'X-Large'
}
            </code></pre>
        </td>
    </tr>
</table>

### _type

Following types of `input` block are available:

* text area (use `textarea` modifier);
* password field (use `password` modifier);
* search form (use `search` modifier).

If a `type` modifier is not specified, the `input` block obtains `<input type="text"/>` value by default.

<table>
    <tr>
        <th>Type</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>
            <code>_textarea</code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', type : 'textarea' },
    placeholder : 'Text area'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>_password</code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'normal', size: 'm', type : 'password' },
    placeholder : 'Password field'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>_search</code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', type : 'search' },
    placeholder : 'Search form'
}
            </code></pre>
        </td>
    </tr>
</table>

### Block's state

#### _disabled

If block is disabled, all its elements become unavailable for user's action.

`input` block is active by default even if `disabled` modifier is not specified.

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', disabled : true },
    val : 'Disabled'
}
```

#### _focused

An input field is focused if a block has a `focused` modifier with `true` value.

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', focused : true },
    val : 'Focused'
}
```

### _has-clear

`clear` cross element (`clear`) appears in input field if a block has `has-clear` modifier with `true` value.


```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', 'has-clear' : true },
    placeholder : 'With clear cross element'
}
```

## Block's elements

The following elements provide visual representation of `input` block:

### __box

An element for grouping native `<input>` field and additional elements (e.g `__clear`).

### __clear

A button (cross element) intended to clear an `input` field content.

To add a cross element into an `input` field specify `has-clear` modifier with `true` value in BEMJSON file.

Cross element is unavailable if block has not `has-clear` modifier or if `has-clear` modifier has `false` value.

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size: 'm', 'has-clear' : true },
    placeholder : 'With clear cross element'
}
```

### __control

Mandatory element.

This element is processed by BEMHTML or BH template engine to native `<input>` or `<textarea>` control.