# progressbar

Use this block for displaying a progress status of a process.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="#val">val</a> | <code>Number</code> | The status of the process progress (in percent). |

## Block description

Use the `progressbar` block to display the progress of some process. The fundamental difference from the [spin](../spin/spin.en.md) block is that the `progressbar` shows a status of the process progress.

The block has the default width value: the `progressbar` width is equal to the width of the parental block.

### Modifiers of the block

<a name="theme"></a>

#### `theme` modifier

Acceptable value: `'islands'`.

Use case: `BEMJSON`.

The modifier gives the block a custom design.

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

Specifies the status of the process progress (in percent relative to its parental block).

```js
{
    block : 'progressbar',
    mods : { theme : 'islands' },
    val : 25
}
```
