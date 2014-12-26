({
    block : 'page',
    title : 'progressbar',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [
        { tag : 'h2', content : 'theme-islands' },
        {
            block : 'test',
            content : {
                block : 'progressbar',
                mods : { theme : 'islands' },
                val : 35,
                cls : 'islands'
            }
        }
    ]
})
