({
    mustDeps: [
        {
            elems: ['button']
        },
        { block: 'i-jquery', elems: 'leftclick' },
        { block: 'i-bem', elem: 'dom' }
    ],
    shouldDeps: [
        { elems: [ 'control', 'click', 'text' ] }
    ]
})
