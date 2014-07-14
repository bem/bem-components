# radio-group  

Блок `radio-group` – «радиогруппа», состоящая из набора зависимых переключателей «радиокнопок» (блоков `radio`). Радиогруппа используется для выбора единственного варианта из списка. 

Блок `radio-group` в результате BEMHTML-преобразований на странице становится HTML-элементом с тегом `<span>` – контейнером, содержащим группу переключателей (радиокнопок).


## Допустимые параметры блока

Допустимые параметры блока задаются в одноименных полях входного BEMJSON блока:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>name</td>
        <td><code>String</code></td>
        <td>Имя радиогруппы. Преобразуется в HTML-атрибут <code>name</code> вложенного блока <code>input</code>.</td>
    </tr>
    <tr>
        <td>options</td>
        <td><code>Array</code></td>
        <td>Массив хешей. Каждый хеш соответствует одному переключателю и содержит набор его параметров. </td>
    </tr>    
</table>

Среди параметров, передаваемых в атрибуте `option` для переключателя, обязательными являются:

* `val` (`String` | `Number`) – значение, возвращаемое выбранным переключателем (элементом `radio__control`);
* `text` (`String`) – подпись, отображаемая для текущего переключателя. 


## Модификаторы блока

### Темы блока `theme`

 * simple   
 * normal  

Без указания темы к блоку применяются значения по умолчанию (*default*), установленные браузером. 

Наглядно видно на примерах ниже:

#### default

```bemjson
{
    block : 'radio-group',
    name : 'radio-default',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```


#### simple

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'simple' },
    name : 'radio-simple',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

 
#### normal

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'normal', size : 'l' },
    name : 'radio-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```



### Размеры переключателей группы `size`

Задает размер переключателей для всех типов радиогрупп. Обязательный модификатор. 

Реализован только в теме *normal*.

В зависимости от значения модификатора `type` доступны следующие размеры реализации блока:

<table>
    <tr>
        <th>Размер</th>
        <th>Обычная радиогруппа</th>
        <th>Кнопочная радиогруппа (<code>_type_button</code>)</th>
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


Размеры на примере темы *normal* с модификатором `radio-group_type_button`:

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
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 's', 
        type : 'button' 
    },
    name : 'radio-S',
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
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        type : 'button' 
    },
    name : 'radio-M',
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
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button' 
    },
    name : 'radio-L',
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
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'xl', 
        type : 'button' 
    },
    name : 'radio-XL',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
</table>

### Тип радиогруппы `type`

Модификатор `type` может иметь следующие значения:

* `button`. Используется для создания кнопочной радиогруппы – блока кнопок-переключателей;
* `line`. Используется для создания радиогруппы с выравниванием в строку. После каждого переключателя группы кроме последнего автоматически добавляется отступ справа. Размер отступа зависит от значения модификатора `size`. Реализован только в теме *normal*.

Модификатор реализован во всех темах блока.

<table>
    <tr>
        <th>Тип</th>

        <th>Пример</th>
    </tr>
    <tr>
        <td>Обычная радиогруппа</td>
        <td>
            <pre><code>
{
    block : 'radio-group',
    mods : { theme : 'normal', size : 'l' },
    name : 'radio-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    <tr>
        <td>Кнопочная радиогруппа</td>
        <td>
            <pre><code>
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button' 
    },
    name : 'radio-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>Строчная радиогруппа (<code>_type_line</code>)</td>
        <td>
            <pre><code>
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'line' 
    },
    name : 'radio-line',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>    
</table>


### Неактивна `disabled`
   
В состоянии "неактивна" радиогруппа отображается, но недоступна для действий пользователя.  

Такая радиогруппа не будет получать фокус (модификатор `focused`).

При установке модификатора `disabled` для радиогруппы всем ее переключателям также устанавливается модификатор `disabled`. Как следствие для них не будут:

* устанавливаться модификаторы состояния `hovered`, `pressed` и `focused`;
* изменяться значения модификатора `checked`.

Модификатор реализован во всех темах блока.

```bemjson
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button',
        disabled : true 
    },
    name : 'radio-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```


### Состояния блока 

#### В фокусе `focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда один из его элементов находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

Реализован во всех темах блока.

```bemjson
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button',
        focused : true 
    },
    name : 'radio-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

## Зависимости блока

Блок `radio-group` зависит от следующего набора блоков и элементов:

* `i-bem__dom `
* `radio`
* `jquery`
* `radio-group_type_button` (у которого в зависимостях есть блок `button`)
