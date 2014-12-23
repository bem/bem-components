# dropdown

Используется для реализации составного блока, который объединяет всплывающий блок ([popup](../popup/popup.ru.md)) и вызывающий его [управляющий компонент](#modswitcher) (например, кнопку или ссылку).

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | --------- |
| <a href=#modswitcher>switcher</a> | <code>'link'</code>, <code>'button'</code> | <code>BEMJSON</code> | Тип управляющего компонента. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#opened>opened</a> | <code>true</code> | <code>JS</code> | Отображение всплывающего блока на странице. |
| <a href=#theme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер управляющего компонента.|

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#fieldswitcher>switcher</a> | <code>String</code>, <code>BEMJSON</code> | Содержимое <a href="#modswitcher">управляющего компонента</a>.  |
| <a href=#popup>popup</a> | <code>String</code>, <code>BEMJSON</code> | Содержимое всплывающего окна. |

## Описание блока

### Модификаторы блока

<a name="modswitcher"></a>

####  Модификатор `switcher`

Допустимые значения: `link`, `button`.

Способ использования: `BEMJSON`.

Модификатор `switcher` отвечает за то, какой блок будет использоваться в качестве управляющего компонента:

* [ссылка](#modswitcherlink)
* [кнопка](#modswitcherbutton)

<a name="modswitcherlink"></a>

##### Ссылка как управляющий компонент (модификатор `switcher` в значении `link`)

Используется для представления управляющего компонента блоком [link](../link/link.ru.md).

Нажатие на ссылку вызывает всплывающий блок. Переход по ссылке не осуществляется.

```js
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm' },
    switcher : 'Узнать об акциях на сайте',
    popup : 'Скидка 30% на новую коллекцию. Для активации акции нужно ввести промокод.'
}
```

<a name="modswitcherbutton"></a>
##### Кнопка как управляющий компонент (модификатор `switcher` в значении `button`)

Используется для представления управляющего компонента блоком [button](../button/button.ru.md).

```js
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : 'Узнать об акциях на сайте',
    popup : 'Скидка 30% на новую коллекцию. Для активации акции нужно ввести промокод.'
}
```

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```js
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm', disabled : true },
    switcher : 'Узнать об акциях на сайте',
    popup : 'Скидка 30% на новую коллекцию. Для активации акции нужно ввести промокод.'
}
```

```js
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm', disabled : true },
    switcher : 'Узнать об акциях на сайте',
    popup : 'Скидка 30% на новую коллекцию. Для активации акции нужно ввести промокод.'
}
```

<a name="opened"></a>

#### Модификатор `opened`

Допустимое значение: `true`.

Способ использования: `JS`.

Выставляется блоку автоматически при открытии всплывающего окна.

<a name="theme"></a>
#### Модификатор `theme`

Допустимое значение: `islands`.

Способы использования: `BEMJSON`.

Необходимо использовать с модификатором <a href="#size">size</a>.

Отвечает за стилевое оформление блока и может быть задан:

* блоку `dropdown` в целом

```js
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm' },
    switcher : 'Узнать об акциях на сайте',
    popup : 'Скидка 30% на новую коллекцию. Для активации акции нужно ввести промокод.'
}
```

```js
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : 'Узнать об акциях на сайте',
    popup : 'Скидка 30% на новую коллекцию. Для активации акции нужно ввести промокод.'
}
```

* управляющему элементу, если в <a href="#fieldswitcher">поле switcher</a> пробрасывается BEMJSON блока [link](../link/link.ru.md) или [button](../button/button.ru.md).

```js
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm' },
    switcher : {
        block : 'link',
        mods : { pseudo : true, theme : 'islands', size : 'm' },
        content : 'Узнать об акциях на сайте'
    },
    popup : 'Скидка 30% на новую коллекцию. Для активации акции нужно ввести промокод.'
}
```

```js
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : {
        block : 'button',
        mods : { togglable : 'check', theme : 'islands', size : 'm', },
        text : 'Узнать об акциях на сайте'
    },
    popup : 'Скидка 30% на новую коллекцию. Для активации акции нужно ввести промокод.'
}
```

<a name="size"></a>
#### Модификатор `size`

Допустимые значения для темы `islands`: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Задает размер управляющему элементу.

Необходимо использовать с модификатором <a href="#theme">theme</a> в значении `islands`.

Модификатор `size` может быть задан:

* блоку `dropdown` в целом

```js
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : 'Узнать об акциях на сайте',
    popup : 'Скидка 30% на новую коллекцию. Для активации акции нужно ввести промокод.'
}
```

* управляющему элементу, если в <a href="#fieldswitcher">поле switcher</a> пробрасывается BEMJSON блока [button](../button/button.ru.md).

```js
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : {
        block : 'button',
        mods : { togglable : 'check', theme : 'islands', size : 'm' },
        text : 'Узнать об акциях на сайте'
    },
    popup : 'Скидка 30% на новую коллекцию. Для активации акции нужно ввести промокод.'
}
```

### Специализированные поля блока

<a name="fieldswitcher"></a>

#### Поле `switcher`

Тип: `String`, `BEMJSON`.

Определяет содержимое <a href="#modswitcher">управляющего компонента</a>.

```js
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm' },
    switcher : {
        block : 'link',
        mods : { pseudo : true },
        content : 'Узнать об акциях на сайте'
    },
    popup : 'Скидка 30% на новую коллекцию. Для активации акции нужно ввести промокод.'
}
```

```js
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : {
        block : 'button',
        mods : { togglable : 'check' },
        text : 'Узнать об акциях на сайте'
    },
    popup : 'Скидка 30% на новую коллекцию. Для активации акции нужно ввести промокод.'
}
```

<a name="popup"></a>

#### Поле `popup`

Тип: `String`, `BEMJSON`.

Определяет содержимое всплывающего окна.

```js
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', size : 'm' },
    switcher : 'Узнать об акциях на сайте',
    popup : 'Скидка 30%'
}
```

```js
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'islands',
        size : 'xl'
    },
    switcher : 'Выпадающий список',
    popup : {
        block : 'menu',
        mods : {
            theme : 'islands',
            size : 'xl',
            select : 'check'
        },
        content : [
            {
                block : 'menu-item',
                val : 1,
                content : 'First item'
            },
            {
                block : 'menu-item',
                val : 2,
                content : 'Second item'
            }
        ]
    }
}
```
