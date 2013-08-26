({
    block : 'page',
    head : [
        { elem : 'css', url : '_simple.css', ie : false },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        [{
            block : 'checkbox',
            name : 'r1',
            val : 1,
            label : 'label1'
        },
        {
            block : 'checkbox',
            name : 'r1',
            mods : { checked : true },
            val : 2,
            label : 'label2'
        },
        {
            block : 'checkbox',
            name : 'r1',
            mods : { disabled : true },
            val : 3,
            label : 'label3'
        }],
        [{
            block : 'checkbox',
            mods : { type : 'button' },
            name : 'r1',
            val : 1,
            label : 'label1'
        },
        {
            block : 'checkbox',
            mods : { type : 'button', checked : true },
            name : 'r1',
            val : 2,
            label : 'label2'
        },
        {
            block : 'checkbox',
            mods : { type : 'button', disabled : true },
            name : 'r1',
            val : 3,
            label : 'label3'
        }]
    ].map(function(checkbox) {
        return {
            tag : 'p',
            content : checkbox
        };
    })
});
