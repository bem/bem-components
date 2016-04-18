({
    block : 'page',
    title : 'z-index-group',
    head : [
        { elem : 'css', url : '10-z-index-group.css' }
    ],
    scripts : [
        { elem : 'js', url : '10-z-index-group.js' }
    ],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'popup',
            js : { live : false },
            mods : { target : 'position', theme : 'islands', size : 'bigger' },
            mix : { block : 'z-index-group', mods : { level : 1 } },
            content : [
                'I am block with { level : 1 }, which is under block with { level : 2 }.'
            ]
        },
        {
            block : 'popup',
            js : { live : false },
            mods : { target : 'position', autoclosable : true, theme : 'islands' },
            mix : { block : 'z-index-group', mods : { level : 2 } },
            content : 'I am block with { level : 2 }.'
        }
    ]
})
