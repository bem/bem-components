# attach

Используется для загрузки файла, предназначенного для отправки на сервер.

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Блок в фокусе. |
| <a href=#themes>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#button>button</a> | <code>String</code>, <code>BEMJSON</code> | Внешний вид кнопки для выбора файла. |
| <a href=#nofiletext>noFileText</a> | <code>String</code> | Текст сообщения, когда файл не выбран. |

## Обзор блока

По умолчанию блок `attach` визуально представлен:

* кнопкой ([button](../button/button.ru.md)), вызывающей системное окно загрузки файла;
* текстовым сообщением.

После загрузки файла отображаются:

* иконка файла (блок [icon](../icon/icon.ru.md));
* имя файла (элемент `text`);
* крестик для отмены (элемент `clear`).

Реализация блока не позволяет:

* прикреплять несколько файлов;
* перетаскивать элементы (drag-and-drop).

### Модификаторы блока

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```bemjson
{
    block : 'attach',
    mods : { theme : 'islands', disabled : true },
    button : 'Выберите файл',
    noFileText : 'файл не выбран'
}
```

<a name="focused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `focused` отвечает за наличие фокуса на блоке.

```bemjson
{
    block : 'attach',
    mods : { theme : 'islands', focused : true },
    button : 'Выберите файл',
    noFileText : 'файл не выбран'
}
```

<a name="themes"></a>

#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Без указания модификатора `theme` отображается нативный вид контрола.

```bemjson
{
    block : 'attach',
    mods : { theme : 'islands' },
    button : 'Выберите файл',
    noFileText : 'файл не выбран'
}
```

### Специализированные поля блока

<a name="button"></a>

#### Поле `button`

Определяет внешний вид кнопки для выбора файла:

* задает текст кнопки

```bemjson
{
    block : 'attach',
    mods : { theme : 'islands' },
    button : 'Выберите файл'
}
```
* задает внешний вид и тип кнопки

```bemjson
{
    block : 'attach',
    mods : { theme : 'islands' },
    button : {
        block : 'button',
        mods : { theme : 'islands', size : 'm' },
        icon : {
            block : 'icon',
            mods : { action : 'download' }
        },
        text: 'Выберите файл'
    }
}
```

<a name="nofiletext"></a>

#### Поле `noFileText`

Определяет текст сообщения, когда файл не выбран.

```bemjson
{
    block : 'attach',
    mods : { theme : 'islands' },
    button : 'Выберите файл',
    noFileText : 'файл не выбран'
}
```
