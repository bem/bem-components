# image

Use this block for creating an independent image.

## Overview

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="#title">title</a> | <code>String</code> | Tooltip content. |
| <a href="#alt">alt</a> | <code>String</code> | The alternate text of the image. |
| <a href="#url">url</a> | <code>String</code> | Image address. |
| <a href="#width">width</a> | <code>Number</code> | The width of the image in pixels. |
| <a href="#height">height</a> | <code>Number</code> | The height of the image in pixels. |
| <a href="#content">content</a> | <code>BEMJSON</code> | Image content in SVG format. |

## Block description

The block is used to create an independent image that is adapted for specific output modes (screen reader, print, programs for people with limited physical capacities).

### Custom fields of the block

<a name="title"></a>
#### `title` field

Type: `String`.

Specifies the tooltip content.

```js
{
    block : 'image',
    url : 'https://img-fotki.yandex.ru/get/16159/259818507.0/0_130be6_4116d8e7_S',
    title : 'Find detailed description on bem.info'
}
```

<a name="alt"></a>
#### `alt` field

Type: `String`.

Specifies the alternate text of the image. The text provides useful information about the image if a browser cannot display it for some reasons.

```js
{
    block : 'image',
    url : 'https://img-fotki.yandex.ru/get/6737/259818507.0/0_130be4_7315e1e0_S',
    alt : 'BEM'
}
```

<a name="url"></a>
#### `url` field

Type: `String`.

Specifies the address for the image uploading.

```js
{
    block : 'image',
    url : 'https://img-fotki.yandex.ru/get/5405/259818507.0/0_130be5_948d59aa_S'
}
```

<a name="width"></a>

#### `width` field

Type: `Number`.

Specifies the image width in pixels.

```js
{
    block : 'image',
    url : 'https://img-fotki.yandex.ru/get/17848/259818507.0/0_12ab32_a798a820_X5L',
    width : 200,
    height : 100
}
```

<a name="height"></a>

#### `height` field

Type: `Number`.

Specifies the image height in pixels.

```js
{
    block : 'image',
    url : 'https://img-fotki.yandex.ru/get/17848/259818507.0/0_12ab32_a798a820_X5L',
    width : 100,
    height : 200
}
```

<a name="content"></a>

#### `content` field

Type: `BEMJSON`.

Specifies content of the image in SVG format.

```js
{
    block : 'image',
    content : '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16"><path d="M13.5.5l-8 12L1.7 8l-1 1.6L5.6 15l9.1-13.4z"/></svg>'
}
```
