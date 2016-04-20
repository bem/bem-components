({
    block : 'page',
    title : 'bem-components : modal',
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
    content : [
        // simple
        { block : 'test', js : true, content : [
            {
                block : 'link',
                mods : { pseudo : true, theme : 'simple' },
                content : 'open simple modal'
            },
            {
                block : 'modal',
                mods : { theme : 'simple' },
                content : {
                    block : 'test',
                    elem : 'content',
                        content : [
                        {
                            block : 'button',
                            mix : { block : 'test', elem : 'closer' },
                            mods : { theme : 'simple', size : 's' },
                            text : '&times;'
                        },
                        { tag : 'p', content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' }
                    ]
                }
            }
        ] },

        // simple autoclosable
        { block : 'test', js : true, content : [
            {
                block : 'link',
                mods : { pseudo : true, theme : 'simple' },
                content : 'open simple autoclosable modal'
            },
            {
                block : 'modal',
                mods : { autoclosable : true, theme : 'simple' },
                content : {
                    block : 'test',
                    elem : 'content',
                    content : [
                        {
                            block : 'dropdown',
                            mods : { switcher : 'link', theme : 'simple' },
                            switcher : 'open popup',
                            popup : {
                                block : 'dropdown',
                                mods : { switcher : 'link', theme : 'simple' },
                                switcher : 'open another',
                                popup : 'You can close popups or modal in proper order using ESC or clicks.'
                            }
                        },
                        { tag : 'p', content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' }
                    ]
                }
            }
        ] },

        // islands with content interaction
        { block : 'test', js : true, content : [
            {
                block : 'link',
                mods : { pseudo : true, theme : 'islands' },
                content : 'open islands modal with content interaction'
            },
            {
                block : 'modal',
                mods : { autoclosable : true, theme : 'islands' },
                content : {
                    block : 'test',
                    elem : 'content',
                    content : [
                        {
                            block : 'control-group',
                            attrs : { style : 'display: inline-block' },
                            content : [
                                {
                                    block : 'button',
                                    mix : { block : 'test', elem : 'add-text' },
                                    mods : { theme : 'islands', size : 'm' },
                                    text : 'add text'
                                },
                                {
                                    block : 'button',
                                    mix : { block : 'test', elem : 'remove-text' },
                                    mods : { theme : 'islands', size : 'm' },
                                    text : 'remove text'
                                }
                            ]
                        },
                        ' ',
                        {
                            block : 'control-group',
                            attrs : { style : 'display: inline-block' },
                            content : [
                                {
                                    block : 'button',
                                    mix : { block : 'test', elem : 'wider' },
                                    mods : { theme : 'islands', size : 'm' },
                                    text : 'wider'
                                },
                                {
                                    block : 'button',
                                    mix : { block : 'test', elem : 'narrower' },
                                    mods : { theme : 'islands', size : 'm' },
                                    text : 'narrower'
                                }
                            ]
                        },
                        { block : 'test', elem : 'text', content : {
                            tag : 'p',
                            content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        } }
                    ]
                }
            }
        ] }
    ]
});
