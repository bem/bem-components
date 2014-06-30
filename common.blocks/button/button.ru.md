# button

Блок `button` используется для создания различных типов кнопок и предоставляет возможность изменять их размер, состояние, содержимое и внешний вид.

## Варианты использования кнопок

* Обычная кнопка – применяется для любых кнопок веб-интерфейса; используется по умолчанию.
* Кнопка-ссылка – применяется для перехода по ссылке. Задается модификатором `_type` со значением `_link`.
* Кнопка действия – предназначена для отправки данных на сервер (submit). Всегда располагается в форме. Задается через атрибут блока `type` со значением `submit`.

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
        <td>type</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>Преобразует обычную кнопку в кнопку действия. Допустимое значение атрибута – <code>submit</code>.</td>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>Адрес ссылки. Применяется только при наличии модификатора блока <code>_type_link</code>. Кнопка становится ссылкой, а значение <code>url</code> атрибутом <code>href</code>.</td>
    </tr>
</table>

Другие допустимые атрибуты блока могут задаваться в зарезервированном поле `attrs` в BEMJSON.

## Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * normal

Без указания модификатора темы отображается нативный вид контрола (*default*).

Наглядно видно на примерах ниже:

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

Задает размер всем типам кнопок. Обязательный модификатор.

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

Блок может быть представлен в виде кнопки-ссылки (`_type_link`).
Дополнительно во входных данных необходимо указать обязательный атрибут `url`. В таком случае кнопка получает тег `<a>`, а значение `url` становится атрибутом `href`.

```
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', type : 'link' },
    url : '#',
    text : 'Кнопка-ссылка'
}
```

### Состояния

#### Неактивна `_disabled`

В состоянии «неактивна» кнопка видна, но недоступна для действий пользователя.

Такая кнопка не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами.

```bemjsom
{
    block : 'button',
    text : 'Неактивна',
    mods : { theme : 'normal', size : 'm', disabled : true }
}
```

#### В фокусе `_focused`

В состоянии блока `focused` со значением `true` кнопка всегда находится в фокусе. Нажатие по ней можно выполнить клавишей `Space` или `Enter`. Переход по контролам формы осуществляется клавишей `Tab`.

```bemjson
{
    block : 'button',
    text : 'В фокусе',
    mods : { theme : 'normal', size : 'm', focused : true }
}
```

#### Наведение курсором `_hovered`

Определяет действие «наведение курсором» на кнопку.

```bemjson
{
    block : 'button',
    text : 'Наведение курсором',
    mods : { theme : 'normal', size : 'm', hovered : true }
}
```

#### Нажатие `_pressed`

Определяет состояние «нажатие на кнопку» (действие).

```bemjson
{
    block : 'button',
    text : 'Кнопка нажата',
    mods : { theme : 'normal', size : 'm', pressed : true }
}
```

#### Залипание `_togglable`

Определяет состояние кнопки в нажатом состоянии, когда первый клик по кнопке нажимает ее, а второй возвращает в исходное состояние.

```bemjson
{
    block : 'button',
    text : 'Кнопка зажата',
    mods : { theme : 'normal', size : 'm', togglable : true }
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

При выборе модификатора `_pseudo` со значением `true`, кнопка получает прозрачный фон.

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

## Зависимости

* `control`
* `i-bem__dom`
* `keyboard`
