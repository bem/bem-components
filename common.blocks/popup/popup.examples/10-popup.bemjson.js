({
    block : 'page',
    title : '10-popup',
    head : [
        {
            elem : 'conditional-comment',
            condition : '> IE 8',
            msieOnly : false,
            content : { elem : 'css', url : '_10-popup.css' }
        },
        {
            elem : 'conditional-comment',
            condition : '<= IE 8',
            content : { elem : 'css', url : '_10-popup.ie.css' }
        }
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
