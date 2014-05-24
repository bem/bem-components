# button

Блок **button** используется для создания различных типов кнопок и предоставляет возможность изменять их размер, состояние, содержимое и внешний вид.

В MSIE8 и ниже кастомные кнопки деградируют до нативных кнопок `<button>`, кнопка-ссылка станет нативной ссылкой `<a>`.

## Варианты использования кнопок

Блок **button** служит для создания различных типов кнопок:


<table>
    <tr>
        <th>Тип</th>
        <th>Описание</th>
        <th>Пример</th>
    </tr>
    <tr>
        <td>Обычная кнопка</td>
        <td>Применяется для любых кнопок веб-интерфейса; используется по умолчанию.</td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    icon : { block : 'icon', mods : { action : 'download' } }
}
            </code></pre>
        </td>
    <tr>
        <td>Кнопка-ссылка</td>
        <td>Разновидность обычной кнопки, для которой дополнительно задан атрибут `url`.
            Применяется для перехода по ссылке.
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', type : 'link' },
    url : '#',
    text : 'link'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>Кнопка действия</td>
        <td>Предназначена для отправки данных на сервер (submit). Всегда располагается в форме. Чтобы кнопка стала кнопкой действия, во входном BEMJSON блока необходимо добавить модификатор `type` со значением `submit`.</td>
        <td>
            <pre><code>
{
    tag: 'form',
    content: {
        block : 'button',
        mods : { theme : 'normal', size : 'm', type : 'submit' },
        text : 'button'
    }
}
            </code></pre>
        </td>
    </tr>
</table>

## API блока

Публичные методы блока представлены в таблице:

<table>
    <tr>
        <th>Метод</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>getText</td>
        <td>Возвращает текст кнопки {String}</td>
    </tr>
    <tr>
        <td>setText</td>
        <td>Задает текст кнопки</td>
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
        <td>text</td>
        <td>`string`</td>
        <td>Текст кнопки</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>`bemjson`</td>
        <td>Блок `icon`, формирующий иконку.</td>
    </tr>
    <tr>
        <td>url</td>
        <td>`string`</td>
        <td>Адрес ссылки. Если указан, то кнопка становится ссылкой, а значение `url` атрибутом `href`.</td>
    </tr>
</table>

Другие допустимые атрибуты блока могут задаваться в зарезервированном поле `attrs` в BEMJSON.

## Модификаторы блока

* [theme](#Темы блока `_theme`)
* [size](#Размеры кнопок `_size`)
* [type](#Типы блока `_type`)
* [disabled](#Не активна `_disabled`)
* [focused](#В фокусе `_focused`)
* [hovered](#Наведение курсором `_hovered`)
* [pressed](#Нажатие `_pressed`)
* [togglable](#Залипание `_togglable`)
* [action](#Выделение `_action`)
* [pseudo](#Псевдокнопка `_pseudo`)

### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * normal

Без указания темы к блоку применяются значения по умолчанию (*default*), установленные браузером.

Наглядно видно на примерах ниже:

#### default

```bemjson
{
    block : 'button',
    text : 'default'
}
```

#### simple

```bemjson
{
    block : 'button',
    mods : { theme : 'simple' },
    text : 'simple'
}
```

#### normal

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    text : 'normal'
}
```

### Размеры кнопок `_size`

Задает размер всем типам кнопок. Обязательный модификатор.

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
        <td>18px</td>
    </tr>
    <tr>
        <td>Высота кнопки</td>
        <td>24px</td>
        <td>28px</td>
        <td>32px</td>
        <td>38px</td>
    </tr>
    <tr>
        <td>Пример</td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 's' },
    text : 'Small'
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    text : 'Medium'
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 'l' },
    text : 'Large'
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 'xl' },
    text : 'X-large'
}
            </code></pre>
        </td>
    </tr>
</table>


### Типы кнопок `_type`

Блок представлен следующими типами:

* кнопка-ссылка (`_link`). Обязательный атрибут `url`. Кнопка получает тег `<a>`, а значение `url` становится атрибутом `href`.
* кнопка действия (`_submit`). Обязательно располагается в форме.

Реализован в теме *simple* и *normal*.

<table>
    <tr>
        <th>Тип / Реализация</th>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td> `_link`</td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { type : 'link' },
    url : '#',
    text : 'link'
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'simple', type : 'link' },
    url : '#',
    text : 'link'
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', type : 'link' },
    url : '#',
    text : 'link'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>`_submit`</td>
        <td>
            <pre><code>
{
    tag: 'form',
    content: {
        block : 'button',
        mods : { type : 'submit' },
        text : 'default'
    }
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    tag: 'form',
    content: {
        block : 'button',
        mods : { theme : 'simple', type : 'submit' },
        text : 'simple'
    }
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    tag: 'form',
    content: {
        block : 'button',
        mods : { theme : 'normal', size : 'm', type : 'submit' },
        text : 'normal'
    }
}
            </code></pre>
        </td>
    </tr>
</table>

### Состояния

#### Не активна `_disabled`

В состоянии "не активна" кнопка видна, но недоступна для действий пользователя.

Такая кнопка не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами.

Реализован во всех темах блока.

<table>
    <tr>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td>
            <pre><code>
{
    block : 'button',
    text : '_disabled',
    mods : { disabled : true }
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    text : '_disabled',
    mods : { theme : 'simple', disabled : true }
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    text : '_disabled',
    mods : { theme : 'normal', size : 'm', disabled : true }
}
            </code></pre>
        </td>
    </tr>
</table>

#### В фокусе `_focused`

В состоянии блока `focused` со значением `true` кнопка всегда находится в фокусе. Нажатие по ней можно выполнить клавишей `Space` или `Enter`. Переход по контролам формы осуществляется клавишей `Tab`.

Реализован во всех темах блока.

```bemjson
{
    block : 'button',
    text : '_focused',
    mods : {
        theme : 'normal',
        size : 'm',
        focused : true
    }
}
```
#### Наведение курсором `_hovered`

Определяет действие "наведение курсором" на кнопку.

Реализован во всех темах блока.

<table>
    <tr>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td>
            <pre><code>
{
    block : 'button',
    text : '_hovered',
    mods : { hovered : true }
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    text : '_hovered',
    mods : { theme : 'simple', hovered : true }
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    text : '_hovered',
    mods : { theme : 'normal', size : 'm', hovered : true }
}
            </code></pre>
        </td>
    </tr>
</table>

#### Нажатие `_pressed`

Определяет состояние "нажатие на кнопку" (действие).

Реализован во всех темах блока.

<table>
    <tr>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td>
            <pre><code>
{
    block : 'button',
    text : '_pressed',
    mods : { pressed : true }
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    text : '_pressed',
    mods : { theme : 'simple', pressed : true }
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    text : '_pressed',
    mods : { theme : 'normal', size : 'm', pressed : true }
}
            </code></pre>
        </td>
    </tr>
</table>

#### Залипание `_togglable`

Определяет состояние кнопки в нажатом состоянии, когда первый клик по кнопке нажимает ее, а второй возвращает в исходное состояние.

Реализован во всех темах блока.

<table>
    <tr>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td>
            <pre><code>
{
    block : 'button',
    text : '_togglable',
    mods : { togglable : true }
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    text : '_togglable',
    mods : { theme : 'simple', togglable : true }
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    text : '_togglable',
    mods : { theme : 'normal', size : 'm', togglable : true }
}
            </code></pre>
        </td>
    </tr>
</table>

#### Выделение `_action`

Визуально выделяет кнопку на странице.

Реализован во всех темах блока.

<table>
    <tr>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td>
            <pre><code>
{
    block : 'button',
    text : '_action',
    mods : { action : true }
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    text : '_action',
    mods : { theme : 'simple', action : true }
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'button',
    text : '_action',
    mods : { theme : 'normal', size : 'm', action : true }
}
            </code></pre>
        </td>
    </tr>
</table>

#### Псевдокнопка `_pseudo`

При выборе модификатора `_pseudo` со значением `true`, кнопка получает прозрачный фон. В неактивном состоянии границы псевдокнопки исчезают и она сливается со страницей.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', pseudo : true },
    text : 'pseudo'
}
```

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', pseudo : true, disabled : true },
    text : 'pseudo'
}
```

## Элементы блока

Визуально представлен следующими элементами:

### __text

Технический элемент. Обрамляет текст кнопки.
Нужен для позиционирования текста внутри кнопки, в том числе для случаев использования вместе с иконкой.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    icon : { block : 'icon', mods : { action : 'download' } },
    text : 'with icon'
}
```

## Зависимости

Блок `button` зависит от блока `base-control`, предоставляющего общий API для контролов, а также от блока `i-bem__dom`.
