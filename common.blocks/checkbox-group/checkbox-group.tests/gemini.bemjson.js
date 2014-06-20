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
                name : 'default1',
                options : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second', checked : true }
                ]
            },
            cls : 'default-enabled' 
        },
        { 
            block : 'test', content : {
                block : 'checkbox-group',
                name : 'default2',
                mods : { disabled : true },
                options : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second', checked : true }
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
                        name : 'normal1',
                        mods : { theme : 'normal', size : size },
                        options : [
                            { val : 1, text : 'first' },
                            { val : 2, text : 'second', checked : true }
                        ]
                    },
                    cls : 'normal-size_' + size + '-enabled' 
                },
                { 
                    block : 'test', content : {
                        block : 'checkbox-group',
                        name : 'normal2',
                        mods : { theme : 'normal', size : size, disabled : true },
                        options : [
                            { val : 1, text : 'first' },
                            { val : 2, text : 'second', checked : true }
                        ]
                    } ,
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
                        name : 'normal-line1',
                        mods : { theme : 'normal', size : size, type : 'line' },
                        options : [
                            { val : 1, text : 'first' },
                            { val : 2, text : 'second', checked : true }
                        ]
                    },
                    cls : 'line-size_' + size + '-enabled' 
                },
                { 
                    block : 'test', content : {
                        block : 'checkbox-group',
                        name : 'normal-line1',
                        mods : { theme : 'normal', size : size, type : 'line', disabled : true },
                        options : [
                            { val : 1, text : 'first' },
                            { val : 2, text : 'second', checked : true }
                        ]
                    } ,
                    cls : 'line-size_' + size + '-disabled'
                }
            ]
        }),

        { tag : 'h3', content : 'button' },
        ['m', 'l'].map(function(size){
            return [
                { tag : 'p', content : {
                    block : 'checkbox-group',
                    name : 'normal-button1',
                    mods : { theme : 'normal', size : size, type : 'button' },
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second', checked : true }
                    ],
                    cls : 'button-size_' + size + '-enabled'
                } },
                { tag : 'p', content : {
                    block : 'checkbox-group',
                    name : 'normal-button2',
                    mods : { theme : 'normal', size : size, type : 'button', disabled : true },
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second', checked : true }
                    ],
                    cls : 'button-size_' + size + '-disabled'
                } },
                { tag : 'p', content : {
                    block : 'checkbox-group',
                    name : 'normal-button3',
                    mods : { theme : 'normal', size : size, type : 'button' },
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
                    ],
                    cls : 'button-icon-size_' + size + '-enabled'
                } },
                { tag : 'p', content : {
                    block : 'checkbox-group',
                    name : 'normal-button3',
                    mods : { theme : 'normal', size : size, type : 'button', disabled : true },
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
                    ],
                    cls : 'button-icon-size_' + size + '-disabled'
                } }
            ]
        })
    ]
});
