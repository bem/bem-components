# menu-item  

Блок `menu-item` служит для создания пунктов меню или селекта. Используется внутри блока `menu`. Блок `menu-item` предоставляет возможность изменять состояние, содержимое и тип пунктов меню.

Блок `menu-item` в результате BEMHTML-преобразований на странице становится HTML-элементом с тегом `<div>` со свойством `role="menuitem"`.


## Варианты использования пунктов меню

Блок `menu-item` служит для создания различных типов пунктов меню:

<table>
    <tr>
        <th>Тип</th>
        <th>Описание</th>
        <th>Пример</th>
    </tr>
    <tr>
        <td>Переключатель</td>
        <td>Применяется для любых выпадающих списков, табов, пунктов меню и селектов и т.п. Используется по умолчанию.</td>
        <td>
            <pre><code>
{
    block : 'menu-item',
    val : 1,
    content : 'Selector value'
}
            </code></pre>
        </td>
    <tr>
        <td>Ссылка</td>
        <td>Элемент меню со ссылкой. Блок <code>link</code> помещается в поле <code>content</code> BEMJSON-декларации блока. Так же требуется установить блоку модификатор <code>type</code> в значение <code>link</code>.
        </td>
        <td>
            <pre><code>
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
            </code></pre>
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
        <td>val</td>
        <td><code>String|Number</code></td>
        <td>Значение, возвращаемое пунктом меню, если он выбран.</td>
    </tr>
</table>


## Модификаторы блока

### Темы блока `_theme`

 * simple   
 * normal  

Без указания темы к блоку применяются значения, установленные браузером по умолчанию (*default*).

Наглядно видно на примерах ниже:

#### default

```bemjson
{
    block : 'menu-item',
    content : 'default',
    val : 'my value'
}
```


#### simple

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'simple' },
    content : 'simple',
    val : 'my value'
}
```


#### normal

```bemjson
{
    block : 'menu-item',
    mods : { 
        theme : 'normal', 
        size : 'l'
    },
    content : 'normal',
    val : 'my value'
}
```


### Типы блока `_type`

Модификатор `_type` в значении `_link` позволяет создавать пункт меню-ссылку. Блок `link` при этом помещается в поле `content` BEMJSON-декларации блока. Если модификатор `_type_link` не установлен, вложенная ссылка будет доступна для действий пользователя при установленном модификаторе `_disabled`.

Реализован во всех темах блока.

```bemjson
{
    block : 'menu-item',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        type : 'link' 
    },
    content : {
        block : 'link',
        url : '#',
        content : 'Link 1'
    }
}
```


### Состояния блока 

#### Неактивен `_disabled`
   
В состоянии "неактивен" пункт меню отображается, но недоступен для действий пользователя.  

Такой пункт меню не изменяет состояние при щелчке мышью. Если для блока установлен модификатор `_type_link`, переход по ссылке не осуществляется. 

Реализован во всех темах блока.

```bemjson
{
    block : 'menu-item',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        disabled : true 
    },
    content : '_disabled'
}
```
    

#### Наведение курсором `_hovered`

Определяет действие "наведение курсором" на пункт меню.

Реализован во всех темах блока.

Автоматически выставляется при наведении указателем мыши на пункт меню.

```bemjson
{
    block : 'menu-item',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        hovered : true 
    },
    content : '_hovered'
}
```


#### Выбранный пункт меню `_checked`

Модификатор задает выбранный пункт меню.

```bemjson
{
    block : 'menu-item',
    content : '_checked',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        checked : true 
    }
}
```


В блоке `menu` модификатор `_checked` устанавливается для пункта при щелчке мышью:

```bemjson
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        size : 'l',
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
```


### Зависимости блока

Блок `menu-item` зависит от следующего набора блоков и элементов:

* `i-bem__dom `
* `jquery`
* `dom`
