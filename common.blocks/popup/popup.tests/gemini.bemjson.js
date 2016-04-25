({
    block : 'page',
    title : 'bem-components: popup',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [
        {
            block : 'test-nested',
            js : true,
            content : [
                { block : 'button', mods : { theme : 'islands', size : 'm' }, cls : 'test-nested-button-1', text : 'open' },
                {
                    block : 'popup',
                    cls : 'test-nested-popup',
                    mods : { target : 'anchor', theme : 'islands' },
                    content : [
                        'first popup',
                        {
                            block : 'test-nested',
                            js : true,
                            content : [
                                { tag : 'p', content : {
                                    block : 'button',
                                    mods : { theme : 'islands', size : 'm' },
                                    cls : 'test-nested-button-2',
                                    text : 'open second'
                                } },
                                {
                                    block : 'popup',
                                    cls : 'test-nested-popup',
                                    mods : { target : 'anchor', theme : 'islands' },
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
                        { block : 'button', mods : { theme : 'islands', size : 'm' }, text : 'all directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'islands' },
                            cls : 'all-popup',
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
                    mods : { direction : 'bottom' },
                    attrs : { style : 'margin: 40px 0 0 0;' },
                    js : true,
                    cls : 'bottom',
                    content : [
                        { block : 'button', mods : { theme : 'islands', size : 'm' }, text : 'bottom-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'islands' },
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
                        { block : 'button', mods : { theme : 'islands', size : 'm' }, text : 'top-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'islands' },
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
                        { block : 'button', mods : { theme : 'islands', size : 'm' }, text : 'right-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'islands' },
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
                        { block : 'button', mods : { theme : 'islands', size : 'm' }, text : 'left-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'islands' },
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
