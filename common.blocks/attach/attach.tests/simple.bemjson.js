({
    block : 'page',
    title : 'bem-components: attach',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        { tag : 'p', content : {
            block : 'attach',
            button : 'Choose File',
            noFileText : 'No file chosen'
        } },
        { tag : 'p', content : {
            block : 'attach',
            mods : { disabled : true },
            button : 'Choose File',
            noFileText : 'No file chosen'
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'simple' },
        { tag : 'p', content : {
            block : 'attach',
            mods : { theme : 'simple' },
            button : 'Choose File',
            noFileText : 'No file chosen'
        } },
        { tag : 'p', content : {
            block : 'attach',
            mods : { theme : 'simple', disabled : true },
            button : 'Choose File',
            noFileText : 'No file chosen'
        } },
        { tag : 'p', content : {
            block : 'attach',
            mods : { theme : 'simple' },
            button : {
                block : 'button',
                icon : { block : 'icon', mods : { action : 'download' } }
            },
            noFileText : 'No file chosen'
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'islands' },
        { tag : 'p', content : {
            block : 'attach',
            mods : { theme : 'islands', size : 'xl' },
            button : 'Choose File',
            noFileText : 'No file chosen'
        } },
        { tag : 'p', content : {
            block : 'attach',
            mods : { theme : 'islands', size : 'l', disabled : true },
            button : 'Choose File',
            noFileText : 'No file chosen'
        } },
        { tag : 'p', content : {
            block : 'attach',
            mods : { theme : 'islands', size : 'm' },
            button : {
                block : 'button',
                icon : { block : 'icon', mods : { action : 'download' } }
            },
            noFileText : 'No file chosen'
        } }

    ]
});
