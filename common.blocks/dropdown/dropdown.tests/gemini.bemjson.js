({
    block : 'page',
    title : 'bem-components: dropdown',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'gemini.css' },
        { elem : 'js', url : 'gemini.js' }
    ],
    content : [
        { tag : 'h2', content : 'islands' },
        {
            block : 'test',
            content : {
                block : 'dropdown',
                mods : { switcher : 'link', theme : 'islands' },
                switcher : { block : 'link', content : 'link', cls : 'islands-link' },
                popup : { block : 'popup', mods : { autoclosable : true, 'islands-link' : true }, content : 'popup' }
            }
        },
        {
            block : 'test',
            content : {
                block : 'dropdown',
                mods : { switcher : 'button', theme : 'islands', size : 's' },
                switcher : { block : 'button', text : 'link', cls : 'islands-button' },
                popup : { block : 'popup', mods : { autoclosable : true, 'islands-button' : true }, content : 'popup' }
            }
        }
    ]
});
