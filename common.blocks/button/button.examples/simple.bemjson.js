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
            mods : { toggle : 'check' },
            text : 'toggle=check'
        },
        {
            block : 'button',
            mods : { toggle : 'radio' },
            text : 'toggle=radio'
        },
        {
            block : 'button',
            mods : { toggle : 'check', checked : true },
            text : 'toggle=check and checked'
        },
        {
            block : 'button',
            mods : { toggle : 'radio', checked : true },
            text : 'toggle=radio and checked'
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
