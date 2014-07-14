# radio

Блок `radio` – «радиопереключатель», «радиокнопка». Используется для создания одиночных радиобоксов.

В реализации блока используется функциональность нативного контрола `input` с атрибутом `type="radio"` – `<input name="name" type="radio">`, который скрывается при использовании модификатора `theme`.

В результате применения шаблонов блок `radio` отображается на странице как HTML-тег `<label>` – контейнер, содержащий:

* элемент `radio__box`, содержащий скрытый контрол `input` (элемент `__control`);
* подпись к радиокнопке, если задан BEMJSON-параметр `text`.


## Допустимые атрибуты

Допустимые атрибуты блока задаются в одноименных полях входного BEMJSON-блока:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td><code>name</code></td>
        <td><code>String|Number</code></td>
        <td>Имя радиокнопки. Преобразуется в HTML-атрибут <code>name</code> вложенного блока <code>input</code>.</td>
    </tr>
    <tr>
        <td><code>text</code></td>
        <td><code>String|Number</code></td>
        <td>Подпись, отображаемая для радиокнопки.</td>
    </tr>
    <tr>
        <td><code>val</code></td>
        <td><code>String|Number</code></td>
        <td>Значение, возвращаемое контролом радиопереключателя <code>radio__control</code>, если выбрана текущая радиокнопка. Преобразуется в HTML-атрибут <code>value</code> вложенного блока <code>input</code>.</td>
    </tr>
</table>

## Модификаторы блока

### Темы `theme`

Блок представлен в следующих темах:

 * simple
 * normal

Без указания темы к блоку отображается нативный вид контрола (*default*).

Наглядно видно на примерах ниже:

**default**

```bemjson
{
    block : 'radio',
    name : 'radio-simple',
    text : 'Lonely switch'
}
```

**simple**

```bemjson
{
    block : 'radio',
    mods : { theme : 'simple' },
    name : 'radio-simple',
    text : 'Lonely switch'
}
```

**normal**

```bemjson
{
    block : 'radio',
    mods : { theme : 'normal', size : 'l' },
    name : 'radio-normal',
    text : 'Lonely switch'
}
```

### Размеры радиопереключателя `size`

Обязательный модификатор. Задает размер всем типам радиопереключателей.

Реализован только в теме *normal*.

В зависимости от значения модификатора `type` доступны следующие размеры реализации блока:

<table>
    <tr>
        <th>Размер</th>
        <th>Обычный радиопереключатель</th>
        <th>Кнопочный радиопереключатель (<code>radio_type_button</code>)</th>
    </tr>
    <tr>
        <th>s</th>
        <td>–</td>
        <td>+</td>
    </tr>
    <tr>
        <th>m</th>
        <td>+</td>
        <td>+</td>
    </tr>
    <tr>
        <th>l</th>
        <td>+</td>
        <td>+</td>
    </tr>
    <tr>
        <th>xl</th>
        <td>–</td>
        <td>+</td>
</table>


### Тип радиопереключателя `type`

Модификатор `type` со значением `button` используется для создания кнопочного радиопереключателя – кнопки (блок `button`) с установленным модификатором `button_togglable_radio`.

При этом к блоку `button` примешивается блок `radio`, а контентом кнопки становится `radio__control`.

Кроме того, при установленном модификаторе `radio_type_button` для блока задается HTML-атрибут `role="button"`.

<table>
    <tr>
        <th>Тип</th>
        <th>Пример</th>
    </tr>
    <tr>
        <td>Обычный радиопереключатель</td>
        <td>
            <pre><code>
{
    block : 'radio',
    mods : { theme : 'normal', size : 'l' },
    name : 'radio-normal',
    text : 'Lonely switch'
}
            </code></pre>
        </td>
    <tr>
        <td>Кнопочный радиопереключатель</td>
        <td>
            <pre><code>
{
    block : 'radio',
    mods : {
        theme : 'normal',
        size : 'l',
        type : 'button'
    },
    name : 'radio-normal',
    text : 'Lonely switch2'
}
            </code></pre>
        </td>
    </tr>
</table>


### Неактивен `disabled`

В состоянии «неактивен» радиопереключатель отображается, но недоступен для действий пользователя.

Такой радиопереключатель не будет получать фокус (модификатор `focused`).

При установке модификатора `disabled` для радиопереключателя не будут:

* устанавливаться модификаторы состояния `hovered`, `pressed` и `focused`;
* изменяться значение модификатора `checked`.

```bemjson
{
    block : 'radio',
    mods : { theme : 'normal', size : 'l', disabled : true },
    name : 'radio-normal',
    text : 'Lonely switch'
}
```

### Состояния

#### В фокусе `focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

```bemjson
{
    block : 'radio',
    mods : {
        theme : 'normal',
        size : 'l',
        focused : true
    },
    name : 'radio-normal',
    text : 'Lonely switch'
}
```

#### Выбран `checked`

Модификатор `checked` указывает на то, что радиопереключатель выбран (отмечен).

Модификатор устанавливается по:

* щелчку мыши по блоку (при повторных щелчках модификатор сохраняется);
* нажатию клавиш `Enter` или `Space` (возможность использования клавиши `Enter` зависит от браузера), если радиопереключатель находится в фокусе (модификатор `focused`);
* нажатию клавиш стрелок, если фокус установлен на соседний радиопереключатель в радиогруппе или в блоке, содержащем несколько блоков `radio`.

```bemjson
{
    block : 'radio',
    mods : { theme : 'normal', size : 'l', checked : true },
    name : 'radio-norma',
    text : 'Lonely switch'
}
```

#### Состояния, доступные с модификатором `radio_type_button`

При установленном модификаторе `radio_type_button` к блоку `button` примешивается блок `radio`. Как следствие, для блока с модификатором `radio_type_button` доступны состояния блока `button`:

*  `hovered` – под курсором;
*  `pressed` – кнопка нажата.


## Элементы

### `__box`

Элемент `__box` используется в стандартной реализации блока как контейнер, содержащий контрол радиокнопки (элемент `__control`). В результате BEMHTML-преобразований становится HTML-элементом `<span>`.

### `__control`

Элемент `__control` – контрол радиокнопки. В результате BEMHTML-преобразований становится HTML-элементом `<input>` с атрибутом `type="radio"`. По умолчанию элемент скрыт. В блоке используется только его функциональность.

## Зависимости

Блок `radio` зависит от следующего набора блоков и элементов:

* `i-bem__dom`
* `control`
* `jquery__event`
* `__box`
* `__control`
