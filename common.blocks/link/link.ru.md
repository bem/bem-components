# link

Блок `link` используется для создания различных типов ссылок и предоставляет возможность изменять их состояние, внешний вид и поведение.

## Атрибуты блока

Список атрибутов блока, которые могут быть заданы в одноименных полях входного BEMJSON:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>url</td>
        <td><code>String|BEMJSON</code></td>
        <td>Адрес ссылки. Если указан, значение <code>url</code> становится HTML-атрибут <code>href</code>.</td>
    </tr>
    <tr>
        <td>title</td>
        <td><code>String</code></td>
        <td>Текст всплывающей подсказки. Устанавливает ссылке HTML-атрибут <code>title</code>.</td>
    </tr>
    <tr>
        <td>target</td>
        <td><code>String</code></td>
        <td>Целевое окно. В значении <code>blank</code> открывает адрес ссылки в новом окне.
            <br>Устанавливает ссылке HTML-атрибут <code>target</code>.</td>
    </tr>
    <tr>
        <td>tabIndex</td>
        <td><code>Number</code></td>
        <td> Индекс, задающий последовательность перехода между элементами страницы при нажатии на <code>Tab</code>. Преобразуется в на HTML-атрибут <code>tabindex</code>.</td>
    </tr>
</table>


## Модификаторы блока

### Темы `_theme`

 * simple
 * islands

Без указания модификатора `theme` отображается [нативный](#native) вид контрола.

Наглядно показано на примерах ниже:

<a namme="native"></a>
**default**
```bemjson
{
    block : 'link',
    url : '#',
    content : 'link'
}
```

**simple**

```bemjson
{
    block : 'link',
    mods : { theme : 'simple' },
    url : '#',
    content : 'link'
}
```

**islands**

```bemjson
{
    block : 'link',
    mods : { theme : 'islands' },
    url : '#',
    content : 'link'
}
```

<a name="size"></a>
### Размеры ссылок `_size`

Реализован только в теме `islands`.

Доступно четыре размера реализации блока: **s**, **m**, **l**, **xl**.

<table>
     <tr>
        <th>Размер ссылки</th>
        <th>Размер шрифта</th>
    </tr>
    <tr>
        <th>s</th>
        <td>13px</td>
    </tr>
    <tr>
        <th>m</th>
        <td>13px</td>
    </tr>
    <tr>
        <th>l</th>
        <td>15px</td>
    </tr>
    <tr>
        <th>xl</th>
        <td>18px</td>
    </tr>
</table>

```bemjson
{
    block : 'link',
    content : 'Small',
    mods : { theme : 'islands', size : 's' }
}
```

```bemjson
{
    block : 'link',
    content : 'Medium',
    mods : { theme : 'islands', size : 'm' }
}
```

```bemjson
{
    block : 'link',
    content : 'Large',
    mods : { theme : 'islands', size : 'l' }
}
```

```bemjson
{
    block : 'link',
    content : 'X-large',
    mods : { theme : 'islands', size : 'xl' }
}
```

### Псевдоссылка `_pseudo`

Тип ссылки, по которой не производится переход на новую страницу. Применяется для вызова сценариев.

```bemjson
{
    block : 'link',
    mods : { theme : 'islands', pseudo : true },
    title : 'pseudo mod',
    content : 'link'
}
```

### Состояния блока

#### Неактивен `_disabled`

В состоянии «неактивен» блок виден, но недоступен для действий пользователя. Такой блок не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами. Переход по неактивной ссылке невозможен.

В большинстве случаев к неактивному блоку применяются дополнительные стили, чтобы выделить его на странице.

```bemjson
{
    block : 'link',
    mods : { theme : 'islands', disabled : true },
    url : '#',
    content : 'disabled'
}
```

#### В фокусе `_focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.
