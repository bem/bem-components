({
    mustDeps: [
        { block: 'i-jquery', elems: 'leftclick' },
        { block: 'i-bem', elems: ['dom'] }
    ],
    shouldDeps: {
        elems: [ 'input', 'text' ],
        mods: {
            'focused': 'yes',
            'hovered': 'yes',
            'disabled': 'yes', /* CHECKME: remove disabled from default dependencies? */
            'pressed': 'yes'
        }
    }
})
