({
    block : 'page',
    title : 'bem-components: checkbox',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        { tag : 'p', content : [
            {
                block : 'checkbox',
                text : 'first',
                cls : 'gemini-test-checkbox-default-enabled'
            },
            ' ',
            {
                block : 'checkbox',
                mods : { disabled : true },
                text : 'third',
                cls : 'gemini-test-checkbox-default-disabled'
            },
        ] },

        { tag : 'hr' },

        

        { tag : 'h3', content : 'normal' },
        { tag : 'p', content : [
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm' },
                val : 1,
                name : 'r1',
                text : 'size_m',
                cls : 'gemini-test-checkbox-normal-size_m-enabled'
            },
            ' ',
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm', disabled : true },
                val : 3,
                name : 'r1',
                text : 'size_m',
                cls : 'gemini-test-checkbox-normal-size_m-disabled'
            },
            ' ',
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'l' },
                val : 1,
                name : 'r1',
                text : 'size_l',
                cls : 'gemini-test-checkbox-normal-size_l-enabled'
            },
            ' ',
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'l' , disabled : true },
                val : 1,
                name : 'r1',
                text : 'size_l',
                cls : 'gemini-test-checkbox-normal-size_l-disabled'
            }
        ] },

        { tag : 'h3', content : 'button' },
        { tag : 'p', content : [
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm', type : 'button' },
                val : 1,
                name : 'r1',
                text : 'first',
                cls : 'gemini-test-checkbox-normal-button-enabled'
            },
            '&nbsp;',
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm', type : 'button', disabled : true },
                val : 3,
                name : 'r1',
                text : 'third',
                cls : 'gemini-test-checkbox-normal-button-disabled'
            },
            '&nbsp;',
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm', type : 'button' },
                text : 'icon',
                icon : { block : 'icon', mods : { social : 'twitter' } },
                cls : 'gemini-test-checkbox-normal-button-icon-enabled'
            },
            '&nbsp;',
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm', type : 'button', disabled : true },
                text : 'icon',
                icon : { block : 'icon', mods : { social : 'twitter' } },
                cls : 'gemini-test-checkbox-normal-button-icon-disabled'
            }
        ] }
    ]
});
