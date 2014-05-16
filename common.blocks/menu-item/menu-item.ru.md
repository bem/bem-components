# menu-item  

Блок **menu-item** используется для создания пунктов меню или селекта. Используется внутри блока `menu`. Блок `menu-item` предоставляет возможность изменять состояние, содержимое и порядок отображения пунктов меню.  


## Варианты использования пунктов меню

Блок **menu-item** служит для создания различных типов пунктов меню:

<table>
    <tr>
        <th>Тип</th>
        <th>Описание</th>
        <th>Пример</th>
    </tr>
    <tr>
        <td>Переключатель</td>
        <td>Применяется для любых выпадающих списков, табов, пунктов меню и селектов и т.п. Используется по умолчанию.</td>
        <td><pre><code>
        {
            block : 'menu-item',
            val : 1,
            content : 'Selector value'
        }
        </td>
    <tr>
        <td>Ссылка</td>
        <td>Элемент меню со ссылкой. Блок `link` помещается в поле `content` BEMJSON-декларации блока.  Так же требуется установить блоку модификатор `type` в значение `link`. </td>
        <td><pre><code>
        {
            block : 'menu-item',
            mods : { type : 'link' },
            val : 2,
            content : {
                block : 'link',
                url : '#',
                content : 'Link 1'
            }
        }
        </td>
    </tr>
</table>

## Допустимые атрибуты блока
Допустимые атрибуты блока задаются в одноименных полях входного BEMJSON блока:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td><pre><code>val</td>
        <td><pre><code>{Number}</td>
        <td><pre><code>Порядковый номер пункта меню</td>
    </tr>
</table>


## Модификаторы блока



### Типы блока `_type`

Блок представлен следующими типами: 

* пункт меню-ссылка (`_link`). Блок `link` помещается в поле `content` BEMJSON-декларации блока. Если модификатор `_type_link` не установлен, вложенная ссылка будет доступна для действий пользователя при установленном модификаторе `_disabled_true`.
* переключатель. Используется по умолчанию.


Реализован во всех темах блока:

<table>
    <tr>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
    
        <td><pre><code>
        {
            block : 'menu-item',
            mods : { type : 'link' },
            url : '#',
            content : 'link'
        }
        </td>
        <td><pre><code>
        {
            block : 'menu-item',
            mods : { theme : 'simple', type : 'link' },
            url : '#',
            content : 'link'
        }
        </td>
        <td><pre><code>
        {
            tag: 'form',
            content: {
                block : 'menu-item',
                mods : { theme : 'normal', size : 'm', type : 'submit' },
                content : 'normal'
            }
        }
        </td>
    </tr>
</table>

### Состояния блока 

#### Не активна `_disabled_true`
   
В состоянии "не активна" пункт меню отображается, но недоступен для действий пользователя.  

Такой пункт меню не изменяет состояние при щелчке мышью. Если для блока установлен модификатор `_type_link`, переход по вложенной ссылке не осуществляется. 

Реализован во всех темах блока.

<table>
    <tr>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td><pre><code>
        {
            block : 'menu-item',
            mods : { disabled : true },
            content : '_disabled_true'
        }
        </td>
        <td><pre><code>
        {
            block : 'menu-item',
            mods : { theme : 'simple', disabled : true },
            content : '_disabled_true'
        }
        </td>
        <td><pre><code>       
        {
            block : 'menu-item',
            mods : { theme : 'normal', size : 'm', disabled : true },
            content : '_disabled_true'
        }
        </td>
    </tr>
    </table>
    

#### Наведение курсором `_hovered_true`

Определяет действие "наведение курсором" на пункт меню.

Реализован во всех темах блока.

Автоматически выставляется при наведении указателем мыши на пункт меню.

<table>
    <tr>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td><pre><code>
        {
            block : 'menu-item',
            mods : { hovered : true },
            content : '_hovered_true'
        }
        </td>
        <td><pre><code>
        {
            block : 'menu-item',
            mods : { theme : 'simple', hovered : true },
            content : '_hovered_true'
        }
        </td>
        <td><pre><code>       
        {
            block : 'menu-item',
            mods : { theme : 'normal', size : 'm', hovered : true },
            content : '_hovered_true'
        }
        </td>
    </tr>
</table>



#### Активный пункт меню `_checked_true`

Модификатор задает активный пункт меню.


<table>
    <tr>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td><pre><code>
        {
            block : 'menu-item',
            content : '_togglable_true',
            mods : { togglable : true }
        }
        </td>
        <td><pre><code>
        {
            block : 'menu-item',
            content : '_togglable_true',
            mods : { theme : 'simple', togglable : true }
        }
        </td>
        <td><pre><code>       
        {
            block : 'menu-item',
            content : '_togglable_true',
            mods : { theme : 'normal', size : 'm', togglable : true }
        }
        </td>
    </tr>
</table>

В блоке `menu` устанавливается для пункта при клике:

````bemjson
    {
    block : 'menu',
    mods : { theme : 'simple', select : 'check' },
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
````


### Зависимости блока

Блок `menu-item` зависит от следующего набора блоков:

* i-bem__dom 
* jquery
* dom



