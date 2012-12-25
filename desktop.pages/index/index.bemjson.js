({
    block: 'b-page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'keywords', content: '' } }
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
