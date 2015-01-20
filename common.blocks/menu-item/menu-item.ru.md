# menu-item

Используется как составная часть блока [menu](../menu/menu.ru.md).

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#type">type</a> | <code>'link'</code> | <code>BEMJSON</code> | Пункт меню, реализованный блоком <a href="../link/link.ru.md">link</a>. |
| <a href="#checked">checked</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Выбор пункта меню. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href="#hovered">hovered</a> | <code>true</code> | – | Наведение курсором. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер пункта меню. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#val">val</a> | <code>Number</code>, <code>String</code> | Значение пункта меню. |

## Описание блока

Блок `menu-item` предоставляет возможность изменять состояние, содержимое и тип пунктов меню.

### Модификаторы блока

<a name="type"></a>

#### Модификатор `type`

Допустимое значение: `'link'`.

Способ использования: `BEMJSON`.

Используется для создания пунктов меню, реализованных с помощью блока [link](../link/link.ru.md), который помещается в поле `content` BEMJSON-декларации блока.

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm', type : 'link' },
    content : {
        block : 'link',
        url : 'https://bem.info/',
        content : 'bem.info'
    }
}
```

<a name="checked"></a>

#### Модификатор `checked`

Допустимое значение: `true`.

Способ использования: `BEMJSON`, `JS`.

Используется для выбора пункта меню.

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm', checked : true },
    content : 'Понять БЭМ'
}
```

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm', disabled : true },
    content : 'Понять БЭМ'
}
```

<a name="hovered"></a>
#### Модификатор `hovered`

Допустимое значение: `true`.

Способ использования: – .

Выставляется автоматически при наведении курсором на пункт меню.

<a name="theme"></a>
#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Отвечает за стилевое оформление блока.

Необходимо использовать с модификатором [size](#size).

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm' },
    content : 'Понять БЭМ'
}
```

<a name="size"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Задает размер блоку.

Необходимо использовать с модификатором <a href="#theme">theme</a> в значении `islands`.

**s**

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 's' },
    content : 'Понять БЭМ'
}
```

**m**

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm' },
    content : 'Понять БЭМ'
}
```

**l**

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'l' },
    content : 'Понять БЭМ'
}
```

**xl**

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'xl' },
    content : 'Понять БЭМ'
}
```


### Специализированные поля блока

<a name="val"></a>
#### Поле `val`

Тип: `Number`, `String`.

Определяет значение пункта меню.

```js
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm' },
    content : 'Понять БЭМ',
    val : '1'
}
```
