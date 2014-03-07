[{
    mustDeps : [
        { block : 'i-bem', elems : ['dom'] }
    ],
    shouldDeps : [
        { mod : 'disabled' },
        { block : 'jquery', elem : 'event', mods : { type : 'pointer' } }
    ]
},
{
    tech : 'spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'link' },
        { tech : 'js', block : 'dom' }
    ]
}]
