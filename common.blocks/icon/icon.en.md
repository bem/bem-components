# icon

`<i>`-based block for using as a graphical element in other blocks, not for independent usage. Icon is set as `background` property and unables to fallback.

In BEMJSON you can use both the modifier and the `url` field for an icon representation:
```bemjson
{
    block : 'icon',
    mods : { social : 'twitter' }
}
```

```bemjson
{
    block : 'icon',
    url : '../../../test.blocks/icon/_action/download.svg'
}
```

```bemjson
{
    block : 'button',
    text : 'with icon',
    mods : { theme : 'normal', size : 'm' },
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

```bemjson
{
    block : 'button',
    text : 'with icon',
    mods : { theme : 'normal', size : 'm' },
    icon : {
        block : 'icon',
        url : '../../../test.blocks/icon/_action/download.svg'
    }
}
```
