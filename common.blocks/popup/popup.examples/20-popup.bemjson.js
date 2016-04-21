({
    block : 'page',
    title : '20-popup',
    head : [
        {
            elem : 'conditional-comment',
            condition : '> IE 8',
            msieOnly : false,
            content : { elem : 'css', url : '20-popup.css' }
        },
        {
            elem : 'conditional-comment',
            condition : '<= IE 8',
            content : { elem : 'css', url : '20-popup.ie.css' }
        }
    ],
    scripts : [
        { elem : 'js', url : '20-popup.js' }
    ],
    mods : { theme : 'islands' },
    content : [
        // fixed owner
        {
            block : 'test',
            mix : { block : 'z-index-group', mods : { level : 9 } },
            attrs : { style : 'position : fixed; left : 0; top : 0; background-color : #eee; padding : 10px;' },
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, content : 'owner in fixed' },
                {
                    block : 'popup',
                    mix : { block : 'test', elem : 'popup' },
                    mods : { theme : 'islands', target : 'anchor' },
                    content : 'popup on fixed owner <br />also i\'m not autoclosable'
                }
            ]
        },

        // directions table
        (function() {
            var test = function(direction) {
                    return {
                        block : 'test', js : true, content : [
                            { block : 'link', mods : { pseudo : true }, content : direction },
                            {
                                block : 'popup',
                                mix : { block : 'test', elem : 'popup' },
                                mods : { target : 'anchor', autoclosable : true, theme : 'islands' },
                                directions : [direction],
                                content : 'the popup'
                            }
                        ]
                    };
                },

                positioned = { block : 'test', js : { position : [50, 50] }, content : [
                    {
                        block : 'link',
                        mods : { pseudo : true },
                        content : 'popup at 50x50'
                    },
                    {
                        block : 'popup',
                        mix : { block : 'test', elem : 'popup' },
                        mods : { target : 'position', theme : 'islands' },
                        content : 'the popup'
                    }
                ] };

            return {
                block : 'directions',
                content : [
                    { elem : 'row', content : [
                        { elem : 'cell' },
                        { elem : 'cell', elemMods : { align : 'left' }, content : test('top-left') },
                        { elem : 'cell', elemMods : { align : 'center' }, content : test('top-center') },
                        { elem : 'cell', elemMods : { align : 'right' }, content : test('top-right') },
                        { elem : 'cell' }
                    ] },
                    { elem : 'row', content : [
                        { elem : 'cell', elemMods : { align : 'right' }, content : test('left-top') },
                        { elem : 'cell', elemMods : { align : 'center', border : 'yes' }, attrs : { colspan : 3, rowspan : 3 },
                            content : positioned },
                        { elem : 'cell', elemMods : { align : 'left' }, content : test('right-top') }
                    ] },
                    { elem : 'row', content : [
                        { elem : 'cell', elemMods : { align : 'right' }, content : test('left-center') },
                        { elem : 'cell', elemMods : { align : 'left' }, content : test('right-center') }
                    ] },
                    { elem : 'row', content : [
                        { elem : 'cell', elemMods : { align : 'right' }, content : test('left-bottom') },
                        { elem : 'cell', elemMods : { align : 'left' }, content : test('right-bottom') }
                    ] },
                    { elem : 'row', content : [
                        { elem : 'cell' },
                        { elem : 'cell', elemMods : { align : 'left' }, content : test('bottom-left') },
                        { elem : 'cell', elemMods : { align : 'center' }, content : test('bottom-center') },
                        { elem : 'cell', elemMods : { align : 'right' }, content : test('bottom-right') },
                        { elem : 'cell' }
                    ] }
                ]
            };
        })(),

        // nested
        { block : 'test', js : true, content : [
            {
                block : 'link',
                mods : { pseudo : true },
                content : 'nested popups'
            },
            {
                block : 'popup',
                mix : { block : 'test', elem : 'popup' },
                mods : { target : 'anchor', autoclosable : true, theme : 'islands' },
                content : [
                    'just popup ',
                    { tag : 'button', content : 'native button, should not hide popup' },
                    { block : 'test', js : true, content : [
                        {
                            block : 'link',
                            mods : { pseudo : true },
                            content : 'open nested popup'
                        },
                        {
                            block : 'popup',
                            mix : { block : 'test', elem : 'popup' },
                            mods : { target : 'anchor', autoclosable : true, theme : 'islands' },
                            content : 'the nested popup'
                        }
                    ] }
                ]
            }
        ] },
        { tag : 'br' },

        // destructing
        { block : 'test', js : true, content : [
            {
                block : 'link',
                mods : { pseudo : true },
                content : 'destructing popup'
            },
            {
                block : 'popup',
                mix : { block : 'test', elem : 'popup' },
                mods : { target : 'anchor', theme : 'islands' },
                content : {
                    block : 'link',
                    mix : { block : 'test', elem : 'destructor' },
                    mods : { pseudo : true },
                    content : 'destruct parent of my anchor'
                }
            }
        ] },
        { tag : 'br' },

        // summon popup
        { block : 'summon-test', js : true, content : (function() {
            var summoner = {
                    block : 'link',
                    mix : { block : 'summon-test', elem : 'summoner' },
                    mods : { pseudo : true },
                    content : 'summon popup to me'
                },
                test = function(zIndexGroupLevel) {
                    return {
                        block : 'test', js : true, content : [
                            { block : 'link', mods : { pseudo : true }, content : 'open popup' }, ' ',
                            {
                                block : 'popup',
                                mix : { block : 'test', elem : 'popup' },
                                mods : { target : 'anchor', theme : 'islands' },
                                zIndexGroupLevel : zIndexGroupLevel,
                                content : summoner
                            }]
                        };
                };

            return [
                test(1),
                test(2),
                summoner,
                {
                    block : 'popup',
                    mix : { block : 'summon-test', elem : 'popup' },
                    mods : { target : 'anchor', theme : 'islands' },
                    content : 'summoned popup'
                }
            ];
        })() },

        // in scrollable
        { block : 'scrollable', content : {
            block : 'test',
            js : true,
            content : [
                'scroll to center',
                {
                    block : 'link',
                    mods : { pseudo : true },
                    content : 'open popup'
                },
                {
                    block : 'popup',
                    mix : { block : 'test', elem : 'popup' },
                    mods : { target : 'anchor', theme : 'islands' },
                    content : 'in scrollable'
                }
            ]
        } }
    ]
})
