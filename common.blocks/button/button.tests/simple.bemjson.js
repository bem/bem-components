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
            text : 'with icon',
            icon : { elem : 'icon' }
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
            icon : { elem : 'icon' }
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'simple' },
            icon : { elem : 'icon' }
        } },

        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'simple', type : 'link' },
            url : '#',
            text : 'default link'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'simple', disabled : true, type : 'link' },
            url : '#',
            text : 'disabled link'
        } },

        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'simple', type : 'link' },
            url : '#',
            text : 'link with icon',
            icon : { elem : 'icon' }
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'simple', type : 'link' },
            url : '#',
            icon : { elem : 'icon' }
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
                content : { elem : 'icon', elemMods : { download : true } }
            },
            ' ',
            {
                block : 'button',
                text : 'up',
                mods : { theme : 'normal', size : 's' },
                icon : { elem : 'icon', elemMods : { arrow : 'up' } }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { elem : 'text', content : 'down' },
                    { elem : 'icon', elemMods : { arrow : 'down' } }
                ]
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { elem : 'icon', elemMods : { arrow : 'left' } },
                    { elem : 'text', content : 'set width' },
                    { elem : 'icon', elemMods : { arrow : 'right' } }
                ]
            },
            ' ololo ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { elem : 'text', content : 'o' },
                    { elem : 'icon', elemMods : { arrow : 'left' } },
                    { elem : 'text', content : '^' },
                    { elem : 'text', content : '_' },
                    { elem : 'text', content : '^' },
                    { elem : 'icon', elemMods : { arrow : 'right' } },
                    { elem : 'text', content : 'o' }
                ]
            },
            ' trololo ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { elem : 'icon', elemMods : { arrow : 'left' } },
                    { elem : 'text', content : '0' },
                    { elem : 'icon', elemMods : { arrow : 'up' } },
                    { elem : 'text', content : 'o' },
                    { elem : 'icon', elemMods : { arrow : 'right' } }
                ]
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm' },
                icon : { elem : 'icon', elemMods : { download : true } }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm' },
                content : [
                    { elem : 'icon', elemMods : { arrow : 'left' } },
                    { elem : 'text', content : 'set width' },
                    { elem : 'icon', elemMods : { arrow : 'right' } }
                ]
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'l' },
                icon : { elem : 'icon', elemMods : { download : true } }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'l' },
                content : [
                    { elem : 'icon', elemMods : { arrow : 'left' } },
                    { elem : 'text', content : 'set width' },
                    { elem : 'icon', elemMods : { arrow : 'right' } }
                ]
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'xl' },
                icon : { elem : 'icon', elemMods : { download : true } }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'xl' },
                content : [
                    { elem : 'icon', elemMods : { arrow : 'left' } },
                    { elem : 'text', content : 'set width' },
                    { elem : 'icon', elemMods : { arrow : 'right' } }
                ]
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
