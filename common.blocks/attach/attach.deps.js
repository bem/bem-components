[
{
    mustDeps: { block: 'i-bem', elems: ['dom', 'i18n'] },
    shouldDeps: [
        { block: 'button' },
        { block: 'b-icon' },
        { elem: 'holder', mods: { state: 'hidden' } },
        { elem: 'reset', mods: { visibility: 'visible' } },
        { elems: [ 'icon-file', 'button', 'control' ] }
    ]
},
{
    tech: 'js',
    shouldDeps: { tech: 'bemhtml', block: 'i-bem' }
}
]
