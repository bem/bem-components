({
    block : 'page',
    title : 'bem-components: button',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        { tag : 'p', content : {
            block : 'button',
            text : 'default'
        } },
        { tag : 'p', content : {
            block : 'button',
            text : 'disabled',
            mods : { disabled : true }
        } },
        { tag : 'p', content : {
            block : 'button',
            text : 'submit',
            mods : { type : 'submit' }
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
            text : 'disabled link'
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
            mods : { theme : 'simple', type : 'submit' },
            text : 'submit'
        } },

        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'simple', type : 'link' },
            url : '#',
            text : 'link'
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'islands' },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'islands', size : 'm' },
            text : 'islands'
        } },
        { tag : 'p', content : {
            block : 'button',
            text : 'disabled',
            mods : { theme : 'islands', size : 'm', disabled : true }
        } },

        { tag : 'h3', content : 'view' },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'islands', size : 'm' },
                text : 'islands'
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'islands', size : 'm', disabled : true },
                text : 'islands'
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'islands', size : 'm', view : 'pseudo' },
                text : 'pseudo'
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'islands', size : 'm', view : 'pseudo', disabled : true },
                text : 'pseudo'
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'islands', size : 'm', view : 'action' },
                text : 'action'
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'islands', size : 'm', view : 'action', disabled : true },
                text : 'action'
            }
        ] },

        { tag : 'h3', content : 'size' },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'islands', size : 's' },
            text : 'size s'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'islands', size : 'm' },
            text : 'size m'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'islands', size : 'l' },
            text : 'size l'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'islands', size : 'xl' },
            text : 'size xl'
        } },

        { tag : 'h3', content : 'submit' },
        { tag : 'p', content : {
            block : 'button',
            mods : {
                theme : 'islands',
                size : 'm',
                type : 'submit'
            },
            text : 'submit'
        } },

        { tag : 'h3', content : 'link' },
        { tag : 'p', content : {
            block : 'button',
            mods : {
                theme : 'islands',
                size : 'm',
                type : 'link'
            },
            url : '#',
            text : 'default link'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : {
                theme : 'islands',
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
                theme : 'islands',
                size : 'm'
            },
            textMaxWidth : 100,
            text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        } },

        { tag : 'h3', content : 'with title' },
        { tag : 'p', content : {
            block : 'button',
            mods : {
                theme : 'islands',
                size : 'm'
            },
            text : 'click me',
            title : 'this button is very useful, it would be kind of you to click it'
        } },

        { tag : 'h3', content : 'icon' },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'islands', size : 's' },
                content : [
                    { block : 'icon', mods : { action : 'download' } },
                    { block : 'icon', mods : { action : 'download' } }
                ]
            },
            ' ',
            {
                block : 'button',
                text : 'disabled',
                mods : { theme : 'islands', size : 's', disabled : true },
                icon : { block : 'icon', mods : { action : 'download' } }
            },
            ' ',
            {
                block : 'button',
                text : 'inlined svg icon',
                mods : { theme : 'islands', size : 's' },
                icon : {
                    block : 'icon',
                    content : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="image"><path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z"/></svg>'
                }
            },
            ' ',
            {
                block : 'button',
                text : 'image icon',
                mods : { theme : 'islands', size : 's' },
                icon : {
                    block : 'icon',
                    content : {
                        block : 'image',
                        url : '../../../test.blocks/icon/_action/download.svg'
                    }
                }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'islands', size : 's' },
                content : [
                    { elem : 'text', content : 'o' },
                    { block : 'icon', mods : { action : 'left' } },
                    { elem : 'text', content : '^' },
                    { elem : 'text', content : '_' },
                    { elem : 'text', content : '^' },
                    { block : 'icon', mods : { action : 'right' } },
                    { elem : 'text', content : 'o' }
                ]
            }
        ] },

        ['s', 'm', 'l', 'xl'].map(function(size) {
            return { tag : 'p', content : [
                {
                    block : 'button',
                    mods : { theme : 'islands', size : size },
                    icon : { block : 'icon', mods : { action : 'download' } }
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : size },
                    icon : { block : 'icon', mods : { action : 'download' } },
                    text : 'Download'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : size },
                    content : [
                        { elem : 'text', content : 'down' },
                        { block : 'icon', mods : { action : 'down' } }
                    ]
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : size },
                    content : [
                        { block : 'icon', mods : { action : 'left' } },
                        { elem : 'text', content : 'left' },
                        { block : 'icon', mods : { action : 'up' } },
                        { elem : 'text', content : 'right' },
                        { block : 'icon', mods : { action : 'right' } }
                    ]
                }
            ] };
        }),

        { tag : 'h3', content : 'togglable' },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'islands', size : 'm', togglable : 'check' },
                text : 'check'
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'islands', size : 'm', togglable : 'radio' },
                text : 'radio'
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'islands', size : 'm', togglable : 'check', view : 'pseudo' },
                text : 'check'
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'islands', size : 'm', togglable : 'radio', view : 'pseudo' },
                text : 'radio'
            }
        ] }
    ]
});
