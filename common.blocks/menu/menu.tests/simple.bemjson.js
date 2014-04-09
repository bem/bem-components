({
    block : 'page',
    title : 'bem-components: menu',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : ['simple', 'normal'].map(function(theme) {
        return [
            { tag : 'h2', content : theme },
            [
                [
                    { tag : 'h3', content : 'radio' },
                    {
                        block : 'menu',
                        mods : { select : 'radio', focused : true, theme : theme, size : 'm' },
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
                    },
                    { block : 'button', text : 'set val 4', js : { val : 4 } },
                    { block : 'button', text : 'set val 10', js : { val : 10 } }
                ],
                [
                    { tag : 'h3', content : 'check' },
                    {
                        block : 'menu',
                        mods : { select : 'check', theme : theme, size : 'm' },
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
                        mods : { select : 'radio-check', theme : theme, size : 'm' },
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
                                mods : { checked : true },
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
                        mods : { theme : theme, size : 'm' },
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
                        mods : { theme : theme, size : 'm' },
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
                        mods : { theme : theme, size : 'm' },
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
                    },
                    { tag : 'br' },
                    {
                        block : 'menu',
                        mods : { select : 'radio', theme : theme, size : 'm' },
                        content : [
                            {
                                block : 'menu-item',
                                mods : { checked : true },
                                val : 1,
                                content : [
                                    { elem : 'icon', elemMods : { social : 'twitter' } },
                                    'Twitter'
                                ]
                            },
                            {
                                block : 'menu-item',
                                val : 2,
                                content : [
                                    { elem : 'icon', elemMods : { social : 'vk' } },
                                    'VK'
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
    })
});
