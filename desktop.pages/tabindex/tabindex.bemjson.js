({
    block : 'page',
    title : 'bem-components: reversed tabindex with islands theme',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_tabindex.css' },
        { elem : 'js', url : '_tabindex.js' }
    ],
    content : [
        { tag : 'h2', content : 'tabindex testing' },

        {
            block : 'line',
            mods : { size : 'l' },
            content : [
                '↓ ',
                {
                    block : 'link',
                    mods : { theme : 'islands', size : 'l' },
                    tabIndex : 198,
                    content : '198'
                },
                ' ',
                {
                    block : 'input',
                    mods : { theme : 'islands', size : 'l', 'has-clear' : true },
                    val : '197',
                    tabIndex : 197
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'l' },
                    text : '196',
                    tabIndex : 196
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'l' },
                    icon : { block : 'icon', mods : { action : 'download' } },
                    text : '195',
                    tabIndex : 195
                },
                ' | ',
                {
                    block : 'radio-group',
                    mods : { theme : 'islands', size : 'l', type : 'button' },
                    name : 'radio-sizes-l-2',
                    val : 2,
                    options : [
                        { val : 1, text : '192', tabIndex : 192 },
                        { val : 2, text : '191' }
                    ],
                    tabIndex : 190
                },
                ' | ',
                {
                    block : 'radio-group',
                    mods : { theme : 'islands', size : 'l', type : 'button' },
                    name : 'radio-sizes-l-1',
                    val : 2,
                    options : [
                        { val : 1, text : '182', tabIndex : 182 },
                        { val : 2, text : '181', tabIndex : 181 }
                    ],
                    tabIndex : 180
                },
                ' | ',
                {
                    block : 'checkbox-group',
                    mods : { theme : 'islands', size : 'l', type : 'button' },
                    name : 'radio-sizes-s',
                    val : [1, 2],
                    options : [
                        { val : 1, text : '172', tabIndex : 172 },
                        { val : 2, text : '171', tabIndex : 171 }
                    ],
                    tabIndex : 170
                },
                ' | → ',
                {
                    block : 'checkbox-group',
                    mods : { theme : 'islands', size : 'l', type : 'button' },
                    name : 'radio-sizes-s',
                    val : [1, 2],
                    options : [
                        { val : 1, text : '165' },
                        { val : 2, text : '166' }
                    ],
                    tabIndex : 165
                },
                ' | ',
                {
                    block : 'radio',
                    mods : { theme : 'islands', size : 'l', checked : true },
                    val : 1,
                    text : '160',
                    tabIndex : 160
                },
                ' | ',
                {
                    block : 'checkbox',
                    mods : { theme : 'islands', size : 'l', checked : true },
                    val : 1,
                    text : '150',
                    tabIndex : 150
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'islands', size : 'l', checked : true },
                    val : 1,
                    text : '140',
                    tabIndex : 140
                },
                ' | ',
                {
                    block : 'checkbox',
                    mods : { theme : 'islands', size : 'l', type : 'button' },
                    val : 1,
                    text : '130',
                    tabIndex : 130
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'islands', size : 'l', type : 'button' },
                    val : 1,
                    text : '120',
                    tabIndex : 120
                },
                ' | ',
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'islands', size : 'l' },
                    popup : { block : 'popup', mods : { theme : 'islands' }, content : 'popup' },
                    switcher : '115',
                    tabIndex : 115
                },
                ' | ',
                {
                    block : 'select',
                    mods : { mode : 'radio-check', theme : 'islands', size : 'l' },
                    name : 'select',
                    val : 110,
                    options : [
                        { val : 110, text : '110' },
                        { val : 111, text : '111' }
                    ],
                    text : '110',
                    tabIndex : 110
                },
                ' ←ѳ'
            ]
        },

        { tag : 'br' },

        {
            block : 'line',
            content : [
                '→ ',
                {
                    block : 'control-group',
                    tag : 'span',
                    content : [
                        {
                            block : 'input',
                            mods : { theme : 'islands', size : 'l' },
                            placeholder : '201',
                            tabIndex : 201
                        },
                        {
                            block : 'attach',
                            name : 'failo',
                            mods : { theme : 'islands', size : 'l' },
                            button : '202',
                            noFileText : '×',
                            tabIndex : 202
                        },
                        {
                            block : 'select',
                            mods : { mode : 'radio', theme : 'islands', size : 'l' },
                            name : 'currency',
                            val : 'euro',
                            options : [
                                { val : 'usd', text : '$' },
                                { val : 'euro', text : '€' }
                            ],
                            tabIndex : 203
                        }
                    ]
                },
                ' ↓ '
            ]
        },

        { tag : 'br' },

        {
            block : 'line',
            mods : { size : 'l' },
            content : [
                '→ ',
                {
                    block : 'link',
                    mods : { theme : 'islands', size : 'l' },
                    content : 'link'
                },
                ' ',
                {
                    block : 'input',
                    mods : { theme : 'islands', size : 'l', 'has-clear' : true },
                    val : 'value',
                    placeholder : 'placeholder'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'l' },
                    text : 'button'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'l' },
                    text : 'button',
                    icon : { block : 'icon', mods : { action : 'download' } }
                },
                ' ',
                {
                    block : 'radio-group',
                    mods : { theme : 'islands', size : 'l', type : 'button' },
                    name : 'radio-sizes-xl',
                    val : 2,
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second' }
                    ]
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'islands', size : 'l', type : 'button' },
                    val : 1,
                    text : 'check'
                },
                ' ',
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'islands', size : 'l' },
                    switcher : 'dropdown',
                    popup : { block : 'popup', mods : { theme : 'islands' }, content : 'popup' }
                },
                ' ',
                {
                    block : 'select',
                    mods : { mode : 'radio-check', theme : 'islands', size : 'l' },
                    name : 'select',
                    text : 'first',
                    val : 1,
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second' }
                    ]
                },
                ' →ѳ'
            ]
        }
    ]
})
