# icon

Блок `icon` используется в качестве графического элемента в других блоках. Иконка задается через свойство `background` и, соответственно, не имеет возможности оставить резервный вариант отображения в случае проблем с применением стилей.

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>Адрес иконки.</td>
    </tr>
</table>


Иконку можно задать используя:

* модификатор

```bemjson
{
    block : 'icon',
    mods : { social : 'twitter' }
}
```
* поле `url`

```bemjson
{
    block : 'icon',
    url : '../../test.blocks/icon/_action/download.svg'
}
```
* поле `content`

```bemjson
{
    block : 'icon',
    content : '<svg class="image" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z"/></svg>'
}
```

Примеры с использованием блока:

```bemjson
{
    block : 'button',
    text : 'Кнопка с иконкой',
    mods : {
        theme : 'normal',
        size : 'm'
    },
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
    mods : {
        theme : 'normal',
        size : 'm'
    },
    icon : {
        block : 'icon',
        url : '../../test.blocks/icon/_action/download.svg'
    }
}
```
