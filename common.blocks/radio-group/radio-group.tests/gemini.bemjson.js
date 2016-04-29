({
    block : 'page',
    title : 'bem-components: radio-group',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'gemini.css' },
        { elem : 'js', url : 'gemini.js' }
    ],
    content : [

        { tag : 'h2', content : 'default ' },

        { block : 'test', cls : 'default-enabled', content : {
            block : 'radio-group',
            name : 'default1',
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ]
        } },

        { block : 'test', cls : 'default-disabled', content : {
            block : 'radio-group',
            name : 'default2',
            val : 4,
            options : [
                { val : 3, text : 'third', disabled : true },
                { val : 4, text : 'four', disabled : true }
            ]
        } },

        ['m', 'l'].map(function(size) {
            return [
                { tag : 'hr' },

                { tag : 'h2', content : 'size ' + size },

                { block : 'test', cls : 'islands-' + size + '-enabled', content : {
                    block : 'radio-group',
                    name : 'islands1',
                    mods : { theme : 'islands', size : size },
                    val : 2,
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second' }
                    ]
                } },

                { block : 'test', cls : 'islands-' + size + '-disabled', content : {
                    block : 'radio-group',
                    name : 'islands2',
                    mods : { theme : 'islands', size : size },
                    val : 4,
                    options : [
                        { val : 3, text : 'third', disabled : true },
                        { val : 4, text : 'four', disabled : true }
                    ]
                } },

                { block : 'test', cls : 'line-islands-' + size + '-enabled', content : {
                    block : 'radio-group',
                    name : 'islands-line1',
                    mods : { theme : 'islands', size : size, type : 'line' },
                    val : 2,
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second' }
                    ]
                } },

                { block : 'test', cls : 'line-islands-' + size + '-disabled', content : {
                    block : 'radio-group',
                    name : 'islands-line2',
                    mods : { theme : 'islands', size : size, type : 'line' },
                    val : 4,
                    options : [
                        { val : 3, text : 'third', disabled : true },
                        { val : 4, text : 'fourth', disabled : true }
                    ]
                } },

                { block : 'test', content : {
                    block : 'radio-group',
                    name : 'islands-button1',
                    mods : { theme : 'islands', size : size, type : 'button' },
                    val : 2,
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second' }
                    ],
                    cls : 'button-islands-' + size + '-enabled'
                } },

                {
                    block : 'radio-group',
                    name : 'islands-button2',
                    mods : { theme : 'islands', size : size, type : 'button' },
                    val : 4,
                    options : [
                        { val : 3, text : 'third', disabled : true },
                        { val : 4, text : 'fourth', disabled : true }
                    ],
                    cls : 'button-islands-' + size + '-disabled'
                },

                { tag : 'br' },

                { block : 'test', content : {
                    block : 'radio-group',
                    name : 'islands-button3',
                    mods : { theme : 'islands', size : size, type : 'button' },
                    cls : 'button-islands-' + size + '-icon-enabled',
                    val : 'twitter',
                    options : [
                        {
                            val : 'vk',
                            text : 'VK',
                            icon : { block : 'icon', mods : { social : 'vk' } }
                        },
                        {
                            val : 'twitter',
                            text : 'Twitter',
                            icon : { block : 'icon', mods : { social : 'twitter' } },
                        }
                    ]
                } },

                {
                    block : 'radio-group',
                    name : 'islands-button4',
                    mods : { theme : 'islands', size : size, type : 'button' },
                    cls : 'button-islands-' + size + '-icon-disabled',
                    val : 'twitter',
                    options : [
                        {
                            val : 'vk',
                            text : 'VK',
                            disabled : true,
                            icon : { block : 'icon', mods : { social : 'vk' } }
                        },
                        {
                            val : 'twitter',
                            text : 'Twitter',
                            disabled : true,
                            icon : { block : 'icon', mods : { social : 'twitter' } }
                        }
                    ]
                }
            ]
        })

    ]
});
