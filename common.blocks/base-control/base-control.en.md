# base-control

Auxiliary block designed to implement the common functionality of the most blocks of [bem-components](https://github.com/bem/bem-components) library to provide them `focused` and `disabled` states: [attach](https://github.com/bem/bem-components/blob/v2/common.blocks/attach/attach.en.md), [button](https://github.com/bem/bem-components/blob/v2/common.blocks/button/button.en.md), [checkbox](https://github.com/bem/bem-components/blob/v2/common.blocks/checkbox/checkbox.en.title.txt), [input], [link], [menu], [radio].

The block uses the following methods:

<table>
    <tr>
        <th>Method</td>
        <th>Description</td>
    </tr>
    <tr>
        <td>`beforesetMod`</td>
        <td>Provides the block behavior before the modifier is set. Checks the block active state. If block is `disabled` it cannot be `focused`.</td>
    </tr>
    <tr>
        <td>`setMod`</td>
        <td>Provides `focused` or `disabled` modifier to the block.</td>
    </tr>
    <tr>
        <td>`getName`</td>
        <td>Returns the name of the control (if available). If a control name is not available, returns an empty string.</td>
    </tr>
    <tr>
        <td>`getVal`</td>
        <td>Returns control value.</td>
    </tr>
</table>
