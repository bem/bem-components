({
    block : 'page',
    title : 'bem-components: link',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'gemini.css' },
        { elem : 'js', url : 'gemini.js' }
    ],
    content : ['islands'].map(function(theme) {
        var content = [
                { block : 'link', content : 'with no url', cls : theme + '-no-url' },
                { block : 'link', url : '#', content : 'plain url', cls : theme + '-url' },
                { block : 'link', mods : { pseudo : true }, content : 'pseudo link', cls : theme + '-pseudo' },
                { block : 'link', mods : { view : 'minor' }, url : '#', content : '_view_minor' },
                { block : 'link', mods : { view : 'external' }, url : '#', content : '_view_external' },
                { block : 'link', mods : { view : 'ghost' }, url : '#', content : '_view_ghost' },
                { block : 'link', mods : { view : 'text' }, url : '#', content : '_view_text' },
                { block : 'link', mods : { view : 'strong' }, url : '#', content : '_view_strong' }
            ].map(function(link, j) {
                (link.mods || (link.mods = {})).theme = theme;
                return [
                    j > 0 && { block : 'separator' },
                    link
                ]
            });

        content.unshift({ tag : 'h2', content : theme });

        return content;
    })
})
