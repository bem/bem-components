({
    block : 'page',
    title : 'bem-components: dropdown',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'test',
            content : [
                {
                    block : 'dropdown',
                    mods : { switcher : 'link' },
                    switcher : 'link',
                    popup : 'bemjson'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'link' },
                    switcher : { block : 'link', mods : { pseudo : true, bla : 'bla' }, content : 'custom link' },
                    popup : { block : 'button', mods : { theme : 'normal', size : 's' }, text : 'popup button' }
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'simple', size : 'xl' },
                    switcher : 'button',
                    popup : { block : 'popup', mods : { autoclosable : true, theme : 'simple' }, content : 'cusom popup' }
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'normal', size : 'xl' },
                    switcher : { block : 'button', mods : { togglable : 'check' }, text : 'custom button' },
                    popup : {
                        block : 'popup',
                        js : { directions : ['top-center'], offsets : [20, 20] },
                        content : 'custom popup'
                    }
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button' },
                    switcher : {
                        block : 'bla',
                        content : { block : 'button', mods : { theme : 'normal', size : 'l' }, text : 'wrapped button' }
                    },
                    popup : 'bemjson'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'normal', size : 'l', disabled : true },
                    switcher : 'disabled',
                    popup : 'bemjson'
                }
            ].map(function(i) { return { tag : 'div', attrs : { style : 'padding: 5px' }, content : i } })
        }
    ]
});
