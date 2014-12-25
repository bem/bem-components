# modal

Используется для создания модального окна.

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#visible">visible</a> | <code>true</code> | <code>JS</code> | Видимость модального окна. |
| <a href="#autoclosable">autoclosable</a> | <code>true</code>| <code>BEMJSON</code> | Автоматическое скрытие модального окна. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#zIndexGroupLevel">zIndexGroupLevel</a> | <code>Number</code> | Уровень слоя модального окна. |

## Описание блока

### Модификаторы блока

<a name="visible"></a>

#### Модификатор `visible`

Допустимое значение: `true`.

Способы использования: `JS`.

Выставляется при открытии модального окна.

Отвечает за видимость модального окна на странице.

<a name="autoclosable"></a>

#### Модификатор `autoclosable`

Допустимое значение: `true`.

Способ использования: `BEMJSON`.

Скрывает блок по клику вне зоны модального окна или по нажатию кнопки `Escape`.

```javascript
{
    block : 'modal',
    mods : { theme : 'islands', autoclosable : true },
    content : 'Содержимое модального окна'
}
```

<a name="theme"></a>

#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Отвечает за стилевое оформление блока.

```javascript
{
    block : 'modal',
    mods : { theme : 'islands' },
    content : 'Содержимое модального окна'
}
```

### Специализированные поля блока

<a name="zIndexGroupLevel"></a>

#### Поле `zIndexGroupLevel`

Тип: `Number`.

Определяет последовательность перехода между контролами при нажатии на Tab.

```javascript
{
    block : 'modal',
    mods : { theme : 'islands' },
    content : 'Содержимое модального окна',
    zIndexGroupLevel : 3
}
```
