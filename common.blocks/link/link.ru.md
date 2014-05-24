# link  

Блок **link** используется для создания различных типов ссылок и предоставляет возможность изменять их состояние, внешний вид и поведение.  

В MSIE8 и ниже кастомные ссылки деградируют до нативных. Псевдо-ссылка станет нативной ссылкой `<a>`.

## Варианты использования ссылок

Блок **link** служит для создания следующих типов ссылок:

<table>
    <tr>
        <th>Тип</th>
        <th>Описание</th>
        <th>Пример</th>
    </tr>
    <tr>
        <td>Обычная ссылка</td>
        <td>Применяется для любых ссылок веб-интерфейса; используется по умолчанию.</td>
        <td><pre><code>
        {
            block : 'link',
            url : 'http://yandex.ru',
            title : 'link',
            content : 'link'
        }
        </td></code></pre>
    <tr>
        <td>Псевдо-ссылка</td>
        <td>Разновидность ссылки, при нажатии по которой в браузере не осуществляется переход. Применяется для вызова сценариев.</td>
        <td><pre><code>
        {
            block : 'link',
            mods : { pseudo : true },
            content : 'pseudo'
        }
        </td></code></pre>
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
        <td>title</td>
        <td>`string`</td>
        <td>Текст всплывающей подсказки</td>
    </tr>
    <tr>
        <td>target</td>
        <td>`string`</td>
        <td>Целевое окно. Обычно атрибут указывается со значением '_blank', чтобы открыть адрес ссылки в новом окне.</td>
    </tr>
    <tr>
        <td>url</td>
        <td>`string`</td>
        <td>Адрес ссылки. Если указан, значение `url` становится атрибутом `href`.</td>
    </tr>
    <tr>
        <td>tabIndex</td>
        <td>`number`</td>
        <td> Индекс, задающий последовательность перехода между ссылками при нажатии на клавишу `Tab`. Атрибут преобразуется в нативный атрибут `tabindex`.</td>
    </tr>
</table>


## Модификаторы блока

### Темы блока `_theme`

Блок представлен в следующих темах:

 * simple   
 * normal  

Без указания темы к блоку применяются значения по умолчанию (*default*), установленные браузером. 

Например:

#### default
````bemjson
    {
        block : 'link', 
        url : '#',
        content : 'link'
    }
````
#### simple

````bemjson
    {
        block : 'link',
        mods : { theme : 'simple' },
        url : '#',
        content : 'link'
    } 
```` 
#### normal

````bemjson
    {
        block : 'link',
        mods : { theme : 'normal' },
        url : '#',
        content : 'link'
    }
```` 


### Псевдо-ссылка `_pseudo`


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
            block : 'link',
            mods : { pseudo : true },
            url : '#',
            title : 'pseudo mod are toggled',
            content : 'link'
        }
        </td></code></pre>
        <td><pre><code>
        {
            block : 'link',
            mods : { theme : 'simple', pseudo : true },
            url : '#',
            title : 'pseudo mod are toggled',
            content : 'link'
        }
        </td></code></pre>
        <td>       
        {
            block : 'link',
            mods : { theme : 'normal', pseudo : true },
            url : '#',
            title : 'pseudo mod are toggled',
            content : 'link'
        }
        </td></code></pre>
  </tr>
</table>


### Состояния блока 


#### В фокусе `_focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью. Нажатие по ней можно выполнить клавишей `Enter`.

Реализован во всех темах блока.

````
    {
        block : 'link',
        mods : { 
            theme : 'normal',
            focused : true 
        },
        content : '_focused_true'
    } 
````


#### Не активна `_disabled`
   
В состоянии "не активна" ссылка отображается, но недоступна для действий пользователя.  

Для такой ссылки не будет: 

* устанавливаться модификатор `_focused_true` в момент получения фокуса;
* осуществляться переход, если задан атрибут `url`;
* генерироваться БЭМ-событие `click`.

Модификатор реализован во всех темах блока.

<table>
    <tr>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td><pre><code>
        {
            block : 'link',
            mods : { disabled : true },
            content : '_disabled_true'
        }
        </td></code></pre>
        <td>
        {
            block : 'link',
            mods : { theme : 'simple', disabled : true },
            content : '_disabled_true'
        }
        </td></code></pre>
        <td><pre><code>       
        {
            block : 'link',
            mods : { theme : 'normal', disabled : true }б
            content : '_disabled_true'
        }
        </td></code></pre>
    </tr>
</table>


### Зависимости блока

Блок `link` зависит от следующего набора блоков:


* base-control
* i-bem__dom