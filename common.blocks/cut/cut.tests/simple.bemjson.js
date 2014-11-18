({
    block : 'page',
    title : 'bem-components: cut',
    mods : { theme : 'simple' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        { tag : 'h2', content : 'Cut' },
        {
            block : 'cut',
            js : {
                expandedText : 'Hide'
            },
            mods : { theme : 'simple' },
            switcher : 'Show',
            content : 'Text here'
        }
    ]
});
