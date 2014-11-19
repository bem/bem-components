# spin

Блок `spin` визуально иллюстрирует ход выполнения какого-либо процесса. Например, загрузки сайта или медиа-файла.

Вращается прелоадер при помощи только CSS3-анимации.

## Модификаторы блока

| Модификатор | Допустимое значение | Способ использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#spinthemes>theme</a> | <code>'simple'</code>, <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href=#spinsize>size</a> | <code>'xs'</code>, <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер прелоадера. Используется только для <a href="#spinthemes">прелоадеров с модификатором</a> <code>theme</code> в значении <code>islands</code>.|
| <a href=#spinvisible>visible</a> | <code>'true'</code> | <code>BEMJSON</code> | Активация прелоадера. |

<a name="spinthemes"></a>

### Модификатор `theme`

Допустимое значение: `'simple'`, `'islands'`.

Способы использования: `BEMJSON`.

Обязательный модификатор, так как блок не имеет нативного состояния контрола.

Пример:

```bemjson
{
    block : 'spin',
    mods : { theme : 'simple', visible : true }
}
```

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 's', visible : true }
}
```

<a name="spinsize"></a>

### Модификатор `size`

Допустимое значение для темы `islands`: `'xs'` `'s'`, `'m'`, `'l'`, `'xl'`.

Способы использования: `BEMJSON`.

Задает размер блоку `spin`.

Пример:

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 'xs', visible : true }
}
```

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 's', visible : true }
}
```

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 'm', visible : true }
}
```


```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 'l', visible : true }
}
```

```bemjson
{
    block : 'spin',
    mods : { theme : 'islands', size : 'xl', visible : true }
}
```
<a name="spinvisible"></a>

### Модификатор `visible`

Допустимое значение: `'true'`.

Способы использования: `BEMJSON`.

Модификатор `visible` в значении `true` задает вращение прелоадера и показывает его на странице.

Отсутствие модификатора останавливает блок и скрывает его со страницы.
