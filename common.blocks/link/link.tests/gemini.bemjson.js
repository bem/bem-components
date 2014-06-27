({
    block : 'page',
    title : 'bem-components: link',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : ['default', 'normal'].map(function(theme, i) {
        var content = [
                { block : 'link', content : 'with no url', cls : theme + '-no-url' },
                { block : 'link', url : '#', content : 'plain url', cls : theme + '-url' },
                { block : 'link', mods : { pseudo : true }, content : 'pseudo link', cls : theme + '-pseudo' }
            ].map(function(link, j) {
                link.mods || (link.mods = {});
                i && (link.mods.theme = theme);
                return [
                    j > 0 && { block : 'separator' },
                    link
                ]
            });

        content.unshift({ tag : 'h2', content : theme });
        i && content.unshift({ tag : 'hr' });

        return content;
    })
})
