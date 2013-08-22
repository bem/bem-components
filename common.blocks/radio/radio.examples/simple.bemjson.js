({
    block : 'page',
    head : [
        { elem : 'css', url : '_simple.css', ie : false },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'radio',
            name : 'r1',
            options : [
                { val : 1, label : 'first' },
                { val : 2, label : 'second' },
                { val : 3, label : 'third', disabled : true }
            ],
            val : 2
        },
        {
            block : 'radio',
            name : 'r3',
            options : [
                { val : 1, label : 'first' },
                { val : 2, label : 'second' },
                { val : 3, label : 'third' }
            ]
        },
        {
            block : 'radio',
            name : 'r2',
            mods : { type : 'button' },
            options : [
                { val : 1, label : 'first' },
                { val : 2, label : 'second', disabled : true },
                { val : 3, label : 'third' }
            ],
            val : 3
        },
        {
            block : 'radio',
            name : 'r2',
            mods : { type : 'button' },
            options : [
                { val : 1, label : 'first' },
                { val : 2, label : 'second' },
                { val : 3, label : 'third' }
            ]
        }
    ].map(function(button) {
        return {
            tag : 'p',
            content : button
        };
    })
});
