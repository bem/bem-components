({
    block : 'page',
    title : 'bem-components: checkbox-group',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'default1',
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true },
                { val : 3, text : 'third', disabled : true }
            ]
        } },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'default2',
            mods : { disabled : true },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true }
            ]
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'simple' },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'simple1',
            mods : { theme : 'simple' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true },
                { val : 3, text : 'third', disabled : true }
            ]
        } },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'simple2',
            mods : { theme : 'simple', disabled : true },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true }
            ]
        } },

        { tag : 'h3', content : 'button' },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'simple-button1',
            mods : { theme : 'simple', type : 'button' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true },
                { val : 3, text : 'third', disabled : true },
                { val : 4, text : 'fourth', checked : true, disabled : true }
            ]
        } },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'simple-button2',
            mods : { theme : 'simple', type : 'button', disabled : true },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true }
            ]
        } },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'simple-button3',
            mods : { theme : 'simple', type : 'button' },
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

        { tag : 'hr' },

        { tag : 'h2', content : 'islands' },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'islands1',
            mods : { theme : 'islands', size : 'm' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true },
                { val : 3, text : 'third', disabled : true }
            ]
        } },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'islands2',
            mods : { theme : 'islands', size : 'm', disabled : true },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true }
            ]
        } },

        { tag : 'h3', content : 'size' },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'islands-size1',
            mods : { theme : 'islands', size : 'm' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true }
            ]
        } },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'islands-size2',
            mods : { theme : 'islands', size : 'l' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true }
            ]
        } },

        { tag : 'h3', content : 'line' },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'islands-line1',
            mods : { theme : 'islands', size : 'm', type : 'line' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true },
                { val : 3, text : 'third', disabled : true },
                { val : 4, text : 'fourth', checked : true, disabled : true }
            ]
        } },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'islands-line2',
            mods : { theme : 'islands', size : 'l', type : 'line', disabled : true },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true }
            ]
        } },

        { tag : 'h3', content : 'button' },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'islands-button1',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true },
                { val : 3, text : 'third', disabled : true },
                { val : 4, text : 'fourth', checked : true, disabled : true }
            ]
        } },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'islands-button2',
            mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true }
            ]
        } },
        { tag : 'p', content : {
            block : 'checkbox-group',
            name : 'islands-button3',
            mods : { theme : 'islands', size : 'm', type : 'button' },
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
        } }
    ]
});
