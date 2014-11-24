# menu-item

Используется как составная часть блока [`menu`](../menu/menu.ru.md).

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#type>type</a> | <code>'link'</code> | <code>BEMJSON</code> | Реализация пункта меню блоком <a href="../link/link.ru.md">link</a>. |
| <a href=#checked>checked</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Выбор пункта меню. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#hovered>hovered</a> | <code>true</code> | <code>JS</code> | Наведение курсором. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер шрифта и отступов пункта меню. |
| <a href=#theme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#val>val</a> | <code>String</code> | Значение, возвращаемое пунктом меню, если он выбран. |

## Обзор блока

Блок `menu-item` предоставляет возможность изменять состояние, содержимое и тип пунктов меню.

### Модификаторы блока

<a name="type"></a>

#### Модификатор `type`

Допустимые значения: `'link'`.

Способ использования: BEMJSON.

Модификатор `type` в значении `link` используется для создания пунктов меню, реализованных с помощью блока [link](../link/link.ru.md).

Блок `link` при этом помещается в поле `content` BEMJSON-декларации блока. Все модификаторы блока `link` могут быть переданы пункту меню `menu-item`.

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm', type : 'link' },
    content : {
        block : 'link',
        url : 'ru.bem.info',
        content : 'bem.info'
    }
}
```

<a name="checked"></a>

#### Модификатор `checked`

Допустимые значения: `true`.

Способ использования: BEMJSON, JS.

Модификатор `checked` в значении `true` используется для выбора пункта меню.


```bemjson
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm', checked : true },
    content : 'Понять БЭМ'
}
```

<a name="hovered"></a>
#### Модификатор `hovered`

Допустимое значение: `true`.

Способ использования: JS.

Модификатор `hovered` в значении `true` выставляется программно при наведении курсором на пункт меню.

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm', disabled : true },
    content : 'Понять БЭМ'
}
```

<a name="size"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Задает размер шрифта и отступы.

Модификатор `size` используется, только если блоку установлен модификатор <a href="#theme">theme</a> в значении `islands`.

**s**

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 's' },
    content : 'Понять БЭМ'
}
```

**m**

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm' },
    content : 'Понять БЭМ'
}
```

**l**

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'l' },
    content : 'Понять БЭМ'
}
```

**xl**

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'xl' },
    content : 'Понять БЭМ'
}
```

<a name="theme"></a>
#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Модификатор отвечает за стилевое оформление блока.

При выборе модификатора `theme` в значении `islands` необходимо обязательно указывать модификатор <a href="#size">size</a>.

Без указания модификатора `theme` отображается нативный вид контрола.

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm' },
    content : 'Понять БЭМ'
}
```

### Специализированные поля блока

<a name="val"></a>
#### `val`

Значение, возвращаемое пунктом меню, если он выбран.

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'islands', size : 'm' },
    content : 'Понять БЭМ',
    val : 'true'
}
```
