# link

Use this block for creating different types of links.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#pseudo">pseudo</a> | <code>true</code> | <code>BEMJSON</code> | Pseudo link. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#theme">theme</a> | <code>islands</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | The size of the link. Use sizes only for links when <a href="#themes">theme modifier is set to islands</a>.|

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="#url">url</a> | <code>String</code> | Link address. |
| <a href="#title">title</a> | <code>String</code> | Tooltip content. |
| <a href="#target">target</a> | <code>String</code> | Link behavior. |
| <a href="#tabIndex">tabIndex</a> | <code>Number</code> | The order when navigating through controls on a page by pressing the <code>Tab</code> key.|

## Block description

Use the `link` block control the size, state, and appearance of the links.

### Modifiers of the block
<a name="pseudo"></a>

#### `pseudo` modifier

Acceptable value: `true`.

Use case: `BEMJSON`.

Use to create the link that does not lead to a new webpage.

```javascript
{
    block : 'link',
    mods : { theme : 'islands', size : 'm', pseudo : true },
    content : 'Show the answer'
}
```

<a name="disabled"></a>

#### `disabled` modifier

Acceptable value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier makes the block inactive. The disabled block is visible but not available for user actions.

```js
{
    block : 'link',
    mods : { theme : 'islands', size : 'm' , disabled : true },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

<a name="focused"></a>

#### `focused` modifier

Acceptable value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier puts the focus on the block.

```javascript
{
    block : 'link',
    mods : { theme : 'islands', size : 'm' , focused : true },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

<a name="theme"></a>

#### `theme` modifier

Acceptable value: `'islands'`.

Use case: `BEMJSON`.

The modifier gives the block a custom design.

The `islands` theme requires the <a href="#size">size</a> modifier.

```js
{
    block : 'link',
    mods : { theme : 'islands', size : 'm' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

<a name="size"></a>

#### `size` modifier

Acceptable values for the `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use the `size` modifier only for blocks with the `islands` <a href="#theme">theme</a>.

Sets the size value for all types of links.

**s**

```js
{
    block : 'link',
    mods : { theme : 'islands', size: 's' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

**m**

```js
{
    block : 'link',
    mods : { theme : 'islands', size: 'm' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

**l**

```js
{
    block : 'link',
    mods : { theme : 'islands', size: 'l' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

**xl**

```js
{
    block : 'link',
    mods : { theme : 'islands', size: 'xl' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

### Custom fields of the block

<a name="url"></a>

#### `url` field

Type: `String`.

Specifies the link address that will be opened by clicking the link.

```js
{
    block : 'link',
    mods : { theme : 'islands', size : 'm' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

<a name="title"></a>

#### `title` title

Type: `String`.

Specifies the tooltip content. The tooltip appearance depends on the browser and your operating system settings. You cannot change it applying HTML or different styles.

```js
{
    block : 'link',
    mods : { theme : 'islands', size : 'm', pseudo : true },
    content : 'Show the answer',
    title : 'Click the link to see the answer'
}
```

<a name="target"></a>

#### `target` field

Type: `String`.

Specifies the link behavior.

The field supports all HTML attribute values of the `target`: `_blank`, `_self` (default), `_parent`, `_top`.

```js
{
    block : 'link',
    mods : { theme : 'islands', size : 'm' },
    url : 'https://bem.info/',
    content : 'bem.info',
    target : '_blank'
}
```

<a name="tabIndex"></a>

#### `tabIndex` field

Type: `Number`.

Specifies the tab order when pressing `Tab` to navigate between controls on a page.

```js
{
    block : 'link',
    mods : { theme : 'islands', size : 'm' },
    url : 'https://bem.info/',
    content : 'bem.info',
    tabIndex : 1
}
```
