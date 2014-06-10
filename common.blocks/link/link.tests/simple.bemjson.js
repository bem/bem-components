({
    block : 'page',
    title : 'bem-components: link',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : ['default', 'simple', 'normal'].map(function(theme, i) {
        var content = [
                { block : 'link', content : 'with no url' },
                { block : 'link', url : 'http://example.com/', content : 'plain url' },
                {
                    block : 'link',
                    url : {
                        block : 'link-content',
                        tag : '',
                        content : '/action'
                    },
                    content : 'bemjson url'
                },
                {
                    block : 'link',
                    url : 'http://example.com/',
                    title : 'One of the largest internet companies in Europe',
                    content : 'with title'
                },
                {
                    block : 'link',
                    url : 'http://example.com/',
                    title : 'One of the largest internet companies in Europe',
                    target : '_blank',
                    content : 'blank target'
                },
                { block : 'link', mods : { pseudo : true }, content : 'pseudo link' },
                {
                    block : 'link',
                    url : 'http://example.com/',
                    tabIndex : -1,
                    content : 'out of tab order'
                }
            ].map(function(link, j) {
                link.mods || (link.mods = {});
                i && (link.mods.theme = theme);
                return [
                    j > 0 && { tag : 'br' },
                    link
                ]
            });

        content.unshift({ tag : 'h2', content : theme });
        i && content.unshift({ tag : 'hr' });

        return content;
    })
})
