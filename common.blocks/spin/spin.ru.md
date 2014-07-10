# spin

Блок `spin` визуально иллюстрирует ход выполнения какого-либо процесса. Например, загрузки сайта или медиа-файла.

Вращается прелоадер при помощи только CSS3-анимации.

## Модификаторы блока

### Темы оформления `_theme`

Обязательный модификатор, так как блок не имеет нативного состояния контрола.

Блок представлен в следующих темах:

 * simple
 * normal

**simple**

```bemjson
{
    block : 'spin',
    mods : { theme : 'simple', progress : true }
}
```

**normal**

```bemjson
{
    block : 'spin',
    mods : { theme : 'normal', size : 's', progress : true }
}
```

### Размеры `_size`

Обязательный модификатор. Задает размер блоку `spin`.

Реализован только в теме *normal*.

Доступно пять размеров реализации блока: **xs**, **s**, **m**, **l**, **xl**.

<table>
    <tr>
        <th>Размер<br>блока</th>
        <th>Размер, px</th>
        <th>Реализация</th>
    </tr>
    <tr>
        <th>XS</th>
        <td>16px</td>
        <td>
            <pre><code>
{
    block : 'spin',
    mods : { theme : 'normal', size : 'xs', progress : true }
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>S</th>
        <td>24px</td>
        <td>
            <pre><code>
{
    block : 'spin',
    mods : { theme : 'normal', size : 's', progress : true }
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>M</th>
        <td>28px</td>
        <td>
            <pre><code>
{
    block : 'spin',
    mods : { theme : 'normal', size : 'm', progress : true }
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>L</th>
        <td>32px</td>
        <td>
            <pre><code>
{
    block : 'spin',
    mods : { theme : 'normal', size : 'l', progress : true }
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>XL</th>
        <td>38px</td>
        <td>
            <pre><code>
{
    block : 'spin',
    mods : { theme : 'normal', size : 'xl', progress : true }
}
            </code></pre>
        </td>
    </tr>
</table>

### Вращение прелоадера `_progress`

Модификатор `progress` в значении `true` задает вращение прелоадера и показывает его на странице. Когда прелоадер виден, он крутится.

Модификатор `progress` в значении `false` останавливает прелоадер и скрывает его со страницы.
