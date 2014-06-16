# input

Блок `input` служит для создания различных типов текстовых полей:

* поле ввода (значение по умолчанию);
* текстовая область;
* поле с паролем;
* поисковая форма.

## Допустимые атрибуты блока
Допустимые атрибуты блока задаются в одноименных полях входного BEMJSON блока:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>val</td>
        <td>
            <code>String</code>
        </td>
        <td>Значение, отправляемое на сервер. По умолчанию пустое.</td>
    </tr>
    <tr>
        <td>placeholder</td>
        <td>
            <code>String</code>
        </td>
        <td>Подсказка в поле ввода.</td>
    </tr>
    <tr>
        <td>id</td>
        <td>
            <code>String</code>
        </td>
        <td>Уникальный идентификатор блока. По умолчанию генерируется случайным образом, если явно не задан в BEMJSON.</td>
    </tr>
    <tr>
        <td>label</td>
        <td>
            <code>String</code>
        </td>
        <td>Метка над полем ввода.</td>
    </tr>
</table>


Другие допустимые атрибуты блока могут быть заданы в зарезервированном поле `attrs` в BEMJSON.

## Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * normal

Без указания модификатора темы отображается нативный вид контрола (*default*).

Наглядно видно на примерах ниже:

**default**

```bemjson
{
    block : 'input',
    placeholder : 'default'
}
```
**simple**

```bemjson
{
    block : 'input',
    mods : { theme : 'simple' },
    placeholder : 'simple'
}
```
**normal**

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size: 'm' },
    placeholder : 'normal'
}
```

### Размеры `_size`

Задает размер всем типам текстовых полей. Обязательный модификатор.

Реализован только в теме *normal*.

Доступно четыре размера реализации блока: **s**, **m**, **l**, **xl**.

<table>
    <tr>
        <th>Размер</th>
        <th>Размер<br>шрифта</th>
        <th>Высота<br>строки</th>
        <th>Пример</th>
    </tr>
    <tr>
        <th>S</th>
        <td>13px</td>
        <td>24px</td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'normal', size: 's' },
    placeholder : 'Small'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>M</th>
        <td>13px</td>
        <td>28px</td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'normal', size: 'm' },
    placeholder : 'Medium'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>L</th>
        <td>15px</td>
        <td>32px</td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'normal', size: 'l' },
    placeholder : 'Large'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>XL</th>
        <td>18px</td>
        <td>38px</td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'normal', size: 'xl' },
    placeholder : 'X-Large'
}
            </code></pre>
        </td>
    </tr>
</table>

### Типы `_type`

Блок представлен следующими типами:

* текстовая область (`_textarea`)
* поле с паролем (`_password`)
* поисковая форма (`_search`)

Без указания типа поля блок `input` по умолчанию получает значение `<input type="text"/>`.

<table>
    <tr>
        <th>Тип</th>
        <th>Реализация</th>
    </tr>
    <tr>
        <td>
            <code>_textarea</code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', type : 'textarea' },
    placeholder : 'Тексторвая область'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>_password</code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'normal', size: 'm', type : 'password' },
    placeholder : 'Поле с паролем'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>_search</code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', type : 'search' },
    placeholder : 'Поисковая форма'
}
            </code></pre>
        </td>
    </tr>
</table>

### Состояния

#### Неактивен `_disabled`

В состоянии блока «неактивен» поле ввода и все его элементы становятся недоступными для действий пользователя.

Если модификатор `_disabled` не установлен, инпут по умолчанию активен.

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', disabled : true },
    val : 'Неактивно'
}
```

#### В фокусе `_focused`

В состоянии блока `_focused` со значением `true` поле ввода находится в фокусе.

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', focused : true },
    val : 'В фокусе'
}
```

### Очистка содержимого `_has-clear`

Модификатор `_has-clear` в значении `_true` отображает в инпуте крестик для очистки содержимого (элемент `__clear`).

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', 'has-clear' : true },
    placeholder : 'Добавлен крестик для очистки содержимого'
}
```

### Метка над полем ввода `_has-label`

Модификатор `_has-label` в значении `_true` указывает на наличие метки над полем ввода (элемент `__label`).

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', 'has-label' : true },
    label : 'Label',
    placeholder : 'Метка над полем ввода'
}
```

## Элементы блока

Визуально представлен следующими элементами:

### __box

Обязательный элемент.

Элемент, рисующий поля ввода (поля нативного инпута скрыты).

### __clear

Кнопка очистки содержимого инпута («крестик»).

По умолчанию модификатор `_has-label` имеет значение `_false`, при котором крестик не отображается. Для отображения крестика нужно установить модификатор в значение `_true`.

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size: 'm', 'has-clear' : true },
    placeholder : 'Добавлен крестик для очистки содержимого'
}
```

### __control

Обязательный элемент.

BEMHTML- или BH-шаблоном преобразуется в нативный контрол `<input>`.

### __label

Метка над полем ввода.
Элемент добавляет метку с тегом `<label>` над полем ввода. Связь метки с тэгом `<input>` устанавливается с помощью идентификатора `id`, который может генерироваться автоматически.
При щелчке кнопкой мыши на метку в поле ввода будет установлен фокус.

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', size : 'm', 'has-label' : true },
    label : 'Метка над полем ввода'
}
```

## Зависимости блока

* `base-control`
* `i-bem__dom`
