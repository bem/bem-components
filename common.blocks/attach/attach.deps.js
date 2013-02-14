({
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
})
