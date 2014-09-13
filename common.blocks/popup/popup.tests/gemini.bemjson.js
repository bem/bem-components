({
    block : 'page',
    title : 'bem-components: popup',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [
        {
            block : 'test-nested',
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, cls : 'test-nested-link-1', content : 'open' },
                {
                    block : 'popup',
                    cls : 'test-nested-popup',
                    mods : { target : 'anchor', theme : 'normal' },
                    content : [
                        'first popup',
                        {
                            block : 'test-nested',
                            js : true,
                            content : [
                                { tag : 'p', content : {
                                    block : 'link',
                                    mods : { pseudo : true },
                                    cls : 'test-nested-link-2',
                                    content : 'open second'
                                } },
                                {
                                    block : 'popup',
                                    cls : 'test-nested-popup',
                                    mods : { target : 'anchor', theme : 'normal' },
                                    content : 'second popup'
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        {
            block : 'test-wrap',
            content : [
                {
                    block : 'test',
                    mods : { direction : 'all' },
                    js : true,
                    cls : 'all',
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'all directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'normal' },
                            cls : 'all-popup',
                            content : [
                                'There\'s content',
                                { tag : 'br' },
                                'There\'s content',
                                { tag : 'br' },
                                { block : 'link', mods : { pseudo : true }, content : 'update content' }
                            ]
                        }
                    ]
                },
                {
                    block : 'test',
                    mods : { direction : 'bottom' },
                    attrs : { style : 'margin: 40px 0 0 0;' },
                    js : true,
                    cls : 'bottom',
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'bottom-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'normal' },
                            cls : 'bottom-popup',
                            directions : ['bottom-left', 'bottom-center', 'bottom-right'],
                            content : [
                                'There\'s content',
                                { tag : 'br' },
                                { block : 'link', mods : { pseudo : true }, content : 'update content' }
                            ]
                        }
                    ]
                },
                {
                    block : 'test',
                    mods : { direction : 'top' },
                    js : true,
                    cls : 'top',
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'top-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'normal' },
                            cls : 'top-popup',
                            directions : ['top-left', 'top-center', 'top-right'],
                            content : [
                                'There\'s content',
                                { tag : 'br' },
                                { block : 'link', mods : { pseudo : true }, content : 'update content' }
                            ]
                        }
                    ]
                },
                {
                    block : 'test',
                    mods : { direction : 'right' },
                    js : true,
                    cls : 'right',
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'right-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'normal' },
                            cls : 'right-popup',
                            directions : ['right-top', 'right-center', 'right-bottom'],
                            content : [
                                'There\'s content',
                                { tag : 'br' },
                                { block : 'link', mods : { pseudo : true }, content : 'update content' }
                            ]
                        }
                    ]
                },
                {
                    block : 'test',
                    mods : { direction : 'left' },
                    js : true,
                    cls : 'left',
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'left-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'normal' },
                            cls : 'left-popup',
                            directions : ['left-top', 'left-center', 'left-bottom'],
                            content : [
                                'There\'s content',
                                { tag : 'br' },
                                { block : 'link', mods : { pseudo : true }, content : 'update content' }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
