[{
    mustDeps : [
        { block : 'i-bem', elems : ['dom'] }
    ],
    shouldDeps : [
        { mod : 'disabled' },
        { block : 'jquery', elem : 'event', mods : { type : 'pointer' } },
        { block : 'keyboard', elem : 'codes' },
        'control',
        'events'
    ]
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'link' }
},
{
    tech : 'tmpl-spec.js',
    mustDeps : { tech : 'bemhtml', block : 'link', mods : { pseudo : true } }
}]
