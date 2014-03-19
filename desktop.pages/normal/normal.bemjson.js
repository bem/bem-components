({
    block : 'page',
    title : 'bem-components: normal theme',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_normal.css' },
        { elem : 'js', url : '_normal.js' }
    ],
    content : [
        { tag : 'h2', content : 'Normal theme' },

        {
            block : 'line',
            mods : { size : 's' },
            content : [
                'size s (24px height) ',
                {
                    block : 'input',
                    mods : { theme : 'normal', size : 's', 'has-clear' : true },
                    val : 'value',
                    placeholder : 'placeholder'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 's' },
                    text : 'button'
                },
                ' ',
                {
                    block : 'radio',
                    mods : { theme : 'normal', size : 's', type : 'button' },
                    name : 'radio-sizes-s',
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second' }
                    ],
                    val : 2
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'normal', size : 's', type : 'button' },
                    val : 1,
                    text : 'check'
                },
                ' ',
                {
                    block : 'spin',
                    mods : { theme : 'normal', size : 's', progress : true }
                }
            ]
        },

        { tag : 'br' },

        {
            block : 'line',
            mods : { size : 'm' },
            content : [
                'size m (28px height) ',
                {
                    block : 'input',
                    mods : { theme : 'normal', size : 'm', 'has-clear' : true },
                    val : 'value',
                    placeholder : 'placeholder'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm' },
                    text : 'button'
                },
                ' ',
                {
                    block : 'radio',
                    mods : { theme : 'normal', size : 'm', type : 'button' },
                    name : 'radio-sizes-m',
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second' }
                    ],
                    val : 2
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'normal', size : 'm', type : 'button' },
                    val : 1,
                    text : 'check'
                },
                ' ',
                {
                    block : 'spin',
                    mods : { theme : 'normal', size : 'm', progress : true }
                }
            ]
        },

        { tag : 'br' },

        {
            block : 'line',
            mods : { size : 'l' },
            content : [
                'size l (32px height) ',
                {
                    block : 'input',
                    mods : { theme : 'normal', size : 'l', 'has-clear' : true },
                    val : 'value',
                    placeholder : 'placeholder'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'l' },
                    text : 'button'
                },
                ' ',
                {
                    block : 'radio',
                    mods : { theme : 'normal', size : 'l', type : 'button' },
                    name : 'radio-sizes-l',
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second' }
                    ],
                    val : 2
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'normal', size : 'l', type : 'button' },
                    val : 1,
                    text : 'check'
                },
                ' ',
                {
                    block : 'spin',
                    mods : { theme : 'normal', size : 'l', progress : true }
                }
            ]
        },

        { tag : 'br' },

        {
            block : 'line',
            mods : { size : 'xl' },
            content : [
                'size xl (38px height) ',
                {
                    block : 'input',
                    mods : { theme : 'normal', size : 'xl', 'has-clear' : true },
                    val : 'value',
                    placeholder : 'placeholder'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'xl' },
                    text : 'button'
                },
                ' ',
                {
                    block : 'radio',
                    mods : { theme : 'normal', size : 'xl', type : 'button' },
                    name : 'radio-sizes-xl',
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second' }
                    ],
                    val : 2
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'normal', size : 'xl', type : 'button' },
                    val : 1,
                    text : 'check'
                },
                ' ',
                {
                    block : 'spin',
                    mods : { theme : 'normal', size : 'xl', progress : true }
                }
            ]
        }
    ]
})
