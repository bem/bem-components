({
    block : 'page',
    title : 'bem-components: dropdown',
    mods : { theme : 'normal' },
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

        { tag : 'h2', content : 'normal' },
        {
            block : 'test',
            content : {
                block : 'dropdown',
                mods : { switcher : 'link', theme : 'normal' },
                switcher : 'link',
                popup : { block : 'popup', mods : { autoclosable : true, 'normal-link' : true }, content : 'popup' },
                cls : 'normal-link'
            }
        },
        {
            block : 'test',
            content : {
                block : 'dropdown',
                mods : { switcher : 'button', theme : 'normal', size : 's' },
                switcher : 'link',
                popup : { block : 'popup', mods : { autoclosable : true, 'normal-button' : true }, content : 'popup' },
                cls : 'normal-button'
            }
        }
    ]
});
