# link

Используется для создания различных типов ссылок.

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#pseudo">pseudo</a> | <code>true</code> | <code>BEMJSON</code> | Псевдоссылка. |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href="#theme">theme</a> | <code>islands</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер блока. Используется только с модификатором <a href="#theme">theme в значении islands</a>.|
| <a href="#view">view</a> | <code>'minor'</code>, <code>'external'</code>, <code>'ghost'</code>, <code>'text'</code>, <code>'strong'</code> | <code>BEMJSON</code> | Тип визуального выделения ссылки.|

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#url">url</a> | <code>String</code> | Адрес ссылки. |
| <a href="#title">title</a> | <code>String</code> | Текст всплывающей подсказки. |
| <a href="#target">target</a> | <code>String</code> | Поведение ссылки. |
| <a href="#tabIndex">tabIndex</a> | <code>Number</code> | Последовательность перехода между контролами при нажатии на <code>Tab</code>. |

## Описание блока

Блок `link` предоставляет возможность изменять состояние ссылок, их поведение и внешний вид.

### Модификаторы блока

<a name="pseudo"></a>

#### Модификатор `pseudo`

Допустимое значение: `true`.

Способ использования: `BEMJSON`.

Отличается от обычной ссылки тем, что при клике по ссылке переход на новую страницу не осуществляется.

```javascript
{
    block : 'link',
    mods : { theme : 'islands', size : 'm', pseudo : true },
    content : 'Показать ответ'
}
```

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```js
{
    block : 'link',
    mods : { theme : 'islands', size : 'm' , disabled : true },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

<a name="focused"></a>

#### Модификатор `focused`

Допустимое значение: `true`

Способы использования: `BEMJSON`, `JS`.

Выставляется автоматически при получении блока фокуса.

Отвечает за наличие фокуса на блоке.

```javascript
{
    block : 'link',
    mods : { theme : 'islands', size : 'm' , focused : true },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```
Способ установки фокуса на блок определяет выбор модификатора: `focused` или `focused-hard`. [Читать подробности](../../README.ru.md#Модификатор-focused).

<a name="theme"></a>

#### Модификатор `theme`

Допустимое значение: `islands`.

Способ использования: `BEMJSON`.

Отвечает за стилевое оформление блока.

```js
{
    block : 'link',
    mods : { theme : 'islands', size : 'm' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

<a name="size"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Необходимо использовать с модификатором <a href="#theme">theme</a> в значении `islands`.

**s**

```js
{
    block : 'link',
    mods : { theme : 'islands', size: 's' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

**m**

```js
{
    block : 'link',
    mods : { theme : 'islands', size: 'm' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

**l**

```js
{
    block : 'link',
    mods : { theme : 'islands', size: 'l' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

**xl**

```js
{
    block : 'link',
    mods : { theme : 'islands', size: 'xl' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

<a name="view"></a>

#### Модификатор `view`

Допустимые значения: `'minor'`, `'external'`, `'ghost'`, `'text'`, `'strong'`.

Способ использования: `BEMJSON`.

##### Второстепенная ссылка (модификатор `view` в значении `minor`)

Используется для визуального выделения второстепенных ссылок на странице.

```js
{
    block : 'link',
    mods : { theme : 'islands', size: 'm', view : 'minor' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

##### Внешняя ссылка (модификатор `view` в значении `external`)

Используется для визуального выделения ссылок, которые ведут на внешние ресурсы.

```js
{
    block : 'link',
    mods : { theme : 'islands', size: 'm', view : 'external' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

##### Малозаметная ссылка (модификатор `view` в значении `ghost`)

Используется при необходимости сделать ссылку менее заметной на странице.

```js
{
    block : 'link',
    mods : { theme : 'islands', size: 'm', view : 'ghost' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

##### Ссылка под цвет текста (модификатор `view` в значении `text`)

Используется при необходимости сделать ссылку под цвет текста.


```js
{
    block : 'link',
    mods : { theme : 'islands', size: 'm', view : 'text' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

##### Жирная ссылка (модификатор `view` в значении `strong`)

Используется для визуального выделения важных ссылок на странице.

```js
{
    block : 'link',
    mods : { theme : 'islands', size: 'm', view : 'strong' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

### Специализированные поля блока

<a name="url"></a>

#### Поле `url`

Тип: `String`.

Определяет адрес, по которому осуществляется переход при нажатии на ссылку.

```js
{
    block : 'link',
    mods : { theme : 'islands', size : 'm' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

<a name="title"></a>

#### Поле `title`

Тип: `String`.

Определяет содержание всплывающей подсказки. Вид такой подсказки зависит от браузера, настроек операционной системы и не может быть изменен с помощью HTML-кода или стилей.

```js
{
    block : 'link',
    mods : { theme : 'islands', size : 'm', pseudo : true },
    content : 'Показать ответ',
    title : 'Нажмите на ссылку для получения ответа.'
}
```

<a name="target"></a>

#### Поле `target`

Тип: `String`.

Определяет поведение ссылки. Принимает все допустимые значения HTML-атрибута `target`: `_blank`, `_self` (используется по умолчанию), `_parent`, `_top`.

```js
{
    block : 'link',
    mods : { theme : 'islands', size : 'm' },
    url : 'https://bem.info/',
    content : 'bem.info',
    target : '_blank'
}
```

<a name="tabIndex"></a>

#### Поле `tabIndex`

Тип: `Number`.

Определяет последовательность перехода между контролами при нажатии на `Tab`.

```js
{
    block : 'link',
    mods : { theme : 'islands', size : 'm' },
    url : 'https://bem.info/',
    content : 'bem.info',
    tabIndex : 1
}
```
