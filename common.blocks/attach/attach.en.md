# attach

`attach` block is used to upload a file to be sent to a server.

## Quick overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A disabled state. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href=#themes>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href=#button>button</a> | <code>String</code>, <code>BEMJSON</code> | Visual appearance of a file selection button. |
| <a href=#nofiletext>noFileText</a> | <code>String</code> | A text message when a file is not selected. |

## Block overview

By default `attach` block is visually represented by:

* A button ([button](../button/button.en.md) element that opens a system window for a file upload.
* A text message.

When the file upload is complete, the following elements are available:

* A file icon ([icon](../icon/icon.en.md) block).
* A file name (`text` element).
* An element for file deletion (`clear` element).

The block functionality does not support:

* More than one file attaching.
* Drag-and-drop.

### Modifiers of the block

<a name="disabled"></a>

#### `disabled` modifier

Available value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides inactive/disabled state to the block. `disabled` modifier is used to make the block visible but not available for user actions.

```bemjson
{
    block : 'attach',
    mods : { theme : 'islands', disabled : true },
    button : 'Select file',
    noFileText : 'No file selected'
}
```

<a name="focused"></a>

#### `focused` modifier

Available value: `true`.

Use cases: `BEMJSON`, `JS`.

The modifier provides focus to the block.

```bemjson
{
    block : 'attach',
    mods : { theme : 'islands', focused : true },
    button : 'Select file',
    noFileText : 'No file selected'
}
```

<a name="themes"></a>

#### `theme` modifier

Available value: `'islands'`.

Use case: `BEMJSON`.

If `theme` modifier is not specified, native representation of a control is applied.

```bemjson
{
    block : 'attach',
    mods : { theme : 'islands' },
    button : 'Select file',
    noFileText : 'No file selected'
}
```

### Custom fields of the block

<a name="button"></a>

#### `button` field

Specifies visual appearance of a file selection button:

* A text.

```bemjson
{
    block : 'attach',
    mods : { theme : 'islands' },
    button : 'Select file'
}
```
* Visual appearance and style.

```bemjson
{
    block : 'attach',
    mods : { theme : 'islands' },
    button : {
        block : 'button',
        mods : { theme : 'islands', size : 'm' },
        icon : {
            block : 'icon',
            mods : { action : 'download' }
        },
        text: 'Select file'
    }
}
```

<a name="nofiletext"></a>

#### `noFileText` field

Specifies a text message when a file is not selected.

```bemjson
{
    block : 'attach',
    mods : { theme : 'islands' },
    button : 'Select file',
    noFileText : 'No file selected'
}
```
