({
    block : 'page',
    title : 'bem-components: link',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : ['default', 'simple', 'islands'].map(function(theme, i) {
        var content = [
                { block : 'link', content : 'with no url' },
                { block : 'link', url : 'http://example.com/', content : 'plain url' },
                { block : 'link', mods : { view : 'minor' }, url : 'http://example.com/help/', content : 'minor' },
                { block : 'link', mods : { view : 'external' }, url : 'http://www.w3.org/', content : 'external' },
                {
                    block : 'link',
                    mods : { disabled : true },
                    url : 'http://example.com/',
                    content : 'disabled'
                },
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
                },
                {
                    block : 'link',
                    url : 'http://example.com/',
                    content : [
                        {
                            block : 'icon',
                            attrs : { style : 'width: 22px' },
                            mods : { action : 'download' }
                        },
                        'with icon'
                    ]
                },
                {
                    block : 'link',
                    url : 'http://example.com/',
                    content : [
                        {
                            block : 'icon',
                            attrs : { style : 'width: 22px' },
                            content : '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="1 1 14 14" class="image"><path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z"/></svg>'
                        },
                        'with icon + image'
                    ]
                }
            ].map(function(link, j) {
                link.mods || (link.mods = {});
                i && (link.mods.theme = theme);
                if(link.mods.view && theme !== 'islands') return '';
                return [
                    j > 0 && { tag : 'br' },
                    link
                ];
            });

        content.unshift({ tag : 'h2', content : theme });
        i && content.unshift({ tag : 'hr' });

        return content;
    })
})
