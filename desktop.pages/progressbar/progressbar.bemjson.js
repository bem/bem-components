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
        content : [
            {
                block : 'button',
                mods : { theme : 'islands', size : 'm', togglable : 'check' },
                text : 'Progress!'
            },
            '<br><br>',
            {
                block : 'progressbar',
                mods : { theme: 'islands' },
                value : 5
            }
        ]
    }
})
