({
    block : 'page',
    title : 'bem-components: attach',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        { tag : 'p', content : {
            block : 'attach',
            button : 'file',
            noFileText : 'no file selected',
            cls : 'default-enabled'
        } },
        { tag : 'p', content : {
            block : 'attach',
            mods : { disabled : true },
            button : 'file',
            noFileText : 'no file selected',
            cls : 'default-disabled'
        } }

    ]
});
