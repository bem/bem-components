# menu-item

Используется как составная часть блока [menu](../menu/menu.ru.md).

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#type">type</a> | <code>'link'</code> | <code>BEMJSON</code> | Пункт меню, реализованный блоком <a href="../link/link.ru.md">link</a>. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href="#hovered">hovered</a> | <code>true</code> | – | Наведение курсором. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#val">val</a> | <code>Number</code>, <code>String</code> | Значение пункта меню. |

## Описание блока

Блок `menu-item` предоставляет возможность изменять состояние, содержимое и тип пунктов меню. Используется только в составе блока `menu`.

### Модификаторы блока

<a name="type"></a>

#### Модификатор `type`

Допустимое значение: `'link'`.

Способ использования: `BEMJSON`.

Используется для создания пунктов меню, реализованных с помощью блока [link](../link/link.ru.md), который помещается в поле `content` BEMJSON-декларации блока.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm' },
    content : [
        {
            block : 'menu-item',
            mods : { type : 'link' },
            content : {
                block : 'link',
                url : 'https://bem.info/',
                content : 'bem.info'
            }
        },
        {
            block : 'menu-item',
            mods : { type : 'link' },
            content : {
                block : 'link',
                url : 'https://tech.yandex.ru/',
                content : 'tech.yandex.ru'
            }
        }
    ]
}
```
<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm' },
    content : [
        {
            block : 'menu-item',
            mods : { disabled : true },
            content : 'BH'
        },
        {
            block : 'menu-item',
            content : 'BEMHTML'
        }
    ]
}
```

<a name="hovered"></a>
#### Модификатор `hovered`

Допустимое значение: `true`.

Способ использования: – .

Выставляется автоматически при наведении курсором на пункт меню.

### Специализированные поля блока

<a name="val"></a>
#### Поле `val`

Тип: `Number`, `String`.

Определяет значение пункта меню.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    val : 'item-1',
    content : [
        {
            block : 'menu-item',
            val : 'item-1',
            content : 'BH'
        },
        {
            block : 'menu-item',
            val : 'item-2',
            content : 'BEMHTML'
        }
    ]
}
```
