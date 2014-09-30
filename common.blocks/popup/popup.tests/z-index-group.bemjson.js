({
    block : 'page',
    title : 'bem-components: popup',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_z-index-group.css' },
        { elem : 'js', url : '_z-index-group.js' }
    ],
    content : { block : 'test-wrapper', js : true, content : [
        {
            block : 'test',
            js : true,
            mix : { block : 'z-index-group', mods : { level : 1 } },
            content : [
                'Some header here ',
                { block : 'link', mods : { pseudo : true }, content : 'open 1' },
                {
                    block : 'popup',
                    mods : { target : 'anchor', theme : 'simple' },
                    content : [
                        'this popup picks zIndexGroupLevel=1 from parent z-index-group block',
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
            attrs : { style : 'display: inline-block; margin-right: 30px' },
            content : [
                'default level ',
                { block : 'link', mods : { pseudo : true }, content : 'open 2' },
                {
                    block : 'popup',
                    mods : { target : 'anchor', theme : 'simple' },
                    content : [
                        'this popup has default zIndexGroupLevel=0',
                        {
                            tag : 'p',
                            content : [
                                {
                                    block : 'input',
                                    mods : { theme : 'islands' },
                                    val : 'islands'
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
            block : 'link',
            mix : { block : 'test-wrapper', elem : 'summoner' },
            mods : { pseudo : true },
            content : 'summon the popup'
        },

        {
            block : 'test',
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, content : 'open 3' },
                {
                    block : 'popup',
                    mods : {  target : 'anchor', theme : 'simple' },
                    zIndexGroupLevel : 2,
                    content : [
                        'this popup has zIndexGroupLevel=2 in params',
                        {
                            tag : 'p',
                            content : {
                                block : 'link',
                                mix : { block : 'test-wrapper', elem : 'summoner' },
                                mods : { pseudo : true },
                                content : 'summon popup'
                            }
                        }
                    ]
                }
            ]
        },

        {
            block : 'popup',
            mix : { block : 'test-wrapper', elem : 'summon' },
            mods : { target : 'anchor', theme : 'simple' },
            content : 'I\'m summoned popup'
        }
    ] }
});
