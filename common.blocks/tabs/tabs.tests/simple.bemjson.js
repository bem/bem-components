({
    block : 'page',
    title : 'bem-components: tabs',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        { tag : 'h2', content : 'default' },
        { tag : 'p', content : {
            block : 'tabs',
            name : 'tabs-default',
            tabs : [
                {
                    title : 'First',
                    content : 'First tab content'
                },
                {
                    title : 'Second',
                    content : 'Second tab content'
                },
                {
                    title : 'Third',
                    content : 'Third tab content'
                }
            ] }
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'theme: simple, type: buttons' },
        { tag : 'p', content : {
            block : 'tabs',
            mods : { theme : 'simple', type : 'button' },
            tabs : [
                {
                    title : 'First',
                    content : 'First tab content'
                },
                {
                    title : 'Second',
                    content : 'Second tab content'
                },
                {
                    title : 'Third',
                    content : 'Third tab content'
                }
            ] }
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'theme : islands' },
        { tag : 'p', content : {
            block : 'tabs',
            mods : { theme : 'islands' },
            tabs : [
                {
                    title : 'First',
                    content : 'First tab content'
                },
                {
                    title : 'Second',
                    content : 'Second tab content',
                    checked : true

                },
                {
                    title : 'Third',
                    content : 'Third tab content'
                }
            ] }
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'theme : islands, type : button, size : m' },
        { tag : 'p', content : {
            block : 'tabs',
            mods : { theme : 'islands', type : 'button', size : 'm' },
            tabs : [
                {
                    title : 'First',
                    content : 'First tab content'
                },
                {
                    title : 'Second',
                    content : 'Second tab content'
                },
                {
                    title : 'Third',
                    content : 'Third tab content',
                    checked : true
                }
            ] }
        }
    ]
})
