({
	mustDeps: [
        { block: 'i-jquery', elems: 'leftclick' }
    ],
    shouldDeps: {
        mods: {
            'checked': 'yes',
            'disabled': 'yes',
            'focused': 'yes'
        },
        elems: [ 'box', 'control', 'tick' ]
    }
})
