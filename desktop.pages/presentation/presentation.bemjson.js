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
        {
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
                    content: [
                        {
                            tag : 'p',
                            content : [
                                'Однажды, в далёкой-далёкой стране, компания Яндекс начала ',
                                'разрабатывать поиск по Интернету и сопутствующие сервисы.'
                            ]
                        },
                        {
                            block : 'cut',
                            js : {
                                expandedText : 'Скрыть'
                            },
                            mods : { type: 'inline', theme : 'simple', size: 's' },
                            switcher : 'Подробнее',
                            content : [
                                'Время шло, сервисы развивались и всё больше разработчиков ',
                                'интерфейсов вкладывали свои усилия в развитие Яндекса.'
                            ]
                        }
                    ]

                },
                {
                    title: 'Third',
                    content: 'Third tab content'
                }
            ]
        }
    ]
})
