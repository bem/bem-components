({
    block : 'page',
    title : 'bem-components: popup',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_z-indexes.css' },
        { elem : 'js', url : '_z-indexes.js' }
    ],
    content : {
        block : 'test',
        js : true,
        content : [
            { elem : 'header', content : [
                {
                    block : 'dropdown',
                    mods : { switcher : 'link' },
                    switcher : 'open',
                    popup : {
                        block : 'popup',
                        attrs : { style : 'z-index: 20000; background-color: #DBDBFF' },
                        mods : { autoclosable : false },
                        content : [
                            'dropdown in header',
                            { tag : 'br' },
                            {
                                block : 'dropdown',
                                mods : { switcher : 'link' },
                                switcher : 'open',
                                popup : {
                                    block : 'popup',
                                    attrs : { style : 'background-color: rgb(174, 174, 255)' },
                                    mods : { autoclosable : false },
                                    content : [
                                        'another dropdown in header',
                                        { tag : 'br' },
                                        {
                                            block : 'link',
                                            mix : { block : 'test', elem : 'bind-to-me' },
                                            mods : { pseudo : true },
                                            content : 'set target to me 4'
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ] },

            { elem : 'content', content : [
                {
                    block : 'dropdown',
                    mods : { switcher : 'link' },
                    switcher : 'open',
                    popup : {
                        block : 'popup',
                        mods : { autoclosable : false },
                        content : [
                            'I will go under header when page scrolled',
                            { tag : 'br' },
                            {
                                block : 'dropdown',
                                mods : { switcher : 'link' },
                                switcher : 'open',
                                popup : {
                                    block : 'popup',
                                    attrs : { style : 'background-color: #FAE8AA' },
                                    mods : { autoclosable : false },
                                    content : [
                                        'I will go under header too',
                                        { tag : 'br' },
                                        {
                                            block : 'link',
                                            mix : { block : 'test', elem : 'bind-to-me' },
                                            mods : { pseudo : true },
                                            content : 'set target to me 2'
                                        }
                                    ] }
                            }
                    ] }
                },

                {
                    block : 'dropdown',
                    mix : { block : 'test', elem : 'right-dropdown' },
                    mods : { switcher : 'link' },
                    switcher : 'open',
                    popup : {
                        block : 'popup',
                        attrs : { style : 'background-color: #DBFFDC' },
                        mods : { autoclosable : false },
                        content : [
                            {
                                block : 'dropdown',
                                mods : { switcher : 'link' },
                                switcher : 'open',
                                popup : {
                                    block : 'popup',
                                    attrs : { style : 'background-color: #9FF7A1' },
                                    mods : { autoclosable : false },
                                    content : [
                                        'I will go under header too',
                                        { tag : 'br' },
                                        {
                                            block : 'link',
                                            mix : { block : 'test', elem : 'bind-to-me' },
                                            mods : { pseudo : true },
                                            content : 'set target to me 3'
                                        }
                                    ]
                                }
                            }
                    ] }
                },

                {
                    block : 'link',
                    mix : [
                        { block : 'test', elem : 'bind-to-me' },
                        { block : 'test', elem : 'right-dropdown' }
                    ],
                    mods : { pseudo : true },
                    content : 'set target to me 1'
                },
                {
                    block : 'popup',
                    attrs : { style : 'background-color: #FFDBDB' },
                    mix : { block : 'test', elem : 'bind-popup' },
                    mods : { autoclosable : false },
                    content : [
                        'I am popup for test setTarget()',
                        { tag : 'br' },
                        { block : 'link', mods : { pseudo : true }, content : 'close me' }
                    ]

                }
            ] }
        ]
    }
});
