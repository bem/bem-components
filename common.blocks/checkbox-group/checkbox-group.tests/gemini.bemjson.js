({
    block : 'page',
    title : 'bem-components: checkbox-group',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'gemini.css' },
        { elem : 'js', url : 'gemini.js' }
    ],
    content : [
        { tag : 'h2', content : 'islands' },
        ['m', 'l'].map(function(size) {
            return [
                {
                    block : 'test', content : {
                        block : 'checkbox-group',
                        mods : { theme : 'islands', size : size },
                        val : [2],
                        options : [
                            { text : 'first', val : 1 },
                            { text : 'second', val : 2 }
                        ]
                    },
                    cls : 'islands-size_' + size + '-enabled'
                },
                {
                    block : 'test', content : {
                        block : 'checkbox-group',
                        mods : { theme : 'islands', size : size, disabled : true },
                        val : [2],
                        options : [
                            { text : 'first', val : 1 },
                            { text : 'second', val : 2 }
                        ]
                    },
                    cls : 'islands-size_' + size + '-disabled'
                }
            ]
        }),

        { tag : 'h3', content : 'line' },
        ['m', 'l'].map(function(size){
            return [
                {
                    block : 'test', content : {
                        block : 'checkbox-group',
                        mods : { theme : 'islands', size : size, type : 'line' },
                        val : [2],
                        options : [
                            { text : 'first', val : 1 },
                            { text : 'second', val : 2 }
                        ]
                    },
                    attrs : { style : 'margin-bottom: 5px;' },
                    cls : 'line-size_' + size + '-enabled'
                },
                {
                    block : 'test', content : {
                        block : 'checkbox-group',
                        mods : { theme : 'islands', size : size, type : 'line', disabled : true },
                        val : [2],
                        options : [
                            { text : 'first', val : 1 },
                            { text : 'second', val : 2 }
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
                    mods : { theme : 'islands', size : size, type : 'button' },
                    val : [2],
                    options : [
                        { text : 'first', val : 1 },
                        { text : 'second', val : 2 }
                    ],
                    cls : 'button-size_' + size + '-enabled'
                } },
                { tag : 'p', content : {
                    block : 'checkbox-group',
                    mods : { theme : 'islands', size : size, type : 'button', disabled : true },
                    val : [2],
                    options : [
                        { text : 'first', val : 1 },
                        { text : 'second', val : 2 }
                    ],
                    cls : 'button-size_' + size + '-disabled'
                } },
                { tag : 'p', content : {
                    block : 'checkbox-group',
                    mods : { theme : 'islands', size : size, type : 'button' },
                    val : [2],
                    options : [
                        {
                            text : 'VK',
                            icon : { block : 'icon', mods : { social : 'vk' } },
                            val : 1
                        },
                        {
                            text : 'Twitter',
                            icon : { block : 'icon', mods : { social : 'twitter' } },
                            val : 2
                        }
                    ],
                    cls : 'button-icon-size_' + size + '-enabled'
                } },
                { tag : 'p', content : {
                    block : 'checkbox-group',
                    mods : { theme : 'islands', size : size, type : 'button', disabled : true },
                    val : [2],
                    options : [
                        {
                            text : 'VK',
                            icon : { block : 'icon', mods : { social : 'vk' } },
                            val : 1
                        },
                        {
                            text : 'Twitter',
                            icon : { block : 'icon', mods : { social : 'twitter' } },
                            val : 2
                        }
                    ],
                    cls : 'button-icon-size_' + size + '-disabled'
                } }
            ]
        })
    ]
});
