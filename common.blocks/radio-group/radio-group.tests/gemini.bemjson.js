({
    block : 'page',
    title : 'bem-components: radio-group',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [

        { tag : 'h2', content : 'default ' },

        { block : 'test', cls : 'default-enabled', content : {
            block : 'radio-group',
            name : 'default1',
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true }
            ]
        } },

        { block : 'test', cls : 'default-disabled', content : {
            block : 'radio-group',
            name : 'default2',
            options : [
                { val : 3, text : 'third', disabled : true },
                { val : 4, text : 'four', checked : true, disabled : true }
            ]
        } },

        ['m', 'l'].map(function(size) {
            return [
                { tag : 'hr' },

                { tag : 'h2', content : 'size ' + size },

                { block : 'test', cls : 'normal-' + size + '-enabled', content : {
                    block : 'radio-group',
                    name : 'normal1',
                    mods : { theme : 'normal', size : size },
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second', checked : true }
                    ]
                } },

                { block : 'test', cls : 'normal-' + size + '-disabled', content : {
                    block : 'radio-group',
                    name : 'normal2',
                    mods : { theme : 'normal', size : size  },
                    options : [
                        { val : 3, text : 'third', disabled : true },
                        { val : 4, text : 'four', checked : true, disabled : true }
                    ]
                } },

                { block : 'test', cls : 'line-normal-' + size + '-enabled', content : {
                    block : 'radio-group',
                    name : 'normal-line1',
                    mods : { theme : 'normal', size : size, type : 'line' },
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second', checked : true }
                    ]
                } },

                { block : 'test', cls : 'line-normal-' + size + '-disabled', content : {
                    block : 'radio-group',
                    name : 'normal-line2',
                    mods : { theme : 'normal', size : size, type : 'line' },
                    options : [
                        { val : 3, text : 'third', disabled : true },
                        { val : 4, text : 'fourth', checked : true, disabled : true }
                    ]
                } },

                { block : 'test', content : {
                    block : 'radio-group',
                    name : 'normal-button1',
                    mods : { theme : 'normal', size : size, type : 'button' },
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second', checked : true }
                    ],
                    cls : 'button-normal-' + size + '-enabled'
                } },

                {
                    block : 'radio-group',
                    name : 'normal-button2',
                    mods : { theme : 'normal', size : size, type : 'button' },
                    options : [
                        { val : 3, text : 'third', disabled : true },
                        { val : 4, text : 'fourth', checked : true, disabled : true }
                    ],
                    cls : 'button-normal-' + size + '-disabled'
                },

                { tag : 'br' },

                { block : 'test', content : {
                    block : 'radio-group',
                    name : 'normal-button3',
                    mods : { theme : 'normal', size : size, type : 'button' },
                    cls : 'button-normal-' + size + '-icon-enabled',
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
                            checked : true
                        }
                    ]
                } },

                {
                    block : 'radio-group',
                    name : 'normal-button4',
                    mods : { theme : 'normal', size : size, type : 'button' },
                    cls : 'button-normal-' + size + '-icon-disabled',
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
                            checked : true,
                            icon : { block : 'icon', mods : { social : 'twitter' } }
                        }
                    ]
                }
            ]
        })

    ]
});
