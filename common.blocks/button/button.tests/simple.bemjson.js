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
        { tag : 'p', content : {
            block : 'button',
            mods : { type : 'link', disabled : true },
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
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm' },
                text : 'normal'
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', disabled : true },
                text : 'normal'
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', pseudo : true },
                text : 'pseudo'
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', pseudo : true, disabled : true },
                text : 'pseudo'
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', action : true },
                text : 'action'
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', action : true, disabled : true },
                text : 'action'
            }
        ] },

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

        { tag : 'h3', content : 'max-width' },
        { tag : 'p', content : {
            block : 'button',
            mods : {
                theme : 'normal',
                size : 'm'
            },
            textMaxWidth : 100,
            text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        } },

        { tag : 'h3', content : 'icon' },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                // Здесь иконка прописана через content, чтобы появилась в deps.js
                content : { block : 'icon', mods : { action : 'download' } }
            },
            ' ',
            {
                block : 'button',
                text : 'download',
                mods : { theme : 'normal', size : 's', disabled : true },
                icon : { block : 'icon', mods : { action : 'download' } }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { elem : 'text', content : 'down' },
                    { block : 'icon', mods : { action : 'down' } }
                ]
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { block : 'icon', mods : { action : 'left' } },
                    { elem : 'text', content : 'set width' },
                    { block : 'icon', mods : { action : 'right' } }
                ]
            },
            ' ololo ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { elem : 'text', content : 'o' },
                    { block : 'icon', mods : { action : 'left' } },
                    { elem : 'text', content : '^' },
                    { elem : 'text', content : '_' },
                    { elem : 'text', content : '^' },
                    { block : 'icon', mods : { action : 'right' } },
                    { elem : 'text', content : 'o' }
                ]
            },
            ' trololo ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { block : 'icon', mods : { action : 'left' } },
                    { elem : 'text', content : '0' },
                    { block : 'icon', mods : { action : 'up' } },
                    { elem : 'text', content : 'o' },
                    { block : 'icon', mods : { action : 'right' } }
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
                    { block : 'icon', mods : { action : 'left' } },
                    { elem : 'text', content : 'set width' },
                    { block : 'icon', mods : { action : 'right' } }
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
                    { block : 'icon', mods : { action : 'left' } },
                    { elem : 'text', content : 'set width' },
                    { block : 'icon', mods : { action : 'right' } }
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
                    { block : 'icon', mods : { action : 'left' } },
                    { elem : 'text', content : 'set width' },
                    { block : 'icon', mods : { action : 'right' } }
                ]
            }
        ] },

        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', togglable : 'check' },
                text : 'check'
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', togglable : 'radio' },
                text : 'radio'
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', togglable : 'check', pseudo : true },
                text : 'check'
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', togglable : 'radio', pseudo : true },
                text : 'radio'
            }
        ] }
    ]
});
