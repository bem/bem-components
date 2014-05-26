# input

Блок **input** служит для создания различных типов текстовых полей:

* текстовая область;
* поле с паролем;
* поисковая форма.

В MSIE8 и ниже поле ввода деградирует до нативного контрола `<input атрибуты>`, поле ввода с текстовой областью станет нативной текстовой областью `<textarea атрибуты>`.

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
        <td>`string`</td>
        <td>Значение, отправляемое на сервер. По умолчанию содержит пустое значение.</td>
    </tr>
    <tr>
        <td>placeholder</td>
        <td>`string`</td>
        <td>Замещающийся текст. По умолчанию содержит пустое значение.
    </tr>
    <tr>
        <td>id</td>
        <td>`string`</td>
        <td>Уникальный идентификатор блока. По умолчанию генерируется случайным образом, если явно не задан в BEMJSON.
    </tr>
    <tr>
        <td>label</td>
        <td>`string`</td>
        <td>Метка над полем ввода.
    </tr>
</table>


Допустимые атрибуты блока, которые задаются в зарезервированном поле `attrs` в BEMJSON:

* [name](http://htmlbook.ru/html/a/name) (_common_)
* [tabindex](http://htmlbook.ru/html/a/tabindex) (_common_)
* [spellcheck](http://htmlbook.ru/html/attr/spellcheck) (_common_)
* [accesskey](http://htmlbook.ru/html/a/accesskey) (_common_)
* [rows](http://htmlbook.ru/html/frameset/rows) (`_textarea`)
* [cols](http://htmlbook.ru/html/textarea/cols) (`_textarea`)
* [readonly](http://htmlbook.ru/html/textarea/readonly) (`_textarea`)
* [wrap](http://htmlbook.ru/html/textarea/wrap) (`_textarea`)
* [maxlength](http://htmlbook.ru/html/input/maxlength) (`_textarea`)

_В скобках указано соответствие атрибута типу инпута._

## Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * normal

Без указания модификатора темы отображается состояние кастомного блока (*default*):

* Тип поля ввода: простое текстовое
* Ширина: 100%
* Тема оформления: нативное отображение поля ввода браузером.
* Размеры текстовой области: `cols:10`, `rows:10`.

Наглядно видно на примерах ниже:

#### default
```bemjson
{
    block : 'input',
    placeholder : 'default'
}
```
#### simple

```bemjson
{
    block : 'input',
    mods : { theme : 'simple' },
    placeholder : 'simple'
}
```
#### normal

```bemjson
{
    block : 'input',
    mods : { theme : 'normal' },
    placeholder : 'normal'
}
```

### Типы `_type`

Блок представлен следующими типами:

* текстовая область (`_textarea`)
* поле с паролем (`_password`)
* поисковая форма (`_search`)

Реализован в темах `simple` и `normal`.

<table>
    <tr>
        <th>Тип / Реализация</th>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td>`_textarea`</td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { type : 'textarea' },
    placeholder : 'default'
}
            </pre></code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'simple', type : 'textarea' },
    placeholder : 'simple'
}
            </pre></code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'normal', type : 'textarea' },
    placeholder : 'normal'
}
            </pre></code>
        </td>
    </tr>
    <tr>
        <td> `_password`</td>
        <td>
            <pre><code>
{
    block : 'input',
    placeholder : 'default',
    mods : { type : 'password' }
}
            </pre></code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'simple', type : 'password' },
    placeholder : 'simple'
}
            </pre></code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'normal', type : 'password' },
    placeholder : 'normal'
}
            </pre></code>
        </td>
    </tr>
    <tr>
        <td> `_search`</td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { type : 'search' },
    placeholder : 'default'
}
            </pre></code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'simple', type : 'search' },
    placeholder : 'simple'
}
            </pre></code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'normal', type : 'search' },
    placeholder : 'normal'
}
            </pre></code>
        </td>
    </tr>
</table>

### Состояния

#### Не активен `_disabled`

В состоянии блока "не активен" поле ввода и все его элементы становятся недоступными для действий пользователя.

Если модификатор `disabled` не выбран, инпут по умолчанию активен.

Реализован в темах `simple` и `normal`.

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', disabled : true },
    val : 'disabled'
}
```

#### В фокусе `_focused`

В состоянии блока `_focused` со значением `true` поле ввода находится в фокусе.

Реализован в темах `simple` и `normal`.

```
{
    block : 'input',
    mods : { theme : 'normal', focused : true },
    val : 'focused'
}
```

### Очистка содержимого `_has-clear`

Модификатор `_has-clear` в значении `true` отображает в инпуте крестик для очистки содержимого (элемент `__clear`).

Реализован в темах `simple` и `normal`.

<table>
    <tr>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { 'has-clear' : true },
    placeholder : 'default'
}
            </pre></code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'simple', 'has-clear' : true },
    placeholder : 'simple'
}
            </pre></code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'normal', 'has-clear' : true },
    placeholder : 'normal'
}
            </pre></code>
        </td>
    </tr>
</table>

---
**NB** Модификатор `has-clear` не используется для типа инпута – поисковое поле (`_search`) в теме *simple*.

---

### Метка над полем ввода `_has-label`

Модификатор `_has-label` в значении `true` отображает в метку над полем ввода (элемент `__label`).

Реализован в темах `simple` и `normal`.

<table>
    <tr>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { 'has-clear' : true },
    label : 'Label',
    placeholder : 'default'
}
            </pre></code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'simple', 'has-label' : true },
    label : 'Label',
    placeholder : 'simple'
}
            </pre></code>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { theme : 'normal', 'has-label' : true },
    label : 'Label',
    placeholder : 'normal'
}
            </pre></code>
        </td>
    </tr>
</table>

## Элементы блока

Визуально представлен следующими элементами:

### __box

Обязательный элемент.

Элемент, рисующий поля ввода (поля нативного инпута скрыты).

### __clear

Кнопка очистки содержимого инпута ("крестик").

Если применить модификатор блока `has-clear` со значением `false`, то "крестик" при вводе текста отображаться не будет.

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', 'has-clear' : true },
    label : 'label'
}
```

### __control

Обязательный элемент.

BEMHTML- или BH-шаблоном преобразуется в нативный контрол `<input атрибуты>`.

### __label

Метка над полем ввода.

Элемент добавляет метку полю ввода (преобразуется в HTML-тэг `<label>`). Связь метки с тэгом `<input>` устанавливается с помощью идентификатора `id`, который может генерироваться по умолчанию случайным образом. При щелчке кнопкой мыши на метку в поле ввода будет установлен фокус.

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', 'has-label' : true },
    label : 'label'
}
```

## Зависимости блока

Блок `input` зависит от блока `base-control`, предоставляющего общий API для контролов, а также от блока `i-bem__dom`.
