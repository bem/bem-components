({
    block : 'page',
    title : 'bem-components: icon',
    mods : { theme : 'islands' },
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
        ['twitter', 'vk'].map(function(social){
            return [
                { tag : 'br' },
                {
                    block : 'test',
                    content : {
                        block : 'icon',
                        mods : { social : social },
                        cls : 'icon-mod-' + social
                    }
                }
            ]
        })
    ]
});
