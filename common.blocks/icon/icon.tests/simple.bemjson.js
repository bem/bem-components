({
    block : 'page',
    title : 'bem-components: icon',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' }
    ],
    content : [
        { tag : 'h2', content : 'icon' },
        {
            block : 'test',
            content : [
                'Style background: ',
                {
                    block : 'icon',
                    url : '../../../test.blocks/icon/_action/download.svg'
                }
            ]
        },
        { tag : 'br' },
        {
            block : 'test',
            content : [
                'CSS background: ',
                {
                    block : 'icon',
                    mods : { action : 'download' }
                }
            ]
        },
        { tag : 'br' },
        {
            block : 'test',
            content : [
                'Source content: ',
                {
                    block : 'icon',
                    content : {
                        block : 'image',
                        url : '../../../test.blocks/icon/_action/download.svg'
                    }
                }
            ]
        },
        { tag : 'br' },
        {
            block : 'test',
            content : [
                'Inline content: ',
                {
                    block : 'icon',
                    content : '<svg class="image" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z"/></svg>'
                }
            ]
        }
    ]
});
