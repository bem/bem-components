# checkbox-group

Используется для отображения и управления группой однотипных переключателей – [чекбоксов](../checkbox/checkbox.ru.md).

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#checkboxtype">type</a> | <code>'button'</code>, <code>'line'</code> | <code>BEMJSON</code> | Тип группы чекбоксов. |
| <a href="#checkboxdisabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href="#checkboxfocused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href="#checkboxtheme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href="#checkboxsize">size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | Размер группы чекбоксов. Используется только для чекбоксов с <a href="#checkboxtheme">модификатором theme в значении islands</a>. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#checkboxname">name</a> | <code>String</code> | Уникальное имя блока. |
| <a href="#val">val</a> | <code>Array</code> | Набор значений выбранных чекбоксов. |
| <a href="#checkboxopt">options</a> | <code>Array</code> | Набор значений для каждого чекбокса группы. Каждому типу чекбоксов соответствует разный <a href="#checkboxoptset">набор значений</a>. |

## Описание блока

Блок `checkbox-group` позволяет управлять внешним видом и состоянием вложенных чекбоксов.

### Модификаторы блока

<a name="checkboxtype"></a>

#### Модификатор `type`

Допустимые значения: `'button'`, `'line'`.

Способ использования: `BEMJSON`.

<a name="checkboxtype-button"></a>

##### Кнопочный чекбокс (модификатор `type` в значении `button`)

Позволяет реализовать блок `checkbox-group` с помощью чекбоксов с типом [button](../checkbox/checkbox.ru.md/#checkboxtype). Все чекбоксы группы в данном случае всегда располагаются в линию.

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

<a name="checkboxtype-line"></a>

##### Выравнивание (модификатор `type` в значении `line`)

Применяется к группе чекбоксов для выравнивания их в линию.

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'line' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

<a name="checkboxdisabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

Модификатор может быть установлен:

* всей группе чекбоксов

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', disabled : true },
    name : 'checkbox',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

* отдельному чекбоксу в группе

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'Блок', disabled : true },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'Блок', disabled : true },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

<a name="checkboxfocused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за наличие фокуса на блоке.

Выставляется автоматически при получении блока фокуса.

```javascript
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', focused : true },
    name : 'checkbox',
    val : [2],
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

```javascript
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button', focused : true },
    name : 'checkbox-button',
    val : [2],
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

<a name="checkboxtheme"></a>

#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Отвечает за стилевое оформление блока.

Необходимо использовать с модификатором <a href="#checkboxsize">size</a>.

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'checkbox-islands',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-islands',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

<a name="checkboxsize"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'m'`, `'l'`.

Способ использования: `BEMJSON`.

Задает размер всем чекбоксам в группе.

Необходимо использовать с модификатором <a href="#checkboxtheme">theme</a> в значении `islands`.

**m**

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'checkbox-button',
    val : [1, 2],
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-button',
    val : [2, 3],
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

**l**

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'l' },
    name : 'checkbox-button',
    val : [1, 2],
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'l', type : 'button' },
    name : 'checkbox-button',
    val : [2, 3],
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

### Специализированные поля блока

<a name="checkboxname"></a>

#### Поле `name`

Тип: `String`

Определяет уникальное имя группы чекбоксов.

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-button-1',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

<a name="val"></a>

#### Поле `val`

Тип: `Array`.

Опеределяет набор значений выбранных радиопереключателей.

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-button-1',
    val : [1, 2],
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

<a name="checkboxopt"></a>

#### Поле `options`

Тип: `Array`

Определяет набор значений для каждого чекбокса группы.

<a name="checkboxoptset"></a>

Каждому типу чекбоксов соответствует разный набор значений.

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <code>val</code> | <code>String</code>, <code>Number</code> | Значение, возвращаемое чекбоксом, если он выбран. |
| <code>text</code> | <code>String</code> | Текст подписи к чекбоксу или текст кнопки чекбокса, если выбран модификатор <code>type</code> в значении <code>button</code>. |
| <code>disabled</code> | <code>Boolean</code> | Неактивное состояние. |
| <code>icon</code> | <code>BEMJSON</code> | Иконка. Формируется блоком <a href="../icon/icon.ru.md">icon</a>. Используется только для группы чекбоксов с <a href="#checkboxtype-button">модификатором type в значении button</a>. |
| <code>title</code> | <code>String</code> | Текст сплывающей подсказки. Используется только для группы чекбоксов с модификатором <code>type</code> в значении <code>button</code>. |
| <code>id</code> | <code>String</code> | Уникальный идентификатор чекбокса. |

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'checkbox-islands',
    val : [1, 3],
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент', disabled : true },
        { val : 3, text : 'Модификатор', disabled : true },
        { val : 4, text : 'Модификатор' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-islands',
    val : [3],
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент', disabled : true, title : 'Неактивен' },
        { val : 3, text : 'Модификатор', disabled : true, title : 'Отмечен и неактивен' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-islands',
    val : [1],
    options : [
        {
            val : 1,
            text : 'Twitter',
            title : 'Подписаться на новости БЭМ',
            icon : {
                block : 'icon',
                mods : { social : 'twitter' }
            }
        },
        {
            val : 2,
            text : 'ВКонтакте',
            disabled : true,
            title : 'Подписаться на новости БЭМ',
            icon : {
                block : 'icon',
                mods : { social : 'vk' }
            }
        }
    ]
}
```
