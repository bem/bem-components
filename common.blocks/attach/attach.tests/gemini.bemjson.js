({
    block : 'page',
    title : 'bem-components: attach',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'gemini.css' },
        { elem : 'js', url : 'gemini.js' }
    ],
    content : ['s', 'm', 'l', 'xl'].map(function(size) {
        var cls = 'islands-size' + size.toUpperCase();
        return {
            tag : false,
            content : [{
                    tag : 'h2',
                    content : cls,
                },
                {
                    tag : 'p',
                    attrs : { style : 'width: 300px' },
                    cls : cls + '-enabled',
                    content : {
                        block : 'attach',
                        button : 'file',
                        noFileText : 'no file selected',
                        mods : {
                            theme : 'islands',
                            size : size,
                        },
                        attrs : {
                            tabindex : 0 // To trap focus in Chrome
                        }
                    }
                },
                {
                    tag : 'p',
                    attrs : { style : 'width: 300px' },
                    cls : cls + '-disabled',
                    content : {
                        block : 'attach',
                        mods : {
                            theme : 'islands',
                            size : size,
                            disabled : true
                        },
                        button : 'file',
                        noFileText : 'no file selected'
                    }
                }
            ]
        };
    })
});
