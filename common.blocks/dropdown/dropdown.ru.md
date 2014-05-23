# dropdown  

Блок **dropdown** используется для создания выпадающих элементов и позволяет изменять их состояние, поведение и внешний вид. Блок состоит из двух компонентов – управляющего элемента и попапа (блок `popup`), который отображается поверх остальных элементов страницы.

Управляющий элемент при щелчке мышью вызывает попап (устанавливает для блока `popup` модификатор `_visible`).

В зависимости от заначения модификатора `switcher`,  управляющим элементом может служить псевдо-ссылка или кнопка.


## Допустимые атрибуты блока

Допустимые атрибуты блока задаются в одноименных полях входного BEMJSON блока:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>switcher</td>
        <td>`string` | `bemjson`</td>
        <td>Текст управляющего элемента. Может содержать фрагмент BEMJSON, например, если нужно обернуть управляющий элемент в другой блок или передать ему дополнительные параметры. </td>
    </tr>
    <tr>
        <td>popup</td>
        <td>`string` | `bemjson`</td>
        <td>Текст или фрагмент BEMJSON, отображаемый во всплывающем окне `popup`. BEMJSON при этом будет преобразован в HTML.</td>
    </tr>
</table>



## Модификаторы блока

### Темы блока `_theme`

Блок представлен в следующих темах:

 * simple   
 * normal  

Без указания темы к блоку применяются значения по умолчанию (*default*), установленные браузером. 

Наглядно видно на примерах ниже:


#### simple

````bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'simple' },
    switcher : 'link',
    popup : 'Hello, world!'
}
```` 


#### normal

````bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'normal' },
    switcher : 'link',
    popup : 'Hello, world!'
}
```` 



### Управляющий компонент `_switcher`

Модификатор отвечает за то, какой блок будет использоваться в качестве управляющего компонента:

* `_switcher_link` - ссылка. В качестве управляющего компонента используется блок `link`.
* `_switcher_button` - кнопка. В качестве управляющего компонента используется блок `button`.

Обязательный модификатор.

Реализован во всех темах:


#### simple

````bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'simple' },
    switcher : 'link',
    popup : 'Hello, world!'
}
```` 


#### normal

````bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'normal', size : 'xl' },
    switcher : 'button',
    popup : 'Hello, world!'
}
````


### Не активен `_disabled`
   
В состоянии "не активен" дропдаун отображается, но недоступен для действий пользователя.  

Для такого блока не будет устанавливаться состояние `_opened` при щелчке мышью по управляющему компоненту.

При установке модификатора `_disabled` для блока его компонентам также устанавливается модификатор `_disabled`. Как следствие для них не будут производиться следующие действия:


<table>
    <tr>
        <th>Компонент</th>
        <th>Заблокированное действие</th>
    </tr>
    <tr>
        <td> Блок `popup` </td>
        <td> Установка модификатора `true` </td>
    </tr>
    <tr>
        <td> Управляющий компонент `link` </td>
        <td> Установка состояния `_focused` – ссылка не получает фокус по щелчку мышью или по нажатию клавиши `Tab`. </td>
    </tr> 
    <tr>
        <td> Управляющий компонент `button` </td>
        <td> Установка состояния `_focused`
           _true` – кнопка не получает фокус по щелчку мышью или по нажатию клавиши `Tab`. </td>
    </tr>
    <tr>
        <td> </td>
        <td> Установка состояния `_hovered` при наведении указателем мыши. </td>
    </tr>        
</table>


Модификатор реализован во всех темах блока:

#### simple

````bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'simple', disabled : true },
    switcher : 'button',
    popup : 'Hello, world!'
}
```` 


#### normal

````bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'normal', size : 'xl', disabled : true },
    switcher : 'button',
    popup : 'Hello, world!'
}
````


### Состояния блока 


#### Открыт `_opened`

Модификатор `opened` в значении `true` автоматически выставляется блоку при щелчке мышью по управляющему компоненту блока.

Реализован во всех темах блока.

````bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'normal', size : 'xl', opened : true },
    switcher : 'button',
    popup : 'Hello, world!'
}
````

Модификатор снимается при поворном щелчке мышью по управляющему элементу или за пределами попапа (зависит от наличия модификатора `_autoclosable` блока `popup`).



## BEMJSON в атрибутах `switcher` и `popup`

Атрибуты управляющего элемента и попапа могут содержать фрагмент БЭМ-дерева, например, если нужно обернуть управляющий элемент в другой блок или передать ему дополнительные параметры.

Например, можно сделать кнопку управляющего компонента "залипающей":

````bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'normal', size : 'xl'},
    switcher : { block : 'button', mods : { togglable : 'check' }, text : 'custom button' },
    popup : 'Popup message'
}
````


Или создать на основе блока выпадающий селект:

````bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'normal', size : 'xl'},
    switcher : 'Dropdown menu',
    popup : {
        block : 'menu',
        mods : { theme : 'normal', size : 'xl', select : 'check' },
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
````



## Зависимости блока

Блок `dropdown` зависит от следующего набора блоков:

* i-bem__dom
* dom
* popup
* button
* link
