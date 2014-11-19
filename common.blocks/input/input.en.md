# input

`input` block is designed to create different types of text fields:

* input field (default value);
* text area;
* password field;
* search form.


## Quick overview

### Modifiers of the block

| Modifier | Available value| Use cases| Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#theme>theme</a> | <code>'simple', 'islands' </code> | <code>BEMJSON</code> | Custom design. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Size of text field. Ued only for <a href="#theme">text field with modifier</a> <code>theme</code> in the <code>islands</code> value.|
| <a href=#type>type</a> | <code>'textarea'</code>, <code>'password'</code>, <code>'search'</code>  | <code>BEMJSON</code> | Types of text fields. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Disabled state. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | The block is in focus. |
| <a href=#has-clear>has-clear</a> | <code>true</code> | <code></code> | |

### Custom fields of the block

The following custom fields could be specified in BEMJSON declaration of the block:

| Field | Type | Description |
| ---- | --- | -------- |
| val| <code>String</code> | Specifies value that will be sent to a server or obtained using client scripts. It is empty by default. Pair <code>name=val</code> is sent to a server, where name is set by <code>name</code> attribute and value – by <code>val</code> attribute.|
| name | <code>String</code> | Defines name of an input field that is used for its identification. |
| placeholder | <code>String</code> | A hint that describes expected value of an input field. |
| id | <code>String</code> | Unique block identifier. Should be specified manually in BEMJSON file. |
| maxLength | <code>String</code> | Specifies maximum number of characters allowed in input field. |
| tabIndex | <code>String</code> | Specifies the position of current <code>input</code> block in the tabbing order for current page. |

Additional required HTML attributes could be specified in `attrs` field of BEMJSON.

## Block overview

### Modifiers of the block

<a name="theme"></a>

#### `theme` modifier

Available values: `simple`, `islands`.

Use case:

If `theme` modifier is not specified, [native](#native) representation of a control is applied.

Example:

<a name="native"></a>

```bemjson
{
    block : 'input',
    placeholder : 'default'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'simple' },
    placeholder : 'simple'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'islands'
}
```

<a name="size"></a>

#### `size` modifier

Available values for `islands` theme: `'s'`, `'m'`, `'l'`, `'xl'`.

Use case: `BEMJSON`.

Provides with size values to all types of text fields.

Example:

```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size: 's' },
    placeholder : 'Small'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'Medium'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size: 'l' },
    placeholder : 'Large'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size: 'xl' },
    placeholder : 'X-Large'
}
```
<a name="type"></a>

#### `type` modifier

Available values: `'textarea'`, `'password'`, `'search'`.

Use case:

If `type` modifier is not specified, `input` block obtains `<input type="text"/>` value by default.

Example:

```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', type : 'textarea' },
    placeholder : 'Text area'
}
```


```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size: 'm', type : 'password' },
    placeholder : 'Password field'
}
```


```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', type : 'search' },
    placeholder : 'Search form'
}
```
<a name="disabled"></a>

#### `disabled` modifier

Available modifier: `true`.

Use case:

`disabled` modifier is used to make block visible but not available for user action. It cannot be focused by pressing ‘Tab’, clicking a mouse, etc. In most cases to mark out the disabled block on a page, additional styles are applied.

Example:

```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', disabled : true },
    val : 'Неактивно'
}
```
<a name="focused"></a>

#### `focused` modifier

Available value: `true`.

Use case:

When a block is focused, a modifier `focused` with `true` value is set automatically, e.g. by pressing `Tab` or clicking a mouse.

<a name="has-clear"></a>

#### `has-clear` modifier

Available value: `true`.

Use cas:

`has-clear` modifier is set automatically when some data is entered into an input field. This modifier is used to add [`clear`](#clear_elem) element.

## Block elements

The following elements provide visual representation of `input` block:

<a name="clear_elem"></a>
### __clear

This element is used to clear `input` field content.

### __box

Element for grouping native `<input>` field and additional elements (e.g `clear`).

An auxiliary element is added to the block on template engine level.
### __control

An auxiliary element is added to the block on template engine level.
