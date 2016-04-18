({
    block : 'page',
    title : 'bem-components: spin',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'simple.css' }
    ],
    content : [
        { tag : 'h2', content : 'simple' },
        { tag : 'p', content : {
            block : 'spin',
            mods : { theme : 'simple', size : 's', visible : true }
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'islands' },
        { tag : 'h3', content : 'size' },
        { tag : 'p', content : [
            'xs ',
            {
                block : 'spin',
                mods : { theme : 'islands', size : 'xs', visible : true }
            }
        ] },
        { tag : 'p', content : [
            's ',
            {
                block : 'spin',
                mods : { theme : 'islands', size : 's', visible : true }
            }
        ] },
        { tag : 'p', content : [
            'm ',
            {
                block : 'spin',
                mods : { theme : 'islands', size : 'm', visible : true }
            }
        ] },
        { tag : 'p', content : [
            'l ',
            {
                block : 'spin',
                mods : { theme : 'islands', size : 'l', visible : true }
            }
        ] },
        { tag : 'p', content : [
            'xl ',
            {
                block : 'spin',
                mods : { theme : 'islands', size : 'xl', visible : true }
            }
        ] }
    ]
});
