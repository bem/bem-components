({
    block : 'page',
    title : 'bem-components : modal',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'gemini.css' },
        { elem : 'js', url : 'gemini.js' }
    ],
    content : [
        { block : 'test', js : true, content : [
            {
                block : 'link',
                mods : { pseudo : true, theme : 'islands' },
                content : 'open modal'
            },
            {
                block : 'modal',
                mods : { theme : 'islands' },
                content : 'the modal'
            }
        ] }
    ]
});
