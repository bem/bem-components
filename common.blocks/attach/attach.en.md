# attach

`attach` block is used to upload file to be sent to a server.

By default this block is visually represented by:

* button (element `button` is based on a block [button](../button/button.en.md)) that opens a system window for file upload;
* text message (for example, “No file selected”).

When file upload is complete, the following elements become available:

* file icon (`icon` block);
* file name (`text` element);
* element for file deletion (`clear` element).

Block functionality does not support:

* more than one file attaching;
* drag-and-drop.

## Modifiers of a block

### _theme

Block supports only a theme called `simple`.

If `theme` modifier is not specified, [native](#native) representation of a control is applied.

See following examples:

<a name="native"></a>
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

### States of a block

#### _disabled

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing ‘Tab’, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

```bemjson
{
    block : 'attach',
    mods : { theme : 'simple', disabled : true },
    button : 'Select file',
    noFileText : 'No file selected'
}
```

## Elements of a block

Block is visually represented by the following elements:

### __button

File selection button for opening a system window for file upload. It is based on [button](../button/button.en.md) block and inherits its behavior (JS) and styling (CSS). Content of a button should be specified in BEMJSON data.

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

Native control for file attaching that is added to the block on template engine level.

### __no-file

An auxiliary element is added to the block on template engine level. Sets text when file is not selected.

If theme *simple* is not declared, text message “no file selected” is used by default.

### __file

Container with attached file information. An auxiliary element is added to the block on template engine level.

It consists of the following elements of the block:

* `text`
* `clear`

This element could contain `icon` block. Depending on a file type `icon` block could obtain corresponding modifier.

### __text

File name. It becomes available when you have attached some file.

### __clear

Clear attachment element. It becomes available when you have attached some file.

The element is used for `simple` theme of `attach` block.
