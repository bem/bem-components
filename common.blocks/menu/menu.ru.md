# menu

Блок `menu` используется для создания различных типов меню и селектов.

Он предоставляет возможность изменять размер и внешний вид блоков меню, управлять поведением вложенных независимых блоков – пунктов меню (блок [menu-item](../menu-item/menu-item.ru.md)).

В результате BEMHTML-преобразований на странице блок становится HTML-элементом с тегом `<div>` и свойством `role="menu"`.

Доступны следующие типы `menu` (тип блока `menu` зависит от значения модификатора [`_mode`](#types)):

* простой список (модификатор `mode` не установлен);
* меню-переключатель (`menu_mode_radio`);
* меню с одиночным выбором (`menu_mode_radio-check`);
* меню с множественным выбором (`menu_mode_check`).

## Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * islands (**Важно:** При выборе темы `islands` необходимо указывать обязательный модификатор [size](#size).)

Без указания модификатора `theme` отображается [нативный](#native) вид контрола.

Наглядно показано на примерах ниже:

<a name="native"></a>
**default**

```bemjson
{
    block : 'menu',
    mods : { mode : 'check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

**simple**

```bemjson
{
    block : 'menu',
    mods : { theme : 'simple', mode : 'check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

**islands**

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'm' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

### Размеры `_size`

Реализован только в теме `islands`.

Доступно четыре размера реализации блока: **s**, **m**, **l**, **xl**.

<table>
    <tr>
        <th>Размер блока</th>
        <th>Размер шрифта</th>
        <th>Высота строки <code>line-heigh</code></th>
    </tr>
    <tr>
        <td>s</td>
        <td>13px</td>
        <td>24px</td>
    </tr>
    <tr>
        <td>m</td>
        <td>13px</td>
        <td>24px</td>
    </tr>
    <tr>
        <td>l</td>
        <td>15px</td>
        <td>28px</td>
    </tr>
    <tr>
        <td>xl</td>
        <td>15px</td>
        <td>32px</td>
    </tr>
</table>

Наглядно показано на примерах ниже:

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 's' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'm' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'l' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'xl' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

### Типы `_mode`

Блок представлен следующими типами:

* простой список (модификатор `mode` не установлен). Пункт меню не может быть выбран щелчком мышью или любым другим способом.

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

* меню-переключатель (`menu_mode_radio`).  Применяется для создания меню, позволяющего только одиночный выбор.

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```

* меню с одиночным выбором (`menu_mode_radio-check`). Позволяет оставить список без выбранных элементов. При щелчке мышью по пункту списка, его состояние меняется на противоположное.

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            mods : { checked : true },
            val : 2,
            content : 'Second item'
        }
    ]
}
```

* меню с множественным выбором (`menu_mode_check`). Позволяет оставить список без выбранных элементов. При щелчке мышью по пункту списка, его состояние меняется на противоположное.

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            mods : { checked : true },
            val : 2,
            content : 'Second item'
        }
    ]
}
```

### Состояния блока

#### Неактивен `_disabled`

В состоянии «неактивен» блок виден, но недоступен для действий пользователя. Такой блок не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами. В большинстве случаев к неактивному блоку применяются дополнительные стили, чтобы выделить его на странице.

Если блок `menu` получает модификатор `disabled`, то все вложенные в него блоки `menu-item` также становтся неактивными.

#### В фокусе `_focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

## Элементы блока

Визуально представлен следующими элементами:

### __group

Элемент `__group` служит для группировки пунктов меню. Пункты, которые нужно сгруппировать, помещаются в поле `content` элемента `group`. В теме `islands` группы визуально разделяются серой чертой.

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'New'
        },
        {
            elem : 'group',
            content : [
                {
                    block : 'menu-item',
                    mods : { checked : true },
                    val : 2,
                    content : 'Open'
                },
                {
                    block : 'menu-item',
                    val : 3,
                    content : 'Open Recent'
                }
            ]
        },
        {
            block : 'menu-item',
            val : 4,
            content : 'Open Not so Recent'
        }
    ]
}
```

### __group-title

Элемент позволяет задать заголовок для группы пунктов меню, создаваемой с помощью элемента `group`.

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'New'
        },
        {
            elem : 'group',
            title : 'Cool title',
            content : [
                {
                    block : 'menu-item',
                    mods : { checked : true },
                    val : 2,
                    content : 'Open'
                },
                {
                    block : 'menu-item',
                    val : 3,
                    content : 'Open Recent'
                }
            ]
        }
    ]
}
```
