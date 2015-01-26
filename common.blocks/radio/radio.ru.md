# radio

Используется в составе блока [radio-group](../radio-group/radio-group.ru.md) для создания радиопереключателей.

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#type">type</a> | <code>'button'</code> | <code>BEMJSON</code> | Тип радиопереключателя. |
| <a href="#checked">checked</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Выбор радиопереключателя. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href="#hovered">hovered</a> | <code>true</code> | – | Наведение курсором. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href="#size">size</a> | <code>'m'</code>, <code>'l'</code> | <code>BEMJSON</code> | Размер радиопереключателя. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#name">name</a> | <code>String</code> | Имя радиопереключателя. |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code> | Значение, возвращаемое радиопереключателем, если он выбран. |
| <a href="#text">text</a> | <code>String</code> | Текст подписи к радиопереключателю. |
| <a href="#icon">icon</a> | <code>BEMJSON</code> | Иконка. Формируется блоком <a href="../icon/icon.ru.md">icon</a>. Используется для радиопереключателя с <a href="#type">модификатором type в значении button</a>. |
| <a href="#title">title</a> | <code>String</code> | Текст всплывающей подсказки. Используется для радиопереключателя с <a href="#type">модификатором type в значении button</a>. |
| <a href="#tab">tabIndex</a> | <code>Number</code> | Последовательность перехода между контролами при нажатии на <code>Tab</code>. |


## Описание блока

Блок `radio` предоставляет возможность изменять состояние, содержимое и внешний вид радиопереключателей.

### Модификаторы блока

<a name="type"></a>
##### Модификатор `type`

Допустимое значение: `'button'`.

Способ использования: `BEMJSON`.

Задает внешний вид блока. В этом случае выбор радиопереключателя происходит нажатием на [кнопку](../button/button.ru.md).

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

<a name="checked"></a>
#### Модификатор `checked`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Используется для выбора радиопереключателя.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', checked : true },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

<a name="disabled"></a>
#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', disabled : true },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

<a name="focused"></a>
#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Выставляется автоматически при получении блока фокуса.

Отвечает за наличие фокуса на блоке.

```javascript
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', focused : true },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

```javascript
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button', focused : true },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

<a name="hovered"></a>

#### Модификатор `hovered`

Допустимое значение: `true`.

Способы использования: – .

Выставляется блоку автоматически, когда курсор мыши находится в пределах контрола.

<a name="theme"></a>
#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Отвечает за стилевое оформление блока.

Необходимо использовать с модификатором  <a href=#size>size</a>.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

<a name="size"></a>
#### Модификатор `size`

Допустимые значения для темы `islands`: `'m'`, `'l'`.

Способ использования: `BEMJSON`.

Задает размер блоку.

Необходимо использовать с модификатором <a href="#theme">theme</a> в значении `islands`.

**m**

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

**l**

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'l' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'l', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

### Специализированные поля блока

<a name="name"></a>
#### Поле `name`

Тип: `String`.

Определяет уникальное имя радиопереключателя.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

<a name="val"></a>
#### Поле `val`

Тип: `String`, `Number`.

Определяет значение радиопереключателя, которое будет отправлено на сервер.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

<a name="text"></a>
#### Поле `text`

Тип: `String`.

Определяет текст подписи к радиопереключателю или текст кнопки, если указан <a href="#type">модификатор type в значении button</a>.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML'
}
```

<a name="icon"></a>
#### Поле `icon`

Тип: `BEMJSON`.

Определяет иконку, которая отображается с помощью блока [icon](../icon/icon.ru.md).

Используется только для радиопереключателей с <a href="#type">модификатором type в значении button</a>.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'twitter',
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

<a name="title"></a>
#### Поле `title`

Тип: `String`.

Определяет содержание всплывающей подсказки. Вид такой подсказки зависит от браузера, настроек операционной системы и не может быть изменен с помощью HTML-кода или стилей.

Используется только для радиопереключателей с <a href="#type">модификатором type в значении button</a>.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'twitter',
    title : 'Кнопка выбора социальной сети',
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

<a name="tab"></a>

#### Поле `tabIndex`

Тип: `Number`.

Определяет порядок получения фокуса при переходе между контролами с помощью клавиши `Tab`.

```js
{
    block : 'radio',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    val : 'BEMHTML',
    text : 'Использовать BEMHTML',
    tabIndex : 3
}
```
