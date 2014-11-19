# spin

`spin` block indicates the progress of some process (e.g. site page or some media file loading).

Rotation of the `spin` block is implemented by CSS3 animation.

## Quick overview

### Modifiers of the block

| Modifier name| Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#spinthemes>theme</a> | <code>'simple'</code>, <code>'islands'</code> | <code>BEMJSON</code> | Custom design. |
| <a href=#spinsize>size</a> | <code>'xs'</code>, <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Size of the  <code>'spin'</code> block. Used only for  <a href="#spinthemes">spin blocks with modifier</a> <code>theme</code> in the value <code>islands</code>.|
| <a href=#spinvisible>visible</a> | <code>'true'</code> | <code>BEMJSON</code> | Activation of the spin. |

## Block overview

<a name="spinthemes"></a>

### Modifiers of the block

#### `theme` modifier

Available values: `'simple'`, `'islands'`.

Use case: `BEMJSON`.

The `spin` block does not have native control representation.

Example:

```bemjson
{
    block : 'spin',
    mods : { theme : 'simple', visible : true }
}
```

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 's', visible : true }
}
```

<a name="spinsize"></a>

#### `size` modifier

Available values for the theme `islands`: `'xs'` `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Sets the size of block `spin`.

Example:

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 'xs', visible : true }
}
```

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 's', visible : true }
}
```

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 'm', visible : true }
}
```


```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 'l', visible : true }
}
```

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 'xl', visible : true }
}
```
<a name="spinvisible"></a>

#### `visible` modifier

Available value: `'true'`.

Use case: `BEMJSON`.

`visible` modifier with `true` value activates the spin. If `visible` modifier is not specified, rotation is paused and `spin` block is hidden from the page.
