({
    block : 'page',
    title : 'bem-components: button',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        { tag : 'p', content : { block : 'button', text : 'default' } },
        { tag : 'p', content : {
            block : 'button',
            text : 'disabled',
            mods : { disabled : true }
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { type : 'link' },
            url : '#',
            text : 'link'
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'simple' },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'simple' },
            text : 'simple'
        } },
        { tag : 'p', content : {
            block : 'button',
            text : 'disabled',
            mods : { theme : 'simple', disabled : true }
        } },

        { tag : 'p', content : {
            block : 'button',
            text : 'with icon',
            mods : { theme : 'simple' },
            icon : { block : 'icon', mods : { social : 'twitter' } }
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'simple' },
            icon : { block : 'icon', mods : { social : 'vk' } }
        } },

        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'simple', type : 'link' },
            url : '#',
            text : 'link'
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal' },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'normal', size : 'm' },
            text : 'normal'
        } },
        { tag : 'p', content : {
            block : 'button',
            text : 'disabled',
            mods : { theme : 'normal', size : 'm', disabled : true }
        } },

        { tag : 'h3', content : 'view' },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'normal', size : 'm' },
            text : 'normal'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'normal', pseudo : true, size : 'm' },
            text : 'pseudo'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'normal', action : true, size : 'm' },
            text : 'action'
        } },

        { tag : 'h3', content : 'size' },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'normal', size : 's' },
            text : 'size s'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'normal', size : 'm' },
            text : 'size m'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'normal', size : 'l' },
            text : 'size l'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'normal', size : 'xl' },
            text : 'size xl'
        } },

        { tag : 'h3', content : 'link' },
        { tag : 'p', content : {
            block : 'button',
            mods : {
                theme : 'normal',
                size : 'm',
                type : 'link'
            },
            url : '#',
            text : 'default link'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : {
                theme : 'normal',
                size : 'm',
                type : 'link',
                disabled : true
            },
            url : '#',
            text : 'disabled link'
        } },

        { tag : 'h3', content : 'icon' },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                // Здесь иконка прописана через content, чтобы появилась в deps.js
                content : { elem : 'icon', content : { block : 'icon', mods : { action : 'download' } } }
            },
            ' ',
            {
                block : 'button',
                text : 'up',
                mods : { theme : 'normal', size : 's' },
                icon : { block : 'icon', mods : { action : 'up' } }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { elem : 'text', content : 'down' },
                    { elem : 'icon', content : { block : 'icon', mods : { action : 'down' } } }
                ]
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { elem : 'icon', content : { block : 'icon', mods : { action : 'left' } } },
                    { elem : 'text', content : 'set width' },
                    { elem : 'icon', content : { block : 'icon', mods : { action : 'right' } } }
                ]
            },
            ' ololo ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { elem : 'text', content : 'o' },
                    { elem : 'icon', content : { block : 'icon', mods : { action : 'left' } } },
                    { elem : 'text', content : '^' },
                    { elem : 'text', content : '_' },
                    { elem : 'text', content : '^' },
                    { elem : 'icon', content : { block : 'icon', mods : { action : 'right' } } },
                    { elem : 'text', content : 'o' }
                ]
            },
            ' trololo ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { elem : 'icon', content : { block : 'icon', mods : { action : 'left' } } },
                    { elem : 'text', content : '0' },
                    { elem : 'icon', content : { block : 'icon', mods : { action : 'up' } } },
                    { elem : 'text', content : 'o' },
                    { elem : 'icon', content : { block : 'icon', mods : { action : 'right' } } }
                ]
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm' },
                icon : { block : 'icon', mods : { action : 'download' } }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm' },
                content : [
                    { elem : 'icon', content : { block : 'icon', mods : { action : 'left' } } },
                    { elem : 'text', content : 'set width' },
                    { elem : 'icon', content : { block : 'icon', mods : { action : 'right' } } }
                ]
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'l' },
                icon : { block : 'icon', mods : { action : 'download' } }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'l' },
                content : [
                    { elem : 'icon', content : { block : 'icon', mods : { action : 'left' } } },
                    { elem : 'text', content : 'set width' },
                    { elem : 'icon', content : { block : 'icon', mods : { action : 'right' } } }
                ]
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'xl' },
                icon : { block : 'icon', mods : { action : 'download' } }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'xl' },
                content : [
                    { elem : 'icon', content : { block : 'icon', mods : { action : 'left' } } },
                    { elem : 'text', content : 'set width' },
                    { elem : 'icon', content : { block : 'icon', mods : { action : 'right' } } }
                ]
            }
        ] },

        { tag : 'h3', content : 'spin' },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                icon : { block : 'spin', mods : { theme : 'normal', size : 'xs', progress : true } }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                text : 'Loading...',
                icon : { block : 'spin', mods : { theme : 'normal', size : 'xs', progress : true } }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm' },
                text : 'Loading...',
                icon : { block : 'spin', mods : { theme : 'normal', size : 'xs', progress : true } }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'l' },
                text : 'Loading...',
                icon : { block : 'spin', mods : { theme : 'normal', size : 'xs', progress : true } }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'xl' },
                text : 'Loading...',
                icon : { block : 'spin', mods : { theme : 'normal', size : 's', progress : true } }
            }
        ] },

        { tag : 'p', content : [
            { tag : 'span', content : {
                block : 'button',
                mods : { theme : 'normal', size : 'm', togglable : 'check' },
                text : 'check'
            } },
            ' ',
            { tag : 'span', content : [
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm', togglable : 'radio' },
                    text : 'radio'
                },
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm', togglable : 'radio' },
                    text : 'radio'
                },
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm', togglable : 'radio', checked : true },
                    text : 'radio'
                }
            ] }
        ] }
    ]
});
