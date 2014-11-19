# checkbox

Блок `checkbox` используется для управления параметром выбора с двумя состояниями – «включено» и «выключено».

```bemjson
{
    block : 'checkbox',
    text : 'Вариант 1',
    name: 'name1',
    val: '1'
}
```

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#checkboxtype>type</a> | <code>'button'</code> | <code>BEMJSON</code> | Тип кнопки. |
| <a href=#checkboxchecked>checked</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Чекбокс отмечен. |
| <a href=#checkboxdisabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code> | Блок в фокусе. |
| <a href=#checkboxsize>size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | Размер чекбокса. Используется только для <a href=#checkboxtheme>чекбоксов с модификатором theme в значении islands</a>. |
| <a href=#checkboxtheme>theme</a> | <code>'simple'</code>, <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#checkboxname>name</a> | <code>String</code> | Имя чекбокса. |
| <a href=#checkboxtext>text</a> | <code>String</code> | Текст чекбокса. |
| <a href=#checkboxtitle>title</a> | <code>String</code> | Всплывающая подсказка. Используется только для <a href=#checkboxtype>чекбокса с модификатором type в значении button</a>.|
| <a href=#checkboxval>val</a> | <code>String</code> | Значение, которое будет отправлено на сервер или получено с помощью клиентских скриптов.  |
| <a href=#checkboxicon>icon</a> | <code>BEMJSON</code> | Иконка. Формируется блоком <a href="../icon/icon.ru.md">icon</a>. |

## Обзор блока


Атрибут `autocomplete` принудительно переведен в состояние `off` для обеспечения корректной работы блока.

```bemjson
{
    block : 'checkbox',
    text : 'Вариант 1',
    name: 'name1',
    val: '1'
}
```

### Модификаторы блока

<a name="checkboxtype"></a>

#### Модификатор `type`

Допустимое значение: `'button'`.

Способ использования: `BEMJSON`.

Блок может быть представлен в виде кнопки (модификатор `type` в значении `button`). В таком случае выбор элемента происходит нажатием на кнопку.

Пример:

```bemjson
{
    block : 'checkbox',
    text : 'Кнопка-чекбокс',
    name: 'button',
    val: '1',
    mods : { theme : 'islands', size : 's', type : 'button' }
}
```

<a name="checkboxchecked"></a>
#### Модификатор `checked`

Допустимое значение: `true`.

Способ использования: `BEMJSON`, `JS`.

Модификатор `checked` в значении `true` определяет, что чекбокс отмечен (выбран).

```bemjson
{
    block : 'checkbox',
    text : 'Конфеты',
    name: 'name1',
    val : 1,
    mods : { theme : 'islands', size : 'm', checked : true }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Конфеты',
    name: 'name2',
    val : 2,
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true }
}
```

<a name="checkboxdisabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```bemjson
{
    block : 'checkbox',
    text : 'Конфеты',
    name: 'name1',
    val : 1,
    mods : { theme : 'islands', size : 'm', disabled : true }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Неактивен',
    name: 'name2',
    val : 2,
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true }
}
```

<a name="checkboxfocused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `focused` отвечает за наличие фокуса на блоке.

```js
{
    block : 'button',
    text : 'В фокусе',
    mods : { theme : 'islands', size : 'm', focused : true }
}
```



<a name="checkboxsize"></a>
#### Модификатор `size`

Допустимые значения: `'m'`, `'l'`.

Способ использования: `BEMJSON`.

Задает размер шрифта.

Модификатор реализован только в теме `islands`.

<table>
    <tr>
        <th>Размер<br>блока</th>
        <th>Размер<br>шрифта</th>
        <th>Высота строки<br>элемента <code>__box</code></th>
    </tr>
    <tr>
        <th>m</th>
        <td>13px</td>
        <td>14px</td>
    </tr>
    <tr>
        <th>l</th>
        <td>15px</td>
        <td>17px</td>
    </tr>
</table>

Примеры:

```bemjson
{
    block : 'checkbox',
    text : 'размер M',
    name: 'name2',
    val: '2',
    mods : { theme : 'normal', size : 'm' }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'размер L',
    name: 'name3',
    val: '3',
    mods : { theme : 'normal', size : 'l' }
}
```

<a name="checkboxtheme"></a>
#### Модификатор `theme`

Допустимые значения: `'simple'`, `'islands'`.

Способ использования: `BEMJSON`.

Блок представлен в следующих темах:

 * simple
 * islands (**Важно:** При выборе темы `islands` необходимо указывать обязательный модификатор [`size`](#size))

Без указания модификатора темы отображается [нативный](#native) вид контрола.

Примеры:

<a name="native"></a>
**default**

```bemjson
{
    block : 'checkbox',
    text : 'Default',
    name: 'default',
    val: '1'
}
```

**simple**

```bemjson
{
    block : 'checkbox',
    text : 'Тема simple',
    name: 'simple',
    val: '2',
    mods : { theme : 'simple' }
}
```

**islands**

```bemjson
{
    block : 'checkbox',
    text : 'Тема islands',
    name: 'islands',
    val: '3',
    mods : { theme : 'islands', size : 'm' }
}
```

### Специализированные поля блока


title - type button - всплывающая подсказка


Добавить примеры с тайтлом и айконом



<a name="checkboxname"></a>
#### `name`

Имя чекбокса, предназначено для того, чтобы обработчик формы мог его идентифицировать. Преобразуется в HTML-атрибут `name` вложенного блока `input`.

<a name="checkboxtext"></a>
#### `text`

Задает текст чекбоксу.

<a name="checkboxval"></a>
#### `val`

Определяет значение, которое будет отправлено на сервер или получено с помощью клиентских скриптов. На сервер отправляется пара «имя=значение», где имя задается ключом `name` тега , а значение — ключом `val`. Определяет каждый элемент для того, чтобы клиентская или серверная программа могла однозначно установить, какой пункт выбрал пользователь.

<a name="checkboxicon"></a>
#### `icon`

Иконка, которая отображается с помощью блока `icon`.

#### Элементы блока

### `__box`

Элемент `box` служит для отрисовки чекбокса, нативный чекбокс скрыт.

Добавляется блоку на уровне шаблонизатора.

#### Контрол `__control`

Элемент `control` служит для использования функциональности нативного контрола чекбокса.

Добавляется блоку на уровне шаблонизатора.






















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
        <td>Задает текст лейблу чекбокса.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td>Имя чекбокса, предназначено для того, чтобы обработчик формы мог его идентифицировать.</td>
    </tr>
    <tr>
        <td>val</td>
        <td>
            <code>String</code>
        </td>
        <td>Определяет значение, которое будет отправлено на сервер или получено с помощью клиентских скриптов. На сервер отправляется пара «имя=значение», где имя задается ключом <code>name</code> тега <code><input></code>, а значение — ключом <code>val</code>. Определяет каждый элемент, с тем, чтобы клиентская или серверная программа могла однозначно установить, какой пункт выбрал пользователь.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>Иконка, которая отображается с помощью блока <code>icon</code>. Только для кнопочного представления (только с модификатором  type button</td>
    </tr>
</table>

title - type button - всплывающая подсказка


Добавить примеры с тайтлом и айконом

При необходимости дополнительные HTML-атрибуты блока могут быть заданы в зарезервированном поле `attrs` в BEMJSON.

##  Модификаторы блока

<a name="theme"></a>
### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * normal (**Важно:** При выборе темы `normal` необходимо указывать обязательный модификатор [size](#size).)

Без указания модификатора темы отображается [нативный](#native) вид контрола.

Наглядно показано на примерах ниже:

<a name="native"></a>
**default**

```bemjson
{
    block : 'checkbox',
    text : 'Default',
    name: 'default',
    val: '1'
}
```

**simple**

```bemjson
{
    block : 'checkbox',
    text : 'Тема simple',
    name: 'simple',
    val: '2',
    mods : { theme : 'simple' }
}
```

**normal**

```bemjson
{
    block : 'checkbox',
    text : 'Тема normal',
    name: 'normal',
    val: '3',
    mods : { theme : 'normal', size : 'm' }
}
```
<a name="size"></a>
### Размеры `_size`

Задает размер шрифта и высоту элемента.

Модификатор реализован только в теме *normal*.

Доступно два размера реализации блока: **m**, **l**.

<table>
    <tr>
        <th>Размер<br>блока</th>
        <th>Размер<br>шрифта</th>
        <th>Высота строки<br>элемента <code>__box</code></th>
    </tr>
    <tr>
        <th>m</th>
        <td>13px</td>
        <td>14px</td>
    </tr>
    <tr>
        <th>l</th>
        <td>15px</td>
        <td>17px</td>
    </tr>
</table>

```bemjson
{
    block : 'checkbox',
    text : 'размер M',
    name: 'name2',
    val: '2',
    mods : { theme : 'normal', size : 'm' }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'размер L',
    name: 'name3',
    val: '3',
    mods : { theme : 'normal', size : 'l' }
}
```


### Состояния

#### Неактивен `_disabled` bemjson JS

В состоянии «неактивен» блок виден, но недоступен для действий пользователя. Такой блок не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами. В большинстве случаев к неактивному блоку применяются дополнительные стили, чтобы выделить его на странице.

```bemjson
{
    block : 'checkbox',
    text : 'Неактивен',
    name: 'name1',
    val : 1,
    mods : { theme : 'normal', size : 'm', disabled : true }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Неактивен',
    name: 'name2',
    val : 2,
    mods : { theme : 'normal', size : 'm', type : 'button', disabled : true }
}
```

#### В фокусе `_focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

Чекбокс, реализованный с помощью кнопки, при получении модификатора `focused`.

