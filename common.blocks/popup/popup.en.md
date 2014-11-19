# popup

`popup` block is used to create and manage state, behavior and appearance of popups. It can be triggered by a button or a pseudo link. Popup is always displayed above all other elements on a page.

When `popup` is opened for the first time (`visible` modifier with `true` value is set) block's DOM element is created in the end of the document `<body>`.

## Initialization of a block

To display `popup` when `visible` modifier is assigned, block should be initialized to `setTarget` method. `setTarget` needs to determine the popup position on a page. It can be performed:

* according to a parent block position. In this case the parent DOM element or BEM block should be passed as an argument to `setTarget`;
* by direct coordinates defining. The first and the second arguments passed to `setTarget` define left and top margins on a page: `setTarget(x-coordinate, y-coordinate)`.

The method returns `this`.

## Quick overview

### Custom fields of a block

The following custom fields could be specified in BEMJSON declaration of the block:

| Field | Type | Description |
| ---- | --- | -------- |
| <a href=#directions>directions</a> | <code>Array</code> | Specifies position (e.g., <code>bottom-left</code>, where <code>bottom</code> is main direction and <code>left</code> - secondary) of `popup` relative to the element that triggers it.|
| <a href=#mainOffset>mainOffset</a> | <code>String</code> | Specifies offset along the main direction.|
| <a href=#mainOffset>secondaryOffset</a> | <code>String</code>| Specifies offset along the secondary direction.|
| viewportOffset | <code>String</code>| Specifies offset from the viewport (browser window).|
| zIndexGroupLevel | <code>String</code> | Specifies level of a layer for popups' opening. Uses <a href="../z-index-group/z-index.group.ru.md">z-index-group</a> block.|


Additional required HTML attributes could be specified in `attrs` field of BEMJSON.

### Modifiers of a block

| Modifier | Permissible values| Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#popuptheme>theme</a> | <code>'simple'</code>, <code>'normal'</code> | <code>BEMJSON</code> |  Custom design. |
| <a href=#popupvisible>visible</a> | | | |
| <a href=#popupautoscalable>autoscalable</a> | <code>'true'</code>| <code>BEMJSON</code> | |

<a name="popuptheme"></a>

### `theme` modifier

Permissible values: `'simple'`, `'normal'`.

Use cases:

If `theme` modifier is not specified, [native](#native) representation of a control is applied.

Example:

<a name="native"></a>


```
{
    block : 'popup',
    content : 'default'
}
```


```
{
    block : 'popup',
    mods : { theme : 'simple' },
    content : 'simple'
}
```


```
{
    block : 'popup',
    mods : { theme : 'normal' },
    content : 'normal'
}
```
<a name="popupvisible"></a>

### `visible` modifier

`visible` modifier is set automatically when `popup` is displayed. When `popup` is hidden, `visible` modifier is removed.

**NB:** this block's version does not support manual selection of `visible` modifier in BEMJSON.

<a name="popupautoscalable"></a>

#### `autoscalable` modifier

Permissible value: `'true'`

Use case:

When `autoscalable` modifier with `true` is set to `popup` block, mouse click outside the popup area hides it automatically.

Example:

```
{
    block : 'popup',
    mods : { theme : 'normal', autoclosable : true },
    content : 'normal'
}
```

<a name="direction"></a>

## Popup opening direction  `direction`

This modifier controls position of `popup` relative to the element that triggers it.

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

Required popup positions can be listed as JS parameters with `directions` key in BEMJSON declaration. The most suitable directions will be chosen among provided values  according to a parent block position on a page.

For example, to open `popup` at the top of the parent block use `top-left`, `top-center` and `top-right` values:

```
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'simple' },
    directions : ['top-left', 'top-center', 'top-right'],
    content : 'Popup message'
}
```

To open `popup` strictly at the `center-right` position do the following:

```
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'simple' },
    directions : ['right-center'],
    content : 'Popup message'
}
```
<a name="mainOffset"></a>

Use `mainOffset` and/or `secondaryOffset` parameters to manage the offset direction:

```
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'normal' },
    direction : ['right-center'],
    mainOffset : 100,
    secondaryOffset : 100,
    content : 'Popup message'
}
```

## Relationship between popups

`popup` block supports nested stucture of multiple simultaneous popups. It means you can open popup (child) within another popup (parent) with the parent popup remaining opened.

If `autoscalable` modifier is specified, mouse click outside the parent popup area hides it and all its child automatically.

Child popup blocks can be regarded as a chain of `1` → `2` → `3` → `4`. By clicking on the second element of a chain, third and forth will be closed. By clicking on the first – the second, third and forth will be closed. Clicking outside any popup area of the chain elements will close all popups.
