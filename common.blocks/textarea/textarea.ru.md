# textarea

Используется для создания текстовой области.

## Обзор

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| [width](#width) | `'available'` | `BEMJSON` | Максимально допустимая ширина текстовой области. |
| [disabled](#disabled) | `true` | `BEMJSON`, `JS` | Неактивное состояние. |
| [focused](#focused) | `true` | `BEMJSON`, `JS` | Фокус на блоке. |
| [hovered](#hovered) | `true` | — | Наведение курсором. |
| [theme](#theme) | `'islands'` | `BEMJSON` | Стилевое оформление. |
| [size](#size) | `'s'`, `'m'`, `'l'`, `'xl'` | `BEMJSON` | Размер текстовой области. Используется только с модификатором [theme в значении islands](#theme). |

### Поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| [name](#name) | `String` | Имя текстовой области. |
| [val](#val) | `String`, `Number` | Содержимое текстовой области. |
| [placeholder](#placeholder) | `String` | Подсказка в текстовой области. |
| [autocomplete](#autocomplete) | `Boolean` | Отключение автозаполнения текстовой области. |
| [id](#id) | `String` | Уникальный идентификатор текстовой области. |
| [tabIndex](#tab) | `Number` | Последовательность перехода между контролами при нажатии на `Tab`. |

## Описание

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

> **Примечание.** Способ установки фокуса на блок определяет выбор модификатора: `focused` или `focused-hard`. [Подробнее](../../README.ru.md#Модификатор-focused).

<a name="hovered"></a>

#### Модификатор `hovered`

Допустимое значение: `true`.

Способы использования: `—`.

Выставляется автоматически при наведении на блок курсором.

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

### Поля блока

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

<a name="autocomplete"></a>

#### Поле `autocomplete`

Допустимое значение: `false`.

Тип: `Boolean`.

Отключает автозаполнение текстовой области введенным ранее текстом. По умолчанию автозаполнение включено и зависит от настроек браузера.

```js
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm' },
    autocomplete : false
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
