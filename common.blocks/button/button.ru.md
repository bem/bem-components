# button

Используется для создания различных типов кнопок.

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#buttontype">type</a> | <code>'link'</code>, <code>'submit'</code> | <code>BEMJSON</code> | Тип кнопки.|
| <a href="#buttontoggle">togglable</a> | <code>'check'</code>, <code>'radio'</code> | <code>BEMJSON</code> | Тип переключателя.|
| <a href="#buttondisabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href="#buttonfocused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href="#buttonpressed">pressed</a> | <code>true</code> | – | Действие «нажатие на кнопку». |
| <a href="#hovered">hovered</a> | <code>true</code> | – | Наведение курсором. |
| <a href='#buttonthemes'>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href="#buttonsize">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер кнопки. Используется для кнопок с <a href="#buttonthemes">модификатором theme в значении islands</a>.|
| <a href="#buttonview">view</a> | <code>'action'</code>, <code>'pseudo'</code>, <code>'plain'</code> | <code>BEMJSON</code> | Тип визуального выделения кнопки.|

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#buttonname">name</a> | <code>String</code> | Уникальное имя блока. Не используется, если <a href="#link-button">модификатор type выставлен в значение link</a>. |
| <a href="#buttonval">val</a> | <code>String</code>, <code>Number</code> | Значение, отправляемое на сервер. Не используется, если <a href="#link-button">модификатор type выставлен в значение link</a>. |
| <a href="#buttontext">text</a> | <code>String</code>| Текст кнопки. |
| <a href="#buttonurl">url</a> | <code>String</code>| Адрес. Используется только для кнопки с <a href="#link-button">модификатором type в значении link</a>. |
| <a href="#buttonicon">icon</a> | <code>BEMJSON</code> | Иконка на кнопке. Формируется блоком <a href="../icon/icon.ru.md">icon</a>. |
| <a href="#buttontitle">title</a> | <code>String</code> | Текст всплывающей подсказки. |
| <a href="#buttonid">id</a> | <code>String</code> | Уникальный идентификатор кнопки. |
| <a href="#buttontab">tabIndex</a> | <code>Number</code> | Последовательность перехода между контролами при нажатии на <code>Tab</code>. |

## Описание блока

Блок `button` предоставляет возможность изменять размер, состояние, содержимое и внешний вид кнопок.

### Модификаторы блока

<a name="buttontype"></a>

#### Модификатор `type`

Допустимые значения: `'link'`, `'submit'`.

Способ использования: `BEMJSON`.

<a name="link-button"></a>

##### Кнопка-ссылка (модификатор `type` в значении `link`)

Используется для создания кнопки, обеспечивающей переход по адресу, указанному в поле <a href="#buttonurl">url</a>.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'link' },
    url : 'https://bem.info/',
    text : 'Попробуй БЭМ'
}
```

##### Кнопка отправки формы (модификатор `type` в значении `submit`)

Используется для создания кнопки, обеспечивающей отправку данных на сервер. Кнопка такого типа всегда должна располагаться в форме.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'submit' },
    text : 'Я отправляю данные'
}
```

<a name="buttontoggle"></a>

#### Модификатор `togglable`

Допустимые значения: `'check'`, `'radio'`.

Способ использования: `BEMJSON`.

Используется для реализации «залипания» кнопки. Определяет поведение нажатой кнопки.

##### Кнопка-переключатель (модификатор `togglable` в значении `check`)

Первое нажатие на кнопку вдавливает ее, второе – приводит в первоначальное состояние.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', togglable : 'check' },
    text : 'Я нажата'
}
```

##### Радиокнопка (модификатор `togglable` в значении `radio`)

Нажатие на кнопку вдавливает ее, и она может быть приведена в первоначальное состояние только программно. Используется в составе [радиогруппы](../radio-group/radio-group.ru.md).

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', togglable : 'radio' },
    text : 'Я «залипла» :)'
}
```

Пример использования в радиогруппе:

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button', togglable : 'radio' },
    name : 'radio-button',
    options : [
        { val : 1, text : 'Первый' },
        { val : 2, text : 'Второй', checked : true },
        { val : 3, text : 'Третий' }
    ]
}
```

<a name="buttondisabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', disabled : true },
    text : 'Неактивна'
}
```

<a name="buttonfocused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за наличие фокуса на блоке.

Выставляется автоматически при получении кнопки фокуса.

```javascript
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', focused : true },
    text : 'В фокусе'
}
```

Способ установки фокуса на блок определяет выбор модификатора: `focused` или `focused-hard`. [Читать подробности](../../README.ru.md#Модификатор-focused).

<a name="buttonpressed"></a>

#### Модификатор `pressed`

Допустимое значение: `true`.

Способ использования: – .

Определяет действие «нажатие на кнопку».

Выставляется автоматически при нажатии на кнопку.

<a name="hovered"></a>

#### Модификатор `hovered`

Допустимое значение: `true`.

Способы использования: – .

Выставляется блоку автоматически, когда курсор мыши находится в пределах контрола, но щелчка по нему не происходит.

<a name="buttonthemes"></a>

#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Отвечает за стилевое оформление блока.

Необходимо использовать с модификатором <a href="#buttonsize">size</a>.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm' },
    text : 'Тема islands'
}
```

<a name="buttonsize"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Задает размер всем типам кнопок.

Необходимо использовать с модификатором <a href="#buttonthemes">theme</a> в значении `islands`.

**s**

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 's' },
    text : 'Размер s'
}
```

**m**

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm' },
    text : 'Размер m'
}
```

**l**

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'l' },
    text : 'Размер l'
}
```

**xl**

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'xl' },
    text : 'Размер xl'
}
```

<a name="buttonview"></a>

#### Модификатор `view`

Допустимые значения: `'action'`, `'pseudo'`, `'plain'`.

Способ использования: `BEMJSON`.

##### Кнопка действия (модификатор `view` в значении `action`)

Используется для визуального выделения кнопки на странице.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', view : 'action' },
    text : 'Купить сейчас!'
}
```

##### Псевдокнопка (модификатор `view` в значении `pseudo`)

Используется для изменения внешнего вида блока при необходимости сделать кнопку менее заметной на странице.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', view : 'pseudo' },
    text : 'У меня прозрачный фон'
}
```

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', view : 'pseudo', disabled : true },
    text : 'У меня нет границ'
}
```

##### Кнопка без границ (модификатор `view` в значении `plain`)

Используется при необходимости представить кнопкой другой блок, например, иконку ([icon](../icon/icon.ru.md)).

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', view : 'plain' },
    text : 'Кнопка без границ'
}
```

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', view : 'plain' },
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

### Специализированные поля блока

<a name="buttonname"></a>

#### Поле `name`

Тип: `String`.

Определяет уникальное имя блока.

Не используется, если <a href="#link-button">модификатор type выставлен в значение link</a>.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'submit' },
    name : 'Test_1',
    val : 'passed',
    text : 'Проверить результат'
}
```

<a name="buttonval"></a>

#### Поле `val`

Тип данных: `String`, `Number`.

Определяет значение кнопки, которое будет отправлено на сервер.

Не используется, если <a href="#link-button">модификатор type выставлен в значение link</a>.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'submit' },
    name : 'Test_1',
    val : 'passed',
    text : 'Проверить результат'
}
```

<a name="buttontext"></a>

#### Поле `text`

Тип: `String`.

Определяет текст, который отображается на кнопке.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'submit' },
    name : 'Test_1',
    val : 'passed',
    text : 'Проверить результат'
}
```

<a name="buttonurl"></a>

#### Поле `url`

Тип: `String`.

Определяет адрес, по которому осуществляется переход при нажатии на кнопку с <a href="#link-button">модификатором type в значении link</a>.

Не используется с другими типами кнопок.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'link' },
    url : 'https://bem.info/',
    text : 'Попробуй БЭМ'
}
```

<a name="buttonicon"></a>

#### Поле `icon`

Тип: `BEMJSON`.

Определяет иконку, которая отображается на кнопке. Иконка задается с помощью блока [icon](../icon/icon.ru.md).

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm' },
    text : 'Twitter',
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

<a name="buttontitle"></a>

#### Поле `title`

Тип: `String`.

Определяет содержание всплывающей подсказки. Вид такой подсказки зависит от браузера, настроек операционной системы и не может быть изменен с помощью HTML-кода или стилей.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'submit' },
    name : 'Тест №1',
    val : 'Пройден успешно',
    text : 'Проверить результат',
    title : 'Кнопка отправки результатов теста'
}
```

<a name="buttonid"></a>

#### Поле `id`

Тип: `String`.

Определяет уникальный идентификатор кнопки.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'submit' },
    name : 'Тест №1',
    val : 'Пройден успешно',
    text : 'Проверить результат',
    id : 'Unique_1'
}
```

<a name="buttontab"></a>

#### Поле `tabIndex`

Тип: `Number`.

Определяет порядок получения фокуса при переходе между контролами с помощью клавиши `Tab`.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'submit' },
    name : 'Тест №1',
    val : 'Пройден успешно',
    text : 'Проверить результат',
    id :'val_1',
    tabIndex : 2
}
```
