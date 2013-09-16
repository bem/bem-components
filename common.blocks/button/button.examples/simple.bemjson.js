({
    block : 'page',
    head : [
        { elem : 'css', url : '_simple.css', ie : false },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'button',
            text : 'default'
        },
        {
            block : 'button',
            mods : { togglable : 'check' },
            text : 'togglable=check'
        },
        {
            block : 'button',
            mods : { togglable : 'radio' },
            text : 'togglable=radio'
        },
        {
            block : 'button',
            mods : { togglable : 'check', checked : true },
            text : 'togglable=check and checked'
        },
        {
            block : 'button',
            mods : { togglable : 'radio', checked : true },
            text : 'togglable=radio and checked'
        },
        {
            block : 'button',
            mods : { 'disabled' : true },
            text : 'disabled'
        },
        {
            block : 'button',
            text : 'with icon',
            icon : { elem : 'icon' }
        },
        {
            block : 'button',
            icon : { elem : 'icon' }
        },
        {
            block : 'button',
            mods : { 'disabled' : true, 'type' : 'link' },
            url : 'http://bem.info/',
            text : 'disabled link'
        },
        {
            block : 'button',
            mods : { 'type' : 'link' },
            url : 'http://bem.info/',
            text : 'default link'
        },
        {
            block : 'button',
            mods : { 'focused' : true, 'type' : 'link' },
            url : 'http://bem.info/',
            text : 'focused'
        },
        {
            block : 'button',
            mods : { 'type' : 'link' },
            url : 'http://bem.info/',
            text : 'link with icon',
            icon : { elem : 'icon' }
        },
        {
            block : 'button',
            mods : { 'type' : 'link' },
            url : 'http://bem.info/',
            icon : { elem : 'icon' }
        }
    ].map(function(button) {
        return {
            tag : 'p',
            content : button
        };
    })
});
