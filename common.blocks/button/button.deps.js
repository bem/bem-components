[{
    mustDeps: [
        { block: 'jquery', elem: 'pointer-events' },
        { block: 'i-bem', elems: ['dom'] }
    ],
    shouldDeps: {
        elems: ['text'],
        mods: { focused: 'yes', hovered: 'yes', disabled: 'yes', pressed: 'yes' }
    }
},
{
    tech: 'test.js',
    mustDeps: { tech: 'bemhtml', block: 'button' }
}]
