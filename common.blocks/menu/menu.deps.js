[{
    mustDeps : { block : 'i-bem', elems : ['dom'] },
    shouldDeps : [
        'control',
        'menu-item',
        { block : 'keyboard', elem : 'codes' },
        { mods : { focused : true } },
        { elems : { elem : 'group', mods : { 'has-title' : true } } }
    ]
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'menu' }
}]
