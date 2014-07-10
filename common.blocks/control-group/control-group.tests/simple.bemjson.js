({
    block : 'page',
    title : 'bem-components: control-group',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        { tag : 'h2', content : 'normal' },

        { tag : 'h3', content : 'checkbox-group' },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'normal-checkbox1',
            mods : { theme : 'normal', size : 'm', type : 'button' },
            options : [
                { val : 1, text : 'first', checked : true },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true },
                { val : 4, text : 'fourth', checked : true, disabled : true },
                { val : 5, text : 'fifth' }
            ]
        } },

        { tag : 'h3', content : 'radio-group' },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'normal-button1',
            mods : { theme : 'normal', size : 'm', type : 'button' },
            options : [
                { val : 1, text : 'first', checked : true },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true },
                { val : 4, text : 'fourth', checked : true, disabled : true },
                { val : 5, text : 'fifth' }
            ]
        } },

        { tag : 'h3', content : 'search form' },
        { tag : 'p', content : {
            block : 'control-group',
            content : [
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm' },
                    icon : { block : 'icon', mods : { action : 'down' } }
                },
                {
                    block : 'input',
                    mods : { theme : 'normal', size : 'm', type : 'search' },
                    val : 'Saint-Petersburg',
                    placeholder : 'query'
                },
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm' },
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
                    mods : { theme : 'normal', size : 'm' },
                    placeholder : 'price from'
                },
                {
                    block : 'input',
                    mods : { theme : 'normal', size : 'm' },
                    placeholder : 'to'
                },
                {
                    block : 'select',
                    mods : { mode : 'radio', theme : 'normal', size : 'm' },
                    options : [
                        { val : 'usd', text : '$', checked : true },
                        { val : 'euro', text : '€' }
                    ]
                }
            ]
        } }
    ]
});
