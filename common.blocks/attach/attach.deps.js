[
{
    mustDeps: { block: 'i-bem', elems: ['dom', 'i18n'] },
    shouldDeps: [
        { block: 'button' },
        // TODO: непонятно почему мы зависим от блока, которого даже нет в этой библиотеке
        { block: 'b-icon' },
        { elem: 'holder', mods: { state: 'hidden' } },
        { elem: 'reset', mods: { visibility: 'visible' } },
        { elems: [ 'icon-file', 'button', 'control' ] }
    ]
},
{
    tech: 'js',
    shouldDeps: [
        // TODO: нужно что-то придумать с повторением `tech: 'bemhtml'`
        { tech: 'bemhtml', block: 'i-bem' },
        // TODO: почему-то не работает без указания `block: 'attach'`
        { tech: 'bemhtml', block: 'attach', elem: 'control' }
    ]
}
]
