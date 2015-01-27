# attach

Use this block to upload a file for sending to a server.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#themes">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | The size of the block. Use sizes only with the <a href="#themes">theme modifier set to islands</a>. |

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="#button">button</a> | <code>String</code>, <code>BEMJSON</code> | Content of hte button for a file selection. |
| <a href="#nofiletext">noFileText</a> | <code>String</code> | The text message that appears when the file is not selected. |

## Block description

By default this block is visually represented by:

* The [button](../button/button.en.md) that opens the system window to upload a file.
* The text message.

The following elements became available when upload of the file is finished:

* The file icon (the [icon](../icon/icon.en.md) block).
* The file name (the `text` element).
* The element for file deletion (the `clear` element).

The block functionality does not support:

* More than one file attaching.
* Drag-and-drop.

### Modifiers of the block

<a name="disabled"></a>

#### `disabled` modifier

Acceptable value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier makes the block inactive. The disabled block is visible but not available for user actions.

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm', disabled : true },
    button : 'Select file',
    noFileText : 'No file selected'
}
```

<a name="focused"></a>

#### `focused` modifier

Acceptable value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier puts the focus on the block.

```javascript
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm', focused : true },
    button : 'Select file',
    noFileText : 'No file selected'
}
```

<a name="themes"></a>

#### `theme` modifier

Acceptable value: `'islands'`.

Use case: `BEMJSON`.

The modifier gives the block a custom design.

The `islands` theme requires the <a href="#buttonsize">size</a> modifier usage.

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm' },
    button : 'Select file',
    noFileText : 'No file selected'
}
```

<a name="size"></a>

#### `size` modifier

Acceptable values for the `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use the `size` modifier only for blocks with the `islands` <a href="#buttonthemes">theme</a>.

Sets the size value for all types of attach forms.

**s**

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 's' },
    button : 'Select file',
    noFileText : 'No file selected'
}
```

**m**

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm' },
    button : 'Select file',
    noFileText : 'No file selected'
}
```

**l**

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'l' },
    button : 'Select file',
    noFileText : 'No file selected'
}
```

**xl**

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'xl' },
    button : 'Select file',
    noFileText : 'No file selected'
}
```

### Custom fields of the block

<a name="button"></a>

#### `button` field

Type: `String`, `BEMJSON`.

Specifies the button content:

* The text (`String`)

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm' },
    button : 'Select file'
}
```

* The type and appearance (`BEMJSON`)

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm' },
    button : {
        block : 'button',
        icon : {
            block : 'icon',
            mods : { action : 'download' }
        },
        text: 'Выберите файл'
    }
}
```

<a name="nofiletext"></a>

#### `noFileText` field

Type: `String`.

Specifies the text message when the file is not selected.

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm' },
    button : 'Select file',
    noFileText : 'No file selected'
}
```
