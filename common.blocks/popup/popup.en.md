# popup

Use this block for creating some blocks that are displayed above all other elements on a page.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#target">target</a> | <code>'anchor'</code>, <code>'position'</code> | <code>BEMJSON</code> | The target point of the popup. |
| <a href="#visible">visible</a> | <code>true</code> | <code>JS</code> | Displaying of the popup. |
| <a href="#autoclosable">autoclosable</a> | <code>true</code>| <code>BEMJSON</code> | Autoclosing of the popup. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | A custom design. |

### Custom fields of the block

| Field | Type | Description |
| ---- | --- | -------- |
| <a href="#directions">directions</a> | <code>Array</code> | Popup position (in priority order) depending on the target point. Use only for popups with the <a href="#popuptarget">target</a> modifier. |
| <a href="#mainOffset">mainOffset</a> | <code>Number</code> | Popup offset (in pixels) along the main direction. Use only for popups with the <a href="#popuptarget">target</a> modifier. |
| <a href="#secondaryOffset">secondaryOffset</a> | <code>Number</code>| Popup offset (in pixels) along the secondary direction. Use only for popups with the <a href="#popuptarget">target</a> modifier. |
| <a href="#viewportOffset">viewportOffset</a> | <code>Number</code>| The minimum popup offset (in pixels) from a viewport border. Use only for popups with the <a href="#popuptarget">target</a> modifier. |
| <a href="#zIndexGroupLevel">zIndexGroupLevel</a> | <code>Number</code> | The level of the popup layer based on the <a href="../z-index-group/z-index-group.en.md">z-index-group</a> block.|

## Block description

Use the `popup` block to control the state, behavior and appearance of the popups that are always displayed above all other elements on a page.

### Modifiers of the block

<a name="target"></a>

#### `target` modifier

Acceptable values: `'anchor'`, `'position'`.

Use case: `BEMJSON`.

Use to set the target point of the popup.

<a name="target-anchor"></a>

##### Anchor (`target` modifier with `anchor` value)

Use to set a block or an elements as the target point of the popup.

The `popup` block supports a nested structure of multiple simultaneous popups. It means that it is possible to open a child popup within a parent one. When the parent popup closes, it hides all its childs popups.

Use the [setAnchor](https://bem.info/libs/bem-components/v2/desktop/popup/jsdoc/) method for correct work of the block.

##### Position coordinates (`target` modifier with `position` value)

The modifier allows to set the position coordinates as the target point of the popup.

Use the [setPosition](https://bem.info/libs/bem-components/v2/desktop/popup/jsdoc/) method for correct work of the block.

<a name="visible"></a>

#### `visible` modifier

Acceptable value: `true`.

Use cases: `JS`.

The modifier is set automatically when the popup is displayed.

<a name="autoclosable"></a>

#### `autoclosable` modifier

Acceptable value: `true`.

Use case: `BEMJSON`.

The modifier with the `true` value allows to hide the popup automatically by clicking outside the popup area or pressing `Escape` button.

```javascript
{
    block : 'popup',
    mods : { theme : 'islands', autoclosable : true },
    content : 'Click outside the popup area to close it'
}
```

<a name="theme"></a>

#### `theme` modifier

Acceptable value: `'islands'`.

Use case: `BEMJSON`.

The modifier gives the block a custom design.

```javascript
{
    block : 'popup',
    mods : { theme : 'islands' },
    content : 'Content of the popup'
}
```

### Custom fields of the block

<a name="directions"></a>

#### `directions` field

Type: `Array`.

Specifies the popup position (in the priority order) depending on the target point.
Use only for popups with the <a href="#popuptarget">target</a> modifier.

<a name="directions-type"></a>
The popup position is set automatically based on the acceptable directions list and the target point position. The acceptable positions have main and secondary parameters: for example, for the `bottom-left` direction the main parameter is `bottom`, and the secondary one is `left`.

By default the following admissible directions are available:

* bottom-left
* bottom-center
* bottom-right
* top-left
* top-center
* top-right
* right-top
* right-center
* right-bottom
* left-top
* left-center
* left-bottom

To set the popup position, an array of possible directions must be declared in BEMJSON. The most suitable direction will be selected automatically depending on the target point position on a page.

For example, to open the `popup` at the top of the parent block use the `top-left`, `top-center` and `top-right` values:

```javascript
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'islands', target : 'anchor' },
    directions : ['top-left', 'top-center', 'top-right'],
    content : 'Content of the popup'
}
```

An example of the `right-center` position:

```javascript
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'islands', target : 'anchor' },
    directions : ['right-center'],
    content : 'Content of the popup'
}
```
<a name="mainOffset"></a>

#### `mainOffset` field

Type: `Number`.

Specifies the popup offset (in pixels) along the main direction.

Use only for popups with the <a href="#popuptarget">target</a> modifier.

```javascript
{
    block : 'popup',
    mods : { theme: 'islands', target : 'anchor' },
    directions : ['right-center'],
    content : 'Content of the popup',
    mainOffset : 100
}
```

<a name="secondaryOffset"></a>

#### `secondaryOffset` field

Type: `Number`.

Specifies the popup offset (in pixels) along the secondary direction.

Use only for popups with the <a href="#popuptarget">target</a> modifier.

```javascript
{
    block : 'popup',
    mods : { theme: 'islands', target : 'anchor' },
    directions : ['right-center'],
    content : 'Content of the popup',
    secondaryOffset : 100
}
```

<a name="viewportOffset"></a>

#### `viewportOffset` field

Type: `Number`.

Specifies the minimum popup offset (in pixels) from a viewport border.

Use only for popups with the <a href="#popuptarget">target</a> modifier.

```javascript
{
    block : 'popup',
    mods : { theme: 'islands', target : 'anchor' },
    directions : ['right-center'],
    content : 'Content of the popup',
    viewportOffset : 100
}
```

<a name="zIndexGroupLevel"></a>

#### `zIndexGroupLevel` field

Type: `Number`.

Specifies the level of the popup layer based on the <a href="../z-index-group/z-index-group.en.md">z-index-group</a> block.
