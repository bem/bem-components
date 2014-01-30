({
    block : 'page',
    title : 'bem-components: popup',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'test',
            mods : { direction : 'all' },
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, content : 'all directions' },
                {
                    block : 'popup',
                    content : [
                        'There\'s content',
                        { tag : 'br' },
                        'There\'s content'
                    ]
                }
            ]
        },
        {
            block : 'test',
            mods : { direction : 'bottom' },
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, content : 'bottom-* directions' },
                {
                    block : 'popup',
                    js : { directions : ['bottom-left', 'bottom-center', 'bottom-right'] },
                    content : 'There\'s content'
                }
            ]
        },
        {
            block : 'test',
            mods : { direction : 'top' },
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, content : 'top-* directions' },
                {
                    block : 'popup',
                    js : { directions : ['top-left', 'top-center', 'top-right'] },
                    content : 'There\'s content'
                }
            ]
        },
        {
            block : 'test',
            mods : { direction : 'right' },
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, content : 'right-* directions' },
                {
                    block : 'popup',
                    js : { directions : ['right-top', 'right-center', 'right-bottom'] },
                    content : 'There\'s content'
                }
            ]
        },
        {
            block : 'test',
            mods : { direction : 'left' },
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, content : 'left-* directions' },
                {
                    block : 'popup',
                    js : { directions : ['left-top', 'left-center', 'left-bottom'] },
                    content : 'There\'s content'
                }
            ]
        }
    ]
});
