# dropdown

A composite block that consists of a [control component](#modswitcher) (for example, a button or a link) that triggers a [popup](../popup/popup.en.md).

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | --------- |
| <a href=#modswitcher>switcher</a> | <code>'link'</code>, <code>'button'</code> | <code>BEMJSON</code> | A control component type. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A disabled state. |
| <a href=#opened>opened</a> | <code>true</code> | <code>JS</code> | Displaying the popup on a page. |
| <a href=#theme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | A control component size. Use sizes only with <a href="#themes">theme modifier with islands value</a>. |

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href=#fieldswitcher>switcher</a> | <code>String</code>, <code>BEMJSON</code> | Content of the <a href="#modswitcher">control component</a>.  |
| <a href=#popup>popup</a> | <code>String</code>, <code>BEMJSON</code> | Content of the popup. |

## Block overview

`dropdown` block is used to create different dropdown types, manage their state, behavior and appearance on a page.

### Modifiers of the block

<a name="modswitcher"></a>

#### `switcher` modifier

Available values: `link`, `button`.

Use case: `BEMJSON`.

`switcher` modifier specifies a type of the control component:

* A [link](#modswitcherlink)
* A [button](#modswitcherbutton)

<a name="modswitcherlink"></a>

##### A link as a control component (`switcher` modifier with `link` value)

Use to set [link](../link/link.en.md) block as the control component.

Clicking on the link triggers `popup` block.

```js
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm' },
    switcher : 'New sales',
    popup : '30% discount for a new collection. Enter a promotional code to start shopping.'
}
```

<a name="modswitcherbutton"></a>

##### A button as a control component (`switcher` modifier with `button` value)

Use to set [button](../button/button.en.md) block as the control component.

```js
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : 'New sales',
    popup : '30% discount for a new collection. Enter a promotional code to start shopping.'
}
```

<a name="disabled"></a>

#### `disabled` modifier

Available value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides inactive state to the block. Disabled block is visible but not available for user actions.

```js
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm', disabled : true },
    switcher : 'New sales',
    popup : '30% discount for a new collection. Enter a promotional code to start shopping.'
}
```

```js
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm', disabled : true },
    switcher : 'New sales',
    popup : '30% discount for a new collection. Enter a promotional code to start shopping.'
}
```

<a name="opened"></a>

#### `opened` modifier

Available value: `true`.

Use case: `JS`.

The modifier is applied to the block automatically when the popup opens.

<a name="theme"></a>

#### `theme` modifier

Available value: `islands`.

Use cases: `BEMJSON`.

The modifier provides a custom design to the block.

`islands` theme requires <a href="#size">size</a> modifier usage.

The modifier could be applied to:

* A whole `dropdown` block

```js
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm' },
    switcher : 'New sales',
    popup : '30% discount for a new collection. Enter a promotional code to start shopping.'
}
```

```js
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : 'New sales',
    popup : '30% discount for a new collection. Enter a promotional code to start shopping.'
}
```

* A control component (if <a href="#fieldswitcher">switcher</a> field contains BEMJSON code of [link](../link/link.en.md) or [button](../button/button.en.md) block).

```js
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm' },
    switcher : {
        block : 'link',
        mods : { pseudo : true, theme : 'islands', size : 'm' },
        content : 'New sales'
    },
    popup : '30% discount for a new collection. Enter a promotional code to start shopping.'
}
```

```js
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : {
        block : 'button',
        mods : { togglable : 'check', theme : 'islands', size : 'm', },
        text : 'New sales'
    },
    popup : '30% discount for a new collection. Enter a promotional code to start shopping.'
}
```

<a name="size"></a>

#### `size` modifier

Available values for `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use `size` modifier only for blocks with `islands` <a href="#themes">theme</a>.

The modifier could be applied to:

* A whole `dropdown` block

```js
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : 'New sales',
    popup : '30% discount for a new collection. Enter a promotional code to start shopping.'
}
```

* A control component (if <a href="#fieldswitcher">switcher</a> field contains BEMJSON code of [link](../link/link.en.md) or [button](../button/button.en.md) block).

```js
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : {
        block : 'button',
        mods : { togglable : 'check', theme : 'islands', size : 'm' },
        text : 'New sales'
    },
    popup : '30% discount for a new collection. Enter a promotional code to start shopping.'
}
```

### Custom fields of the block

<a name="fieldswitcher"></a>

#### `switcher` field

Type: `String`, `BEMJSON`.

Specifies content of the <a href="#modswitcher">control component</a>.

```js
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm' },
    switcher : {
        block : 'link',
        mods : { pseudo : true },
        content : 'New sales'
    },
    popup : '30% discount for a new collection. Enter a promotional code to start shopping.'
}
```

```js
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : {
        block : 'button',
        mods : { togglable : 'check' },
        text : 'New sales'
    },
    popup : '30% discount for a new collection. Enter a promotional code to start shopping.'
}
```

<a name="popup"></a>

#### `popup` field

Type: `String`, `BEMJSON`.

Specifies content of the popup.

```js
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm' },
    switcher : 'New sales',
    popup : 'Скидка 30%'
}
```

```js
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'islands',
        size : 'xl'
    },
    switcher : 'Dropdown list',
    popup : {
        block : 'menu',
        mods : {
            theme : 'islands',
            size : 'xl',
            select : 'check'
        },
        content : [
            {
                block : 'menu-item',
                val : 1,
                content : 'First item'
            },
            {
                block : 'menu-item',
                val : 2,
                content : 'Second item'
            }
        ]
    }
}
```
