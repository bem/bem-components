# menu

Блок `menu` используется для создания различных типов меню и селектов.

Он предоставляет возможность изменять размер и внешний вид блоков меню, управлять поведением вложенных блоков – пунктов меню или селекта.

В результате BEMHTML-преобразований на странице блок становится HTML-элементом с тегом `<div>` и свойством `role="menu"`. HTML-элементом, содащим набор переключателей – пунктов меню (блок `menu-item`).


## Варианты использования меню

Блок `menu` служит для создания различных типов меню:

<table>
    <tr>
        <th>Тип</th>
        <th>Описание</th>
        <th>Пример</th>
    </tr>
    <tr>
        <td>Меню-переключатель</td>
        <td>Применяется для создания меню или селектов, позволяющих только одиночный выбор.</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal',
        size : 'm', 
        mode : 'radio'
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
            </code></pre>
        </td>
    <tr>
        <td>Селект с множественным выбором (<code>menu_mode_check</code>)</td>
        <td>При щелчке мышью по пункту меню его состояние меняется на противоположное. Если пункт был активен – он деактивируется и наоборот.</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        size : 'm',
        mode : 'check'
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
            </code></pre>
        </td>
    </tr>
<tr>
        <td>Простой список (без модификатора <code>mode</code>)</td>
        <td>При щелчке мышью по пункту меню его состояние не меняется. Модификатор <code>cheked</code> не устанавливается.</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        size : 'm',
        mode : 'check'
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
            </code></pre>
        </td>
    </tr>   
</table>


## Модификаторы блока

### Темы блока `theme`

Блок представлен в следующих темах:

 * simple
 * normal

Без указания темы к блоку применяются значения, установленные браузером по умолчанию (*default*).

Наглядно показано на примерах ниже:

#### default

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


#### simple

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


#### normal

```bemjson
{
    block : 'menu',
    mods : { theme : 'normal', mode : 'check', size : 'xl' },
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


### Размеры меню `size`

Задает размер всем типам меню. Обязательный модификатор.

Реализован только в теме *normal*.

Доступно четыре размера реализации блока: **s**, **m**, **l**, **xl**.

<table>
    <tr>
        <th>Размер/Параметры</th>
        <th>Размер шрифта</th>
        <th>Высота строки <code>line-heigh</code></th>
        <th>Левый отступ <code>padding-left</code></th>
        <th>Отступ <code>padding</code></th>
        <th>Размер "галочки" для темы normal</code></th>
    </tr>
    <tr>
        <td>s</td>
        <td>13px</td>
        <td>24px</td>
        <td>30px</td>
        <td>14px</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        mode : 'check',
        size : 's' 
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
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>m</td>
        <td>13px</td>
        <td>24px</td>
        <td>30px</td>
        <td>14px</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        mode : 'check',
        size : 'm' 
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
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>l</td>
        <td>15px</td>
        <td>28px</td>
        <td>34px</td>
        <td>15px</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        mode : 'check',
        size : 'l' 
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
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>xl</td>
        <td>15px</td>
        <td>32px</td>
        <td>40px</td>
        <td>15px</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        mode : 'check',
        size : 'xl' 
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
            </code></pre>
        </td>
    </tr>
</table>


### Способ выбора пунктов `mode`

Модификатор `mode` управляет поведением пунктов меню при щелчке по ним мышью, например, возможностью множественного выбора пунктов меню.

Доступны следующие значения модификатора:

* `check` – селект. Пункт, по которому был произведен щелчек мышью, изменит состояние на противоположное и будет менять состояние при повторных щелчках. Доступна возможность множественного выбора пунктов;
* `radio` – переключатель. При щелчке мышью будет производиться переключение активных пунктов меню. При повторном щелчке пункт, по которому он был произведен, останется __активным__. Множественный выбор недоступен;
* `radio-check` – переключатель. При щелчке мышью будет производиться переключение активных пунктов меню. При повторном щелчке пункт, по которому он был произведен, станет __неактивным__. Множественный выбор недоступен.


Реализован во всех темах блока.

<table>
    <tr>
        <th>Выбор пунктов</th>
        <th>Пример</th>
    </tr>
    <tr>
        <td>Только один (<code>menu_mode_radio</code>)</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        mode : 'radio'
    },
    content : [
        {
            block : 'menu-item',
            mods : { checked : true },
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
    <tr>
        <td>Множественный выбор или ни одного (<code>menu_mode_check</code>)</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        mode : 'check'
    },
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
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>Один или ни одного (<code>menu_mode_radio-check</code>)</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        mode : 'radio-check'
    },
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
            </code></pre>
        </td>
    </tr>
</table>


### Состояния блока


#### В фокусе `focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

Реализован во всех темах блока.

```bemjson
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        mode : 'check',
        size : 'xl',
        focused : true 
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


## Элементы блока

Визуально представлен следующими элементами:

### __group

Элемент `__group` служит для группировки пунктов меню. Пункты, которые нужно сгруппировать, помещаются в поле `content` элемента. Группы визуально отделяются серой чертой.

Например:

```bemjson
{
    block : 'menu',
    mods : { theme : 'normal', size : 'xl', mode : 'radio', focused : true  },
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

Элемент позволяет задать заголовок для группы пунктов меню, создаваемой с помощью элемента `__group`.

Например:

```bemjson
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        size : 'xl', 
        mode : 'radio',
        focused : true  
    },
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
