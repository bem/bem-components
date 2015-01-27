# icon

Use this block for creating an auxiliary graphical element in other blocks.

## Overview

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="#url">url</a> | <code>String</code> | The address of the icon. |
| <a href="#content">content</a> | <code>BEMJSON</code>, <code>String</code> | Icon content in SVG format. |

## Block description

Use the `icon` block to create the auxiliary graphical element in other blocks.

The block is adapted to align with the baseline.

To create an independent image, use the [image](../image/image.en.md) block.

The `icon` block could be declared through specific modifiers. For the examples below we implement modifiers on the service level called `test.blocks` of `bem-components` library.

```js
{
    block : 'icon',
    mods : { social : 'twitter' }
}
```

```js
{
    block : 'button',
    text : 'Download',
    mods : { theme : 'islands', size : 'm' },
    icon : {
        block : 'icon',
        mods : { action : 'download' }
    }
}
```

### Custom fields of the block

<a name="url"></a>

#### `url` field

Type: `String`.

Specifies the address of the icon.

```js
{
    block : 'button',
    text : 'bem.info',
    mods : { theme : 'islands', size : 'm', view : 'action' },
    icon :
    {
        block : 'icon',
        url : 'https://bem.info/m/_/wuyLRHj8p7lF3eT96kTKumCdXzM.svg'
    }
}
```

<a name="content"></a>

#### `content` field

Type: `BEMJSON`, `String`.

Specifies image content in SVG format.

```js
{
    block: 'icon',
    content: {
        tag: 'svg',
        cls: 'action_type_download',
        attrs: { xmlns: '...', width: 16, height: 16 },
        content: '<path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z"/>'
    }
}
```

```js
{
    block : 'icon',
    content : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z"/></svg>'
}
```
