# dropdown

Блок `dropdown` используется для создания выпадающих элементов и позволяет изменять их состояние, поведение и внешний вид.

Блок состоит из двух компонентов:

* управляющий компонент. В зависимости от значения модификатора `switcher` управляющим компонентом может служить ссылка, псевдоссылка или кнопка.
* попап (блок [popup](../popup/popup.ru.md)). Управляющий компонент при щелчке мышью вызывает попап (устанавливает для блока `popup` модификатор `visible`). Попап всегда отображается поверх остальных элементов страницы. Щелчок вне зоны попапа автоматически скрывает его (`{ autoclosable : true }`).

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#theme>theme</a> | <code>'simple', 'islands' </code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href=#switcher>switcher</a> | <code>'link'</code>, <code>'button'</code> | <code></code> | Задаёт блок, который будет использоваться в качестве управляющего компонента. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#opened>opened</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | |

### Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#switcher>switcher</a> | <code>String</code> | Текст управляющего компонента. Может содержать фрагмент BEMJSON, например, если нужно обернуть управляющий компонент в другой блок или передать ему дополнительные параметры. |
| <a href=#popup>popup</a> | <code>String</code>, <code>BEMJSON</code> |Текст или фрагмент BEMJSON, отображаемый во всплывающем окне <code>popup</code>. BEMJSON при этом будет преобразован в HTML. |

При необходимости дополнительные HTML-атрибуты блока могут быть заданы в зарезервированном поле `attrs` в BEMJSON.

## Обзор блока

### Модификаторы блока

<a name="theme"></a>

#### Модификатор `theme`

Допустимое значение: `simple`, `islands`.

Способы использования:

Без указания модификатора `theme` отображается [нативный](#default) вид контрола.

Пример:

<a name="default"></a>

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link' },
    switcher : 'Ссылка',
    popup : 'Hello, world!'
}
```


```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'simple' },
    switcher : 'Ссылка',
    popup : 'Hello, world!'
}
```


```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm' },
    switcher : 'Ссылка',
    popup : 'Hello, world!'
}
```
<a name="switcher"></a>

####  Модификатор `switcher`

Допустимое значание: `link`, `button`.

Способы использования:

Модификатор отвечает за то, какой блок будет использоваться в качестве управляющего компонента:

* `link` - ссылка. В качестве управляющего компонента используется блок `link`.
* `button` - кнопка. В качестве управляющего компонента используется блок `button`.

Пример:

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : 'Кнопка',
    popup : 'Hello, world!'
}
```
<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способ использования:

В состоянии «неактивен» управляющий компонент блока виден, но недоступен для действий пользователя. К неактивному блоку применяются дополнительные стили, чтобы выделить его на странице.

Неактивному блоку не могут быть назначены следующие модификаторы:

* `opened` – `popup` блок не может быть открыт нажатием на управляющий компонент;
* `visible` - `popup` блок не может быть показан;
* управляющий компонент не может получить модификатор `focused`;
* Управляющий компонент `button` не может получить модификатор `hovered` при наведении указателем мыши.

Пример:

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm', disabled : true },
    switcher : 'Кнопка',
    popup : 'Hello, world!'
}
```
<a name="opened"></a>

#### Модификатор `opened`

Допустимое значение: `true`.

Способ использования:

Модификатор `opened` в значении `true` автоматически выставляется блоку при щелчке мышью по управляющему компоненту блока.

Пример:

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm', opened : true },
    switcher : 'Кнопка',
    popup : 'Hello, world!'
}
```
### Специализированные поля блока

## BEMJSON в атрибутах `switcher` и `popup`

Атрибуты управляющего компонента и попапа могут содержать фрагмент БЭМ-дерева. Например, если нужно обернуть управляющий компонент в другой блок или передать ему дополнительные параметры.

Например, можно сделать кнопку управляющего компонента "залипающей":

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
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
        theme : 'islands',
        size : 'xl'
    },
    switcher : 'Выпадающий список',
    popup : {
        block : 'menu',
        mods : {
            theme : 'islands',
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
