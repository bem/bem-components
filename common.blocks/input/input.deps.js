({
    mustDeps: [
        { block: 'i-jquery', elems: 'leftclick' },
        { block: 'i-bem', elems: ['dom'] }
    ],
    shouldDeps: [
        { block: 'i-system' },
        { mods: { disabled: 'yes', 'has-clear': 'yes' } },
        { elems: [ 'box', 'control' ] },
        {
            elem: 'clear',
            mods: {
                'visibility': 'visible'
            }
        }
    ]
})