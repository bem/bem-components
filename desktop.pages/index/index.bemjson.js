({
    block : 'page',
    title : 'bem-components',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_index.css', ie : false },
        { elem : 'css', url : '_index', ie : true },
        { elem : 'js', url : '_index.js' },
    ],
    content : {
        tag : 'form',
        attrs : { action : 'http://example.com' },
        content : [
            [
                'Link',
                {
                    block : 'link',
                    url : '.',
                    title : 'simple link',
                    target : '_blank',
                    content : 'default link'
                },
                {
                    block : 'link',
                    mods : { pseudo : true },
                    url : '.',
                    title : 'pseudo link',
                    content : 'pseudo link'
                }
            ],
            [
                'Attach',
                { block : 'attach', buttonText : 'file', noFileText : 'no file selected' },
                {
                    block : 'attach',
                    button : { block : 'button', icon : { elem : 'icon' } },
                    noFileText : 'no file selected'
                }
            ],
            [
                'Button',
                { block : 'button', text : 'default' },
                { block : 'button', text : 'with icon', icon : { elem : 'icon' } },
                { block : 'button', icon : { elem : 'icon' } },
                { block : 'button', mods : { 'type' : 'link' }, url : '#', text : 'link' }
            ],
            [
                'Checkbox',
                [
                    {
                        block : 'checkbox',
                        name : 'r1',
                        val : 1,
                        text : 'label1'
                    },
                    ' ',
                    {
                        block : 'checkbox',
                        name : 'r1',
                        mods : { checked : true },
                        val : 2,
                        text : 'label2'
                    }
                ],
                [
                    {
                        block : 'checkbox',
                        mods : { type : 'button' },
                        name : 'r2',
                        val : 1,
                        text : 'label1'
                    },
                    ' ',
                    {
                        block : 'checkbox',
                        mods : { type : 'button', checked : true },
                        name : 'r2',
                        val : 2,
                        text : 'label2'
                    }
                ]
            ],
            [
                'Input',
                {
                    block : 'input',
                    name : 'name0',
                    val : 'value0',
                    placeholder : 'hint0'
                },
                {
                    block : 'input',
                    mods : { theme : 'normal', size : 'm' },
                    name : 'name1',
                    val : 'value1',
                    placeholder : 'hint1'
                },
                {
                    block : 'input',
                    mods : { theme : 'normal', size : 'm', 'has-clear' : true },
                    name : 'name2',
                    val : 'value2',
                    placeholder : 'hint2'
                }
            ],
            [
                'Radio',
                {
                    block : 'radio',
                    name : 'r3',
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second' },
                        { val : 3, text : 'third' }
                    ],
                    val : 3
                },
                {
                    block : 'radio',
                    js : { id : 'r4' },
                    name : 'r4',
                    mods : { type : 'button' },
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second' }
                    ],
                    val : 2
                }
            ],
            [
                'Search form',
                [
                    {
                        block : 'input',
                        mods : { 'has-clear' : true, 'has-hint' : true },
                        id : 'text',
                        name : 'text',
                        val : 'query'
                    },
                    ' ',
                    {
                        block : 'button',
                        text : 'find'
                    }
                ]
            ]
        ].map(function(group) {
            return {
                tag : 'p',
                content : group.map(function(item, i) {
                    return [i ? ' &middot; ' : '', item];
                })
            }
        })
    }
})
