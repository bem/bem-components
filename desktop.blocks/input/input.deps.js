({
    mustDeps: [
        { block: 'i-jquery', elems: 'leftclick' },
        { block: 'i-bem', elems: ['dom', 'html'] }
    ],
    shouldDeps: [
        { block: 'i-system' },
        { mods: { disabled: 'yes', 'has-clear': 'yes' } },
        { elems: [ 'box', 'input' ] },
        {
            elem: 'clear',
            mods: {
                'visibility': 'visible'
            }
        }
    ]
})