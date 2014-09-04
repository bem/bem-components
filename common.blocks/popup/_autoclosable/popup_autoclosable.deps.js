[{
    shouldDeps : [
        { mods : { target : 'anchor' } }, // should be removed after bem-pr and enb-specs will fix depsByTech
        { block : 'jquery', elems : { elem : 'event', mods : { type : 'pointer' } } },
        { block : 'keyboard', elem : 'codes' },
        'ua',
        'dom'
    ]
},
{
    tech : 'spec.js',
    shouldDeps : { tech : 'js', mods : { target : 'anchor' } }
}]
