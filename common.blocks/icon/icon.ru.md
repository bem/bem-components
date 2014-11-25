# icon

Используется в качестве графического элемента в других блоках.

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#social>social</a> | <code>'twitter'</code>, <code>'facebook'</code>, <code>'vk'</code> | <code>BEMJSON</code> | Социальные иконки. |
| <a href=#action>action</a> | <code>'download'</code>, <code>'arrow'</code> | <code>BEMJSON</code> | Иконки действия. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#url>url</a> | <code>String</code> | Адрес, по которому подгружается картинка.. |

## Обзор блока

Блок `icon` задается через свойство `background` и, соответственно, не имеет возможности оставить резервный вариант отображения в случае проблем с применением стилей.

Иконка может быть добавлена через поле `content`:

```bemjson
{
    block : 'icon',
    content : '<svg class="image" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z"/></svg>'
}
```

### Модификаторы блока

<a name="social"></a>

#### Модификатор `social`

Допустимое значение: `'twitter'`, `'facebook'`, `'vk'`.

Способ использования: `BEMJSON`.

Модификатор `social` используется для добавления иконок социальных сетей.

```bemjson
{
    block : 'icon',
    mods : { social : 'twitter' }
}
```

<a name="action"></a>

#### Модификатор `action`

Допустимое значение: `'download'`, `'arrow'`.

Способ использования: `BEMJSON`.

Модификатор `action` используется для добавления иконок действия.

```bemjson
{
    block : 'icon',
    mods : { action : 'download' }
}
```

### Специализированные поля блока

<a name="url"></a>

#### Поле `url`

Определяет адрес иконки.

```bemjson
{
    block : 'icon',
    url : '../../test.blocks/icon/_action/download.svg'
}
```

### Примеры с использованием блока

```bemjson
{
    block : 'button',
    text : 'twitter',
    mods : { theme : 'normal', size : 'm' },
    icon :
    {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

```bemjson
{
    block : 'button',
    text : 'Скачать',
    mods : { theme : 'normal', size : 'm' },
    icon :
    {
        block : 'icon',
        url : '../../test.blocks/icon/_action/download.svg'
    }
}
```
