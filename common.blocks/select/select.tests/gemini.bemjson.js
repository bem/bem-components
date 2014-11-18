({
    block : 'page',
    title : 'bem-components: select',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [
        {
            block : 'select',
            mods : { mode : 'radio-check', theme : 'islands', size : 's' },
            options : [
                { text : '', val : 1 },
                { text : 'some text', val : 2 },
                { text : 'text', val : 3 }
            ],
            cls : 'radio_check-no_text'
        },
        {
            block : 'select',
            mods : { mode : 'radio', theme : 'islands', size : 'l' },
            text : '-',
            options : [
                { text : 'first', val : 1, checked : true },
                { text : 'second', val : 2 },
                { text : 'third', val : 3 }
            ],
            cls : 'size_l-radio-text'
        },
        {
            block : 'select',
            mods : { mode : 'radio-check', theme : 'islands', size : 'xl' },
            text : '—',
            options : [
                { text : 'first', val : 1, checked : true },
                { text : 'second', val : 2, disabled : true },
                { text : 'third', val : 3 }
            ],
            cls : 'size_xl-checked-disabled_item'
        },
        {
            block : 'select',
            mods : { mode : 'radio', theme : 'islands', size : 's', disabled : true },
            text : 'disabled',
            options : [
                { text : 'first', val : 1, checked : true },
                { text : 'second', val : 2 },
                { text : 'third', val : 3 }
            ],
            cls : 'disabled'
        },
        {
            block : 'select',
            mods : { mode : 'check', theme : 'islands', size : 's' },
            text : 'group',
            options : [
                {
                    group : [
                        { text : 'first', val : 1 },
                        { text : 'second', val : 2, checked : true },
                        { text : 'third', val : 3 }
                    ],
                    title : 'title of group 1'
                },
                {
                    group : [
                        { text : 'fourth', val : 1 },
                        { text : 'fifth', val : 2, checked : true },
                        { text : 'sixth', val : 3, disabled : true }
                    ]
                }
            ],
            cls : 'size_s-select-group'
        },
        {
            block : 'select',
            mods : { mode : 'check', theme : 'islands', size : 'm' },
            text : 'icon',
            options : [
                {
                    text : 'Twitter',
                    val : 1,
                    icon : { block : 'icon', mods : { social : 'twitter' } }
                },
                {
                    text : 'VKontakte',
                    val : 2,
                    icon : { block : 'icon', mods : { social : 'vk' } },
                    checked : true
                }
            ],
            cls : 'select-icon'
        },
        {
            block : 'select',
            mods : { mode : 'check', theme : 'islands', size : 'm', width : 'available' },
            text : 'some text some text some text some text',
            options : [
                { text : 'first first first first first first first first first', val : 1, checked : true },
                { text : 'second', val : 2 },
                { text : 'third', val : 3 }
            ],
            cls : 'size_m-check-much_text'
        }
    ].map(function(i) {
        return {
            block : 'test',
            js : true,
            content : i
        };
    })
});
