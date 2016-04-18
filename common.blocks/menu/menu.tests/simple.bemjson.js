({
    block : 'page',
    title : 'bem-components: menu',
    mods : { theme : 'islands' },
    head : [
        {
            elem : 'conditional-comment',
            condition : '> IE 8',
            msieOnly : false,
            content : { elem : 'css', url : 'simple.css' }
        },
        {
            elem : 'conditional-comment',
            condition : '<= IE 8',
            content : { elem : 'css', url : 'simple.ie.css' }
        }
    ],
    scripts : [{ elem : 'js', url : 'simple.js' }],
    content : ['simple', 'islands'].map(function(theme) {
        var size = theme == 'islands'? 'm' : undefined;

        return [
            { tag : 'h2', content : theme },
            [
                [
                    { tag : 'h3', content : 'radio' },
                    {
                        block : 'menu',
                        attrs : { style : 'height: 80px' },
                        mods : { mode : 'radio', focused : true, theme : theme, size : size },
                        val : 2,
                        content : [
                            {
                                block : 'menu-item',
                                val : 1,
                                content : 'item 1'
                            },
                            {
                                block : 'menu-item',
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
                            },
                            {
                                block : 'menu-item',
                                val : 5,
                                content : 'item 5'
                            }
                        ]
                    },
                    { block : 'button', text : 'set val 4', js : { val : 4 } },
                    { block : 'button', text : 'set val 10', js : { val : 10 } }
                ],
                [
                    { tag : 'h3', content : 'check' },
                    {
                        block : 'menu',
                        mods : { mode : 'check', theme : theme, size : size },
                        val : [2, 4],
                        content : [
                            {
                                block : 'menu-item',
                                val : 1,
                                content : 'item 1'
                            },
                            {
                                block : 'menu-item',
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
                                val : 4,
                                content : 'item 4'
                            }
                        ]
                    },
                    { block : 'button', text : 'set val [1, 4]', js : { val : [1, 4] } },
                    { block : 'button', text : 'set val [2, 3]', js : { val : [2, 3] } },
                    { block : 'button', text : 'set val [2, 10]', js : { val : [2, 10] } },
                    { block : 'button', text : 'set val []', js : { val : [] } }
                ],
                [
                    { tag : 'h3', content : 'radio-check' },
                    {
                        block : 'menu',
                        mods : { mode : 'radio-check', theme : theme, size : size },
                        val : 3,
                        content : [
                            {
                                block : 'menu-item',
                                val : 1,
                                content : 'item 1'
                            },
                            {
                                block : 'menu-item',
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
                                val : 4,
                                content : 'item 4'
                            }
                        ]
                    },
                    { block : 'button', text : 'set val 2', js : { val : 2 } },
                    { block : 'button', text : 'set val 10', js : { val : 10 } },
                    { block : 'button', text : 'set undefined val', js : { val : undefined } },
                ],
                [
                    { tag : 'h3', content : 'link' },
                    {
                        block : 'menu',
                        mods : { theme : theme, size : size },
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
                    { tag : 'h3', content : 'group' },
                    {
                        block : 'menu',
                        mods : { theme : theme, size : size },
                        content : [
                            {
                                elem : 'group',
                                title : 'Group 1',
                                content : [
                                    {
                                        block : 'menu-item',
                                        content : 'item 1'
                                    },
                                    {
                                        block : 'menu-item',
                                        content : 'item 2'
                                    }
                                ]
                            },
                            {
                                elem : 'group',
                                title : 'Group 2',
                                content : [
                                    {
                                        block : 'menu-item',
                                        content : 'item 3'
                                    },
                                    {
                                        block : 'menu-item',
                                        content : 'item 4'
                                    }
                                ]
                            },
                            {
                                elem : 'group',
                                content : [
                                    {
                                        block : 'menu-item',
                                        content : 'item 5'
                                    },
                                    {
                                        block : 'menu-item',
                                        content : 'item 6'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                [
                    { tag : 'h3', content : 'icon' },
                    {
                        block : 'menu',
                        mods : { theme : theme, size : size },
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
                                    }
                                ]
                            }
                        ]
                    },
                    { tag : 'br' },
                    {
                        block : 'menu',
                        mods : { mode : 'radio', theme : theme, size : size },
                        val : 1,
                        content : [
                            {
                                block : 'menu-item',
                                val : 1,
                                content : [
                                    { block : 'icon', mods : { social : 'twitter' } },
                                    'Twitter'
                                ]
                            },
                            {
                                block : 'menu-item',
                                val : 2,
                                content : [
                                    { block : 'icon', mods : { social : 'vk' } },
                                    'VK'
                                ]
                            }
                        ]
                    }
                ],
                [
                    { tag : 'h3', content : 'disabled' },
                    {
                        block : 'menu',
                        mods : { mode : 'radio', theme : theme, size : size, disabled : true },
                        content : [
                            {
                                block : 'menu-item',
                                val : 1,
                                content : 'item 1'
                            },
                            {
                                block : 'menu-item',
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
                                val : 4,
                                content : 'item 4'
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
    })
});
