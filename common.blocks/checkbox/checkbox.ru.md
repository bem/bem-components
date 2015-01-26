# checkbox

Используется для управления параметром выбора с двумя состояниями – «включено» и «выключено».

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#checkboxtype">type</a> | <code>'button'</code> | <code>BEMJSON</code> | Тип чекбокса. |
| <a href="#checkboxchecked">checked</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Выбор чекбокса. |
| <a href="#checkboxdisabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href="#checkboxfocused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href="#hovered">hovered</a> | <code>true</code> | – | Наведение курсором. |
| <a href="#checkboxtheme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href="#checkboxsize">size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | Размер чекбокса. Используется для чекбоксов с <a href="#checkboxtheme">модификатором theme в значении islands</a>. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#checkboxname">name</a> | <code>String</code> | Уникальное имя чекбокса. |
| <a href="#checkboxval">val</a> | <code>String</code>, <code>Number</code> | Значение чекбокса, которое будет отправлено на сервер, если он выбран. |
| <a href="#checkboxtext">text</a> | <code>String</code> | Текст подписи к чекбоксу. |
| <a href="#checkboxicon">icon</a> | <code>BEMJSON</code> | Иконка. Формируется блоком <a href="../icon/icon.ru.md">icon</a>. Используется для чекбокса с <a href="#checkboxtype">модификатором type в значении button</a>. |
| <a href="#checkboxtitle">title</a> | <code>String</code> | Текст всплывающей подсказки. Используется для чекбокса с <a href="#checkboxtype">модификатором type в значении button</a>. |
| <a href="#id">id</a> | <code>String</code> | Уникальный идентификатор чекбокса. |
| <a href="#tab">tabIndex</a> | <code>Number</code> | Последовательность перехода между контролами при нажатии на <code>Tab</code>. |

## Описание блока

**Примечание** HTML-атрибут `autocomplete` принудительно переведен в состояние `off` для обеспечения корректной работы блока.

### Модификаторы блока

<a name="checkboxtype"></a>

#### Модификатор `type`

Допустимое значение: `'button'`.

Способ использования: `BEMJSON`.

Используется для изменения внешнего вида блока на кнопочный. В таком случае выбор чекбокса происходит нажатием на [кнопку](../button/button.ru.md).

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name: 'button',
    val: 'val_1',
    text : 'Конфеты'
}
```

<a name="checkboxchecked"></a>

#### Модификатор `checked`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Используется для выбора чекбокса.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', checked : true },
    name: 'name1',
    val : 'val_1',
    text : 'Конфеты'
}
```

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true },
    name: 'name2',
    val : 'val_2',
    text : 'Конфеты'
}
```

<a name="checkboxdisabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', disabled : true },
    name: 'name1',
    val : 'val_0',
    text : 'Конфеты закончились'
}
```

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name: 'name2',
    val : 'val_1',
    text : 'Конфеты закончились'
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
    block : 'button',
    mods : { theme : 'islands', size : 'm', focused : true },
    text : 'В фокусе'
}
```

<a name="hovered"></a>

#### Модификатор `hovered`

Допустимое значение: `true`.

Способы использования: – .

Выставляется блоку автоматически, когда курсор мыши находится в пределах контрола.

<a name="checkboxtheme"></a>

#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Отвечает за стилевое оформление блока.

Необходимо использовать с модификатором <a href="#checkboxsize">size</a>.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm' },
    name: 'islands',
    val: 'val_3',
    text : 'Тема islands'
}
```

<a name="checkboxsize"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'m'`, `'l'`.

Способ использования: `BEMJSON`.

Задает размер блока.

Необходимо использовать с модификатором <a href="#checkboxtheme">theme</a> в значении `islands`.

**m**

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm' },
    name: 'name1',
    val: 'val_1',
    text : 'Размер m'
}
```

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name: 'name1',
    val: 'val_1',
    text : 'Размер m'
}
```

**l**

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'l' },
    name: 'name2',
    val: 'val_2',
    text : 'Размер l'
}
```

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'l', type : 'button' },
    name: 'name1',
    val: 'val_1',
    text : 'Размер l'
}
```

### Специализированные поля блока

<a name="checkboxname"></a>

#### Поле `name`

Тип: `String`.

Определяет уникальное имя чекбокса.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name: 'name1',
    val: 'val_1',
    text : 'Конфеты'
}
```

<a name="checkboxval"></a>

#### Поле `val`

Тип: `String`, `Number`.

Значение чекбокса, которое будет отправлено на сервер.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name: 'name2',
    val: 'val_2',
    text : 'Конфеты'
}
```

<a name="checkboxtext"></a>

#### Поле `text`

Тип: `String`.

Определяет текст подписи к чекбоксу или текст кнопки, если указан <a href="#checkboxtype">модификатор type в значении button</a>.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm' },
    name: 'name1',
    val: '1',
    text : 'Конфеты'
}
```

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name: 'name1',
    val: '1',
    text : 'Конфеты'
}
```

<a name="checkboxicon"></a>

#### Поле `icon`

Тип: `BEMJSON`.

Определяет иконку, которая отображается с помощью блока [icon](../icon/icon.ru.md).

Используется только для чекбокса с <a href="#checkboxtype">модификатором type в значении button</a>.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true },
    name: 'name1',
    val : 1,
    text : 'Поделиться',
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

<a name="checkboxtitle"></a>

#### Поле `title`

Тип: `String`.

Определяет содержание всплывающей подсказки. Вид такой подсказки зависит от браузера, настроек операционной системы и не может быть изменен с помощью HTML-кода или стилей.

Используется только для чекбокса с <a href="#checkboxtype">модификатором type в значении button</a>.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true },
    name: 'name1',
    val : 1,
    text : 'Поделиться',
    title : 'Кнопка выбора социальной сети',
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

<a name="id"></a>

#### Поле `id`

Тип: `String`.

Определяет уникальный идентификатор чекбокса.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name: 'name1',
    val: '1',
    text : 'Конфеты',
    id : 'checkbox-id'
}
```

<a name="tab"></a>

#### Поле `tabIndex`

Тип: `Number`.

Определяет порядок получения фокуса при переходе между контролами с помощью клавиши `Tab`.

```js
{
    block : 'checkbox',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name: 'name1',
    val: '1',
    text : 'Конфеты',
    tabIndex : 3
}
```
