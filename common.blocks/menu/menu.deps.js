[{
    mustDeps : { block : 'i-bem-dom' },
    shouldDeps : [
        'control',
        { block : 'keyboard', elem : 'codes' },
        { mods : { focused : true } },
        { elem : ['item', 'group'] }
    ]
},
{
    tech : 'spec.js',
    shouldDeps : { tech : 'bemhtml', block : 'menu' }
},
{
    tech : 'tmpl-spec.js',
    shouldDeps : [
        { tech : 'bemhtml', block : 'link' },
        { tech : 'bemhtml', elem : 'item', mods : { type : 'link' } },
        { tech : 'bemhtml', block : 'menu', mods : { mode : 'radio' } },
        { tech : 'bemhtml', block : 'menu', elem : 'group' }
    ]
}]
