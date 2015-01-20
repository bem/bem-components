# link

A block is used to create different types of links.

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#pseudo">pseudo</a> | <code>true</code> | <code>BEMJSON</code> | A pseudo link. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#theme">theme</a> | <code>islands</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | A link size. Use sizes only for links with <a href="#themes">theme modifier with islands value</a>.|

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#url">url</a> | <code>String</code> | A link address. |
| <a href="#title">title</a> | <code>String</code> | A tooltip content. |
| <a href="#target">target</a> | <code>String</code> | A link behavior. |
| <a href="#tabIndex">tabIndex</a> | <code>Number</code> | A sequence that user follows when he uses the `Tab` key to navigate through a page. |

## Block overview

`link` block is used to manage a size, state, and appearance of a links.

### Modifiers of the block
<a name="pseudo"></a>

#### `pseudo` modifier

Available value: `true`.

Use case: `BEMJSON`.

Use to create a link that does not lead to a new webpage.

```javascript
{
    block : 'link',
    mods : { theme : 'islands', size : 'm', pseudo : true },
    content : 'Show the answer'
}
```

<a name="disabled"></a>

#### `disabled` modifier

Available value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier provides inactive state to the block. Disabled block is visible but not available for user actions.

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

Available value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier provides a focus to the block.

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

Available value: `'islands'`.

Use case: `BEMJSON`.

The modifier provides a custom design to the block.

`islands` theme requires <a href="#size">size</a> modifier usage.

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

Available values for `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

The modifier provides a custom design to the block.

`islands` theme requires <a href="#size">size</a> modifier usage.

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

Specifies a link address that will be opened by clicking a link.

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

Specifies a tooltip content. The tooltip appearance depends on a browser and your operating system settings. You cannot change it applying HTML or different styles.

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

Specifies a link behavior.

The field supports all `target` HTML attribute values: `_blank`, `_self` (default), `_parent`, `_top`.

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

Specifies a tab order between controls on a page by pressing `Tab`.

```js
{
    block : 'link',
    mods : { theme : 'islands', size : 'm' },
    url : 'https://bem.info/',
    content : 'bem.info',
    tabIndex : 1
}
```
