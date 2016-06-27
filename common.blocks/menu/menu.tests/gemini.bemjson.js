({
    block : 'page',
    title : 'bem-components: menu',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'gemini.css' },
        { elem : 'js', url : 'gemini.js' }
    ],
    content : [
        ['s', 'm', 'l', 'xl'].map(function(size) {
            return [
                { tag : 'h3', content : 'size ' + size },
                {
                    block : 'menu',
                    mods : { mode :'radio', theme : 'islands', size : size },
                    cls : 'islands-radio-' + size,
                    val : 2,
                    content : [
                        {
                            elem : 'item',
                            val : 1,
                            content : 'item 1'
                        },
                        {
                            elem : 'item',
                            val : 2,
                            content : 'item 2'
                        },
                        {
                            elem : 'item',
                            mods : { disabled : true },
                            val : 3,
                            content : 'item 3'
                        },
                        {
                            elem : 'item',
                            val : 4,
                            content : 'item 4'
                        }
                    ]
                }
            ]
        }).map(function(test) {
            return {
                block : 'test',
                js : true,
                content : test
            };
        }),
        { tag : 'br' },
        [
            [
                { tag : 'h3', content : 'check' },
                {
                    block : 'menu',
                    mods : { mode :'check', theme : 'islands', size : 'm' },
                    cls : 'islands-check',
                    val : [2, 4],
                    content : [
                        {
                            elem : 'item',
                            val : 1,
                            content : 'item 1'
                        },
                        {
                            elem : 'item',
                            val : 2,
                            content : 'item 2'
                        },
                        {
                            elem : 'item',
                            val : 3,
                            content : 'item 3'
                        },
                        {
                            elem : 'item',
                            val : 4,
                            content : 'item 4'
                        }
                    ]
                }
            ],
            [
                { tag : 'h3', content : 'link' },
                {
                    block : 'menu',
                    mods : { theme : 'islands', size : 'm' },
                    cls : 'islands-link',
                    content : [
                        {
                            elem : 'item',
                            mods : { type : 'link' },
                            content : {
                                block : 'link',
                                url : '//yandex.ru',
                                content : 'Yandex'
                            }
                        },
                        {
                            elem : 'item',
                            mods : { type : 'link', disabled : true },
                            content : {
                                block : 'link',
                                url : '//google.ru',
                                content : 'Google'
                            }
                        },
                        {
                            elem : 'item',
                            mods : { type : 'link' },
                            content : {
                                block : 'link',
                                url : '//bing.ru',
                                content : 'Bing'
                            }
                        }
                    ]
                }
            ],
            [
                { tag : 'h3', content : 'icon' },
                {
                    block : 'menu',
                    mods : { theme : 'islands', size : 'm' },
                    cls : 'islands-icon',
                    content : [
                        {
                            elem : 'item',
                            content : [
                                { block : 'icon', mods : { social : 'twitter' } },
                                'Twitter'
                            ]
                        },
                        {
                            elem : 'item',
                            content : [
                                { block : 'icon', mods : { social : 'vk' } },
                                'VK'
                            ]
                        },
                        {
                            elem : 'group',
                            title : 'Group 2',
                            content : [
                                {
                                    elem : 'item',
                                    content : [
                                        { elem : 'icon', elemMods : { social : 'twitter' } },
                                        'Twitter'
                                    ]
                                },
                                {
                                    elem : 'item',
                                    content : [
                                        { elem : 'icon', elemMods : { social : 'vk' } },
                                        'VK'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        ].map(function(test) {
            return {
                block : 'test',
                js : true,
                content : test
            };
        })
    ]
});
