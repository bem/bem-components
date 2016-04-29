({
    block : 'page',
    title : 'bem-components: spin',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'gemini.css' }
    ],
    content : [
        { tag : 'h2', content : 'islands' },
        ['xs', 's', 'm', 'l', 'xl'].map(function(size){
            return {
                tag : 'p',
                content : [
                    size,
                    { tag : 'br' },
                    {
                        block : 'spin',
                        mods : { paused : true, theme : 'islands', visible : true, size : size },
                        cls : 'islands-' + size
                    }
                ]
            }
        })
    ]
});
