({
    block : 'page',
    head : [
        { elem : 'css', url : '_simple.css', ie : false },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'input',
            id : 'id0',
            mods : { 'disabled' : true },
            name : 'name0',
            val : 'value0'
        },
        {
            block : 'input',
            id : 'id1',
            name : 'name1',
            val : 'value1'
        },
        {
            block : 'input',
            mods : { 'has-clear' : true },
            id : 'id2',
            name : 'name2',
            val : 'value2'
        },
        {
            block : 'input',
            mods : { 'has-hint' : true },
            id : 'id3',
            name : 'name3',
            val : '',
            hint : 'hint3'
        },
        {
            block : 'input',
            mods : { 'has-hint' : true, 'has-label' : true },
            id : 'id4',
            name : 'name4',
            val : '',
            hint : 'hint4',
            label : 'label4'
        },
        {
            block : 'input',
            mods : { 'has-hint' : true, 'has-label' : true },
            id : 'id5',
            name : 'name5',
            val : 'value5',
            hint : 'hint5',
            label : 'label5',
            maxLength : 42,
            tabIndex : 42,
            autocomplete : false
        }
    ].map(function(input) {
        return {
            tag : 'p',
            content : input
        };
    })
});
