# z-index-group

`z-index-group` block is used to create several layers on a page for blocks representation.
This block can be mixed only with blocks that have a modifier `position`.

`level` modifier controls the layer position on the `z`-axis. Integer number from 0 to 9 can be used as a value for 'level' mode. When blocks overlap, z-order determines which one covers the other. A block with a larger `level` value covers a block with a lower one. If two blocks have the same `level` value, a block that is declared in BEMJSON declaration lower will cover the other one.

`z-index-group` block allows a user to open new elements on a layer that is specified in `level` modifier value. For example, if parent block that initiates [popup](../popup/popup.ru.md) is mixed with `{ block : 'z-index-group', mods : { level : 2 } }`, `popup` block will be shown at the second level (`2 * 1000`).

The example below shows popup block that does not cover another block (e.g., block `header`):

```js
{
    block : 'popup',
    mix : { block : 'z-index-group', mods : { level : 1 } },
    mods : { autoclosable : true, theme : 'islands' },
    content : 'I am under the block with { level : 2 } value!'
}
```
