({
    block : 'page',
    title : 'bem-components: destruct popup',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'destruct.css' },
        { elem : 'js', url : 'destruct.js' }
    ],
    content : [
        {
            block : 'test',
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, content : 'open' },
                ' ',
                { block : 'link', mods : { pseudo : true }, content : 'destruct' },
                {
                    block : 'popup',
                    mods : { target : 'anchor', theme : 'simple', autoclosable : true },
                    content : 'popup is opened'
                }
            ]
        }
    ]
});
