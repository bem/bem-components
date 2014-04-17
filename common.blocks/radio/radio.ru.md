# radio  

Блок **radio** – «радио-группа», состоящая из набора зависимых переключателей «радио-кнопок». Служит для выбора единственного варианта из списка. В реализации блока используется функциональность нативного контрола радиобокс, сам контрол скрыт.





# Модификаторы блока


## _theme

Может использоваться без модификатора `_theme`. 

````
    {
        block : 'radio',
        name : 'default1',
        options : [
            { val : 1, text : 'first' },
            { val : 2, text : 'second' },
            { val : 3, text : 'third', disabled : true }
        ],
        val : 2
    }
````

````
    {
        block : 'radio',
        name : 'default2',
        mods : { disabled : true },
        options : [
            { val : 1, text : 'first' },
            { val : 2, text : 'second' }
        ],
        val : 2
    }
````

### simple

````
    {
        block : 'radio',
        name : 'simple1',
        mods : { theme : 'simple' },
        options : [
            { val : 1, text : 'first' },
            { val : 2, text : 'second' },
            { val : 3, text : 'third', disabled : true }
        ],
        val : 2
    }
````

````
    {
        block : 'radio',
        name : 'simple2',
        mods : { theme : 'simple', disabled : true },
        options : [
            { val : 1, text : 'first' },
            { val : 2, text : 'second' }
        ],
        val : 2
    }
````

### normal

````
    {
        block : 'radio',
        name : 'normal1',
        mods : { theme : 'normal', size : 'm' },
        options : [
            { val : 1, text : 'first' },
            { val : 2, text : 'second' },
            { val : 3, text : 'third', disabled : true }
        ],
        val : 2
    }
````






        { tag : 'h3', content : 'button' },
        { tag : 'p', content : {
            block : 'radio',
            name : 'simple-button1',
            mods : { theme : 'simple', type : 'button' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true }
            ],
            val : 2
        } },
        { tag : 'p', content : {
            block : 'radio',
            name : 'simple-button2',
            mods : { theme : 'simple', type : 'button', disabled : true },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ],
            val : 2
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal' },
        { tag : 'p', content : {
            
            
            
        { tag : 'p', content : {
            block : 'radio',
            name : 'normal2',
            mods : { theme : 'normal', size : 'm', disabled : true },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ],
            val : 2
        } },

        { tag : 'h3', content : 'size' },
        { tag : 'p', content : {
            block : 'radio',
            name : 'normal-size1',
            mods : { theme : 'normal', size : 'm' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ],
            val : 2
        } },
        { tag : 'p', content : {
            block : 'radio',
            name : 'normal-size2',
            mods : { theme : 'normal', size : 'l' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ],
            val : 2
        } },

        { tag : 'h3', content : 'button' },
        { tag : 'p', content : {
            block : 'radio',
            name : 'normal-button1',
            mods : { theme : 'normal', size : 'm', type : 'button' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true }
            ],
            val : 2
        } },
        { tag : 'p', content : {
            block : 'radio',
            name : 'normal-button2',
            mods : { theme : 'normal', size : 'm', type : 'button', disabled : true },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ],
            val : 2
        } }
    ]
});







## Block Modifiers


## __theme


### simple

````
    {
        block : 'spin',
        mods : { theme : 'simple', size : 's', progress : true }
    }
````

### nornal



````       
    {
        block : 'spin',
        mods : { theme : 'normal', size : 's', progress : true }
    }
````

## __size

`{ size : 's' }`

There are five sizes available: **xs**, **s**, **m**, **l**, **xl**.

<table>
  <tr>
    <th>Theme/Size</th>
    <th>simple</th>
    <th>normal</th>
  </tr>
  <tr>
    <td>xs</td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'simple', size : 'xs', progress : true }
    }
</td>
    <td>       
    {
        block : 'spin',
        mods : { theme : 'normal', size : 'xs', progress : true }
    }
</td>
  </tr>
  <tr>
    <td>s</td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'simple', size : 's', progress : true }
    }
    </td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'normal', size : 's', progress : true }
    }
    </td>
  </tr>
  <tr>
    <td>m</td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'simple', size : 'm', progress : true }
    }
    </td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'normal', size : 'm', progress : true }
    }
    </td>
  </tr>
  <tr>
    <td>l</td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'simple', size : 'l', progress : true }
    }
    </td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'normal', size : 'l', progress : true }
    }
    </td>
  </tr>
  <tr>
    <td>xl</td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'simple', size : 'xl', progress : true }
    }
    </td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'normal', size : 'xl', progress : true }
    }
    </td>
  </tr>

</table>

## __progress

The `{ progress : true }` modifier activates the spin. The **spin** block rotates in visible state.

The `{ progress : false }` modifies paused rotation process. The `false` value is used when a **spin** block is invisible.