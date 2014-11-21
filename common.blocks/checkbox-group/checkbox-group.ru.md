# checkbox-group

Используется для отображения группы однотипных переключателей – [чекбоксов](../checkbox/checkbox.ru.md)).

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#checkboxtype>type</a> | <code>'button'</code>, <code>'line'</code> | <code>BEMJSON</code> | Тип группы чекбоксов. |
| <a href=#checkboxdisabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code> | Блок в фокусе. |
| <a href=#checkboxsize>size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | Размер чекбоксов в группе. Используется только для <a href=#checkboxtheme>чекбоксов с модификатором theme в значении islands</a>. |
| <a href=#checkboxtheme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#checkboxname>name</a> | <code>String</code> | Имя группы чекбоксов. |
| <a href=#checkboxopt>options</a> | <code>Array</code> | Набор значений для каждого чекбокса группы. Каждому <a href="../..checkbox/checkbox.ru.md#checkboxtype"> типу чекбоксов</a> соответствует разный <a href="#checkboxoptset">набор значений</a>.<br>
Через поле <code>options</code> каждому чекбоксу группы можно установить модификатор `disabled` и `checked`.|

## Обзор блока

Блок `checkbox-group` позволяет управлять внешним видом и состоянием вложенных независимых чекбоксов.

### Модификаторы блока

<a name="checkboxtype"></a>

#### Модификатор `type`

Допустимое значение: `'button'`, `'line'`.

Способ использования: `BEMJSON`.

<a name="checkboxtype-button"></a>

##### Кнопочный чекбокс (модификатор `type` в значении `button`)

Модификатор `type` в значении `button` позволяет реализовать блок `checkbox-group` с помощью чекбоксов с типом [button](../checkbox/checkbox.ru.md#checkboxtype). Все чекбоксы группы в данном случае всегда располагаются в линию.

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' },
        { val : 3, text : 'third' }
    ]
}
```

<a name="checkboxtype-line"></a>

#### Выравнивание (модификатор `type` в значении `button`)

Модификатор `type` в значении `line` применяется к группе чекбоксов для выравнивания их в строку.

Реализован только в теме *islands*.

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'line' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' },
        { val : 3, text : 'third' }
    ]
}
```

<a name="checkboxdisabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `disabled` в значении `true` отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

Модификатор может быть установлен:

* всей группе чекбоксов

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm', type : 'button', disabled : true },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm', disabled : true },
    name : 'checkbox',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

* каждому чекбоксу в группе

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'first', disabled : true },
        { val : 2, text : 'second' },
        { val : 3, text : 'third' }
    ]
}
```

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm', type : 'button' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'first', disabled : true },
        { val : 2, text : 'second' },
        { val : 3, text : 'third' }
    ]
}
```

<a name="checkboxfocused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `focused` в значении `true` отвечает за наличие фокуса на блоке.

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm', type : 'button', focused : true },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm', focused : true },
    name : 'checkbox',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

<a name="checkboxsize"></a>

#### Модификатор `size`

Допустимые значения: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Задает размер всем чекбоксам в группе.

Модификатор `size` используется, только если блоку установлен модификатор <a href="#checkboxtheme">theme</a> в значении `islands`.

**s**

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 's', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' },
        { val : 3, text : 'third' }
    ]
}
```
**m**

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' },
        { val : 3, text : 'third' }
    ]
}
```

**l**

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'l', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' },
        { val : 3, text : 'third' }
    ]
}
```

**xl**

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'xl', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' },
        { val : 3, text : 'third' }
    ]
}
```

<a name="checkboxtheme"></a>

#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Модификатор отвечает за стилевое оформление блока.

При выборе модификатора `theme` в значении `islands` необходимо обязательно указывать модификатор <a href="#buttonsize">size</a>.

Без указания модификатора `theme` отображается нативный вид контрола.

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm' },
    name : 'checkbox-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' },
        { val : 3, text : 'third' }
    ]
}
```


```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm', type : 'button' },
    name : 'checkbox-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' },
        { val : 3, text : 'third' }
    ]
}
```

### Специализированные поля блока

<a name="checkboxname"></a>
#### Поле `name`

Определяет имя группы чекбоксов.

<a name="checkboxopt"></a>

#### Поле `options`

Определяет набор значений для каждого чекбокса группы.

<a name="checkboxoptset">
Каждому <a href="../..checkbox/checkbox.ru.md#checkboxtype"> типу чекбоксов</a> соответствует разный набор значений.

| Поле | Тип | Описание |
| ---- | --- | -------- |
| val | <code>String</code> | Значение, которое будет отправлено на сервер или получено с помощью клиентских скриптов. |
| text | <code>String</code> | Текст подписи к чекбоксу. |
| checked | <code>Boolean</code> | Чекбокс отмечен. |
| disabled | <code>Boolean</code> | Неактивное состояние. |
| icon | <code>BEMJSON</code> | Иконка. Формируется блоком <a href="../icon/icon.ru.md">icon</a>.<br>
Используется только для группы <a href=#checkboxtype>чекбоксов с модификатором type в значении button</a>. |
| title | <code>String</code> | Всплывающая подсказка. Используется только для группы <a href=#checkboxtype>чекбоксов с модификатором type в значении button</a>. |

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm' },
    name : 'checkbox-normal',
    options : [
        { val : 1, text : 'first', checked : true },
        { val : 2, text : 'second', disabled : true },
        { val : 3, text : 'third', checked : true, disabled : true },
        { val : 4, text : 'third' }
    ]
}
```

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm', type : 'button' },
    name : 'checkbox-normal',
    options : [
        { val : 1, text : 'first', checked : true, title : 'Already checked' },
        { val : 2, text : 'second', disabled : true, title : 'Already disabled' },
        { val : 3, text : 'third', checked : true, disabled : true, title : 'Already checked and disabled' },
        { val : 4, text : 'third', title : 'You can check it' }
    ]
}
```

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'm', type : 'button' },
    name : 'checkbox-normal',
    options : [
        {
            val : 1,
            text : 'first',
            checked : true,
            title : 'Follow BEM on twitter',
            icon : {
                block : 'icon',
                mods : { social : 'twitter' }
            },
        },
        {
            val : 2,
            text : 'second',
            disabled : true,
            title : 'Follow BEM on Facebook',
            icon : {
                block : 'icon',
                mods : { social : 'facebook' }
            },
        },
        {
            val : 3,
            text : 'third',
            checked : true,
            disabled : true,
            title : 'Follow BEM on bem.info',
            icon : {
                block : 'icon',
                mods : { social : 'twitter' }
            },
        }
    ]
}
```
