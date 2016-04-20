({
    block : 'page',
    title : 'bem-components: control-group',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'gemini.css' },
        { elem : 'js', url : 'gemini.js' }
    ],
    content : [
        { tag : 'h3', content : 'search form' },
        { tag : 'p', content : {
            block : 'control-group',
            content : [
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'm' },
                    icon : { block : 'icon', mods : { action : 'down' } },
                    cls : 'search-form-down'
                },
                {
                    block : 'input',
                    mods : { theme : 'islands', size : 'm', type : 'search' },
                    val : 'Saint-Petersburg',
                    placeholder : 'query'
                },
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'm' },
                    text : 'search',
                    cls : 'search-form-search'
                }
            ],
            cls : 'search-form'
        } },

        { tag : 'h3', content : 'multiple form' },
        { tag : 'p', content : {
            block : 'control-group',
            content : [
                {
                    block : 'input',
                    mods : { theme : 'islands', size : 'm' },
                    placeholder : 'price from',
                    cls : 'multiple-form-from'
                },
                {
                    block : 'input',
                    mods : { theme : 'islands', size : 'm' },
                    placeholder : 'to',
                    cls : 'multiple-form-to'
                },
                {
                    block : 'select',
                    mods : { mode : 'radio', theme : 'islands', size : 'm' },
                    val : 'usd',
                    options : [
                        { val : 'usd', text : '$' },
                        { val : 'euro', text : '€' }
                    ]
                }
            ],
            cls : 'multiple-form'
        } }
    ]
});
