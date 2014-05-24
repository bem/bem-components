({
    block : 'page',
    title : 'bem-components: image',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' }
    ],
    content : [
        { tag : 'h2', content : 'image' },
        {
            block : 'test',
            content : {
                block : 'image',
                url : '../../../test.blocks/icon/_action/download.svg',
                alt : 'Download',
                title : 'Download image'
            }
        },
        { tag : 'br' },
        { tag : 'h3', content : 'with specified size' },
        {
            block : 'test',
            content : {
                block : 'image',
                url : '../../../test.blocks/icon/_action/download.svg',
                width : 50,
                height : 50,
                alt : 'Download',
                title : 'Download image'
            }
        }
    ]
});
