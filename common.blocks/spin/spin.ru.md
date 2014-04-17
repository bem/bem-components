# spin 

Блок **spin** визуально иллюстрирует ход выполнения какого-либо процесса. Например, загрузки сайта или медиа-файла.

Вращается прелоадер при помощи только CSS3-анимации.

# Модификаторы блока

Блок spin не может использоваться без следующих модификаторов:

## Темы оформления 
`_theme`

Блок представлен в темах *simple* и *normal*.

### simple

````bemjson
    {
        block : 'spin',
        mods : { theme : 'simple', size : 's', progress : true }
    }
````

### nornal

Разработана для Яндекса

````bemjson       
    {
        block : 'spin',
        mods : { theme : 'normal', size : 's', progress : true }
    }
````

## Размеры 
`_size`

Для каждой темы доступно пять размеров реализации блока: **xs**, **s**, **m**, **l**, **xl**.

<table>
  <tr>
    <th>Тема/Размер</th>
    <th>simple</th>
    <th>normal</th>
  </tr>
  <tr>
    <td>xs</td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'simple', size : 'xs', progress : true }
    }
</td>
    <td>       
    {
        block : 'spin',
        mods : { theme : 'normal', size : 'xs', progress : true }
    }
</td>
  </tr>
  <tr>
    <td>s</td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'simple', size : 's', progress : true }
    }
    </td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'normal', size : 's', progress : true }
    }
    </td>
  </tr>
  <tr>
    <td>m</td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'simple', size : 'm', progress : true }
    }
    </td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'normal', size : 'm', progress : true }
    }
    </td>
  </tr>
  <tr>
    <td>l</td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'simple', size : 'l', progress : true }
    }
    </td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'normal', size : 'l', progress : true }
    }
    </td>
  </tr>
  <tr>
    <td>xl</td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'simple', size : 'xl', progress : true }
    }
    </td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'normal', size : 'xl', progress : true }
    }
    </td>
  </tr>

</table>

## Вращение прелоадера
`_progress`

`{ progress : true }`

Модификатор `progress` в значении `true` показывает вращение прелоадера. Когда прелоадер виден, он крутится.

`{ progress : false }`

Модификатор `progress` в значении `false` останавливает прелоадер, например, когда он скрывается на странице.
