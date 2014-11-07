# image

Блок `image` используется для вставки картинок.

В HTML представлен тегом `<img>`.

```bemjson
{
    block : 'image',
    url : 'http://bem.info/m/_/IvuRSFeBStMXdBhBrBvKagSd5sE.svg',
    width : 100,
    height : 100,
    alt : 'BEM',
    title : 'Find us on bem.info'
}
```

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>title</td>
        <td>
            <code>String</code>
        </td>
        <td>Задает имя картинки.</td>
    </tr>
    <tr>
        <td>alt</td>
        <td>
            <code>String</code></td>
        <td>Обязательное поле. Устанавливает альтернативный текст для изображений. Такой текст позволяет получить текстовую информацию о картинке при отключенной загрузке изображений в браузере.
            <br>Блок распознается программами чтения с экрана.</td>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>Адрес ссылки, по которой подгружается картинка.</td>
    </tr>
    <tr>
        <td>width, height</td>
        <td>
            <code>Number</code>
        </td>
        <td>Значения, которые будут переданы в одноименные атрибуты картинки.</td>
    </tr>
</table>
