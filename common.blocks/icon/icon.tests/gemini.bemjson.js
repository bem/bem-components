({
    block : 'page',
    title : 'bem-components: icon',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_gemini.css' }
    ],
    content : [
        { tag : 'h2', content : 'icon' },
        {
            block : 'test',
            content : {
                block : 'icon',
                url : '../../../test.blocks/icon/_action/download.svg',
                cls : 'icon-url'
            }
        },
        { tag : 'br' },
        {
            block : 'test',
            content : {
                block : 'icon',
                mods : { social : 'twitter' },
                cls : 'icon-mod'
            }
        }
    ]
});
