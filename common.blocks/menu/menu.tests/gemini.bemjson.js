({
    block : 'page',
    title : 'bem-components: menu',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [
        ['s', 'm', 'l', 'xl'].map(function(size) {
            return [
                { tag : 'h3', content : 'size ' + size },
                {
                    block : 'menu',
                    mods : { mode :'radio', theme : 'normal', size : size },
                    cls : 'normal-radio-' + size,
                    content : [
                        {
                            block : 'menu-item',
                            val : 1,
                            content : 'item 1'
                        },
                        {
                            block : 'menu-item',
                            mods : { checked : true },
                            val : 2,
                            content : 'item 2'
                        },
                        {
                            block : 'menu-item',
                            mods : { disabled : true },
                            val : 3,
                            content : 'item 3'
                        },
                        {
                            block : 'menu-item',
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
                    mods : { mode :'check', theme : 'normal', size : 'm' },
                    cls : 'normal-check',
                    content : [
                        {
                            block : 'menu-item',
                            val : 1,
                            content : 'item 1'
                        },
                        {
                            block : 'menu-item',
                            mods : { checked : true },
                            val : 2,
                            content : 'item 2'
                        },
                        {
                            block : 'menu-item',
                            val : 3,
                            content : 'item 3'
                        },
                        {
                            block : 'menu-item',
                            mods : { checked : true },
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
                    mods : { theme : 'normal', size : 'm' },
                    cls : 'normal-link',
                    content : [
                        {
                            block : 'menu-item',
                            mods : { type : 'link' },
                            content : {
                                block : 'link',
                                url : '//yandex.ru',
                                content : 'Yandex'
                            }
                        },
                        {
                            block : 'menu-item',
                            mods : { type : 'link', disabled : true },
                            content : {
                                block : 'link',
                                url : '//google.ru',
                                content : 'Google'
                            }
                        },
                        {
                            block : 'menu-item',
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
                    mods : { theme : 'normal', size : 'm' },
                    cls : 'normal-icon',
                    content : [
                        {
                            block : 'menu-item',
                            content : [
                                { block : 'icon', mods : { social : 'twitter' } },
                                'Twitter'
                            ]
                        },
                        {
                            block : 'menu-item',
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
                                    block : 'menu-item',
                                    content : [
                                        { elem : 'icon', elemMods : { social : 'twitter' } },
                                        'Twitter'
                                    ]
                                },
                                {
                                    block : 'menu-item',
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
