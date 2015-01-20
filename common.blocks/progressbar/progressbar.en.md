# progressbar

A block is used to display a progress status of a process.

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#val">val</a> | <code>Number</code> | A status of process progress (in percent). |

## Block overview

`progressbar` block displays progress of some process. The fundamental difference from [spin](../spin/spin.en.md) block is that `progressbar` shows a status of the process progress.

The block has a default width value: `progressbar` width is equal to the width of a parental block.

### Modifiers of the block

<a name="theme"></a>

#### `theme` modifier

Available value: `'islands'`.

Use case: `BEMJSON`.

The modifier provides a custom design to the block.

```js
{
    block : 'progressbar',
    mods : { theme : 'islands' },
    val : 25
}
```

### Custom fields of the block

<a name="val"></a>

#### `val` field

Type: `Number`.

Specifies a status of process progress (in percent relative to its parental block).

```js
{
    block : 'progressbar',
    mods : { theme : 'islands' },
    val : 25
}
```
