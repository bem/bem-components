({
    block : 'page',
    title : 'bem-components : modal',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [
        { block : 'test', js : true, content : [
            {
                block : 'link',
                mods : { pseudo : true, theme : 'normal' },
                content : 'open modal'
            },
            {
                block : 'modal',
                mods : { theme : 'normal' },
                content : 'the modal'
            }
        ] }
    ]
});
