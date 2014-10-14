({
    block : 'page',
    title : 'bem-components: attach',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [

        {
            tag : 'p',
            cls : 'enabled',
            attrs : { style : 'display: inline-block;' },
            content : {
                block : 'attach',
                button : 'file',
                noFileText : 'no file selected',
                attrs : { tabindex : 0 } // для отлавливания фокуса в Chrome
            }
        },
        {
            tag : 'p',
            cls : 'disabled',
            attrs : { style : 'display: inline-block;' },
            content : {
                block : 'attach',
                mods : { disabled : true },
                button : 'file',
                noFileText : 'no file selected'
            }
        }

    ]
});
