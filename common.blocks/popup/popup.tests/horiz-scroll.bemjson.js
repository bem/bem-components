({
    block : 'page',
    title : 'bem-components: popup within scrolling',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'horiz-scroll.css' },
        { elem : 'js', url : 'horiz-scroll.js' }
    ],
    content : [
        {
            block : 'test',
            js : true,
            content : [
                {
                    tag : 'p',
                    content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                },
                { block : 'link', mods : { pseudo : true }, content : 'open' },
                {
                    block : 'popup',
                    mods : { target : 'anchor', theme : 'simple' },
                    directions : ['right-top', 'left-bottom'],
                    content : {
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
                    }
                },
                {
                    tag : 'p',
                    content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                },
                {
                    block : 'test',
                    js : true,
                    content : [
                        {
                            tag : 'p',
                            content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        },
                        { block : 'link', mods : { pseudo : true }, content : 'open' },
                        {
                            block : 'popup',
                            mods : { target : 'anchor', theme : 'simple' },
                            directions : ['right-top', 'left-bottom'],
                            content : {
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
                            }
                        },
                        {
                            tag : 'p',
                            content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        }
                    ]
                },
                {
                    tag : 'p',
                    content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                },
                {
                    tag : 'p',
                    content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                },
                {
                    tag : 'p',
                    content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                }
            ]
        }
    ]
});
