({
    mustDeps: { block: 'i-bem', elem: 'dom' },
    shouldDeps: [
        {
            mods: { disabled: 'yes', focused: 'yes' },
            elems: [
                'box',
                'control',
                { elem: 'clear', mods: { visibility: 'visible' } }
            ]
        },
        { block: 'jquery', elem: 'leftclick' },
        'tick',
        'idle'
    ]
})
