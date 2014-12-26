# menu

Используется для создания различных типов меню.

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | --------------------- | -------- |
| <a href="#mode">mode</a> | <code>'radio'</code>, <code>'radio-check'</code>, <code>'check'</code> | <code>BEMJSON</code> | Тип меню. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер блока. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code>, <code>Array</code> | Выбранное значение из списка. Если блоку установлен <a href="#mode-check">модификатор mode в значении check</a>, выбранные значения всегда оформляются в виде массива. |

### Элементы блока

| Элемент | Способы использования | Описание |
| --------| --------------------- | -------- |
| <a href=#group>group</a> | <code>BEMJSON</code> | Визуальная группировка пунктов меню. |

### Специализированные поля элементов блока

| Элемент | Поле | Тип | Описание |
| ------- | ---- | --- | -------- |
| group | <a href="#group-title">title</a> | <code>String</code> | Заголовок группы пунктов. |

## Описание блока

Блок предоставляет возможность изменять внешний вид меню и управлять поведением вложенных независимых блоков – [пунктов меню](../menu-item/menu-item.ru.md).

### Модификаторы блока

<a name="mode"></a>
#### Модификатор `mode`

Допустимые значения: `'check`, `'radio'`, `'radio-check'`.

Способ использования: `BEMJSON`.

В зависимости от выбранного значения модификатора `mode` доступны следующие типы блока:

* простой список ([модификатор mode не установлен](#mode-none));
* меню с множественным выбором ([модификатор mode в значении check](#mode-check));
* меню с одиночным обязательным выбором ([модификатор mode в значении radio](#mode-radio));
* меню с одиночным необязательным выбором ([модификатор mode в значении radio-check](#mode-radiocheck)).

<a name="mode-none"></a>
##### Простой список (модификатор `mode` не установлен)

Без указания модификатора `mode` создается простой список без возможности выбрать пункт.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Море'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Горы'
        }
    ]
}
```

<a name="mode-check"></a>
##### Меню с множественным выбором (модификатор `mode` в значении `check`)

Позволяет выбрать произвольное количество пунктов меню.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'check' },
    val : [1, 3],
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        },
        {
            block : 'menu-item',
            val : 3,
            content : 'Отдых на даче'
        }
    ]
}
```

<a name="mode-radio"></a>
##### Меню с одиночным обязательным выбором (модификатор `mode` в значении `radio`)

Позволяет создать меню, в котором обязательно выбран ровно один пункт.

Если пункт не выбран, то по умолчанию выбирается первое значение из списка.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

<a name="mode-radiocheck"></a>
##### Меню с одиночным необязательным выбором (модификатор `mode` в значении `radio-check`)

Модификатор `mode` в значении `radio-check`, так же как и <a href="#mode-radio">модификатор mode в значении radio</a>, позволяет выбрать ровно один пункт меню. Принципиальное отличие в том, что в значении `radio-check` есть возможность оставить меню без выбранных пунктов.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check' },
    val : 2,
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

Если блоку `menu` устанавливается модификатор `disabled`, то все вложенные в него блоки `menu-item` также становятся неактивными.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check', disabled : true },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

Модификатор `disabled` в значении `true` может быть выставлен отдельным пунктам меню:

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check' },
    val : 2,
    content : [
        {
            block : 'menu-item',
            mods : { disabled : true },
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

<a name="focused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Выставляется автоматически при получении блоком фокуса.

Отвечает за наличие фокуса на блоке.

```javascript
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check', focused : true },
    val : 2,
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

<a name="theme"></a>
#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Отвечает за стилевое оформление блока.

Необходимо использовать с модификатором <a href="#size">size</a>.

```js
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'm' },
    val : 1,
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

<a name="size"></a>
#### Модификатор `size`

Допустимые значения: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Задает размер блоку.

Необходимо использовать с модификатором <a href="#theme">theme</a> в значении `islands`.

**s**

```js
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 's' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

**m**

```js
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'm' },
    val : [2],
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```
**l**

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'check' },
    val : [2],
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

**xl**

```js
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'xl' },
    val : [2],
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

### Специализированные поля блока

<a name="val"></a>
#### Поля `val`

Тип: `String`, `Number`, `Array`.

Определяет:

* Выбранный пункт меню. В таком случае используется тип поля `String` или `Number`.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    val : 2,
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отпуск на работе'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отпуск на диване'
        }
    ]
}
```

* Список выбранных пунктов меню, если блоку установлен [модификатор mode в значении check](#mode-check). В таком случае используется тип поля `Array`.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'check' },
    val : [1, 2],
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

### Элементы блока
<a name="group"></a>

#### Элемент `group`

Служит для визуальной группировки пунктов меню. Не влияет на общую логику выбора пунктов.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    val : 2,
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отпуск на работе'
        },
        {
            elem : 'group',
            content : [
                {
                    block : 'menu-item',
                    val : 2,
                    content : 'Отпуск в горах'
                },
                {
                    block : 'menu-item',
                    val : 3,
                    content : 'Отпуск на море'
                }
            ]
        },
        {
            block : 'menu-item',
            val : 4,
            content : 'Отпуск на диване'
        }
    ]
}
```

### Специализированные поля элементов блока

<a name="group-title"></a>
#### Специализированное поле `title` элемента `group`

Тип: `String`.

Определяет заголовок группы пунктов.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    val : 2,
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Работа'
        },
        {
            elem : 'group',
            title : 'Активный отдых',
            content : [
                {
                    block : 'menu-item',
                    val : 2,
                    content : 'В горах'
                },
                {
                    block : 'menu-item',
                    val : 3,
                    content : 'На море'
                }
            ]
        }
    ]
}
```
