# popup

Используется для блоков, всплывающих поверх остальных слоев страницы.

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#popuptarget>target</a> | <code>'anchor'</code>, <code>'position'</code> | <code>BEMJSON</code> | Точка открытия попапа. |
| <a href=#popupvisible>visible</a> | <code>true</code> | <code>JS</code> | Видимость попапа. |
| <a href=#autoclosable>autoclosable</a> | <code>'true'</code>| <code>BEMJSON</code> | Скрытие попапа. |
| <a href=#popuptheme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#directions>directions</a> | <code>Array</code> | Расположение (в порядке приоритета) относительно точки открытия. Используется только для <a href="#popuptarget">попапа с модификатором target</a>. |
| <a href=#mainOffset>mainOffset</a> | <code>Number</code> | Задает смещение попапа относительно основного направления. Используется только для <a href="#popuptarget">попапа с модификатором target</a>. |
| <a href=#secondaryOffset>secondaryOffset</a> | <code>Number</code>| Задает смещение попапа относительно второстепенного направления. Используется только для <a href="#popuptarget">попапа с модификатором target</a>. |
| <a href=#viewportOffset>viewportOffset</a> | <code>Number</code>| Задает минимально допустимое смещение попапа от края окна браузера. Используется только для <a href="#popuptarget">попапа с модификатором target</a>. |
| <a href=#zIndexGroupLevel>zIndexGroupLevel</a> | <code>Number</code> | Позволяет задать уровень слоя для открывающихся попапов. Использует блок <a href="../z-index-group/z-index.group.ru.md">z-index-group</a>.|

## Обзор блока

Блок `popup` используется для создания выпадающих блоков поверх остальных слоев страницы. Позволяет изменять их состояние, поведение и внешний вид.

### Модификаторы блока

<a name="popuptarget"></a>

#### Модификатор `target`

Допустимое значение: `'anchor'`, `'position'`.

Способы использования: BEMJSON.

Модификатор `target` определяет точку открытия попапа.

<a name="popuptarget-anchor"></a>

##### Координаты (модификатор `target` в значении `anchor`)

Модификатор `target` в значении `anchor` позволяет использовать в качестве точки открытия попапа блок или элемент.

Поддерживает вложенную структуру нескольких одновременно открытых попапов. Это означает, что из одного попапа может быть вызван другой и так далее. При этом при закрытии попапа все его дочерние попапы тоже закрываются.

Для осмысленного применения необходимо использовать метод [setAnchor](http://ru.bem.info/libs/bem-components/v2/desktop/popup/jsdoc/).

##### Якорь (модификатор `target` в значении `position`)

Модификатор `target` в значении `position` позволяет задавать точку открытия попапа координатами.

Для осмысленного применения необходимо использовать метод [setPosition](http://ru.bem.info/libs/bem-components/v2/desktop/popup/jsdoc/).

<a name="popupvisible"></a>

#### Модификатор `visible`

Допустимое значение: `true`.

Способы использования: JS.

Модификатор `visible` в значении `true` выставляется блоку автоматически при открытии попапа и отвечает за видимость попапа на странице. Когда попап скрыт, модификатор снимается.

<a name="popupautoscalable"></a>

#### Модификатор `autoscalable`

Допустимые значения: `'true'`

Способы использования: BEMJSON.

Модификатор `autoscalable` скрывает блок по клику вне зоны попапа или по нажатию кнопки `Escape`.

```
{
    block : 'popup',
    mods : { theme : 'islands', autoclosable : true },
    content : ''
}
```

<a name="popuptheme"></a>

#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способы использования: BEMJSON.

Модификатор отвечает за стилевое оформление блока.

Без указания модификатора `theme` отображается нативный вид контрола.

```
{
    block : 'popup',
    mods : { theme : 'islands' },
    content : 'Содержимое попапа'
}
```

### Специализированные поля блока

<a name="directions"></a>

#### Поле `direction`

Определяет расположение попапов относительно точки открытия.

Используется только для <a href="#popuptarget">попапа с модификатором target</a>.

<a name="directions-type"></a>
Расположение блока определяется автоматически, исходя из массива допустимых направлений (в порядке приоритета) и положения родителя на странице. У всех допустимых направлений есть основной и второстепенный параметр. Например, для направления `bottom-left` `bottom` является основным параметром, а `left` — второстепенным.

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

Чтобы управлять расположением попапа, можно ограничить массив направлений открытия, оставив только требуемые. Пользовательский массив нужно передать в качестве JS-параметра с ключом `directions`. При этом из значений массива будет выбрано наиболее подходящее, исходя из положения родителя на странице.

Например, если требуется, чтобы попап раскрывался над родителем:

```
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'islands' },
    directions : ['top-left', 'top-center', 'top-right'],
    content : 'Содержимое попапа'
}
```

Или необходимо разместить попап справа по центру:

```
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'islands' },
    directions : ['right-center'],
    content : 'Содержимое попапа'
}
```
<a name="mainOffset"></a>

#### Поле `mainOffset`

Определяет смещение попапа относительно <a href="#directions-type">основного</a> направления.

Используется только для <a href="#popuptarget">попапа с модификатором target</a>.

```
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'islands' },
    direction : ['right-center'],
    mainOffset : 100,
    content : 'Содержимое попапа'
}
```

<a name="secondaryOffset"></a>

#### Поле `secondaryOffset`

Определяет смещение попапа относительно <a href="#directions-type">второстепенного</a> направления.

Используется только для <a href="#popuptarget">попапа с модификатором target</a>.

```
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'islands' },
    direction : ['right-center'],
    secondaryOffset : 100,
    content : 'Содержимое попапа'
}
```

<a name="viewportOffset"></a>

#### Поле `viewportOffset`

Определяет минимально допустимое смещение попапа от края окна браузера.

Используется только для <a href="#popuptarget">попапа с модификатором target</a>.

```
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'islands' },
    direction : ['right-center'],
    viewportOffset : 100,
    content : 'Содержимое попапа'
}
```

<a name="zIndexGroupLevel"></a>

#### Поле `zIndexGroupLevel`

Определяет уровень слоя для каждого попапа.

Использует блок <a href="../z-index-group/z-index.group.ru.md">z-index-group</a>.
