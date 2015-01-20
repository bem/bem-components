# z-index-group

`z-index-group` block is used to create several layers of the blocks that are located one above the other on a page.

## Brief overview

### Modifiers of the block

| Modifier | Available value | Use acse | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#index-level">level</a> | Integer number from 0 to 9 | <code>BEMJSON</code>, <code>JS</code> | A layer level. |

## Block overview

`z-index-group` block places the blocks in layers one above the others. [level](#index-level) modifier controls the block layer position on `z`-axis.

### Modifiers of the block

<a name="index-level"></a>

#### `level` modifier

Available values: integer number from 0 to 9.

Use cases: `BEMJSON`, `JS`.

When blocks overlap, `level` modifier determines which one covers the other.

A block with a larger `level` value covers a block with a lower one. If two blocks have the same `level` value, the block that is declared in BEMJSON later will cover the other one.

```javascript
{
    block : 'popup',
    mix : { block : 'z-index-group', mods : { level : 1 } },
    mods : { autoclosable : true, theme : 'islands' },
    content : 'I am under the block with { level : 2 } value!'
}
```
