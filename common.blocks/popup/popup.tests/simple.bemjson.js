({
    block : 'page',
    title : 'bem-components: popup',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [

        { tag : 'h2', content : 'simple' },
        {
            block : 'test-wrap',
            content : [
                {
                    block : 'test',
                    js : { target : [100, 100] },
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'open at 100&times;100' },
                        {
                            block : 'popup',
                            mods : { target : 'position', autoclosable : true, theme : 'simple' },
                            content : [
                                'popup is opened at 100&times;100',
                                {
                                    tag : 'p',
                                        content : [
                                            {
                                                block : 'input',
                                                mods : { theme : 'simple' },
                                                val : 'simple'
                                            },
                                            {
                                                tag : 'select',
                                                content : [
                                                    { tag : 'option', content : '1' },
                                                    { tag : 'option', content : '2' }
                                                ]
                                            }
                                        ]

                                },
                                { block : 'link', mods : { pseudo : true }, content : 'update content' },
                            ]
                        }
                    ]
                },
                {
                    block : 'test',
                    mods : { direction : 'all' },
                    js : true,
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'all directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'simple' },
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
                    js : true,
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'bottom-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'simple' },
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
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'top-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'simple' },
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
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'right-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'simple' },
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
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'left-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'simple' },
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
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal' },
        {
            block : 'test-wrap',
            content : [
                {
                    block : 'test',
                    js : { target : [100, 100] },
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'open at 100&times;100' },
                        {
                            block : 'popup',
                            mods : { target : 'position', autoclosable : true, theme : 'normal' },
                            content : [
                                'popup is opened at 100&times;100',
                                {
                                    tag : 'p',
                                        content : [
                                            {
                                                block : 'input',
                                                mods : { theme : 'normal' },
                                                val : 'normal'
                                            },
                                            {
                                                tag : 'select',
                                                content : [
                                                    { tag : 'option', content : '1' },
                                                    { tag : 'option', content : '2' }
                                                ]
                                            }
                                        ]

                                },
                                { block : 'link', mods : { pseudo : true }, content : 'update content' },
                            ]
                        }
                    ]
                },
                {
                    block : 'test',
                    mods : { direction : 'all' },
                    js : true,
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'all directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'normal' },
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
                    js : true,
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'bottom-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'normal' },
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
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'top-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'normal' },
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
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'right-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'normal' },
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
                    content : [
                        { block : 'link', mods : { pseudo : true }, content : 'left-* directions' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'normal' },
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
