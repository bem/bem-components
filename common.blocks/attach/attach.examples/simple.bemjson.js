({
    block : 'page',
    head : [
        { elem : 'css', url : '_simple.css', ie : false },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'attach',
            buttonText : 'file',
            noFileText : 'no file selected'
        },
        {
            block : 'attach',
            mods : { disabled : true },
            tabIndex : 1,
            buttonText : 'file',
            noFileText : 'no file selected'
        },
        {
            block : 'attach',
            button : {
                block : 'button',
                icon : { elem : 'icon' }
            },
            noFileText : 'no file selected'
        }
    ].map(function(attach) {
        return {
            tag : 'p',
            content : attach
        };
    })
});
