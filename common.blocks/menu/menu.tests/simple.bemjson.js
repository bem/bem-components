({
    block : 'page',
    title : 'bem-components: menu',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        [{
            block : 'menu',
            mods : { select : 'radio', focused : true },
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
        }, {
            block : 'button',
            text : 'set val 4',
            js : { val : 4 }
        }, {
            block : 'button',
            text : 'set val 10',
            js : { val : 10 }
        }],
        [{
            block : 'menu',
            mods : { select : 'check' },
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
        }, {
            block : 'button',
            text : 'set val [1, 4]',
            js : { val : [1, 4] }
        }, {
            block : 'button',
            text : 'set val [2, 3]',
            js : { val : [2, 3] }
        },
        {
            block : 'button',
            text : 'set val [2, 10]',
            js : { val : [2, 10] }
        },
        {
            block : 'button',
            text : 'set val []',
            js : { val : [] }
        }],
        [{
            block : 'menu',
            mods : { select : 'radio-check' },
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
        }, {
            block : 'button',
            text : 'set val 2',
            js : { val : 2 }
        }, {
            block : 'button',
            text : 'set val 10',
            js : { val : 10 }
        }, {
            block : 'button',
            text : 'set undefined val',
            js : { val : undefined }
        }],
        {
            block : 'menu',
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
                        content : 'Bind'
                    }
                }
            ]
        },
        {
            block : 'menu',
            mods : { select : 'radio' },
            content : [
                {
                    elem : 'group',
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
                }
            ]
        },
        {
            block : 'menu',
            mods : { select : 'radio' },
            content : [
                {
                    elem : 'group',
                    elemMods : { 'has-title' : true },
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
                    elemMods : { 'has-title' : true },
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
                }
            ]
        }
        // TODO: with icons
    ].map(function(i) { return [{ block : 'test', js : true, content : i }, { tag : 'hr' }] })
});
