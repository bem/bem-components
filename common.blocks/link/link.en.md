# link

`link` block is used to create various types of links, manage their states, behaviour and appearance on a page.

## Custom fields of a block

The following custom fields could be specified in BEMJSON declaration of the block:

<table>
    <tr>
        <th>Custom field name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>url</td>
        <td><code>String</code></td>
        <td>Specifies <code>href</code> HTML attribute to a link.</td>
    </tr>
    <tr>
        <td>title</td>
        <td><code>String</code></td>
        <td>Specifies <code>title</code> HTML attribute to a link.</td>
    </tr>
    <tr>
        <td>target</td>
        <td><code>String</code></td>
        <td>Target window. Used <code>blank</code> value to open link in a new window.
            <br>Specifies <code>target</code> HTML attribute to a link.</td>
    </tr>
    <tr>
        <td>tabIndex</td>
        <td><code>Number</code></td>
        <td>Defines tab order. Specifies <code>tabindex</code> HTML attribute to a link.</td>
    </tr>
</table>

Additional required HTML attributes could be specified in `attrs` field of BEMJSON.

## Modifiers of a block

### _theme

Block supports the following themes:

 * simple
 * islands

If `theme` modifier is not specified, [native](#native) representation of a control is applied.

See following examples:

<a name="native"></a>
**default**

```bemjson
{
    block : 'link',
    url : '#',
    content : 'link'
}
```

**simple**

```bemjson
{
    block : 'link',
    mods : { theme : 'simple' },
    url : '#',
    content : 'link'
}
```

**islands**

```bemjson
{
    block : 'link',
    mods : { theme : 'islands' },
    url : '#',
    content : 'link'
}
```

<a name="size"></a>
### _size

Implemented only for theme `islands`.

There are four sizes available: **s**, **m**, **l**, **xl**.

<table>
     <tr>
        <th>Size</th>
        <th>Font size</th>
    </tr>
    <tr>
        <th>s</th>
        <td>13px</td>
    </tr>
    <tr>
        <th>m</th>
        <td>13px</td>
    </tr>
    <tr>
        <th>l</th>
        <td>15px</td>
    </tr>
    <tr>
        <th>xl</th>
        <td>18px</td>
    </tr>
</table>

```bemjson
{
    block : 'link',
    content : 'Small',
    mods : { theme : 'islands', size : 's' }
}
```

```bemjson
{
    block : 'link',
    content : 'Medium',
    mods : { theme : 'islands', size : 'm' }
}
```

```bemjson
{
    block : 'link',
    content : 'Large',
    mods : { theme : 'islands', size : 'l' }
}
```

```bemjson
{
    block : 'link',
    content : 'X-large',
    mods : { theme : 'islands', size : 'xl' }
}
```

### _pseudo

A link type that does not lead to a new webpage.

```bemjson
{
    block : 'link',
    mods : { theme : 'islands', pseudo : true },
    title : 'pseudo mod',
    content : 'link'
}
```

### States of a block

#### _disabled

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing `Tab`, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

```bemjson
{
    block : 'link',
    mods : { theme : 'islands', disabled : true },
    url : '#',
    content : 'disabled'
}
```

#### _focused

When a block is focused, a modifier `focused` with `true` value is set automatically, e.g. by pressing `Tab` or clicking a mouse.
