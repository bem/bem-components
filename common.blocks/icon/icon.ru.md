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
    url : '../../../test.blocks/icon/_action/download.svg'
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
        url : '../../../test.blocks/icon/_action/download.svg'
    }
}
```
