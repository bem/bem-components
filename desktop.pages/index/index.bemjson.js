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
                },
                {
                    block: 'attach',
                    mods: { size: 's' },
                    content: [
                        {
                            block: 'button',
                            mods: { size: 's' },
                            mix: [{ block: 'attach', elem: 'button' }],
                            tabindex: 1,
                            id: 'bla',
                            content: 'button text'
                        },
                        {
                            elem: 'holder',
                            content: 'no file'
                        }
                    ]
                },
                { block: 'checkbox', mods: { size: 's', checked: 'yes' } },
                {
                    block: 'check-button',
                    name: 'porn',
                    value: '1',
                    mods: { size: 's' },
                    content: '1'
                },'&nbsp;&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    name: 'porn',
                    mods: { size: 's' },
                    content: '2'
                },
                { tag: 'br' },
                {
                    block: 'input',
                    mods: { size: 's' },
                    content: { elem: 'control' }
                },
                { tag: 'br' }
            ]
        }
    ]
})
