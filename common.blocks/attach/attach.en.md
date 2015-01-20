# attach

A block is used to upload a file for sending to a server.

## Brief overview

### Modifiers of the block

| Modifier | Available values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | A disabled state. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href="#themes">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | A block size. Use sizes only with <a href="#themes">theme modifier with islands value</a>. |

### Custom fields of the block

| Field | Type | description |
| ---- | --- | -------- |
| <a href="#button">button</a> | <code>String</code>, <code>BEMJSON</code> | Content of a button for a file selection. |
| <a href="#nofiletext">noFileText</a> | <code>String</code> | Text message that appears when the file is not selected. |

## Block overview

By default this block is visually represented by:

* A [button](../button/button.en.md) that opens a system window to upload a file.
* A text message.

The following elements became available when upload of the file is finished:

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

Use case: `BEMJSON`, `JS`.

The modifier provides inactive state to the block. Disabled block is visible but not available for user actions.

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

Available value: `true`.

Use case: `BEMJSON`, `JS`.

The modifier provides a focus to the block.

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

Available value: `'islands'`.

Use case: `BEMJSON`.

The modifier provides a custom design to the block.

`islands` theme requires <a href="#buttonsize">size</a> modifier usage.

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

Available values for `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Use `size` modifier only for blocks with `islands` <a href="#buttonthemes">theme</a>.

Provides all types of buttons with `size` value.

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

Specifies content of a button:

* A text (`String`)

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm' },
    button : 'Select file'
}
```

* A type and appearance (`BEMJSON`)

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

Specifies a text message when a file is not selected.

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm' },
    button : 'Select file',
    noFileText : 'No file selected'
}
```
