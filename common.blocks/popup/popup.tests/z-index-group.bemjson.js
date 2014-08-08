({
    block : 'page',
    title : 'bem-components: popup',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_z-index-group.css' },
        { elem : 'js', url : '_z-index-group.js' }
    ],
    content : [
        {
            block : 'test',
            js : true,
            mix : { block : 'z-index-group', mods : { level : 1 } },
            content : [
                'Some header here ',
                { block : 'link', mods : { pseudo : true }, content : 'open 1' },
                {
                    block : 'popup',
                    mods : { theme : 'simple' },
                    content : [
                        'popup is opened at 100&times;100',
                        {
                            tag : 'p',
                            content : [
                                {
                                    block : 'input',
                                    mods : { theme : 'simple' },
                                    val : 'simple'
                                },
                                {
                                    tag : 'select',
                                    content : [
                                        { tag : 'option', content : '1' },
                                        { tag : 'option', content : '2' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        { tag : 'hr' },

        {
            block : 'test',
            js : true,
            content : [
                'default level ',
                { block : 'link', mods : { pseudo : true }, content : 'open 2' },
                {
                    block : 'popup',
                    mods : { theme : 'simple' },
                    content : [
                        'popup is opened at 100&times;100',
                        {
                            tag : 'p',
                            content : [
                                {
                                    block : 'input',
                                    mods : { theme : 'normal' },
                                    val : 'normal'
                                },
                                {
                                    tag : 'select',
                                    content : [
                                        { tag : 'option', content : '1' },
                                        { tag : 'option', content : '2' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'test',
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, content : 'open 3' },
                {
                    block : 'popup',
                    mods : { theme : 'simple' },
                    zIndexGroupLevel : 2,
                    content : [
                        'popup is opened at 100&times;100',
                        {
                            tag : 'p',
                            content : [
                                {
                                    block : 'input',
                                    mods : { theme : 'normal' },
                                    val : 'normal'
                                },
                                {
                                    tag : 'select',
                                    content : [
                                        { tag : 'option', content : '1' },
                                        { tag : 'option', content : '2' }
                                    ]
                                }
                            ]

                        }
                    ]
                }
            ]
        }
    ]
});
