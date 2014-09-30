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
                { text : '' },
                { text : 'some text' },
                { text : 'text' }
            ],
            cls : 'radio_check-no_text'
        },
        {
            block : 'select',
            mods : { mode : 'radio', theme : 'islands', size : 'l' },
            text : '-',
            options : [
                { text : 'first', checked : true },
                { text : 'second' },
                { text : 'third' }
            ],
            cls : 'size_l-radio-text'
        },
        {
            block : 'select',
            mods : { mode : 'radio-check', theme : 'islands', size : 'xl' },
            text : '—',
            options : [
                { text : 'first', checked : true },
                { text : 'second', disabled : true },
                { text : 'third' }
            ],
            cls : 'size_xl-checked-disabled_item'
        },
        {
            block : 'select',
            mods : { mode : 'radio', theme : 'islands', size : 's', disabled : true },
            text : 'disabled',
            options : [
                { text : 'first', checked : true },
                { text : 'second' },
                { text : 'third' }
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
                        { text : 'first' },
                        { text : 'second', checked : true },
                        { text : 'third' }
                    ],
                    title : 'title of group 1'
                },
                {
                    group : [
                        { text : 'fourth' },
                        { text : 'fifth', checked : true },
                        { text : 'sixth', disabled : true }
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
                    icon : { block : 'icon', mods : { social : 'twitter' } }
                },
                {
                    text : 'VKontakte',
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
                { text : 'first first first first first first first first first', checked : true },
                { text : 'second' },
                { text : 'third' }
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
