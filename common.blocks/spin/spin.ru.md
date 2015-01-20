# spin

Используется для индикации выполнения какого-либо процесса.

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значение | Способ использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#spinvisible">visible</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Активация индикатора. |
| <a href="#spintheme">theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href="#spinsize">size</a> | <code>'xs'</code>, <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер индикатора. Используется только с <a href="#spintheme">модификатором theme в значении islands</a>. |

## Описание блока

Блок `spin` используется для создания индикатора выполнения какого-либо процесса.

### Модификаторы блока

<a name="spinvisible"></a>

#### Модификатор `visible`

Допустимое значение: `true`.

Способ использования: `BEMJSON`, `JS`.

Делает индикатор видимым.

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'm', visible : true }
}
```

<a name="spintheme"></a>
#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Отвечает за стилевое оформление блока.

Необходимо использовать с модификатором <a href="#spinsize">size</a>.

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'm', visible : true }
}
```

<a name="spinsize"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'xs'`, `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Задает размер блоку.

Необходимо использовать с модификатором <a href="#spintheme">theme</a> в значении `islands`.

**xs**

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'xs', visible : true }
}
```

**s**

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 's', visible : true }
}
```

**m**

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'm', visible : true }
}
```

**l**

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'l', visible : true }
}
```

**xl**

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'xl', visible : true }
}
```
