# checkbox

Блок `checkbox` («чекбокс») позволяет управлять параметром выбора с двумя состояниями – включено и выключено. Используется, когда необходимо выбрать два или более варианта из предложенных.

Блок создает контейнер, содержащий нативный контрол чекбокс (элемент `control`) `<input class="checkbox__control" type="checkbox" атрибуты>`. Сам нативный контрол скрыт внутри контейнера, используется только его функциональность. Атрибут `autocomplete` отключен по умолчанию.

```bemjson
{
    block : 'checkbox',
    text : 'Вариант 1',
    name: 'name1',
    value: '1'
}
```

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
        <td>Задает значение текстовой строке чекбокса.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td>Задает имя чекбокса. Обязательный атрибут. Является частью пары имя / значение (name / value), используемой с целью отправки формы.</td>
    </tr>
    <tr>
        <td>val</td>
            <code>String</code>
        <td>Задает значение чекбокса. Является частью пары имя / значение (name / value), используемой с целью отправки формы.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>Иконка, которая отображается с помощью блока `icon`.</td>
    </tr>
</table>

##  Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * normal

Без указания модификатора темы отображается нативный вид контрола (*default*).

Наглядно видно на примерах ниже:

* default

    ```bemjson
    {
        block : 'checkbox',
        text : 'default',
        name: 'default',
        value: '1'
    }
    ```

* simple

    ```bemjson
    {
        block : 'checkbox',
        mods : { theme : 'simple' },
        text : 'Тема Simple',
        name: 'simple',
        value: '2'
    }
    ```

* normal

    ```bemjson
    {
        block : 'checkbox',
        mods : { theme : 'normal', size : 'm' },
        text : 'Тема Normal',
        name: 'normal',
        value: '3'
    }
    ```

### Размер `_size`

Задает размер шрифта.

Обязательный модификатор. Реализован только в теме *normal*.

Доступно четыре размера реализации блока: **S**, **M**, **L**, **XL**.

<table>
    <tr>
        <th>Размер/Параметры</th>
        <th>Размер шрифта</th>
        <th>Высота строки</th>
        <th>Пример</th>
    </tr>
    <tr>
        <th>S</th>
        <td>13px</td>
        <td>24px</td>
        <td>
            <pre><code>
{
    block : 'checkbox',
    mods : {
        theme : 'normal',
        size : 's'
    },
    text : 'Размер S',
    name: 'name1',
    value: '1'
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
    block : 'checkbox',
    mods : {
        theme : 'normal',
        size : 'm'
    },
    text : 'Размер M',
    name: 'name2',
    value: '2'
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
    block : 'checkbox',
    mods : {
        theme : 'normal',
        size : 'l'
    },
    text : 'Размер L',
    name: 'name3',
    value: '3'
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
    block : 'checkbox',
    mods : {
        theme : 'normal',
        size : 'xl'
    },
    text : 'Размер XL',
    name: 'name4',
    value: '4'
}
            </code></pre>
        </td>
    </tr>
</table>

### Тип `_type`

Блок может быть представлен в виде кнопки (модификатор `type` в значении `button`). В таком случае выбор элемента происходит нажатием на кнопку.

```bemjson
{
    block : 'checkbox',
    mods : {
        theme : 'normal',
        size : 'm',
        type : 'button'
    },
    text : 'Кнопка Normal',
    name: 'button',
    value: '1'
}
```

### Состояния

#### В фокусе `_focused`

В состоянии блока `focused` со значением `true` кнопка всегда находится в фокусе. Нажатие по ней можно выполнить клавишей `Space`. Переход по контролам формы осуществляется клавишей `Tab`.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', focused : true },
    text : 'В фокусе',
    name: 'name1',
    val : 1
}
```

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', type : 'button', focused : true },
    text : 'В фокусе',
    name: 'name2',
    val : 2
}
```

#### Неактивен `_disabled`

В состоянии "неактивн" чекбокс виден, но недоступен для действий пользователя.

Такой чекбос не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', disabled : true },
    text : 'Неактивна',
    name: 'name1',
    val : 1
}
```

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', type : 'button', disabled : true },
    text : 'Неактивна',
    name: 'name2',
    val : 2
}
```

#### Отмечен `_checked`

Модификатор `checked` в значении `true` определяет, что чекбокс отмечен (выбран).

Модификатор `checked` может быть применен ко всем чекбоксам в группе.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', checked : true },
    text : 'Отмечен',
    name: 'name1',
    val : 1
}
```

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', type : 'button', checked : true },
    text : 'Отмечен',
    name: 'name2',
    val : 2
}
```

## Элементы блока

### `__box`

Элемент `box` служит для отрисовки чекбокса, нативный чекбокс скрыт.

Добавляется блоку на уровне шаблонизатора.

### Контрол `__control`

Элемент `control` служит для использования функциональности нативного контрола чекбокса.

Добавляется блоку на уровне шаблонизатора.

### Пометка (галочка) `__tick`

Элемент для отображения галочки в поле чекбокса.

В CSS-свойстве элемента `tick` находится векторное изображение «галочки» `background-image` в формате svg.
