# checkbox-group  

Блок `checkbox-group` служит для отображения группы однотипных переключателей – чекбоксов (блоков `checkbox`). Любой из переключателей группы может быть либо активен, либо нет вне зависимости от состояния других переключателей.

Блок позволяет управлять внешним видом и состоянием вложенных переключателей. 

В результате BEMHTML-преобразований блок `checkbox-group` становится HTML-элементом с тегом `<span>` – контейнером, содержащим группу чекбоксов и подписи к ним.


## Допустимые параметры блока

Допустимые атрибуты блока задаются в одноименных полях входного BEMJSON блока:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>name</td>
        <td><code>String</code></td>
        <td>Имя группы чекбоксов. Преобразуется в HTML-атрибут <code>name</code> вложенного блока <code>input</code>.</td>
    </tr>
    <tr>
        <td>options</td>
        <td><code>Array</code></td>
        <td>Массив хешей. Каждый хеш соответствует одному переключателю группы чекбоксов и содержит набор его параметров.</td>
    </tr>    
</table>

Среди параметров, передаваемых для переключателя в массиве хешей `option`, обязательными являются:

* `val` (`String`|`Number`) – значение, возвращаемое выбранным чекбоксом (элемент `checkbox__control`);
* `text`  (`String`) – подпись, отображаемая для текущего переключателя. 

Помимо обязательных параметров в массиве `option` могут быть переданы любые параметры, допустимые для блока `checkbox`, например, модификаторы `_checked` или `_disabled`.

## Модификаторы блока

### Темы блока `_theme`

 * simple   
 * normal  

Без указания темы к блоку применяются значения, установленные браузером по умолчанию (*default*). 

Наглядно показано на примерах ниже:

#### default

```bemjson
{
    block : 'checkbox-group',
    name : 'checkbox-default',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```


#### simple

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'simple' },
    name : 'checkbox-simple',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

 
#### normal

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'l' },
    name : 'checkbox-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```



### Размер переключателей `_size`

Обязательный модификатор. Модификатор `_size` устанавливает размер переключателей для всех типов групп чекбоксов.

Реализован только в теме *normal*.

В зависимости от значения модификатора `_type` доступны следующие размеры реализации блока:

<table>
    <tr>
        <th>Размер</th>
        <th>Обычная группа чекбоксов и <code>_type_line</code></th>
        <th>Кнопочная группа чекбоксов (<code>_type_button</code>)</th>
    </tr>
    <tr>
        <th>s</th>
        <td>–</td>
        <td>+</td>
    </tr>
    <tr>
        <th>m</th>
        <td>+</td>
        <td>+</td>
    </tr>
    <tr>
        <th>l</th>
        <td>+</td>
        <td>+</td>
    </tr>
    <tr>
        <th>xl</th>
        <td>–</td>
        <td>+</td>
</table>

Размеры на примере темы *normal* с модификатором `_type_button`:

<table>
    <tr>
        <th>Размер</th>
        <th>Пример</th>
    </tr>
    <tr>
        <th>s</th>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 's', 
        type : 'button' 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>m</th>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        type : 'button' 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>l</th>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button' 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>xl</th>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'xl', 
        type : 'button' 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
</table>


### Тип группы чекбоксов `_type`

Доступны следующие значения модификатор `_type`:

* Модификатор `_type` со значением `button`. Используется для создания кнопочной группы чекбоксов – блока из кнопок-переключателей. 
* Модификатор `_type` со значением `line` используется для создания группы чекбоксов с выравниванием в строку. После каждого переключателя группы, кроме последнего, автоматически добавляется отступ справа. Размер отступа зависит от значения модификатора `_size`. Реализован только в теме *normal*.

Модификатор реализован во всех темах блока.

<table>
    <tr>
        <th>Тип</th>

        <th>Пример</th>
    </tr>
    <tr>
        <td>Обычная группа чекбоксов</td>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'l' },
    name : 'checkbox-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    <tr>
        <td>Кнопочная группа чекбоксов (<code>_type_button</code>)</td>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button' 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>Строчная группа чекбоксов (<code>_type_line</code>)</td>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'line' 
    },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>    
</table>


### Неактивна `_disabled`
   
В состоянии "неактивна" группа чекбоксов отображается, но недоступна для действий пользователя.  

Такая группа чекбоксов не будет получать фокус (модификатор `_focused`).

При установке модификатора `_disabled` для группы всем переключателям группы также устанавливается модификатор `_disabled`. Как следствие, для них не будут:

* устанавливаться модификаторы состояния `_hovered`, `_pressed` и `_focused`;
* изменяться значения модификатора `_checked`.

Модификатор реализован во всех темах блока.

```bemjson
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button',
        disabled : true 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true }
    ]
}
```


### Состояния блока 

#### В фокусе `_focused`

Модификатор `_focused` в значении `true` автоматически выставляется блоку в момент, когда один из его элементов находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

Реализован во всех темах блока.

```bemjson
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button',
        focused : true 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```


## Зависимости блока

Блок `checkbox-group` зависит от следующего набора блоков и элементов:

* `i-bem__dom `
* `checkbox`
* `jquery`
