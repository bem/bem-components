# input

Блок `input` служит для создания различных типов текстовых полей:

* поле ввода (значение по умолчанию);
* текстовая область;
* поле для ввода пароля;
* поисковая форма.


## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#theme>theme</a> | <code>'simple', 'islands' </code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер текстового поля. Используется только для <a href="#theme">текстового поля с модификатором</a> <code>theme</code> в значении <code>islands</code>.|
| <a href=#type>type</a> | <code>'textarea'</code>, <code>'password'</code>, <code>'search'</code>  | <code>BEMJSON</code> | Типы текстовых полей. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Блок в фокусе. |
| <a href=#has-clear>has-clear</a> | <code>true</code> | <code></code> | |

### Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

| Поле | Тип | Описание |
| ---- | --- | -------- |
| val| <code>String</code> | Определяет значение (по умолчанию пустое), которое будет отправлено на сервер или получено с помощью клиентских скриптов. На сервер отправляется пара «имя=значение», где имя задается ключом <code>name</code>, а значение — ключом <code>val</code>.|
| name | <code>String</code> | Имя поля ввода, предназначено для того, чтобы обработчик формы мог его идентифицировать. Преобразуется в HTML-атрибут <code>name</code> вложенного блока <code>input</code>. |
| placeholder | <code>String</code> | Подсказка в поле ввода. |
| id | <code>String</code> | Уникальный идентификатор блока. Задается вручную. Преобразуется в HTML-атрибут <code>id</code> вложенного блока <code>input</code>. |
| maxLength | <code>String</code> | Определяет максимальное количество вводимых символов. |
| tabIndex | <code>String</code> | Определяет последовательность перехода между полями ввода при нажатии на `Tab`. |

При необходимости дополнительные HTML-атрибуты блока могут быть заданы в зарезервированном поле `attrs` в BEMJSON.

## Обзор блока

### Модификаторы блока

<a name="theme"></a>

#### Модификатор `theme`

Допустимое значение: `simple`, `islands`.

Способы использования:

Без указания модификатора `theme` отображается [нативный](#native) вид контрола.

Пример:

<a name="native"></a>

```bemjson
{
    block : 'input',
    placeholder : 'default'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'simple' },
    placeholder : 'simple'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'islands'
}
```

<a name="size"></a>

#### Модификатор `size`

Допустимое значение для темы `islands`: `'s'`, `'m'`, `'l'`, `'xl'`.

Способы использования: `BEMJSON`.

Задает размер всем типам текстовых полей.

Пример:

```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size: 's' },
    placeholder : 'Small'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'Medium'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size: 'l' },
    placeholder : 'Large'
}
```

```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size: 'xl' },
    placeholder : 'X-Large'
}
```
<a name="type"></a>

#### Модификатор `type`

Допустимое значение: `'textarea'`, `'password'`, `'search'`

Способ использования:

Без указания типа поля блок `input` по умолчанию получает значение `<input type="text"/>`.

Пример:

```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', type : 'textarea' },
    placeholder : 'Text area'
}
```


```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size: 'm', type : 'password' },
    placeholder : 'Password field'
}
```


```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', type : 'search' },
    placeholder : 'Search form'
}
```
<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования:

В состоянии «неактивен» блок виден, но недоступен для действий пользователя. Такой блок не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами. В большинстве случаев к неактивному блоку применяются дополнительные стили, чтобы выделить его на странице.

Пример:

```bemjson
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', disabled : true },
    val : 'Неактивно'
}
```
<a name="focused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования:

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

<a name="has-clear"></a>

#### Модификатор `has-clear`

Допустимое значение: `true`.

Способы использования:

Модификатор `has-clear` в значении `true` появляется автоматически, если в текстовое поле введены данные. Показывает в инпуте крестик для очистки содержимого (элемент [`clear`](#clear_elem)).

## Элементы блока

Визуально представлен следующими элементами:

<a name="clear_elem"></a>
### __clear

Кнопка очистки содержимого инпута.

### __box

Вспомогательный скрытый элемент. Добавляется блоку на уровне шаблонизатора.

Элемент, группирующий нативный контрол `<input>` и дополнительные элементы (например, `clear`).

### __control

Вспомогательный скрытый элемент. Добавляется блоку на уровне шаблонизатора.
