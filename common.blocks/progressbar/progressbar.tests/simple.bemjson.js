({
    block : 'page',
    title : 'progressbar',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'simple.css' },
        { elem : 'js', url : 'simple.js' }
    ],
    content : [

        { tag : 'h2', content : 'simple' },
        {
            attrs : { style : 'width: 400px;' },
            content : {
                block : 'progressbar',
                mods : { theme : 'simple' },
                val : 25
            }
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'islands' },
        {
            attrs : { style : 'width: 400px;' },
            content : {
                block : 'progressbar',
                mods : { theme : 'islands' },
                val : 25
            }
        }

    ]
})
