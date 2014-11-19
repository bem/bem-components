# link

`link` block is used to create various types of links, manage their states, behaviour and appearance on a page.

## Quick overview

### Modifiers of the block

| Modifier name | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#theme>theme</a> | <code>simple</code>, <code>normal</code> | <code></code> | Custom design. |
| <a href=#pseudo>pseudo</a> | <code>'true'</code> | <code></code> |  |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Disabled state. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |

## Custom fields of the block

The following custom fields could be specified in BEMJSON declaration of the block:

| Field | Type | Description |
| ---- | --- | -------- |
| url | <code>String</code>, <code>BEMJSON</code> | Specifies <code>href</code> HTML attribute to a link. |
| title | <code>String</code> | Specifies <code>title</code> HTML attribute to a link.|
| target | <code>String</code> | Target window. Used <code>blank</code> value to open link in a new window. Specifies <code>target</code> HTML attribute to a link.|
| tabIndex | <code>Number</code> | Defines tab order. Specifies <code>tabindex</code> HTML attribute to a link.|

Additional required HTML attributes could be specified in `attrs` field of BEMJSON.

## Block overview

### Modifiers of the block

<a name="theme"></a>

#### `theme` modifier

Available value: `simple`, `normal`.

Use case:

If `theme` modifier is not specified, [native](#native) representation of a control is applied.

Example:

<a name="native"></a>


```bemjson
{
    block : 'link',
    url : '#',
    content : 'link'
}
```


```bemjson
{
    block : 'link',
    mods : { theme : 'simple' },
    url : '#',
    content : 'link'
}
```


```bemjson
{
    block : 'link',
    mods : { theme : 'normal' },
    url : '#',
    content : 'link'
}
```
<a name="pseudo"></a>

#### `pseudo` modifier

Available value: `true`.

Use case:

A link type that does not lead to a new webpage.

Example:

```bemjson
{
    block : 'link',
    mods : { theme : 'normal', pseudo : true },
    title : 'pseudo mod',
    content : 'link'
}
```

<a name="disabled"></a>

#### `disabled` modifier

Available value: `true`.

Use case:

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing `Tab`, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

Example:

```bemjson
{
    block : 'link',
    mods : { theme : 'normal', disabled : true },
    url : '#',
    content : 'disabled'
}
```
<a name="focused"></a>

#### `focused` modifier

Available value: `true`.

Use case:

When a block is focused, a modifier `focused` with `true` value is set automatically, e.g. by pressing `Tab` or clicking a mouse.
