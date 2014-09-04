# icon

Блок `icon` используется в качестве графического элемента в других блоках. В HTML представлен тегом `<i>`. Иконка задается через свойство `background` и, соответственно, не имеет возможности оставить резервный вариант отображения в случае проблем с применением стилей.

Иконку можно передать как через модификатор, так и через поле `url`:

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

Иконку можно так же вставить через поле `content`:

```bemjson
{
    block : 'icon',
    content : '<svg class="image" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z"/></svg>'
}
```

```bemjson
{
    block : 'button',
    text : 'Кнопка с иконкой',
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
        url : '../../test.blocks/icon/_action/download.svg'
    }
}
```
