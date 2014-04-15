({
    block : 'page',
    title : 'bem-components: attach',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        { tag : 'p', content : {
            block : 'attach',
            button : 'file',
            noFileText : 'no file selected'
        } },
        { tag : 'p', content : {
            block : 'attach',
            mods : { disabled : true },
            button : 'file',
            noFileText : 'no file selected'
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'simple' },
        { tag : 'p', content : {
            block : 'attach',
            mods : { theme : 'simple' },
            button : 'file',
            noFileText : 'no file selected'
        } },
        { tag : 'p', content : {
            block : 'attach',
            mods : { theme : 'simple', disabled : true },
            button : 'file',
            noFileText : 'no file selected'
        } },
        { tag : 'p', content : {
            block : 'attach',
            mods : { theme : 'simple' },
            button : {
                block : 'button',
                icon : { block : 'icon', mods : { action : 'download' } }
            },
            noFileText : 'no file selected'
        } }

    ]
});
