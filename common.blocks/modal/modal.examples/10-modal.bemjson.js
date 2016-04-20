({
    block : 'page',
    title : '10-modal.js',
    head : [
        {
            elem : 'conditional-comment',
            condition : '> IE 8',
            msieOnly : false,
            content : { elem : 'css', url : '10-modal.css' }
        },
        {
            elem : 'conditional-comment',
            condition : '<= IE 8',
            content : { elem : 'css', url : '10-modal.ie.css' }
        }
    ],
    scripts : [
        { elem : 'js', url : '10-modal.js' }
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
