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
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true }
            ],
            val : 2
        },
        {
            block : 'radio',
            name : 'r2',
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third' }
            ]
        },
        {
            block : 'radio',
            mods : { type : 'button' },
            name : 'r3',
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', disabled : true },
                { val : 3, text : 'third' }
            ],
            val : 3
        },
        [
            {
                block : 'radio',
                js : { id : 'r4' },
                name : 'r4',
                mods : { type : 'button' },
                options : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second' },
                    { val : 3, text : 'third' }
                ]
            },
            ' separator ',
            {
                block : 'radio',
                js : { id : 'r4' },
                name : 'r4',
                options : [
                    { val : 4, text : 'fourth' },
                    { val : 5, text : 'fifth' },
                    { val : 6, text : 'sixth' }
                ]
            }
        ]
    ].map(function(button) {
        return {
            tag : 'p',
            content : button
        };
    })
});
