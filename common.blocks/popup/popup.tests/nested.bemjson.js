({
    block : 'page',
    title : 'bem-components: nested popups',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'nested.css' },
        { elem : 'js', url : 'nested.js' }
    ],
    content : [
        {
            block : 'test',
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, content : 'open' },
                {
                    block : 'popup',
                    mods : { target : 'anchor', theme : 'simple', autoclosable : true },
                    content : [
                        'popup is opened',
                        {
                            tag : 'p',
                            content : [
                                {
                                    block : 'input',
                                    mods : { theme : 'simple' },
                                    val : 'simple'
                                },
                                {
                                    block : 'test',
                                    js : true,
                                    content : [
                                        { block : 'link', mods : { pseudo : true }, content : 'open' },
                                        {
                                            block : 'popup',
                                            mods : { target : 'anchor', theme : 'simple' },
                                            content : [
                                                'popup is opened',
                                                { tag : 'br' },
                                                'popup is opened',
                                                {
                                                    tag : 'p',
                                                    content : [
                                                        {
                                                            block : 'input',
                                                            mods : { theme : 'simple' },
                                                            val : 'simple'
                                                        },
                                                        {
                                                            block : 'test',
                                                            js : true,
                                                            content : [
                                                                { block : 'link', mods : { pseudo : true }, content : 'open' },
                                                                {
                                                                    block : 'popup',
                                                                    mods : { target : 'anchor', theme : 'simple', autoclosable : true },
                                                                    content : 'popup is opened'
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
        }
    ]
});
