({
    block : 'page',
    title : 'bem-components: checkbox',
    mods : { theme : 'islands' },
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

        { tag : 'h2', content : 'islands' },
        {
            block : 'test',
            content : {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm' },
                text : 'size_m'
            },
            cls : 'islands-size_m-enabled'
        },
        {
            block : 'test',
            content : {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', disabled : true },
                text : 'size_m'
            },
            cls : 'islands-size_m-disabled'
        },
        {
            block : 'test',
            content : {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', disabled : true, checked : true },
                text : 'size_m'
            },
            cls : 'islands-size_m-disabled-checked'
        },
        {
            block : 'test',
            content : {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'l' },
                text : 'size_l'
            },
            cls : 'islands-size_l-enabled'
        },
        {
            block : 'test',
            content : {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'l', disabled : true },
                text : 'size_l'
            },
            cls : 'islands-size_l-disabled'
        },
        {
            block : 'test',
            content : {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'l', disabled : true, checked : true },
                text : 'size_l'
            },
            cls : 'islands-size_l-disabled-checked'
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'islands-button' },
        [
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', type : 'button' },
                text : 'first',
                mix : [{ block : 'islands-button-enabled' }]
            },
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
                text : 'second',
                mix : [{ block : 'islands-button-disabled' }]
            },
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', type : 'button', disabled : true, checked : true },
                text : 'third',
                mix : [{ block : 'islands-button-disabled-checked' }]
            },
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', type : 'button' },
                text : 'icon',
                icon : { block : 'icon', mods : { social : 'twitter' } },
                mix : [{ block : 'islands-button-icon-enabled' }]
            },
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
                text : 'icon',
                icon : { block : 'icon', mods : { social : 'twitter' } },
                mix : [{ block : 'islands-button-icon-disabled' }]
            },
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', type : 'button', disabled : true, checked : true },
                text : 'icon',
                icon : { block : 'icon', mods : { social : 'twitter' } },
                mix : [{ block : 'islands-button-icon-disabled-checked' }]
            }
        ].map(function(block) {
            return {
                block  : 'test',
                content : block
            };
        })
    ]
});
