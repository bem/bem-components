# popup

Используется для создания блоков, открывающихся поверх остальных слоев страницы.

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#target">target</a> | <code>'anchor'</code>, <code>'position'</code> | <code>BEMJSON</code> | Точка открытия всплывающего окна. |
| <a href="#visible">visible</a> | <code>true</code> | <code>JS</code> | Видимость всплывающего окна. |
| <a href="#autoclosable">autoclosable</a> | <code>true</code>| <code>BEMJSON</code> | Автоматическое скрытие всплывающего окна. |
| <a href="#theme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#directions">directions</a> | <code>Array</code> | Расположение (в порядке приоритета) относительно точки открытия. Используется только для всплывающих окон с модификатором <a href="#popuptarget">target</a>. |
| <a href="#mainOffset">mainOffset</a> | <code>Number</code> | Смещение в пикселях всплывающего окна относительно основного направления. Используется только с модификатором <a href="#popuptarget">target</a>. |
| <a href="#secondaryOffset">secondaryOffset</a> | <code>Number</code>| Смещение в пикселях всплывающего окна относительно второстепенного направления. Используется только с модификатором <a href="#popuptarget">target</a>. |
| <a href="#viewportOffset">viewportOffset</a> | <code>Number</code>| Минимально допустимое смещение в пикселях всплывающего окна от края окна браузера. Используется только с модификатором <a href="#popuptarget">target</a>. |
| <a href="#zIndexGroupLevel">zIndexGroupLevel</a> | <code>Number</code> | Уровень слоя для открывающихся всплывающих окон. Использует блок <a href="../z-index-group/z-index-group.ru.md">z-index-group</a>.|

## Описание блока

Блок `popup` используется для создания всплывающих окон поверх остальных слоев страницы. Позволяет изменять их состояние, поведение и внешний вид.

### Модификаторы блока

<a name="target"></a>

#### Модификатор `target`

Допустимые значения: `'anchor'`, `'position'`.

Способ использования: `BEMJSON`.

Модификатор `target` определяет точку открытия всплывающего окна.

<a name="target-anchor"></a>

##### Якорь (модификатор `target` в значении `anchor`)

Позволяет использовать в качестве точки открытия всплывающего окна блок или элемент.

Поддерживается многоуровневая вложенность всплывающих окон (из каждого открытого блока `popup` может быть вызван другой). Одновременно с закрытием всплывающего окна закрываются все его дочерние окна.

Необходимо использовать метод [setAnchor](http://ru.bem.info/libs/bem-components/v2/desktop/popup/jsdoc/).

##### Координаты (модификатор `target` в значении `position`)

Позволяет задавать точку открытия всплывающего окна координатами.

Необходимо использовать метод [setPosition](http://ru.bem.info/libs/bem-components/v2/desktop/popup/jsdoc/).

<a name="visible"></a>

#### Модификатор `visible`

Допустимое значение: `true`.

Способы использования: `JS`.

Выставляется при открытии всплывающего окна.

Отвечает за видимость всплывающего окна на странице.

<a name="autoclosable"></a>

#### Модификатор `autoclosable`

Допустимое значение: `true`.

Способ использования: `BEMJSON`.

При наличии модификатора `autoclosable` блок скрывается по клику вне зоны всплывающего окна или по нажатию кнопки `Escape`.

```javascript
{
    block : 'popup',
    mods : { theme : 'islands', autoclosable : true },
    content : ''
}
```

<a name="theme"></a>

#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Отвечает за стилевое оформление блока.

```javascript
{
    block : 'popup',
    mods : { theme : 'islands' },
    content : 'Содержимое всплывающего окна'
}
```

### Специализированные поля блока

<a name="directions"></a>

#### Поле `directions`

Тип: `Array`.

Определяет расположение всплывающего окна относительно точки открытия.

Используется только для всплывающих окон с модификатором <a href=#target>target</a>.

<a name="directions-type"></a>
Расположение блока определяется автоматически, исходя из массива допустимых направлений (в порядке приоритета) и положения точки открытия на странице. У всех допустимых направлений есть основной и второстепенный параметры. Например, для направления `bottom-left` параметр `bottom` является основным, а `left` — второстепенным.

По умолчанию используется следующий массив допустимых направлений:

* bottom-left
* bottom-center
* bottom-right
* top-left
* top-center
* top-right
* right-top
* right-center
* right-bottom
* left-top
* left-center
* left-bottom

Для управления расположением всплывающего окна необходимо указать массив направлений открытия. При этом из значений массива будет выбрано наиболее подходящее, исходя из положения точки открытия на странице.

Например, если требуется, чтобы всплывающее окно раскрывалось над точкой открытия:

```javascript
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'islands', target : 'anchor' },
    directions : ['top-left', 'top-center', 'top-right'],
    content : 'Содержимое всплывающего окна'
}
```

Если необходимо разместить всплывающее окно справа по центру:

```javascript
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'islands', target : 'anchor' },
    directions : ['right-center'],
    content : 'Содержимое всплывающего окна'
}
```
<a name="mainOffset"></a>

#### Поле `mainOffset`

Тип: `Number`.

Определяет смещение в пикселях всплывающего окна относительно <a href="#directions-type">основного</a> направления.

Используется только с модификатором <a href="#target">target</a>.

```javascript
{
    block : 'popup',
    mods : { theme: 'islands', target : 'anchor' },
    directions : ['right-center'],
    content : 'Содержимое всплывающего окна',
    mainOffset : 100
}
```

<a name="secondaryOffset"></a>

#### Поле `secondaryOffset`

Тип: `Number`.

Определяет смещение в пикселях всплывающего окна относительно <a href="#directions-type">второстепенного</a> направления.

Используется только с модификатором <a href="#target">target</a>.

```javascript
{
    block : 'popup',
    mods : { theme: 'islands', target : 'anchor' },
    directions : ['right-center'],
    content : 'Содержимое всплывающего окна',
    secondaryOffset : 100
}
```

<a name="viewportOffset"></a>

#### Поле `viewportOffset`

Тип: `Number`.

Определяет минимально допустимое смещение в пикселях всплывающего окна от края окна браузера.

Используется только с модификатором <a href="#target">target</a>.

```javascript
{
    block : 'popup',
    mods : { theme: 'islands', target : 'anchor' },
    directions : ['right-center'],
    content : 'Содержимое всплывающего окна',
    viewportOffset : 100
}
```

<a name="zIndexGroupLevel"></a>

#### Поле `zIndexGroupLevel`

Тип: `Number`.

Определяет уровень слоя для каждого всплывающего окна.

Использует блок <a href="../z-index-group/z-index-group.ru.md">z-index-group</a>.
