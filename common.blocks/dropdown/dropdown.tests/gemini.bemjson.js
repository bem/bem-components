({
    block : 'page',
    title : 'bem-components: dropdown',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        {
            block : 'test',
            content : {
                block : 'dropdown',
                mods : { switcher : 'link' },
                switcher : 'link',
                popup : { block : 'popup', mods : { autoclosable : true, 'default-link' : true }, content : 'popup' },
                cls : 'default-link'
            }
        },
        {
            block : 'test',
            content : {
                block : 'dropdown',
                mods : { switcher : 'button' },
                switcher : 'link',
                popup : { block : 'popup', mods : { autoclosable : true, 'default-button' : true }, content : 'popup' },
                cls : 'default-button'
            }
        },

        { block : 'separator' },

        { tag : 'h2', content : 'islands' },
        {
            block : 'test',
            content : {
                block : 'dropdown',
                mods : { switcher : 'link', theme : 'islands' },
                switcher : 'link',
                popup : { block : 'popup', mods : { autoclosable : true, 'islands-link' : true }, content : 'popup' },
                cls : 'islands-link'
            }
        },
        {
            block : 'test',
            content : {
                block : 'dropdown',
                mods : { switcher : 'button', theme : 'islands', size : 's' },
                switcher : 'link',
                popup : { block : 'popup', mods : { autoclosable : true, 'islands-button' : true }, content : 'popup' },
                cls : 'islands-button'
            }
        },

        ['s', 'm', 'l', 'xl'].map(function(size) {
            var sizeText = 'size ' + size,
                cls = function(block, id) {
                    return ['test-tick', block, size, id].join('-');
                };

            return {
                attrs : { style : 'margin: 4em 0' }, content : [
                    { block : 'test', content : {
                        block : 'dropdown',
                        cls : cls('dropdown', 'icon-only'),
                        mods : { switcher : 'button', theme : 'islands', size : size,  'has-tick' : true },
                        switcher : {
                            block : 'button',
                            icon : { block : 'icon', mix : { block : 'dropdown', elem : 'tick' } }
                        },
                        popup : {
                            block : 'popup',
                            cls : cls('popup', 'icon-only'),
                            mods : { autoclosable : false },
                            content : 'popup'
                        }
                    } },
                    ' ',
                    { block : 'test', content : {
                        block : 'dropdown',
                        cls : cls('dropdown', 'icon-right'),
                        mods : { switcher : 'button', theme : 'islands', size : size,  'has-tick' : true },
                        switcher : sizeText,
                        popup : {
                            block : 'popup',
                            cls : cls('popup', 'icon-right'),
                            mods : { autoclosable : false },
                            content : 'popup'
                        }
                    } },
                    ' ',
                    { block : 'test', content : {
                        block : 'dropdown',
                        cls : cls('dropdown', 'icon-left'),
                        mods : { switcher : 'button', theme : 'islands', size : size },
                        switcher : {
                            block : 'button',
                            content : [
                                { block : 'icon', mix : { block : 'dropdown', elem : 'tick' } },
                                { elem : 'text', content : sizeText }
                            ]
                        },
                        popup : {
                            block : 'popup',
                            mods : { autoclosable : false },
                            cls : cls('popup', 'icon-left'),
                            content : 'popup'
                        }
                    } }
                ]
            }
        })
    ]
});
