({
    mustDeps: [
        { block: 'jquery', elem: 'pointerclick' },
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
