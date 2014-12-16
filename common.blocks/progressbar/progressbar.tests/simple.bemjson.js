({
    block : 'page',
    title : 'progressbar',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [

        { tag : 'h2', content : 'simple' },
        {
            attrs : { style : 'width: 400px;' },
            content : {
                block : 'progressbar',
                mods : { theme : 'simple' },
                value : 25
            }
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'islands' },
        {
            attrs : { style : 'width: 400px;' },
            content : {
                block : 'progressbar',
                mods : { theme : 'islands' },
                value : 25
            }
        }

    ]
})
