({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { elem: 'js', url: '_index.js' },
    ],
    content:[
        {
            tag: 'form',
            attrs: { action: 'http://example.com' },
            content: [
                {
                    block: 'button',
                    mods: { size: 'm' },
                    content: 'Custom Button'
                }
            ]
        }
    ]
})
