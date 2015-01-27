# z-index-group

Use this block for creating several layers of the blocks that are located one above the other on a page.

## Overview

### Modifiers of the block

| Modifier | Acceptable value | Use acse | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#index-level">level</a> | Integer number from 0 to 9 | <code>BEMJSON</code>, <code>JS</code> | The layer level. |

## Block description

Use the `z-index-group` block to place the blocks in layers one above the others. The [level](#index-level) modifier controls the block layer position on `z`-axis.

### Modifiers of the block

<a name="index-level"></a>

#### `level` modifier

Acceptable values: integer number from 0 to 9.

Use cases: `BEMJSON`, `JS`.

When blocks overlap, the `level` modifier determines which one covers the other.

The block with the larger `level` value covers the block with the lower one. If two blocks have the same `level` value, the block that is declared in BEMJSON later will cover the other one.

```javascript
{
    block : 'popup',
    mix : { block : 'z-index-group', mods : { level : 1 } },
    mods : { autoclosable : true, theme : 'islands' },
    content : 'I am under the block with { level : 2 } value!'
}
```
