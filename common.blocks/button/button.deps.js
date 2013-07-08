({
    mustDeps: [
        { block: 'jquery', elem: 'leftclick' },
        { block: 'i-bem', elems: ['dom'] }
    ],
    shouldDeps: {
        elems: [ 'text' ],
        mods: {
            'focused': 'yes',
            'hovered': 'yes',
            'disabled': 'yes', /* CHECKME: remove disabled from default dependencies? */
            'pressed': 'yes'
        }
    }
})
