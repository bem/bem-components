({
    block : 'page',
    title : 'bem-components: select',
    mods : { theme : 'islands' },
    head : [
        {
            elem : 'conditional-comment',
            condition : '> IE 8',
            msieOnly : false,
            content : { elem : 'css', url : 'simple.css' }
        },
        {
            elem : 'conditional-comment',
            condition : '<= IE 8',
            content : { elem : 'css', url : 'simple.ie.css' }
        }
    ],
    scripts : [{ elem : 'js', url : 'simple.js' }],
    content : [
        {
            block : 'select',
            mods : { mode : 'radio', theme : 'islands', size : 'm', focused : true },
            name : 'select1',
            optionsMaxHeight : 100,
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
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
            mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
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
            mods : { mode : 'check', theme : 'islands', size : 'm' },
            name : 'select3',
            text : '—',
            val : [2, 3],
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third' }
            ]
        },
        {
            block : 'select',
            mods : { mode : 'check', theme : 'islands', size : 'm' },
            name : 'select4',
            val : [2, 3],
            options : [
                { val : 1, text : 'first', checkedText : '1' },
                { val : 2, text : 'second', checkedText : '2' },
                { val : 3, text : 'third', checkedText : '3' }
            ]
        },
        {
            block : 'select',
            mods : { mode : 'check', theme : 'islands', size : 'm' },
            name : 'select5',
            text : '—',
            val : [{ id : 2 }],
            options : [
                {
                    val : 1,
                    text : 'Twitter',
                    checkedText : 'tw',
                    icon : { block : 'icon', mods : { social : 'twitter' } }
                },
                {
                    val : 2,
                    text : 'VKontakte',
                    checkedText : 'vk',
                    icon : { block : 'icon', mods : { social : 'vk' } }
                }
            ]
        },
        {
            block : 'select',
            mods : { mode : 'check', theme : 'islands', size : 'm' },
            text : 'empty',
            val : [2, 5],
            options : [
                {
                    group : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second' },
                        { val : 3, text : 'third' }
                    ],
                    title : 'title of group 1'
                },
                {
                    group : [
                        { val : 4, text : 'fourth' },
                        { val : 5, text : 'fifth' },
                        { val : 6, text : 'sixth', disabled : true }
                    ]
                }
            ]
        },
        {
            tag : 'div', attrs : { style : 'width : 200px; display : inline-block;' },
            content : {
                block : 'select',
                mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
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
                mods : { mode : 'radio-check', theme : 'islands', size : 'm', width : 'available' },
                name : 'select444',
                text : '—',
                options : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second second second second second second second second' },
                    { val : 3, text : 'third' }
                ]
            }
        },
        [
            {
                block : 'select',
                mods : { mode : 'radio', theme : 'islands', size : 's' },
                val : 1,
                options : [
                    { text : 'size s', val : 1 }
                ]
            },
            {
                block : 'select',
                mods : { mode : 'radio', theme : 'islands', size : 'm' },
                val : 1,
                options : [
                    { text : 'size m', val : 1 }
                ]
            },
            {
                block : 'select',
                mods : { mode : 'radio', theme : 'islands', size : 'l' },
                val : 1,
                options : [
                    { text : 'size l', val : 1 }
                ]
            }
        ].map(function(i) { return [i, ' '] })
    ].map(function(i) { return [{ block : 'test', js : true, content : i }, { tag : 'hr' }] })
});
