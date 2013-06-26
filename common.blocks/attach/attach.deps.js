([
    {
        tech: 'js',
        mustDeps: [
            {
                block: 'i-bem',
                elem: 'html',
                tech: 'bemhtml'
            },
            {
                block: 'attach',
                elem: 'control',
                tech: 'bemhtml'
            }
        ]
    },
    {
        mustDeps: [
            { block: 'i-bem', elems: ['dom', 'html', 'i18n'] },
            { block: 'button' }
        ],
        shouldDeps: [
            { block: 'b-icon' },
            { elem: 'holder', mods: { state: 'hidden' } },
            { elem: 'reset', mods: { visibility: 'visible' } },
            { elems: [ 'icon-file', 'button', 'control' ] }
        ]
    }
])
