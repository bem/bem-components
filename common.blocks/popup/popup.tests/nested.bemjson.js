({
    block : 'page',
    title : 'bem-components: nested popups',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_nested.css' },
        { elem : 'js', url : '_nested.js' }
    ],
    content : [
        {
            block : 'test',
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, content : 'open' },
                {
                    block : 'popup',
                    mods : { theme : 'simple', autoclosable : true },
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
                                            mods : { theme : 'simple' },
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
                                                                    mods : { theme : 'simple', autoclosable : true },
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
