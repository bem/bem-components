# button

Блок `button` используется для создания различных типов кнопок и предоставляет возможность изменять их размер, состояние, содержимое и внешний вид.

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
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
        <td>Кнопка с иконкой, которая формируется блоком <a href="../icon/icon.ru.md">icon</a></td>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>Адрес ссылки. Используется только для <a href="#link-button">кнопки-ссылки</a>.</td>
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
        <td>Значение, отправляемое на сервер. Если поле не указано, по умолчанию отправляется пустое значение.</td>
    </tr>
</table>

При необходимости дополнительные HTML-атрибуты блока могут быть заданы в зарезервированном поле `attrs` в BEMJSON.

## Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * normal (**Важно:** При выборе темы `normal` необходимо указывать обязательный модификатор [size](#size).)

Без указания модификатора темы отображается [нативный](#default) вид контрола.

Наглядно показано на примерах ниже:

<a href="default"></a>
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
    text : 'Тема simple',
    mods : { theme : 'simple' }
}
```

**normal**

```bemjson
{
    block : 'button',
    text : 'Тема normal',
    mods : { theme : 'normal', size : 'm' }
}
```

<a name="size"></a>
### Размеры кнопок `_size`

Реализован только в теме `normal`. Задает размер всем типам кнопок.

Доступно четыре размера реализации блока: **s**, **m**, **l**, **xl**.

<table>
     <tr>
        <th>Размер кнопки</th>
        <th>Размер шрифта</th>
        <th>Высота кнопки</th>
    </tr>
    <tr>
        <th>s</th>
        <td>13px</td>
        <td>24px</td>
    </tr>
    <tr>
        <th>m</th>
        <td>13px</td>
        <td>28px</td>
    </tr>
    <tr>
        <th>l</th>
        <td>15px</td>
        <td>32px</td>
    </tr>
    <tr>
        <th>xl</th>
        <td>18px</td>
        <td>38px</td>
    </tr>
</table>

```bemjson
{
    block : 'button',
    text : 'Small',
    mods : { theme : 'normal', size : 's' }
}
```

```bemjson
{
    block : 'button',
    text : 'Medium',
    mods : { theme : 'normal', size : 'm' }
}
```

```bemjson
{
    block : 'button',
    text : 'Large',
    mods : { theme : 'normal', size : 'l' }
}
```

```bemjson
{
    block : 'button',
    text : 'X-large',
    mods : { theme : 'normal', size : 'xl' }
}
```

### Типы кнопок `_type`

Если модификатор `type` не указан, по умолчанию отображается простая кнопка.

<a name="link-button"></a>
#### Кнопка-ссылка
Блок может быть представлен как кнопка, которая при нажатии ведет себя как ссылка. Для этого необходимо установить модификатор `type` в значение `link`.

В случае использования кнопки-ссылки, необходимо дополнительно указать обязательный атрибут `url` во входных данных.

```bemjson
{
    block : 'button',
    url : '#',
    text : 'Кнопка-ссылка',
    mods : { theme : 'normal', size : 'm', type : 'link' }
}
```

#### Кнопка отправки формы

Модификатор `type` в значении `submit` превращает обычную кнопку в кнопку отправки данных на сервер. Такой тип кнопки всегда должен располагаться в форме.

```bemjson
{
    block : 'button',
    url : '#',
    text : 'Кнопка отправки формы',
    mods : { theme : 'normal', size : 'm', type : 'submit' }
}
```

### Внешний вид `_view`

#### Визуальное выделение `_action`

Визуально выделяет кнопку на странице.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', view : 'action' },
    type : 'submit',
    text : 'Action'
}
```

#### Псевдокнопка `_pseudo`

При выставлении модификатора `view` в значение `pseudo`, кнопка получает прозрачный фон.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', view : 'pseudo' },
    text : 'Псевдокнопка'
}
```

В неактивном состоянии границы псевдокнопки исчезают, и она сливается со страницей.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', view : 'pseudo', disabled : true },
    text : 'Псевдокнопка'
}
```

### Состояния

#### Неактивна `_disabled`

Если указан модификатор `disabled`, кнопка видна, но недоступна для действий пользователя.

Такая кнопка не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами.

```bemjson
{
    block : 'button',
    text : 'Неактивна',
    mods : { theme : 'normal', size : 'm', disabled : true }
}
```

#### В фокусе `_focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

#### Залипание `_togglable`

Позволяет реализовать залипание кнопки. Допустимые значения:

* `check` (первое нажатие на кнопку вдавливает ее, второе – приводит в первоначальное состояние)

```bemjson
{
    block : 'button',
    text : 'Check',
    mods : { theme : 'normal', size : 'm', togglable : 'check' }
}
```

* `radio` (нажатие на кнопку вдавливает ее и она не может быть приведена в первоначальное состояние)

```bemjson
{
    block : 'button',
    text : 'Radio',
    mods : { theme : 'normal', size : 'm', togglable : 'radio' }
}
```

#### Наведение курсором `_hovered`

Определяет действие «наведение курсором» на кнопку.

#### Нажатие `_pressed`

Определяет действие «нажатие» на кнопку.

### Внешний вид `_view`

#### Визуальное выделение `_action`

Визуально выделяет кнопку на странице, добавляя ей желтую подсветку.

```bemjson
{
    block : 'button',
    type : 'submit',
    text : 'Промокнопка',
    mods : { theme : 'normal', size : 'm', view : 'action' }
}
```

#### Псевдокнопка `_pseudo`

Реализован только в теме `normal` для визуального изменения кнопки. При выставлении модификатора `view` в значение `pseudo`, кнопка получает прозрачный фон.

```bemjson
{
    block : 'button',
    text : 'Псевдокнопка',
    mods : { theme : 'normal', size : 'm', view : 'pseudo' }
}
```

В неактивном состоянии границы псевдокнопки исчезают и она сливается со страницей.

```bemjson
{
    block : 'button',
    text : 'Псевдокнопка',
    mods : { theme : 'normal', size : 'm', view : 'pseudo', disabled : true }
}
```

## Элементы блока

### __text

Вспомогательный элемент. Добавляется блоку на уровне шаблонизатора.
