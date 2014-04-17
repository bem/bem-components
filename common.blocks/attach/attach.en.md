# attach

The **attach** block is used to send a file to a server.

The block is visually represented by: 
 
* button (`__button` based on the [button](bem-components/common.blocks/button/) block) that opens a system window for a file download  
* icon (`__icon`)  
* deletion cross element (`__clear`)

Block functionality does not support:  

* more than one file attaching  
* drag-and-drop

Block attach provides native control functionality. The control is hidden. In MSIE8 block attach is rendered as native control `<input type="file">`.

# Block's modifiers

## Themes of a block
`_theme`

The block supports only the *Simple* theme. 

If theme is not spesified, the block applies only default values:  

* Theme of a button: native representation of a button by the browser.  
* Localization: en.
* Button's message text (`__button`): "Choose file"
* Text message rendered with no file selected (`__no-file`): "no file selected"

Following example demonstrates this:

````bemjson 
    {
        block : 'attach',
        button : 'file',
        noFileText : 'no file selected'
    }
````

````bemjson 
    {
        block : 'attach',
        mods : { theme : 'simple' },
        button : 'file',
        noFileText : 'no file selected'
    }
````

## Block state 
`_disabled_true`

* disabled   
If block is disabled a file selection button becomes unavailable for user's manipulations.

The button is active by default.

````bemjson
    {
        block : 'attach',
        mods : { disabled : true },
        button : 'file',
        noFileText : 'no file selected'
    }
```` 

````bemjson
    {
        block : 'attach',
        mods : { theme : 'simple', disabled : true },
        button : 'file',
        noFileText : 'no file selected'
    }
````

# Block's elements

The block is visually represented by the following elements:

## __button

A mandatory element.

A file selection button. It aims to open the system window for a file download. It is based on a [button](bem-components/common.blocks/button/) block and inherites its behavior (JS) and formatting (CSS). 

If a theme *Simple* is not declared, the button's text «Выбрать файл» is used by default. 

````bemjson
    {
        block : 'attach',
        mods : { theme : 'simple' },
        button : {
            block : 'button',
            mods : { theme : 'simple' },
            icon : { elem : 'icon' }
        },
        noFileText : 'no file selected'
    }
````
## __control

A native control of file attaching.

It is rendered by BEMHTML and bh template engines as a native control of file attaching with attributes: `<input class="file-name" type="file">`. 

## __no-file

Element for description rendering with no file selected.

If a theme *Simple* is not declared, the text mesage «Файл не выбран» is used by default. 

## __file

A container for a attached file information.

It consists of the following block's elements:

* `__icon`    
* `__text`  
* `__clear`  

## __icon

File's type icon. It is defined by a file extension.

The element is available for a *Simple* theme of **attach** block.


## __text 

File name. It appears after some file is attached.

## __clear

Clear attachment button (deletion cross elemet). It appears after some file is attached.

The element is available for a *Simple* theme of **attach** block.
