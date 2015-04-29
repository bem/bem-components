({
    block : 'page',
    title : 'bem-components: link',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_a11y.css' },
        { elem : 'js', url : '_a11y.js' }
    ],
    content : {
        block : 'a11y-test',
        items : [
            {
                bemjson : {
                    block : 'link',
                    mods : { theme : 'islands' },
                    url : '//yandex.ru',
                    content : 'Yandex'
                },
                tab : 'Yandex [visited] link',
                arrow : '[visited] link Yandex',
                vo : 'link, Yandex'
            },
            {
                bemjson : {
                    block : 'link',
                    mods : { theme : 'islands', pseudo : true },
                    content : 'Yandex'
                },
                tab : 'Yandex button',
                arrow : 'Yandex button',
                vo : 'Yandex, button'
            },
            {
                bemjson : {
                    block : 'link',
                    mods : { theme : 'islands', disabled : true },
                    url : '//yandex.ru',
                    content : 'Yandex'
                },
                tab : '&mdash;',
                arrow : 'link unavailable Yandex',
                vo : '&mdash;'
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
                arrow : '[visited] link Yandex',
                vo : 'link, Yandex'
            }
        ]
    }
})
