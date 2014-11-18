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
        js : true,
        attrs : { style : 'width: 400px;' },
        content : [
            {
                block : 'button',
                mods : { theme : 'islands', size : 'm', togglable : 'check' },
                text : 'Progress!'
            },'<br><br>',
            {
                block : 'progressbar',
                mods : { theme: 'hackaton', size : 'm', text : true },
                progress : 95
            }
        ]
    }
})
