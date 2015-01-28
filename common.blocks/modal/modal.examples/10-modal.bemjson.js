({
    block : 'page',
    title : '10-modal.js',
    head : [
        { elem : 'css', url : '_10-modal.css' }
    ],
    scripts : [
        { elem : 'js', url : '_10-modal.js' }
    ],
    mods : { theme : 'islands' },
    content : {
        block : 'test',
        js : true,
        content : [
            {
                block : 'link',
                mods : { pseudo : true, theme : 'islands' },
                content : 'open islands modal with content interaction'
            },
            {
                block : 'modal',
                mods : { autoclosable : true, theme : 'islands' },
                content : 'some information'
            }
        ]
    }
})
