# spin

Use this block to indicate a progress of some process.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#spinvisible">visible</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Spin activation. |
| <a href="#spintheme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#spinsize">size</a> | <code>'xs'</code>, <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | The size of the block. Use sizes only for spin when the <a href="#themes">theme modifier is set to islands</a>. |

## Block description

Use the `spin` block to indicate the progress of some process (for example, web page downloading process).

### Modifiers of the block

<a name="spinvisible"></a>

#### `visible` modifier

Acceptable value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier activates and displays the spin.

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'm', visible : true }
}
```

<a name="spintheme"></a>
#### `theme` modifier

Acceptable value: `'islands'`.

Use case: `BEMJSON`.

The modifier gives the block a custom design.

The `islands` theme requires the <a href="#size">size</a> modifier.

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'm', visible : true }
}
```

<a name="spinsize"></a>

#### `size` modifier

Acceptable values for the `islands` theme: `'xs'`, `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use the `size` modifier only for blocks with the `islands` <a href="#themes">theme</a>.

Sets the size value for the block.

**xs**

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'xs', visible : true }
}
```

**s**

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 's', visible : true }
}
```

**m**

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'm', visible : true }
}
```

**l**

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'l', visible : true }
}
```

**xl**

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'xl', visible : true }
}
```
