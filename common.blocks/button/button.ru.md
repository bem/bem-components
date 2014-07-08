# button

Блок `button` используется для создания различных типов кнопок и предоставляет возможность изменять их размер, состояние, содержимое и внешний вид.

## Варианты использования кнопок

* Обычная кнопка – применяется для любых кнопок веб-интерфейса. Используется по умолчанию.
* Кнопка-ссылка – применяется для перехода по ссылке. Задается модификатором `type` со значением `link`.
* Кнопка отправки формы – предназначена для отправки данных формы на сервер (submit). Задается модификатором `type` со значением `submit`.

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
        <td>
            <code>String</code>
        </td>
        <td>Задает текст кнопки.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>BEMJSON</code></td>
        <td>Кнопка с иконкой, которая формируется блоком <code>icon</code>.</td>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>Адрес ссылки. Применяется только при наличии модификатора блока <code>button_type_link</code>. Кнопка становится ссылкой, а значение <code>url</code> – атрибутом <code>href</code>.</td>
    </tr>
    <tr>
        <td>id</td>
        <td>
            <code>String</code>
        </td>
        <td>Уникальный идентификатор кнопки.</td>
    </tr>
    <tr>
        <td>tabindex</td>
        <td>
            <code>String</code>
        </td>
        <td>Определяет последовательность перехода между кнопками при нажатии на `Tab`.</td>
    </tr>
    <tr>
        <td>value</td>
        <td>
            <code>String</code>
        </td>
        <td>Значение, отправляемое на сервер. По умолчанию пустое.</td>
    </tr>
</table>

Другие допустимые атрибуты блока могут задаваться в зарезервированном поле `attrs` в BEMJSON.

## Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * normal

Без указания модификатора темы отображается нативный вид контрола (*default*).

Наглядно показано на примерах ниже:

**default**

```bemjson
{
    block : 'button',
    text : 'Тема не указана'
}
```

**simple**

```bemjson
{
    block : 'button',
    mods : { theme : 'simple' },
    text : 'Тема simple'
}
```

**normal**

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    text : 'Тема normal'
}
```

### Размеры кнопок `_size`

Обязательный модификатор. Задает размер всем типам кнопок.

Реализован только в теме *normal*.

Доступно четыре размера реализации блока: **s**, **m**, **l**, **xl**.

<table>
    <tr>
        <th>Размер<br>кнопки</th>
        <th>Размер<br>шрифта</th>
        <th>Высота<br>кнопки</th>
        <th>Пример</th>
    </tr>
    <tr>
        <th>S</th>
        <td>13px</td>
        <td>24px</td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 's' },
    text : 'Small'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>M</th>
        <td>13px</td>
        <td>28px</td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    text : 'Medium'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>L</th>
        <td>15px</td>
        <td>32px</td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 'l' },
    text : 'Large'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>XL</th>
        <td>18px</td>
        <td>38px</td>
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

Блок может быть представлен в виде кнопки-ссылки (`_type_link`) и кнопки отправки формы (`_type_submit`).
В случак кнопки-ссылки, дополнительно во входных данных необходимо указать обязательный атрибут `url`. В таком случае кнопка получает тег `<a>`, а значение `url` становится атрибутом `href`.

**Кнопка-ссылка**

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', type : 'link' },
    url : '#',
    text : 'Кнопка-ссылка'
}
```

**Кнопка отправки формы**

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', type : 'submit' },
    url : '#',
    text : 'Кнопка отправки формы'
}
```

### Состояния

#### Неактивна `_disabled`

В состоянии «неактивна» кнопка видна, но недоступна для действий пользователя.

Такая кнопка не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами.

```bemjson
{
    block : 'button',
    text : 'Неактивна',
    mods : { theme : 'normal', size : 'm', disabled : true }
}
```

#### В фокусе `_focused`

В состоянии блока `focused` со значением `true` кнопка всегда находится в фокусе. Нажатие по ней можно выполнить клавишей `Space` или `Enter`.

```bemjson
{
    block : 'button',
    text : 'В фокусе',
    mods : { theme : 'normal', size : 'm', focused : true }
}
```

#### Наведение курсором `_hovered`

Определяет действие «наведение курсором» на кнопку.

#### Нажатие `_pressed`

Определяет состояние «нажатие на кнопку» (действие).

#### Залипание `_togglable`

Позволяет реализовать залипание кнопки. Допустимые значения: `check` и `radio`.

```bemjson
{
    block : 'button',
    text : 'Кнопка зажата',
    mods : { theme : 'normal', size : 'm', togglable : 'check' }
}
```

#### Визуальное выделение `_action`

Визуально выделяет кнопку на странице.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', action : true },
    type : 'submit',
    text : 'Action'
}
```

#### Псевдокнопка `_pseudo`

При выборе модификатора `pseudo` со значением `true`, кнопка получает прозрачный фон.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', pseudo : true },
    text : 'Псевдокнопка'
}
```

В неактивном состоянии границы псевдокнопки исчезают и она сливается со страницей.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', pseudo : true, disabled : true },
    text : 'Псевдокнопка'
}
```

## Элементы блока

### __text

Технический элемент. Обрамляет текст кнопки.
Нужен для позиционирования текста внутри кнопки, в том числе для случаев использования вместе с иконкой.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    icon : {
        block : 'icon',
        mods : { action : 'download' }
    },
    text : 'Кнопка с иконкой'
}
```
