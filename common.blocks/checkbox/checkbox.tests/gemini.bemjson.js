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
        {
            block  : 'test', content : {
                block : 'checkbox',
                text : 'first'
            },
            cls : 'default-enabled'
        },
        {
            block  : 'test', content : {
                block : 'checkbox',
                mods : { disabled : true },
                text : 'second'
            },
            cls : 'default-disabled'
        },
        {
            block  : 'test', content : {
                block : 'checkbox',
                mods : { disabled : true, checked : true },
                text : 'third'
            },
            cls : 'default-disabled-checked'
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal' },
        {
            block : 'test',
            content : {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm' },
                text : 'size_m'
            },
            cls : 'normal-size_m-enabled'
        },
        {
            block : 'test',
            content : {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm', disabled : true },
                text : 'size_m'
            },
            cls : 'normal-size_m-disabled'
        },
        {
            block : 'test',
            content : {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm', disabled : true, checked : true },
                text : 'size_m'
            },
            cls : 'normal-size_m-disabled-checked'
        },
        {
            block : 'test',
            content : {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'l' },
                text : 'size_l'
            },
            cls : 'normal-size_l-enabled'
        },
        {
            block : 'test',
            content : {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'l', disabled : true },
                text : 'size_l'
            },
            cls : 'normal-size_l-disabled'
        },
        {
            block : 'test',
            content : {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'l', disabled : true, checked : true },
                text : 'size_l'
            },
            cls : 'normal-size_l-disabled-checked'
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal-button' },
        [
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm', type : 'button' },
                text : 'first',
                mix : [{ block : 'normal-button-enabled' }]
            },
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm', type : 'button', disabled : true },
                text : 'second',
                mix : [{ block : 'normal-button-disabled' }]
            },
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm', type : 'button', disabled : true, checked : true },
                text : 'third',
                mix : [{ block : 'normal-button-disabled-checked' }]
            },
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm', type : 'button' },
                text : 'icon',
                icon : { block : 'icon', mods : { social : 'twitter' } },
                mix : [{ block : 'normal-button-icon-enabled' }]
            },
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm', type : 'button', disabled : true },
                text : 'icon',
                icon : { block : 'icon', mods : { social : 'twitter' } },
                mix : [{ block : 'normal-button-icon-disabled' }]
            },
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm', type : 'button', disabled : true, checked : true },
                text : 'icon',
                icon : { block : 'icon', mods : { social : 'twitter' } },
                mix : [{ block : 'normal-button-icon-disabled-checked' }]
            }
        ].map(function(block) {
            return {
                block  : 'test',
                content : block
            };
        })
    ]
});
