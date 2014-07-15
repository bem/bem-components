# control-group

Блок `control-group` – это обертка, предназначенная для визуальной группировки других блоков. Группируемые блоки помещаются в поле `content` BEMJSON декларации.

Блок реализован в технологии CSS и не вводит никакой дополнительной логики. Для вложенных блоков должна быть установлена тема *normal*.

В результате применения шаблонов, блок `control-group` становится на странице HTML-элементом с тегом `<div>`.


## Варианты использования

Блок позволяет визуально группировать следующие блоки:

* `input` – поле ввода;
* `button` – кнопка.

Например:

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'normal', size : 'l', type : 'search' },
            val : 'Your-query',
            placeholder : 'query'
        },
        {
            block : 'button',
            mods : { theme : 'normal', size : 'l' },
            text : 'search'
        }
    ]
}
```


Кроме того, можно группировать блоки, использующие `input` или `button`, как один из компонентов. Например, в группу можно включить блок `select`, управляющим компонентом для которого служит блок `button`: 

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'normal', size : 'm' },
            placeholder : 'price from'
        },
        {
            block : 'input',
            mods : { theme : 'normal', size : 'm' },
            placeholder : 'to'
        },
        {
            block : 'select',
            mods : { mode : 'radio', theme : 'normal', size : 'm' },
            options : [
                { val : 'usd', text : '$', checked : true },
                { val : 'euro', text : '€' }
            ]
        }
    ]
}
```

Могут быть сгруппированы следующие блоки, использующие в качестве компонента блок `button`:

* `select`;
* `dropdown` (с модификатором `dropdown_switcher_button`);
* `checkbox` (с модификатором `checkbox_type_button`);
* `radio` (с модификатором `radio_type_button`).


## Влияние группировки на блоки

### `input`

Для всех сгруппированных блоков `input`, кроме последнего, не отображается правая граница (CSS свойство `right` устанавливается равным нулю для псевдоэлемента `:before`). Для последнего блока группы толщина правой границы равна 1px.

Например:

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'normal', size : 'xl', type : 'search' },
            val : 'First-query',
            placeholder : 'query'
        },
        {
            block : 'input',
            mods : { theme : 'normal', size : 'xl', type : 'search' },
            val : 'Second-query',
            placeholder : 'query'
        },
        {
            block : 'input',
            mods : { theme : 'normal', size : 'xl', type : 'search' },
            val : 'Another-query',
            placeholder : 'query'
        }        
    ]
}
```


### `button`

Для блоков `button` группировка влияет на скругление углов и наличие правой границы. Внешний вид зависит от положения блока `button` внутри группы – первый и последний элементы группы визуально отличаются от прочих:

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
        <td>Не из крайних</td>
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
            mods : { theme : 'normal', size : 'xl' },
            text : 'First of group'
        },
        {
            block : 'button',
            mods : { theme : 'normal', size : 'xl' },
            text : 'In the middle'
        },
        {
            block : 'button',
            mods : { theme : 'normal', size : 'xl' },
            text : 'Last one'
        }
    ]
}
```
