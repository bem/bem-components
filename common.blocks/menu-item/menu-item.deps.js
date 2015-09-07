[{
    mustDeps : { block : 'i-bem', elems : ['dom'] },
    shouldDeps : { block : 'jquery', elem : 'event', mods : { type : 'pointer' } }
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'menu-item' }
},
{
    tech : 'tmpl-spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'link' },
        {
            tech : 'bemhtml',
            block : 'menu-item',
            mods : { type : 'select-option' }
        }
    ]
}]
