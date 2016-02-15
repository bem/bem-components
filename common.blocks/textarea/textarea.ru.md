# textarea

Используется для создания текстовой области.

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#width">width</a> | <code>'available'</code> | <code>BEMJSON</code> | Максимально допустимая ширина текстовой области. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер текстовой области. Используется только для текстовых областей с модификатором <a href="#theme">theme в значении islands</a>.|

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#name">name</a> | <code>String</code> | Имя текстовой области. |
| <a href="#val">val</a> | <code>String</code>, <code>Number</code> | Содержимое текстовой области. |
| <a href="#placeholder">placeholder</a> | <code>String</code> | Подсказка в текстовой области. |
| <a href="#id">id</a> | <code>String</code> | Уникальный идентификатор текстовой области. |
| <a href="#tab">tabIndex</a> | <code>Number</code> | Последовательность перехода между контролами при нажатии на <code>Tab</code>. |

## Описание блока

Блок `textarea` используется для создания области, в которую можно вводить несколько строк текста.

### Модификаторы блока

<a name="width"></a>

#### Модификатор `width`

Допустимое значение: `'available'`.

Способы использования: `BEMJSON`.

Позволяет растягивать текстовую область на максимально допустимую ширину.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm', width : 'available' },
    placeholder : 'Ваш текст должен быть здесь'
}
```

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```js
 {
     block : 'textarea',
    mods : { theme : 'islands', size : 'm', disabled : true },
    placeholder : 'Ваш текст должен быть здесь'
 }
 ```

<a name="focused"></a>

#### Модификатор `focused`

Допустимое значение:`true`.

Способы использования: `BEMJSON`, `JS`.

Выставляется автоматически при получении блоком фокуса.

Отвечает за наличие фокуса на блоке.

```javascript
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm', focused : true },
    placeholder : 'Ваш текст должен быть здесь'
}
```
Способ установки фокуса на блок определяет выбор модификатора: `focused` или `focused-hard`. [Читать подробности](../../README.ru.md#Модификатор-focused).

<a name="theme"></a>

#### Модификатор `theme`

Допустимое значение:`'islands'`.

Способы использования: `BEMJSON`.

Отвечает за стилевое оформление блока.

Необходимо использовать с модификатором <a href="#size">size</a>.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'Ваш текст должен быть здесь'
}
```

<a name="size"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'s'`, `'m'`, `'l'`, `'xl'`.

Способы использования: `BEMJSON`.

Необходимо использовать с модификатором <a href="#theme">theme</a> в значении `islands`.

**s**

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size: 's' },
    placeholder : 'Размер s'
}
```

**m**

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'Размер m'
}
```

**l**

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'l' },
    placeholder : 'Размер l'
}
```

**xl**

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'xl' },
    placeholder : 'Размер xl'
}
```

### Специализированные поля блока

<a name="name"></a>

#### Поле `name`

Тип: `String`.

Определяет уникальное имя блока.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'm' },
    name : 'Обратная связь'
}
```

<a name="val"></a>

#### Поле `val`

Тип: `String`.

Определяет содержимое текстовой области.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'm' },
    name : 'Feedback',
    val : 'Этот текст можно и нужно заменить'
}
```

<a name="placeholder"></a>

#### Поле `placeholder`

Тип: `String`.

Определяет текст подсказки.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Ваш текст должен быть здесь'
}
```

<a name="id"></a>

#### Поле `id`

Тип: `String`.

Определяет уникальный идентификатор текстовой области.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Ваш текст должен быть здесь',
    id : 'Unique_1'
}
```

<a name="tab"></a>

#### Поле `tabIndex`

Тип: `Number`.

Определяет последовательность перехода между контролами при нажатии на `Tab`.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Ваш текст должен быть здесь',
    tabIndex : 1
}
```
