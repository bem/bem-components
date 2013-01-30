({
    mustDeps: [
        { block: 'i-bem', elems: ['dom', 'html'] },
        { block: 'checkbox' }
    ],
    shouldDeps: [
        { elems: [ 'text', 'control', 'click' ] },
        {
            mods: {
                'checked': 'yes',
                'pressed': 'yes',
                'focused': 'yes',
                'disabled': 'yes'
            }
        }
    ]
})
