# image

`<img>`-based block is designed for images pasting, using as a content (logo, for example).

```bemjson
{
    block : 'image',
    url : 'http://bem.info/m/_/20zuV2gLiyoaqrHv9LoBRTmB0Ow.svg',
    width : 100,
    height : 100,
    alt : 'BEM',
    title : 'Find us on bem.info'
}
```

## Valid block's attributes

Valid block's attributes could be specified within corresponding fields of block's BEMJSON file:

<table>
    <tr>
        <th>Attribute</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>title</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies icon name.</td>
    </tr>
    <tr>
        <td>alt</td>
        <td>
            <code>String</code></td>
        <td>A mandatory attribute. Specifies an alternate text for images. This text type allows user to obtain text information about an image when it is impossible to download. <br> This block is recognized by screen readers for alternative playback.</td>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>An url address to open image.</td>
    </tr>
    <tr>
        <td>width, height</td>
        <td>
            <code>Number</code>
        </td>
        <td>Values ​​that will be transferred to image's attributes with same names.</td>
    </tr>
</table>

Other valid block's attributes could be specified in `attrs` field in BEMJSON.
