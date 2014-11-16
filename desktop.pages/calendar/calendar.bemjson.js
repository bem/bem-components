({
    block : 'page',
    title : 'bem-components: calendar',
    mods : { theme : 'simple' },
    head : [
        { elem : 'css', url : '_calendar.css' },
        { elem : 'js', url : '_calendar.js' }
    ],
    content : [
        {
            block: 'calendar',
            mods: { theme: 'simple' },
            switchers: ['', '']
        }
    ]
});
