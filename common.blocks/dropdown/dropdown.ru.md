# dropdown

Блок `dropdown` используется для создания выпадающих элементов и позволяет изменять их состояние, поведение и внешний вид.

Блок состоит из двух компонентов:

* управляющий компонент. В зависимости от значения модификатора `switcher` управляющим компонентом может служить ссылка, псевдоссылка или кнопка.
* попап (блок [popup](../popup/popup.ru.md)). Управляющий компонент при щелчке мышью вызывает попап (устанавливает для блока `popup` модификатор `visible`). Попап всегда отображается поверх остальных элементов страницы. Щелчок вне зоны попапа автоматически скрывает его (`{ autoclosable : true }`).

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>switcher</td>
        <td><code>String</code></td>
        <td>Текст управляющего компонента. Может содержать фрагмент BEMJSON, например, если нужно обернуть управляющий компонент в другой блок или передать ему дополнительные параметры. </td>
    </tr>
    <tr>
        <td>popup</td>
        <td><code>String|BEMJSON</code></td>
        <td>Текст или фрагмент BEMJSON, отображаемый во всплывающем окне <code>popup</code>. BEMJSON при этом будет преобразован в HTML.</td>
    </tr>
</table>

При необходимости дополнительные HTML-атрибуты блока могут быть заданы в зарезервированном поле `attrs` в BEMJSON.

## Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * normal (**Важно:** При выборе темы `normal` необходимо указывать обязательный модификатор [size](#size).)

Без указания модификатора `theme` отображается [нативный](#default) вид контрола.

Наглядно показано на примерах ниже:

<a name="default"></a>
**default**

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link' },
    switcher : 'Ссылка',
    popup : 'Hello, world!'
}
```

**simple**

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'simple' },
    switcher : 'Ссылка',
    popup : 'Hello, world!'
}
```

**normal**

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'normal', size : 'm' },
    switcher : 'Ссылка',
    popup : 'Hello, world!'
}
```

### Управляющий компонент `_switcher`

Модификатор отвечает за то, какой блок будет использоваться в качестве управляющего компонента:

* `link` - ссылка. В качестве управляющего компонента используется блок `link`.
* `button` - кнопка. В качестве управляющего компонента используется блок `button`.

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'normal', size : 'm' },
    switcher : 'Кнопка',
    popup : 'Hello, world!'
}
```

### Состояния блока

#### Неактивен `_disabled`

В состоянии «неактивен» управляющий компонент блока виден, но недоступен для действий пользователя. К неактивному блоку применяются дополнительные стили, чтобы выделить его на странице.

Неактивному блоку не могут быть назначены следующие модификаторы:

* `opened` – `popup` блок не может быть открыт нажатием на управляющий компонент;
* `visible` - `popup` блок не может быть показан;
* управляющий компонент не может получить модификатор `focused`;
* Управляющий компонент `button` не может получить модификатор `hovered` при наведении указателем мыши.

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'normal', size : 'm', disabled : true },
    switcher : 'Кнопка',
    popup : 'Hello, world!'
}
```

#### Открыт `_opened`

Модификатор `opened` в значении `true` автоматически выставляется блоку при щелчке мышью по управляющему компоненту блока.

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'normal', size : 'm', opened : true },
    switcher : 'Кнопка',
    popup : 'Hello, world!'
}
```

## BEMJSON в атрибутах `switcher` и `popup`

Атрибуты управляющего компонента и попапа могут содержать фрагмент БЭМ-дерева. Например, если нужно обернуть управляющий компонент в другой блок или передать ему дополнительные параметры.

Например, можно сделать кнопку управляющего компонента "залипающей":

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'normal', size : 'm' },
    switcher : {
        block : 'button',
        mods : { togglable : 'true' },
        text : 'custom button'
    },
    popup : 'Popup message'
}
```

Или создать на основе блока выпадающий селект:

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'Кнопка',
        theme : 'normal',
        size : 'xl'
    },
    switcher : 'Выпадающий список',
    popup : {
        block : 'menu',
        mods : {
            theme : 'normal',
            size : 'xl',
            select : 'check'
        },
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
}
```
