({
    block : 'page',
    title : 'bem-components: checkbox',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        { tag : 'p', content : [
            {
                block : 'checkbox',
                text : 'first'
            },
            ' ',
            {
                block : 'checkbox',
                mods : { checked : true },
                text : 'second'
            },
            ' ',
            {
                block : 'checkbox',
                mods : { disabled : true },
                text : 'third'
            },
            ' ',
            {
                block : 'checkbox',
                mods : { checked : true, disabled : true },
                text : 'fourth'
            }
        ] },

        { tag : 'hr' },

        { tag : 'h2', content : 'simple' },
        { tag : 'p', content : [
            {
                block : 'checkbox',
                mods : { theme : 'simple' },
                text : 'first'
            },
            ' ',
            {
                block : 'checkbox',
                mods : { theme : 'simple', checked : true },
                text : 'second'
            },
            ' ',
            {
                block : 'checkbox',
                mods : { theme : 'simple', disabled : true },
                text : 'third'
            },
            ' ',
            {
                block : 'checkbox',
                mods : { theme : 'simple', checked : true, disabled : true },
                text : 'fourth'
            }
        ] },

        { tag : 'h3', content : 'button' },
        { tag : 'p', content : [
            {
                block : 'checkbox',
                mods : { theme : 'simple', type : 'button' },
                text : 'first'
            },
            '&nbsp;',
            {
                block : 'checkbox',
                mods : { theme : 'simple', type : 'button', checked : true },
                text : 'second'
            },
            '&nbsp;',
            {
                block : 'checkbox',
                mods : { theme : 'simple', type : 'button', disabled : true },
                text : 'third'
            },
            '&nbsp;',
            {
                block : 'checkbox',
                mods : { theme : 'simple', type : 'button', checked : true, disabled : true },
                text : 'fourth'
            },
            '&nbsp;',
            {
                block : 'checkbox',
                mods : { theme : 'simple', type : 'button' },
                text : 'icon',
                icon : { block : 'icon', mods : { social : 'twitter' } }
            }
        ] },

        { tag : 'hr' },

        { tag : 'h2', content : 'islands' },
        { tag : 'p', content : [
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm' },
                val : 1,
                name : 'r1',
                text : 'first'
            },
            ' ',
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', checked : true },
                val : 2,
                name : 'r1',
                text : 'second'
            },
            ' ',
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', disabled : true },
                val : 3,
                name : 'r1',
                text : 'third'
            },
            ' ',
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', disabled : true, checked : true },
                val : 4,
                name : 'r1',
                text : 'fourth'
            }
        ] },

        { tag : 'h3', content : 'size' },
        { tag : 'p', content : [
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm' },
                val : 1,
                name : 'r1',
                text : 'size_m'
            },
            ' ',
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', checked : true },
                val : 2,
                name : 'r1',
                text : 'size_m'
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'l' },
                val : 1,
                name : 'r1',
                text : 'size_l'
            },
            ' ',
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'l', checked : true },
                val : 2,
                name : 'r1',
                text : 'size_l'
            }
        ] },

        { tag : 'h3', content : 'button' },
        { tag : 'p', content : [
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', type : 'button' },
                val : 1,
                name : 'r1',
                text : 'first'
            },
            '&nbsp;',
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', type : 'button', checked : true },
                val : 2,
                name : 'r1',
                text : 'second'
            },
            '&nbsp;',
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
                val : 3,
                name : 'r1',
                text : 'third'
            },
            '&nbsp;',
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', type : 'button', checked : true, disabled : true },
                val : 4,
                name : 'r1',
                text : 'fourth'
            },
            '&nbsp;',
            {
                block : 'checkbox',
                mods : { theme : 'islands', size : 'm', type : 'button' },
                text : 'icon',
                icon : { block : 'icon', mods : { social : 'twitter' } }
            }
        ] }
    ]
});
