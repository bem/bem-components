({
    block : 'page',
    title : 'bem-components: select',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'select',
            mods : { mode : 'radio', theme : 'normal', size : 'm', focused : true },
            name : 'select1',
            textMaxWidth : 100,
            optionsMaxHeight : 100,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true },
                { val : 3, text : 'third' },
                { val : 4, text : '4' },
                { val : 5, text : '5' },
                { val : 6, text : '6' },
                { val : 7, text : '7' },
                { val : 8, text : '8' },
                { val : 9, text : '9' },
                { val : 10, text : '10' },
                { val : 11, text : '11' },
                { val : 12, text : '12' },
                { val : 13, text : '13' },
                { val : 14, text : '14' }
            ]
        },
        {
            block : 'select',
            mods : { mode : 'radio-check', theme : 'normal', size : 'm' },
            name : 'select2',
            text : '—',
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third' }
            ]
        },
        {
            block : 'select',
            mods : { mode : 'check', theme : 'normal', size : 'm' },
            name : 'select3',
            text : '—',
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true },
                { val : 3, text : 'third', checked : true }
            ]
        },
        {
            block : 'select',
            mods : { mode : 'check', theme : 'normal', size : 'm' },
            name : 'select4',
            options : [
                { val : { id : 1 }, text : 'first', checkedText : '1' },
                { val : { id : 2 }, text : 'second', checkedText : '2', checked : true },
                { val : { id : 3 }, text : 'third', checkedText : '3', checked : true }
            ]
        },
        {
            block : 'select',
            mods : { mode : 'check', theme : 'normal', size : 'm' },
            name : 'select5',
            text : '—',
            options : [
                {
                    val : { id : 1 },
                    text : 'Twitter',
                    checkedText : 'tw',
                    icon : { block : 'icon', mods : { social : 'twitter' } }
                },
                {
                    val : { id : 2 },
                    text : 'VKontakte',
                    checkedText : 'vk',
                    icon : { block : 'icon', mods : { social : 'vk' } },
                    checked : true
                }
            ]
        },
        {
            block : 'select',
            mods : { mode : 'check', theme : 'normal', size : 'm' },
            text : 'empty',
            options : [
                {
                    group : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second', checked : true },
                        { val : 3, text : 'third' }
                    ],
                    title : 'title of group 1'
                },
                {
                    group : [
                        { val : 4, text : 'fourth' },
                        { val : 5, text : 'fifth', checked : true },
                        { val : 6, text : 'sixth', disabled : true }
                    ]
                }
            ]
        },
        {
            tag : 'div', attrs : { style : 'width : 200px; display : inline-block;' },
            content : {
                block : 'select',
                mods : { mode : 'radio-check', theme : 'normal', size : 'm' },
                name : 'select333',
                text : '—',
                options : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second second second second second second second second' },
                    { val : 3, text : 'third' }
                ]
            }
        },
        {
            tag : 'div', attrs : { style : 'width : 200px; display : inline-block;' },
            content : {
                block : 'select',
                mods : { mode : 'radio-check', theme : 'normal', size : 'm', width : 'available' },
                name : 'select444',
                text : '—',
                options : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second second second second second second second second' },
                    { val : 3, text : 'third' }
                ]
            }
        }
    ].map(function(i) { return [{ block : 'test', js : true, content : i }, { tag : 'hr' }] })
});
