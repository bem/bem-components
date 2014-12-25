# input

Используется для создания различных типов текстовых полей.

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#type">type</a> | <code>'password'</code>, <code>'search'</code> | <code>BEMJSON</code> | Тип текстового поля. |
| <a href="#width">width</a> | <code>'available'</code> | <code>BEMJSON</code> | Максимально допустимая ширина текстового поля. |
| <a href="#has-clear">has-clear</a> | <code>true</code> | <code>BEMJSON</code> | Крестик для очистки поля ввода. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер текстового поля. Используется только с модификатором <a href="#theme">theme в значении islands</a>.|

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#name">name</a> | <code>String</code> | Уникальное имя блока. |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code> | Содержимое поля ввода, указанное по умолчанию. |
| <a href="#placeholder">placeholder</a> | <code>String</code> | Подсказка в текстовом поле. |
| <a href="#maxLength">maxLength</a> | <code>String</code> | Максимальное количество вводимых символов. Используется только для <a href="#inputfield">полей ввода</a>. |
| <a href="#autocomplete">autocomplete</a> | <code>Boolean</code> | Браузерное автозаполнение в текстовом поле. |
| <a href="#id">id</a> | <code>String</code> | Уникальный идентификатор текстового поля. |
| <a href="#tab">tabIndex</a> | <code>Number</code> | Последовательность перехода между контролами при нажатии на <code>Tab</code>. |

## Описание блока

Блок `input` служит для создания различных типов текстовых полей.

### Модификаторы блока

<a name="type"></a>
#### Модификатор `type`

Допустимые значения: `'password'`, `'search'`.

Способ использования: `BEMJSON`.

Модификатор `type` используется для изменения типа текстового поля.

<a name="input"></a>
По умолчанию (если модификатор `type` не установлен) блок `input` является обычным полем ввода.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Введите имя'
}
```

##### Поле для ввода пароля (модификатор `type` в значении `password`)

Используется для создания поля для ввода пароля. Отличается от обычного тем, что все вводимые символы отображаются звездочками, точками или другими знаками в зависимости от используемого браузера.

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'm', type : 'password' },
    placeholder : 'Введите пароль'
}
```

##### Поле для поиска (модификатор `type` в значении `search`)

Используется для создания поискового поля.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', type : 'search' },
    placeholder : 'Введите запрос'
}
```

<a name="width"></a>

#### Модификатор `width`

Допустимое значение: `'available'`.

Способы использования: `BEMJSON`.

Позволяет растягивать текстовое поле на максимально допустимую ширину.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', width : 'available' },
    placeholder : 'Введите имя'
}
```

<a name="has-clear"></a>

#### Модификатор `has-clear`

Допустимое значение: `true`.

Способы использования: `BEMJSON`.

Добавляет крестик для очистки поля ввода в текстовое поле.


```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', width : 'available' },
    has-clear : true
}
```

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', disabled : true },
    placeholder : 'Введите имя'
}
```

<a name="focused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Выставляется автоматически при получении блоком фокуса.

Отвечает за наличие фокуса на блоке.

```javascript
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', focused : true },
    placeholder : 'Введите имя'
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
    block : 'input',
    mods : { theme : 'islands', size: 'm', type : 'search' },
    placeholder : 'Введите запрос'
}
```

<a name="size"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Необходимо использовать с модификатором <a href="#theme">theme</a> в значении `islands`.

Задает размер всем типам текстовых полей.

**s**

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 's' },
    placeholder : 'Размер s'
}
```

**m**

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'Размер m'
}
```

**l**

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'l' },
    placeholder : 'Размер l'
}
```

**xl**

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'xl' },
    placeholder : 'Размер xl'
}
```


### Специализированные поля блока

<a name="name"></a>

#### Поле `name`

Тип: `String`.

Определяет уникальное имя блока.

<a name="val"></a>

#### Поле `val`

Тип данных: `String`.

Определяет содержимое поля ввода.

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'm', type : 'search' },
    name : 'Statistics',
    val : 'Привет!',
    placeholder : 'Введите запрос'
}
```

<a name="placeholder"></a>

#### Поле `placeholder`

Тип данных: `String`.

Определяет текст подсказки в текстовом поле.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Введите имя'
}
```

<a name="maxLength"></a>

#### Поле `maxLength`

Тип данных: `Number`.

Определяет максимальное количество вводимых символов.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Введите имя',
    maxLength : 20
}
```

<a name="autocomplete"></a>

#### Поле `autocomplete`

Тип данных: `Boolean`.

Отвечает за включение / выключение автозаполнения текстового поля в браузере.

Если поле `autocomplete` не задано, автозаполнение включено.

Для отключения автозаполнения используйте значение `false`:

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Введите имя',
    autocomplete : false
}
```

<a name="id"></a>
#### Поле `id`

Тип данных: `String`.

Определяет уникальный идентификатор текстового поля.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Введите имя',
    id : 'Unique_1'
}
```

<a name="tab"></a>

#### Поле `tabIndex`

Тип данных: `Number`.

Определяет последовательность перехода между контролами при нажатии на `Tab`.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Введите имя',
    tabIndex : 3
}
```
