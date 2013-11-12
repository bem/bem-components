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
            text : 'label1'
        },
        {
            block : 'checkbox',
            name : 'r1',
            mods : { checked : true },
            val : 2,
            text : 'label2'
        },
        {
            block : 'checkbox',
            name : 'r1',
            mods : { disabled : true },
            val : 3,
            text : 'label3'
        },
        {
            block : 'checkbox',
            name : 'r1',
            mods : { checked : true, disabled : true },
            val : 4,
            text : 'label4'
        }],
        [{
            block : 'checkbox',
            mods : { type : 'button' },
            name : 'r2',
            val : 1,
            text : 'label1'
        },
        {
            block : 'checkbox',
            mods : { type : 'button', checked : true },
            name : 'r2',
            val : 2,
            text : 'label2'
        },
        {
            block : 'checkbox',
            mods : { type : 'button', disabled : true },
            name : 'r2',
            val : 3,
            text : 'label3'
        },
        {
            block : 'checkbox',
            name : 'r2',
            mods : { type : 'button', checked : true, disabled : true },
            val : 4,
            text : 'label4'
        }]
    ].map(function(group) {
        return {
            tag : 'p',
            content : group.map(function(checkbox, i) {
                return [i ? ' ' : '', checkbox];
            })
        };
    })
});
