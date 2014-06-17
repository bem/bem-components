({
    block : 'page',
    title : 'bem-components: spin',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_gemini.css' }
    ],
    content : [
        { tag : 'h2', content : 'normal' },
        ['xs', 's', 'm', 'l', 'xl'].map(function(size){
            return {
                tag : 'p',
                content : [
                    size,
                    { tag : 'br' },
                    {
                        block : 'spin',
                        mods : { paused : true, theme : 'normal', progress : true, size : size },
                        cls : 'normal-' + size
                    }
                ]
            }
        })
    ]
});
