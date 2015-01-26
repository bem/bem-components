# radio-group

Используется для отображения группы однотипных переключателей, реализованных блоком [radio](../radio/radio.ru.md).

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#type">type</a> | <code>'button'</code>, <code>'line'</code> | <code>BEMJSON</code> | Тип группы радиопереключателей. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href="#size">size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | Размер радиопереключателей в группе. Используется только для радиопереключателей с <a href="#theme">модификатором theme в значении islands</a>. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#name">name</a> | <code>String</code> | Уникальное имя блока. |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code> | Значение выбранного радиопереключателя. |
| <a href="#opt">options</a> | <code>Array</code> | Набор значений для каждого радиопереключателя группы. Каждому <a href="../radio/radio.ru.md#type">типу радиопереключателя</a> соответствует разный <a href="#optset">набор значений</a>. |

## Обзор блока

Блок `radio-group` позволяет управлять внешним видом и состоянием вложенных радиопереключателей и выбирать только один пункт из предопределенного списка.

### Модификаторы блока

<a name="type"></a>

#### Модификатор `type`

Допустимые значения: `'button'`, `'line'`.

Способ использования: `BEMJSON`.

<a name="type-button"></a>

##### Кнопочный радиопереключатель (модификатор `type` в значении `button`)

Позволяет реализовать блок `radio-group` с помощью радиопереключателей с типом [button](../radio/radio.ru.md/#type). Все радиопереключатели группы в данном случае всегда располагаются в линию.

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-button',
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

<a name="type-line"></a>

##### Выравнивание (модификатор `type` в значении `line`)

Применяется к группе радиопереключателей для выравнивания их в линию.

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'line' },
    name : 'radio-line',
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

Модификатор может быть установлен:

* всей группе радиопереключателей

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', disabled : true },
    name : 'radio',
    val : 2,
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

* отдельному радиопереключателю в группе

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-line',
    val : 2,
    options : [
        { val : 1, text : 'Футбол', disabled : true },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-line',
    val : 2,
    options : [
        { val : 1, text : 'Футбол', disabled : true },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

<a name="focused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за наличие фокуса на блоке.

Выставляется автоматически при получении блоком фокуса.

```javascript
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button', focused : true },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

```javascript
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', focused : true },
    name : 'radio',
    val : 2,
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

<a name="theme"></a>

#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Отвечает за стилевое оформление блока.

Необходимо использовать с модификатором <a href="#size">size</a>.


```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    val : 2,
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 2,
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

<a name="size"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'m'`, `'l'`.

Способ использования: `BEMJSON`.

Задает размер всем радиопереключателям в группе.

Необходимо использовать с модификатором <a href="#theme">theme</a> в значении `islands`.

**m**

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

**l**

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'l' },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'l', type : 'button' },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

### Специализированные поля блока

<a name="name"></a>

#### Поле `name`

Тип: `String`.

Определяет имя группы радиопереключателей.

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

<a name="val"></a>

#### Поле `val`

Тип: `String`, `Number`.

Опеределяет значение выбранного радиопереключателя.

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-button',
    val : 2,
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

<a name="opt"></a>

#### Поле `options`

Тип: `Array`.

Определяет набор значений для каждого радиопереключателя группы.

<a name="optset"></a>
Каждому <a href="../radio/radio.ru.md">типу радиопереключателей</a> соответствует разный **набор значений**.

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <code>val</code> | <code>String</code>, <code>Number</code> | Значение радиопереключателя, которое будет отправлено на сервер, если он выбран. |
| <code>text</code> | <code>String</code> | Текст подписи к радиопереключателю. |
| <code>disabled</code> | <code>Boolean</code> | Неактивное состояние. |
| <code>icon</code> | <code>BEMJSON</code> | Иконка. Формируется блоком <a href="../icon/icon.ru.md">icon</a>. Используется только с <a href="#type">модификатором type в значении button</a>. |
| <code>title</code> | <code>String</code> | Текст всплывающей подсказки. Используется только с <a href="#type">модификатором type в значении button</a>. |

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    val : 2,
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол', disabled : true }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 3,
    options : [
        {
            val : 1,
            text : 'Футбол',
            title : 'Просмотр турнирной таблицы и состава команд.'
        },
        {
            val : 2,
            disabled : true,
            text : 'Баскетбол',
            title : 'Просмотр турнирной таблицы и состава команд.'
        },
        {
            val : 3,
            disabled : true,
            text : 'Гандбол',
            title : 'Просмотр турнирной таблицы и состава команд.'
        }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 1,
    options : [
        {
            val : 1,
            text : 'Новости по футболу',
            title : 'Подписаться на новости в группе',
            icon : {
                block : 'icon',
                mods : { social : 'twitter' }
            },
        },
        {
            val : 2,
            disabled : true,
            text : 'Новости по гандболу',
            title : 'Подписаться на новости в группе',
            icon : {
                block : 'icon',
                mods : { social : 'twitter' }
            }
        }
    ]
}
```
