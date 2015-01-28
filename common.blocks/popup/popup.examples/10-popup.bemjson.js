({
    block : 'page',
    title : '10-popup',
    head : [
        { elem : 'css', url : '_10-popup.css' }
    ],
    scripts : [
        { elem : 'js', url : '_10-popup.js' }
    ],
    mods : { theme : 'islands' },
    content : {
        block : 'test',
        js : true,
        content : [
            {
                block : 'link',
                mods : { pseudo : true, theme : 'islands' },
                content : 'open islands popup with content interaction'
            },
            {
                block : 'popup',
                mods : { theme : 'islands', target : 'anchor', autoclosable : true },
                content : 'popup content'
            }
        ]
    }
})
