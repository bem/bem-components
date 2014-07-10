# dropdown

Блок `dropdown` используется для создания выпадающих элементов и позволяет изменять их состояние, поведение и внешний вид. Блок состоит из двух компонентов – управляющего компонента и попапа (блок `popup`), который отображается поверх остальных элементов страницы.

Управляющий компонент при щелчке мышью вызывает попап (устанавливает для блока `popup` модификатор `_visible`).

В зависимости от значения модификатора `_switcher` управляющим компонентом может служить ссылка, псевдоссылка или кнопка.


## Допустимые параметры блока

Допустимые параметры блока задаются в одноименных полях входного BEMJSON блока:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>switcher</td>
        <td><code>String|BEMJSON</code></td>
        <td>Текст управляющего компонента. Может содержать фрагмент BEMJSON, например, если нужно обернуть управляющий компонент в другой блок или передать ему дополнительные параметры. </td>
    </tr>
    <tr>
        <td>popup</td>
        <td><code>String|BEMJSON</code></td>
        <td>Текст или фрагмент BEMJSON, отображаемый во всплывающем окне <code>popup</code>. BEMJSON при этом будет преобразован в HTML.</td>
    </tr>
</table>



## Модификаторы блока

### Темы блока `_theme`

 * simple
 * normal

Без указания темы к блоку применяются значения по умолчанию (*default*), установленные браузером.

Наглядно показано на примерах ниже:

#### default

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link' },
    switcher : 'link',
    popup : 'Hello, world!'
}
```


#### simple

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'simple' },
    switcher : 'link',
    popup : 'Hello, world!'
}
```


#### normal

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'normal' },
    switcher : 'link',
    popup : 'Hello, world!'
}
```



### Управляющий компонент `_switcher`

Обязательный модификатор.

Модификатор отвечает за то, какой блок будет использоваться в качестве управляющего компонента:

* `_switcher_link` - ссылка. В качестве управляющего компонента используется блок `link`.
* `_switcher_button` - кнопка. В качестве управляющего компонента используется блок `button`.

Реализован во всех темах.

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'normal',
        size : 'xl'
    },
    switcher : 'button',
    popup : 'Hello, world!'
}
```


### Неактивен `_disabled`

В состоянии "неактивен" дропдаун отображается, но недоступен для действий пользователя.

Для такого блока не будет устанавливаться состояние `_opened` при щелчке мышью по управляющему компоненту.

При установке для блока модификатора `_disabled` для компонентов блока не будут производиться следующие действия:

* Блок </code>popup – установка модификатора `_visible`;
* Управляющий компонент `link` – установка состояния `_focused`. Ссылка не получает фокус по щелчку мышью или по нажатию клавиши `Tab`;
* Управляющий компонент `button`:
    *  установка состояния `_focused`. Кнопка не получает фокус по щелчку мышью или по нажатию клавиши `Tab`;
    *  установка состояния `_hovered` при наведении указателем мыши.

Модификатор реализован во всех темах блока.

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'normal',
        size : 'xl',
        disabled : true
    },
    switcher : 'button',
    popup : 'Hello, world!'
}
```


### Состояния блока

#### Открыт `_opened`

Модификатор `_opened` в значении `true` автоматически выставляется блоку при щелчке мышью по управляющему компоненту блока.

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'normal',
        size : 'xl',
        opened : true
    },
    switcher : 'button',
    popup : 'Hello, world!'
}
```


Модификатор снимается при повторном щелчке мышью по управляющему компоненту или за пределами попапа (зависит от наличия модификатора `_autoclosable` блока `popup`).


## BEMJSON в атрибутах `switcher` и `popup`

Атрибуты управляющего компонента и попапа могут содержать фрагмент БЭМ-дерева, например, если нужно обернуть управляющий компонент в другой блок или передать ему дополнительные параметры.

Например, можно сделать кнопку управляющего компонента "залипающей":

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'normal',
        size : 'xl'
    },
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
        switcher : 'button',
        theme : 'normal',
        size : 'xl'
    },
    switcher : 'Dropdown menu',
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


## Зависимости блока

Блок `dropdown` зависит от следующего набора блоков и элементов:

* `i-bem__dom`
* `dom`
* `popup`
* `button`/`link` (в зависимости от управляющего компонента `_switcher`)
