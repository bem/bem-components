# link

A `link` block is used for a various types of links creation. It allows to manage state, behaviour and appearance of a links.

## link use cases

The block is used for creation of following link types:

<table>
    <tr>
        <th>Type</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>Basic link</td>
        <td>Is used to set up various kinds of links. A default type.</td>
        <td>
            <pre><code>
{
    block : 'link',
    url : ' #',
    content : 'link'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>Pseudo link</td>
        <td>The variation of link that will not be followed by a browser on click. Used mainly for scripts invocation.
        </td>
        <td>
            <pre><code>
{
    block : 'link',
    mods : { pseudo : true, theme: 'normal' },
    content : 'pseudo'
}
            </code></pre>
        </td>
    </tr>
</table>


## Valid block's attributes

Valid block's attributes can be specified in the corresponding fields of block's BEMJSON declaration:

<table>
    <tr>
        <th align="center">Attributes</th>
        <th align="center">Type</th>
        <th align="center">Description</th>
    </tr>
    <tr>
        <td>url</td>
        <td><code>String|BEMJSON</code></td>
        <td>Link's URL. If presented an <code>url</code> value, will renders to <code>href</code> HTML attribute. Is mandatory for a normal link. If BEMJSON is passed as the value, it will be processed and will return the string.</td>
    </tr>
    <tr>
        <td>title</td>
        <td><code>String</code></td>
        <td>Popup label's text.</td>
    </tr>  
    <tr>
        <td>target</td>
        <td><code>String</code></td>
        <td>Target window. Mainly used with a <code>_blank</code> value to open the link in new window.</td>
    </tr>
    <tr>
        <td>tabIndex</td>
        <td><code>Number</code></td>
        <td>Index to define an order of links focusing on <code>Tab</code> key press. Will be rendered to native <code>tabindex</code> HTML attribute.</td>
    </tr>
</table>


## Block's modifiers

### The themes `_theme`

 * simple
 * normal

If a `_theme` modifier is not set, the browser defaults (`default`) will be applied to the block.

For example:

#### default
```bemjson
{
    block : 'link',
    url : '#',
    content : 'link'
}
```


#### simple

```bemjson
{
    block : 'link',
    mods : { theme : 'simple' },
    url : '#',
    content : 'link'
}
```


#### normal

```bemjson
{
    block : 'link',
    mods : { theme : 'normal' },
    url : '#',
    content : 'link'
}
```


### Pseudo link `_pseudo`

```bemjson
{
    block : 'link',
    mods : {
        theme : 'normal',
        pseudo : true
    },
    title : 'pseudo mod are toggled',
    content : 'link'
}
```


### Link's states

#### In focus `_focused`

A `_focused` modifier is automaticly toggles to the block when it is in focus. For example, on mouse click or by `Tab` key press. Focused link can be followed by Enter key press.

Available for all block themes.

```
{
    block : 'link',
    mods : {
        theme : 'normal',
        focused : true
    },
    url : '#',
    content : '_focused'
}
```

### Inactive `_disabled`

A `_disabled` modifier helps to create an inactive link. Inactive link is displayed but not available for user actions.  

For such a link will not be performed:

* `_focused` state modifier toggling, when in focus;
* redirection to the link address if an `url` attribute is provided;
* `click` BEM event emiting.

Available for all block themes.

```bemjson
{
    block : 'link',
    mods : {
        theme : 'normal',
        disabled : true
    },
    url : '#',
    content : '_disabled'
}
```

## Dependencies

The block depends on:

* `control`
* `i-bem__dom`
