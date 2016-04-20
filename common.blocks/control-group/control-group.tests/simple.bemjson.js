({
    block : 'page',
    title : 'bem-components: control-group',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'simple.css' },
        { elem : 'js', url : 'simple.js' }
    ],
    content : [
        { tag : 'h2', content : 'islands' },

        { tag : 'h3', content : 'checkbox-group' },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'islands-checkbox1',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            val : [1, 4],
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true },
                { val : 4, text : 'fourth', disabled : true },
                { val : 5, text : 'fifth' }
            ]
        } },

        { tag : 'h3', content : 'radio-group' },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'islands-button1',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            val : [1, 4],
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true },
                { val : 4, text : 'fourth', disabled : true },
                { val : 5, text : 'fifth' }
            ]
        } },

        { tag : 'h3', content : 'search form' },
        { tag : 'p', content : {
            block : 'control-group',
            content : [
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'm' },
                    icon : { block : 'icon', mods : { action : 'down' } }
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
                    text : 'search'
                }
            ]
        } },

        { tag : 'h3', content : 'multiple form' },
        { tag : 'p', content : {
            block : 'control-group',
            content : [
                {
                    block : 'input',
                    mods : { theme : 'islands', size : 'm' },
                    placeholder : 'price from'
                },
                {
                    block : 'input',
                    mods : { theme : 'islands', size : 'm' },
                    placeholder : 'to'
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
            ]
        } }
    ]
});
