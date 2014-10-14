({
    block : 'page',
    title : 'bem-components: image',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_gemini.css' }
    ],
    content : [
        {
            block : 'image',
            url : '../../../test.blocks/icon/_action/download.svg',
            cls : 'image-no-size'
        },
        { tag : 'br' },
        {
            block : 'image',
            url : '../../../test.blocks/icon/_action/download.svg',
            width : 50,
            height : 50,
            cls : 'image-with-size'
        }
    ]
});
