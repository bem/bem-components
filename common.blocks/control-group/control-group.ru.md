# control-group

Используется как обертка для **визуальной** группировки других блоков. Группируемые блоки помещаются в поле `content` BEMJSON-декларации.

**Ограничения:** текущая реализация блока позволяет группировать только те блоки, которым установлен модификатор `theme` в значении `islands`.

## Варианты использования

Блок позволяет визуально группировать следующие блоки:

* [input](../input/input.ru.md)

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm', type : 'search' },
            val : 'First-query',
            placeholder : 'query'
        },
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm', type : 'search' },
            val : 'Second-query',
            placeholder : 'query'
        },
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm', type : 'search' },
            val : 'Another-query',
            placeholder : 'query'
        }
    ]
}
```

* [button](../button/button.ru.md)

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'button',
            mods : { theme : 'islands', size : 'm' },
            text : 'The first element'
        },
        {
            block : 'button',
            mods : { theme : 'islands', size : 'm' },
            text : 'In the middle'
        },
        {
            block : 'button',
            mods : { theme : 'islands', size : 'm' },
            text : 'The last element'
        }
    ]
}
```

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm', type : 'search' },
            val : 'Your-query',
            placeholder : 'query'
        },
        {
            block : 'button',
            mods : { theme : 'islands', size : 'm' },
            text : 'search'
        }
    ]
}
```

* [select](../select/select.ru.md)

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm' },
            placeholder : 'price from'
        },
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm' },
            placeholder : 'to'
        },
        {
            block : 'select',
            mods : { mode : 'radio', theme : 'islands', size : 'm' },
            options : [
                { val : 'usd', text : '$', checked : true },
                { val : 'euro', text : '€' }
            ]
        }
    ]
}
```

* [dropdown](../dropdown/dropdown.ru.md) (с модификатором `switcher` в значении `button`)

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'button',
            mods : { view : 'action', theme : 'islands', size : 'm' },
            text : 'Купить сейчас'
        },
        {
            block : 'dropdown',
            mods : { switcher : 'button', theme : 'islands', size : 'm' },
            switcher : 'Действующие скидки',
            popup : 'Воспользуйтесь нашим специальным предложением «50% скидка на доставку каждого пятого груза».'
        }
    ]
}
```

* [checkbox](../checkbox/checkbox.ru.md) (с модификатором `type` в значении `button`)

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'checkbox',
            text : 'Куртки',
            name: 'coat',
            val: '1',
            mods : { theme : 'islands', size : 'm', type : 'button' }
        },
        {
            block : 'checkbox',
            text : 'Платья',
            name: 'dress',
            val: '1',
            mods : { theme : 'islands', size : 'm', type : 'button' }
        },
        {
            block : 'checkbox',
            text : 'Кардиганы',
            name: 'cardigan',
            val: '1',
            mods : { theme : 'islands', size : 'm', type : 'button' }
        }
    ]
}
```

* [radio](../radio/radio.ru.md) (с модификатором `type` в значении `button`)

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'radio',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            name : 'radio-islands',
            text : 'Мужская одежда'
        },
        {
            block : 'radio',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            name : 'radio-islands',
            text : 'Женская одежда'
        },
        {
            block : 'radio',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            name : 'radio-islands',
            text : 'Детская одежда'
        }
    ]
}
```
