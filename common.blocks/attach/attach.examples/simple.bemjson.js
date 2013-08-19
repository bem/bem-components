({
    block : 'page',
    head : [
        { elem : 'css', url : '_simple.css', ie : false },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'attach',
            mods : { size : 's' },
            buttonText : 'file',
            noFileText : 'no file selected'
        },
        {
            block : 'attach',
            mods : { size : 's', disabled : true },
            tabIndex : 1,
            buttonText : 'file',
            noFileText : 'no file selected'
        },
        {
            block : 'attach',
            mods : { size : 's' },
            button : {
                block : 'button',
                mods : { 'only-icon' : true },
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
