# icon

`<i>`-based block for using as an element in other blocks, not for independent using. Picture is set as `background` property.

In BEMJSON you can use both the modifier and the `url` field for a picture representation:

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
        icon : { block : 'icon', mods : { social : 'twitter' } }
    }
```

```bemjson
    {
        block : 'checkbox',
        mods : { theme : 'simple', type : 'button' },
        text : 'icon',
        icon : { block : 'icon', mods : { action : 'download' } }
    }
```

```bemjson
    {
        block : 'button',
        text : 'with icon',
        mods : { theme : 'normal', size : 'm' },
        icon : { block : 'icon', url : '../../../test.blocks/icon/_action/download.svg' }
    }
```
