# image

The blocks is used for images representation.

## Short information

### Custom fields of a block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href=#title>title</a> | <code>String</code> | Specifies icon name.  |
| <a href=#alt>alt</a> | <code>String</code> | Specifies an alternate text for images. |
| <a href=#url>url</a> | <code>String</code> | URL address to open an image. |
| <a href=#width>width</a> | <code>Number</code> | Specifies icon width. |
| <a href=#height>height</a> | <code>Number</code> | Specifies icon height. |


## Block overview

`<img>`-based block is used for images representation with different content types e.g., logo.

```bemjson
{
    block : 'image',
    url : 'http://bem.info/m/_/IvuRSFeBStMXdBhBrBvKagSd5sE.svg',
    width : 100,
    height : 100,
    alt : 'BEM',
    title : 'Find us on bem.info'
}
```

### Custom fields of a block

<a name="title"></a>
#### `title`

Specifies icon name. Specifies `title` HTML attribute to an icon.

<a name="alt"></a>
#### `alt`

Specifies an alternate text for images. It allows a user to view text information about an image when image downloading is impossible. This block is recognized by screen readers and other programs.

<a name="url"></a>
#### `url`

URL address to open an image.

<a name="width"></a>
#### `width`

Specifies icon width.

<a name="height"></a>
#### `height`

Specifies icon height.
