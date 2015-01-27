# control-group

Use this block as a wrapper block for blocks **visual** grouping. Blocks that need grouping should be placed in `content` field of block BEMJSON declaration.

## Use cases

The `control-group` allows a user to group the following blocks:

* [input](../input/input.en.md)

```js
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm', type : 'search' },
            placeholder : 'Name'
        },
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm', type : 'search' },
            placeholder : 'Surname'
        },
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm', type : 'search' },
            placeholder : 'Email'
        }
    ]
}
```

* [button](../button/button.en.md)

```js
{
    block : 'control-group',
    content : [
        {
            block : 'button',
            mods : { theme : 'islands', size : 'm' },
            text : 'View Cart'
        },
        {
            block : 'button',
            mods : { theme : 'islands', size : 'm' },
            text : 'Create a wish list'
        },
        {
            block : 'button',
            mods : { theme : 'islands', size : 'm' },
            text : 'View your balance'
        }
    ]
}
```

```js
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm', type : 'search' },
            placeholder : 'Enter your question'
        },
        {
            block : 'button',
            mods : { theme : 'islands', size : 'm' },
            text : 'Search'
        }
    ]
}
```

* [select](../select/select.en.md)

```js
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm' },
            placeholder : 'Price from'
        },
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm' },
            placeholder : 'to'
        },
        {
            block : 'select',
            mods : { mode : 'radio', theme : 'islands', size : 'm' },
            val: 'usd',
            options : [
                { val : 'usd', text : '$' },
                { val : 'euro', text : '€' }
            ]
        }
    ]
}
```

* [dropdown](../dropdown/dropdown.en.md) (`switcher` modifier with `button` value)

```js
{
    block : 'control-group',
    content : [
        {
            block : 'button',
            mods : { view : 'action', theme : 'islands', size : 'm' },
            text : 'Buy now!'
        },
        {
            block : 'dropdown',
            mods : { switcher : 'button', theme : 'islands', size : 'm' },
            switcher : 'Sales',
            popup : 'Take advantage of our special offer: ”50% discount on every fifth cargo delivery.“'
        }
    ]
}
```

* [checkbox](../checkbox/checkbox.en.md) (`type` modifier with `button` value)

```js
{
    block : 'control-group',
    content : [
        {
            block : 'checkbox',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            name: 'tv',
            val: '1',
            text : 'TV sets'
        },
        {
            block : 'checkbox',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            name: 'photo',
            val: '1',
            text : 'Cameras'
        },
        {
            block : 'checkbox',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            name: 'book',
            val: '1',
            text : 'Electronic books'
        }
    ]
}
```
