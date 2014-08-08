# popup

`popup` block is used to create and manage state, behavior and appearance of popups. It can be triggered by a button or a pseudo link. Popup is always displayed above all other elements on a page.

When `popup` is opened for the first time (`visible` modifier with `true` value is set) block's DOM element is created in the end of the document `<body>`.

## Initialization of a block

To display `popup` when `visible` modifier is assigned, block should be initialized to `setTarget` method. `setTarget` needs to determine the popup position on a page. It can be performed:

* according to a parent block position. In this case the parent DOM element or BEM block should be passed as an argument to `setTarget`;
* by direct coordinates defining. The first and the second arguments passed to `setTarget` define left and top margins on a page: `setTarget(x-coordinate, y-coordinate)`.

The method returns `this`.

## Modifiers of a block

### _theme

Block supports the following themes:

 * simple
 * normal

If `theme` modifier is not specified, [native](#native) representation of a control is applied.

See following examples:

<a name="native"></a>
**default**

```bemjson
{
    block : 'popup',
    content : 'default'
}
```

**simple**

```bemjson
{
    block : 'popup',
    mods : { theme : 'simple' },
    content : 'simple'
}
```

**normal**

```bemjson
{
    block : 'popup',
    mods : { theme : 'normal' },
    content : 'normal'
}
```

### States of a block

#### _visible

`visible` modifier is set automatically when `popup` is displayed. When `popup` is hidden, `visible` modofier is removed.

#### `_autoscalable`

When `autoscalable` modifier with `true` is set to `popup` block, mouse click outside the popup area hides it automatically.

```bemjson
{
    block : 'popup',
    mods : { theme : 'normal', autoclosable : true },
    content : 'normal'
}
```

### Popup opening direction `_direction`

This modifier controls position of `popup` ralative to the element that trigges it.

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

Required popup positions can be listed as JS parameters with `direction` key in BEMJSON declaration. The most suitable directions will be chosen among provided values  according to a parent block position on a page

For example, to open `popup` at the top of the parent block use `top-left`, `top-center` and `top-right` values:

```bemjson
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'simple' },
    directions : ['top-left', 'top-center', 'top-right'],
    content : 'Hello, world!'
}
```

To open `popup` strictly at the `center-right` position do the following:

```bemjson
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'simple' },
    directions : ['right-center'],
    content : 'Hello, world!'
}
```

## Relationship between popups

`popup` block supports a nested stucture of multiple simultaneous popups. It means you can open popup (child) within another popup (parent) with the parent popup remaining opened.

If `autoscalable` modifier is specified, mouse click outside the parent popup area hides it and all its child automatically.

Child popup blocks can be regarded as a chain of `1` → `2` → `3` → `4`. By clicking on the second element of a chain, third and forth will be closed. By clicking on the first – the second, third and forth will be closed. Clicking outside any popup area of the chain elements will close all popups.
