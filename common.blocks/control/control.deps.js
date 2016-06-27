[{
    mustDeps : 'i-bem-dom',
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
