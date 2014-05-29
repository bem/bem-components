# spin

This block indicates the progress of some process (e.g. site page or some media file loading).

Rotation of the **spin** block is implemented by CSS3 animation.

## Block Modifiers

The **spin** block requires the block modifiers listed below:

### Themes of a block `_theme`

#### simple

```bemjson
    {
        block : 'spin',
        mods : { theme : 'simple', size : 's', progress : true }
    }
```

#### normal

````bemjson
    {
        block : 'spin',
        mods : { theme : 'normal', size : 's', progress : true }
    }
````

### Sizes `_size`

There are five sizes available: **xs**, **s**, **m**, **l**, **xl**.

<table>
  <tr>
    <th>Theme/Size</th>
    <th>simple</th>
    <th>normal</th>
  </tr>
  <tr>
    <th>xs</th>
    <td>
        <pre><code>
            {
                block : 'spin',
                mods : { theme : 'simple', size : 'xs', progress : true }
            }
        </code></pre>
    </td>
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
    <th>s</th>
    <td>
        <pre><code>
            {
                block : 'spin',
                mods : { theme : 'simple', size : 's', progress : true }
            }
        </code></pre>
    </td>
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
    <th>m</th>
    <td>
        <pre><code>
            {
                block : 'spin',
                mods : { theme : 'simple', size : 'm', progress : true }
            }
        </code></pre>
    </td>
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
    <th>l</th>
    <td>
        <pre><code>
            {
                block : 'spin',
                mods : { theme : 'simple', size : 'l', progress : true }
            }
        </code></pre>
    </td>
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
    <th>xl</th>
    <td>
        <pre><code>
            {
                block : 'spin',
                mods : { theme : 'simple', size : 'xl', progress : true }
            }
        </code></pre>
    </td>
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

### Spin progress `_progress`

The `{ progress : true }` modifier activates the spin. The **spin** block rotates in visible state.

The `{ progress : false }` modifies paused rotation process. The `false` value is used when a **spin** block is invisible.
