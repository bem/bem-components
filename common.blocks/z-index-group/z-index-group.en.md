# z-index-group

`z-index-group` block is used to create several layers on a page for blocks that are located one above the other.

## Brief overview

### Modifiers of the block

| Modifier | Available value | Use acse | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#index-level>level</a> | Integer number from 0 to 9 | <code>BEMJSON</code>, <code>JS</code> | A layer level. |

## Block overview

`z-index-group` block places the blocks in layers one above the others. [level](#index-level) modifier controls the block layer position on the `z`-axis.

### Modifiers of the block

<a name="index-level"></a>

#### `level` modifier

Available values: integer number from 0 to 9.

Use cases: `BEMJSON`, `JS`.

When blocks overlap, `level` modifier determines which one covers the other.

A block with a larger `level` value covers a block with a lower one. If two blocks have the same `level` value, a block that is declared in BEMJSON declaration later will cover the other one.

```js
{
    block : 'popup',
    mix : { block : 'z-index-group', mods : { level : 1 } },
    mods : { autoclosable : true, theme : 'normal' },
    content : 'I am under the block with { level : 2 } value!'
}
```
