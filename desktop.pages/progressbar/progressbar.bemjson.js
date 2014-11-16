({
    block : 'page',
    title : 'progressbar',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_progressbar.css' },
        { elem : 'js', url : '_progressbar.js' }
    ],
    content : {
        block : 'content',
        attrs : { style : 'width: 400px;' },
        content : [
            'theme-hackaton, size-s: <br><br>',
            {
                block : 'progressbar',
                mods : { theme: 'hackaton', size : 's', text : true },
                progress : 25
            },
            '<br>theme-hackaton, size-m: <br><br>',
            {
                block : 'progressbar',
                mods : { theme: 'hackaton', size : 'm', text : true },
                progress : 95
            },
            '<br>theme-hackaton, size-m, no text (55%): <br><br>',
            {
                block : 'progressbar',
                mods : { theme: 'hackaton', size : 'm', text : false },
                progress : 55
            },
            '<br>theme-islands (35%): <br><br>',
            {
                block : 'progressbar',
                mods : { theme: 'islands', text : false },
                progress : 35
            }
        ]
    }
})
