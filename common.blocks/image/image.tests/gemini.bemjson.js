({
    block : 'page',
    title : 'bem-components: image',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_gemini.css' }
    ],
    content : [
        { tag : 'h2', content : 'image' },
        {
            block : 'image',
            url : '../../../test.blocks/icon/_action/download.svg',
            alt : 'Download',
            title : 'Download image',
            cls : 'image-nosize'
        },
        { tag : 'br' },
        { tag : 'h3', content : 'with specified size' },
        {
            block : 'image',
            url : '../../../test.blocks/icon/_action/download.svg',
            width : 50,
            height : 50,
            alt : 'Download',
            title : 'Download image',
            cls : 'image-size'
        }
    ]
});
