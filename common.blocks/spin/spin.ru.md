# spin

Блок `spin` визуально иллюстрирует ход выполнения какого-либо процесса. Например, загрузки сайта или медиа-файла.

Вращается прелоадер при помощи только CSS3-анимации.

## Модификаторы блока

### Темы оформления `_theme`

Обязательный модификатор, так как блок не имеет нативного состояния контрола.

Блок представлен в следующих темах:

 * simple
 * islands (**Важно:** При выборе темы `islands` необходимо указывать обязательный модификатор [size](#size).)

**simple**

```bemjson
{
    block : 'spin',
    mods : { theme : 'simple', progress : true }
}
```

**islands**

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 's', progress : true }
}
```

<a name="size"></a>
### Размеры `_size`

Реализован только в теме `islands`.

Задает размер блоку `spin`.

Доступно пять размеров реализации блока: **xs**, **s**, **m**, **l**, **xl**.

<table>
    <tr>
        <th>Размер блока</th>
        <th>Размер, px</th>
    </tr>
    <tr>
        <th>XS</th>
        <td>16px</td>
    </tr>
    <tr>
        <th>S</th>
        <td>24px</td>
    </tr>
    <tr>
        <th>M</th>
        <td>28px</td>
    </tr>
    <tr>
        <th>L</th>
        <td>32px</td>
    </tr>
    <tr>
        <th>XL</th>
        <td>38px</td>
    </tr>
</table>

Наглядно показано на примерах ниже:

**XS**

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 'xs', progress : true }
}
```

**S**

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 's', progress : true }
}
```

**M**

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 'm', progress : true }
}
```

**L**

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 'l', progress : true }
}
```

**XL**

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 'xl', progress : true }
}
```

### Вращение прелоадера `_progress`

Модификатор `progress` в значении `true` задает вращение прелоадера и показывает его на странице.

Отсутствие модификатора останавливает блок и скрывает его со страницы.
