# spin

This block indicates the progress of some process (e.g. site page or some media file loading).

Rotation of the `spin` block is implemented by CSS3 animation.

## Block Modifiers

### _theme

Mandatory modifier. The `spin` block doesn't have native control representation (*default*).

This block supports following themes:

* simple
* normal

Following examples demonstrate this:

**simple**

```bemjson
{
    block : 'spin',
    mods : { theme : 'simple', progress : true }
}
```

**normal**

```bemjson
{
    block : 'spin',
    mods : { theme : 'normal', size : 's', progress : true }
}
```

### _size

Mandatory modifier.

There are five sizes available: **XS**, **S**, **M**, **L**, **XL**.

Following examples demonstrate this:

<table>
    <tr>
        <th>Block's size</th>
        <th>Size, px</th>
        <th>Example</th>
    </tr>
    <tr>
        <th>XS</th>
        <td>16px</td>
        <td>
            <pre><code>
{
    block : 'spin',
    mods : { theme : 'normal', size : 'xs', progress : true }
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>S</th>
        <td>24px</td>
        <td>
            <pre><code>
{
    block : 'spin',
    mods : { theme : 'normal', size : 's', progress : true }
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>M</th>
        <td>28px</td>
        <td>
            <pre><code>
{
    block : 'spin',
    mods : { theme : 'normal', size : 'm', progress : true }
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>L</th>
        <td>32px</td>
        <td>
            <pre><code>
{
    block : 'spin',
    mods : { theme : 'normal', size : 'l', progress : true }
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>XL</th>
        <td>38px</td>
        <td>
            <pre><code>
{
    block : 'spin',
    mods : { theme : 'normal', size : 'xl', progress : true }
}
            </code></pre>
        </td>
    </tr>
</table>

### _progress

`progress` modifier with `true` value activates the spin. `spin` block rotates only in visible state.

`progress` modifies with `false` value paused rotation of `spin` block and hides it from the page.
