({
    block : 'page',
    title : 'bem-components: popup',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : {
        block : 'test',
        js : true,
        content : [
            { block : 'link', mods : { pseudo : true }, content : 'click me' },
            { block : 'popup' }
        ]
    }
});
