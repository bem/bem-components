# control-group

`control-group` block is a wrapper for blocks' visual grouping. Blocks that need grouping should be placed in block's BEMJSON declaration `content` field.

Block's representation exists only for CSS with no additional functionality. Theme `normal` is required for nested blocks.

On a page `control-group` block is represented by `<div>` HTML element.

## Use cases

`control-group` allows a user to group the following blocks:

* [input](../input/input.en.md)
* [button](../button/button.en.md)

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'normal', size : 'm', type : 'search' },
            val : 'Your-query',
            placeholder : 'query'
        },
        {
            block : 'button',
            mods : { theme : 'normal', size : 'm' },
            text : 'search'
        }
    ]
}
```

Besides, blocks that use `input` or `button` as one of their components could be grouped. For instance, `select` block could be included in to the group because it has `button` block as a controlling component:

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'normal', size : 'm' },
            placeholder : 'price from'
        },
        {
            block : 'input',
            mods : { theme : 'normal', size : 'm' },
            placeholder : 'to'
        },
        {
            block : 'select',
            mods : { mode : 'radio', theme : 'normal', size : 'm' },
            options : [
                { val : 'usd', text : '$', checked : true },
                { val : 'euro', text : '€' }
            ]
        }
    ]
}
```

The following `button`-based blocks could be grouped:

* [select](../select/select.en.md);
* [dropdown](../dropdown/dropdown.en.md) (with `dropdown_switcher_button` modifier set);
* [checkbox](../checkbox/checkbox.en.md) (with `checkbox_type_button` modifier set);
* [radio](../radio/radio.en.md) (with `radio_type_button` modifier set).


## Impact on other blocks

### Block `input`

The right border will not be displayed for all grouped `input` blocks, except for the last one (`right` CSS property will be set to zero for pseudo element `:before`). The last block will have 1px right border.

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'normal', size : 'm', type : 'search' },
            val : 'First-query',
            placeholder : 'query'
        },
        {
            block : 'input',
            mods : { theme : 'normal', size : 'm', type : 'search' },
            val : 'Second-query',
            placeholder : 'query'
        },
        {
            block : 'input',
            mods : { theme : 'normal', size : 'm', type : 'search' },
            val : 'Another-query',
            placeholder : 'query'
        }
    ]
}
```

### Block `button`

The grouping affects button corners rounding and the right gap for button blocks. Button appearance depends on block's position inside the group. The first and the last elements of the group visually differ from the rest:

<table>
    <tr>
        <th>Position inside the group</th>
        <th>Corners rounding</th>
        <th>Right gap</th>
    </tr>
    <tr>
        <td>The first element</td>
        <td>Left corners are rounded.</td>
        <td>-</td>
    </tr>
    <tr>
        <td>The last element</td>
        <td>Right corners are rounded.</td>
        <td>+</td>
    </tr>
    <tr>
        <td>Inside the group</td>
        <td>Without corners rounding.</td>
        <td>-</td>
    </tr>
</table>

For example:

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'button',
            mods : { theme : 'normal', size : 'm' },
            text : 'First of group'
        },
        {
            block : 'button',
            mods : { theme : 'normal', size : 'm' },
            text : 'In the middle'
        },
        {
            block : 'button',
            mods : { theme : 'normal', size : 'm' },
            text : 'Last one'
        }
    ]
}
```
