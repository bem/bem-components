[{
    mustDeps : { block : 'i-bem', elems : 'dom' },
    shouldDeps : [
        { mods : { focused : true } },
        { elems : ['control', 'button', 'menu'] },
        { block : 'popup', mods : { autoclosable : true } },
        { block : 'keyboard', elem : 'codes' },
        { block : 'strings', elem : 'escape' }
    ]
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml' }
}]
