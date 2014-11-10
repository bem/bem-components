# control-group

Блок `control-group` – это обертка, предназначенная для визуальной группировки других блоков. Группируемые блоки помещаются в поле `content` BEMJSON-декларации.

Блок реализован только в технологии CSS. Для всех вложенных блоков должна быть установлена тема `islands`.

В результате применения шаблонов блок `control-group` становится на странице HTML-элементом с тегом `<div>`.

## Варианты использования

Блок позволяет визуально группировать следующие блоки:

* [input](../input/input.ru.md)
* [button](../button/button.ru.md)

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

Кроме того, можно группировать блоки, использующие `input` или `button` как один из компонентов. Например, в группу можно включить блок `select`, управляющим компонентом которого служит блок `button`:

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

Блоки, использующие в качестве компонента блок `button`, могут быть сгруппированы:

* [select](../select/select.ru.md);
* [dropdown](../dropdown/dropdown.ru.md) (с модификатором `dropdown_switcher_button`);
* [checkbox](../checkbox/checkbox.ru.md) (с модификатором `checkbox_type_button`);
* [radio](../radio/radio.ru.md) (с модификатором `radio_type_button`).

## Влияние группировки на блоки

### Блок `input`

Для всех сгруппированных блоков `input`, кроме последнего, не отображается правая граница (CSS-свойство `right` устанавливается равным нулю для псевдоэлемента `:before`). У последнего блока группы толщина правой границы равна 1px.

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

### Блок `button`

Для блоков `button` группировка влияет на скругление углов и наличие правой границы. Внешний вид зависит от положения блока `button` в группе – первый и последний элементы группы визуально отличаются от остальных:

<table>
    <tr>
        <th>Положение в группе</th>
        <th>Скругление углов</th>
        <th>Правый отступ</th>
    </tr>
    <tr>
        <td>Первый</td>
        <td>Скруглены левые углы, верхний и нижний</td>
        <td>-</td>
    </tr>
    <tr>
        <td>Последний</td>
        <td>Скруглены правые углы, верхний и нижний</td>
        <td>+</td>
    </tr>
    <tr>
        <td>В середине</td>
        <td>Без скругления углов</td>
        <td>-</td>
    </tr>
</table>

Например:

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
