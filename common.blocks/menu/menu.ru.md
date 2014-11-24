# menu

Используется для создания различных типов меню, а также для реализации блока [select](../select/select.ru.md).

Для своей реализации использует блок [menu-item](../menu-item/menu-item.ru.md).

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | --------------------- | -------- |
| <a href=#mode>mode</a> | <code>'radio'</code>, <code>'radio-check'</code>, <code>'check'</code> | <code>BEMJSON</code> | Тип меню. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code> | В фокусе. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code>  | <code>BEMJSON</code> | Размер блока. |
| <a href=#theme>theme</a> | <code>'simple'</code>, <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Элементы блока

| Элемент | Способы использования | Описание |
| --------| --------------------- | -------- |
| <a href=#group>group</a> | <code>BEMJSON</code> | Визуальная группировка пунктов меню. |


## Обзор блока

Блок предоставляет возможность изменять внешний вид меню и управлять поведением вложенных независимых блоков – [пунктов меню](../menu-item/menu-item.ru.md)).

### Модификаторы блока

<a name="mode"></a>
#### Модификатор `mode`

Допустимые значения: `'check`, `'radio'`, `'radio-check'`.

Способ использования: BEMJSON.

Доступны следующие типы блока `menu`:

* простой список ([модификатор mode не установлен](#mode-none));
* меню с множественным выбором ([модификатор mode в значении check](#mode-check));
* меню-переключатель ([модификатор mode в значении radio](#mode-radio));
* меню с одиночным выбором ([модификатор mode в значении radio-check](#mode-radiocheck)).

<a href="mode-none"></a>
##### Простой список (модификатор mode не установлен)

Без указания модификатора `mode` в каком-либо значении создается простой список без возможности выбрать пункт.

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

<a name="mode-check"></a>
##### Меню с множественным выбором (модификатор `mode` в значении `check`)

Модификатор `mode` в значении `check` позволяет выбрать произвольное количество пунктов меню.

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

<a name="mode-radio"></a>
##### Меню-переключатель (модификатор `mode` в значении `radio`)

Модификатор `mode` в значении `radio` позволяет создать меню, в котором обязательно выбран только один пункт.

Для такого типа меню текст в кнопке устанавливается в зависимости от выбранного пункта. Если пункт не выбран, то по умолчанию выбирается первое значение из списка.

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

<a name="mode-radiocheck"></a>
##### Меню с одиночным выбором (модификатор `mode` в значении `radio-check`)

Модификатор `mode` в значении `radio-check` так же как и <a href="#mode-radio">модификатор mode в значении radio</a> позволяет выбрать только один пункт меню. Принципиальное отличие в том, что в значении `radio-check` есть возможность оставить меню без выбранных пунктов.

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

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

Если блоку `menu` устанавливается модификатор `disabled`, то все вложенные в него блоки `menu-item` также становятся неактивными.


```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check', disabled : true },
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

Модификатор `disabled` в значении `true` может быть выставлен отдельным пунктам меню:

```bemjson
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item',
            disabled : true
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

<a name="focused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `focused` отвечает за наличие фокуса на блоке.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check', focused : true },
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

<a name="size"></a>
#### Модификатор `size`

Допустимые значения: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Задает размер шрифта и отступы.

Модификатор `size` используется, только если блоку установлен модификатор <a href="#theme">theme</a> в значении `islands`.

**s**

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

**m**

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
**l**

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

**xl**

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

<a name="theme"></a>
#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Модификатор отвечает за стилевое оформление блока.

При выборе модификатора `theme` в значении `islands` необходимо обязательно указывать модификатор <a href="#nsize">size</a>.

Без указания модификатора `theme` отображается нативный вид контрола.

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

### Элементы блока

<a name="group"></a>

#### Элемент `group`

Элемент `group` служит для визуальной группировки пунктов меню. Не влияет на общую логику выбора пунктов.

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

Специализированное поле `title` определяет заголовок группе пунктов:

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
