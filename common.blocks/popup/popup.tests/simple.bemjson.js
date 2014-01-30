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
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, content : 'click me' },
                {
                    block : 'popup',
                    content : 'content'
                }
            ]
        },
        {
            block : 'test',
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, content : 'right-* directions' },
                {
                    block : 'popup',
                    js : {
                        offsets : [20, 20],
                        directions : ['right-top', 'right-center', 'right-bottom']
                    },
                    content : 'content'
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
                    js : {
                        offsets : [20, 20],
                        directions : ['left-top', 'left-center', 'left-bottom']
                    },
                    content : 'content'
                }
            ]
        }
    ]
});
