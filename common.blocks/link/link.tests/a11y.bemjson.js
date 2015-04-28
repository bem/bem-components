({
    block : 'page',
    title : 'bem-components: link',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_a11y.css' },
        { elem : 'js', url : '_a11y.js' }
    ],
    content : {
        attrs : { style : 'display:table' },
        content : [
            {
                attrs : { style : 'display:table-header-group' },
                content : [
                    {
                        attrs : { style : 'display:table-cell;padding:1em;font-weight:bold', 'aria-hidden' : true },
                        content : 'Block'
                    },
                    {
                        attrs : { style : 'display:table-cell;padding:1em;font-weight:bold', 'aria-hidden' : true },
                        content : 'TAB'
                    },
                    {
                        attrs : { style : 'display:table-cell;padding:1em;font-weight:bold', 'aria-hidden' : true },
                        content : 'Arrow'
                    }
                ]
            },
            [
                {
                    bemjson : {
                        block : 'link',
                        mods : { theme : 'islands' },
                        url : '//yandex.ru',
                        content : 'Yandex'
                    },
                    tab : 'Yandex [visited] link',
                    arrow : '[visited] link Yandex'
                },
                {
                    bemjson : {
                        block : 'link',
                        mods : { theme : 'islands', pseudo : true },
                        content : 'Yandex'
                    },
                    tab : 'Yandex button',
                    arrow : 'Yandex button'
                },
                {
                    bemjson : {
                        block : 'link',
                        mods : { theme : 'islands', disabled : true },
                        url : '//yandex.ru',
                        content : 'Yandex'
                    },
                    tab : '&mdash;',
                    arrow : 'link unavailable Yandex'
                },
                {
                    bemjson : {
                        block : 'link',
                        mods : { theme : 'islands' },
                        url : '//yandex.ru',
                        title : 'Yet another indexer',
                        content : 'Yandex'
                    },
                    tab : 'Yandex [visited] link (Yet another indexer)',
                    arrow : '[visited] link Yandex'
                }
            ].map(function(item) {
                return {
                    attrs : { style : 'display:table-row' },
                    content : [
                        {
                            attrs : { style : 'display:table-cell;padding:1em' },
                            content : item.bemjson
                        },
                        {
                            attrs : { style : 'display:table-cell;padding:1em', 'aria-hidden' : true },
                            content : item.tab
                        },
                        {
                            attrs : { style : 'display:table-cell;padding:1em', 'aria-hidden' : true },
                            content : item.arrow
                        }
                    ]
                }
            })
        ]
    }
})
