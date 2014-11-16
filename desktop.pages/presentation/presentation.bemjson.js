({
    block : 'page',
    title : 'bem-components: tabs',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_presentation.css' },
        { elem : 'js', url : '_presentation.js' }
    ],
    content : [

        { tag : 'h2', content : 'Презентация команды по написанию блоков' },
        { tag : 'p', content : {
            block : 'tabs',
            mods: { theme : 'islands', size: 'l'},
            tabs : [
                {
                    title: 'Progressbar',
                    content: [
                        'theme-hackaton, size-s: <br><br>',
                        {
                            block : 'progressbar',
                            mods : { theme : 'hackaton', size : 's', text : true },
                            progress : 25
                        },
                        '<br>theme-hackaton, size-m: <br><br>',
                        {
                            block : 'progressbar',
                            mods : { theme : 'hackaton', size : 'm', text : true },
                            progress : 95
                        },
                        '<br>theme-hackaton, size-m, no text (55%): <br><br>',
                        {
                            block : 'progressbar',
                            mods : { theme : 'hackaton', size : 'm', text : false },
                            progress : 55
                        },
                        '<br>theme-islands (35%): <br><br>',
                        {
                            block : 'progressbar',
                            mods : { theme : 'islands', text : false },
                            progress : 35
                        }
                    ]
                },
                {
                    title: 'Cut',
                    content: {
                        block : 'cut',
                        js : {
                            expandedText : 'Hide'
                        },
                        mods : { theme : 'simple' },
                        switcher : 'Show',
                        content : 'Text here'
                    }

                },
                {
                    title: 'Third',
                    content: 'Third tab content'
                }
            ]
        }}
    ]
})