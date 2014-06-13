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
            mods : { paused : true, theme : 'simple', size : 's', progress : true }
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal' },
        { tag : 'h3', content : 'size' },
        { tag : 'p', content : [
            'xs ',
            {
                block : 'spin',
                mods : { paused : true, theme : 'normal', size : 'xs', progress : true },
                cls : 'gemini-test-spin-xs'
            }
        ] },
        { tag : 'p', content : [
            's ',
            {
                block : 'spin',
                mods : { paused : true, theme : 'normal', size : 's', progress : true },
                cls : 'gemini-test-spin-s'
            }
        ] },
        { tag : 'p', content : [
            'm ',
            {
                block : 'spin',
                mods : { paused : true, theme : 'normal', size : 'm', progress : true },
                cls : 'gemini-test-spin-m'
            }
        ] },
        { tag : 'p', content : [
            'l ',
            {
                block : 'spin',
                mods : { paused : true, theme : 'normal', size : 'l', progress : true },
                cls : 'gemini-test-spin-l'
            }
        ] },
        { tag : 'p', content : [
            'xl ',
            {
                block : 'spin',
                mods : { paused : true, theme : 'normal', size : 'xl', progress : true },
                cls : 'gemini-test-spin-xl'
            }
        ] }
    ]
});
