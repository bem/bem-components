# attach

Используется для выбора файла, предназначенного для отправки на сервер.

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#disabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href="#focused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href="#themes">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href="#size">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер блока. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#button">button</a> | <code>String</code>, <code>BEMJSON</code> | Содержимое кнопки для выбора файла. |
| <a href="#nofiletext">noFileText</a> | <code>String</code> | Текст сообщения, когда файл не выбран. |

## Описание блока

По умолчанию блок `attach` визуально представлен:

* кнопкой ([button](../button/button.ru.md)), вызывающей системное окно загрузки файла;
* текстовым сообщением.

После выбора файла отображаются:

* имя файла (элемент `text`);
* крестик для отмены выбора (элемент `clear`).

Реализация блока не позволяет:

* прикреплять несколько файлов;
* перетаскивать элементы (drag-and-drop).

### Модификаторы блока

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm', disabled : true },
    button : 'Выберите файл',
    noFileText : 'Файл не выбран'
}
```

<a name="focused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за наличие фокуса на блоке.

Выставляется автоматически при получении блока фокуса.

```javascript
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm', focused : true },
    button : 'Выберите файл',
    noFileText : 'Файл не выбран'
}
```

<a name="themes"></a>

#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Отвечает за стилевое оформление блока.

Необходимо использовать с модификатором <a href="#size">size</a>.

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm' },
    button : 'Выберите файл',
    noFileText : 'Файл не выбран'
}
```

<a name="size"></a>

#### Модификатор `size`

Допустимое значение: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Задает размер блоку.

Необходимо использовать с модификатором <a href="#themes">theme</a>.

**s**

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 's' },
    button : 'Выберите файл',
    noFileText : 'Файл не выбран'
}
```

**m**

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm' },
    button : 'Выберите файл',
    noFileText : 'Файл не выбран'
}
```

**l**

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'l' },
    button : 'Выберите файл',
    noFileText : 'Файл не выбран'
}
```

**xl**

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'xl' },
    button : 'Выберите файл',
    noFileText : 'Файл не выбран'
}
```

### Специализированные поля блока

<a name="button"></a>

#### Поле `button`

Тип: `String`, `BEMJSON`.

Определяет содержимое кнопки для выбора файла:

* задает текст кнопки (`String`)

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm' },
    button : 'Выберите файл'
}
```

* задает внешний вид и тип кнопки (`BEMJSON`)

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm' },
    button : {
        block : 'button',
        icon : {
            block : 'icon',
            mods : { action : 'download' }
        },
        text: 'Выберите файл'
    }
}
```

<a name="nofiletext"></a>

#### Поле `noFileText`

Тип: `String`.

Определяет текст сообщения, когда файл не выбран.

```js
{
    block : 'attach',
    mods : { theme : 'islands', size : 'm' },
    button : 'Выберите файл',
    noFileText : 'Файл не выбран'
}
```
