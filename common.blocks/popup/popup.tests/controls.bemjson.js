({
    block : 'page',
    title : 'bem-components: popup',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'controls.css' },
        { elem : 'js', url : 'controls.js' }
    ],
    content : [
        {
            block : 'test',
            js : true,
            content : [
                { block : 'link', mods : { pseudo : true }, content : 'open popup' },
                {
                    block : 'popup',
                    mods : { target : 'anchor', autoclosable : true, theme : 'simple' },
                    content : [
                        { tag : 'button', content : 'native button' },
                        { tag : 'br' },
                        'inputs: '
                    ].concat([
                        'button', 'image', 'submit', 'reset', 'checkbox', 'radio', 'file', 'text'
                    ].map(function(type) { return { tag : 'input', attrs : { type : type, value : type } }}))
                }
            ]
        }
    ]
});
