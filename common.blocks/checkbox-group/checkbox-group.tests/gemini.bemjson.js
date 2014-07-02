({
    block : 'page',
    title : 'bem-components: checkbox-group',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        {
            block : 'test', content : {
                block : 'checkbox-group',
                options : [
                    { text : 'first' },
                    { text : 'second', checked : true }
                ]
            },
            cls : 'default-enabled'
        },
        {
            block : 'test', content : {
                block : 'checkbox-group',
                mods : { disabled : true },
                options : [
                    { text : 'first' },
                    { text : 'second', checked : true }
                ]
            },
            cls : 'default-disabled'
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal' },
        ['m', 'l'].map(function(size) {
            return [
                {
                    block : 'test', content : {
                        block : 'checkbox-group',
                        mods : { theme : 'normal', size : size },
                        options : [
                            { text : 'first' },
                            { text : 'second', checked : true }
                        ]
                    },
                    cls : 'normal-size_' + size + '-enabled'
                },
                {
                    block : 'test', content : {
                        block : 'checkbox-group',
                        mods : { theme : 'normal', size : size, disabled : true },
                        options : [
                            { text : 'first' },
                            { text : 'second', checked : true }
                        ]
                    },
                    cls : 'normal-size_' + size + '-disabled'
                }
            ]
        }),

        { tag : 'h3', content : 'line' },
        ['m', 'l'].map(function(size){
            return [
                {
                    block : 'test', content : {
                        block : 'checkbox-group',
                        mods : { theme : 'normal', size : size, type : 'line' },
                        options : [
                            { text : 'first' },
                            { text : 'second', checked : true }
                        ]
                    },
                    attrs : { style : 'margin-bottom: 5px;' },
                    cls : 'line-size_' + size + '-enabled'
                },
                {
                    block : 'test', content : {
                        block : 'checkbox-group',
                        mods : { theme : 'normal', size : size, type : 'line', disabled : true },
                        options : [
                            { text : 'first' },
                            { text : 'second', checked : true }
                        ]
                    },
                    cls : 'line-size_' + size + '-disabled'
                }
            ]
        }),

        { tag : 'h3', content : 'button' },
        ['m', 'l'].map(function(size){
            return [
                { tag : 'p', content : {
                    block : 'checkbox-group',
                    mods : { theme : 'normal', size : size, type : 'button' },
                    options : [
                        { text : 'first' },
                        { text : 'second', checked : true }
                    ],
                    cls : 'button-size_' + size + '-enabled'
                } },
                { tag : 'p', content : {
                    block : 'checkbox-group',
                    mods : { theme : 'normal', size : size, type : 'button', disabled : true },
                    options : [
                        { text : 'first' },
                        { text : 'second', checked : true }
                    ],
                    cls : 'button-size_' + size + '-disabled'
                } },
                { tag : 'p', content : {
                    block : 'checkbox-group',
                    mods : { theme : 'normal', size : size, type : 'button' },
                    options : [
                        {
                            text : 'VK',
                            icon : { block : 'icon', mods : { social : 'vk' } }
                        },
                        {
                            text : 'Twitter',
                            icon : { block : 'icon', mods : { social : 'twitter' } },
                            checked : true
                        }
                    ],
                    cls : 'button-icon-size_' + size + '-enabled'
                } },
                { tag : 'p', content : {
                    block : 'checkbox-group',
                    mods : { theme : 'normal', size : size, type : 'button', disabled : true },
                    options : [
                        {
                            text : 'VK',
                            icon : { block : 'icon', mods : { social : 'vk' } }
                        },
                        {
                            text : 'Twitter',
                            icon : { block : 'icon', mods : { social : 'twitter' } },
                            checked : true
                        }
                    ],
                    cls : 'button-icon-size_' + size + '-disabled'
                } }
            ]
        })
    ]
});
