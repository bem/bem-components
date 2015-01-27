# dropdown

A composite block that consists of a [control component](#modswitcher) (for example, a button or a link) that triggers a [popup](../popup/popup.en.md).

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | --------- |
| <a href=#modswitcher>switcher</a> | <code>'link'</code>, <code>'button'</code> | <code>BEMJSON</code> | The type of the control component. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The disabled state. |
| <a href=#opened>opened</a> | <code>true</code> | <code>JS</code> | Displaying the popup on a page. |
| <a href=#theme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | The size of the control component. Use sizes only when the <a href="#themes">theme modifier is set to islands</a>. |

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href=#fieldswitcher>switcher</a> | <code>String</code>, <code>BEMJSON</code> | Content of the <a href="#modswitcher">control component</a>.  |
| <a href=#popup>popup</a> | <code>String</code>, <code>BEMJSON</code> | Content of the popup. |

## Block description

Use the `dropdown` block to create different dropdown types, control their state, behavior and appearance on a page.

### Modifiers of the block

<a name="modswitcher"></a>

#### `switcher` modifier

Acceptable values: `link`, `button`.

Use case: `BEMJSON`.

The `switcher` modifier specifies the type of the control component:

* [link](#modswitcherlink)
* [button](#modswitcherbutton)

<a name="modswitcherlink"></a>

##### Link as control component (`switcher` modifier with `link` value)

Use to set the [link](../link/link.en.md) block as the control component.

Clicking on the link triggers the `popup` block.

```js
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm' },
    switcher : 'New sales',
    popup : '30% discount for a new collection. Enter a promotional code to start shopping.'
}
```

<a name="modswitcherbutton"></a>

##### Button as control component (`switcher` modifier with `button` value)

Use to set the [button](../button/button.en.md) block as the control component.

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

Acceptable value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier makes the block inactive. The disabled block is visible but not available for user actions.

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

Acceptable value: `true`.

Use case: `JS`.

The modifier is applied to the block automatically when the popup opens.

<a name="theme"></a>

#### `theme` modifier

Acceptable value: `islands`.

Use cases: `BEMJSON`.

The modifier gives the block a custom design.

The `islands` theme requires the <a href="#size">size</a> modifier.

The modifier can be applied to:

* The whole `dropdown` block

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

* The control component (if the <a href="#fieldswitcher">switcher</a> field contains BEMJSON code of the [link](../link/link.en.md) or [button](../button/button.en.md) blocks).

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

Acceptable values for the `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use the `size` modifier only for blocks with the `islands` <a href="#themes">theme</a>.

The modifier can be applied to:

* The whole `dropdown` block

```js
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : 'New sales',
    popup : '30% discount for a new collection. Enter a promotional code to start shopping.'
}
```

* The control component (if the <a href="#fieldswitcher">switcher</a> field contains BEMJSON code of the [link](../link/link.en.md) or [button](../button/button.en.md) blocks).

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

Specifies the content of the <a href="#modswitcher">control component</a>.

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

Specifies the content of the popup.

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
