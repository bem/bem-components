# control

Auxiliary block designed for common functionality implementation to provide the most blocks of [bem-components](https://github.com/bem/bem-components) library with `focused` and `disabled` states:

* [attach](../attach/attach.en.md)
* [button](../button/button.en.md)
* [checkbox](../checkbox/checkbox.en.md)
* [input](../input/input.en.md)
* [link](../link/link.en.md)
* [menu](../menu/menu.en.md)
* [radio](../radio/radio.en.md)

The `control` block provides valid `tabIndex` attribute value depending on the current state of a block.

The block uses following methods:

<table>
    <tr>
        <th>Method</td>
        <th>Description</td>
    </tr>
    <tr>
        <td>`getVal`</td>
        <td>Returns a control's value.</td>
    </tr>
    <tr>
        <td>`getName`</td>
        <td>Returns the name of the control (if available). If control name is not available, returns an empty string.</td>
    </tr>
</table>
