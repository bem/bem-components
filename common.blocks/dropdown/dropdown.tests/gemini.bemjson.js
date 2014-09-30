({
    block : 'page',
    title : 'bem-components: dropdown',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        {
            block : 'test',
            content : {
                block : 'dropdown',
                mods : { switcher : 'link' },
                switcher : 'link',
                popup : { block : 'popup', mods : { autoclosable : true, 'default-link' : true }, content : 'popup' },
                cls : 'default-link'
            }
        },
        {
            block : 'test',
            content : {
                block : 'dropdown',
                mods : { switcher : 'button' },
                switcher : 'link',
                popup : { block : 'popup', mods : { autoclosable : true, 'default-button' : true }, content : 'popup' },
                cls : 'default-button'
            }
        },

        { block : 'separator' },

        { tag : 'h2', content : 'islands' },
        {
            block : 'test',
            content : {
                block : 'dropdown',
                mods : { switcher : 'link', theme : 'islands' },
                switcher : 'link',
                popup : { block : 'popup', mods : { autoclosable : true, 'islands-link' : true }, content : 'popup' },
                cls : 'islands-link'
            }
        },
        {
            block : 'test',
            content : {
                block : 'dropdown',
                mods : { switcher : 'button', theme : 'islands', size : 's' },
                switcher : 'link',
                popup : { block : 'popup', mods : { autoclosable : true, 'islands-button' : true }, content : 'popup' },
                cls : 'islands-button'
            }
        }
    ]
});
