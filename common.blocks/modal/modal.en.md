# modal

Use this block for creating a modal window.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#visible">visible</a> | <code>true</code> | <code>JS</code> | Displaying of the modal window. |
| <a href="#autoclosable">autoclosable</a> | <code>true</code>| <code>BEMJSON</code> | Autoclosing of the modal window. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="#zIndexGroupLevel">zIndexGroupLevel</a> | <code>Number</code> | The level of the modal window layer based on the <a href="../z-index-group/z-index-group.en.md">z-index-group</a> block.|

## Block description

Use the `modal` block to control the state, behavior and appearance of the modal windows.

### Modifiers of the block

<a name="visible"></a>

#### `visible` modifier

Acceptable value: `true`.

Use cases: `JS`.

The modifier is set automatically when the modal window is displayed.

<a name="autoclosable"></a>

#### `autoclosable` modifier

Acceptable value: `true`.

Use case: `BEMJSON`.

This modifier with the `true` value allows to hide the modal window automatically by clicking outside the modal window area or pressing `Escape` button.

```javascript
{
    block : 'modal',
    mods : { theme : 'islands', autoclosable : true },
    content : 'Click outside the popup area closes it'
}
```

<a name="theme"></a>

#### `theme` modifier

Acceptable value: `'islands'`.

Use case: `BEMJSON`.

The modifier gives the block a custom design.

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

Specifies the level of the modal window layer based on the <a href="../z-index-group/z-index-group.en.md">z-index-group</a> block.

```javascript
{
    block : 'modal',
    mods : { theme : 'islands' },
    content : 'Content of the modal window',
    zIndexGroupLevel : 3
}
```
