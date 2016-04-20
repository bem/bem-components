({
    block : 'page',
    title : 'bem-components: image',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'simple.css' }
    ],
    content : [
        { tag : 'h2', content : 'image' },
        {
            block : 'test',
            content : [
                'Source: ',
                {
                    block : 'image',
                    url : '../../../test.blocks/image/github.svg',
                    alt : 'Download',
                    title : 'Download image'
                }
            ]
        },
        { tag : 'br' },
        {
            block : 'test',
            content : [
                'Specified size: ',
                {
                    block : 'image',
                    url : '../../../test.blocks/image/github.svg',
                    width : 53,
                    height : 24,
                    alt : 'GitHub',
                    title : 'GitHub logo'
                }
            ]
        },
        { tag : 'br' },
        {
            block : 'test',
            content : [
                'Inline content: ',
                {
                    block : 'image',
                    content : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z"/></svg>'
                }
            ]
        }
    ]
});
