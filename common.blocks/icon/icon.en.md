# icon

`<i>`-based block for using as a graphical element in other blocks, not for independent usage. Icon is set as `background` property and unables to display fallback text if some problems with styles occur.

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
    url : '../../test.blocks/icon/_action/download.svg'
}
```

You can also use the field `content` for an icon representation:

```bemjson
{
    block : 'icon',
    content : '<svg class="image" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z"/></svg>'
}
```

```bemjson
{
    block : 'button',
    text : 'with icon',
    mods : { theme : 'islands', size : 'm' },
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
    mods : { theme : 'islands', size : 'm' },
    icon : {
        block : 'icon',
        url : '../../test.blocks/icon/_action/download.svg'
    }
}
```
