# dropdown

Используется для реализации составного блока, который объединяет всплывающий блок ([popup](../popup/popup.ru.md)) и вызывающий его [управляющий компонент](#modswitcher). Применяется на странице для отображения дополнительной информации по запросу.

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#modswitcher>switcher</a> | <code>'link'</code>, <code>'button'</code> | <code>BEMJSON</code> | Тип управляющего компонента. |
| <a href=#opened>opened</a> | <code>true</code> | <code>JS</code> | Отображение всплывающего блока на странице. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#theme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер кнопки, вызывающей попап. Используется только для блока <a href="#modswitcherbutton">с модификатором switcher в значении button</a>.|

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#fieldswitcher>switcher</a> | <code>String</code>, <code>BEMJSON</code> | Контент <a href="#modswitcher">управляющего компонента</a>.  |
| <a href=#popup>popup</a> | <code>String</code>, <code>BEMJSON</code> | Контент всплывающего окна. |

## Обзор блока

### Модификаторы блока

<a name="modswitcher"></a>

####  Модификатор `switcher`

Допустимое значение: `link`, `button`.

Способы использования: BEMJSON.

Модификатор `switcher` отвечает за то, какой блок будет использоваться в качестве управляющего компонента.

<a name="modswitcherlink"></a>

##### Ссылка как управляющий компонент (модификатор `switcher` в значении `link`)

В качестве управляющего компонента используется блок [link](../link/link.ru.md).

При нажатии на ссылку, появляется всплывающий блок. Переход по ссылке не осуществляется.

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands' },
    switcher : 'Узнать об акциях на сайте',
    popup : 'Скидка 30% на новую коллекцию.
    Для активации акции нужно ввести промокод.'
}
```

<a name="modswitcherbutton"></a>
##### Кнопка как управляющий компонент (модификатор `switcher` в значении `button`)

В качестве управляющего компонента используется блок [button](../button/button.ru.md).

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : 'Узнать об акциях на сайте',
    popup : 'Скидка 30% на новую коллекцию.
    Для активации акции нужно ввести промокод.'
}
```

<a name="opened"></a>

#### Модификатор `opened`

Допустимое значение: `true`.

Способ использования: JS.

Модификатор `opened` в значении `true` выставляется блоку программно при появлении попапа.

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способ использования: BEMJSON, JS.

Модификатор `disabled` в значении `true` отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands', disabled : true },
    switcher : 'Узнать об акциях на сайте',
    popup : 'Скидка 30% на новую коллекцию.
    Для активации акции нужно ввести промокод.'
}
```

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm', disabled : true },
    switcher : 'Узнать об акциях на сайте',
    popup : 'Скидка 30% на новую коллекцию.
    Для активации акции нужно ввести промокод.'
}
```

<a name="theme"></a>
#### Модификатор `theme`

Допустимое значение: `islands`.

Способы использования: BEMJSON.

Модификатор отвечает за стилевое оформление блока.

Если управляющий компонент реализован <a href="modswitcherbutton">кнопкой</a>, то при выборе модификатора `theme` в значении `islands` необходимо указывать модификатор <a href="#size">size</a>.

Без указания модификатора `theme` отображается нативный вид контрола.

Модификатор `theme` может быть задан:

* блоку `dropdown` в целом

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands' },
    switcher : 'Узнать об акциях на сайте',
    popup : 'Скидка 30% на новую коллекцию.
            Для активации акции нужно ввести промокод.'
}
```

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : 'Узнать об акциях на сайте',
    popup : 'Скидка 30% на новую коллекцию.
            Для активации акции нужно ввести промокод.'
}
```

* управляющему элементу, если в поле <a href="#fieldswitcher">switcher</a> пробрасывается BEMJSON блока [link](../link/link.ru.md) или [button](../button/button.ru.md).

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link' },
    switcher : {
        block : 'link',
        mods : { pseudo : true, theme : 'islands' },
        content : 'Узнать об акциях на сайте'
    },
    popup : 'Скидка 30% на новую коллекцию.
            Для активации акции нужно ввести промокод.'
}
```

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button' },
    switcher : {
        block : 'button',
        mods : { togglable : 'check' },
        theme : 'islands',
        size : 'm',
        text : 'Узнать об акциях на сайте' },
    popup : 'Скидка 30% на новую коллекцию.
            Для активации акции нужно ввести промокод.'
}
```

<a name="size"></a>
#### Модификатор `size`

Допустимые значения для темы `islands`: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Задает размер управляющему элементу, если блоку выставлен <a href="#modswitcherbutton">модификатор switcher в значении button</a>.

Модификатор `size` используется, только если блоку установлен модификатор <a href="#theme">theme</a> в значении `islands`.

Модификатор `size` может быть задан:

* блоку `dropdown` в целом

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : 'Узнать об акциях на сайте',
    popup : 'Скидка 30% на новую коллекцию.
            Для активации акции нужно ввести промокод.'
}
```

* управляющему элементу, если в поле <a href="#fieldswitcher">switcher</a> пробрасывается BEMJSON блока [button](../button/button.ru.md).

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : {
        block : 'button',
        mods : { togglable : 'check' },
        theme : 'islands',
        size : 'm',
        text : 'Узнать об акциях на сайте'
    },
    popup : 'Скидка 30% на новую коллекцию.
            Для активации акции нужно ввести промокод.'
}
```

### Специализированные поля блока

<a name="fieldswitcher"></a>

#### Поле `switcher`

Определяет контент <a href="#modswitcher">управляющего компонента</a>.

Допустимые значения: строка или фрагмент BEMJSON.

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands' },
    switcher : {
        block : 'link',
        mods : { pseudo : true, },
        content : 'Узнать об акциях на сайте'
    },
    popup : 'Скидка 30% на новую коллекцию.
            Для активации акции нужно ввести промокод.'
}
```

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : {
        block : 'button',
        mods : { togglable : 'check' },
        text : 'Узнать об акциях на сайте'
    },
    popup : 'Скидка 30% на новую коллекцию.
            Для активации акции нужно ввести промокод.'
}
```

<a name="popup"></a>

#### Поле `popup`

Определяет контент всплывающего окна.

Допустимые значения: строка или фрагмент BEMJSON.

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'islands' },
    switcher : 'Узнать об акциях на сайте',
    popup : {
        block : 'button',
        mods : { theme : 'islands', size : 'm' },
        text : 'Скидка 30%'
    }
}
```

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'button', theme : 'islands', size : 'm' },
    switcher : 'Узнать об акциях на сайте',
    popup : {
        block : 'link',
        mods : { theme : 'islands' },
        url : 'http://market.yandex.ru/',
        content : 'Скидки здесь!'
    }
}
```

```bemjson
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
