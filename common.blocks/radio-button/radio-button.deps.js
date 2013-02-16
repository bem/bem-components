({
    mustDeps: [
        {
            elems: ['radio']
        },
        { block: 'i-jquery', elems: 'leftclick' },
        { block: 'i-bem', elem: 'dom' },
        { block : 'radiobox' }
    ],
    shouldDeps: [
        { elems: [ 'control', 'click', 'text' ] }
    ]
})
