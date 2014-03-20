({
    block : 'page',
    title : 'bem-components: spin',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' }
    ],
    content : [
        { tag : 'h2', content : 'simple' },
        { tag : 'p', content : {
            block : 'spin',
            mods : { theme : 'simple', size : 's', progress : true }
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal' },
        { tag : 'h3', content : 'size' },
        { tag : 'p', content : [
            'xs ',
            {
                block : 'spin',
                mods : { theme : 'normal', size : 'xs', progress : true }
            }
        ] },
        { tag : 'p', content : [
            's ',
            {
                block : 'spin',
                mods : { theme : 'normal', size : 's', progress : true }
            }
        ] },
        { tag : 'p', content : [
            'm ',
            {
                block : 'spin',
                mods : { theme : 'normal', size : 'm', progress : true }
            }
        ] },
        { tag : 'p', content : [
            'l ',
            {
                block : 'spin',
                mods : { theme : 'normal', size : 'l', progress : true }
            }
        ] },
        { tag : 'p', content : [
            'xl ',
            {
                block : 'spin',
                mods : { theme : 'normal', size : 'xl', progress : true }
            }
        ] }
    ]
});
