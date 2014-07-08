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
            cls : 'test-nested-first',
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, content : 'open' },
                {
                    block : 'popup',
                    mods : { theme : 'simple', autoclosable : true, visible : true },
                    content : [
                        'popup is opened',
                        {
                            tag : 'p',
                            content : [
                                {
                                    block : 'test-nested',
                                    js : true,
                                    content : [
                                        { block : 'link', mods : { pseudo : true }, content : 'open' },
                                        {
                                            block : 'popup',
                                            cls : 'test-nested-secondPopup',
                                            mods : { theme : 'simple', visible : true },
                                            content : [
                                                'popup is opened',
                                                {
                                                    tag : 'p',
                                                    content : [
                                                        {
                                                            block : 'test-nested',
                                                            js : true,
                                                            content : [
                                                                { block : 'link', mods : { pseudo : true }, content : 'open' },
                                                                {
                                                                    block : 'popup',
                                                                    mods : { theme : 'simple', autoclosable : true, visible : true },
                                                                    cls : 'test-nested-lastPopup',
                                                                    content : 'popup is opened'
                                                                }
                                                            ]
                                                        }
                                                    ]

                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]

                        }
                    ]
                }
            ]
        },
        
        { tag : 'h2', content : 'normal' },
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
                            mods : { theme : 'normal' },
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
                            mods : { theme : 'normal' },
                            cls : 'bottom-popup',
                            js : { directions : ['bottom-left', 'bottom-center', 'bottom-right'] },
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
                            mods : { theme : 'normal' },
                            cls : 'top-popup',
                            js : { directions : ['top-left', 'top-center', 'top-right'] },
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
                            mods : { theme : 'normal' },
                            cls : 'right-popup',
                            js : { directions : ['right-top', 'right-center', 'right-bottom'] },
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
                            mods : { theme : 'normal' },
                            cls : 'left-popup',
                            js : { directions : ['left-top', 'left-center', 'left-bottom'] },
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
