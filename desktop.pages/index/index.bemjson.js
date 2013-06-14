({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { elem: 'js', url: '_index.js' },
    ],
    content: {
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
                mods: { size: 's', autofocus: 'focused' },
                content: { elem: 'control' }
            },
            { tag: 'br' },
            {
                block: 'radiobox',
                mods: { size: 's' },
                name: 'bla',
                content: [
                    {
                        elem: 'radio',
                        content: 'только друзьям',
                        controlAttrs: { value: 'val-1' }
                    },
                    '&nbsp;&nbsp;&nbsp;&nbsp;',
                    {
                        elem: 'radio',
                        content: 'только мне',
                        controlAttrs: { value: 'val-2' }
                    },
                    '&nbsp;&nbsp;&nbsp;&nbsp;',
                    {
                        elem: 'radio',
                        elemMods: { disabled: 'yes' },
                        content: 'только не мне',
                        controlAttrs: { value: 'val-3' }
                    }
                ]
            },
            { tag: 'br' },
            {
                block: 'radio-button',
                mods: { size: 'm' },
                name: 'show_to',
                value: 'friends',
                content: [
                    {
                        elem: 'radio',
                        controlAttrs: { value: 'all' },
                        elemMods: { disabled: 'yes'},
                        content: 'виден всем'
                    },
                    {
                        elem: 'radio',
                        controlAttrs: { value: 'friends' },
                        content: 'только друзьям'
                    },
                    {
                        elem: 'radio',
                        controlAttrs: { value: 'me' },
                        content: 'только мне'
                    },
                    {
                        elem: 'radio',
                        controlAttrs: { value: 'other' },
                        content: 'только не мне'
                    }
                ]
            }
        ]
    }
})
