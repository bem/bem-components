# spin

Блок **spin** визуально иллюстрирует ход выполнения какого-либо процесса. Например, загрузки сайта или медиа-файла.

Вращается прелоадер при помощи только CSS3-анимации.

## Модификаторы блока

### Темы оформления `_theme`

Обязательный модификатор.

Блок представлен в темах *simple* и *normal*.

#### simple

```bemjson
    {
        block : 'spin',
        mods : { theme : 'simple', size : 's', progress : true }
    }
```

#### normal

```bemjson
    {
        block : 'spin',
        mods : { theme : 'normal', size : 's', progress : true }
    }
```

### Размеры `_size`

Обязательный модификатор.

Для каждой темы доступно пять размеров реализации блока:

<table>
  <tr>
    <th>Размер</th>
    <td>xs</td>
    <td>s</td>
    <td>m</td>
    <td>l</td>
    <td>xl</td>
  </tr>
  <tr>
    <th>Размер, px</th>
    <td>16px</td>
    <td>24px</td>
    <td>28px</td>
    <td>32px</td>
    <td>38px</td>
  </tr>
</table>



<table>
  <tr>
    <th>Тема/Размер</th>
    <th>simple</th>
    <th>normal</th>
  </tr>
  <tr>
    <th>xs</th>
    <td>
        <pre><code>
            {
                block : 'spin',
                mods : { theme : 'simple', size : 'xs', progress : true }
            }
        </pre></code>
    </td>
    <td>
        <pre><code>
            {
                block : 'spin',
                mods : { theme : 'normal', size : 'xs', progress : true }
            }
        </pre></code>
    </td>
  </tr>
  <tr>
    <th>s</th>
    <td>
        <pre><code>
            {
                block : 'spin',
                mods : { theme : 'simple', size : 's', progress : true }
            }
        </pre></code>
    </td>
    <td>
        <pre><code>
            {
                block : 'spin',
                mods : { theme : 'normal', size : 's', progress : true }
            }
        </pre></code>
    </td>
  </tr>
  <tr>
    <th>m</th>
    <td>
        <pre><code>
            {
                block : 'spin',
                mods : { theme : 'simple', size : 'm', progress : true }
            }
        </pre></code>
    </td>
    <td>
        <pre><code>
            {
                block : 'spin',
                mods : { theme : 'normal', size : 'm', progress : true }
            }
        </pre></code>
    </td>
  </tr>
  <tr>
    <th>l</th>
    <td>
        <pre><code>
            {
                block : 'spin',
                mods : { theme : 'simple', size : 'l', progress : true }
            }
        </pre></code>
    </td>
    <td>
        <pre><code>
            {
                block : 'spin',
                mods : { theme : 'normal', size : 'l', progress : true }
            }
        </pre></code>
    </td>
  </tr>
  <tr>
    <th>xl</th>
    <td>
        <pre><code>
            {
                block : 'spin',
                mods : { theme : 'simple', size : 'xl', progress : true }
            }
        </pre></code>
    </td>
    <td>
        <pre><code>
            {
                block : 'spin',
                mods : { theme : 'normal', size : 'xl', progress : true }
            }
        </pre></code>
    </td>
  </tr>
</table>

### Вращение прелоадера `_progress`

`{ progress : true }`

Модификатор `progress` в значении `true` показывает вращение прелоадера. Когда прелоадер виден, он крутится.

`{ progress : false }`

Модификатор `progress` в значении `false` останавливает прелоадер и скрывает его на странице.
