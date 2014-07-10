# checkbox

Блок `checkbox` («чекбокс») позволяет управлять параметром выбора с двумя состояниями – включено и выключено. Используется, когда необходимо выбрать более одного варианта из предложенных.

Блок создает контейнер, содержащий нативный контрол чекбокс (элемент `control`) `<input class="checkbox__control" type="checkbox">`, который скрывается при использовании модификатора `theme`.

Атрибут `autocomplete` принудительно переведен в состояние `off` для обеспечения корректной работы блока.

```bemjson
{
    block : 'checkbox',
    text : 'Вариант 1',
    name: 'name1',
    val: '1'
}
```

## Допустимые атрибуты блока

Допустимые атрибуты блока задаются в одноименных полях входного BEMJSON:

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
        <td>
            <code>String</code>
        </td>
        <td>Задает значение чекбокса. Является частью пары имя / значение (name / value), используемой с целью отправки формы.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>Иконка, которая отображается с помощью блока <code>icon</code>.</td>
    </tr>
</table>

##  Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * normal

Без указания модификатора темы отображается нативный вид контрола (*default*).

Наглядно показано на примерах ниже:

**default**

```bemjson
{
    block : 'checkbox',
    text : 'default',
    name: 'default',
    val: '1'
}
```

**simple**

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'simple' },
    text : 'Тема Simple',
    name: 'simple',
    val: '2'
}
```

**normal**

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm' },
    text : 'Тема Normal',
    name: 'normal',
    val: '3'
}
```

### Размер `_size`

Задает размер шрифта.

Обязательный модификатор. Реализован только в теме *normal*.

Доступно два размера реализации блока: **M**, **L**.

<table>
    <tr>
        <th>Размер<br>блока</th>
        <th>Размер<br>шрифта</th>
        <th>Высота строки<br>элемента <code>__box</code></th>
        <th>Пример</th>
    </tr>
    <tr>
        <th>M</th>
        <td>13px</td>
        <td>14px</td>
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
    val: '2'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>L</th>
        <td>15px</td>
        <td>17px</td>
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
    val: '3'
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
    mods : { theme : 'normal', size : 'm', type : 'button' },
    text : 'Кнопка Normal',
    name: 'button',
    val: '1'
}
```

### Состояния

#### В фокусе `_focused`

В состоянии блока `focused` со значением `true` чекбокс всегда находится в фокусе. Если блок представлен в виде кнопки, она приобретает желтую тень. Нажатие по чекбоксу можно выполнить клавишей `Space` или `Enter`. Переход по контролам формы осуществляется клавишей `Tab`.

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

В состоянии «неактивен» чекбокс виден, но недоступен для действий пользователя.

Такой чекбос не может получить фокус путем нажатия на клавишу `Tab` мышью или другими способами.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', disabled : true },
    text : 'Неактивен',
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
