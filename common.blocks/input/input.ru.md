# input  

Блок **input** служит для создания различных типов текстовых полей:

* текстовая область;
* поле с паролем;
* поисковая форма. 

В MSIE8 и ниже поле ввода деградирует до нативного контрола `<input атрибуты>`, поле ввода с текстовой областью станет нативной текстовой областью `<textarea атрибуты>`.

## Допустимые атрибуты блока
Допустимые атрибуты блока задаются в одноименных полях входного BEMJSON блока:

* name — имя для идентификации контрола обработчиком формы. Если name явно не задан, HTML-атрибут name автоматически сформируется с пустым значением.
* value — значение, отправляемое на сервер. По умолчанию содержит пустое значение.
* placeholder – замещающийся текст. По умолчанию содержит пустое значение.
* id — уникальный идентификатор блока. По умолчанию генерируется случайным образом, если явно не задан в BEMJSON.

## Модификаторы блока

### Темы блока
`_theme`

Блок представлен в следующих темах:

 * simple   
 * normal  

Без указания темы к блоку применяются значения по умолчанию (*default*): 
 
* Тип поля ввода: простое текстовое  
* Ширина: 100%  
* Тема оформления: нативное отображение поля ввода браузером.    
* Размеры текстовой области: `cols:10`, `rows:10`.

Наглядно видно на примерах ниже:

#### default
````bemjson
    {
        block : 'input',
        val : 'value',
        placeholder : 'default'
    }
````
#### simple

````bemjson
    {
        block : 'input',
        mods : { theme : 'simple' },
        val : 'value',
        placeholder : 'simple'
    }
```` 
#### normal

````bemjson
    {
        block : 'input',
        mods : { theme : 'normal' },
        val : 'value',
        placeholder : 'normal'
    }
```` 

### Типы блока 
`_type`

Блок представлен следующими типами: 

* текстовая область (`_textarea`)   
* поле с паролем (`_password`)
* поисковая форма (`_search`) 

Реализован во всех темах блока:

<table>
  <tr>
    <th>Тип / Тема</th>
    <th>default</th>
    <th>simple</th>
    <th>normal</th>
  </tr>
  <tr>
    <td> `_textarea`</td>
    <td>
    {
        block : 'input',
        mods : { type : 'textarea' },
        placeholder : 'default'
    }
    </td>
    <td>
    {
        block : 'input',
        mods : { theme : 'simple', type : 'textarea' },
        placeholder : 'simple'
    }
    </td>
    <td>       
    {
        block : 'input',
        mods : { theme : 'normal', type : 'textarea' },
        placeholder : 'normal'
    }
  </td>
  </tr>
  <tr>
    <td> `_password`</td>
    <td>
    {
        block : 'input',
        placeholder : 'default',
        mods : { type : 'password' }
    }
    </td>
    <td>
    {
        block : 'input',
        mods : { theme : 'simple', type : 'password' },
        placeholder : 'simple'
    }
    </td>
    <td>       
    {
        block : 'input',
        mods : { theme : 'normal', type : 'password' },
        placeholder : 'normal'
    }
  </td>
  </tr>
  <tr>
    <td> `_search`</td>
    <td>
    {
        block : 'input',
        mods : { type : 'search' },
        placeholder : 'default'
    }
    </td>
    <td>
    {
        block : 'input',
        mods : { theme : 'simple', type : 'search' },
        placeholder : 'simple'
    }
    </td>
    <td>       
    {
        block : 'input',
        mods : { theme : 'normal', type : 'search' },
        placeholder : 'normal'
    }
  </td>
  </tr>
</table>

### Состония блока 

#### Не активен `_disabled_true`
   
В состоянии блока "не активен" поле ввода и все его элементы становятся недоступными для действий пользователя. 

Если модификатор `disabled` не выбран, инпут по умолчанию активен.

Реализован во всех темах блока.

````bemjson
    {
        block : 'input',
        mods : { theme : 'normal', disabled : true },
        val : 'disabled',
        placeholder : 'normal'
    }
````
    
#### В фокусе `_focused_true`

В состоянии блока `focused` со значением `true` поле ввода всегда находится в фокусе.

Реализован во всех темах блока.

````
    {
        block : 'input',
        mods : { theme : 'normal', focused : true },
        val : 'value',
        placeholder : 'normal'
    } 
````

### Очистка содержимого
`_has-clear`

Модификатор `_has-clear` в значении `true` отображает в инпуте крестик очистки содержимого (элемент `__clear`).

Реализован во всех темах блока:

<table>
  <tr>
    <th>default</th>
    <th>simple</th>
    <th>normal</th>
  </tr>
  <tr>
    <td>
    {
        block : 'input',
        mods : { 'has-claer' : true },
        placeholder : 'default'
    } 
    </td>
    <td>
    {
        block : 'input',
        mods : { theme : 'simple', 'has-claer' : true },
        placeholder : 'simple'
    }
    </td>
    <td>       
    {
        block : 'input',
        mods : { theme : 'normal', 'has-claer' : true },
        placeholder : 'normal'
    }
  </td>
  </tr>
</table>

---
**NB** Модификатор `has-clear` не используется для типа инпута – поисковое поле (`_search`) в теме `simple`. 

---

### Метка над полем ввода
`_has-lable`

Модификатор `_has-lable` в значении `true` отображает в метку над полем ввода (элемент `__lable`).

Реализован во всех темах блока:

<table>
  <tr>
    <th>default</th>
    <th>simple</th>
    <th>normal</th>
  </tr>
  <tr>
    <td>
    {
        block : 'input',
        mods : { 'has-claer' : true },
        placeholder : 'default'
    } 
    </td>
    <td>
    {
        block : 'input',
        mods : { theme : 'simple', 'has-lable' : true },
        placeholder : 'simple'
    }
    </td>
    <td>       
    {
        block : 'input',
        mods : { theme : 'normal', 'has-lable' true },
        placeholder : 'normal'
    }
  </td>
  </tr>
</table>


## Элементы блока

Визуально представлен следующими элементами:

### __box

Обязательный элемент.  

Элемент, рисующий поля ввода (нативный инпут скрыт)

### __clear

Кнопка очистки содержимого инпута ("крестик").

Если применить модификатор блока `has-clear` со значением `fals`, то "крестик" при вводе текста отображаться не будет.

### __control

Обязательный элемент.

Добавляется в `content` блока во входных данных. BEMHTML-шаблоном преобразуется в нативный контрол `<input атрибуты>`. По умолчанию подключает элемент блока clear – кнопку очистки поля ввода (крестик).

### __label

Метка над полем ввода.

Элемент добавляет метку полю ввода (преобразуется в HTML-тэг `<label>`). Связь метки с тэгом `<input>` устанавливается с помощью идентификатора `id`, который может генерироваться по умолчанию случайным образом. При щелчке кнопкой мыши на метку в поле ввода будет установлен фокус.

````bemjson
    {
        block : 'input',
        mods : { theme : 'normal', 'has-clear' : true, 'has-label' : true },
        label : 'label'
    } 
