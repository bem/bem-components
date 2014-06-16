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
            tag : 'p', content : {
                block : 'checkbox',
                text : 'first'   
            },
            attrs : { style : 'width : 100px;' },
            cls : 'default-enabled'
        },
        {   
            tag : 'p', content : {
                block : 'checkbox',
                mods : { disabled : true },
                text : 'second',    
            },
            attrs : { style : 'width : 100px;' },
            cls : 'default-disabled'
        },
        {
            tag : 'p', content : {
                block : 'checkbox',
                mods : { disabled : true, checked : true },
                text : 'third',   
            },
            attrs : { style : 'width : 100px;' },
            cls : 'default-disabled-checked'
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal' },
        [
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm' },
                text : 'size_m',
                cls : 'normal-size_m-enabled'
            },
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm', disabled : true },
                text : 'size_m',
                cls : 'normal-size_m-disabled'
            },
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'm', disabled : true, checked : true },
                text : 'size_m',
                cls : 'normal-size_m-disabled-checked'
            },
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'l' },
                text : 'size_l',
                cls : 'normal-size_l-enabled'
            },
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'l', disabled : true },
                text : 'size_l',
                cls : 'normal-size_l-disabled'
            },
            {
                block : 'checkbox',
                mods : { theme : 'normal', size : 'l', disabled : true, checked : true },
                text : 'size_l',
                cls : 'normal-size_l-disabled-checked'
            }
        ].map(function(block) {
            return { 
                tag : 'p', 
                content : block 
            };
        }),

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
                tag : 'p', 
                content : block 
            };
        }) 
    ]
});
