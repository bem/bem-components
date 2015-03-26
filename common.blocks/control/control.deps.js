[{
    mustDeps : { block : 'i-bem', elems : 'dom' },
    shouldDeps : [
        'dom',
        'next-tick',
        { block : 'jquery', elem : 'event', mods : { type : 'pointer' } }
    ]
}, {
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'control' },
    shouldDeps : 'objects'
}]
