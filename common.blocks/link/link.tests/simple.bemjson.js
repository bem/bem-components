({
    block : 'page',
    title : 'bem-components: link',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'link',
            content : 'Empty link 1'
        },
        {
            block : 'link',
            content : {
                block : 'link-content',
                tag : '',
                content : 'Empty link 2'
            }
        },
        {
            block : 'link',
            url : 'http://yandex.ru',
            content : 'yandex.ru'
        },
        {
            block : 'link',
            url : 'http://yandex.com',
            title : 'One of the largest internet companies in Europe',
            content : 'yandex.com'
        },
        {
            block : 'link',
            url : 'http://yandex.com.tr',
            title : 'One of the largest internet companies in Europe',
            target : '_blank',
            content : 'yandex.com.tr'
        },
        {
            block : 'link',
            mods : { pseudo : true },
            content : 'Pseudo link'
        },
        {
            block : 'link',
            tabIndex : -1,
            content : 'yandex.ru'
        }
    ].map(function(l) { return { tag : 'div', content : l } })
})
