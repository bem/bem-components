({
    mustDeps: [
        { block: 'jquery', elem: 'leftclick' },
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
