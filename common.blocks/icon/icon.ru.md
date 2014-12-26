# icon

Используется в качестве вспомогательного декоративного изображения в других блоках.

## Обзор блока

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#url">url</a> | <code>String</code> | Адрес иконки. |
| <a href="#content">content</a> | <code>BEMJSON</code>, <code>String</code> | Контент изображения в формате SVG. |

## Описание блока

Используется в качестве вспомогательного декоративного изображения в других блоках.
Адаптирован для выравнивания по базовой линии строки.

Для создания самостоятельного изображения используйте блок [image](../image/image.ru.md).

Пример добавления иконки с помощью модификатора. Для реализации используется служебный уровень `test.blocks` библиотеки `bem-components`.


```js
{
    block : 'icon',
    mods : { social : 'twitter' }
}
```

```js
{
    block : 'button',
    text : 'Download',
    mods : { theme : 'islands', size : 'm' },
    icon : {
        block : 'icon',
        mods : { action : 'download' }
    }
}
```

### Специализированные поля блока

<a name="url"></a>

#### Поле `url`

Тип: `String`.

Определяет адрес иконки.

```js
{
    block : 'button',
    text : 'bem.info',
    mods : { theme : 'islands', size : 'm', view : 'action' },
    icon :
    {
        block : 'icon',
        url : 'https://bem.info/m/_/wuyLRHj8p7lF3eT96kTKumCdXzM.svg'
    }
}
```

<a name="content"></a>

#### Поле `content`

Тип: `BEMJSON`, `String`.

Определяет контент изображения в формате SVG.

```js
{
    block: 'icon',
    content: {
        tag: 'svg',
        cls: 'action_type_download',
        attrs: { xmlns: '...', width: 16, height: 16 },
        content: '<path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z"/>'
    }
}
```

```js
{
    block : 'icon',
    content : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z"/></svg>'
}
```
