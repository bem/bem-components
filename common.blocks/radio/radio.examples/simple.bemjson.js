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
            name : 'r2',
            options : [
                { val : 1, label : 'first' },
                { val : 2, label : 'second' },
                { val : 3, label : 'third' }
            ]
        },
        {
            block : 'radio',
            mods : { type : 'button' },
            name : 'r3',
            options : [
                { val : 1, label : 'first' },
                { val : 2, label : 'second', disabled : true },
                { val : 3, label : 'third' }
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
                    { val : 1, label : 'first' },
                    { val : 2, label : 'second' },
                    { val : 3, label : 'third' }
                ]
            },
            ' separator ',
            {
                block : 'radio',
                js : { id : 'r4' },
                name : 'r4',
                options : [
                    { val : 4, label : 'fourth' },
                    { val : 5, label : 'fifth' },
                    { val : 6, label : 'sixth' }
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
