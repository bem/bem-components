({
    mustDeps: [
        { block: 'i-jquery', elems: 'leftclick' },
        { block: 'i-bem', elems: ['dom'] }
    ],
    shouldDeps: [
        {
            mods: {
                'theme': 'normal',
                'disabled': 'yes',
                'focused': 'yes',
                'hovered': 'yes'
            }
        },
        { elems: [ 'radio', 'box', 'control' ] }
    ]
})
