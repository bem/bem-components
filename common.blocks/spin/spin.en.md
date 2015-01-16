# spin

A block is used to indicate a progress of some process.

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#spinvisible">visible</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Activation of the block. |
| <a href="#spintheme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#spinsize">size</a> | <code>'xs'</code>, <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | A spin size. Use sizes only for spin with <a href="#themes">theme modifier with islands value</a> |

## Block overview

`spin` block is used to indicate the progress of some process (for example, web page downloading process).

### Modifiers of the block

<a name="spinvisible"></a>

#### `visible` modifier

Available value: `true`.

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

Available value: `'islands'`.

Use case: `BEMJSON`.

The modifier provides a custom design to the block.

`islands` theme requires <a href="#size">size</a> modifier usage.

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'm', visible : true }
}
```

<a name="spinsize"></a>

#### `size` modifier

Available values for `islands` theme: `'xs'`, `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use `size` modifier only for blocks with `islands` <a href="#themes">theme</a>.

Provides the block with `size` value.

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
