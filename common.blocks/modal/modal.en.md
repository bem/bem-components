# modal

A block is used to create a modal window.

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#visible">visible</a> | <code>true</code> | <code>JS</code> | Displaying of the modal window. |
| <a href="#autoclosable">autoclosable</a> | <code>true</code>| <code>BEMJSON</code> | Autoclosing of the modal window. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#zIndexGroupLevel">zIndexGroupLevel</a> | <code>Number</code> | A level of a modal window layer based on <a href="../z-index-group/z-index-group.en.md">z-index-group</a> block.|

## Block overview

`modal` block is used to manage state, behavior and appearance of the modal windows.

### Modifiers of the block

<a name="visible"></a>

#### `visible` modifier

Available value: `true`.

Use cases: `JS`.

The modifier is set automatically when the modal window is displayed.

<a name="autoclosable"></a>

#### `autoclosable` modifier

Available value: `true`.

Use case: `BEMJSON`.

The modifier with `true` allows to hide the modal window automatically by clicking outside the modal window area or pressing `Escape` button.

```javascript
{
    block : 'modal',
    mods : { theme : 'islands', autoclosable : true },
    content : 'Click outside the popup area closes it'
}
```

<a name="theme"></a>

#### `theme` modifier

Available value: `'islands'`.

Use case: `BEMJSON`.

The modifier provides a custom design to the block.

```javascript
{
    block : 'modal',
    mods : { theme : 'islands' },
    content : 'Content of the modal window'
}
```

### Custom fields of the block

<a name="zIndexGroupLevel"></a>

#### `zIndexGroupLevel` field

Type: `Number`.

Specifies a level of a modal window layer based on <a href="../z-index-group/z-index-group.en.md">z-index-group</a> block.

```javascript
{
    block : 'modal',
    mods : { theme : 'islands' },
    content : 'Content of the modal window',
    zIndexGroupLevel : 3
}
```
