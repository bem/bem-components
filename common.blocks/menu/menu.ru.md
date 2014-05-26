# menu  

Блок **menu** используется для создания различных типов меню и селектов. Он предоставляет возможность изменять размер и внешний вид блоков меню, управлять поведением вложенных блоков – пунктов меню или селекта.  


## Варианты использования меню

Блок **menu** служит для создания различных типов меню:

<table>
  <tr>
    <th>Тип</th>
    <th>Описание</th>
    <th>Пример</th>
  </tr>
  <tr>
    <td>Меню-переключатель</td>
    <td>Применяется для создания меню или селектов, позволяющих только одиночный выбор.</td>
    <td><pre><code>
    {
        block : 'menu',
        mods : { theme : 'simple', select : 'radio' },
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
   </td></code></pre>
   <tr>
    <td>Селект с множественным выбором</td>
    <td>При щелчке мышью по пункту меню его состояние меняется на противоположное. Если пункт был активен – он деактивируется, и наоборот.</td>
    <td><pre><code>
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
    </td></code></pre>
   </tr>
   <tr>
    
   </tr>
</table>



## Модификаторы блока

### Темы блока `_theme`

Блок представлен в следующих темах:

 * simple   
 * normal  

Без указания темы к блоку применяются значения по умолчанию (*default*), установленные браузером. 

Наглядно видно на примерах ниже:

#### default

````bemjson
{
    block : 'menu',
    mods : { select : 'check' },
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


#### simple

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

 
#### normal

````bemjson
{
    block : 'menu',
    mods : { theme : 'normal', select : 'check', size : 'xl' },
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


### Размеры меню `_size`

Задает размер всем типам меню. Обязательный модификатор. 

Реализован только в теме *normal*.

Доступно четыре размера реализации блока: **s**, **m**, **l**, **xl**.

<table>
    <tr>
        <th>Параметры/Размер</th>
        <th>s</th>
        <th>m</th>
        <th>l</th>
        <th>xl</th>
    </tr>
    <tr>
        <td>Размер шрифта</td>
        <td>13px</td>
        <td>13px</td>
        <td>15px</td>
        <td>15px</td>
    </tr>
    <tr>
        <td>Высота строки `line-heigh`</td>
        <td>24px</td>
        <td>24px</td>
        <td>28px</td>
        <td>32px</td>
    </tr>
    <tr>
        <td>Левый отступ `padding-left`</td>
        <td>30px</td>
        <td>30px</td>
        <td>34px</td>
        <td>40px</td>
    </tr>
    <tr>
        <td>Отступ `padding`</td>
        <td>10px</td>
        <td>13px</td>
        <td>15px</td>
        <td>20px</td>
    </tr>      
    <tr>
        <td>Пример</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { theme : 'normal', select : 'check', size : 's' },
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
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { theme : 'normal', select : 'check', size : 'm' },
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
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { theme : 'normal', select : 'check', size : 'l' },
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
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { theme : 'normal', select : 'check', size : 'xl' },
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
            </code></pre>
        </td>
    </tr>
</table>


### Переключатель или селект `_select`

Модификатор `_select` управляет поведением пунктов меню при щелчке по ним мышью, например возможностью множественного выбора пунктов меню. 

Доступны следующие значения модификатора:

* `check` – селект. Пункт, по которому был произведен щелчек мышью, изменит состояние на противоположное и будет менять состояние при повторных щелчках. Доступна возможность множественного выбора пунктов;
* `radio` – переключатель. При щелчке мышью будет производиться переключение активных пунктов меню. При повторном щелчке пункт, по которому он был произведен, останется активным. Множественный выбор недоступен;
* `radio-check` – переключатель. При щелчке мышью будет производиться переключение активных пунктов меню. При повторном щелчке пункт, по которому он был произведен, станет неактивным. Множественный выбор недоступен;


Реализован во всех темах блока.

<table>
    <tr>
        <th>Выбор пунктов</th>

        <th>Пример</th>
    </tr>
    <tr>
        <td>Только один</td>

        <td>
            <pre><code>
{
    block : 'menu',
    mods : { theme : 'normal', size : 'l', select : 'radio' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            mods : { checked : true },            
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
            </code></pre>
        </td>
    </tr>      
    <tr>
        <td>Один или ни одного</td>

        <td>
            <pre><code>
{
    block : 'menu',
    mods : { theme : 'normal', size : 'l', select : 'radio-check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            mods : { checked : true },
            content : 'Second item'
        }
    ]
}
            </code></pre>
        </td>
    </tr> 
    <tr>
        <td>Множественный выбор или ни одного</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { theme : 'normal', size : 'l', select : 'check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            mods : { checked : true },
            content : 'Second item'
        }
    ]
}
            </code></pre>
        </td>
    </tr>
</table>


### Состояния блока 

    
#### В фокусе `_focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

Реализован во всех темах блока.



## Элементы блока

Визуально представлен следующими элементами:

### __group

Элемент `__group` служит для группировки пунктов меню. Пункты, которые нужно сгруппировать, помещаются в поле `content` элемента.

Например:


```bemjson
{
    block : 'menu',
    mods : { theme : 'normal', size : 'xl', select : 'radio', focused : true  },
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
            content : 'Open Not so Recent)'
        }
    ]
}
```


### __group-title

Элемент позволяет задать заголовок для группы пунктов меню, создаваемой с помощью элемента `__group`.

Например:

````bemjson
    {
        block : 'menu',
        mods : { theme : 'normal', size : 'xl', select : 'radio', focused : true  },
        content : [
            {
                block : 'menu-item',
                val : 1,
                content : 'New'
            },                                  
            {
                elem : 'group',
                title : 'Cool title'                
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
                    }]
            }
        ]
    }
````


### Зависимости блока

Блок `menu` зависит от следующего набора блоков:

* i-bem__dom 
* menu-item
* dom
* keyboard
* base-control