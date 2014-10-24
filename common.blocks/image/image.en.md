# image

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

## Custom fields of a block

The following custom fields could be specified in BEMJSON declaration of the block:

<table>
    <tr>
        <th>Custom field name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>title</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies icon name. Specifies <code>title</code> HTML attribute to an icon.</td>
    </tr>
    <tr>
        <td>alt</td>
        <td>
            <code>String</code></td>
        <td>Specifies an alternate text for images. It allows a user to view text information about an image when image downloading is impossible.
            <br> This block is recognized by screen readers and other programs.</td>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>Url address to open an image.</td>
    </tr>
    <tr>
        <td>width, height</td>
        <td>
            <code>Number</code>
        </td>
        <td>Values ​​that will be transferred to image attributes with the same names.</td>
    </tr>
</table>
