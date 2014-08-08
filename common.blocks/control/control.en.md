# control

`control` block is used to implement common functionality of the following blocks:

* [attach](../attach/attach.en.md)
* [button](../button/button.en.md)
* [checkbox](../checkbox/checkbox.en.md)
* [input](../input/input.en.md)
* [link](../link/link.en.md)
* [menu](../menu/menu.en.md)
* [radio](../radio/radio.en.md)

`control` block provides:

* with `focused` and` disabled` states implementation at `common.blocks` level;
* with `hovered` state implementation at `desktop.blocks` level;
* with valid `tabIndex` attribute value depending on current state of the block.

Methods of a block:

<table>
    <tr>
        <th>Method</td>
        <th>Description</td>
    </tr>
    <tr>
        <td><code>getVal</code></td>
        <td>Returns a control value.</td>
    </tr>
    <tr>
        <td><code>getName</code></td>
        <td>Returns a name of a control (if available). If control name is not available, returns an empty string.</td>
    </tr>
</table>
