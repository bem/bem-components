# attach

`attach` block is used to upload a file to be sent to a server.

This block is visually represented by:

* button (`button` element is based on the [button](https://github.com/bem/bem-components/blob/v2/common.blocks/button/button.en.md) block) that opens a system window for a file upload;
* text message "No file selected".

When file upload is complete, the following elements become available:

* file icon (`icon` block);
* file name (`text` element);
* deletion cross element (`clear` element).

Block functionality does not support:

* more than one file attaching;
* drag-and-drop.

## Block's modifiers

### _theme

The block supports only a theme called *simple*.

If theme is not specified, only native representation of the block is available (*default*).

See the following examples for demonstration:

**default**

```bemjson
{
    block : 'attach',
    button : 'Select file',
    noFileText : 'No file selected'
}
```
**simple**

```bemjson
{
    block : 'attach',
    mods : { theme : 'simple' },
    button : 'Select file',
    noFileText : 'No file selected'
}
```

### Block states

#### _disabled

If block is disabled, a file selection button becomes unavailable for user's manipulations.

The button is active by default, even if `disabled` modifier is not specified.

```bemjson
{
    block : 'attach',
    mods : { theme : 'simple', disabled : true },
    button : 'Select file',
    noFileText : 'No file selected'
}
```

## Block's elements

The block is visually represented by the following elements:

### __button

A mandatory element.

A file selection button. It is designed for opening a system window for file upload. It is based on [button](https://github.com/bem/bem-components/blob/v2/common.blocks/button/button.en.md) block and inherits its behavior (JS) and formatting (CSS). Content of a button should be specified in input data.

```bemjson
{
    block : 'attach',
    mods : { theme : 'simple' },
    button : {
        block : 'button',
        mods : { theme : 'simple' },
        icon : { block : 'icon', mods : { action : 'download' },
        text: 'Select file'
        }
    },
    noFileText : 'No file selected'
}
```

### __control

A native control for file attaching.

It is rendered by BEMHTML and BH template engines as a native control of file attaching with attributes: `<input class="attach__control" type="file">`.

### __no-file

Element for description rendering with no file selected.

If a theme *simple* is not declared, the text message "no file selected" is used by default.

### __file

A container with attached file information.

It consists of the following elements of the block:

* `text`
* `clear`

The element could contain an `icon` block. Depending on a file type an `icon` block could obtain corresponding modifier that specifies a type file icon to be assigned.

### __text

File name. It becomes available when you have attached the file.

### __clear

Clear attachment button (deletion cross element). It becomes available when you have attched the file.

The element is available for a *simple* theme of `attach` block.
